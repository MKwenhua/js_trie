import EX from 'reactalike'
import Layout from 'container/layout'

EX.SetState = (() => {
  return (payload) => {
    Layout.state = Object.assign({}, Layout.state, payload);
    EX.objectChange(Layout.render());
  }
})();

EX.mountAppToNode(
  Layout , document.getElementById('root'));