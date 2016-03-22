> **ABANDONNED**: This was just an evening hack when we released React a few years ago. It doesn't work anymore. You should use [nativejsx](https://github.com/treycordova/nativejsx) for a more up to date version.

jsxdom
======

[React](http://facebook.github.io/react/) is bundled with a Javascript transpiler called [JSX](http://facebook.github.io/react/docs/syntax.html). It gives the ability to write &lt;html> tags within Javascript. The advertised way to use JSX is React.DOM to create React light DOM elements, but it is not the only way. We can create another JSX backend, called JSXDOM, to create real DOM elements.


```javascript
/** @jsx JSXDOM */
 
var defaultValue = "Fill me ...";
 
document.body.appendChild(
  <div>
    <input type="text" value={defaultValue} />
    <button onclick="alert('clicked!');">Click Me!</button>
    <ul>
      {['un', 'deux', 'trois'].map(function(number) {
        return <li>{number}</li>;
      })}
    </ul>
  </div>
);
```

[Read the blog post for more information](http://blog.vjeux.com/2013/javascript/jsx-for-the-real-dom.html)
