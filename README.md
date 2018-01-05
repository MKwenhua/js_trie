# Autocomplete Trie

A Javascript Trie data structures for autocomplete.

![](/autocomplete_trie.gif)


## How To Use

```javascript
import BuildTrie from 'action-autocomplete';

const WordsForAutoComplete = [
   "Aliens",
   "Robocop",
   "Beverly Hills Cop",
   "Revenge of the Nerds",
   "Blade Runner",
   "Raiders of the Lost Ark",
   "Gremlins",
   "Revenge of the Nerds II: Nerds in Paradise",
   "Ferris Bueller's Day Off",
   "The Road Warrior",
   "Mad Max Beyond Thunderdome"
]

//KeyWordActions are so you can match an Object to returned if the text has been matched. This is great for embedding extra data with each result. 

const KeyWordActions = {
	"Raiders of the Lost Ark":{
      word: 'Raiders of the Lost Ark',
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SY1000_CR0,0,664,1000_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0082971'
   },
   "Ferris Bueller's Day Off":  {
      word: 'Ferris Bueller\'s Day Off',
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDA0NjZhZWUtNmI2NC00MmFjLTgwZDYtYzVjZmNhMDVmOTBkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   }
}

const AutoComplete = BuildTrie(WordsForAutoComplete, KeyWordActions);

//To look up a string of text use lookup, this will return an array of matching text as strings and objects if you happen to include some Key Word Actions.

let sugg = Autocomplete.lookup(typed)

```

**note:** The second parameter `actions` is optional. 


