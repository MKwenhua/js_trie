import EX from 'reactalike';
import BuildTrie from './src/trie.js';
const WordList = require('./src/word_list.js');
const WordActions = require('./src/word_actions.js');
const Autocomplete = BuildTrie(WordList, WordActions);

let AppState = {
 suggestions: []
}

const logAction = (word) => {
  return () => {

    console.log('WordActions[word]', word , WordActions[word]);
  }
}
const searchType = (e, elem) => {
	let typed = elem.value.toLowerCase().trim()
    EX.SetState({
    suggestions: Autocomplete.lookup(typed)
  });
}
window.auto = Autocomplete;
 console.log('WordActions', WordActions);
const Layout = {
  state: AppState,
  render: () => {
    let {
      suggestions
    } = Layout.state;

    let movieSuggestions = suggestions.map((itm) => {

    	return <li onClick={logAction(itm)}>{itm}</li>
    })
    return (
	<div class="row">
        <div onClick={() => {console.log('clicked this!')}} class="col-sm-6 col-sm-offset-3">
            <div id="imaginary_container"> 
                <div class="input-group stylish-input-group">
                    <input  onKeyUp={searchType} type="text" class="form-control"  placeholder="Search" />
                    <span class="input-group-addon">
                        <button type="submit">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>  
                    </span>
                </div>
            </div>
            <ul id="search_list">
            {movieSuggestions}
            </ul>
        </div>
	</div>
    )
  }
};
EX.rootComponent = Layout;

EX.SetState = (() => {
  return (payload) => {
    Layout.state = Object.assign({}, Layout.state, payload);
    EX.objectChange(Layout.render());
  }
})();

EX.createComponent(
  Layout.render(), document.getElementById('root'));