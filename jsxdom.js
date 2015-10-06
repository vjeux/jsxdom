(function(global) {
var tags = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'];

function processChildren(dom, children) {
  if (typeof children === 'string') {
    dom.appendChild(document.createTextNode(children));
  } else if (Object.prototype.toString.call(children) === '[object Array]') {
    for (var i = 0; i < children.length; ++i) {
      processChildren(dom, children[i]);
    }
  } else if (children) {
    dom.appendChild(children);
  }
}

var JSXDOM = function(type, attributes, children) {
  if (arguments.length === 2 && (typeof attributes === 'string' || Array.isArray(attributes))) {
    children = [ attributes ]
    attributes = {}
  }  
  if (arguments.length > 2) {
    children = Array.prototype.slice.call(arguments, 2);
  }
  children = children || []
  attributes = attributes || {}
  children = children.filter(function (i) { return typeof i !== 'undefined' })
  var fn = JSXDOM[type];
  var ret;
  if (fn) {
      ret = fn(attributes, children);
  }
  return ret;
};

tags.forEach(function(tag) {
  JSXDOM[tag] = function(attributes, children) {
    var dom = document.createElement(tag);
    for (var name in attributes) {
      dom.setAttribute(name, attributes[name]);
    }
    processChildren(dom, children);
    return dom;
  }
});

global.JSXDOM = JSXDOM;
})(this);
