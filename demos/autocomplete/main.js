const EX = require("reactalike")('autocomplete');
const Trie = require('./src/trie.js');
const WordList = require('./src/word_list.js');

const Autocomplete = new Trie(WordList);

let AppState = {
 suggestions: []
}

const searchType = (e, elem) => {
	let typed = elem.value.toLowerCase().trim()
    EX.SetState({
    suggestions: Autocomplete.lookup(typed)
  });
}
const Layout = {
  state: AppState,
  render: () => {
    let {
      suggestions
    } = Layout.state;

    let movieSuggestions = suggestions.map((itm) => {
    	return <li>{itm}</li>
    })
    return (
	<div class="row">
        <div   class="col-sm-6 col-sm-offset-3">
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