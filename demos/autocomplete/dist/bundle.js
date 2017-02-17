(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var EX = require("reactalike")('yo');
var Trie = require('./src/trie.js');
var WordList = require('./src/word_list.js');

var Autocomplete = new Trie(WordList);

var NameTag = EX.component({
  componentName: 'nametag',
  componentRender: function componentRender(props) {
    return EX.node('div', { class: "padd-center" }, EX.node('div', { class: "tag" }, EX.node('header', null, EX.node('div', { class: "hello" }, "HELLO")), EX.node('div', { class: "mynameis" }, "my name is"), EX.node('div', { class: "my-name-is" }, props.ex_person.name), EX.node('div', { class: "dottedline" })));
  }
});

var AppState = {
  suggestions: []
};
var searchType = function searchType(e, elem) {
  var typed = elem.value.toLowerCase().trim();
  EX.SetState({
    suggestions: Autocomplete.lookup(typed)
  });
};
var Layout = {
  state: AppState,
  render: function render() {
    var suggestions = Layout.state.suggestions;


    console.log('suggestions', suggestions);
    var movieSuggestions = suggestions.map(function (itm) {
      return EX.node('li', null, itm);
    });
    return EX.node('div', { class: "row" }, EX.node('div', { class: "col-sm-6 col-sm-offset-3" }, EX.node('div', { id: "imaginary_container" }, EX.node('div', { class: "input-group stylish-input-group" }, EX.node('input', { onKeyUp: searchType, type: "text", class: "form-control", placeholder: "Search" }), EX.node('span', { class: "input-group-addon" }, EX.node('button', { type: "submit" }, EX.node('span', { class: "glyphicon glyphicon-search" }))))), EX.node('ul', { id: "search_list" }, movieSuggestions)));
  }
};
EX.rootComponent = Layout;

EX.SetState = function () {
  return function (payload) {
    Layout.state = Object.assign({}, Layout.state, payload);
    EX.objectChange(Layout.render());
  };
}();

EX.createComponent(Layout.render(), document.getElementById('root'));

},{"./src/trie.js":2,"./src/word_list.js":3,"reactalike":4}],2:[function(require,module,exports){
'use strict';

function Trie(wordList) {
   var _this = this;

   function addCharToTrie(index, word, branch, trie) {
      if (index === word.length) return trie;
      var char = word[index];
      if (!branch[char]) {
         branch[char] = {
            word: null,
            action: null
         };
      }
      branch[char].word = word.length - 1 === index ? word : null;

      return addCharToTrie(index + 1, word, branch[char], trie);
   }
   function getBranch(charString, trie) {
      var branch = trie;
      for (var i = 0; i < charString.length; i++) {
         branch = branch[charString[i]];
         if (!branch) return null;
      }
      return branch;
   }
   this.findWords = function (branch, lookupId) {
      var self = _this;
      console.log(branch);
      var list = [];
      function mineWord(brn) {
         if (brn.word) {
            list.push(brn.word);
            if (list.length === self.wordLimit) return list;
         }
         for (var key in brn) {
            if (typeof brn[key] !== 'string' && brn[key] !== null && self.currentLoopup === lookupId) {
               mineWord(brn[key]);
            }
         }
         return list;
      }

      return mineWord(branch);
   };
   this.getWordList = function (charString) {
      var foundWords = [];
      if (!charString) return foundWords;
      var branch = getBranch(charString, _this.head);
      if (!branch) return foundWords;
      var lookupId = Math.random().toString(36).substring(18);
      _this.currentLoopup = lookupId;
      return _this.findWords(branch, lookupId);
   };

   this.words = wordList;
   this.head = wordList.reduce(function (tr, word) {
      var lw = word.toLowerCase();
      tr[lw[0]] = tr[lw[0]] ? tr[lw[0]] : {
         word: null,
         action: null
      };
      return addCharToTrie(1, lw, tr[lw[0]], tr);
   }, {});
   this.lookup = function (letters) {
      return _this.getWordList(letters.toLowerCase());
   };
}

module.exports = Trie;

},{}],3:[function(require,module,exports){
"use strict";

module.exports = ["The Breakfast Club", "Real Genius", "Sixteen Candles", "Weird Science", "Pretty in Pink", "Back to the Future", "Back to the Future Part II", "Star Wars: Episode V - The Empire Strikes Back", "Star Wars: Episode VI - Return of the Jedi", "Star Trek II: The Wrath of Khan", "Star Trek IV: The Voyage Home", "E.T. the Extra-Terrestrial", "Dirty Dancing", "Platoon", "The Princess Bride", "Raiders of the Lost Ark", "Indiana Jones and the Temple of Doom", "Indiana Jones and the Last Crusade", "The Terminator", "Who Framed Roger Rabbit", "When Harry Met Sally...", "Labyrinth", "Legend", "Bill & Ted's Excellent Adventure", "Top Gun", "Footloose", "Desperately Seeking Susan", "Poltergeist", "Poltergeist II: The Other Side", "Flashdance", "Ghostbusters", "Ghostbusters II", "Gremlins", "Superman II", "Splash", "Some Kind of Wonderful", "The Legend of Billie Jean", "Risky Business", "Working Girl", "Roxanne", "Ruthless People", "The Lost Boys", "Adventures in Babysitting", "Beetlejuice", "St. Elmo's Fire", "All the Right Moves", "Mannequin", "The Karate Kid", "The Karate Kid Part II", "Weekend at Bernie's", "The Untouchables", "Die Hard", "Raising Arizona", "The Last Emperor", "A Christmas Story", "Terms of Endearment", "The Little Mermaid", "The Fox and the Hound", "Glory", "A Fish Called Wanda", "Witness", "Field of Dreams", "Moonstruck", "Ferris Bueller's Day Off", "The Road Warrior", "Mad Max Beyond Thunderdome", "Stand by Me", "Above the Law", "The Abyss", "The Accused", "Akira", "An American Tail", "The NeverEnding Story", "The Secret of NIMH", "The Last Unicorn", "An American Werewolf in London", "Anne of Green Gables", "Annie", "The Fly", "The Fly II", "Armed and Dangerous", "Batman", "The Bay Boy", "Steel Magnolias", "Beaches", "Benji the Hunted", "Beverly Hills Cop", "Beverly Hills Cop II", "Big", "The Big Chill", "The Black Cauldron", "The Black Stallion Returns", "Bloodsport", "The Blue Lagoon", "Blue Thunder", "Born on the Fourth of July", "Big Trouble in Little China", "The 'Burbs", "Caddyshack", "The Care Bears Movie", "The Muppets Take Manhattan", "Firestarter", "Cat's Eye", "Chariots of Fire", "Children of the Corn", "Child's Play", "Cocktail", "Cocoon", "Cocoon: The Return", "*batteries not included", "The Color Purple", "Commando", "Communion", "Crocodile Dundee", "Crocodile Dundee II", "Crusoe", "Cujo", "Dangerous Liaisons", "The Dark Crystal", "D.A.R.Y.L.", "Police Academy", "Police Academy 2: Their First Assignment", "Police Academy 4: Citizens on Patrol", "Police Academy 6: City Under Siege", "Date with an Angel", "Dead Calm", "Deadly Friend", "The Dead Pool", "Dead Ringers", "The Dead Zone", "D.O.A.", "Dominick and Eugene", "Dragnet", "Troop Beverly Hills", "Dream a Little Dream", "Dreamscape", "The Dream Team", "Drugstore Cowboy", "Earth Girls Are Easy", "Enemy Mine", "Escape from New York", "Lethal Weapon", "Lethal Weapon 2", "Explorers", "Fatal Attraction", "Jumpin' Jack Flash", "The Flamingo Kid", "One Crazy Summer", "Stand and Deliver", "Lean on Me", "Flight of the Navigator", "Flowers in the Attic", "Ferris Bueller's Day Off", "Highlander", "48 Hrs.", "Frantic", "From the Hip", "F/X", "Blade Runner", "Raiders of the Lost Ark", "Gleaming the Cube", "Heathers", "The Golden Child", "Good Morning, Vietnam", "Ghostbusters", "Gremlins", "The Great Outdoors", "Planes, Trains & Automobiles", "Throw Momma from the Train", "Greystoke: The Legend of Tarzan, Lord of the Apes", "Altered States", "The Rescue", "Hannah and Her Sisters", "Harry and the Hendersons", "Heavy Metal", "Her Alibi", "Hiding Out", "Honey, I Shrunk the Kids", "Hoosiers", "The Wizard", "The Name of the Rose", "The Journey of Natty Gann", "Twins", "Kickboxer", "K-9", "La Bamba", "Ladyhawke", "Lady in White", "The Land Before Time", "The Last Starfighter", "Legal Eagles", "Less Than Zero", "Little Shop of Horrors", "Look Who's Talking", "Lucas", "Major League", "The Man from Snowy River", "Return to Snowy River", "The Manhattan Project", "Married to the Mob", "Mask", "Maximum Overdrive", "Midnight Run", "Mississippi Burning", "The Money Pit", "Monkey Shines", "Moscow on the Hudson", "Moving", "Music Box", "My Science Project", "My Stepmother Is an Alien", "Mystic Pizza", "The Naked Gun: From the Files of Police Squad!", "National Lampoon's Vacation", "National Lampoon's European Vacation", "National Lampoon's Christmas Vacation", "Never Cry Wolf", "Next of Kin", "9½ Weeks", "The Big Easy", "9 to 5", "The Outsiders", "Rumble Fish", "Overboard", "Peggy Sue Got Married", "Phar Lap", "Pet Sematary", "The Philadelphia Experiment", "Pink Floyd: The Wall", "Predator", "The Presidio", "Private Benjamin", "Project X", "Quest for Fire", "Raging Bull", "Rain Man", "Red Dawn", "Red Heat", "Renegades", "Aliens", "Robocop", "Revenge of the Nerds", "Revenge of the Nerds II: Nerds in Paradise", "River's Edge", "Rock & Rule", "Romancing the Stone", "The Jewel of the Nile", "The Running Man", "Running on Empty", "Little Nikita", "Russkies", "Say Anything...", "Scanners", "Scrooged", "The Serpent and the Rainbow", "The Seventh Sign", "Short Circuit", "Sid and Nancy"];

},{}],4:[function(require,module,exports){
'use strict';

module.exports = require('./src/ex.js');

},{"./src/ex.js":7}],5:[function(require,module,exports){
module.exports = (self, createElem) => {
   let re = new RegExp(/^ex_/i)

   function removeProp(element, attr) {
      if (!self.events[attr] && !re.test(attr)) {
         element.removeAttribute(attr);
      }
   };

   function changeProp(element, attr, val) {
      if (!self.events[attr] && !re.test(attr) || attr === 'src') {
         element.setAttribute(attr, val);
      }
   };

   function updateProp(element, name, newVal, oldVal) {
      if (!newVal) {
         removeProp(element, name);
         return
      } else if (!oldVal || newVal !== oldVal) {
         changeProp(element, name, newVal);
      }
   };

   function updateProps(element, newProps, oldProps = {}) {
      const props = Object.assign({}, oldProps, newProps);
      for (var name in props) {
         updateProp(element, name, newProps[name], oldProps[name]);
      };
   };

   function changed(node1, node2) {
      return typeof node1 !== typeof node2 || typeof node1 === 'string' && node1 !== node2 || node1.type !== node2.type
   };

   function checkForEvents(node) {
      if (node.props.ex_eventFuncName) {
         node.domElement.removeEventListener(node.props.ex_attachedFunc, node.props.ex_eventFuncName);
      }
   };

   function updateElement(parent, newNode, oldNode, index = 0) {
      if ((typeof newNode === 'string' || typeof newNode === 'number') || (typeof oldNode === 'string' || typeof oldNode === 'number')) {
         let vdomid = parent.props.trace + '.' + index;
         if (changed(newNode, oldNode)) {
            parent.domElement.replaceChild(createElem(newNode, vdomid, parent.trace), parent.domElement.childNodes[index]);
         }

         return
      };

      if (!oldNode) {
         let vdomid = parent.props.trace + '.' + index;
         newNode.domElement = createElem(newNode, vdomid, parent.trace);
         parent.domElement.appendChild(newNode.domElement);
         return
      };
      if (!newNode) {
         checkForEvents(oldNode);
         parent.domElement.removeChild(oldNode.domElement);
         return
      };
      if (changed(newNode, oldNode)) {

         let vdomid = parent.props.trace + '.' + index;
         newNode.domElement = createElem(newNode, vdomid, newNode.parent);
         let repl = typeof oldNode === 'string' ? parent.domElement.children[index] : oldNode.domElement;
         parent.domElement.replaceChild(newNode.domElement, repl);

         return
      };
      if (newNode.type) {

         newNode.domElement = oldNode.domElement ? oldNode.domElement : createElem(newNode, newNode.trace, newNode.parent);

         updateProps(newNode.domElement, newNode.props, oldNode.props);

         const newLength = newNode.nested ? newNode.nested.length : 0;

         if (typeof oldNode === 'string' || typeof oldNode === 'number') {
            for (let i = 0; i < newLength; i++) {
               updateElement(newNode, newNode.nested[i], null, i);
            }
            return updateElement;
         };
         oldNode.nested = oldNode.nested ? oldNode.nested : [];
         const oldLength = oldNode.nested.length;

         for (let i = 0; i < newLength || i < oldLength; i++) {
            updateElement(oldNode, newNode.nested[i], oldNode.nested[i], i);
         }
      }
   };
   return updateElement;
};

},{}],6:[function(require,module,exports){
const Eventlist = require("./lib/eventlist.js");

function extractEventName(name) {
  return name.slice(2).toLowerCase();
};
let videoEvents = {
  onLoadedData: {},
  onLoadedMetadata: {},
  onLoadStart: {},
  onPause: {},
  onPlay: {},
  onPlaying: {},
  onProgress: {},
  onRateChange: {},
  onSeeked: {},
  onSeeking: {},
  onWaiting: {},
  onLoad: {}
};

let formEvents = {
  onChange: {},
  onFocus: {},
  onBlur: {},
  onSelect: {},
  onSearch: {}
};

module.exports = Eventlist.reduce((ob, itm) => {
  ob[itm] = {
    registered: false,
    eventName: extractEventName(itm),
    eventNS: itm,
    mediaEvent: videoEvents[itm] !== undefined,
    formEvent: formEvents[itm] !== undefined
  };
  return ob;
}, {});
},{"./lib/eventlist.js":8}],7:[function(require,module,exports){
const events = require("./events.js");
const setDiff = require("./diffing.js");
const handyHelpers = require("./lib/handy_funcs.js");
const smoothNested = handyHelpers.smoothArray();
const formTags = {
  textarea: true,
  select: true,
  input: true,
  output: true,
  form: true
}

function NodeMap(appTitle = 'default') {
  this.appTitle = appTitle;
  this.domComponents = {};
  this.rootComponent = null;
  this.appRootDom = {
    domElement: null,
    nested: []
  };
  this.appRoot = null;
  this.mountedCallbacks = [];
  this.events = events;

  this.createUdid = () => {
    return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
  };

  this.randomFuncId = () => {
    return 'func' + Math.random().toString(36).substring(18);
  };

  this.getElement = (domElement) => {
    if (domElement instanceof HTMLElement) {
      this.appRoot = domElement;
      this.appRootDom.domElement = domElement;
      return true;
    }
    let elem = document.querySelector(domElement);
    if (elem) {
      this.appRoot = elem;
      this.appRootDom.domElement = domElement;
      return true;
    }
    console.error("Element: " + domElement + " not found");
    return false;
  };
  this.setListener = (listener, type) => {
    let self = this;
    this.appRoot.addEventListener(listener, (e) => {
      self.lookUpRegistry(e.target, type, e);
    });

  };

  this.setListenerEl = (eventOb, cb, node) => {
    let self = this;
    let evnName = eventOb.eventNS;
    node.props.ex_eventFuncName = this.randomFuncId();
    node.props.ex_attachedFunc = evnName;
    console.log('node', node);
    this.events[evnName][node.props.ex_eventFuncName] = (e) => {
      node.props[evnName](e, node.domElement, node);
    };
    node.domElement.addEventListener(eventOb.eventName, this.events[evnName][node.props.ex_eventFuncName]);

  };

  this.applyListener = (listener, node) => {
    let eventInfo = this.events[listener];
    let onSelf = eventInfo.formEvent || eventInfo.mediaEvent || formTags[node.type];
    if (!eventInfo.registered && !onSelf) {
      eventInfo.registered = true;
      this.setListener(eventInfo.eventName, listener);
      return
    }
    if (onSelf && !node.props.ex_eventFuncName) {
      this.setListenerEl(eventInfo, listener, node)
    }
  };

  this.lookUpRegistry = (target, eventName, e) => {
    let tgTrace = target.getAttribute('trace');
    let traceArray = tgTrace.split('.');
    console.log('traceArray', traceArray);
    let vDom = this.domComponents;
    console.log('vDom', vDom);
    traceArray.shift()
    traceArray.map((itm, i) => {
      if (!vDom.nested) {
        return false;
      }
      let nest = vDom.nested[itm];
      vDom = nest;
      return nest;
    }).reverse().forEach((itm, ii) => {
      if (itm) {
        let hasAction = itm.props[eventName];
        if (hasAction) {
          hasAction(e)
        }
      }
    })

  };

  this.WhenMounted = (afterMountCB) => {
    this.mountedCallbacks.push(afterMountCB);
  };

  this.objectChange = (newRender) => {
    let newOb = this.rerender(newRender, 'Root');
    console.log('newRender', newOb);
    this.updateElement(this.domComponents, newOb)
    this.mountedCallbacks.forEach((cb) => {
      cb();
    });
    this.mountedCallbacks = [];
  };

  this.createComponent = (obj, containerElement) => {

    if (this.getElement(containerElement)) {
      obj.domElement = this.appRoot;
      this.mountApp(obj);
    };
  };

  this.viewObjects = () => {
    console.log('appRootDom', this.appRootDom);
    console.log('domBranches', this.domComponents);
    console.log('this.events', this.events);

  };

  this.mountApp = (obj) => {
    this.domComponents = obj;
    this.appRootDom.nested.push(this.domComponents);
    this.appRoot.appendChild(this.htmlBuild(obj, "Root"));
  };


  let self = this;
  let re = new RegExp(/^ex_/i)
  let isSVG = new RegExp(/(circle|clipPath|defs|ellipse|g|image|line|linearGradient|mask|path|pattern|polygon|polyline|radialGradient|rect|stop|svg|text|tspan)/i);
  this.createElement = function createElement(name, attrs) {
    var element = document.createElement(String(name));
    if (!attrs) return element;

    for (var attr in attrs) {
      if (!self.events[attr] && !re.test(attr) ) {
        element.setAttribute(attr, attrs[attr]);
      }
    }
    return element;
  };

  this.createElementNS = function createElementNS(name, attrs) {
     var element = document.createElementNS('http://www.w3.org/2000/svg', name);

     if (!attrs) return element;

     for (var attr in attrs) {
        if (!self.events[attr] && !re.test(attr) ) {
            element.setAttribute(attr, attrs[attr]);
        }
     }
     return element;
  };

  const createElem = (node, group, parent) => {

    if (typeof node === 'string' || typeof node === 'number' || (typeof node !== "object" && node !== null && node !== undefined)) {

      return document.createTextNode(node);
    }
    node.props = Object.assign({}, node.props, {
      trace: group,
      parent: parent
    });

    const el = isSVG.test(node.type) ? self.createElementNS(node.type, node.props) : self.createElement(node.type, node.props);
    node.domElement = el;
    for (var prop in node.props) {
      if (self.events[prop]) {
        self.applyListener(prop, node);
      }
    };

    node.nested = node.nested ? node.nested : [];
    if (node.nested.length === 0) {
      return el;
    }
    node.nested
      .map((elm, ii) => {
        let elmId = group + '.' + ii;
        return createElem(elm, elmId, group);
      }).forEach(el.appendChild.bind(el));
    return el;

  };

  const reRenderElem = (node, group, parent) => {
    if (typeof node === 'string' || typeof node === 'number' || (typeof node !== "object" && node !== null && node !== undefined)) {
      return node;
    }

    node.nested = node.nested ? node.nested : [];
    node.props = Object.assign({}, node.props, {
      trace: group,
      parent: parent
    })
    node.nested
      .map((elm, ii) => {
        let elmId = group + '.' + ii;
        return reRenderElem(elm, elmId, group);
      });
    return node;

  };

  this.htmlBuild = (node, group) => {
    return createElem(node, group, 'Root');
  };

  this.rerender = (node, group) => {
    return reRenderElem(node, group, 'Root');
  };

  this.diffElements = setDiff(self, createElem);

  this.updateElement = (oldNode, newNode) => {
    this.diffElements(this.appRootDom, newNode, oldNode);
    this.domComponents = Object.assign({}, oldNode, newNode);
  }

  this.SetState = (data) => {
    console.log('not yet set');
  }

};

NodeMap.prototype.component = (obj) => {
  if (!(obj instanceof Array) && obj instanceof Object) {
    if (!obj["componentName"] || !obj["componentRender"]) {
      console.error("Object must have a branchName and branchObject");
      return false;
    }

    obj.vdomId = '@' + obj.componentName;
    return (opts) => {

      return obj.componentRender(opts);
    }
  }
};

NodeMap.prototype.node = (type, props = {}, ...nested) => {
  if (typeof type === "function") {
    return type(props);
  }
  if (nested) {
    nested = smoothNested(nested);
  } else {
    nested = []
  }

  return {
    type,
    props,
    nested
  };
};

module.exports = function(appName){
 if(!appName) return new NodeMap('example');

 return new NodeMap(appName);
}

},{"./diffing.js":5,"./events.js":6,"./lib/handy_funcs.js":9}],8:[function(require,module,exports){
module.exports = [
"onCopy",
"onCut", 
"onPaste", 
"onKeyDown", 
"onKeyPress", 
"onKeyUp",
"onFocus", 
"onBlur", 
"onChange", 
"onInput",
"onSubmit",
"onClick", 
"onContextMenu",
"onDoubleClick",
"onDrag",
"onDragEnd", 
"onDragEnter", 
"onDragExit", 
"onDragLeave",
"onDragOver", 
"onDragStart", 
"onDrop",
"onMouseDown",
"onMouseEnter", 
"onMouseLeave",
"onMouseMove", 
"onMouseOut", 
"onMouseOver",
"onMouseUp", 
"onSelect", 
"onScroll", 
"onAbort",
"onCanPlay", 
"onCanPlayThrough", 
"onDurationChange",
"onEmptied",
"onEnded", 
"onError",
"onLoadedData", 
"onLoadedMetadata", 
"onLoadStart", 
"onPause", 
"onPlay",
"onPlaying",
"onProgress",
"onRateChange",
"onSeeked", 
"onSeeking", 
"onWaiting",
"onLoad", 
"onError",
"onAnimationStart",
"onAnimationEnd", 
"onAnimationIteration", 
"onTransitionEnd"
]
},{}],9:[function(require,module,exports){
const flatten = (a, b) => {
   return a.concat(Array.isArray(b) ? b.reduce(flatten, []) : b);
}

function flattenIteration (arr, flatArr) {
	flatArr = flatArr || [];
	
	var length  = arr.length|0;
	
	for (var index = 0; index < length; index = index + 1){
		var item = arr[index];
		item.constructor === Array ? flattenIteration(item, flatArr) : flatArr[flatArr.length] = item;
	}
	
	return flatArr;
}
module.exports = {
   smoothArray: () => {
      return (nested) => {  
        // if( Array.isArray(nested) ) return [];
        
        return nested.reduce(flatten, []).filter((ne) => ne !== null && ne !== undefined );
      }
   },
   flatten: (nested) => {
   		return nested.reduce(flatten, []);
   },
   capitalize:  (string) => {
   	  return string.charAt(0).toUpperCase() + string.slice(1);
   }
}
},{}]},{},[1]);
