import EX from 'reactalike'

class ResultAction extends EX.Component {
  render() {
    const { word, img_src, imdb } = this.props.ex_data
    return (
      <div class='action-list-item'>
        <div class='col-xs-1'>
          <img src={img_src} height='60'/>
        </div>
        <div class='col-xs-10'>
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
