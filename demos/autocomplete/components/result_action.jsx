import React, { PureComponent } from 'react'

class ResultAction extends PureComponent {
  render() {
    const { word, img_src, imdb } = this.props.data
    return (
      <div className='action-list-item'>
        <div className='col-xs-1'>
          <img src={img_src} height='60'/>
        </div>
        <div className='col-xs-10'>
          <h4>{word}</h4>
          <p>
            <a href={imdb}>IMDB Link</a>
          </p>
        </div>
      </div>
    )
  }
}

export default ResultAction
