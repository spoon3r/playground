!function e(t,n,r){function i(l,u){if(!n[l]){if(!t[l]){var c="function"==typeof require&&require;if(!u&&c)return c(l,!0);if(o)return o(l,!0);var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}var s=n[l]={exports:{}};t[l][0].call(s.exports,function(e){var n=t[l][1][e];return i(n||e)},s,s.exports,e,t,n,r)}return n[l].exports}for(var o="function"==typeof require&&require,l=0;l<r.length;l++)i(r[l]);return i}({1:[function(e,t,n){!function(e,r){"object"==typeof n&&void 0!==t?r(n):"function"==typeof define&&define.amd?define(["exports"],r):r(e.pell={})}(this,function(e){"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n={bold:{icon:"<b>B</b>",title:"Bold",result:function(){return i("bold")}},italic:{icon:"<i>I</i>",title:"Italic",result:function(){return i("italic")}},underline:{icon:"<u>U</u>",title:"Underline",result:function(){return i("underline")}},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",result:function(){return i("strikeThrough")}},heading1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:function(){return i("formatBlock","<H1>")}},heading2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:function(){return i("formatBlock","<H2>")}},paragraph:{icon:"&#182;",title:"Paragraph",result:function(){return i("formatBlock","<P>")}},quote:{icon:"&#8220; &#8221;",title:"Quote",result:function(){return i("formatBlock","<BLOCKQUOTE>")}},olist:{icon:"&#35;",title:"Ordered List",result:function(){return i("insertOrderedList")}},ulist:{icon:"&#8226;",title:"Unordered List",result:function(){return i("insertUnorderedList")}},code:{icon:"&lt;/&gt;",title:"Code",result:function(){return i("formatBlock","<PRE>")}},line:{icon:"&#8213;",title:"Horizontal Line",result:function(){return i("insertHorizontalRule")}},link:{icon:"&#128279;",title:"Link",result:function(){var e=window.prompt("Enter the link URL");e&&i("createLink",e)}},image:{icon:"&#128247;",title:"Image",result:function(){var e=window.prompt("Enter the image URL");e&&i("insertImage",e)}}},r={actionbar:"pell-actionbar",button:"pell-button",content:"pell-content"},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;document.execCommand(e,!1,t)},o=function(e){9===e.which&&e.preventDefault()},l=function(e){e.actions=e.actions?e.actions.map(function(e){return"string"==typeof e?n[e]:n[e.name]?t({},n[e.name],e):e}):Object.keys(n).map(function(e){return n[e]}),e.classes=t({},r,e.classes);var l=document.createElement("div");return l.className=e.classes.actionbar,e.element.appendChild(l),e.element.content=document.createElement("div"),e.element.content.contentEditable=!0,e.element.content.className=e.classes.content,e.element.content.oninput=function(t){return e.onChange(t.target.innerHTML)},e.element.content.onkeydown=o,e.element.appendChild(e.element.content),e.actions.forEach(function(t){var n=document.createElement("button");n.className=e.classes.button,n.innerHTML=t.icon,n.title=t.title,n.onclick=t.result,l.appendChild(n)}),e.styleWithCSS&&i("styleWithCSS"),e.element},u={exec:i,init:l};e.exec=i,e.init=l,e.default=u,Object.defineProperty(e,"__esModule",{value:!0})})},{}],2:[function(e,t,n){"use strict";(function(e){return e&&e.__esModule?e:{default:e}})(e("pell")).default.init({element:document.querySelector(".js-pell"),onChange:function(e){document.querySelector(".js-pell-output").value=e}})},{pell:1}]},{},[2]);
//# sourceMappingURL=script.js.map
