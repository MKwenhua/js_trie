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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
function Trie(wordList, actions) {
   var _this = this;

   function getAction(word) {
      return actions[word] ? actions[word] : null;
   }
   function addCharToTrie(index, word, branch, trie, punctuatedWord) {
      if (index === word.length) return trie;
      var char = word[index];
      if (!branch[char]) {
         branch[char] = {
            word: word.length - 1 === index ? punctuatedWord : null,
            action: word.length - 1 === index ? getAction(punctuatedWord) : null
         };
      }

      return addCharToTrie(index + 1, word, branch[char], trie, punctuatedWord);
   }
   function getBranch(charString, trie) {
      var branch = trie;
      for (var i = 0; i < charString.length; i++) {
         branch = branch[charString[i]];
         if (!branch) return null;
      }
      return branch;
   }
   this.words = wordList;
   this.actions = actions;
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

   this.head = wordList.reduce(function (tr, word) {
      var lw = word.toLowerCase();
      tr[lw[0]] = tr[lw[0]] ? tr[lw[0]] : {
         word: null,
         action: null
      };
      return addCharToTrie(1, lw, tr[lw[0]], tr, word);
   }, {});
   this.lookup = function (letters) {
      return _this.getWordList(letters.toLowerCase());
   };
}

function BuildTrie(wordList, actions) {
   return new Trie(wordList, actions);
}

exports.default = BuildTrie;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
   "Weird Science": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTE2MzkxNzExM15BMl5BanBnXkFtZTgwNzIwODQxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0090305'
   },
   "Raiders of the Lost Ark": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SY1000_CR0,0,664,1000_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0082971'
   },
   "Indiana Jones and the Temple of Doom": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMyNzI4OTA5OV5BMl5BanBnXkFtZTcwMDQ2MjAxNA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087469'
   },
   "The Terminator": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Who Framed Roger Rabbit": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Bill & Ted's Excellent Adventure": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Ghostbusters": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Ghostbusters II": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Gremlins": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Adventures in Babysitting": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Beetlejuice": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "The Karate Kid": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "The Karate Kid Part II": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Weekend at Bernie's": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "The Untouchables": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Die Hard": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "A Christmas Story": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Ferris Bueller's Day Off": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Akira": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0094625'
   },
   "Aliens": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNGYxMTA0M2EtYjg0Yy00NzI5LTg4NjEtZDA2MTcyOWM0YTVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0090605'
   },
   "Robocop": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Revenge of the Nerds": {
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODU1NzM4NTA4Nl5BMl5BanBnXkFtZTgwMTkxMzcxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0088000'
   }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ["The Breakfast Club", "Real Genius", "Sixteen Candles", "Weird Science", "Pretty in Pink", "Back to the Future", "Back to the Future Part II", "Star Wars: Episode V - The Empire Strikes Back", "Star Wars: Episode VI - Return of the Jedi", "Star Trek II: The Wrath of Khan", "Star Trek IV: The Voyage Home", "E.T. the Extra-Terrestrial", "Dirty Dancing", "Platoon", "The Princess Bride", "Raiders of the Lost Ark", "Indiana Jones and the Temple of Doom", "Indiana Jones and the Last Crusade", "The Terminator", "Who Framed Roger Rabbit", "When Harry Met Sally...", "Labyrinth", "Legend", "Bill & Ted's Excellent Adventure", "Top Gun", "Footloose", "Desperately Seeking Susan", "Poltergeist", "Poltergeist II: The Other Side", "Flashdance", "Ghostbusters", "Ghostbusters II", "Gremlins", "Superman II", "Splash", "Some Kind of Wonderful", "The Legend of Billie Jean", "Risky Business", "Working Girl", "Roxanne", "Ruthless People", "The Lost Boys", "Adventures in Babysitting", "Beetlejuice", "St. Elmo's Fire", "All the Right Moves", "Mannequin", "The Karate Kid", "The Karate Kid Part II", "Weekend at Bernie's", "The Untouchables", "Die Hard", "Raising Arizona", "The Last Emperor", "A Christmas Story", "Terms of Endearment", "The Little Mermaid", "The Fox and the Hound", "Glory", "A Fish Called Wanda", "Witness", "Field of Dreams", "Moonstruck", "Ferris Bueller's Day Off", "The Road Warrior", "Mad Max Beyond Thunderdome", "Stand by Me", "Above the Law", "The Abyss", "The Accused", "Akira", "An American Tail", "The NeverEnding Story", "The Secret of NIMH", "The Last Unicorn", "An American Werewolf in London", "Anne of Green Gables", "Annie", "The Fly", "The Fly II", "Armed and Dangerous", "Batman", "The Bay Boy", "Steel Magnolias", "Beaches", "Benji the Hunted", "Beverly Hills Cop", "Beverly Hills Cop II", "Big", "The Big Chill", "The Black Cauldron", "The Black Stallion Returns", "Bloodsport", "The Blue Lagoon", "Blue Thunder", "Born on the Fourth of July", "Big Trouble in Little China", "The 'Burbs", "Caddyshack", "The Care Bears Movie", "The Muppets Take Manhattan", "Firestarter", "Cat's Eye", "Chariots of Fire", "Children of the Corn", "Child's Play", "Cocktail", "Cocoon", "Cocoon: The Return", "*batteries not included", "The Color Purple", "Commando", "Communion", "Crocodile Dundee", "Crocodile Dundee II", "Crusoe", "Cujo", "Dangerous Liaisons", "The Dark Crystal", "D.A.R.Y.L.", "Police Academy", "Police Academy 2: Their First Assignment", "Police Academy 4: Citizens on Patrol", "Police Academy 6: City Under Siege", "Date with an Angel", "Dead Calm", "Deadly Friend", "The Dead Pool", "Dead Ringers", "The Dead Zone", "D.O.A.", "Dominick and Eugene", "Dragnet", "Troop Beverly Hills", "Dream a Little Dream", "Dreamscape", "The Dream Team", "Drugstore Cowboy", "Earth Girls Are Easy", "Enemy Mine", "Escape from New York", "Lethal Weapon", "Lethal Weapon 2", "Explorers", "Fatal Attraction", "Jumpin' Jack Flash", "The Flamingo Kid", "One Crazy Summer", "Stand and Deliver", "Lean on Me", "Flight of the Navigator", "Flowers in the Attic", "Ferris Bueller's Day Off", "Highlander", "48 Hrs.", "Frantic", "From the Hip", "F/X", "Blade Runner", "Raiders of the Lost Ark", "Gleaming the Cube", "Heathers", "The Golden Child", "Good Morning, Vietnam", "Ghostbusters", "Gremlins", "The Great Outdoors", "Planes, Trains & Automobiles", "Throw Momma from the Train", "Greystoke: The Legend of Tarzan, Lord of the Apes", "Altered States", "The Rescue", "Hannah and Her Sisters", "Harry and the Hendersons", "Heavy Metal", "Her Alibi", "Hiding Out", "Honey, I Shrunk the Kids", "Hoosiers", "The Wizard", "The Name of the Rose", "The Journey of Natty Gann", "Twins", "Kickboxer", "K-9", "La Bamba", "Ladyhawke", "Lady in White", "The Land Before Time", "The Last Starfighter", "Legal Eagles", "Less Than Zero", "Little Shop of Horrors", "Look Who's Talking", "Lucas", "Major League", "The Man from Snowy River", "Return to Snowy River", "The Manhattan Project", "Married to the Mob", "Mask", "Maximum Overdrive", "Midnight Run", "Mississippi Burning", "The Money Pit", "Monkey Shines", "Moscow on the Hudson", "Moving", "Music Box", "My Science Project", "My Stepmother Is an Alien", "Mystic Pizza", "The Naked Gun: From the Files of Police Squad!", "National Lampoon's Vacation", "National Lampoon's European Vacation", "National Lampoon's Christmas Vacation", "Never Cry Wolf", "Next of Kin", "9½ Weeks", "The Big Easy", "9 to 5", "The Outsiders", "Rumble Fish", "Overboard", "Peggy Sue Got Married", "Phar Lap", "Pet Sematary", "The Philadelphia Experiment", "Pink Floyd: The Wall", "Predator", "The Presidio", "Private Benjamin", "Project X", "Quest for Fire", "Raging Bull", "Rain Man", "Red Dawn", "Red Heat", "Renegades", "Aliens", "Robocop", "Revenge of the Nerds", "Revenge of the Nerds II: Nerds in Paradise", "River's Edge", "Rock & Rule", "Romancing the Stone", "The Jewel of the Nile", "The Running Man", "Running on Empty", "Little Nikita", "Russkies", "Say Anything...", "Scanners", "Scrooged", "The Serpent and the Rainbow", "The Seventh Sign", "Short Circuit", "Sid and Nancy"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(6);


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Eventlist = __webpack_require__(7);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var events = __webpack_require__(5);
var setDiff = __webpack_require__(4);
var handyHelpers = __webpack_require__(8);
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _trie = __webpack_require__(0);

var _trie2 = _interopRequireDefault(_trie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EX = __webpack_require__(3)('autocomplete');

var WordList = __webpack_require__(2);
var WordActions = __webpack_require__(1);
var Autocomplete = (0, _trie2.default)(WordList, WordActions);

var AppState = {
  suggestions: []
};

var logAction = function logAction(word) {
  return function () {

    console.log('WordActions[word]', word, WordActions[word]);
  };
};
var searchType = function searchType(e, elem) {
  var typed = elem.value.toLowerCase().trim();
  EX.SetState({
    suggestions: Autocomplete.lookup(typed)
  });
};
window.auto = Autocomplete;
console.log('WordActions', WordActions);
var Layout = {
  state: AppState,
  render: function render() {
    var suggestions = Layout.state.suggestions;


    var movieSuggestions = suggestions.map(function (itm) {

      return EX.node(
        'li',
        { onClick: logAction(itm) },
        itm
      );
    });
    return EX.node(
      'div',
      { 'class': 'row' },
      EX.node(
        'div',
        { onClick: function onClick() {
            console.log('clicked this!');
          }, 'class': 'col-sm-6 col-sm-offset-3' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWQ2YWNlMmFiODI0YTYyYmFiZTEiLCJ3ZWJwYWNrOi8vLy4vZGVtb3MvYXV0b2NvbXBsZXRlL3NyYy90cmllLmpzIiwid2VicGFjazovLy8uL2RlbW9zL2F1dG9jb21wbGV0ZS9zcmMvd29yZF9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2RlbW9zL2F1dG9jb21wbGV0ZS9zcmMvd29yZF9saXN0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3RhbGlrZS9yZWFjdGFsaWtlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3RhbGlrZS9zcmMvZGlmZmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0YWxpa2Uvc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0YWxpa2Uvc3JjL2V4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3RhbGlrZS9zcmMvbGliL2V2ZW50bGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0YWxpa2Uvc3JjL2xpYi9oYW5keV9mdW5jcy5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vcy9hdXRvY29tcGxldGUvbWFpbi5qcyJdLCJuYW1lcyI6WyJUcmllIiwid29yZExpc3QiLCJhY3Rpb25zIiwiZ2V0QWN0aW9uIiwid29yZCIsImFkZENoYXJUb1RyaWUiLCJpbmRleCIsImJyYW5jaCIsInRyaWUiLCJwdW5jdHVhdGVkV29yZCIsImxlbmd0aCIsImNoYXIiLCJhY3Rpb24iLCJnZXRCcmFuY2giLCJjaGFyU3RyaW5nIiwiaSIsIndvcmRzIiwiZmluZFdvcmRzIiwibG9va3VwSWQiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImxpc3QiLCJtaW5lV29yZCIsImJybiIsInB1c2giLCJ3b3JkTGltaXQiLCJrZXkiLCJjdXJyZW50TG9vcHVwIiwiZ2V0V29yZExpc3QiLCJmb3VuZFdvcmRzIiwiaGVhZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInJlZHVjZSIsInRyIiwibHciLCJ0b0xvd2VyQ2FzZSIsImxvb2t1cCIsImxldHRlcnMiLCJCdWlsZFRyaWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW1nX3NyYyIsImltZGIiLCJFWCIsInJlcXVpcmUiLCJXb3JkTGlzdCIsIldvcmRBY3Rpb25zIiwiQXV0b2NvbXBsZXRlIiwiQXBwU3RhdGUiLCJzdWdnZXN0aW9ucyIsImxvZ0FjdGlvbiIsInNlYXJjaFR5cGUiLCJlIiwiZWxlbSIsInR5cGVkIiwidmFsdWUiLCJ0cmltIiwiU2V0U3RhdGUiLCJ3aW5kb3ciLCJhdXRvIiwiTGF5b3V0Iiwic3RhdGUiLCJyZW5kZXIiLCJtb3ZpZVN1Z2dlc3Rpb25zIiwibWFwIiwiaXRtIiwicm9vdENvbXBvbmVudCIsInBheWxvYWQiLCJPYmplY3QiLCJhc3NpZ24iLCJvYmplY3RDaGFuZ2UiLCJjcmVhdGVDb21wb25lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hFQSxTQUFTQSxJQUFULENBQWNDLFFBQWQsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQUE7O0FBQzlCLFlBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQ3RCLGFBQU9GLFFBQVFFLElBQVIsSUFBZ0JGLFFB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QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0ZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7QUMxUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNVLE9BQUQsRUFBYTtBQUNsQlAsV0FBT0MsS0FBUCxHQUFlTyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlQsT0FBT0MsS0FBekIsRUFBZ0NNLE9BQWhDLENBQWY7QUFDQXhCLE9BQUcyQixZQUFILENBQWdCVixPQUFPRSxNQUFQLEVBQWhCO0FBQ0QsR0FIRDtBQUlELENBTGEsRUFBZDs7QUFPQW5CLEdBQUc0QixlQUFILENBQ0VYLE9BQU9FLE1BQVAsRUFERixFQUNtQlUsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQURuQixFIiwiZmlsZSI6Ii4vZGVtb3MvYXV0b2NvbXBsZXRlL2Rpc3QvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWQ2YWNlMmFiODI0YTYyYmFiZTEiLCJmdW5jdGlvbiBUcmllKHdvcmRMaXN0LCBhY3Rpb25zKSB7XG4gICBmdW5jdGlvbiBnZXRBY3Rpb24od29yZCkge1xuICAgICAgcmV0dXJuIGFjdGlvbnNbd29yZF0gPyBhY3Rpb25zW3dvcmRdIDogbnVsbDtcbiAgIH1cbiAgIGZ1bmN0aW9uIGFkZENoYXJUb1RyaWUoaW5kZXgsIHdvcmQsIGJyYW5jaCwgdHJpZSwgcHVuY3R1YXRlZFdvcmQpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gd29yZC5sZW5ndGgpXG4gICAgICAgICByZXR1cm4gdHJpZTtcbiAgICAgIHZhciBjaGFyID0gd29yZFtpbmRleF07XG4gICAgICBpZiAoIWJyYW5jaFtjaGFyXSkge1xuICAgICAgICAgYnJhbmNoW2NoYXJdID0ge1xuICAgICAgICAgICAgd29yZDogKHdvcmQubGVuZ3RoIC0gMSkgPT09IGluZGV4ID8gcHVuY3R1YXRlZFdvcmQgOiBudWxsLFxuICAgICAgICAgICAgYWN0aW9uOiAod29yZC5sZW5ndGggLSAxKSA9PT0gaW5kZXggPyBnZXRBY3Rpb24ocHVuY3R1YXRlZFdvcmQpIDogbnVsbFxuICAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFkZENoYXJUb1RyaWUoaW5kZXggKyAxLCB3b3JkLCBicmFuY2hbY2hhcl0sIHRyaWUsIHB1bmN0dWF0ZWRXb3JkKVxuICAgfVxuICAgZnVuY3Rpb24gZ2V0QnJhbmNoKGNoYXJTdHJpbmcsIHRyaWUpIHtcbiAgICAgIHZhciBicmFuY2ggPSB0cmllO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFyU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBicmFuY2ggPSBicmFuY2hbY2hhclN0cmluZ1tpXV07XG4gICAgICAgICBpZiAoIWJyYW5jaClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgfVxuICAgICAgcmV0dXJuIGJyYW5jaDtcbiAgIH1cbiAgIHRoaXMud29yZHMgPSB3b3JkTGlzdDtcbiAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICB0aGlzLmZpbmRXb3JkcyA9IChicmFuY2gsIGxvb2t1cElkKSA9PiB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyhicmFuY2gpXG4gICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgZnVuY3Rpb24gbWluZVdvcmQoYnJuKSB7XG4gICAgICAgICBpZiAoYnJuLndvcmQpIHtcbiAgICAgICAgICAgIGxpc3QucHVzaChicm4ud29yZCk7XG4gICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IHNlbGYud29yZExpbWl0KVxuICAgICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICBmb3IgKGxldCBrZXkgaW4gYnJuKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGJybltrZXldICE9PSAnc3RyaW5nJyAmJiBicm5ba2V5XSAhPT0gbnVsbCAmJiBzZWxmLmN1cnJlbnRMb29wdXAgPT09IGxvb2t1cElkKSB7XG4gICAgICAgICAgICAgICBtaW5lV29yZChicm5ba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWluZVdvcmQoYnJhbmNoKTtcbiAgIH1cbiAgIHRoaXMuZ2V0V29yZExpc3QgPSAoY2hhclN0cmluZykgPT4ge1xuICAgICAgdmFyIGZvdW5kV29yZHMgPSBbXTtcbiAgICAgIGlmKCFjaGFyU3RyaW5nKSByZXR1cm4gZm91bmRXb3JkcztcbiAgICAgIHZhciBicmFuY2ggPSBnZXRCcmFuY2goY2hhclN0cmluZywgdGhpcy5oZWFkKTtcbiAgICAgIGlmICghYnJhbmNoKVxuICAgICAgICAgcmV0dXJuIGZvdW5kV29yZHM7XG4gICAgICB2YXIgbG9va3VwSWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTgpO1xuICAgICAgdGhpcy5jdXJyZW50TG9vcHVwID0gbG9va3VwSWQ7XG4gICAgICByZXR1cm4gdGhpcy5maW5kV29yZHMoYnJhbmNoLCBsb29rdXBJZCk7XG5cbiAgIH1cblxuICAgdGhpcy5oZWFkID0gd29yZExpc3QucmVkdWNlKCh0ciwgd29yZCkgPT4ge1xuICAgICAgdmFyIGx3ID0gd29yZC50b0xvd2VyQ2FzZSgpXG4gICAgICB0cltsd1swXV0gPSB0cltsd1swXV0gPyB0cltsd1swXV0gOiB7XG4gICAgICAgICB3b3JkOiBudWxsLFxuICAgICAgICAgYWN0aW9uOiBudWxsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGFkZENoYXJUb1RyaWUoMSwgbHcsIHRyW2x3WzBdXSwgdHIsIHdvcmQpO1xuICAgfSwge30pO1xuICAgdGhpcy5sb29rdXAgPSAobGV0dGVycykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0V29yZExpc3QobGV0dGVycy50b0xvd2VyQ2FzZSgpKVxuICAgfVxufVxuXG5mdW5jdGlvbiBCdWlsZFRyaWUod29yZExpc3QsIGFjdGlvbnMpIHtcbiAgIHJldHVybiBuZXcgVHJpZSh3b3JkTGlzdCwgYWN0aW9ucyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1aWxkVHJpZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vcy9hdXRvY29tcGxldGUvc3JjL3RyaWUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgIFwiV2VpcmQgU2NpZW5jZVwiOntcbiAgICAgIGltZ19zcmM6ICdodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL00vTVY1Qk5URTJNemt4TnpFeE0xNUJNbDVCYW5CblhrRnRaVGd3TnpJd09EUXhNVEVALl9WMV9VWDE4Ml9DUjAsMCwxODIsMjY4X0FMXy5qcGcnLFxuICAgICAgaW1kYjogJ2h0dHA6Ly93d3cuaW1kYi5jb20vdGl0bGUvdHQwMDkwMzA1J1xuICAgfSxcbiAgIFwiUmFpZGVycyBvZiB0aGUgTG9zdCBBcmtcIjp7XG4gICAgICBpbWdfc3JjOiAnaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9NL01WNUJNakEwT0RFek1UYzFObDVCTWw1QmFuQm5Ya0Z0WlRjd09ETTJNakF4TkFAQC5fVjFfU1kxMDAwX0NSMCwwLDY2NCwxMDAwX0FMXy5qcGcnLFxuICAgICAgaW1kYjogJ2h0dHA6Ly93d3cuaW1kYi5jb20vdGl0bGUvdHQwMDgyOTcxJ1xuICAgfSxcbiAgIFwiSW5kaWFuYSBKb25lcyBhbmQgdGhlIFRlbXBsZSBvZiBEb29tXCI6e1xuICAgICAgaW1nX3NyYzogJ2h0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvTS9NVjVCTVRNeU56STRPVEE1T1Y1Qk1sNUJhbkJuWGtGdFpUY3dNRFEyTWpBeE5BQEAuX1YxX1VYMTgyX0NSMCwwLDE4MiwyNjhfQUxfLmpwZycsXG4gICAgICBpbWRiOiAnaHR0cDovL3d3dy5pbWRiLmNvbS90aXRsZS90dDAwODc0NjknXG4gICB9LFxuICAgXCJUaGUgVGVybWluYXRvclwiOiB7XG4gICAgICBpbWdfc3JjOiAnaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9NL01WNUJaRFZqTjJGa1lUUXROVEJsT0MwME1qTTVMVGd6TVdFdFpXUmxOR1V5WW1OaU9URmlYa0V5WGtGcWNHZGVRWFZ5TVRReE56TXpORElALl9WMV9VWDE4Ml9DUjAsMCwxODIsMjY4X0FMXy5qcGcnLFxuICAgICAgaW1kYjogJ2h0dHA6Ly93d3cuaW1kYi5jb20vdGl0bGUvdHQwMDg3MzYzJ1xuICAgfSxcbiAgIFwiV2hvIEZyYW1lZCBSb2dlciBSYWJiaXRcIjoge1xuICAgICAgaW1nX3NyYzogJ2h0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvTS9NVjVCWkRWak4yRmtZVFF0TlRCbE9DMDBNak01TFRnek1XRXRaV1JsTkdVeVltTmlPVEZpWGtFeVhrRnFjR2RlUVhWeU1UUXhOek16TkRJQC5fVjFfVVgxODJfQ1IwLDAsMTgyLDI2OF9BTF8uanBnJyxcbiAgICAgIGltZGI6ICdodHRwOi8vd3d3LmltZGIuY29tL3RpdGxlL3R0MDA4NzM2MydcbiAgIH0sXG4gICBcIkJpbGwgJiBUZWQncyBFeGNlbGxlbnQgQWR2ZW50dXJlXCI6IHtcbiAgICAgIGltZ19zcmM6ICdodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL00vTVY1QlpEVmpOMkZrWVRRdE5UQmxPQzAwTWpNNUxUZ3pNV0V0WldSbE5HVXlZbU5pT1RGaVhrRXlYa0ZxY0dkZVFYVnlNVFF4TnpNek5ESUAuX1YxX1VYMTgyX0NSMCwwLDE4MiwyNjhfQUxfLmpwZycsXG4gICAgICBpbWRiOiAnaHR0cDovL3d3dy5pbWRiLmNvbS90aXRsZS90dDAwODczNjMnXG4gICB9LFxuICAgXCJHaG9zdGJ1c3RlcnNcIjoge1xuICAgICAgaW1nX3NyYzogJ2h0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvTS9NVjVCWkRWak4yRmtZVFF0TlRCbE9DMDBNak01TFRnek1XRXRaV1JsTkdVeVltTmlPVEZpWGtFeVhrRnFjR2RlUVhWeU1UUXhOek16TkRJQC5fVjFfVVgxODJfQ1IwLDAsMTgyLDI2OF9BTF8uanBnJyxcbiAgICAgIGltZGI6ICdodHRwOi8vd3d3LmltZGIuY29tL3RpdGxlL3R0MDA4NzM2MydcbiAgIH0sXG4gICBcIkdob3N0YnVzdGVycyBJSVwiOiB7XG4gICAgICBpbWdfc3JjOiAnaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9NL01WNUJaRFZqTjJGa1lUUXROVEJsT0MwME1qTTVMVGd6TVdFdFpXUmxOR1V5WW1OaU9URmlYa0V5WGtGcWNHZGVRWFZ5TVRReE56TXpORElALl9WMV9VWDE4Ml9DUjAsMCwxODIsMjY4X0FMXy5qcGcnLFxuICAgICAgaW1kYjogJ2h0dHA6Ly93d3cuaW1kYi5jb20vdGl0bGUvdHQwMDg3MzYzJ1xuICAgfSxcbiAgIFwiR3JlbWxpbnNcIjoge1xuICAgICAgaW1nX3NyYzogJ2h0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvTS9NVjVCWkRWak4yRmtZVFF0TlRCbE9DMDBNak01TFRnek1XRXRaV1JsTkdVeVltTmlPVEZpWGtFeVhrRnFjR2RlUVhWeU1UUXhOek16TkRJQC5fVjFfVVgxODJfQ1IwLDAsMTgyLDI2OF9BTF8uanBnJyxcbiAgICAgIGltZGI6ICdodHRwOi8vd3d3LmltZGIuY29tL3RpdGxlL3R0MDA4NzM2MydcbiAgIH0sXG4gICBcIkFkdmVudHVyZXMgaW4gQmFieXNpdHRpbmdcIjoge1xuICAgICAgaW1nX3NyYzogJ2h0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvTS9NVjVCWkRWak4yRmtZVFF0TlRCbE9DMDBNak01TFRnek1XRXRaV1JsTkdVeVltTmlPVEZpWGtFeVhrRnFjR2RlUVhWeU1UUXhOek16TkRJQC5fVjFfVVgxODJfQ1IwLDAsMTgyLDI2OF9BTF8uanBnJyxcbiAgICAgIGltZGI6ICdodHRwOi8vd3d3LmltZGIuY29tL3RpdGxlL3R0MDA4NzM2MydcbiAgIH0sXG4gICBcIkJlZXRsZWp1aWNlXCI6IHtcbiAgICAgIGltZ19zcmM6ICdodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL00vTVY1QlpEVmpOMkZrWVRRdE5UQmxPQzAwTWpNNUxUZ3pNV0V0WldSbE5HVXlZbU5pT1RGaVhrRXlYa0ZxY0dkZVFYVnlNVFF4TnpNek5ESUAuX1YxX1VYMTgyX0NSMCwwLDE4MiwyNjhfQUxfLmpwZycsXG4gICAgICBpbWRiOiAnaHR0cDovL3d3dy5pbWRiLmNvbS90aXRsZS90dDAwODczNjMnXG4gICB9LFxuICAgXCJUaGUgS2FyYXRlIEtpZFwiOiAge1xuICAgICAgaW1nX3NyYzogJ2h0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvTS9NVjVCWkRWak4yRmtZVFF0TlRCbE9DMDBNak01TFRnek1XRXRaV1JsTkdVeVltTmlPVEZpWGtFeVhrRnFjR2RlUVhWeU1UUXhOek16TkRJQC5fVjFfVVgxODJfQ1IwLDAsMTgyLDI2OF9BTF8uanBnJyxcbiAgICAgIGltZGI6ICdodHRwOi8vd3d3LmltZGIuY29tL3RpdGxlL3R0MDA4NzM2MydcbiAgIH0sXG4gICBcIlRoZSBLYXJhdGUgS2lkIFBhcnQgSUlcIjogIHtcbiAgICAgIGltZ19zcmM6ICdodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL00vTVY1QlpEVmpOMkZrWVRRdE5UQmxPQzAwTWpNNUxUZ3pNV0V0WldSbE5HVXlZbU5pT1RGaVhrRXlYa0ZxY0dkZVFYVnlNVFF4TnpNek5ESUAuX1YxX1VYMTgyX0NSMCwwLDE4MiwyNjhfQUxfLmpwZycsXG4gICAgICBpbWRiOiAnaHR0cDovL3d3dy5pbWRiLmNvbS90aXRsZS90dDAwODczNjMnXG4gICB9LFxuICAgXCJXZWVrZW5kIGF0IEJlcm5pZSdzXCI6IHtcbiAgICAgIGltZ19zcmM6ICdodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL00vTVY1QlpEVmpOMkZrWVRRdE5UQmxPQzAwTWpNNUxUZ3pNV0V0WldSbE5HVXlZbU5pT1RGaVhrRXlYa0ZxY0dkZVFYVnlNVFF4TnpNek5ESUAuX1YxX1VYMTgyX0NSMCwwLDE4MiwyNjhfQUxfLmpwZycsXG4gICAgICBpbWRiOiAnaHR0cDovL3d3dy5pbWRiLmNvbS90aXRsZS90dDAwODczNjMnXG4gICB9LFxuICAgXCJUaGUgVW50b3VjaGFibGVzXCI6ICB7XG4gICAgICBpbWdfc3JjOiAnaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9NL01WNUJaRFZqTjJGa1lUUXROVEJsT0MwME1qTTVMVGd6TVdFdFpXUmxOR1V5WW1OaU9URmlYa0V5WGtGcWNHZGVRWFZ5TVRReE56TXpORElALl9WMV9VWDE4Ml9DUjAsMCwxODIsMjY4X0FMXy5qcGcnLFxuICAgICAgaW1kYjogJ2h0dHA6Ly93d3cuaW1kYi5jb20vdGl0bGUvdHQwMDg3MzYzJ1xuICAgfSxcbiAgIFwiRGllIEhhcmRcIjogIHtcbiAgICAgIGltZ19zcmM6ICdodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL00vTVY1QlpEVmpOMkZrWVRRdE5UQmxPQzAwTWpNNUxUZ3pNV0V0WldSbE5HVXlZbU5pT1RGaVhrRXlYa0ZxY0dkZVFYVnlNVFF4TnpNek5ESUAuX1YxX1VYMTgyX0NSMCwwLDE4MiwyNjhfQUxfLmpwZycsXG4gICAgICBpbWRiOiAnaHR0cDovL3d3dy5pbWRiLmNvbS90aXRsZS90dDAwODczNjMnXG4gICB9LFxuICAgXCJBIENocmlzdG1hcyBTdG9yeVwiOiAge1xuICAgICAgaW1nX3NyYzogJ2h0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvTS9NVjVCWkRWak4yRmtZVFF0TlRCbE9DMDBNak01TFRnek1XRXRaV1JsTkdVeVltTmlPVEZpWGtFeVhrRnFjR2RlUVhWeU1UUXhOek16TkRJQC5fVjFfVVgxODJfQ1IwLDAsMTgyLDI2OF9BTF8uanBnJyxcbiAgICAgIGltZGI6ICdodHRwOi8vd3d3LmltZGIuY29tL3RpdGxlL3R0MDA4NzM2MydcbiAgIH0sXG4gICBcIkZlcnJpcyBCdWVsbGVyJ3MgRGF5IE9mZlwiOiAge1xuICAgICAgaW1nX3NyYzogJ2h0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvTS9NVjVCWkRWak4yRmtZVFF0TlRCbE9DMDBNak01TFRnek1XRXRaV1JsTkdVeVltTmlPVEZpWGtFeVhrRnFjR2RlUVhWeU1UUXhOek16TkRJQC5fVjFfVVgxODJfQ1IwLDAsMTgyLDI2OF9BTF8uanBnJyxcbiAgICAgIGltZGI6ICdodHRwOi8vd3d3LmltZGIuY29tL3RpdGxlL3R0MDA4NzM2MydcbiAgIH0sXG4gICBcIkFraXJhXCI6ICB7XG4gICAgICBpbWdfc3JjOiAnaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9NL01WNUJNMlppWlRrMU9EZ3RNVFprTlMwME5UWXhMV0l4WlRVdE5XRXhaR1l3WlRSak9EVmlYa0V5WGtGcWNHZGVRWFZ5TVRFMk16QTNNRE1ALl9WMV9VWDE4Ml9DUjAsMCwxODIsMjY4X0FMXy5qcGcnLFxuICAgICAgaW1kYjogJ2h0dHA6Ly93d3cuaW1kYi5jb20vdGl0bGUvdHQwMDk0NjI1J1xuICAgfSxcbiAgIFwiQWxpZW5zXCI6ICB7XG4gICAgICBpbWdfc3JjOiAnaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9NL01WNUJOR1l4TVRBME0yRXRZamcwWXkwME56STVMVGc0TmpFdFpEQTJNVGN5T1dNMFlUVmpMMmx0WVdkbEwybHRZV2RsWGtFeVhrRnFjR2RlUVhWeU5qYzFOVFl5TWpnQC5fVjFfVVgxODJfQ1IwLDAsMTgyLDI2OF9BTF8uanBnJyxcbiAgICAgIGltZGI6ICdodHRwOi8vd3d3LmltZGIuY29tL3RpdGxlL3R0MDA5MDYwNSdcbiAgIH0sXG4gICBcIlJvYm9jb3BcIjogIHtcbiAgICAgIGltZ19zcmM6ICdodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL00vTVY1QlpEVmpOMkZrWVRRdE5UQmxPQzAwTWpNNUxUZ3pNV0V0WldSbE5HVXlZbU5pT1RGaVhrRXlYa0ZxY0dkZVFYVnlNVFF4TnpNek5ESUAuX1YxX1VYMTgyX0NSMCwwLDE4MiwyNjhfQUxfLmpwZycsXG4gICAgICBpbWRiOiAnaHR0cDovL3d3dy5pbWRiLmNvbS90aXRsZS90dDAwODczNjMnXG4gICB9LFxuICAgXCJSZXZlbmdlIG9mIHRoZSBOZXJkc1wiOiAge1xuICAgICAgaW1nX3NyYzogJ2h0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvTS9NVjVCT0RVMU56TTROVEE0Tmw1Qk1sNUJhbkJuWGtGdFpUZ3dNVGt4TXpjeE1URUAuX1YxX1VYMTgyX0NSMCwwLDE4MiwyNjhfQUxfLmpwZycsXG4gICAgICBpbWRiOiAnaHR0cDovL3d3dy5pbWRiLmNvbS90aXRsZS90dDAwODgwMDAnXG4gICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtb3MvYXV0b2NvbXBsZXRlL3NyYy93b3JkX2FjdGlvbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFtcbiAgIFwiVGhlIEJyZWFrZmFzdCBDbHViXCIsXG4gICBcIlJlYWwgR2VuaXVzXCIsXG4gICBcIlNpeHRlZW4gQ2FuZGxlc1wiLFxuICAgXCJXZWlyZCBTY2llbmNlXCIsXG4gICBcIlByZXR0eSBpbiBQaW5rXCIsXG4gICBcIkJhY2sgdG8gdGhlIEZ1dHVyZVwiLFxuICAgXCJCYWNrIHRvIHRoZSBGdXR1cmUgUGFydCBJSVwiLFxuICAgXCJTdGFyIFdhcnM6IEVwaXNvZGUgViAtIFRoZSBFbXBpcmUgU3RyaWtlcyBCYWNrXCIsXG4gICBcIlN0YXIgV2FyczogRXBpc29kZSBWSSAtIFJldHVybiBvZiB0aGUgSmVkaVwiLFxuICAgXCJTdGFyIFRyZWsgSUk6IFRoZSBXcmF0aCBvZiBLaGFuXCIsXG4gICBcIlN0YXIgVHJlayBJVjogVGhlIFZveWFnZSBIb21lXCIsXG4gICBcIkUuVC4gdGhlIEV4dHJhLVRlcnJlc3RyaWFsXCIsXG4gICBcIkRpcnR5IERhbmNpbmdcIixcbiAgIFwiUGxhdG9vblwiLFxuICAgXCJUaGUgUHJpbmNlc3MgQnJpZGVcIixcbiAgIFwiUmFpZGVycyBvZiB0aGUgTG9zdCBBcmtcIixcbiAgIFwiSW5kaWFuYSBKb25lcyBhbmQgdGhlIFRlbXBsZSBvZiBEb29tXCIsXG4gICBcIkluZGlhbmEgSm9uZXMgYW5kIHRoZSBMYXN0IENydXNhZGVcIixcbiAgIFwiVGhlIFRlcm1pbmF0b3JcIixcbiAgIFwiV2hvIEZyYW1lZCBSb2dlciBSYWJiaXRcIixcbiAgIFwiV2hlbiBIYXJyeSBNZXQgU2FsbHkuLi5cIixcbiAgIFwiTGFieXJpbnRoXCIsXG4gICBcIkxlZ2VuZFwiLFxuICAgXCJCaWxsICYgVGVkJ3MgRXhjZWxsZW50IEFkdmVudHVyZVwiLFxuICAgXCJUb3AgR3VuXCIsXG4gICBcIkZvb3Rsb29zZVwiLFxuICAgXCJEZXNwZXJhdGVseSBTZWVraW5nIFN1c2FuXCIsXG4gICBcIlBvbHRlcmdlaXN0XCIsXG4gICBcIlBvbHRlcmdlaXN0IElJOiBUaGUgT3RoZXIgU2lkZVwiLFxuICAgXCJGbGFzaGRhbmNlXCIsXG4gICBcIkdob3N0YnVzdGVyc1wiLFxuICAgXCJHaG9zdGJ1c3RlcnMgSUlcIixcbiAgIFwiR3JlbWxpbnNcIixcbiAgIFwiU3VwZXJtYW4gSUlcIixcbiAgIFwiU3BsYXNoXCIsXG4gICBcIlNvbWUgS2luZCBvZiBXb25kZXJmdWxcIixcbiAgIFwiVGhlIExlZ2VuZCBvZiBCaWxsaWUgSmVhblwiLFxuICAgXCJSaXNreSBCdXNpbmVzc1wiLFxuICAgXCJXb3JraW5nIEdpcmxcIixcbiAgIFwiUm94YW5uZVwiLFxuICAgXCJSdXRobGVzcyBQZW9wbGVcIixcbiAgIFwiVGhlIExvc3QgQm95c1wiLFxuICAgXCJBZHZlbnR1cmVzIGluIEJhYnlzaXR0aW5nXCIsXG4gICBcIkJlZXRsZWp1aWNlXCIsXG4gICBcIlN0LiBFbG1vJ3MgRmlyZVwiLFxuICAgXCJBbGwgdGhlIFJpZ2h0IE1vdmVzXCIsXG4gICBcIk1hbm5lcXVpblwiLFxuICAgXCJUaGUgS2FyYXRlIEtpZFwiLFxuICAgXCJUaGUgS2FyYXRlIEtpZCBQYXJ0IElJXCIsXG4gICBcIldlZWtlbmQgYXQgQmVybmllJ3NcIixcbiAgIFwiVGhlIFVudG91Y2hhYmxlc1wiLFxuICAgXCJEaWUgSGFyZFwiLFxuICAgXCJSYWlzaW5nIEFyaXpvbmFcIixcbiAgIFwiVGhlIExhc3QgRW1wZXJvclwiLFxuICAgXCJBIENocmlzdG1hcyBTdG9yeVwiLFxuICAgXCJUZXJtcyBvZiBFbmRlYXJtZW50XCIsXG4gICBcIlRoZSBMaXR0bGUgTWVybWFpZFwiLFxuICAgXCJUaGUgRm94IGFuZCB0aGUgSG91bmRcIixcbiAgIFwiR2xvcnlcIixcbiAgIFwiQSBGaXNoIENhbGxlZCBXYW5kYVwiLFxuICAgXCJXaXRuZXNzXCIsXG4gICBcIkZpZWxkIG9mIERyZWFtc1wiLFxuICAgXCJNb29uc3RydWNrXCIsXG4gICBcIkZlcnJpcyBCdWVsbGVyJ3MgRGF5IE9mZlwiLFxuICAgXCJUaGUgUm9hZCBXYXJyaW9yXCIsXG4gICBcIk1hZCBNYXggQmV5b25kIFRodW5kZXJkb21lXCIsXG4gICBcIlN0YW5kIGJ5IE1lXCIsXG4gICBcIkFib3ZlIHRoZSBMYXdcIixcbiAgIFwiVGhlIEFieXNzXCIsXG4gICBcIlRoZSBBY2N1c2VkXCIsXG4gICBcIkFraXJhXCIsXG4gICBcIkFuIEFtZXJpY2FuIFRhaWxcIixcbiAgIFwiVGhlIE5ldmVyRW5kaW5nIFN0b3J5XCIsXG4gICBcIlRoZSBTZWNyZXQgb2YgTklNSFwiLFxuICAgXCJUaGUgTGFzdCBVbmljb3JuXCIsXG4gICBcIkFuIEFtZXJpY2FuIFdlcmV3b2xmIGluIExvbmRvblwiLFxuICAgXCJBbm5lIG9mIEdyZWVuIEdhYmxlc1wiLFxuICAgXCJBbm5pZVwiLFxuICAgXCJUaGUgRmx5XCIsXG4gICBcIlRoZSBGbHkgSUlcIixcbiAgIFwiQXJtZWQgYW5kIERhbmdlcm91c1wiLFxuICAgXCJCYXRtYW5cIixcbiAgIFwiVGhlIEJheSBCb3lcIixcbiAgIFwiU3RlZWwgTWFnbm9saWFzXCIsXG4gICBcIkJlYWNoZXNcIixcbiAgIFwiQmVuamkgdGhlIEh1bnRlZFwiLFxuICAgXCJCZXZlcmx5IEhpbGxzIENvcFwiLFxuICAgXCJCZXZlcmx5IEhpbGxzIENvcCBJSVwiLFxuICAgXCJCaWdcIixcbiAgIFwiVGhlIEJpZyBDaGlsbFwiLFxuICAgXCJUaGUgQmxhY2sgQ2F1bGRyb25cIixcbiAgIFwiVGhlIEJsYWNrIFN0YWxsaW9uIFJldHVybnNcIixcbiAgIFwiQmxvb2RzcG9ydFwiLFxuICAgXCJUaGUgQmx1ZSBMYWdvb25cIixcbiAgIFwiQmx1ZSBUaHVuZGVyXCIsXG4gICBcIkJvcm4gb24gdGhlIEZvdXJ0aCBvZiBKdWx5XCIsXG4gICBcIkJpZyBUcm91YmxlIGluIExpdHRsZSBDaGluYVwiLFxuICAgXCJUaGUgJ0J1cmJzXCIsXG4gICBcIkNhZGR5c2hhY2tcIixcbiAgIFwiVGhlIENhcmUgQmVhcnMgTW92aWVcIixcbiAgIFwiVGhlIE11cHBldHMgVGFrZSBNYW5oYXR0YW5cIixcbiAgIFwiRmlyZXN0YXJ0ZXJcIixcbiAgIFwiQ2F0J3MgRXllXCIsXG4gICBcIkNoYXJpb3RzIG9mIEZpcmVcIixcbiAgIFwiQ2hpbGRyZW4gb2YgdGhlIENvcm5cIixcbiAgIFwiQ2hpbGQncyBQbGF5XCIsXG4gICBcIkNvY2t0YWlsXCIsXG4gICBcIkNvY29vblwiLFxuICAgXCJDb2Nvb246IFRoZSBSZXR1cm5cIixcbiAgIFwiKmJhdHRlcmllcyBub3QgaW5jbHVkZWRcIixcbiAgIFwiVGhlIENvbG9yIFB1cnBsZVwiLFxuICAgXCJDb21tYW5kb1wiLFxuICAgXCJDb21tdW5pb25cIixcbiAgIFwiQ3JvY29kaWxlIER1bmRlZVwiLFxuICAgXCJDcm9jb2RpbGUgRHVuZGVlIElJXCIsXG4gICBcIkNydXNvZVwiLFxuICAgXCJDdWpvXCIsXG4gICBcIkRhbmdlcm91cyBMaWFpc29uc1wiLFxuICAgXCJUaGUgRGFyayBDcnlzdGFsXCIsXG4gICBcIkQuQS5SLlkuTC5cIixcbiAgIFwiUG9saWNlIEFjYWRlbXlcIixcbiAgIFwiUG9saWNlIEFjYWRlbXkgMjogVGhlaXIgRmlyc3QgQXNzaWdubWVudFwiLFxuICAgXCJQb2xpY2UgQWNhZGVteSA0OiBDaXRpemVucyBvbiBQYXRyb2xcIixcbiAgIFwiUG9saWNlIEFjYWRlbXkgNjogQ2l0eSBVbmRlciBTaWVnZVwiLFxuICAgXCJEYXRlIHdpdGggYW4gQW5nZWxcIixcbiAgIFwiRGVhZCBDYWxtXCIsXG4gICBcIkRlYWRseSBGcmllbmRcIixcbiAgIFwiVGhlIERlYWQgUG9vbFwiLFxuICAgXCJEZWFkIFJpbmdlcnNcIixcbiAgIFwiVGhlIERlYWQgWm9uZVwiLFxuICAgXCJELk8uQS5cIixcbiAgIFwiRG9taW5pY2sgYW5kIEV1Z2VuZVwiLFxuICAgXCJEcmFnbmV0XCIsXG4gICBcIlRyb29wIEJldmVybHkgSGlsbHNcIixcbiAgIFwiRHJlYW0gYSBMaXR0bGUgRHJlYW1cIixcbiAgIFwiRHJlYW1zY2FwZVwiLFxuICAgXCJUaGUgRHJlYW0gVGVhbVwiLFxuICAgXCJEcnVnc3RvcmUgQ293Ym95XCIsXG4gICBcIkVhcnRoIEdpcmxzIEFyZSBFYXN5XCIsXG4gICBcIkVuZW15IE1pbmVcIixcbiAgIFwiRXNjYXBlIGZyb20gTmV3IFlvcmtcIixcbiAgIFwiTGV0aGFsIFdlYXBvblwiLFxuICAgXCJMZXRoYWwgV2VhcG9uIDJcIixcbiAgIFwiRXhwbG9yZXJzXCIsXG4gICBcIkZhdGFsIEF0dHJhY3Rpb25cIixcbiAgIFwiSnVtcGluJyBKYWNrIEZsYXNoXCIsXG4gICBcIlRoZSBGbGFtaW5nbyBLaWRcIixcbiAgIFwiT25lIENyYXp5IFN1bW1lclwiLFxuICAgXCJTdGFuZCBhbmQgRGVsaXZlclwiLFxuICAgXCJMZWFuIG9uIE1lXCIsXG4gICBcIkZsaWdodCBvZiB0aGUgTmF2aWdhdG9yXCIsXG4gICBcIkZsb3dlcnMgaW4gdGhlIEF0dGljXCIsXG4gICBcIkZlcnJpcyBCdWVsbGVyJ3MgRGF5IE9mZlwiLFxuICAgXCJIaWdobGFuZGVyXCIsXG4gICBcIjQ4IEhycy5cIixcbiAgIFwiRnJhbnRpY1wiLFxuICAgXCJGcm9tIHRoZSBIaXBcIixcbiAgIFwiRi9YXCIsXG4gICBcIkJsYWRlIFJ1bm5lclwiLFxuICAgXCJSYWlkZXJzIG9mIHRoZSBMb3N0IEFya1wiLFxuICAgXCJHbGVhbWluZyB0aGUgQ3ViZVwiLFxuICAgXCJIZWF0aGVyc1wiLFxuICAgXCJUaGUgR29sZGVuIENoaWxkXCIsXG4gICBcIkdvb2QgTW9ybmluZywgVmlldG5hbVwiLFxuICAgXCJHaG9zdGJ1c3RlcnNcIixcbiAgIFwiR3JlbWxpbnNcIixcbiAgIFwiVGhlIEdyZWF0IE91dGRvb3JzXCIsXG4gICBcIlBsYW5lcywgVHJhaW5zICYgQXV0b21vYmlsZXNcIixcbiAgIFwiVGhyb3cgTW9tbWEgZnJvbSB0aGUgVHJhaW5cIixcbiAgIFwiR3JleXN0b2tlOiBUaGUgTGVnZW5kIG9mIFRhcnphbiwgTG9yZCBvZiB0aGUgQXBlc1wiLFxuICAgXCJBbHRlcmVkIFN0YXRlc1wiLFxuICAgXCJUaGUgUmVzY3VlXCIsXG4gICBcIkhhbm5haCBhbmQgSGVyIFNpc3RlcnNcIixcbiAgIFwiSGFycnkgYW5kIHRoZSBIZW5kZXJzb25zXCIsXG4gICBcIkhlYXZ5IE1ldGFsXCIsXG4gICBcIkhlciBBbGliaVwiLFxuICAgXCJIaWRpbmcgT3V0XCIsXG4gICBcIkhvbmV5LCBJIFNocnVuayB0aGUgS2lkc1wiLFxuICAgXCJIb29zaWVyc1wiLFxuICAgXCJUaGUgV2l6YXJkXCIsXG4gICBcIlRoZSBOYW1lIG9mIHRoZSBSb3NlXCIsXG4gICBcIlRoZSBKb3VybmV5IG9mIE5hdHR5IEdhbm5cIixcbiAgIFwiVHdpbnNcIixcbiAgIFwiS2lja2JveGVyXCIsXG4gICBcIkstOVwiLFxuICAgXCJMYSBCYW1iYVwiLFxuICAgXCJMYWR5aGF3a2VcIixcbiAgIFwiTGFkeSBpbiBXaGl0ZVwiLFxuICAgXCJUaGUgTGFuZCBCZWZvcmUgVGltZVwiLFxuICAgXCJUaGUgTGFzdCBTdGFyZmlnaHRlclwiLFxuICAgXCJMZWdhbCBFYWdsZXNcIixcbiAgIFwiTGVzcyBUaGFuIFplcm9cIixcbiAgIFwiTGl0dGxlIFNob3Agb2YgSG9ycm9yc1wiLFxuICAgXCJMb29rIFdobydzIFRhbGtpbmdcIixcbiAgIFwiTHVjYXNcIixcbiAgIFwiTWFqb3IgTGVhZ3VlXCIsXG4gICBcIlRoZSBNYW4gZnJvbSBTbm93eSBSaXZlclwiLFxuICAgXCJSZXR1cm4gdG8gU25vd3kgUml2ZXJcIixcbiAgIFwiVGhlIE1hbmhhdHRhbiBQcm9qZWN0XCIsXG4gICBcIk1hcnJpZWQgdG8gdGhlIE1vYlwiLFxuICAgXCJNYXNrXCIsXG4gICBcIk1heGltdW0gT3ZlcmRyaXZlXCIsXG4gICBcIk1pZG5pZ2h0IFJ1blwiLFxuICAgXCJNaXNzaXNzaXBwaSBCdXJuaW5nXCIsXG4gICBcIlRoZSBNb25leSBQaXRcIixcbiAgIFwiTW9ua2V5IFNoaW5lc1wiLFxuICAgXCJNb3Njb3cgb24gdGhlIEh1ZHNvblwiLFxuICAgXCJNb3ZpbmdcIixcbiAgIFwiTXVzaWMgQm94XCIsXG4gICBcIk15IFNjaWVuY2UgUHJvamVjdFwiLFxuICAgXCJNeSBTdGVwbW90aGVyIElzIGFuIEFsaWVuXCIsXG4gICBcIk15c3RpYyBQaXp6YVwiLFxuICAgXCJUaGUgTmFrZWQgR3VuOiBGcm9tIHRoZSBGaWxlcyBvZiBQb2xpY2UgU3F1YWQhXCIsXG4gICBcIk5hdGlvbmFsIExhbXBvb24ncyBWYWNhdGlvblwiLFxuICAgXCJOYXRpb25hbCBMYW1wb29uJ3MgRXVyb3BlYW4gVmFjYXRpb25cIixcbiAgIFwiTmF0aW9uYWwgTGFtcG9vbidzIENocmlzdG1hcyBWYWNhdGlvblwiLFxuICAgXCJOZXZlciBDcnkgV29sZlwiLFxuICAgXCJOZXh0IG9mIEtpblwiLFxuICAgXCI5wr0gV2Vla3NcIixcbiAgIFwiVGhlIEJpZyBFYXN5XCIsXG4gICBcIjkgdG8gNVwiLFxuICAgXCJUaGUgT3V0c2lkZXJzXCIsXG4gICBcIlJ1bWJsZSBGaXNoXCIsXG4gICBcIk92ZXJib2FyZFwiLFxuICAgXCJQZWdneSBTdWUgR290IE1hcnJpZWRcIixcbiAgIFwiUGhhciBMYXBcIixcbiAgIFwiUGV0IFNlbWF0YXJ5XCIsXG4gICBcIlRoZSBQaGlsYWRlbHBoaWEgRXhwZXJpbWVudFwiLFxuICAgXCJQaW5rIEZsb3lkOiBUaGUgV2FsbFwiLFxuICAgXCJQcmVkYXRvclwiLFxuICAgXCJUaGUgUHJlc2lkaW9cIixcbiAgIFwiUHJpdmF0ZSBCZW5qYW1pblwiLFxuICAgXCJQcm9qZWN0IFhcIixcbiAgIFwiUXVlc3QgZm9yIEZpcmVcIixcbiAgIFwiUmFnaW5nIEJ1bGxcIixcbiAgIFwiUmFpbiBNYW5cIixcbiAgIFwiUmVkIERhd25cIixcbiAgIFwiUmVkIEhlYXRcIixcbiAgIFwiUmVuZWdhZGVzXCIsXG4gICBcIkFsaWVuc1wiLFxuICAgXCJSb2JvY29wXCIsXG4gICBcIlJldmVuZ2Ugb2YgdGhlIE5lcmRzXCIsXG4gICBcIlJldmVuZ2Ugb2YgdGhlIE5lcmRzIElJOiBOZXJkcyBpbiBQYXJhZGlzZVwiLFxuICAgXCJSaXZlcidzIEVkZ2VcIixcbiAgIFwiUm9jayAmIFJ1bGVcIixcbiAgIFwiUm9tYW5jaW5nIHRoZSBTdG9uZVwiLFxuICAgXCJUaGUgSmV3ZWwgb2YgdGhlIE5pbGVcIixcbiAgIFwiVGhlIFJ1bm5pbmcgTWFuXCIsXG4gICBcIlJ1bm5pbmcgb24gRW1wdHlcIixcbiAgIFwiTGl0dGxlIE5pa2l0YVwiLFxuICAgXCJSdXNza2llc1wiLFxuICAgXCJTYXkgQW55dGhpbmcuLi5cIixcbiAgIFwiU2Nhbm5lcnNcIixcbiAgIFwiU2Nyb29nZWRcIixcbiAgIFwiVGhlIFNlcnBlbnQgYW5kIHRoZSBSYWluYm93XCIsXG4gICBcIlRoZSBTZXZlbnRoIFNpZ25cIixcbiAgIFwiU2hvcnQgQ2lyY3VpdFwiLFxuICAgXCJTaWQgYW5kIE5hbmN5XCJcbl1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vcy9hdXRvY29tcGxldGUvc3JjL3dvcmRfbGlzdC5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYy9leC5qcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0YWxpa2UvcmVhY3RhbGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChzZWxmLCBjcmVhdGVFbGVtKSA9PiB7XG4gICBsZXQgcmUgPSBuZXcgUmVnRXhwKC9eZXhfL2kpXG5cbiAgIGZ1bmN0aW9uIHJlbW92ZVByb3AoZWxlbWVudCwgYXR0cikge1xuICAgICAgaWYgKCFzZWxmLmV2ZW50c1thdHRyXSAmJiAhcmUudGVzdChhdHRyKSkge1xuICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9XG4gICB9O1xuXG4gICBmdW5jdGlvbiBjaGFuZ2VQcm9wKGVsZW1lbnQsIGF0dHIsIHZhbCkge1xuICAgICAgaWYgKCFzZWxmLmV2ZW50c1thdHRyXSAmJiAhcmUudGVzdChhdHRyKSB8fCBhdHRyID09PSAnc3JjJykge1xuICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgICAgIH1cbiAgIH07XG5cbiAgIGZ1bmN0aW9uIHVwZGF0ZVByb3AoZWxlbWVudCwgbmFtZSwgbmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgIGlmICghbmV3VmFsKSB7XG4gICAgICAgICByZW1vdmVQcm9wKGVsZW1lbnQsIG5hbWUpO1xuICAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYgKCFvbGRWYWwgfHwgbmV3VmFsICE9PSBvbGRWYWwpIHtcbiAgICAgICAgIGNoYW5nZVByb3AoZWxlbWVudCwgbmFtZSwgbmV3VmFsKTtcbiAgICAgIH1cbiAgIH07XG5cbiAgIGZ1bmN0aW9uIHVwZGF0ZVByb3BzKGVsZW1lbnQsIG5ld1Byb3BzLCBvbGRQcm9wcyA9IHt9KSB7XG4gICAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIG9sZFByb3BzLCBuZXdQcm9wcyk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgICB1cGRhdGVQcm9wKGVsZW1lbnQsIG5hbWUsIG5ld1Byb3BzW25hbWVdLCBvbGRQcm9wc1tuYW1lXSk7XG4gICAgICB9O1xuICAgfTtcblxuICAgZnVuY3Rpb24gY2hhbmdlZChub2RlMSwgbm9kZTIpIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygbm9kZTEgIT09IHR5cGVvZiBub2RlMiB8fCB0eXBlb2Ygbm9kZTEgPT09ICdzdHJpbmcnICYmIG5vZGUxICE9PSBub2RlMiB8fCBub2RlMS50eXBlICE9PSBub2RlMi50eXBlXG4gICB9O1xuXG4gICBmdW5jdGlvbiBjaGVja0ZvckV2ZW50cyhub2RlKSB7XG4gICAgICBpZiAobm9kZS5wcm9wcy5leF9ldmVudEZ1bmNOYW1lKSB7XG4gICAgICAgICBub2RlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLnByb3BzLmV4X2F0dGFjaGVkRnVuYywgbm9kZS5wcm9wcy5leF9ldmVudEZ1bmNOYW1lKTtcbiAgICAgIH1cbiAgIH07XG5cbiAgIGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQocGFyZW50LCBuZXdOb2RlLCBvbGROb2RlLCBpbmRleCA9IDApIHtcbiAgICAgIGlmICgodHlwZW9mIG5ld05vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBuZXdOb2RlID09PSAnbnVtYmVyJykgfHwgKHR5cGVvZiBvbGROb2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygb2xkTm9kZSA9PT0gJ251bWJlcicpKSB7XG4gICAgICAgICBsZXQgdmRvbWlkID0gcGFyZW50LnByb3BzLnRyYWNlICsgJy4nICsgaW5kZXg7XG4gICAgICAgICBpZiAoY2hhbmdlZChuZXdOb2RlLCBvbGROb2RlKSkge1xuICAgICAgICAgICAgcGFyZW50LmRvbUVsZW1lbnQucmVwbGFjZUNoaWxkKGNyZWF0ZUVsZW0obmV3Tm9kZSwgdmRvbWlkLCBwYXJlbnQudHJhY2UpLCBwYXJlbnQuZG9tRWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICAgICB9XG5cbiAgICAgICAgIHJldHVyblxuICAgICAgfTtcblxuICAgICAgaWYgKCFvbGROb2RlKSB7XG4gICAgICAgICBsZXQgdmRvbWlkID0gcGFyZW50LnByb3BzLnRyYWNlICsgJy4nICsgaW5kZXg7XG4gICAgICAgICBuZXdOb2RlLmRvbUVsZW1lbnQgPSBjcmVhdGVFbGVtKG5ld05vZGUsIHZkb21pZCwgcGFyZW50LnRyYWNlKTtcbiAgICAgICAgIHBhcmVudC5kb21FbGVtZW50LmFwcGVuZENoaWxkKG5ld05vZGUuZG9tRWxlbWVudCk7XG4gICAgICAgICByZXR1cm5cbiAgICAgIH07XG4gICAgICBpZiAoIW5ld05vZGUpIHtcbiAgICAgICAgIGNoZWNrRm9yRXZlbnRzKG9sZE5vZGUpO1xuICAgICAgICAgcGFyZW50LmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQob2xkTm9kZS5kb21FbGVtZW50KTtcbiAgICAgICAgIHJldHVyblxuICAgICAgfTtcbiAgICAgIGlmIChjaGFuZ2VkKG5ld05vZGUsIG9sZE5vZGUpKSB7XG5cbiAgICAgICAgIGxldCB2ZG9taWQgPSBwYXJlbnQucHJvcHMudHJhY2UgKyAnLicgKyBpbmRleDtcbiAgICAgICAgIG5ld05vZGUuZG9tRWxlbWVudCA9IGNyZWF0ZUVsZW0obmV3Tm9kZSwgdmRvbWlkLCBuZXdOb2RlLnBhcmVudCk7XG4gICAgICAgICBsZXQgcmVwbCA9IHR5cGVvZiBvbGROb2RlID09PSAnc3RyaW5nJyA/IHBhcmVudC5kb21FbGVtZW50LmNoaWxkcmVuW2luZGV4XSA6IG9sZE5vZGUuZG9tRWxlbWVudDtcbiAgICAgICAgIHBhcmVudC5kb21FbGVtZW50LnJlcGxhY2VDaGlsZChuZXdOb2RlLmRvbUVsZW1lbnQsIHJlcGwpO1xuXG4gICAgICAgICByZXR1cm5cbiAgICAgIH07XG4gICAgICBpZiAobmV3Tm9kZS50eXBlKSB7XG5cbiAgICAgICAgIG5ld05vZGUuZG9tRWxlbWVudCA9IG9sZE5vZGUuZG9tRWxlbWVudCA/IG9sZE5vZGUuZG9tRWxlbWVudCA6IGNyZWF0ZUVsZW0obmV3Tm9kZSwgbmV3Tm9kZS50cmFjZSwgbmV3Tm9kZS5wYXJlbnQpO1xuXG4gICAgICAgICB1cGRhdGVQcm9wcyhuZXdOb2RlLmRvbUVsZW1lbnQsIG5ld05vZGUucHJvcHMsIG9sZE5vZGUucHJvcHMpO1xuXG4gICAgICAgICBjb25zdCBuZXdMZW5ndGggPSBuZXdOb2RlLm5lc3RlZCA/IG5ld05vZGUubmVzdGVkLmxlbmd0aCA6IDA7XG5cbiAgICAgICAgIGlmICh0eXBlb2Ygb2xkTm9kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG9sZE5vZGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICB1cGRhdGVFbGVtZW50KG5ld05vZGUsIG5ld05vZGUubmVzdGVkW2ldLCBudWxsLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVFbGVtZW50O1xuICAgICAgICAgfTtcbiAgICAgICAgIG9sZE5vZGUubmVzdGVkID0gb2xkTm9kZS5uZXN0ZWQgPyBvbGROb2RlLm5lc3RlZCA6IFtdO1xuICAgICAgICAgY29uc3Qgb2xkTGVuZ3RoID0gb2xkTm9kZS5uZXN0ZWQubGVuZ3RoO1xuXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0xlbmd0aCB8fCBpIDwgb2xkTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHVwZGF0ZUVsZW1lbnQob2xkTm9kZSwgbmV3Tm9kZS5uZXN0ZWRbaV0sIG9sZE5vZGUubmVzdGVkW2ldLCBpKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH07XG4gICByZXR1cm4gdXBkYXRlRWxlbWVudDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3RhbGlrZS9zcmMvZGlmZmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEV2ZW50bGlzdCA9IHJlcXVpcmUoXCIuL2xpYi9ldmVudGxpc3QuanNcIik7XG5cbmZ1bmN0aW9uIGV4dHJhY3RFdmVudE5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5zbGljZSgyKS50b0xvd2VyQ2FzZSgpO1xufTtcbnZhciB2aWRlb0V2ZW50cyA9IHtcbiAgb25Mb2FkZWREYXRhOiB7fSxcbiAgb25Mb2FkZWRNZXRhZGF0YToge30sXG4gIG9uTG9hZFN0YXJ0OiB7fSxcbiAgb25QYXVzZToge30sXG4gIG9uUGxheToge30sXG4gIG9uUGxheWluZzoge30sXG4gIG9uUHJvZ3Jlc3M6IHt9LFxuICBvblJhdGVDaGFuZ2U6IHt9LFxuICBvblNlZWtlZDoge30sXG4gIG9uU2Vla2luZzoge30sXG4gIG9uV2FpdGluZzoge30sXG4gIG9uTG9hZDoge31cbn07XG5cbnZhciBmb3JtRXZlbnRzID0ge1xuICBvbkNoYW5nZToge30sXG4gIG9uRm9jdXM6IHt9LFxuICBvbkJsdXI6IHt9LFxuICBvblNlbGVjdDoge30sXG4gIG9uU2VhcmNoOiB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudGxpc3QucmVkdWNlKGZ1bmN0aW9uIChvYiwgaXRtKSB7XG4gIG9iW2l0bV0gPSB7XG4gICAgcmVnaXN0ZXJlZDogZmFsc2UsXG4gICAgZXZlbnROYW1lOiBleHRyYWN0RXZlbnROYW1lKGl0bSksXG4gICAgZXZlbnROUzogaXRtLFxuICAgIG1lZGlhRXZlbnQ6IHZpZGVvRXZlbnRzW2l0bV0gIT09IHVuZGVmaW5lZCxcbiAgICBmb3JtRXZlbnQ6IGZvcm1FdmVudHNbaXRtXSAhPT0gdW5kZWZpbmVkXG4gIH07XG4gIHJldHVybiBvYjtcbn0sIHt9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3RhbGlrZS9zcmMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBldmVudHMgPSByZXF1aXJlKFwiLi9ldmVudHMuanNcIik7XG52YXIgc2V0RGlmZiA9IHJlcXVpcmUoXCIuL2RpZmZpbmcuanNcIik7XG52YXIgaGFuZHlIZWxwZXJzID0gcmVxdWlyZShcIi4vbGliL2hhbmR5X2Z1bmNzLmpzXCIpO1xudmFyIHNtb290aE5lc3RlZCA9IGhhbmR5SGVscGVycy5zbW9vdGhBcnJheSgpO1xudmFyIGZvcm1UYWdzID0ge1xuICB0ZXh0YXJlYTogdHJ1ZSxcbiAgc2VsZWN0OiB0cnVlLFxuICBpbnB1dDogdHJ1ZSxcbiAgb3V0cHV0OiB0cnVlLFxuICBmb3JtOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBOb2RlTWFwKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBhcHBUaXRsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2RlZmF1bHQnO1xuXG4gIHRoaXMuYXBwVGl0bGUgPSBhcHBUaXRsZTtcbiAgdGhpcy5kb21Db21wb25lbnRzID0ge307XG4gIHRoaXMucm9vdENvbXBvbmVudCA9IG51bGw7XG4gIHRoaXMuYXBwUm9vdERvbSA9IHtcbiAgICBkb21FbGVtZW50OiBudWxsLFxuICAgIG5lc3RlZDogW11cbiAgfTtcbiAgdGhpcy5hcHBSb290ID0gbnVsbDtcbiAgdGhpcy5tb3VudGVkQ2FsbGJhY2tzID0gW107XG4gIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuXG4gIHRoaXMuY3JlYXRlVWRpZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFwiMDAwMFwiICsgKE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdygzNiwgNCkgPDwgMCkudG9TdHJpbmcoMzYpKS5zbGljZSgtNCk7XG4gIH07XG5cbiAgdGhpcy5yYW5kb21GdW5jSWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdmdW5jJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygxOCk7XG4gIH07XG5cbiAgdGhpcy5nZXRFbGVtZW50ID0gZnVuY3Rpb24gKGRvbUVsZW1lbnQpIHtcbiAgICBpZiAoZG9tRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBfdGhpcy5hcHBSb290ID0gZG9tRWxlbWVudDtcbiAgICAgIF90aGlzLmFwcFJvb3REb20uZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRvbUVsZW1lbnQpO1xuICAgIGlmIChlbGVtKSB7XG4gICAgICBfdGhpcy5hcHBSb290ID0gZWxlbTtcbiAgICAgIF90aGlzLmFwcFJvb3REb20uZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkVsZW1lbnQ6IFwiICsgZG9tRWxlbWVudCArIFwiIG5vdCBmb3VuZFwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIHRoaXMuc2V0TGlzdGVuZXIgPSBmdW5jdGlvbiAobGlzdGVuZXIsIHR5cGUpIHtcbiAgICB2YXIgc2VsZiA9IF90aGlzO1xuICAgIF90aGlzLmFwcFJvb3QuYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lciwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHNlbGYubG9va1VwUmVnaXN0cnkoZS50YXJnZXQsIHR5cGUsIGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuc2V0TGlzdGVuZXJFbCA9IGZ1bmN0aW9uIChldmVudE9iLCBjYiwgbm9kZSkge1xuICAgIHZhciBzZWxmID0gX3RoaXM7XG4gICAgdmFyIGV2bk5hbWUgPSBldmVudE9iLmV2ZW50TlM7XG4gICAgbm9kZS5wcm9wcy5leF9ldmVudEZ1bmNOYW1lID0gX3RoaXMucmFuZG9tRnVuY0lkKCk7XG4gICAgbm9kZS5wcm9wcy5leF9hdHRhY2hlZEZ1bmMgPSBldm5OYW1lO1xuICAgIGNvbnNvbGUubG9nKCdub2RlJywgbm9kZSk7XG4gICAgX3RoaXMuZXZlbnRzW2V2bk5hbWVdW25vZGUucHJvcHMuZXhfZXZlbnRGdW5jTmFtZV0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgbm9kZS5wcm9wc1tldm5OYW1lXShlLCBub2RlLmRvbUVsZW1lbnQsIG5vZGUpO1xuICAgIH07XG4gICAgbm9kZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRPYi5ldmVudE5hbWUsIF90aGlzLmV2ZW50c1tldm5OYW1lXVtub2RlLnByb3BzLmV4X2V2ZW50RnVuY05hbWVdKTtcbiAgfTtcblxuICB0aGlzLmFwcGx5TGlzdGVuZXIgPSBmdW5jdGlvbiAobGlzdGVuZXIsIG5vZGUpIHtcbiAgICB2YXIgZXZlbnRJbmZvID0gX3RoaXMuZXZlbnRzW2xpc3RlbmVyXTtcbiAgICB2YXIgb25TZWxmID0gZXZlbnRJbmZvLmZvcm1FdmVudCB8fCBldmVudEluZm8ubWVkaWFFdmVudCB8fCBmb3JtVGFnc1tub2RlLnR5cGVdO1xuICAgIGlmICghZXZlbnRJbmZvLnJlZ2lzdGVyZWQgJiYgIW9uU2VsZikge1xuICAgICAgZXZlbnRJbmZvLnJlZ2lzdGVyZWQgPSB0cnVlO1xuICAgICAgX3RoaXMuc2V0TGlzdGVuZXIoZXZlbnRJbmZvLmV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob25TZWxmICYmICFub2RlLnByb3BzLmV4X2V2ZW50RnVuY05hbWUpIHtcbiAgICAgIF90aGlzLnNldExpc3RlbmVyRWwoZXZlbnRJbmZvLCBsaXN0ZW5lciwgbm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMubG9va1VwUmVnaXN0cnkgPSBmdW5jdGlvbiAodGFyZ2V0LCBldmVudE5hbWUsIGUpIHtcbiAgICB2YXIgdGdUcmFjZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RyYWNlJyk7XG4gICAgdmFyIHRyYWNlQXJyYXkgPSB0Z1RyYWNlLnNwbGl0KCcuJyk7XG4gICAgY29uc29sZS5sb2coJ3RyYWNlQXJyYXknLCB0cmFjZUFycmF5KTtcbiAgICB2YXIgdkRvbSA9IF90aGlzLmRvbUNvbXBvbmVudHM7XG4gICAgY29uc29sZS5sb2coJ3ZEb20nLCB2RG9tKTtcbiAgICB0cmFjZUFycmF5LnNoaWZ0KCk7XG4gICAgdHJhY2VBcnJheS5tYXAoZnVuY3Rpb24gKGl0bSwgaSkge1xuICAgICAgaWYgKCF2RG9tLm5lc3RlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgbmVzdCA9IHZEb20ubmVzdGVkW2l0bV07XG4gICAgICB2RG9tID0gbmVzdDtcbiAgICAgIHJldHVybiBuZXN0O1xuICAgIH0pLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpdG0sIGlpKSB7XG4gICAgICBpZiAoaXRtKSB7XG4gICAgICAgIHZhciBoYXNBY3Rpb24gPSBpdG0ucHJvcHNbZXZlbnROYW1lXTtcbiAgICAgICAgaWYgKGhhc0FjdGlvbikge1xuICAgICAgICAgIGhhc0FjdGlvbihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuV2hlbk1vdW50ZWQgPSBmdW5jdGlvbiAoYWZ0ZXJNb3VudENCKSB7XG4gICAgX3RoaXMubW91bnRlZENhbGxiYWNrcy5wdXNoKGFmdGVyTW91bnRDQik7XG4gIH07XG5cbiAgdGhpcy5vYmplY3RDaGFuZ2UgPSBmdW5jdGlvbiAobmV3UmVuZGVyKSB7XG4gICAgdmFyIG5ld09iID0gX3RoaXMucmVyZW5kZXIobmV3UmVuZGVyLCAnUm9vdCcpO1xuICAgIGNvbnNvbGUubG9nKCduZXdSZW5kZXInLCBuZXdPYik7XG4gICAgX3RoaXMudXBkYXRlRWxlbWVudChfdGhpcy5kb21Db21wb25lbnRzLCBuZXdPYik7XG4gICAgX3RoaXMubW91bnRlZENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoKTtcbiAgICB9KTtcbiAgICBfdGhpcy5tb3VudGVkQ2FsbGJhY2tzID0gW107XG4gIH07XG5cbiAgdGhpcy5jcmVhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAob2JqLCBjb250YWluZXJFbGVtZW50KSB7XG5cbiAgICBpZiAoX3RoaXMuZ2V0RWxlbWVudChjb250YWluZXJFbGVtZW50KSkge1xuICAgICAgb2JqLmRvbUVsZW1lbnQgPSBfdGhpcy5hcHBSb290O1xuICAgICAgX3RoaXMubW91bnRBcHAob2JqKTtcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMudmlld09iamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ2FwcFJvb3REb20nLCBfdGhpcy5hcHBSb290RG9tKTtcbiAgICBjb25zb2xlLmxvZygnZG9tQnJhbmNoZXMnLCBfdGhpcy5kb21Db21wb25lbnRzKTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5ldmVudHMnLCBfdGhpcy5ldmVudHMpO1xuICB9O1xuXG4gIHRoaXMubW91bnRBcHAgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgX3RoaXMuZG9tQ29tcG9uZW50cyA9IG9iajtcbiAgICBfdGhpcy5hcHBSb290RG9tLm5lc3RlZC5wdXNoKF90aGlzLmRvbUNvbXBvbmVudHMpO1xuICAgIF90aGlzLmFwcFJvb3QuYXBwZW5kQ2hpbGQoX3RoaXMuaHRtbEJ1aWxkKG9iaiwgXCJSb290XCIpKTtcbiAgfTtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciByZSA9IG5ldyBSZWdFeHAoL15leF8vaSk7XG4gIHZhciBpc1NWRyA9IG5ldyBSZWdFeHAoLyhjaXJjbGV8Y2xpcFBhdGh8ZGVmc3xlbGxpcHNlfGd8aW1hZ2V8bGluZXxsaW5lYXJHcmFkaWVudHxtYXNrfHBhdGh8cGF0dGVybnxwb2x5Z29ufHBvbHlsaW5lfHJhZGlhbEdyYWRpZW50fHJlY3R8c3RvcHxzdmd8dGV4dHx0c3BhbikvaSk7XG4gIHRoaXMuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobmFtZSwgYXR0cnMpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoU3RyaW5nKG5hbWUpKTtcbiAgICBpZiAoIWF0dHJzKSByZXR1cm4gZWxlbWVudDtcblxuICAgIGZvciAodmFyIGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmICghc2VsZi5ldmVudHNbYXR0cl0gJiYgIXJlLnRlc3QoYXR0cikpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICB0aGlzLmNyZWF0ZUVsZW1lbnROUyA9IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyhuYW1lLCBhdHRycykge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUpO1xuXG4gICAgaWYgKCFhdHRycykgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgICBmb3IgKHZhciBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoIXNlbGYuZXZlbnRzW2F0dHJdICYmICFyZS50ZXN0KGF0dHIpKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUVsZW0gPSBmdW5jdGlvbiBjcmVhdGVFbGVtKG5vZGUsIGdyb3VwLCBwYXJlbnQpIHtcblxuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG5vZGUgPT09ICdudW1iZXInIHx8ICh0eXBlb2Ygbm9kZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG5vZGUpKSAhPT0gXCJvYmplY3RcIiAmJiBub2RlICE9PSBudWxsICYmIG5vZGUgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZSk7XG4gICAgfVxuICAgIG5vZGUucHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBub2RlLnByb3BzLCB7XG4gICAgICB0cmFjZTogZ3JvdXAsXG4gICAgICBwYXJlbnQ6IHBhcmVudFxuICAgIH0pO1xuXG4gICAgdmFyIGVsID0gaXNTVkcudGVzdChub2RlLnR5cGUpID8gc2VsZi5jcmVhdGVFbGVtZW50TlMobm9kZS50eXBlLCBub2RlLnByb3BzKSA6IHNlbGYuY3JlYXRlRWxlbWVudChub2RlLnR5cGUsIG5vZGUucHJvcHMpO1xuICAgIG5vZGUuZG9tRWxlbWVudCA9IGVsO1xuICAgIGZvciAodmFyIHByb3AgaW4gbm9kZS5wcm9wcykge1xuICAgICAgaWYgKHNlbGYuZXZlbnRzW3Byb3BdKSB7XG4gICAgICAgIHNlbGYuYXBwbHlMaXN0ZW5lcihwcm9wLCBub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbm9kZS5uZXN0ZWQgPSBub2RlLm5lc3RlZCA/IG5vZGUubmVzdGVkIDogW107XG4gICAgaWYgKG5vZGUubmVzdGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICBub2RlLm5lc3RlZC5tYXAoZnVuY3Rpb24gKGVsbSwgaWkpIHtcbiAgICAgIHZhciBlbG1JZCA9IGdyb3VwICsgJy4nICsgaWk7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbShlbG0sIGVsbUlkLCBncm91cCk7XG4gICAgfSkuZm9yRWFjaChlbC5hcHBlbmRDaGlsZC5iaW5kKGVsKSk7XG4gICAgcmV0dXJuIGVsO1xuICB9O1xuXG4gIHZhciByZVJlbmRlckVsZW0gPSBmdW5jdGlvbiByZVJlbmRlckVsZW0obm9kZSwgZ3JvdXAsIHBhcmVudCkge1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG5vZGUgPT09ICdudW1iZXInIHx8ICh0eXBlb2Ygbm9kZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG5vZGUpKSAhPT0gXCJvYmplY3RcIiAmJiBub2RlICE9PSBudWxsICYmIG5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgbm9kZS5uZXN0ZWQgPSBub2RlLm5lc3RlZCA/IG5vZGUubmVzdGVkIDogW107XG4gICAgbm9kZS5wcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIG5vZGUucHJvcHMsIHtcbiAgICAgIHRyYWNlOiBncm91cCxcbiAgICAgIHBhcmVudDogcGFyZW50XG4gICAgfSk7XG4gICAgbm9kZS5uZXN0ZWQubWFwKGZ1bmN0aW9uIChlbG0sIGlpKSB7XG4gICAgICB2YXIgZWxtSWQgPSBncm91cCArICcuJyArIGlpO1xuICAgICAgcmV0dXJuIHJlUmVuZGVyRWxlbShlbG0sIGVsbUlkLCBncm91cCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgdGhpcy5odG1sQnVpbGQgPSBmdW5jdGlvbiAobm9kZSwgZ3JvdXApIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbShub2RlLCBncm91cCwgJ1Jvb3QnKTtcbiAgfTtcblxuICB0aGlzLnJlcmVuZGVyID0gZnVuY3Rpb24gKG5vZGUsIGdyb3VwKSB7XG4gICAgcmV0dXJuIHJlUmVuZGVyRWxlbShub2RlLCBncm91cCwgJ1Jvb3QnKTtcbiAgfTtcblxuICB0aGlzLmRpZmZFbGVtZW50cyA9IHNldERpZmYoc2VsZiwgY3JlYXRlRWxlbSk7XG5cbiAgdGhpcy51cGRhdGVFbGVtZW50ID0gZnVuY3Rpb24gKG9sZE5vZGUsIG5ld05vZGUpIHtcbiAgICBfdGhpcy5kaWZmRWxlbWVudHMoX3RoaXMuYXBwUm9vdERvbSwgbmV3Tm9kZSwgb2xkTm9kZSk7XG4gICAgX3RoaXMuZG9tQ29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe30sIG9sZE5vZGUsIG5ld05vZGUpO1xuICB9O1xuXG4gIHRoaXMuU2V0U3RhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdub3QgeWV0IHNldCcpO1xuICB9O1xufTtcblxuTm9kZU1hcC5wcm90b3R5cGUuY29tcG9uZW50ID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoIShvYmogaW5zdGFuY2VvZiBBcnJheSkgJiYgb2JqIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgaWYgKCFvYmpbXCJjb21wb25lbnROYW1lXCJdIHx8ICFvYmpbXCJjb21wb25lbnRSZW5kZXJcIl0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJPYmplY3QgbXVzdCBoYXZlIGEgYnJhbmNoTmFtZSBhbmQgYnJhbmNoT2JqZWN0XCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9iai52ZG9tSWQgPSAnQCcgKyBvYmouY29tcG9uZW50TmFtZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG9wdHMpIHtcblxuICAgICAgcmV0dXJuIG9iai5jb21wb25lbnRSZW5kZXIob3B0cyk7XG4gICAgfTtcbiAgfVxufTtcblxuTm9kZU1hcC5wcm90b3R5cGUubm9kZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBuZXN0ZWQgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbmVzdGVkW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gdHlwZShwcm9wcyk7XG4gIH1cbiAgaWYgKG5lc3RlZCkge1xuICAgIG5lc3RlZCA9IHNtb290aE5lc3RlZChuZXN0ZWQpO1xuICB9IGVsc2Uge1xuICAgIG5lc3RlZCA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICBuZXN0ZWQ6IG5lc3RlZFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBwTmFtZSkge1xuICBpZiAoIWFwcE5hbWUpIHJldHVybiBuZXcgTm9kZU1hcCgnZXhhbXBsZScpO1xuXG4gIHJldHVybiBuZXcgTm9kZU1hcChhcHBOYW1lKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0YWxpa2Uvc3JjL2V4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gW1xuXCJvbkNvcHlcIixcblwib25DdXRcIiwgXG5cIm9uUGFzdGVcIiwgXG5cIm9uS2V5RG93blwiLCBcblwib25LZXlQcmVzc1wiLCBcblwib25LZXlVcFwiLFxuXCJvbkZvY3VzXCIsIFxuXCJvbkJsdXJcIiwgXG5cIm9uQ2hhbmdlXCIsIFxuXCJvbklucHV0XCIsXG5cIm9uU3VibWl0XCIsXG5cIm9uQ2xpY2tcIiwgXG5cIm9uQ29udGV4dE1lbnVcIixcblwib25Eb3VibGVDbGlja1wiLFxuXCJvbkRyYWdcIixcblwib25EcmFnRW5kXCIsIFxuXCJvbkRyYWdFbnRlclwiLCBcblwib25EcmFnRXhpdFwiLCBcblwib25EcmFnTGVhdmVcIixcblwib25EcmFnT3ZlclwiLCBcblwib25EcmFnU3RhcnRcIiwgXG5cIm9uRHJvcFwiLFxuXCJvbk1vdXNlRG93blwiLFxuXCJvbk1vdXNlRW50ZXJcIiwgXG5cIm9uTW91c2VMZWF2ZVwiLFxuXCJvbk1vdXNlTW92ZVwiLCBcblwib25Nb3VzZU91dFwiLCBcblwib25Nb3VzZU92ZXJcIixcblwib25Nb3VzZVVwXCIsIFxuXCJvblNlbGVjdFwiLCBcblwib25TY3JvbGxcIiwgXG5cIm9uQWJvcnRcIixcblwib25DYW5QbGF5XCIsIFxuXCJvbkNhblBsYXlUaHJvdWdoXCIsIFxuXCJvbkR1cmF0aW9uQ2hhbmdlXCIsXG5cIm9uRW1wdGllZFwiLFxuXCJvbkVuZGVkXCIsIFxuXCJvbkVycm9yXCIsXG5cIm9uTG9hZGVkRGF0YVwiLCBcblwib25Mb2FkZWRNZXRhZGF0YVwiLCBcblwib25Mb2FkU3RhcnRcIiwgXG5cIm9uUGF1c2VcIiwgXG5cIm9uUGxheVwiLFxuXCJvblBsYXlpbmdcIixcblwib25Qcm9ncmVzc1wiLFxuXCJvblJhdGVDaGFuZ2VcIixcblwib25TZWVrZWRcIiwgXG5cIm9uU2Vla2luZ1wiLCBcblwib25XYWl0aW5nXCIsXG5cIm9uTG9hZFwiLCBcblwib25FcnJvclwiLFxuXCJvbkFuaW1hdGlvblN0YXJ0XCIsXG5cIm9uQW5pbWF0aW9uRW5kXCIsIFxuXCJvbkFuaW1hdGlvbkl0ZXJhdGlvblwiLCBcblwib25UcmFuc2l0aW9uRW5kXCJcbl1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3RhbGlrZS9zcmMvbGliL2V2ZW50bGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9mbGF0dGVuID0gZnVuY3Rpb24gX2ZsYXR0ZW4oYSwgYikge1xuICAgcmV0dXJuIGEuY29uY2F0KEFycmF5LmlzQXJyYXkoYikgPyBiLnJlZHVjZShfZmxhdHRlbiwgW10pIDogYik7XG59O1xuXG5mdW5jdGlvbiBmbGF0dGVuSXRlcmF0aW9uKGFyciwgZmxhdEFycikge1xuICAgZmxhdEFyciA9IGZsYXRBcnIgfHwgW107XG5cbiAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoIHwgMDtcblxuICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggPSBpbmRleCArIDEpIHtcbiAgICAgIHZhciBpdGVtID0gYXJyW2luZGV4XTtcbiAgICAgIGl0ZW0uY29uc3RydWN0b3IgPT09IEFycmF5ID8gZmxhdHRlbkl0ZXJhdGlvbihpdGVtLCBmbGF0QXJyKSA6IGZsYXRBcnJbZmxhdEFyci5sZW5ndGhdID0gaXRlbTtcbiAgIH1cblxuICAgcmV0dXJuIGZsYXRBcnI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgIHNtb290aEFycmF5OiBmdW5jdGlvbiBzbW9vdGhBcnJheSgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAobmVzdGVkKSB7XG4gICAgICAgICAvLyBpZiggQXJyYXkuaXNBcnJheShuZXN0ZWQpICkgcmV0dXJuIFtdO1xuXG4gICAgICAgICByZXR1cm4gbmVzdGVkLnJlZHVjZShfZmxhdHRlbiwgW10pLmZpbHRlcihmdW5jdGlvbiAobmUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZSAhPT0gbnVsbCAmJiBuZSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgfSk7XG4gICAgICB9O1xuICAgfSxcbiAgIGZsYXR0ZW46IGZ1bmN0aW9uIGZsYXR0ZW4obmVzdGVkKSB7XG4gICAgICByZXR1cm4gbmVzdGVkLnJlZHVjZShfZmxhdHRlbiwgW10pO1xuICAgfSxcbiAgIGNhcGl0YWxpemU6IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3RhbGlrZS9zcmMvbGliL2hhbmR5X2Z1bmNzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IEVYID0gcmVxdWlyZShcInJlYWN0YWxpa2VcIikoJ2F1dG9jb21wbGV0ZScpO1xuaW1wb3J0IEJ1aWxkVHJpZSBmcm9tICcuL3NyYy90cmllLmpzJztcbmNvbnN0IFdvcmRMaXN0ID0gcmVxdWlyZSgnLi9zcmMvd29yZF9saXN0LmpzJyk7XG5jb25zdCBXb3JkQWN0aW9ucyA9IHJlcXVpcmUoJy4vc3JjL3dvcmRfYWN0aW9ucy5qcycpO1xuY29uc3QgQXV0b2NvbXBsZXRlID0gQnVpbGRUcmllKFdvcmRMaXN0LCBXb3JkQWN0aW9ucyk7XG5cbmxldCBBcHBTdGF0ZSA9IHtcbiBzdWdnZXN0aW9uczogW11cbn1cblxuY29uc3QgbG9nQWN0aW9uID0gKHdvcmQpID0+IHtcbiAgcmV0dXJuICgpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKCdXb3JkQWN0aW9uc1t3b3JkXScsIHdvcmQgLCBXb3JkQWN0aW9uc1t3b3JkXSk7XG4gIH1cbn1cbmNvbnN0IHNlYXJjaFR5cGUgPSAoZSwgZWxlbSkgPT4ge1xuXHRsZXQgdHlwZWQgPSBlbGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpXG4gICAgRVguU2V0U3RhdGUoe1xuICAgIHN1Z2dlc3Rpb25zOiBBdXRvY29tcGxldGUubG9va3VwKHR5cGVkKVxuICB9KTtcbn1cbndpbmRvdy5hdXRvID0gQXV0b2NvbXBsZXRlO1xuIGNvbnNvbGUubG9nKCdXb3JkQWN0aW9ucycsIFdvcmRBY3Rpb25zKTtcbmNvbnN0IExheW91dCA9IHtcbiAgc3RhdGU6IEFwcFN0YXRlLFxuICByZW5kZXI6ICgpID0+IHtcbiAgICBsZXQge1xuICAgICAgc3VnZ2VzdGlvbnNcbiAgICB9ID0gTGF5b3V0LnN0YXRlO1xuXG4gICAgbGV0IG1vdmllU3VnZ2VzdGlvbnMgPSBzdWdnZXN0aW9ucy5tYXAoKGl0bSkgPT4ge1xuXG4gICAgXHRyZXR1cm4gPGxpIG9uQ2xpY2s9e2xvZ0FjdGlvbihpdG0pfT57aXRtfTwvbGk+XG4gICAgfSlcbiAgICByZXR1cm4gKFxuXHQ8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge2NvbnNvbGUubG9nKCdjbGlja2VkIHRoaXMhJyl9fSBjbGFzcz1cImNvbC1zbS02IGNvbC1zbS1vZmZzZXQtM1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImltYWdpbmFyeV9jb250YWluZXJcIj4gXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIHN0eWxpc2gtaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBvbktleVVwPXtzZWFyY2hUeXBlfSB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAgXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGlkPVwic2VhcmNoX2xpc3RcIj5cbiAgICAgICAgICAgIHttb3ZpZVN1Z2dlc3Rpb25zfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cdDwvZGl2PlxuICAgIClcbiAgfVxufTtcbkVYLnJvb3RDb21wb25lbnQgPSBMYXlvdXQ7XG5cbkVYLlNldFN0YXRlID0gKCgpID0+IHtcbiAgcmV0dXJuIChwYXlsb2FkKSA9PiB7XG4gICAgTGF5b3V0LnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgTGF5b3V0LnN0YXRlLCBwYXlsb2FkKTtcbiAgICBFWC5vYmplY3RDaGFuZ2UoTGF5b3V0LnJlbmRlcigpKTtcbiAgfVxufSkoKTtcblxuRVguY3JlYXRlQ29tcG9uZW50KFxuICBMYXlvdXQucmVuZGVyKCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW9zL2F1dG9jb21wbGV0ZS9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==