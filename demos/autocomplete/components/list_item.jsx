import EX from 'ex'

const ListItem = EX.component({
  componentName: 'ListItem',
  componentRender: (props) => {
    let {suggestion, typed, clickAction} = props.ex_data
    let regex = new RegExp( '(' + typed + ')', 'gi')
    let matchText = new RegExp( typed, 'i')
    let highlightedText = suggestion.split(regex).map((text, i) => {
      if (matchText.test(text)){
        return <b>{text}</b>
      }
      return <span>{text}</span>
    })
    return <li onClick={clickAction}>{highlightedText}</li>

  }
});

export default ListItem
