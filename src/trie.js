function Node(nodeWord, action, fragments = null){
    this.word = nodeWord;
    this.action = action;
    this.fragments = fragments;
}

function Trie(wordList, actions) {
   const TrieContext = this;
   function getAction(word) {
      return actions[word] ? actions[word] : null;
   }

   function addCharToTrie(index, word, wordFragment, branch, trie, fragment) {
      if (index === wordFragment.length ) return trie

      let char = wordFragment[index];
      let nodeWord = (wordFragment.length - 1) === index ? word : null
      if (!branch[char]) {
         branch[char] = new Node(nodeWord, (wordFragment.length - 1) === index ? getAction(word) : null)
      }
      if (fragment && nodeWord) {
        let fragmentArray = branch[char].fragments ? branch[char].fragments : []
        branch[char].fragments = fragmentArray.concat(nodeWord)
      }
      return addCharToTrie(index + 1, word, wordFragment, branch[char], trie, fragment)
   }

   function getBranch(charString, trie) {
      var branch = trie;
      for (var i = 0; i < charString.length; i++) {
         branch = branch[charString[i]];
         if (!branch)
            return null;
         }
      return branch;
   }
   TrieContext.words = wordList;
   TrieContext.actions = actions;
   TrieContext.foundWordsIndex = {};

   TrieContext.findWords = (branch, lookupId) => {
      console.log(branch)
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
            list.concat(brn.fragments.filter((txt) => !TrieContext.foundWordsIndex[txt] ))
          }
         for (let key in brn) {
            if (typeof brn[key] !== 'string' && brn[key] !== null && TrieContext.currentLoopup === lookupId) {
               mineWord(brn[key])
            }
         }
         return list;
      }

      return mineWord(branch);
   }
   TrieContext.getWordList = (charString) => {
      var foundWords = [];
      TrieContext.foundWordsIndex = {};
      if(!charString) return foundWords;
      var branch = getBranch(charString, TrieContext.head);
      if (!branch) return foundWords;
      var lookupId = Math.random().toString(36).substring(18);
      TrieContext.currentLoopup = lookupId;
      return TrieContext.findWords(branch, lookupId);

   }

   TrieContext.head = wordList.reduce((head, word) => {
      var wordLowerCase = word.toLowerCase()
      head[wordLowerCase[0]] = head[wordLowerCase[0]] ? head[wordLowerCase[0]] : new Node(null, null, null)
      let wordFragment = wordLowerCase;
      let headAT = addCharToTrie(1, word, wordLowerCase, head[wordLowerCase[0]], head, false);
      while (wordFragment.length) {
        wordFragment = wordFragment.split(/\s+/).slice(1).join(' ')
        if (wordFragment) {
          headAT[wordFragment[0]] = headAT[wordFragment[0]] ? headAT[wordFragment[0]] : {word: null, fragments: null, action: null};
          headAT =  addCharToTrie(1,word, wordFragment, headAT[wordFragment[0]] , headAT, true);
        }
      }
      return headAT
   }, {});
   TrieContext.lookup = (letters) => {
      return TrieContext.getWordList(letters.toLowerCase())
   }
}

function BuildTrie(wordList, actions = {}) {
   return new Trie(wordList, actions);
}

export default BuildTrie;
