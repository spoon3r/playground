!function e(t,n,i){function r(o,u){if(!n[o]){if(!t[o]){var s="function"==typeof require&&require;if(!u&&s)return s(o,!0);if(a)return a(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return r(n?n:e)},f,f.exports,e,t,n,i)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(e,t,n){"use strict";function i(e,t){var n=t.x-e.x,i=t.y-e.y;return Math.sqrt(n*n+i*i)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=i},{}],2:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=e("./nodes"),u=i(o),s=function(){function e(t,n){r(this,e);var i={width:window.innerWidth,height:window.innerHeight};Object.assign(this,n,i),this.element=t,this.init()}return a(e,[{key:"init",value:function(){var e=document.querySelector(this.element);this.context=e.getContext("2d");var t=e.width=this.width,n=e.height=this.height;this.nodes=new u.default({width:t,height:n})}},{key:"render",value:function(e){this.nodes.render(e)}},{key:"update",value:function(){var e=this.context,t=this.width,n=this.height;this.context.clearRect(0,0,t,n),this.render(e),requestAnimationFrame(this.update.bind(this))}}]),e}();n.default=s},{"./nodes":4}],3:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(){function e(t){i(this,e);var n={vx:2*Math.random()-1,vy:2*Math.random()-1,radius:2};Object.assign(this,t,n)}return r(e,[{key:"render",value:function(e){var t=this.x,n=this.y,i=this.radius;e.beginPath(),e.arc(t,n,i,0,2*Math.PI),e.fill()}},{key:"update",value:function(e,t,n){var i=this.x,r=this.y,a=this.vx,o=this.vy;this.x+=a,this.y+=o,i<0?this.x=t:i>t&&(this.x=0),r<0?this.y=n:r>n&&(this.y=0),this.render(e)}}]),e}();n.default=a},{}],4:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=e("./get-distance"),u=i(o),s=e("./node"),h=i(s),f=function(){function e(t){r(this,e);var n={length:150,maxDistance:200};Object.assign(this,t,n),this.init()}return a(e,[{key:"init",value:function(){var e=this.length,t=this.width,n=this.height;this.nodes=[];for(var i=0;i<e;i++)this.nodes.push(new h.default({x:Math.random()*t,y:Math.random()*n}))}},{key:"render",value:function(e){for(var t=this.length,n=this.nodes,i=this.maxDistance,r=this.width,a=this.height,o=0;o<t;o++)this.nodes[o].update(e,r,a);for(var s=0;s<t-1;s++)for(var h=n[s],f=s+1;f<t;f++){var c=n[f],d=(0,u.default)(h,c);d<i&&(e.lineWidth=1-d/i,e.beginPath(),e.moveTo(h.x,h.y),e.lineTo(c.x,c.y),e.stroke())}}}]),e}();n.default=f},{"./get-distance":1,"./node":3}],5:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=e("./node-garden"),a=i(r),o=new a.default(".js-canvas");o.update()},{"./node-garden":2}]},{},[5]);
//# sourceMappingURL=script.js.map
