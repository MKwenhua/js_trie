import React, { PureComponent } from 'react'
import BuildTrie from 'buildtrie';
import ListItem from 'component/list_item'
import ResultAction from 'component/result_action';
import AppState from '../state/appstate'
const WordList = require('src/word_list');
const WordActions = require('src/word_actions');
const Autocomplete = BuildTrie(WordList, WordActions);

class Layout extends PureComponent {
  state = {
    suggestions: [],
    typed: ''
  }
  searchType = e => {
    const typed = e.target.value.toLowerCase().trim();
    const suggestions = Autocomplete.lookup(typed);
    console.log('suggestions', suggestions);
    this.setState({ suggestions, typed });
  }
  render() {
    const { suggestions, typed } = this.state;

    const movieSuggestions = suggestions.map( (itm , i) => {
      if (typeof itm === 'string') {
        let data = {
          suggestion: itm,
          typed: typed,
          clickAction: logAction(itm)
        }
        return <ListItem key={i} data={data}/>
      }
      return <ResultAction key={i} data={itm}/>
    })
    return (
      <div className='row'>
        <div className='col-sm-6 col-sm-offset-3'>
          <div id='imaginary_container'>
            <div className='input-group stylish-input-group'>
              <input onKeyUp={searchType} type='text' className='form-control' placeholder='Search'/>
              <span className='input-group-addon'>
                <button type='submit'>
                  <span className='glyphicon glyphicon-search'></span>
                </button>
              </span>
            </div>
          </div>
          <ul id='search_list'>
            {movieSuggestions}
          </ul>
        </div>
      </div>
    )
  }
};

export default Layout
