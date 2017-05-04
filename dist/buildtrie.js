module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
   var TrieContext = this;
   function getAction(word) {
      return actions[word] ? actions[word] : null;
   }

   function addCharToTrie(index, word, wordFragment, branch, trie, fragment) {
      if (index === wordFragment.length) return trie;

      var char = wordFragment[index];
      var nodeWord = wordFragment.length - 1 === index ? word : null;
      if (!branch[char]) {
         branch[char] = {
            word: nodeWord,
            fragments: null,
            action: wordFragment.length - 1 === index ? getAction(word) : null
         };
      }
      if (fragment && nodeWord) {
         var fragmentArray = branch[char].fragments ? branch[char].fragments : [];
         branch[char].fragments = fragmentArray.concat(nodeWord);
      }
      return addCharToTrie(index + 1, word, wordFragment, branch[char], trie, fragment);
   }

   function getBranch(charString, trie) {
      var branch = trie;
      for (var i = 0; i < charString.length; i++) {
         branch = branch[charString[i]];
         if (!branch) return null;
      }
      return branch;
   }
   TrieContext.words = wordList;
   TrieContext.actions = actions;
   TrieContext.foundWordsIndex = {};

   TrieContext.findWords = function (branch, lookupId) {
      console.log(branch);
      var list = [];
      function mineWord(brn) {
         if (brn.word) {
            if (!TrieContext.foundWordsIndex[brn.word]) {
               list.push(brn.action || brn.word);
               TrieContext.foundWordsIndex[brn.word] = true;
            }
            if (list.length === TrieContext.wordLimit) return list;
         }
         if (brn.fragments) {
            list.concat(brn.fragments.filter(function (txt) {
               return !TrieContext.foundWordsIndex[txt];
            }));
         }
         for (var key in brn) {
            if (typeof brn[key] !== 'string' && brn[key] !== null && TrieContext.currentLoopup === lookupId) {
               mineWord(brn[key]);
            }
         }
         return list;
      }

      return mineWord(branch);
   };
   TrieContext.getWordList = function (charString) {
      var foundWords = [];
      TrieContext.foundWordsIndex = {};
      if (!charString) return foundWords;
      var branch = getBranch(charString, TrieContext.head);
      if (!branch) return foundWords;
      var lookupId = Math.random().toString(36).substring(18);
      TrieContext.currentLoopup = lookupId;
      return TrieContext.findWords(branch, lookupId);
   };

   TrieContext.head = wordList.reduce(function (head, word) {
      var wordLowerCase = word.toLowerCase();
      head[wordLowerCase[0]] = head[wordLowerCase[0]] ? head[wordLowerCase[0]] : {
         word: null,
         fragments: null,
         action: null
      };
      var wordFragment = wordLowerCase;
      var headAT = addCharToTrie(1, word, wordLowerCase, head[wordLowerCase[0]], head, false);
      while (wordFragment.length) {
         wordFragment = wordFragment.split(/\s+/).slice(1).join(' ');
         if (wordFragment) {
            headAT[wordFragment[0]] = headAT[wordFragment[0]] ? headAT[wordFragment[0]] : { word: null, fragments: null, action: null };
            headAT = addCharToTrie(1, word, wordFragment, headAT[wordFragment[0]], headAT, true);
         }
      }
      return headAT;
   }, {});
   TrieContext.lookup = function (letters) {
      return TrieContext.getWordList(letters.toLowerCase());
   };
}

function BuildTrie(wordList) {
   var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

   return new Trie(wordList, actions);
}

exports.default = BuildTrie;

/***/ })
/******/ ]);