(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var EX = require("reactalike")('yo');

var theEvent = function theEvent(prp) {
  return function () {
    console.log(prp);
  };
};
var NameTag = EX.component({
  componentName: 'nametag',
  componentRender: function componentRender(props) {
    var whenClicked = theEvent(props);
    return EX.node('div', { class: "padd-center" }, EX.node('div', { onClick: whenClicked, class: "tag" }, EX.node('header', null, EX.node('div', { class: "hello" }, "HELLO")), EX.node('div', { class: "mynameis" }, "my name is"), EX.node('div', { class: "my-name-is" }, props.ex_person.name), EX.node('div', { class: "dottedline" })));
  }
});
var AppState = {
  guests: [{
    name: 'Pete',
    job: 'Orderly Drifter'
  }, {
    name: 'Bing Bing',
    job: 'works at 呷哺呷哺'
  }, {
    name: 'Jackie',
    job: 'Movie Star'
  }, {
    name: 'Bachman',
    job: 'chief innovation officer'
  }]
};

var Layout = {
  state: AppState,
  render: function render() {
    var guests = Layout.state.guests;


    var ppl = guests.map(function (itm, ii) {
      return NameTag({ ex_person: itm });
    });
    return EX.node('div', { class: "container" }, ppl);
  }
};
EX.rootComponent = Layout;
EX.SetState = function () {
  return function (payload) {
    Layout.state = Object.assign({}, Layout.state, payload);
    EX.objectChange(Layout.render());
    console.log(Layout.state);
  };
}();

EX.createComponent(Layout.render(), document.getElementById('root'));

},{"reactalike":2}],2:[function(require,module,exports){
'use strict';

module.exports = require('./src/ex.js');

},{"./src/ex.js":5}],3:[function(require,module,exports){
module.exports = (self, createElem) => {
   let re = new RegExp(/^ex_/i)

   function removeProp(element, attr) {
      if (!self.events[attr] && !re.test(attr)) {
         element.removeAttribute(attr);
      }
   };

   function changeProp(element, attr, val) {
      if (!self.events[attr] && !re.test(attr) || attr === 'src' ) {
         element.setAttribute(attr, val);
      }
   };

   function updateProp(element, name, newVal, oldVal) {
      if (!newVal) {
         removeProp(element, name);
         return
      } else if (!oldVal || newVal !== oldVal) {
         changeProp(element, name, newVal);
      }
   };
 
   function updateProps(element, newProps, oldProps = {}) {
      const props = Object.assign({}, oldProps , newProps);
      for (var name in props) {
         updateProp(element, name, newProps[name], oldProps[name]);
      };
   };

   function changed(node1, node2) {
      return typeof node1 !== typeof node2 ||
         typeof node1 === 'string' && node1 !== node2 ||
         node1.type !== node2.type
   };

   function checkForEvents(node) {
      if (node.props.ex_eventFuncName) {
         node.domElement.removeEventListener(node.props.ex_attachedFunc, node.props.ex_eventFuncName);
      } 
   };
 
   function updateElement(parent, newNode, oldNode, index = 0) {
      if (typeof newNode === 'string' || typeof newNode === 'number' ) {
         let vdomid = parent.props.trace + '.' + index;
         if (changed(newNode, oldNode)) {
           parent.domElement.replaceChild(
               createElem(newNode, vdomid, parent.trace),
               parent.domElement.childNodes[index]
            ); 
         }

         return
      };
      if (!oldNode) {
         let vdomid = parent.props.trace + '.' + index;
         newNode.domElement = createElem(newNode, vdomid, parent.trace);
         parent.domElement.appendChild(
            newNode.domElement
         );
         return
      };
      if (!newNode) {
         checkForEvents(oldNode);
         parent.domElement.removeChild(
            parent.childNodes[index]
         );
         return
      };
      if ( changed(newNode, oldNode) ) {

         let vdomid = parent.props.trace + '.' + index;
         newNode.domElement = createElem(newNode, vdomid, newNode.parent);
         let repl = typeof oldNode === 'string' ? parent.domElement.childNodes[index] : oldNode.domElement;
         parent.domElement.replaceChild(
            newNode.domElement,
            repl
         ); 

        return
      };
      if (newNode.type) {

         newNode.domElement = oldNode.domElement ? oldNode.domElement : createElem(newNode, newNode.trace, newNode.parent);
         
         updateProps(
            newNode.domElement,
            newNode.props,
            oldNode.props
         );
       
         const newLength = newNode.nested ? newNode.nested.length : 0;

         if (typeof oldNode === 'string' || typeof oldNode === 'number') {
            for (let i = 0; i < newLength; i++) {
               updateElement(
                  newNode,
                  newNode.nested[i],
                  null,
                  i
               );
            }
            return updateElement;
         }; 
         oldNode.nested = oldNode.nested ? oldNode.nested : [];
         const oldLength = oldNode.nested.length;

         for (let i = 0; i < newLength || i < oldLength; i++) {
            updateElement(
               oldNode,
               newNode.nested[i],
               oldNode.nested[i],
               i
            );
         }
      }
   };
   return updateElement;
};
},{}],4:[function(require,module,exports){
const Eventlist = require("./lib/eventlist.js");

function extractEventName(name) {
  return name.slice(2).toLowerCase();
};
let videoEvents = {
  onLoadedData: {},
  onLoadedMetadata: {},
  onLoadStart: {},
  onPause: {},
  onPlay: {},
  onPlaying: {},
  onProgress: {},
  onRateChange: {},
  onSeeked: {},
  onSeeking: {},
  onWaiting: {},
  onLoad: {}
};
let formEvents = {
  onChange: {},
  onFocus: {},
  onSelect: {},
  onSearch: {}
};
module.exports = Eventlist.reduce((ob, itm) => {
  ob[itm] = {
    registered: false,
    eventName: extractEventName(itm),
    eventNS: itm,
    mediaEvent: videoEvents[itm] !== undefined,
    formEvent: formEvents[itm] !== undefined
  };
  return ob;
}, {});
},{"./lib/eventlist.js":6}],5:[function(require,module,exports){
const events = require("./events.js");
const setDiff = require("./diffing.js");
const handyHelpers = require("./lib/handy_funcs.js");
const smoothNested = handyHelpers.smoothArray();

function NodeMap(appTitle = 'default') {
  this.appTitle = appTitle;
  this.domComponents = {};
  this.rootComponent = null;
  this.appRootDom = {
    domElement: null,
    nested: []
  };
  this.appRoot = null;
  this.mountedCallbacks = [];
  this.events = events;

  this.createUdid = () => {
    return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
  };

  this.randomFuncId = () => {
    return 'func' + Math.random().toString(36).substring(18);
  };

  this.getElement = (domElement) => {
    if (domElement instanceof HTMLElement) {
      this.appRoot = domElement;
      this.appRootDom.domElement = domElement;
      return true;
    }
    let elem = document.querySelector(domElement);
    if (elem) {
      this.appRoot = elem;
      this.appRootDom.domElement = domElement;
      return true;
    }
    console.error("Element: " + domElement + " not found");
    return false;
  };
  this.setListener = (listener, type) => {
    let self = this;
    this.appRoot.addEventListener(listener, (e) => {
      self.lookUpRegistry(e.target, type);
    });

  };
  this.setListenerEl = (eventOb, cb, node) => {
    let self = this;
    let evnName = eventOb.eventNS;
    node.props.ex_eventFuncName = this.randomFuncId();
    node.props.ex_attachedFunc = evnName;
    console.log('node', node);
    this.events[evnName][node.props.ex_eventFuncName] = (e) => {
      node.props[evnName](e, node.domElement, node);
    };
    node.domElement.addEventListener(eventOb.eventName, this.events[evnName][node.props.ex_eventFuncName]);

  }; 
  this.applyListener = (listener, node) => {

    let eventInfo = this.events[listener];
    let onSelf = eventInfo.formEvent || eventInfo.mediaEvent;
    if (!eventInfo.registered && !onSelf) {
      eventInfo.registered = true;
      this.setListener(eventInfo.eventName, listener);
      return
    }
    if (onSelf && !node.props.ex_eventFuncName) {
      this.setListenerEl(eventInfo, listener, node)
    }
  };
  this.lookUpRegistry = (target, eventName) => {
    let tgTrace = target.getAttribute('trace');
    let traceArray = tgTrace.split('.');
    console.log('traceArray', traceArray);
    let vDom = this.domComponents;
    console.log('vDom', vDom);
    traceArray.shift()
    traceArray.map((itm, i) => {
      if (!vDom.nested) {
        return false;
      }
      let nest = vDom.nested[itm];
      vDom = nest;
      return nest;
    }).reverse().forEach((itm, ii) => {
      if (itm) {
        let hasAction = itm.props[eventName];
        if (hasAction) {
          hasAction()
        }
      }
    })

  };
  this.WhenMounted = (afterMountCB) => {
    this.mountedCallbacks.push(afterMountCB);
  };
  this.objectChange = (newRender) => {
    let newOb = this.rerender(newRender, 'Root');
    console.log('newRender', newOb);
    this.updateElement(this.domComponents, newOb)
    this.mountedCallbacks.forEach((cb) => {
      cb();
    });
    this.mountedCallbacks = [];
  };
  this.createComponent = (obj, containerElement) => {

    if (this.getElement(containerElement)) {
      obj.domElement = this.appRoot;
      this.mountApp(obj);
    };
  };

  this.viewObjects = () => {
    console.log('appRootDom', this.appRootDom);
    console.log('domBranches', this.domComponents);
    console.log('this.events', this.events);

  };
  this.mountApp = (obj) => {
    this.domComponents = obj;
    this.appRootDom.nested.push(this.domComponents);
    this.appRoot.appendChild(this.htmlBuild(obj, "Root"));
  };


  let self = this;
  let re = new RegExp(/^ex_/i)
  let isSVG = new RegExp(/(circle|clipPath|defs|ellipse|g|image|line|linearGradient|mask|path|pattern|polygon|polyline|radialGradient|rect|stop|svg|text|tspan)/i);
  this.createElement = function createElement(name, attrs) {

    var element = document.createElement(String(name));
    if (!attrs) return element;

    for (var attr in attrs) {
      if (!self.events[attr] && !re.test(attr) ) {
        element.setAttribute(attr, attrs[attr]);
      }
    }
    return element;
  };

  this.createElementNS = function createElementNS(name, attrs) {
     var element = document.createElementNS('http://www.w3.org/2000/svg', name);

     if (!attrs) return element;

     for (var attr in attrs) {
        if (!self.events[attr] && !re.test(attr) ) {
            element.setAttribute(attr, attrs[attr]);
        }
     }
     return element;
  };

  const createElem = (node, group, parent) => {

    if (typeof node === 'string' || typeof node === 'number' || (typeof node !== "object" && node !== null && node !== undefined)) {

      return document.createTextNode(node);
    }
    node.props = Object.assign({}, node.props, {
      trace: group,
      parent: parent
    });

    const el = isSVG.test(node.type) ? self.createElementNS(node.type, node.props) : self.createElement(node.type, node.props);
    node.domElement = el;
    for (var prop in node.props) {
      if (self.events[prop]) {
        self.applyListener(prop, node);
      }
    };

    node.nested = node.nested ? node.nested : [];
    if (node.nested.length === 0) {
      return el;
    }
    node.nested
      .map((elm, ii) => {
        let elmId = group + '.' + ii;
        return createElem(elm, elmId, group);
      }).forEach(el.appendChild.bind(el));
    return el;

  };

  const reRenderElem = (node, group, parent) => {
    if (typeof node === 'string' || typeof node === 'number' || (typeof node !== "object" && node !== null && node !== undefined)) {
      return node;
    }

    node.nested = node.nested ? node.nested : [];
    node.props = Object.assign({}, node.props, {
      trace: group,
      parent: parent
    })
    node.nested
      .map((elm, ii) => {
        let elmId = group + '.' + ii;
        return reRenderElem(elm, elmId, group);
      });
    return node;

  };
  this.htmlBuild = (node, group) => {
    return createElem(node, group, 'Root');
  };
  this.rerender = (node, group) => {
    return reRenderElem(node, group, 'Root');
  };
  this.diffElements = setDiff(self, createElem);
  this.updateElement = (oldNode, newNode) => {
    this.diffElements(this.appRootDom, newNode, oldNode);
    this.domComponents = Object.assign({}, oldNode, newNode);
  }
  this.SetState = (data) => {
    console.log('not yet set');
  }

};
NodeMap.prototype.component = (obj) => {
  if (!(obj instanceof Array) && obj instanceof Object) {
    if (!obj["componentName"] || !obj["componentRender"]) {
      console.error("Object must have a branchName and branchObject");
      return false;
    }

    obj.vdomId = '@' + obj.componentName;
    return (opts) => {

      return obj.componentRender(opts);
    }
  }
};

NodeMap.prototype.node = (type, props = {}, ...nested) => {
  if (typeof type === "function") {
    return type(props);
  }
  if (nested) {
    nested = smoothNested(nested);
  } else {
    nested = []
  }

  return {
    type,
    props,
    nested 
  };
};

module.exports = function(appName){
 if(!appName) return new NodeMap('example');

 return new NodeMap(appName);
}
},{"./diffing.js":3,"./events.js":4,"./lib/handy_funcs.js":7}],6:[function(require,module,exports){
module.exports = [
"onCopy",
"onCut", 
"onPaste", 
"onKeyDown", 
"onKeyPress", 
"onKeyUp",
"onFocus", 
"onBlur", 
"onChange", 
"onInput",
"onSubmit",
"onClick", 
"onContextMenu",
"onDoubleClick",
"onDrag",
"onDragEnd", 
"onDragEnter", 
"onDragExit", 
"onDragLeave",
"onDragOver", 
"onDragStart", 
"onDrop",
"onMouseDown",
"onMouseEnter", 
"onMouseLeave",
"onMouseMove", 
"onMouseOut", 
"onMouseOver",
"onMouseUp", 
"onSelect", 
"onScroll", 
"onAbort",
"onCanPlay", 
"onCanPlayThrough", 
"onDurationChange",
"onEmptied",
"onEnded", 
"onError",
"onLoadedData", 
"onLoadedMetadata", 
"onLoadStart", 
"onPause", 
"onPlay",
"onPlaying",
"onProgress",
"onRateChange",
"onSeeked", 
"onSeeking", 
"onWaiting",
"onLoad", 
"onError",
"onAnimationStart",
"onAnimationEnd", 
"onAnimationIteration", 
"onTransitionEnd"
]
},{}],7:[function(require,module,exports){
const flatten = (a, b) => {
   return a.concat(Array.isArray(b) ? b.reduce(flatten, []) : b);
}

function flattenIteration (arr, flatArr) {
	flatArr = flatArr || [];
	
	var length  = arr.length|0;
	
	for (var index = 0; index < length; index = index + 1){
		var item = arr[index];
		item.constructor === Array ? flattenIteration(item, flatArr) : flatArr[flatArr.length] = item;
	}
	
	return flatArr;
}
module.exports = {
   smoothArray: () => {
      return (nested) => {  
        // if( Array.isArray(nested) ) return [];
        
        return nested.reduce(flatten, []).filter((ne) => ne !== null && ne !== undefined );
      }
   },
   flatten: (nested) => {
   		return nested.reduce(flatten, []);
   },
   capitalize:  (string) => {
   	  return string.charAt(0).toUpperCase() + string.slice(1);
   }
}
},{}]},{},[1]);
