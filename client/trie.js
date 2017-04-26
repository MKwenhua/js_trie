function Trie(wordList) {
   function addCharToTrie(index, word, wordFragment, branch, trie) {
      if (index === wordFragment.length) {
        let nextFragment = wordFragment.split(/\s+/).slice(1).join(' ')
        if(!nextFragment.length) return trie

        trie[nextFragment[0]] = trie[nextFragment[0]] ? trie[nextFragment[0]] : {word: null};
        return addCharToTrie(1,word, nextFragment, trie[nextFragment[0]] , trie);
      }
      var char = wordFragment[index];
      if (!branch[char]) {
         branch[char] = {
            word: null,
            action: null
         };
      }

      branch[char].word = (wordFragment.length - 1) === index ? word : null;

      return addCharToTrie(index + 1, word, wordFragment, branch[char], trie)
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
   this.findWords = (branch, lookupId) => {
      var self = this;
      console.log(branch)
      var list = [];
      function mineWord(brn) {
         if (brn.word) {
            list.push(brn.word);
            if (list.length === self.wordLimit)
               return list;
            }
         for (let key in brn) {
            if (typeof brn[key] !== 'string' && brn[key] !== null && self.currentLoopup === lookupId) {
               mineWord(brn[key])
            }
         }
         return list;
      }

      return mineWord(branch);
   }
   this.getWordList = (charString) => {
      var foundWords = [];
      if(!charString) return foundWords;
      var branch = getBranch(charString, this.head);
      if (!branch)
         return foundWords;
      var lookupId = Math.random().toString(36).substring(18);
      this.currentLoopup = lookupId;
      return this.findWords(branch, lookupId);

   }

   this.words = wordList;
   this.head = wordList.reduce((head, word) => {
      var wordLowerCase = word.toLowerCase()
      head[wordLowerCase[0]] = head[wordLowerCase[0]] ? head[wordLowerCase[0]] : {
         word: null,
         action: null
      };
      return addCharToTrie(1, word, wordLowerCase, head[wordLowerCase[0]], head);
   }, {});
   this.lookup = (letters) => {
      return this.getWordList(letters.toLowerCase())
   }
}

window.trie = new Trie(wordsForAutoComplete)
