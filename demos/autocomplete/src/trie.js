function Trie(wordList) {
   function addCharToTrie(index, word, branch, trie) {
      if (index === word.length)
         return trie;
      var char = word[index];
      if (!branch[char]) {
         branch[char] = {
            word: null,
            action: null
         };
      }
      branch[char].word = (word.length - 1) === index ? word : null;

      return addCharToTrie(index + 1, word, branch[char], trie)
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
   this.head = wordList.reduce((tr, word) => {
      var lw = word.toLowerCase()
      tr[lw[0]] = tr[lw[0]] ? tr[lw[0]] : {
         word: null,
         action: null
      };
      return addCharToTrie(1, lw, tr[lw[0]], tr);
   }, {});
   this.lookup = (letters) => {
      return this.getWordList(letters.toLowerCase())
   }
}

module.exports = Trie;