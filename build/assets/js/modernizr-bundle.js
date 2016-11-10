!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,s,i,a;for(var f in y)if(y.hasOwnProperty(f)){if(e=[],t=y[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?C[a[0]]=o:(!C[a[0]]||C[a[0]]instanceof Boolean||(C[a[0]]=new Boolean(C[a[0]])),C[a[0]][a[1]]=o),S.push((o?"":"no-")+a.join("-"))}}function s(e){var t=x.className,n=C._config.classPrefix||"";if(b&&(t=t.baseVal),C._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}C._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?x.className.baseVal=t:x.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function f(e,n,r,o){var s,f,l,u,p="modernizr",d=i("div"),c=a();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=o?o[r]:p+(r+1),d.appendChild(l);return s=i("style"),s.type="text/css",s.id="s"+p,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=p,c.fake&&(c.style.background="",c.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),f=n(d,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=u,x.offsetHeight):d.parentNode.removeChild(d),!!f}function l(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+u(t[o])+":"+r+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t,o,s){function a(){u&&(delete N.style,delete N.modElem)}if(s=!r(s,"undefined")&&s,!r(o,"undefined")){var f=p(e,o);if(!r(f,"undefined"))return f}for(var u,c,m,h,v,g=["modernizr","tspan"];!N.style;)u=!0,N.modElem=i(g.shift()),N.style=N.modElem.style;for(m=e.length,c=0;m>c;c++)if(h=e[c],v=N.style[h],l(h,"-")&&(h=d(h)),N.style[h]!==n){if(s||r(o,"undefined"))return a(),"pfx"!=t||h;try{N.style[h]=o}catch(e){}if(N.style[h]!=v)return a(),"pfx"!=t||h}return a(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var o;for(var s in e)if(e[s]in t)return n===!1?e[s]:(o=t[e[s]],r(o,"function")?m(o,n||t):o);return!1}function v(e,t,n,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?c(a,t,o,s):(a=(e+" "+j.join(i+" ")+i).split(" "),h(a,t,n))}function g(e,t,r){return v(e,n,n,t,r)}var y=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},C=function(){};C.prototype=w,C=new C;var S=[],x=t.documentElement,b="svg"===x.nodeName.toLowerCase();C.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var _=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];w._prefixes=_;var T=w.testStyles=f;C.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",_.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(r,function(e){n=9===e.offsetTop})}return n});var z="Moz O ms Webkit",P=w._config.usePrefixes?z.split(" "):[];w._cssomPrefixes=P;var E={elem:i("modernizr")};C._q.push(function(){delete E.elem});var N={style:E.elem.style};C._q.unshift(function(){delete N.style});var j=w._config.usePrefixes?z.toLowerCase().split(" "):[];w._domPrefixes=j,w.testAllProps=v,w.testAllProps=g;var k="CSS"in e&&"supports"in e.CSS,A="supportsCSS"in e;C.addTest("supports",k||A),C.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),t=C._config.usePrefixes;if(e&&(!t||"webkitPerspective"in x.style)){var n,r="#modernizr{width:0;height:0}";C.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",T(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),o(),s(S),delete w.addTest,delete w.addAsyncTest;for(var q=0;q<C._q.length;q++)C._q[q]();e.Modernizr=C}(window,document);