import EX from 'reactalike'
import Layout from 'container/layout'


EX.rootComponent = Layout;

EX.SetState = (() => {
  return (payload) => {
    Layout.state = Object.assign({}, Layout.state, payload);
    EX.objectChange(Layout.render());
  }
})();

EX.createComponent(
  Layout.render(), document.getElementById('root'));
