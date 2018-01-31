import React, { PureComponent } from 'react'
import ListItem from 'component/list_item'
import ResultAction from 'component/result_action';
import 'stylesheet/SpecialDeal.css';
import {
  AutoComplete
} from 'autocomplete';

class Layout extends PureComponent {
  state = {
    suggestions: [],
    typed: ''
  }
  searchType = e => {
    const typed = e.target.value.toLowerCase().trim();
    const suggestions = AutoComplete.lookup(typed);
    console.log('suggestions', suggestions);
    this.setState({ suggestions, typed });
  }
  render() {
    const { suggestions, typed } = this.state;

    const movieSuggestions = suggestions.map( (itm , i) => {
      if (typeof itm === 'function') {
        return <div key={i}>{ itm(this) }</div>
      }
      if (typeof itm === 'string') {
        let data = {
          suggestion: itm,
          typed: typed
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
              <input onKeyUp={this.searchType} type='text' className='form-control' placeholder='Search'/>
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
