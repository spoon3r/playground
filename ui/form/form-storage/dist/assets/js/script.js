!function e(t,n,r){function i(u,a){if(!n[u]){if(!t[u]){var l="function"==typeof require&&require;if(!a&&l)return l(u,!0);if(o)return o(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[u]={exports:{}};t[u][0].call(c.exports,function(e){var n=t[u][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o={formElements:['input[type="checkbox"]','input[type="date"]','input[type="email"]','input[type="hidden"]','input[type="number"]','input[type="radio"]','input[type="range"]','input[type="search"]','input[type="tel"]','input[type="text"]','input[type="time"]','input[type="url"]',"select","textarea"],localStorageKey:"js-form-storage"},u=function(){function e(t,n){r(this,e),Object.assign(this,o,n),this.element=t,this.onSubmit=this.onSubmit.bind(this),this.addEventListeners(),this.getForm()}return i(e,[{key:"getForm",value:function(){var e=this;window.localStorage.getItem(this.localStorageKey+"-"+this.element.name)&&JSON.parse(window.localStorage.getItem(this.localStorageKey+"-"+this.element.name)).map(function(t){var n=e.element.querySelector(t.id);n.checked=t.checked,n.value=t.value})}},{key:"setForm",value:function(){var e=[];Array.from(this.element.querySelectorAll(this.formElements.join(", "))).map(function(t){e.push({id:"#"+t.id,checked:t.checked,value:t.value})}),window.localStorage.setItem(this.localStorageKey+"-"+this.element.name,JSON.stringify(e))}},{key:"onSubmit",value:function(){this.setForm()}},{key:"addEventListeners",value:function(){this.element.addEventListener("submit",this.onSubmit)}}]),e}();n.default=u},{}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=e("./form-storage"),o=r(i);Array.from(document.querySelectorAll(".js-form-storage")).map(function(e){new o.default(e)})},{"./form-storage":1}]},{},[2]);
//# sourceMappingURL=script.js.map
