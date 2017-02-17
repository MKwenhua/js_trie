/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ["The Breakfast Club", "Real Genius", "Sixteen Candles", "Weird Science", "Pretty in Pink", "Back to the Future", "Back to the Future Part II", "Star Wars: Episode V - The Empire Strikes Back", "Star Wars: Episode VI - Return of the Jedi", "Star Trek II: The Wrath of Khan", "Star Trek IV: The Voyage Home", "E.T. the Extra-Terrestrial", "Dirty Dancing", "Platoon", "The Princess Bride", "Raiders of the Lost Ark", "Indiana Jones and the Temple of Doom", "Indiana Jones and the Last Crusade", "The Terminator", "Who Framed Roger Rabbit", "When Harry Met Sally...", "Labyrinth", "Legend", "Bill & Ted's Excellent Adventure", "Top Gun", "Footloose", "Desperately Seeking Susan", "Poltergeist", "Poltergeist II: The Other Side", "Flashdance", "Ghostbusters", "Ghostbusters II", "Gremlins", "Superman II", "Splash", "Some Kind of Wonderful", "The Legend of Billie Jean", "Risky Business", "Working Girl", "Roxanne", "Ruthless People", "The Lost Boys", "Adventures in Babysitting", "Beetlejuice", "St. Elmo's Fire", "All the Right Moves", "Mannequin", "The Karate Kid", "The Karate Kid Part II", "Weekend at Bernie's", "The Untouchables", "Die Hard", "Raising Arizona", "The Last Emperor", "A Christmas Story", "Terms of Endearment", "The Little Mermaid", "The Fox and the Hound", "Glory", "A Fish Called Wanda", "Witness", "Field of Dreams", "Moonstruck", "Ferris Bueller's Day Off", "The Road Warrior", "Mad Max Beyond Thunderdome", "Stand by Me", "Above the Law", "The Abyss", "The Accused", "Akira", "An American Tail", "The NeverEnding Story", "The Secret of NIMH", "The Last Unicorn", "An American Werewolf in London", "Anne of Green Gables", "Annie", "The Fly", "The Fly II", "Armed and Dangerous", "Batman", "The Bay Boy", "Steel Magnolias", "Beaches", "Benji the Hunted", "Beverly Hills Cop", "Beverly Hills Cop II", "Big", "The Big Chill", "The Black Cauldron", "The Black Stallion Returns", "Bloodsport", "The Blue Lagoon", "Blue Thunder", "Born on the Fourth of July", "Big Trouble in Little China", "The 'Burbs", "Caddyshack", "The Care Bears Movie", "The Muppets Take Manhattan", "Firestarter", "Cat's Eye", "Chariots of Fire", "Children of the Corn", "Child's Play", "Cocktail", "Cocoon", "Cocoon: The Return", "*batteries not included", "The Color Purple", "Commando", "Communion", "Crocodile Dundee", "Crocodile Dundee II", "Crusoe", "Cujo", "Dangerous Liaisons", "The Dark Crystal", "D.A.R.Y.L.", "Police Academy", "Police Academy 2: Their First Assignment", "Police Academy 4: Citizens on Patrol", "Police Academy 6: City Under Siege", "Date with an Angel", "Dead Calm", "Deadly Friend", "The Dead Pool", "Dead Ringers", "The Dead Zone", "D.O.A.", "Dominick and Eugene", "Dragnet", "Troop Beverly Hills", "Dream a Little Dream", "Dreamscape", "The Dream Team", "Drugstore Cowboy", "Earth Girls Are Easy", "Enemy Mine", "Escape from New York", "Lethal Weapon", "Lethal Weapon 2", "Explorers", "Fatal Attraction", "Jumpin' Jack Flash", "The Flamingo Kid", "One Crazy Summer", "Stand and Deliver", "Lean on Me", "Flight of the Navigator", "Flowers in the Attic", "Ferris Bueller's Day Off", "Highlander", "48 Hrs.", "Frantic", "From the Hip", "F/X", "Blade Runner", "Raiders of the Lost Ark", "Gleaming the Cube", "Heathers", "The Golden Child", "Good Morning, Vietnam", "Ghostbusters", "Gremlins", "The Great Outdoors", "Planes, Trains & Automobiles", "Throw Momma from the Train", "Greystoke: The Legend of Tarzan, Lord of the Apes", "Altered States", "The Rescue", "Hannah and Her Sisters", "Harry and the Hendersons", "Heavy Metal", "Her Alibi", "Hiding Out", "Honey, I Shrunk the Kids", "Hoosiers", "The Wizard", "The Name of the Rose", "The Journey of Natty Gann", "Twins", "Kickboxer", "K-9", "La Bamba", "Ladyhawke", "Lady in White", "The Land Before Time", "The Last Starfighter", "Legal Eagles", "Less Than Zero", "Little Shop of Horrors", "Look Who's Talking", "Lucas", "Major League", "The Man from Snowy River", "Return to Snowy River", "The Manhattan Project", "Married to the Mob", "Mask", "Maximum Overdrive", "Midnight Run", "Mississippi Burning", "The Money Pit", "Monkey Shines", "Moscow on the Hudson", "Moving", "Music Box", "My Science Project", "My Stepmother Is an Alien", "Mystic Pizza", "The Naked Gun: From the Files of Police Squad!", "National Lampoon's Vacation", "National Lampoon's European Vacation", "National Lampoon's Christmas Vacation", "Never Cry Wolf", "Next of Kin", "9½ Weeks", "The Big Easy", "9 to 5", "The Outsiders", "Rumble Fish", "Overboard", "Peggy Sue Got Married", "Phar Lap", "Pet Sematary", "The Philadelphia Experiment", "Pink Floyd: The Wall", "Predator", "The Presidio", "Private Benjamin", "Project X", "Quest for Fire", "Raging Bull", "Rain Man", "Red Dawn", "Red Heat", "Renegades", "Aliens", "Robocop", "Revenge of the Nerds", "Revenge of the Nerds II: Nerds in Paradise", "River's Edge", "Rock & Rule", "Romancing the Stone", "The Jewel of the Nile", "The Running Man", "Running on Empty", "Little Nikita", "Russkies", "Say Anything...", "Scanners", "Scrooged", "The Serpent and the Rainbow", "The Seventh Sign", "Short Circuit", "Sid and Nancy"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(5);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Eventlist = __webpack_require__(6);

function extractEventName(name) {
  return name.slice(2).toLowerCase();
};
var videoEvents = {
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

var formEvents = {
  onChange: {},
  onFocus: {},
  onBlur: {},
  onSelect: {},
  onSearch: {}
};

module.exports = Eventlist.reduce(function (ob, itm) {
  ob[itm] = {
    registered: false,
    eventName: extractEventName(itm),
    eventNS: itm,
    mediaEvent: videoEvents[itm] !== undefined,
    formEvent: formEvents[itm] !== undefined
  };
  return ob;
}, {});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var events = __webpack_require__(4);
var setDiff = __webpack_require__(3);
var handyHelpers = __webpack_require__(7);
var smoothNested = handyHelpers.smoothArray();
var formTags = {
  textarea: true,
  select: true,
  input: true,
  output: true,
  form: true
};

function NodeMap() {
  var _this = this;

  var appTitle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

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

  this.createUdid = function () {
    return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
  };

  this.randomFuncId = function () {
    return 'func' + Math.random().toString(36).substring(18);
  };

  this.getElement = function (domElement) {
    if (domElement instanceof HTMLElement) {
      _this.appRoot = domElement;
      _this.appRootDom.domElement = domElement;
      return true;
    }
    var elem = document.querySelector(domElement);
    if (elem) {
      _this.appRoot = elem;
      _this.appRootDom.domElement = domElement;
      return true;
    }
    console.error("Element: " + domElement + " not found");
    return false;
  };
  this.setListener = function (listener, type) {
    var self = _this;
    _this.appRoot.addEventListener(listener, function (e) {
      self.lookUpRegistry(e.target, type, e);
    });
  };

  this.setListenerEl = function (eventOb, cb, node) {
    var self = _this;
    var evnName = eventOb.eventNS;
    node.props.ex_eventFuncName = _this.randomFuncId();
    node.props.ex_attachedFunc = evnName;
    console.log('node', node);
    _this.events[evnName][node.props.ex_eventFuncName] = function (e) {
      node.props[evnName](e, node.domElement, node);
    };
    node.domElement.addEventListener(eventOb.eventName, _this.events[evnName][node.props.ex_eventFuncName]);
  };

  this.applyListener = function (listener, node) {
    var eventInfo = _this.events[listener];
    var onSelf = eventInfo.formEvent || eventInfo.mediaEvent || formTags[node.type];
    if (!eventInfo.registered && !onSelf) {
      eventInfo.registered = true;
      _this.setListener(eventInfo.eventName, listener);
      return;
    }
    if (onSelf && !node.props.ex_eventFuncName) {
      _this.setListenerEl(eventInfo, listener, node);
    }
  };

  this.lookUpRegistry = function (target, eventName, e) {
    var tgTrace = target.getAttribute('trace');
    var traceArray = tgTrace.split('.');
    console.log('traceArray', traceArray);
    var vDom = _this.domComponents;
    console.log('vDom', vDom);
    traceArray.shift();
    traceArray.map(function (itm, i) {
      if (!vDom.nested) {
        return false;
      }
      var nest = vDom.nested[itm];
      vDom = nest;
      return nest;
    }).reverse().forEach(function (itm, ii) {
      if (itm) {
        var hasAction = itm.props[eventName];
        if (hasAction) {
          hasAction(e);
        }
      }
    });
  };

  this.WhenMounted = function (afterMountCB) {
    _this.mountedCallbacks.push(afterMountCB);
  };

  this.objectChange = function (newRender) {
    var newOb = _this.rerender(newRender, 'Root');
    console.log('newRender', newOb);
    _this.updateElement(_this.domComponents, newOb);
    _this.mountedCallbacks.forEach(function (cb) {
      cb();
    });
    _this.mountedCallbacks = [];
  };

  this.createComponent = function (obj, containerElement) {

    if (_this.getElement(containerElement)) {
      obj.domElement = _this.appRoot;
      _this.mountApp(obj);
    };
  };

  this.viewObjects = function () {
    console.log('appRootDom', _this.appRootDom);
    console.log('domBranches', _this.domComponents);
    console.log('this.events', _this.events);
  };

  this.mountApp = function (obj) {
    _this.domComponents = obj;
    _this.appRootDom.nested.push(_this.domComponents);
    _this.appRoot.appendChild(_this.htmlBuild(obj, "Root"));
  };

  var self = this;
  var re = new RegExp(/^ex_/i);
  var isSVG = new RegExp(/(circle|clipPath|defs|ellipse|g|image|line|linearGradient|mask|path|pattern|polygon|polyline|radialGradient|rect|stop|svg|text|tspan)/i);
  this.createElement = function createElement(name, attrs) {
    var element = document.createElement(String(name));
    if (!attrs) return element;

    for (var attr in attrs) {
      if (!self.events[attr] && !re.test(attr)) {
        element.setAttribute(attr, attrs[attr]);
      }
    }
    return element;
  };

  this.createElementNS = function createElementNS(name, attrs) {
    var element = document.createElementNS('http://www.w3.org/2000/svg', name);

    if (!attrs) return element;

    for (var attr in attrs) {
      if (!self.events[attr] && !re.test(attr)) {
        element.setAttribute(attr, attrs[attr]);
      }
    }
    return element;
  };

  var createElem = function createElem(node, group, parent) {

    if (typeof node === 'string' || typeof node === 'number' || (typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object" && node !== null && node !== undefined) {

      return document.createTextNode(node);
    }
    node.props = Object.assign({}, node.props, {
      trace: group,
      parent: parent
    });

    var el = isSVG.test(node.type) ? self.createElementNS(node.type, node.props) : self.createElement(node.type, node.props);
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
    node.nested.map(function (elm, ii) {
      var elmId = group + '.' + ii;
      return createElem(elm, elmId, group);
    }).forEach(el.appendChild.bind(el));
    return el;
  };

  var reRenderElem = function reRenderElem(node, group, parent) {
    if (typeof node === 'string' || typeof node === 'number' || (typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object" && node !== null && node !== undefined) {
      return node;
    }

    node.nested = node.nested ? node.nested : [];
    node.props = Object.assign({}, node.props, {
      trace: group,
      parent: parent
    });
    node.nested.map(function (elm, ii) {
      var elmId = group + '.' + ii;
      return reRenderElem(elm, elmId, group);
    });
    return node;
  };

  this.htmlBuild = function (node, group) {
    return createElem(node, group, 'Root');
  };

  this.rerender = function (node, group) {
    return reRenderElem(node, group, 'Root');
  };

  this.diffElements = setDiff(self, createElem);

  this.updateElement = function (oldNode, newNode) {
    _this.diffElements(_this.appRootDom, newNode, oldNode);
    _this.domComponents = Object.assign({}, oldNode, newNode);
  };

  this.SetState = function (data) {
    console.log('not yet set');
  };
};

NodeMap.prototype.component = function (obj) {
  if (!(obj instanceof Array) && obj instanceof Object) {
    if (!obj["componentName"] || !obj["componentRender"]) {
      console.error("Object must have a branchName and branchObject");
      return false;
    }

    obj.vdomId = '@' + obj.componentName;
    return function (opts) {

      return obj.componentRender(opts);
    };
  }
};

NodeMap.prototype.node = function (type) {
  for (var _len = arguments.length, nested = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    nested[_key - 2] = arguments[_key];
  }

  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof type === "function") {
    return type(props);
  }
  if (nested) {
    nested = smoothNested(nested);
  } else {
    nested = [];
  }

  return {
    type: type,
    props: props,
    nested: nested
  };
};

module.exports = function (appName) {
  if (!appName) return new NodeMap('example');

  return new NodeMap(appName);
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _flatten = function _flatten(a, b) {
   return a.concat(Array.isArray(b) ? b.reduce(_flatten, []) : b);
};

function flattenIteration(arr, flatArr) {
   flatArr = flatArr || [];

   var length = arr.length | 0;

   for (var index = 0; index < length; index = index + 1) {
      var item = arr[index];
      item.constructor === Array ? flattenIteration(item, flatArr) : flatArr[flatArr.length] = item;
   }

   return flatArr;
}
module.exports = {
   smoothArray: function smoothArray() {
      return function (nested) {
         // if( Array.isArray(nested) ) return [];

         return nested.reduce(_flatten, []).filter(function (ne) {
            return ne !== null && ne !== undefined;
         });
      };
   },
   flatten: function flatten(nested) {
      return nested.reduce(_flatten, []);
   },
   capitalize: function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EX = __webpack_require__(2)('autocomplete');
var Trie = __webpack_require__(0);
var WordList = __webpack_require__(1);

var Autocomplete = new Trie(WordList);

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


    var movieSuggestions = suggestions.map(function (itm) {
      return EX.node(
        'li',
        null,
        itm
      );
    });
    return EX.node(
      'div',
      { 'class': 'row' },
      EX.node(
        'div',
        { 'class': 'col-sm-6 col-sm-offset-3' },
        EX.node(
          'div',
          { id: 'imaginary_container' },
          EX.node(
            'div',
            { 'class': 'input-group stylish-input-group' },
            EX.node('input', { onKeyUp: searchType, type: 'text', 'class': 'form-control', placeholder: 'Search' }),
            EX.node(
              'span',
              { 'class': 'input-group-addon' },
              EX.node(
                'button',
                { type: 'submit' },
                EX.node('span', { 'class': 'glyphicon glyphicon-search' })
              )
            )
          )
        ),
        EX.node(
          'ul',
          { id: 'search_list' },
          movieSuggestions
        )
      )
    );
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjU3YmZiZGEwZWY2YzZlOGYyMWIiLCJ3ZWJwYWNrOi8vLy4vZGVtb3MvYXV0b2NvbXBsZXRlL3NyYy90cmllLmpzIiwid2VicGFjazovLy8uL2RlbW9zL2F1dG9jb21wbGV0ZS9zcmMvd29yZF9saXN0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3RhbGlrZS9yZWFjdGFsaWtlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3RhbGlrZS9zcmMvZGlmZmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0YWxpa2Uvc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0YWxpa2Uvc3JjL2V4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3RhbGlrZS9zcmMvbGliL2V2ZW50bGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0YWxpa2Uvc3JjL2xpYi9oYW5keV9mdW5jcy5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vcy9hdXRvY29tcGxldGUvbWFpbi5qcyJdLCJuYW1lcyI6WyJUcmllIiwid29yZExpc3QiLCJhZGRDaGFyVG9UcmllIiwiaW5kZXgiLCJ3b3JkIiwiYnJhbmNoIiwidHJpZSIsImxlbmd0aCIsImNoYXIiLCJhY3Rpb24iLCJnZXRCcmFuY2giLCJjaGFyU3RyaW5nIiwiaSIsImZpbmRXb3JkcyIsImxvb2t1cElkIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJsaXN0IiwibWluZVdvcmQiLCJicm4iLCJwdXNoIiwid29yZExpbWl0Iiwia2V5IiwiY3VycmVudExvb3B1cCIsImdldFdvcmRMaXN0IiwiZm91bmRXb3JkcyIsImhlYWQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJ3b3JkcyIsInJlZHVjZSIsInRyIiwibHciLCJ0b0xvd2VyQ2FzZSIsImxvb2t1cCIsImxldHRlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwiRVgiLCJyZXF1aXJlIiwiV29yZExpc3QiLCJBdXRvY29tcGxldGUiLCJBcHBTdGF0ZSIsInN1Z2dlc3Rpb25zIiwic2VhcmNoVHlwZSIsImUiLCJlbGVtIiwidHlwZWQiLCJ2YWx1ZSIsInRyaW0iLCJTZXRTdGF0ZSIsIkxheW91dCIsInN0YXRlIiwicmVuZGVyIiwibW92aWVTdWdnZXN0aW9ucyIsIm1hcCIsIml0bSIsInJvb3RDb21wb25lbnQiLCJwYXlsb2FkIiwiT2JqZWN0IiwiYXNzaWduIiwib2JqZWN0Q2hhbmdlIiwiY3JlYXRlQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNoRUEsU0FBU0EsSUFBVCxDQUFjQyxRQUFkLEVBQXdCO0FBQUE7O0FBQ3JCLFlBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCQyxJQUE5QixFQUFvQ0MsTUFBcEMsRUFBNENDLElBQTVDLEVBQWtEO0FBQy9DLFVBQUlILFVBQVVDLEtBQUtHLE1BQW5CLEVBQ0csT0FBT0QsSUFBUDtBQUNILFVBQUlFLE9BQU9KLEtBQUtELEtBQUwsQ0FBWDtBQUNBLFVBQUksQ0FBQ0UsT0FBT0csSUFBUCxDQUFMLEVBQW1CO0FBQ2hCSCxnQkFBT0csSUFBUCxJQUFlO0FBQ1pKLGtCQUFNLElBRE07QUFFWkssb0JBQVE7QUFG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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7OztBQzFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3hEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7OztBQ2xDQSxJQUFNQyxLQUFLLG1CQUFBQyxDQUFRLENBQVIsRUFBc0IsY0FBdEIsQ0FBWDtBQUNBLElBQU0xQyxPQUFPLG1CQUFBMEMsQ0FBUSxDQUFSLENBQWI7QUFDQSxJQUFNQyxXQUFXLG1CQUFBRCxDQUFRLENBQVIsQ0FBakI7O0FBRUEsSUFBTUUsZUFBZSxJQUFJNUMsSUFBSixDQUFTMkMsUUFBVCxDQUFyQjs7QUFFQSxJQUFJRSxXQUFXO0FBQ2RDLGVBQWE7QUFEQyxDQUFmOztBQUlBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQUlDLElBQUosRUFBYTtBQUMvQixNQUFJQyxRQUFRRCxLQUFLRSxLQUFMLENBQVdmLFdBQVgsR0FBeUJnQixJQUF6QixFQUFaO0FBQ0dYLEtBQUdZLFFBQUgsQ0FBWTtBQUNaUCxpQkFBYUYsYUFBYVAsTUFBYixDQUFvQmEsS0FBcEI7QUFERCxHQUFaO0FBR0gsQ0FMRDtBQU1BLElBQU1JLFNBQVM7QUFDYkMsU0FBT1YsUUFETTtBQUViVyxVQUFRLGtCQUFNO0FBQUEsUUFFVlYsV0FGVSxHQUdSUSxPQUFPQyxLQUhDLENBRVZULFdBRlU7OztBQUtaLFFBQUlXLG1CQUFtQlgsWUFBWVksR0FBWixDQUFnQixVQUFDQyxHQUFELEVBQVM7QUFDL0MsYUFBTztBQUFBO0FBQUE7QUFBS0E7QUFBTCxPQUFQO0FBQ0EsS0FGc0IsQ0FBdkI7QUFHQSxXQUNIO0FBQUE7QUFBQSxRQUFLLFNBQU0sS0FBWDtBQUNPO0FBQUE7QUFBQSxVQUFPLFNBQU0sMEJBQWI7QUFDSTtBQUFBO0FBQUEsWUFBSyxJQUFHLHFCQUFSO0FBQ0k7QUFBQTtBQUFBLGNBQUssU0FBTSxpQ0FBWDtBQUNJLCtCQUFRLFNBQVNaLFVBQWpCLEVBQTZCLE1BQUssTUFBbEMsRUFBeUMsU0FBTSxjQUEvQyxFQUErRCxhQUFZLFFBQTNFLEdBREo7QUFFSTtBQUFBO0FBQUEsZ0JBQU0sU0FBTSxtQkFBWjtBQUNJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLFFBQWI7QUFDSSxrQ0FBTSxTQUFNLDRCQUFaO0FBREo7QUFESjtBQUZKO0FBREosU0FESjtBQVdJO0FBQUE7QUFBQSxZQUFJLElBQUcsYUFBUDtBQUNDVTtBQUREO0FBWEo7QUFEUCxLQURHO0FBbUJEO0FBN0JZLENBQWY7QUErQkFoQixHQUFHbUIsYUFBSCxHQUFtQk4sTUFBbkI7O0FBRUFiLEdBQUdZLFFBQUgsR0FBZSxZQUFNO0FBQ25CLFNBQU8sVUFBQ1EsT0FBRCxFQUFhO0FBQ2xCUCxXQUFPQyxLQUFQLEdBQWVPLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCVCxPQUFPQyxLQUF6QixFQUFnQ00sT0FBaEMsQ0FBZjtBQUNBcEIsT0FBR3VCLFlBQUgsQ0FBZ0JWLE9BQU9FLE1BQVAsRUFBaEI7QUFDRCxHQUhEO0FBSUQsQ0FMYSxFQUFkOztBQU9BZixHQUFHd0IsZUFBSCxDQUNFWCxPQUFPRSxNQUFQLEVBREYsRUFDbUJVLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FEbkIsRSIsImZpbGUiOiIuL2RlbW9zL2F1dG9jb21wbGV0ZS9kaXN0L2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY1N2JmYmRhMGVmNmM2ZThmMjFiIiwiZnVuY3Rpb24gVHJpZSh3b3JkTGlzdCkge1xuICAgZnVuY3Rpb24gYWRkQ2hhclRvVHJpZShpbmRleCwgd29yZCwgYnJhbmNoLCB0cmllKSB7XG4gICAgICBpZiAoaW5kZXggPT09IHdvcmQubGVuZ3RoKVxuICAgICAgICAgcmV0dXJuIHRyaWU7XG4gICAgICB2YXIgY2hhciA9IHdvcmRbaW5kZXhdO1xuICAgICAgaWYgKCFicmFuY2hbY2hhcl0pIHtcbiAgICAgICAgIGJyYW5jaFtjaGFyXSA9IHtcbiAgICAgICAgICAgIHdvcmQ6IG51bGwsXG4gICAgICAgICAgICBhY3Rpb246IG51bGxcbiAgICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmFuY2hbY2hhcl0ud29yZCA9ICh3b3JkLmxlbmd0aCAtIDEpID09PSBpbmRleCA/IHdvcmQgOiBudWxsO1xuXG4gICAgICByZXR1cm4gYWRkQ2hhclRvVHJpZShpbmRleCArIDEsIHdvcmQsIGJyYW5jaFtjaGFyXSwgdHJpZSlcbiAgIH1cbiAgIGZ1bmN0aW9uIGdldEJyYW5jaChjaGFyU3RyaW5nLCB0cmllKSB7XG4gICAgICB2YXIgYnJhbmNoID0gdHJpZTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhclN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgYnJhbmNoID0gYnJhbmNoW2NoYXJTdHJpbmdbaV1dO1xuICAgICAgICAgaWYgKCFicmFuY2gpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgIH1cbiAgICAgIHJldHVybiBicmFuY2g7XG4gICB9XG4gICB0aGlzLmZpbmRXb3JkcyA9IChicmFuY2gsIGxvb2t1cElkKSA9PiB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhicmFuY2gpXG4gICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgZnVuY3Rpb24gbWluZVdvcmQoYnJuKSB7XG4gICAgICAgICBpZiAoYnJuLndvcmQpIHtcbiAgICAgICAgICAgIGxpc3QucHVzaChicm4ud29yZCk7XG4gICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IHNlbGYud29yZExpbWl0KVxuICAgICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICBmb3IgKGxldCBrZXkgaW4gYnJuKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGJybltrZXldICE9PSAnc3RyaW5nJyAmJiBicm5ba2V5XSAhPT0gbnVsbCAmJiBzZWxmLmN1cnJlbnRMb29wdXAgPT09IGxvb2t1cElkKSB7XG4gICAgICAgICAgICAgICBtaW5lV29yZChicm5ba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWluZVdvcmQoYnJhbmNoKTtcbiAgIH1cbiAgIHRoaXMuZ2V0V29yZExpc3QgPSAoY2hhclN0cmluZykgPT4ge1xuICAgICAgdmFyIGZvdW5kV29yZHMgPSBbXTtcbiAgICAgIGlmKCFjaGFyU3RyaW5nKSByZXR1cm4gZm91bmRXb3JkcztcbiAgICAgIHZhciBicmFuY2ggPSBnZXRCcmFuY2goY2hhclN0cmluZywgdGhpcy5oZWFkKTtcbiAgICAgIGlmICghYnJhbmNoKVxuICAgICAgICAgcmV0dXJuIGZvdW5kV29yZHM7XG4gICAgICB2YXIgbG9va3VwSWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTgpO1xuICAgICAgdGhpcy5jdXJyZW50TG9vcHVwID0gbG9va3VwSWQ7XG4gICAgICByZXR1cm4gdGhpcy5maW5kV29yZHMoYnJhbmNoLCBsb29rdXBJZCk7XG5cbiAgIH1cblxuICAgdGhpcy53b3JkcyA9IHdvcmRMaXN0O1xuICAgdGhpcy5oZWFkID0gd29yZExpc3QucmVkdWNlKCh0ciwgd29yZCkgPT4ge1xuICAgICAgdmFyIGx3ID0gd29yZC50b0xvd2VyQ2FzZSgpXG4gICAgICB0cltsd1swXV0gPSB0cltsd1swXV0gPyB0cltsd1swXV0gOiB7XG4gICAgICAgICB3b3JkOiBudWxsLFxuICAgICAgICAgYWN0aW9uOiBudWxsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGFkZENoYXJUb1RyaWUoMSwgbHcsIHRyW2x3WzBdXSwgdHIpO1xuICAgfSwge30pO1xuICAgdGhpcy5sb29rdXAgPSAobGV0dGVycykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0V29yZExpc3QobGV0dGVycy50b0xvd2VyQ2FzZSgpKVxuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyaWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtb3MvYXV0b2NvbXBsZXRlL3NyYy90cmllLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBbXG4gICBcIlRoZSBCcmVha2Zhc3QgQ2x1YlwiLFxuICAgXCJSZWFsIEdlbml1c1wiLFxuICAgXCJTaXh0ZWVuIENhbmRsZXNcIixcbiAgIFwiV2VpcmQgU2NpZW5jZVwiLFxuICAgXCJQcmV0dHkgaW4gUGlua1wiLFxuICAgXCJCYWNrIHRvIHRoZSBGdXR1cmVcIixcbiAgIFwiQmFjayB0byB0aGUgRnV0dXJlIFBhcnQgSUlcIixcbiAgIFwiU3RhciBXYXJzOiBFcGlzb2RlIFYgLSBUaGUgRW1waXJlIFN0cmlrZXMgQmFja1wiLFxuICAgXCJTdGFyIFdhcnM6IEVwaXNvZGUgVkkgLSBSZXR1cm4gb2YgdGhlIEplZGlcIixcbiAgIFwiU3RhciBUcmVrIElJOiBUaGUgV3JhdGggb2YgS2hhblwiLFxuICAgXCJTdGFyIFRyZWsgSVY6IFRoZSBWb3lhZ2UgSG9tZVwiLFxuICAgXCJFLlQuIHRoZSBFeHRyYS1UZXJyZXN0cmlhbFwiLFxuICAgXCJEaXJ0eSBEYW5jaW5nXCIsXG4gICBcIlBsYXRvb25cIixcbiAgIFwiVGhlIFByaW5jZXNzIEJyaWRlXCIsXG4gICBcIlJhaWRlcnMgb2YgdGhlIExvc3QgQXJrXCIsXG4gICBcIkluZGlhbmEgSm9uZXMgYW5kIHRoZSBUZW1wbGUgb2YgRG9vbVwiLFxuICAgXCJJbmRpYW5hIEpvbmVzIGFuZCB0aGUgTGFzdCBDcnVzYWRlXCIsXG4gICBcIlRoZSBUZXJtaW5hdG9yXCIsXG4gICBcIldobyBGcmFtZWQgUm9nZXIgUmFiYml0XCIsXG4gICBcIldoZW4gSGFycnkgTWV0IFNhbGx5Li4uXCIsXG4gICBcIkxhYnlyaW50aFwiLFxuICAgXCJMZWdlbmRcIixcbiAgIFwiQmlsbCAmIFRlZCdzIEV4Y2VsbGVudCBBZHZlbnR1cmVcIixcbiAgIFwiVG9wIEd1blwiLFxuICAgXCJGb290bG9vc2VcIixcbiAgIFwiRGVzcGVyYXRlbHkgU2Vla2luZyBTdXNhblwiLFxuICAgXCJQb2x0ZXJnZWlzdFwiLFxuICAgXCJQb2x0ZXJnZWlzdCBJSTogVGhlIE90aGVyIFNpZGVcIixcbiAgIFwiRmxhc2hkYW5jZVwiLFxuICAgXCJHaG9zdGJ1c3RlcnNcIixcbiAgIFwiR2hvc3RidXN0ZXJzIElJXCIsXG4gICBcIkdyZW1saW5zXCIsXG4gICBcIlN1cGVybWFuIElJXCIsXG4gICBcIlNwbGFzaFwiLFxuICAgXCJTb21lIEtpbmQgb2YgV29uZGVyZnVsXCIsXG4gICBcIlRoZSBMZWdlbmQgb2YgQmlsbGllIEplYW5cIixcbiAgIFwiUmlza3kgQnVzaW5lc3NcIixcbiAgIFwiV29ya2luZyBHaXJsXCIsXG4gICBcIlJveGFubmVcIixcbiAgIFwiUnV0aGxlc3MgUGVvcGxlXCIsXG4gICBcIlRoZSBMb3N0IEJveXNcIixcbiAgIFwiQWR2ZW50dXJlcyBpbiBCYWJ5c2l0dGluZ1wiLFxuICAgXCJCZWV0bGVqdWljZVwiLFxuICAgXCJTdC4gRWxtbydzIEZpcmVcIixcbiAgIFwiQWxsIHRoZSBSaWdodCBNb3Zlc1wiLFxuICAgXCJNYW5uZXF1aW5cIixcbiAgIFwiVGhlIEthcmF0ZSBLaWRcIixcbiAgIFwiVGhlIEthcmF0ZSBLaWQgUGFydCBJSVwiLFxuICAgXCJXZWVrZW5kIGF0IEJlcm5pZSdzXCIsXG4gICBcIlRoZSBVbnRvdWNoYWJsZXNcIixcbiAgIFwiRGllIEhhcmRcIixcbiAgIFwiUmFpc2luZyBBcml6b25hXCIsXG4gICBcIlRoZSBMYXN0IEVtcGVyb3JcIixcbiAgIFwiQSBDaHJpc3RtYXMgU3RvcnlcIixcbiAgIFwiVGVybXMgb2YgRW5kZWFybWVudFwiLFxuICAgXCJUaGUgTGl0dGxlIE1lcm1haWRcIixcbiAgIFwiVGhlIEZveCBhbmQgdGhlIEhvdW5kXCIsXG4gICBcIkdsb3J5XCIsXG4gICBcIkEgRmlzaCBDYWxsZWQgV2FuZGFcIixcbiAgIFwiV2l0bmVzc1wiLFxuICAgXCJGaWVsZCBvZiBEcmVhbXNcIixcbiAgIFwiTW9vbnN0cnVja1wiLFxuICAgXCJGZXJyaXMgQnVlbGxlcidzIERheSBPZmZcIixcbiAgIFwiVGhlIFJvYWQgV2FycmlvclwiLFxuICAgXCJNYWQgTWF4IEJleW9uZCBUaHVuZGVyZG9tZVwiLFxuICAgXCJTdGFuZCBieSBNZVwiLFxuICAgXCJBYm92ZSB0aGUgTGF3XCIsXG4gICBcIlRoZSBBYnlzc1wiLFxuICAgXCJUaGUgQWNjdXNlZFwiLFxuICAgXCJBa2lyYVwiLFxuICAgXCJBbiBBbWVyaWNhbiBUYWlsXCIsXG4gICBcIlRoZSBOZXZlckVuZGluZyBTdG9yeVwiLFxuICAgXCJUaGUgU2VjcmV0IG9mIE5JTUhcIixcbiAgIFwiVGhlIExhc3QgVW5pY29yblwiLFxuICAgXCJBbiBBbWVyaWNhbiBXZXJld29sZiBpbiBMb25kb25cIixcbiAgIFwiQW5uZSBvZiBHcmVlbiBHYWJsZXNcIixcbiAgIFwiQW5uaWVcIixcbiAgIFwiVGhlIEZseVwiLFxuICAgXCJUaGUgRmx5IElJXCIsXG4gICBcIkFybWVkIGFuZCBEYW5nZXJvdXNcIixcbiAgIFwiQmF0bWFuXCIsXG4gICBcIlRoZSBCYXkgQm95XCIsXG4gICBcIlN0ZWVsIE1hZ25vbGlhc1wiLFxuICAgXCJCZWFjaGVzXCIsXG4gICBcIkJlbmppIHRoZSBIdW50ZWRcIixcbiAgIFwiQmV2ZXJseSBIaWxscyBDb3BcIixcbiAgIFwiQmV2ZXJseSBIaWxscyBDb3AgSUlcIixcbiAgIFwiQmlnXCIsXG4gICBcIlRoZSBCaWcgQ2hpbGxcIixcbiAgIFwiVGhlIEJsYWNrIENhdWxkcm9uXCIsXG4gICBcIlRoZSBCbGFjayBTdGFsbGlvbiBSZXR1cm5zXCIsXG4gICBcIkJsb29kc3BvcnRcIixcbiAgIFwiVGhlIEJsdWUgTGFnb29uXCIsXG4gICBcIkJsdWUgVGh1bmRlclwiLFxuICAgXCJCb3JuIG9uIHRoZSBGb3VydGggb2YgSnVseVwiLFxuICAgXCJCaWcgVHJvdWJsZSBpbiBMaXR0bGUgQ2hpbmFcIixcbiAgIFwiVGhlICdCdXJic1wiLFxuICAgXCJDYWRkeXNoYWNrXCIsXG4gICBcIlRoZSBDYXJlIEJlYXJzIE1vdmllXCIsXG4gICBcIlRoZSBNdXBwZXRzIFRha2UgTWFuaGF0dGFuXCIsXG4gICBcIkZpcmVzdGFydGVyXCIsXG4gICBcIkNhdCdzIEV5ZVwiLFxuICAgXCJDaGFyaW90cyBvZiBGaXJlXCIsXG4gICBcIkNoaWxkcmVuIG9mIHRoZSBDb3JuXCIsXG4gICBcIkNoaWxkJ3MgUGxheVwiLFxuICAgXCJDb2NrdGFpbFwiLFxuICAgXCJDb2Nvb25cIixcbiAgIFwiQ29jb29uOiBUaGUgUmV0dXJuXCIsXG4gICBcIipiYXR0ZXJpZXMgbm90IGluY2x1ZGVkXCIsXG4gICBcIlRoZSBDb2xvciBQdXJwbGVcIixcbiAgIFwiQ29tbWFuZG9cIixcbiAgIFwiQ29tbXVuaW9uXCIsXG4gICBcIkNyb2NvZGlsZSBEdW5kZWVcIixcbiAgIFwiQ3JvY29kaWxlIER1bmRlZSBJSVwiLFxuICAgXCJDcnVzb2VcIixcbiAgIFwiQ3Vqb1wiLFxuICAgXCJEYW5nZXJvdXMgTGlhaXNvbnNcIixcbiAgIFwiVGhlIERhcmsgQ3J5c3RhbFwiLFxuICAgXCJELkEuUi5ZLkwuXCIsXG4gICBcIlBvbGljZSBBY2FkZW15XCIsXG4gICBcIlBvbGljZSBBY2FkZW15IDI6IFRoZWlyIEZpcnN0IEFzc2lnbm1lbnRcIixcbiAgIFwiUG9saWNlIEFjYWRlbXkgNDogQ2l0aXplbnMgb24gUGF0cm9sXCIsXG4gICBcIlBvbGljZSBBY2FkZW15IDY6IENpdHkgVW5kZXIgU2llZ2VcIixcbiAgIFwiRGF0ZSB3aXRoIGFuIEFuZ2VsXCIsXG4gICBcIkRlYWQgQ2FsbVwiLFxuICAgXCJEZWFkbHkgRnJpZW5kXCIsXG4gICBcIlRoZSBEZWFkIFBvb2xcIixcbiAgIFwiRGVhZCBSaW5nZXJzXCIsXG4gICBcIlRoZSBEZWFkIFpvbmVcIixcbiAgIFwiRC5PLkEuXCIsXG4gICBcIkRvbWluaWNrIGFuZCBFdWdlbmVcIixcbiAgIFwiRHJhZ25ldFwiLFxuICAgXCJUcm9vcCBCZXZlcmx5IEhpbGxzXCIsXG4gICBcIkRyZWFtIGEgTGl0dGxlIERyZWFtXCIsXG4gICBcIkRyZWFtc2NhcGVcIixcbiAgIFwiVGhlIERyZWFtIFRlYW1cIixcbiAgIFwiRHJ1Z3N0b3JlIENvd2JveVwiLFxuICAgXCJFYXJ0aCBHaXJscyBBcmUgRWFzeVwiLFxuICAgXCJFbmVteSBNaW5lXCIsXG4gICBcIkVzY2FwZSBmcm9tIE5ldyBZb3JrXCIsXG4gICBcIkxldGhhbCBXZWFwb25cIixcbiAgIFwiTGV0aGFsIFdlYXBvbiAyXCIsXG4gICBcIkV4cGxvcmVyc1wiLFxuICAgXCJGYXRhbCBBdHRyYWN0aW9uXCIsXG4gICBcIkp1bXBpbicgSmFjayBGbGFzaFwiLFxuICAgXCJUaGUgRmxhbWluZ28gS2lkXCIsXG4gICBcIk9uZSBDcmF6eSBTdW1tZXJcIixcbiAgIFwiU3RhbmQgYW5kIERlbGl2ZXJcIixcbiAgIFwiTGVhbiBvbiBNZVwiLFxuICAgXCJGbGlnaHQgb2YgdGhlIE5hdmlnYXRvclwiLFxuICAgXCJGbG93ZXJzIGluIHRoZSBBdHRpY1wiLFxuICAgXCJGZXJyaXMgQnVlbGxlcidzIERheSBPZmZcIixcbiAgIFwiSGlnaGxhbmRlclwiLFxuICAgXCI0OCBIcnMuXCIsXG4gICBcIkZyYW50aWNcIixcbiAgIFwiRnJvbSB0aGUgSGlwXCIsXG4gICBcIkYvWFwiLFxuICAgXCJCbGFkZSBSdW5uZXJcIixcbiAgIFwiUmFpZGVycyBvZiB0aGUgTG9zdCBBcmtcIixcbiAgIFwiR2xlYW1pbmcgdGhlIEN1YmVcIixcbiAgIFwiSGVhdGhlcnNcIixcbiAgIFwiVGhlIEdvbGRlbiBDaGlsZFwiLFxuICAgXCJHb29kIE1vcm5pbmcsIFZpZXRuYW1cIixcbiAgIFwiR2hvc3RidXN0ZXJzXCIsXG4gICBcIkdyZW1saW5zXCIsXG4gICBcIlRoZSBHcmVhdCBPdXRkb29yc1wiLFxuICAgXCJQbGFuZXMsIFRyYWlucyAmIEF1dG9tb2JpbGVzXCIsXG4gICBcIlRocm93IE1vbW1hIGZyb20gdGhlIFRyYWluXCIsXG4gICBcIkdyZXlzdG9rZTogVGhlIExlZ2VuZCBvZiBUYXJ6YW4sIExvcmQgb2YgdGhlIEFwZXNcIixcbiAgIFwiQWx0ZXJlZCBTdGF0ZXNcIixcbiAgIFwiVGhlIFJlc2N1ZVwiLFxuICAgXCJIYW5uYWggYW5kIEhlciBTaXN0ZXJzXCIsXG4gICBcIkhhcnJ5IGFuZCB0aGUgSGVuZGVyc29uc1wiLFxuICAgXCJIZWF2eSBNZXRhbFwiLFxuICAgXCJIZXIgQWxpYmlcIixcbiAgIFwiSGlkaW5nIE91dFwiLFxuICAgXCJIb25leSwgSSBTaHJ1bmsgdGhlIEtpZHNcIixcbiAgIFwiSG9vc2llcnNcIixcbiAgIFwiVGhlIFdpemFyZFwiLFxuICAgXCJUaGUgTmFtZSBvZiB0aGUgUm9zZVwiLFxuICAgXCJUaGUgSm91cm5leSBvZiBOYXR0eSBHYW5uXCIsXG4gICBcIlR3aW5zXCIsXG4gICBcIktpY2tib3hlclwiLFxuICAgXCJLLTlcIixcbiAgIFwiTGEgQmFtYmFcIixcbiAgIFwiTGFkeWhhd2tlXCIsXG4gICBcIkxhZHkgaW4gV2hpdGVcIixcbiAgIFwiVGhlIExhbmQgQmVmb3JlIFRpbWVcIixcbiAgIFwiVGhlIExhc3QgU3RhcmZpZ2h0ZXJcIixcbiAgIFwiTGVnYWwgRWFnbGVzXCIsXG4gICBcIkxlc3MgVGhhbiBaZXJvXCIsXG4gICBcIkxpdHRsZSBTaG9wIG9mIEhvcnJvcnNcIixcbiAgIFwiTG9vayBXaG8ncyBUYWxraW5nXCIsXG4gICBcIkx1Y2FzXCIsXG4gICBcIk1ham9yIExlYWd1ZVwiLFxuICAgXCJUaGUgTWFuIGZyb20gU25vd3kgUml2ZXJcIixcbiAgIFwiUmV0dXJuIHRvIFNub3d5IFJpdmVyXCIsXG4gICBcIlRoZSBNYW5oYXR0YW4gUHJvamVjdFwiLFxuICAgXCJNYXJyaWVkIHRvIHRoZSBNb2JcIixcbiAgIFwiTWFza1wiLFxuICAgXCJNYXhpbXVtIE92ZXJkcml2ZVwiLFxuICAgXCJNaWRuaWdodCBSdW5cIixcbiAgIFwiTWlzc2lzc2lwcGkgQnVybmluZ1wiLFxuICAgXCJUaGUgTW9uZXkgUGl0XCIsXG4gICBcIk1vbmtleSBTaGluZXNcIixcbiAgIFwiTW9zY293IG9uIHRoZSBIdWRzb25cIixcbiAgIFwiTW92aW5nXCIsXG4gICBcIk11c2ljIEJveFwiLFxuICAgXCJNeSBTY2llbmNlIFByb2plY3RcIixcbiAgIFwiTXkgU3RlcG1vdGhlciBJcyBhbiBBbGllblwiLFxuICAgXCJNeXN0aWMgUGl6emFcIixcbiAgIFwiVGhlIE5ha2VkIEd1bjogRnJvbSB0aGUgRmlsZXMgb2YgUG9saWNlIFNxdWFkIVwiLFxuICAgXCJOYXRpb25hbCBMYW1wb29uJ3MgVmFjYXRpb25cIixcbiAgIFwiTmF0aW9uYWwgTGFtcG9vbidzIEV1cm9wZWFuIFZhY2F0aW9uXCIsXG4gICBcIk5hdGlvbmFsIExhbXBvb24ncyBDaHJpc3RtYXMgVmFjYXRpb25cIixcbiAgIFwiTmV2ZXIgQ3J5IFdvbGZcIixcbiAgIFwiTmV4dCBvZiBLaW5cIixcbiAgIFwiOcK9IFdlZWtzXCIsXG4gICBcIlRoZSBCaWcgRWFzeVwiLFxuICAgXCI5IHRvIDVcIixcbiAgIFwiVGhlIE91dHNpZGVyc1wiLFxuICAgXCJSdW1ibGUgRmlzaFwiLFxuICAgXCJPdmVyYm9hcmRcIixcbiAgIFwiUGVnZ3kgU3VlIEdvdCBNYXJyaWVkXCIsXG4gICBcIlBoYXIgTGFwXCIsXG4gICBcIlBldCBTZW1hdGFyeVwiLFxuICAgXCJUaGUgUGhpbGFkZWxwaGlhIEV4cGVyaW1lbnRcIixcbiAgIFwiUGluayBGbG95ZDogVGhlIFdhbGxcIixcbiAgIFwiUHJlZGF0b3JcIixcbiAgIFwiVGhlIFByZXNpZGlvXCIsXG4gICBcIlByaXZhdGUgQmVuamFtaW5cIixcbiAgIFwiUHJvamVjdCBYXCIsXG4gICBcIlF1ZXN0IGZvciBGaXJlXCIsXG4gICBcIlJhZ2luZyBCdWxsXCIsXG4gICBcIlJhaW4gTWFuXCIsXG4gICBcIlJlZCBEYXduXCIsXG4gICBcIlJlZCBIZWF0XCIsXG4gICBcIlJlbmVnYWRlc1wiLFxuICAgXCJBbGllbnNcIixcbiAgIFwiUm9ib2NvcFwiLFxuICAgXCJSZXZlbmdlIG9mIHRoZSBOZXJkc1wiLFxuICAgXCJSZXZlbmdlIG9mIHRoZSBOZXJkcyBJSTogTmVyZHMgaW4gUGFyYWRpc2VcIixcbiAgIFwiUml2ZXIncyBFZGdlXCIsXG4gICBcIlJvY2sgJiBSdWxlXCIsXG4gICBcIlJvbWFuY2luZyB0aGUgU3RvbmVcIixcbiAgIFwiVGhlIEpld2VsIG9mIHRoZSBOaWxlXCIsXG4gICBcIlRoZSBSdW5uaW5nIE1hblwiLFxuICAgXCJSdW5uaW5nIG9uIEVtcHR5XCIsXG4gICBcIkxpdHRsZSBOaWtpdGFcIixcbiAgIFwiUnVzc2tpZXNcIixcbiAgIFwiU2F5IEFueXRoaW5nLi4uXCIsXG4gICBcIlNjYW5uZXJzXCIsXG4gICBcIlNjcm9vZ2VkXCIsXG4gICBcIlRoZSBTZXJwZW50IGFuZCB0aGUgUmFpbmJvd1wiLFxuICAgXCJUaGUgU2V2ZW50aCBTaWduXCIsXG4gICBcIlNob3J0IENpcmN1aXRcIixcbiAgIFwiU2lkIGFuZCBOYW5jeVwiXG5dXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtb3MvYXV0b2NvbXBsZXRlL3NyYy93b3JkX2xpc3QuanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMvZXguanMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdGFsaWtlL3JlYWN0YWxpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoc2VsZiwgY3JlYXRlRWxlbSkgPT4ge1xuICAgbGV0IHJlID0gbmV3IFJlZ0V4cCgvXmV4Xy9pKVxuXG4gICBmdW5jdGlvbiByZW1vdmVQcm9wKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgIGlmICghc2VsZi5ldmVudHNbYXR0cl0gJiYgIXJlLnRlc3QoYXR0cikpIHtcbiAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgfVxuICAgfTtcblxuICAgZnVuY3Rpb24gY2hhbmdlUHJvcChlbGVtZW50LCBhdHRyLCB2YWwpIHtcbiAgICAgIGlmICghc2VsZi5ldmVudHNbYXR0cl0gJiYgIXJlLnRlc3QoYXR0cikgfHwgYXR0ciA9PT0gJ3NyYycpIHtcbiAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gICAgICB9XG4gICB9O1xuXG4gICBmdW5jdGlvbiB1cGRhdGVQcm9wKGVsZW1lbnQsIG5hbWUsIG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgICAgcmVtb3ZlUHJvcChlbGVtZW50LCBuYW1lKTtcbiAgICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIGlmICghb2xkVmFsIHx8IG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG4gICAgICAgICBjaGFuZ2VQcm9wKGVsZW1lbnQsIG5hbWUsIG5ld1ZhbCk7XG4gICAgICB9XG4gICB9O1xuXG4gICBmdW5jdGlvbiB1cGRhdGVQcm9wcyhlbGVtZW50LCBuZXdQcm9wcywgb2xkUHJvcHMgPSB7fSkge1xuICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBvbGRQcm9wcywgbmV3UHJvcHMpO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBwcm9wcykge1xuICAgICAgICAgdXBkYXRlUHJvcChlbGVtZW50LCBuYW1lLCBuZXdQcm9wc1tuYW1lXSwgb2xkUHJvcHNbbmFtZV0pO1xuICAgICAgfTtcbiAgIH07XG5cbiAgIGZ1bmN0aW9uIGNoYW5nZWQobm9kZTEsIG5vZGUyKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG5vZGUxICE9PSB0eXBlb2Ygbm9kZTIgfHwgdHlwZW9mIG5vZGUxID09PSAnc3RyaW5nJyAmJiBub2RlMSAhPT0gbm9kZTIgfHwgbm9kZTEudHlwZSAhPT0gbm9kZTIudHlwZVxuICAgfTtcblxuICAgZnVuY3Rpb24gY2hlY2tGb3JFdmVudHMobm9kZSkge1xuICAgICAgaWYgKG5vZGUucHJvcHMuZXhfZXZlbnRGdW5jTmFtZSkge1xuICAgICAgICAgbm9kZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZS5wcm9wcy5leF9hdHRhY2hlZEZ1bmMsIG5vZGUucHJvcHMuZXhfZXZlbnRGdW5jTmFtZSk7XG4gICAgICB9XG4gICB9O1xuXG4gICBmdW5jdGlvbiB1cGRhdGVFbGVtZW50KHBhcmVudCwgbmV3Tm9kZSwgb2xkTm9kZSwgaW5kZXggPSAwKSB7XG4gICAgICBpZiAoKHR5cGVvZiBuZXdOb2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbmV3Tm9kZSA9PT0gJ251bWJlcicpIHx8ICh0eXBlb2Ygb2xkTm9kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG9sZE5vZGUgPT09ICdudW1iZXInKSkge1xuICAgICAgICAgbGV0IHZkb21pZCA9IHBhcmVudC5wcm9wcy50cmFjZSArICcuJyArIGluZGV4O1xuICAgICAgICAgaWYgKGNoYW5nZWQobmV3Tm9kZSwgb2xkTm9kZSkpIHtcbiAgICAgICAgICAgIHBhcmVudC5kb21FbGVtZW50LnJlcGxhY2VDaGlsZChjcmVhdGVFbGVtKG5ld05vZGUsIHZkb21pZCwgcGFyZW50LnRyYWNlKSwgcGFyZW50LmRvbUVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICAgfVxuXG4gICAgICAgICByZXR1cm5cbiAgICAgIH07XG5cbiAgICAgIGlmICghb2xkTm9kZSkge1xuICAgICAgICAgbGV0IHZkb21pZCA9IHBhcmVudC5wcm9wcy50cmFjZSArICcuJyArIGluZGV4O1xuICAgICAgICAgbmV3Tm9kZS5kb21FbGVtZW50ID0gY3JlYXRlRWxlbShuZXdOb2RlLCB2ZG9taWQsIHBhcmVudC50cmFjZSk7XG4gICAgICAgICBwYXJlbnQuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChuZXdOb2RlLmRvbUVsZW1lbnQpO1xuICAgICAgICAgcmV0dXJuXG4gICAgICB9O1xuICAgICAgaWYgKCFuZXdOb2RlKSB7XG4gICAgICAgICBjaGVja0ZvckV2ZW50cyhvbGROb2RlKTtcbiAgICAgICAgIHBhcmVudC5kb21FbGVtZW50LnJlbW92ZUNoaWxkKG9sZE5vZGUuZG9tRWxlbWVudCk7XG4gICAgICAgICByZXR1cm5cbiAgICAgIH07XG4gICAgICBpZiAoY2hhbmdlZChuZXdOb2RlLCBvbGROb2RlKSkge1xuXG4gICAgICAgICBsZXQgdmRvbWlkID0gcGFyZW50LnByb3BzLnRyYWNlICsgJy4nICsgaW5kZXg7XG4gICAgICAgICBuZXdOb2RlLmRvbUVsZW1lbnQgPSBjcmVhdGVFbGVtKG5ld05vZGUsIHZkb21pZCwgbmV3Tm9kZS5wYXJlbnQpO1xuICAgICAgICAgbGV0IHJlcGwgPSB0eXBlb2Ygb2xkTm9kZSA9PT0gJ3N0cmluZycgPyBwYXJlbnQuZG9tRWxlbWVudC5jaGlsZHJlbltpbmRleF0gOiBvbGROb2RlLmRvbUVsZW1lbnQ7XG4gICAgICAgICBwYXJlbnQuZG9tRWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3Tm9kZS5kb21FbGVtZW50LCByZXBsKTtcblxuICAgICAgICAgcmV0dXJuXG4gICAgICB9O1xuICAgICAgaWYgKG5ld05vZGUudHlwZSkge1xuXG4gICAgICAgICBuZXdOb2RlLmRvbUVsZW1lbnQgPSBvbGROb2RlLmRvbUVsZW1lbnQgPyBvbGROb2RlLmRvbUVsZW1lbnQgOiBjcmVhdGVFbGVtKG5ld05vZGUsIG5ld05vZGUudHJhY2UsIG5ld05vZGUucGFyZW50KTtcblxuICAgICAgICAgdXBkYXRlUHJvcHMobmV3Tm9kZS5kb21FbGVtZW50LCBuZXdOb2RlLnByb3BzLCBvbGROb2RlLnByb3BzKTtcblxuICAgICAgICAgY29uc3QgbmV3TGVuZ3RoID0gbmV3Tm9kZS5uZXN0ZWQgPyBuZXdOb2RlLm5lc3RlZC5sZW5ndGggOiAwO1xuXG4gICAgICAgICBpZiAodHlwZW9mIG9sZE5vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvbGROb2RlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgdXBkYXRlRWxlbWVudChuZXdOb2RlLCBuZXdOb2RlLm5lc3RlZFtpXSwgbnVsbCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlRWxlbWVudDtcbiAgICAgICAgIH07XG4gICAgICAgICBvbGROb2RlLm5lc3RlZCA9IG9sZE5vZGUubmVzdGVkID8gb2xkTm9kZS5uZXN0ZWQgOiBbXTtcbiAgICAgICAgIGNvbnN0IG9sZExlbmd0aCA9IG9sZE5vZGUubmVzdGVkLmxlbmd0aDtcblxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdMZW5ndGggfHwgaSA8IG9sZExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB1cGRhdGVFbGVtZW50KG9sZE5vZGUsIG5ld05vZGUubmVzdGVkW2ldLCBvbGROb2RlLm5lc3RlZFtpXSwgaSk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9O1xuICAgcmV0dXJuIHVwZGF0ZUVsZW1lbnQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0YWxpa2Uvc3JjL2RpZmZpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBFdmVudGxpc3QgPSByZXF1aXJlKFwiLi9saWIvZXZlbnRsaXN0LmpzXCIpO1xuXG5mdW5jdGlvbiBleHRyYWN0RXZlbnROYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUuc2xpY2UoMikudG9Mb3dlckNhc2UoKTtcbn07XG52YXIgdmlkZW9FdmVudHMgPSB7XG4gIG9uTG9hZGVkRGF0YToge30sXG4gIG9uTG9hZGVkTWV0YWRhdGE6IHt9LFxuICBvbkxvYWRTdGFydDoge30sXG4gIG9uUGF1c2U6IHt9LFxuICBvblBsYXk6IHt9LFxuICBvblBsYXlpbmc6IHt9LFxuICBvblByb2dyZXNzOiB7fSxcbiAgb25SYXRlQ2hhbmdlOiB7fSxcbiAgb25TZWVrZWQ6IHt9LFxuICBvblNlZWtpbmc6IHt9LFxuICBvbldhaXRpbmc6IHt9LFxuICBvbkxvYWQ6IHt9XG59O1xuXG52YXIgZm9ybUV2ZW50cyA9IHtcbiAgb25DaGFuZ2U6IHt9LFxuICBvbkZvY3VzOiB7fSxcbiAgb25CbHVyOiB7fSxcbiAgb25TZWxlY3Q6IHt9LFxuICBvblNlYXJjaDoge31cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRsaXN0LnJlZHVjZShmdW5jdGlvbiAob2IsIGl0bSkge1xuICBvYltpdG1dID0ge1xuICAgIHJlZ2lzdGVyZWQ6IGZhbHNlLFxuICAgIGV2ZW50TmFtZTogZXh0cmFjdEV2ZW50TmFtZShpdG0pLFxuICAgIGV2ZW50TlM6IGl0bSxcbiAgICBtZWRpYUV2ZW50OiB2aWRlb0V2ZW50c1tpdG1dICE9PSB1bmRlZmluZWQsXG4gICAgZm9ybUV2ZW50OiBmb3JtRXZlbnRzW2l0bV0gIT09IHVuZGVmaW5lZFxuICB9O1xuICByZXR1cm4gb2I7XG59LCB7fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0YWxpa2Uvc3JjL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZShcIi4vZXZlbnRzLmpzXCIpO1xudmFyIHNldERpZmYgPSByZXF1aXJlKFwiLi9kaWZmaW5nLmpzXCIpO1xudmFyIGhhbmR5SGVscGVycyA9IHJlcXVpcmUoXCIuL2xpYi9oYW5keV9mdW5jcy5qc1wiKTtcbnZhciBzbW9vdGhOZXN0ZWQgPSBoYW5keUhlbHBlcnMuc21vb3RoQXJyYXkoKTtcbnZhciBmb3JtVGFncyA9IHtcbiAgdGV4dGFyZWE6IHRydWUsXG4gIHNlbGVjdDogdHJ1ZSxcbiAgaW5wdXQ6IHRydWUsXG4gIG91dHB1dDogdHJ1ZSxcbiAgZm9ybTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gTm9kZU1hcCgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgYXBwVGl0bGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdkZWZhdWx0JztcblxuICB0aGlzLmFwcFRpdGxlID0gYXBwVGl0bGU7XG4gIHRoaXMuZG9tQ29tcG9uZW50cyA9IHt9O1xuICB0aGlzLnJvb3RDb21wb25lbnQgPSBudWxsO1xuICB0aGlzLmFwcFJvb3REb20gPSB7XG4gICAgZG9tRWxlbWVudDogbnVsbCxcbiAgICBuZXN0ZWQ6IFtdXG4gIH07XG4gIHRoaXMuYXBwUm9vdCA9IG51bGw7XG4gIHRoaXMubW91bnRlZENhbGxiYWNrcyA9IFtdO1xuICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcblxuICB0aGlzLmNyZWF0ZVVkaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcIjAwMDBcIiArIChNYXRoLnJhbmRvbSgpICogTWF0aC5wb3coMzYsIDQpIDw8IDApLnRvU3RyaW5nKDM2KSkuc2xpY2UoLTQpO1xuICB9O1xuXG4gIHRoaXMucmFuZG9tRnVuY0lkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnZnVuYycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTgpO1xuICB9O1xuXG4gIHRoaXMuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uIChkb21FbGVtZW50KSB7XG4gICAgaWYgKGRvbUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgX3RoaXMuYXBwUm9vdCA9IGRvbUVsZW1lbnQ7XG4gICAgICBfdGhpcy5hcHBSb290RG9tLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkb21FbGVtZW50KTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgX3RoaXMuYXBwUm9vdCA9IGVsZW07XG4gICAgICBfdGhpcy5hcHBSb290RG9tLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJFbGVtZW50OiBcIiArIGRvbUVsZW1lbnQgKyBcIiBub3QgZm91bmRcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICB0aGlzLnNldExpc3RlbmVyID0gZnVuY3Rpb24gKGxpc3RlbmVyLCB0eXBlKSB7XG4gICAgdmFyIHNlbGYgPSBfdGhpcztcbiAgICBfdGhpcy5hcHBSb290LmFkZEV2ZW50TGlzdGVuZXIobGlzdGVuZXIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmLmxvb2tVcFJlZ2lzdHJ5KGUudGFyZ2V0LCB0eXBlLCBlKTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLnNldExpc3RlbmVyRWwgPSBmdW5jdGlvbiAoZXZlbnRPYiwgY2IsIG5vZGUpIHtcbiAgICB2YXIgc2VsZiA9IF90aGlzO1xuICAgIHZhciBldm5OYW1lID0gZXZlbnRPYi5ldmVudE5TO1xuICAgIG5vZGUucHJvcHMuZXhfZXZlbnRGdW5jTmFtZSA9IF90aGlzLnJhbmRvbUZ1bmNJZCgpO1xuICAgIG5vZGUucHJvcHMuZXhfYXR0YWNoZWRGdW5jID0gZXZuTmFtZTtcbiAgICBjb25zb2xlLmxvZygnbm9kZScsIG5vZGUpO1xuICAgIF90aGlzLmV2ZW50c1tldm5OYW1lXVtub2RlLnByb3BzLmV4X2V2ZW50RnVuY05hbWVdID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIG5vZGUucHJvcHNbZXZuTmFtZV0oZSwgbm9kZS5kb21FbGVtZW50LCBub2RlKTtcbiAgICB9O1xuICAgIG5vZGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50T2IuZXZlbnROYW1lLCBfdGhpcy5ldmVudHNbZXZuTmFtZV1bbm9kZS5wcm9wcy5leF9ldmVudEZ1bmNOYW1lXSk7XG4gIH07XG5cbiAgdGhpcy5hcHBseUxpc3RlbmVyID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBub2RlKSB7XG4gICAgdmFyIGV2ZW50SW5mbyA9IF90aGlzLmV2ZW50c1tsaXN0ZW5lcl07XG4gICAgdmFyIG9uU2VsZiA9IGV2ZW50SW5mby5mb3JtRXZlbnQgfHwgZXZlbnRJbmZvLm1lZGlhRXZlbnQgfHwgZm9ybVRhZ3Nbbm9kZS50eXBlXTtcbiAgICBpZiAoIWV2ZW50SW5mby5yZWdpc3RlcmVkICYmICFvblNlbGYpIHtcbiAgICAgIGV2ZW50SW5mby5yZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICAgIF90aGlzLnNldExpc3RlbmVyKGV2ZW50SW5mby5ldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9uU2VsZiAmJiAhbm9kZS5wcm9wcy5leF9ldmVudEZ1bmNOYW1lKSB7XG4gICAgICBfdGhpcy5zZXRMaXN0ZW5lckVsKGV2ZW50SW5mbywgbGlzdGVuZXIsIG5vZGUpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmxvb2tVcFJlZ2lzdHJ5ID0gZnVuY3Rpb24gKHRhcmdldCwgZXZlbnROYW1lLCBlKSB7XG4gICAgdmFyIHRnVHJhY2UgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCd0cmFjZScpO1xuICAgIHZhciB0cmFjZUFycmF5ID0gdGdUcmFjZS5zcGxpdCgnLicpO1xuICAgIGNvbnNvbGUubG9nKCd0cmFjZUFycmF5JywgdHJhY2VBcnJheSk7XG4gICAgdmFyIHZEb20gPSBfdGhpcy5kb21Db21wb25lbnRzO1xuICAgIGNvbnNvbGUubG9nKCd2RG9tJywgdkRvbSk7XG4gICAgdHJhY2VBcnJheS5zaGlmdCgpO1xuICAgIHRyYWNlQXJyYXkubWFwKGZ1bmN0aW9uIChpdG0sIGkpIHtcbiAgICAgIGlmICghdkRvbS5uZXN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIG5lc3QgPSB2RG9tLm5lc3RlZFtpdG1dO1xuICAgICAgdkRvbSA9IG5lc3Q7XG4gICAgICByZXR1cm4gbmVzdDtcbiAgICB9KS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaXRtLCBpaSkge1xuICAgICAgaWYgKGl0bSkge1xuICAgICAgICB2YXIgaGFzQWN0aW9uID0gaXRtLnByb3BzW2V2ZW50TmFtZV07XG4gICAgICAgIGlmIChoYXNBY3Rpb24pIHtcbiAgICAgICAgICBoYXNBY3Rpb24oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLldoZW5Nb3VudGVkID0gZnVuY3Rpb24gKGFmdGVyTW91bnRDQikge1xuICAgIF90aGlzLm1vdW50ZWRDYWxsYmFja3MucHVzaChhZnRlck1vdW50Q0IpO1xuICB9O1xuXG4gIHRoaXMub2JqZWN0Q2hhbmdlID0gZnVuY3Rpb24gKG5ld1JlbmRlcikge1xuICAgIHZhciBuZXdPYiA9IF90aGlzLnJlcmVuZGVyKG5ld1JlbmRlciwgJ1Jvb3QnKTtcbiAgICBjb25zb2xlLmxvZygnbmV3UmVuZGVyJywgbmV3T2IpO1xuICAgIF90aGlzLnVwZGF0ZUVsZW1lbnQoX3RoaXMuZG9tQ29tcG9uZW50cywgbmV3T2IpO1xuICAgIF90aGlzLm1vdW50ZWRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIGNiKCk7XG4gICAgfSk7XG4gICAgX3RoaXMubW91bnRlZENhbGxiYWNrcyA9IFtdO1xuICB9O1xuXG4gIHRoaXMuY3JlYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKG9iaiwgY29udGFpbmVyRWxlbWVudCkge1xuXG4gICAgaWYgKF90aGlzLmdldEVsZW1lbnQoY29udGFpbmVyRWxlbWVudCkpIHtcbiAgICAgIG9iai5kb21FbGVtZW50ID0gX3RoaXMuYXBwUm9vdDtcbiAgICAgIF90aGlzLm1vdW50QXBwKG9iaik7XG4gICAgfTtcbiAgfTtcblxuICB0aGlzLnZpZXdPYmplY3RzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdhcHBSb290RG9tJywgX3RoaXMuYXBwUm9vdERvbSk7XG4gICAgY29uc29sZS5sb2coJ2RvbUJyYW5jaGVzJywgX3RoaXMuZG9tQ29tcG9uZW50cyk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZXZlbnRzJywgX3RoaXMuZXZlbnRzKTtcbiAgfTtcblxuICB0aGlzLm1vdW50QXBwID0gZnVuY3Rpb24gKG9iaikge1xuICAgIF90aGlzLmRvbUNvbXBvbmVudHMgPSBvYmo7XG4gICAgX3RoaXMuYXBwUm9vdERvbS5uZXN0ZWQucHVzaChfdGhpcy5kb21Db21wb25lbnRzKTtcbiAgICBfdGhpcy5hcHBSb290LmFwcGVuZENoaWxkKF90aGlzLmh0bWxCdWlsZChvYmosIFwiUm9vdFwiKSk7XG4gIH07XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKC9eZXhfL2kpO1xuICB2YXIgaXNTVkcgPSBuZXcgUmVnRXhwKC8oY2lyY2xlfGNsaXBQYXRofGRlZnN8ZWxsaXBzZXxnfGltYWdlfGxpbmV8bGluZWFyR3JhZGllbnR8bWFza3xwYXRofHBhdHRlcm58cG9seWdvbnxwb2x5bGluZXxyYWRpYWxHcmFkaWVudHxyZWN0fHN0b3B8c3ZnfHRleHR8dHNwYW4pL2kpO1xuICB0aGlzLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5hbWUsIGF0dHJzKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFN0cmluZyhuYW1lKSk7XG4gICAgaWYgKCFhdHRycykgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgICBmb3IgKHZhciBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoIXNlbGYuZXZlbnRzW2F0dHJdICYmICFyZS50ZXN0KGF0dHIpKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgdGhpcy5jcmVhdGVFbGVtZW50TlMgPSBmdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZSwgYXR0cnMpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcblxuICAgIGlmICghYXR0cnMpIHJldHVybiBlbGVtZW50O1xuXG4gICAgZm9yICh2YXIgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKCFzZWxmLmV2ZW50c1thdHRyXSAmJiAhcmUudGVzdChhdHRyKSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIHZhciBjcmVhdGVFbGVtID0gZnVuY3Rpb24gY3JlYXRlRWxlbShub2RlLCBncm91cCwgcGFyZW50KSB7XG5cbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBub2RlID09PSAnbnVtYmVyJyB8fCAodHlwZW9mIG5vZGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihub2RlKSkgIT09IFwib2JqZWN0XCIgJiYgbm9kZSAhPT0gbnVsbCAmJiBub2RlICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUpO1xuICAgIH1cbiAgICBub2RlLnByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgbm9kZS5wcm9wcywge1xuICAgICAgdHJhY2U6IGdyb3VwLFxuICAgICAgcGFyZW50OiBwYXJlbnRcbiAgICB9KTtcblxuICAgIHZhciBlbCA9IGlzU1ZHLnRlc3Qobm9kZS50eXBlKSA/IHNlbGYuY3JlYXRlRWxlbWVudE5TKG5vZGUudHlwZSwgbm9kZS5wcm9wcykgOiBzZWxmLmNyZWF0ZUVsZW1lbnQobm9kZS50eXBlLCBub2RlLnByb3BzKTtcbiAgICBub2RlLmRvbUVsZW1lbnQgPSBlbDtcbiAgICBmb3IgKHZhciBwcm9wIGluIG5vZGUucHJvcHMpIHtcbiAgICAgIGlmIChzZWxmLmV2ZW50c1twcm9wXSkge1xuICAgICAgICBzZWxmLmFwcGx5TGlzdGVuZXIocHJvcCwgbm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG5vZGUubmVzdGVkID0gbm9kZS5uZXN0ZWQgPyBub2RlLm5lc3RlZCA6IFtdO1xuICAgIGlmIChub2RlLm5lc3RlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgbm9kZS5uZXN0ZWQubWFwKGZ1bmN0aW9uIChlbG0sIGlpKSB7XG4gICAgICB2YXIgZWxtSWQgPSBncm91cCArICcuJyArIGlpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW0oZWxtLCBlbG1JZCwgZ3JvdXApO1xuICAgIH0pLmZvckVhY2goZWwuYXBwZW5kQ2hpbGQuYmluZChlbCkpO1xuICAgIHJldHVybiBlbDtcbiAgfTtcblxuICB2YXIgcmVSZW5kZXJFbGVtID0gZnVuY3Rpb24gcmVSZW5kZXJFbGVtKG5vZGUsIGdyb3VwLCBwYXJlbnQpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBub2RlID09PSAnbnVtYmVyJyB8fCAodHlwZW9mIG5vZGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihub2RlKSkgIT09IFwib2JqZWN0XCIgJiYgbm9kZSAhPT0gbnVsbCAmJiBub2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIG5vZGUubmVzdGVkID0gbm9kZS5uZXN0ZWQgPyBub2RlLm5lc3RlZCA6IFtdO1xuICAgIG5vZGUucHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBub2RlLnByb3BzLCB7XG4gICAgICB0cmFjZTogZ3JvdXAsXG4gICAgICBwYXJlbnQ6IHBhcmVudFxuICAgIH0pO1xuICAgIG5vZGUubmVzdGVkLm1hcChmdW5jdGlvbiAoZWxtLCBpaSkge1xuICAgICAgdmFyIGVsbUlkID0gZ3JvdXAgKyAnLicgKyBpaTtcbiAgICAgIHJldHVybiByZVJlbmRlckVsZW0oZWxtLCBlbG1JZCwgZ3JvdXApO1xuICAgIH0pO1xuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIHRoaXMuaHRtbEJ1aWxkID0gZnVuY3Rpb24gKG5vZGUsIGdyb3VwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW0obm9kZSwgZ3JvdXAsICdSb290Jyk7XG4gIH07XG5cbiAgdGhpcy5yZXJlbmRlciA9IGZ1bmN0aW9uIChub2RlLCBncm91cCkge1xuICAgIHJldHVybiByZVJlbmRlckVsZW0obm9kZSwgZ3JvdXAsICdSb290Jyk7XG4gIH07XG5cbiAgdGhpcy5kaWZmRWxlbWVudHMgPSBzZXREaWZmKHNlbGYsIGNyZWF0ZUVsZW0pO1xuXG4gIHRoaXMudXBkYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChvbGROb2RlLCBuZXdOb2RlKSB7XG4gICAgX3RoaXMuZGlmZkVsZW1lbnRzKF90aGlzLmFwcFJvb3REb20sIG5ld05vZGUsIG9sZE5vZGUpO1xuICAgIF90aGlzLmRvbUNvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHt9LCBvbGROb2RlLCBuZXdOb2RlKTtcbiAgfTtcblxuICB0aGlzLlNldFN0YXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnbm90IHlldCBzZXQnKTtcbiAgfTtcbn07XG5cbk5vZGVNYXAucHJvdG90eXBlLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKCEob2JqIGluc3RhbmNlb2YgQXJyYXkpICYmIG9iaiBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgIGlmICghb2JqW1wiY29tcG9uZW50TmFtZVwiXSB8fCAhb2JqW1wiY29tcG9uZW50UmVuZGVyXCJdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiT2JqZWN0IG11c3QgaGF2ZSBhIGJyYW5jaE5hbWUgYW5kIGJyYW5jaE9iamVjdFwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvYmoudmRvbUlkID0gJ0AnICsgb2JqLmNvbXBvbmVudE5hbWU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvcHRzKSB7XG5cbiAgICAgIHJldHVybiBvYmouY29tcG9uZW50UmVuZGVyKG9wdHMpO1xuICAgIH07XG4gIH1cbn07XG5cbk5vZGVNYXAucHJvdG90eXBlLm5vZGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbmVzdGVkID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG5lc3RlZFtfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHR5cGUocHJvcHMpO1xuICB9XG4gIGlmIChuZXN0ZWQpIHtcbiAgICBuZXN0ZWQgPSBzbW9vdGhOZXN0ZWQobmVzdGVkKTtcbiAgfSBlbHNlIHtcbiAgICBuZXN0ZWQgPSBbXTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBwcm9wczogcHJvcHMsXG4gICAgbmVzdGVkOiBuZXN0ZWRcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwcE5hbWUpIHtcbiAgaWYgKCFhcHBOYW1lKSByZXR1cm4gbmV3IE5vZGVNYXAoJ2V4YW1wbGUnKTtcblxuICByZXR1cm4gbmV3IE5vZGVNYXAoYXBwTmFtZSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdGFsaWtlL3NyYy9leC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFtcblwib25Db3B5XCIsXG5cIm9uQ3V0XCIsIFxuXCJvblBhc3RlXCIsIFxuXCJvbktleURvd25cIiwgXG5cIm9uS2V5UHJlc3NcIiwgXG5cIm9uS2V5VXBcIixcblwib25Gb2N1c1wiLCBcblwib25CbHVyXCIsIFxuXCJvbkNoYW5nZVwiLCBcblwib25JbnB1dFwiLFxuXCJvblN1Ym1pdFwiLFxuXCJvbkNsaWNrXCIsIFxuXCJvbkNvbnRleHRNZW51XCIsXG5cIm9uRG91YmxlQ2xpY2tcIixcblwib25EcmFnXCIsXG5cIm9uRHJhZ0VuZFwiLCBcblwib25EcmFnRW50ZXJcIiwgXG5cIm9uRHJhZ0V4aXRcIiwgXG5cIm9uRHJhZ0xlYXZlXCIsXG5cIm9uRHJhZ092ZXJcIiwgXG5cIm9uRHJhZ1N0YXJ0XCIsIFxuXCJvbkRyb3BcIixcblwib25Nb3VzZURvd25cIixcblwib25Nb3VzZUVudGVyXCIsIFxuXCJvbk1vdXNlTGVhdmVcIixcblwib25Nb3VzZU1vdmVcIiwgXG5cIm9uTW91c2VPdXRcIiwgXG5cIm9uTW91c2VPdmVyXCIsXG5cIm9uTW91c2VVcFwiLCBcblwib25TZWxlY3RcIiwgXG5cIm9uU2Nyb2xsXCIsIFxuXCJvbkFib3J0XCIsXG5cIm9uQ2FuUGxheVwiLCBcblwib25DYW5QbGF5VGhyb3VnaFwiLCBcblwib25EdXJhdGlvbkNoYW5nZVwiLFxuXCJvbkVtcHRpZWRcIixcblwib25FbmRlZFwiLCBcblwib25FcnJvclwiLFxuXCJvbkxvYWRlZERhdGFcIiwgXG5cIm9uTG9hZGVkTWV0YWRhdGFcIiwgXG5cIm9uTG9hZFN0YXJ0XCIsIFxuXCJvblBhdXNlXCIsIFxuXCJvblBsYXlcIixcblwib25QbGF5aW5nXCIsXG5cIm9uUHJvZ3Jlc3NcIixcblwib25SYXRlQ2hhbmdlXCIsXG5cIm9uU2Vla2VkXCIsIFxuXCJvblNlZWtpbmdcIiwgXG5cIm9uV2FpdGluZ1wiLFxuXCJvbkxvYWRcIiwgXG5cIm9uRXJyb3JcIixcblwib25BbmltYXRpb25TdGFydFwiLFxuXCJvbkFuaW1hdGlvbkVuZFwiLCBcblwib25BbmltYXRpb25JdGVyYXRpb25cIiwgXG5cIm9uVHJhbnNpdGlvbkVuZFwiXG5dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0YWxpa2Uvc3JjL2xpYi9ldmVudGxpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZmxhdHRlbiA9IGZ1bmN0aW9uIF9mbGF0dGVuKGEsIGIpIHtcbiAgIHJldHVybiBhLmNvbmNhdChBcnJheS5pc0FycmF5KGIpID8gYi5yZWR1Y2UoX2ZsYXR0ZW4sIFtdKSA6IGIpO1xufTtcblxuZnVuY3Rpb24gZmxhdHRlbkl0ZXJhdGlvbihhcnIsIGZsYXRBcnIpIHtcbiAgIGZsYXRBcnIgPSBmbGF0QXJyIHx8IFtdO1xuXG4gICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aCB8IDA7XG5cbiAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ID0gaW5kZXggKyAxKSB7XG4gICAgICB2YXIgaXRlbSA9IGFycltpbmRleF07XG4gICAgICBpdGVtLmNvbnN0cnVjdG9yID09PSBBcnJheSA/IGZsYXR0ZW5JdGVyYXRpb24oaXRlbSwgZmxhdEFycikgOiBmbGF0QXJyW2ZsYXRBcnIubGVuZ3RoXSA9IGl0ZW07XG4gICB9XG5cbiAgIHJldHVybiBmbGF0QXJyO1xufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICBzbW9vdGhBcnJheTogZnVuY3Rpb24gc21vb3RoQXJyYXkoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKG5lc3RlZCkge1xuICAgICAgICAgLy8gaWYoIEFycmF5LmlzQXJyYXkobmVzdGVkKSApIHJldHVybiBbXTtcblxuICAgICAgICAgcmV0dXJuIG5lc3RlZC5yZWR1Y2UoX2ZsYXR0ZW4sIFtdKS5maWx0ZXIoZnVuY3Rpb24gKG5lKSB7XG4gICAgICAgICAgICByZXR1cm4gbmUgIT09IG51bGwgJiYgbmUgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgIH0pO1xuICAgICAgfTtcbiAgIH0sXG4gICBmbGF0dGVuOiBmdW5jdGlvbiBmbGF0dGVuKG5lc3RlZCkge1xuICAgICAgcmV0dXJuIG5lc3RlZC5yZWR1Y2UoX2ZsYXR0ZW4sIFtdKTtcbiAgIH0sXG4gICBjYXBpdGFsaXplOiBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0YWxpa2Uvc3JjL2xpYi9oYW5keV9mdW5jcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBFWCA9IHJlcXVpcmUoXCJyZWFjdGFsaWtlXCIpKCdhdXRvY29tcGxldGUnKTtcbmNvbnN0IFRyaWUgPSByZXF1aXJlKCcuL3NyYy90cmllLmpzJyk7XG5jb25zdCBXb3JkTGlzdCA9IHJlcXVpcmUoJy4vc3JjL3dvcmRfbGlzdC5qcycpO1xuXG5jb25zdCBBdXRvY29tcGxldGUgPSBuZXcgVHJpZShXb3JkTGlzdCk7XG5cbmxldCBBcHBTdGF0ZSA9IHtcbiBzdWdnZXN0aW9uczogW11cbn1cblxuY29uc3Qgc2VhcmNoVHlwZSA9IChlLCBlbGVtKSA9PiB7XG5cdGxldCB0eXBlZCA9IGVsZW0udmFsdWUudG9Mb3dlckNhc2UoKS50cmltKClcbiAgICBFWC5TZXRTdGF0ZSh7XG4gICAgc3VnZ2VzdGlvbnM6IEF1dG9jb21wbGV0ZS5sb29rdXAodHlwZWQpXG4gIH0pO1xufVxuY29uc3QgTGF5b3V0ID0ge1xuICBzdGF0ZTogQXBwU3RhdGUsXG4gIHJlbmRlcjogKCkgPT4ge1xuICAgIGxldCB7XG4gICAgICBzdWdnZXN0aW9uc1xuICAgIH0gPSBMYXlvdXQuc3RhdGU7XG5cbiAgICBsZXQgbW92aWVTdWdnZXN0aW9ucyA9IHN1Z2dlc3Rpb25zLm1hcCgoaXRtKSA9PiB7XG4gICAgXHRyZXR1cm4gPGxpPntpdG19PC9saT5cbiAgICB9KVxuICAgIHJldHVybiAoXG5cdDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiAgIGNsYXNzPVwiY29sLXNtLTYgY29sLXNtLW9mZnNldC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiaW1hZ2luYXJ5X2NvbnRhaW5lclwiPiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgc3R5bGlzaC1pbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIG9uS2V5VXA9e3NlYXJjaFR5cGV9IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgaWQ9XCJzZWFyY2hfbGlzdFwiPlxuICAgICAgICAgICAge21vdmllU3VnZ2VzdGlvbnN9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblx0PC9kaXY+XG4gICAgKVxuICB9XG59O1xuRVgucm9vdENvbXBvbmVudCA9IExheW91dDtcblxuRVguU2V0U3RhdGUgPSAoKCkgPT4ge1xuICByZXR1cm4gKHBheWxvYWQpID0+IHtcbiAgICBMYXlvdXQuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBMYXlvdXQuc3RhdGUsIHBheWxvYWQpO1xuICAgIEVYLm9iamVjdENoYW5nZShMYXlvdXQucmVuZGVyKCkpO1xuICB9XG59KSgpO1xuXG5FWC5jcmVhdGVDb21wb25lbnQoXG4gIExheW91dC5yZW5kZXIoKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtb3MvYXV0b2NvbXBsZXRlL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9