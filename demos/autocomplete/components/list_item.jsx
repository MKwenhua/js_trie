import React, { PureComponent } from 'react'

class ListItem extends PureComponent {
  render() {
    const { suggestion, typed, clickAction } = this.props.data
    const regex = new RegExp('(' + typed + ')', 'gi')
    const matchText = new RegExp(typed, 'i')
    const highlightedText = suggestion.split(regex).map((text, i) => {
      if (matchText.test(text)) {
        return <b key={i}>{text}</b>
      }
      return <span key={i}>{text}</span>
    })
    return <li onClick={clickAction}>{highlightedText}</li>
  }
}

export default ListItem
