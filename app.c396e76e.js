parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mnjM":[function(require,module,exports) {
"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach(function(e){n(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Login=void 0;var c=function(){function e(){r(this,e)}return i(e,null,[{key:"create",value:function(t){return fetch("https://auth-modal-f7e24-default-rtdb.europe-west1.firebasedatabase.app/logins.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return t.id=e.name,t}).then(u).then(e.renderList)}},{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return e?fetch("https://auth-modal-f7e24-default-rtdb.europe-west1.firebasedatabase.app/logins.json?auth=".concat(e)).then(function(e){return e.json()}).then(function(e){return e&&e.error?'<p class="error">'.concat(e.error,"</p>"):e?Object.keys(e).map(function(n){return t(t({},e[n]),{},{id:n})}):[]}):Promise.resolve('<p class="error">У вас нет токена</p>')})},{key:"listToHTML",value:function(e){return e.length?"<ol>".concat(e.map(function(e){return"<li>".concat(e.text,"</li>")}).join(""),"</ol>"):"<p>Пока ничего не смотрели</p>"}}]),e}();function u(e){var t=getloginsFromLocalStorage();t.push(e),localStorage.setItem("logins",JSON.stringify(t))}exports.Login=c;
},{}],"FOZT":[function(require,module,exports) {
"use strict";function e(e,t){var n=document.createElement("div");n.classList.add("modal"),n.innerHTML="\n    <h1>".concat(e,'</h1>\n    <div class="modal-content">').concat(t,"</div>\n  "),mui.overlay("on",n)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createModal=e;
},{}],"AxoZ":[function(require,module,exports) {
"use strict";function t(){return'\n    <form class="mui-form" id="auth-form">\n      <div class="mui-textfield mui-textfield--float-label">\n        <input type="email" id="email" required>\n        <label for="email">Email</label>\n      </div>\n      <div class="mui-textfield mui-textfield--float-label">\n        <input type="password" id="password" required>\n        <label for="password">Пароль</label>\n      </div>\n      <button\n        type="submit"\n        class="mui-btn mui-btn--raised mui-btn--primary"\n      >\n        Войти\n      </button>\n    </form>\n  '}function e(t,e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyDIwdXP5VEbTh2z8iuw4cKftPCCieqja2U"),{method:"POST",body:JSON.stringify({email:t,password:e,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){return t.idToken})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAuthForm=t,exports.authWithEmailAndPassword=e;
},{}],"Tnu0":[function(require,module,exports) {

},{}],"A2T1":[function(require,module,exports) {
"use strict";var e=require("./login"),t=require("./utils"),r=require("./auth");require("./styles.css");var n=document.getElementById("modal-btn");function a(){(0,t.createModal)("Авторизация",(0,r.getAuthForm)()),document.getElementById("auth-form").addEventListener("submit",u,{once:!0})}function u(t){t.preventDefault();var n=t.target.querySelector("button"),a=t.target.querySelector("#email").value,u=t.target.querySelector("#password").value;n.disabled=!0,(0,r.authWithEmailAndPassword)(a,u).then(e.Login.fetch).then(i).then(function(){return n.disabled=!1})}function i(r){"string"==typeof r?(0,t.createModal)("Ошибка!",r):(0,t.createModal)("Список фильмов",e.Login.listToHTML(r))}n.addEventListener("click",a);
},{"./login":"mnjM","./utils":"FOZT","./auth":"AxoZ","./styles.css":"Tnu0"}]},{},["A2T1"], null)
//# sourceMappingURL=/parcel-project-template/app.c396e76e.js.map