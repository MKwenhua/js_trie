import EX from 'reactalike'

class ListItem extends EX.Component {
  render() {
    const { suggestion, typed, clickAction } = this.props.ex_data
    const regex = new RegExp('(' + typed + ')', 'gi')
    const matchText = new RegExp(typed, 'i')
    const highlightedText = suggestion.split(regex).map((text, i) => {
      if (matchText.test(text)) {
        return <b>{text}</b>
      }
      return <span>{text}</span>
    })
    return <li onClick={clickAction}>{highlightedText}</li>
  }
}

export default ListItem
