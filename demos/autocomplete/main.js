import EX from 'reactalike'
import BuildTrie from 'src/trie';
import ListItem from './components/list_item'
const WordList = require('src/word_list');
const WordActions = require('src/word_actions');
const Autocomplete = BuildTrie(WordList, WordActions);

const AppState = {
 suggestions: [],
 typed: ""
}

const logAction = (word) => {
  return () => {

    console.log('WordActions[word]', word , WordActions[word]);
  }
}
const searchType = (e, elem, otherNode) => {
  console.log('searchType e', e)
  console.log('searchType elem', elem)
  console.log('searchType otherNode', otherNode)
	let typed = elem.value.toLowerCase().trim()
  let sugg = Autocomplete.lookup(typed)
  console.log('sugg', sugg)
    EX.SetState({
    suggestions: sugg,
    typed: typed
  });
}

const Layout = {
  state: AppState,
  render: () => {
    let {
      suggestions,
      typed
    } = Layout.state;

    let movieSuggestions = suggestions.map((itm) => {
      let data = {suggestion: itm, typed: typed, clickAction: logAction(itm)}
      return <ListItem ex_data={data}/>
    })
    return (
    	<div class="row">
        <div onClick={() => {console.log('clicked this!')}} class="col-sm-6 col-sm-offset-3">
            <div id="imaginary_container">
                <div class="input-group stylish-input-group">
                    <input  onKeyUp={ searchType } type="text" class="form-control"  placeholder="Search" />
                    <span class="input-group-addon">
                        <button type="submit">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </div>
            <ul id="search_list">
            { movieSuggestions }
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
