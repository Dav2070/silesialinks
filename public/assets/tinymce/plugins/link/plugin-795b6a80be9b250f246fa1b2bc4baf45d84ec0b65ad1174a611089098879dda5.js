/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.3.0 (2020-05-21)
 */

!function(i){"use strict";var n,t,e,r,o=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=tinymce.util.Tools.resolve("tinymce.util.VK"),a=function(r){return function(t){return e=typeof(n=t),(null===n?"null":"object"==e&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":e)===r;var n,e}},l=function(n){return function(t){return typeof t===n}},c=a("string"),f=a("array"),s=function(t){return n===t},m=l("boolean"),g=l("function"),d=function(t){var n=t.getParam("link_assume_external_targets",!1);return m(n)&&n?1:!c(n)||"http"!==n&&"https"!==n?0:n},h=function(t){return t.getParam("default_link_target")},v=function(t){return t.getParam("target_list",!0)},p=function(t){return t.getParam("rel_list",[],"array")},y=function(t){return t.getParam("allow_unsafe_link_target",!1,"boolean")},k=function(t){var n=i.document.createElement("a");n.target="_blank",n.href=t,n.rel="noreferrer noopener";var e,r,o=i.document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,i.window,0,0,0,0,0,!1,!1,!1,!1,0,null),e=n,r=o,i.document.body.appendChild(e),e.dispatchEvent(r),i.document.body.removeChild(e)},x=function(){return(x=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},b=function(){},O=function(t){return function(){return t}},w=O(!1),C=O(!(n=null)),A=function(){return N},N=(t=function(t){return t.isNone()},{fold:function(t,n){return t()},is:w,isSome:w,isNone:C,getOr:r=function(t){return t},getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:O(null),getOrUndefined:O(undefined),or:r,orThunk:e,map:A,each:b,bind:A,exists:w,forall:C,filter:A,equals:t,equals_:t,toArray:function(){return[]},toString:O("none()")}),_=function(e){var t=O(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:C,isNone:w,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return _(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:N},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(w,function(t){return n(e,t)})}};return o},P={some:_,none:A,from:function(t){return null===t||t===undefined?N:_(t)}},S=Array.prototype.indexOf,T=Array.prototype.push,D=function(t,n){return e=t,r=n,-1<S.call(e,r);var e,r},L=function(t){for(var n=[],e=0,r=t.length;e<r;++e){if(!f(t[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+t);T.apply(n,t[e])}return n},M=function(t,n){return L(function(t,n){for(var e=t.length,r=new Array(e),o=0;o<e;o++){var i=t[o];r[o]=n(i,o)}return r}(t,n))},E=function(t,n){for(var e=0;e<t.length;e++){var r=n(t[e],e);if(r.isSome())return r}return P.none()},R=Object.keys,U=function(t,e,r,o){return function(t,n){for(var e=R(t),r=0,o=e.length;r<o;r++){var i=e[r];n(t[i],i)}}(t,function(t,n){(e(t,n)?r:o)(t,n)}),{}},q=function(t,n){var e,r={};return U(t,n,(e=r,function(t,n){e[n]=t}),b),r},K=tinymce.util.Tools.resolve("tinymce.util.Tools"),z=function(t){return!(!/(^|[ ,])rtc([, ]|$)/.test(t.settings.plugins)||!o.get("rtc"))},I=function(t){return/^\w+:/i.test(t)},j=function(t){var n=t.getAttribute("data-mce-href");return n||t.getAttribute("href")},B=function(t,n){var e,r,o=["noopener"],i=t?t.split(/\s+/):[],u=function(t){return t.filter(function(t){return-1===K.inArray(o,t)})},a=n?0<(e=u(e=i)).length?e.concat(o):o:u(i);return 0<a.length?(r=a,K.trim(r.sort().join(" "))):""},V=function(t,n){return n=n||t.selection.getNode(),G(n)?t.dom.select("a[href]",n)[0]:t.dom.getParent(n,"a[href]")},F=function(t,n){var e=n?n.innerText||n.textContent:t.getContent({format:"text"});return e.replace(/\uFEFF/g,"")},W=function(t){return t&&"A"===t.nodeName&&!!j(t)},$=function(t){return 0<K.grep(t,W).length},H=function(t){return!(/</.test(t)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(t)||-1===t.indexOf("href=")))},G=function(t){return t&&"FIGURE"===t.nodeName&&/\bimage\b/i.test(t.className)},J=function(t){return n=["title","rel","class","target"],e=function(n,e){return t[e].each(function(t){n[e]=0<t.length?t:null}),n},r={href:t.href},function(t,n){for(var e=0,r=t.length;e<r;e++)n(t[e],e)}(n,function(t){r=e(r,t)}),r;var n,e,r},X=function(t,n){var e,r,o=x({},n);if(!(0<p(t).length)&&!1===y(t)){var i=B(o.rel,"_blank"===o.target);o.rel=i||null}return P.from(o.target).isNone()&&!1===v(t)&&(o.target=h(t)),o.href=(e=o.href,"http"!==(r=d(t))&&"https"!==r||I(e)?e:r+"://"+e),o},Q=function(l,c,f){var s=l.selection.getNode(),m=V(l,s),g=X(l,J(f));l.undoManager.transact(function(){var n,t,e,r,o,i,u,a;f.href===c.href&&c.attach(),m?(l.focus(),o=l,i=m,u=f.text,a=g,u.each(function(t){i.hasOwnProperty("innerText")?i.innerText=t:i.textContent=t}),o.dom.setAttribs(i,a),o.selection.select(i)):(n=l,t=s,e=f.text,r=g,G(t)?nt(n,t,r):e.fold(function(){n.execCommand("mceInsertLink",!1,r)},function(t){n.insertContent(n.dom.createHTML("a",r,n.dom.encode(t)))}))})},Y=function(t,n,e){var r,o,i,u,a,l,c;z(t)?t.execCommand("createlink",!1,(o=(r=e)["class"],i=r.href,u=r.rel,a=r.target,l=r.text,c=r.title,q({"class":o.getOrNull(),href:i,rel:u.getOrNull(),target:a.getOrNull(),text:l.getOrNull(),title:c.getOrNull()},function(t,n){return!1===s(t)}))):Q(t,n,e)},Z=function(t){var e;z(t)?t.execCommand("unlink"):(e=t).undoManager.transact(function(){var t=e.selection.getNode();if(G(t))tt(e,t);else{var n=e.dom.getParent(t,"a[href]",e.getBody());n&&e.dom.remove(n,!0)}e.focus()})},tt=function(t,n){var e=t.dom.select("img",n)[0];if(e){var r=t.dom.getParents(e,"a[href]",n)[0];r&&(r.parentNode.insertBefore(e,r),t.dom.remove(r))}},nt=function(t,n,e){var r=t.dom.select("img",n)[0];if(r){var o=t.dom.create("a",e);r.parentNode.insertBefore(o,r),o.appendChild(r)}},et=function(t){return c(t.value)?t.value:""},rt=function(e){return void 0===e&&(e=et),function(t){return P.from(t).map(function(t){return n=t,r=e,o=[],K.each(n,function(t){var n=c(t.text)?t.text:c(t.title)?t.title:"";if(t.menu===undefined){var e=r(t);o.push({text:n,value:e})}}),o;var n,r,o})}},ot={sanitize:function(t){return rt(et)(t)},sanitizeWith:rt,createUi:function(n,e){return function(t){return{name:n,type:"selectbox",label:e,items:t}}},getValue:et},it=function(n,t,e,r){var o,i=r[t],u=0<n.length;return i!==undefined?(o=i,E(e,function(t){return P.some(t).filter(function(t){return t.value===o})}).map(function(t){return{url:{value:t.value,meta:{text:u?n:t.text,attach:b}},text:u?n:t.text}})):P.none()},ut=function(t,i){var n,e,u=(n=t.text,e=n,{get:function(){return e},set:function(t){e=t}}),r=function(t,n){var e,r,o=(e=i,("link"===(r=n.name)?e.catalogs.link:"anchor"===r?e.catalogs.anchor:P.none()).getOr([]));return it(u.get(),n.name,o,t)};return{onChange:function(t,n){return"url"===n.name?function(t){if(u.get().length<=0){var n=t.url.meta.text!==undefined?t.url.meta.text:t.url.value,e=t.url.meta.title!==undefined?t.url.meta.title:"";return P.some({text:n,title:e})}return P.none()}(t()):D(["anchor","link"],n.name)?r(t(),n):("text"===n.name&&u.set(t().text),P.none())}}},at=tinymce.util.Tools.resolve("tinymce.util.Delay"),lt=tinymce.util.Tools.resolve("tinymce.util.Promise"),ct=function(t){var n=t.href;return 0<n.indexOf("@")&&-1===n.indexOf("//")&&-1===n.indexOf("mailto:")?P.some({message:"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",preprocess:function(t){return x(x({},t),{href:"mailto:"+n})}}):P.none()},ft=function(u,a){return E([ct,(e=d(u),r=u.getParam("link_default_protocol","http","string"),function(t){var n=t.href;return 1===e&&!I(n)||0===e&&/^\s*www[\.|\d\.]/i.test(n)?P.some({message:"The URL you entered seems to be an external link. Do you want to add the required "+r+":// prefix?",preprocess:function(t){return x(x({},t),{href:r+"://"+n})}}):P.none()})],function(t){return t(a)}).fold(function(){return lt.resolve(a)},function(i){return new lt(function(n){var e,t,r,o;e=u,t=i.message,r=function(t){n(t?i.preprocess(a):a)},o=e.selection.getRng(),at.setEditorTimeout(e,function(){e.windowManager.confirm(t,function(t){e.selection.setRng(o),r(t)})})})});var e,r},st=function(t){var n=t.dom.select("a:not([href])"),e=M(n,function(t){var n=t.name||t.id;return n?[{text:n,value:"#"+n}]:[]});return 0<e.length?P.some([{text:"None",value:""}].concat(e)):P.none()},mt=function(t){var n=t.getParam("link_class_list",[],"array");return 0<n.length?ot.sanitize(n):P.none()},gt=tinymce.util.Tools.resolve("tinymce.util.XHR"),dt=function(n){var e=function(t){return n.convertURL(t.value||t.url,"href")},t=n.getParam("link_list");return new lt(function(n){c(t)?gt.send({url:t,success:function(t){return n(function(t){try{return P.some(JSON.parse(t))}catch(n){return P.none()}}(t))},error:function(t){return n(P.none())}}):g(t)?t(function(t){return n(P.some(t))}):n(P.from(t))}).then(function(t){return t.bind(ot.sanitizeWith(e)).map(function(t){return 0<t.length?[{text:"None",value:""}].concat(t):t})})},ht=function(t,n){var e=p(t);if(0<e.length){var r=n.is("_blank");return(!1===y(t)?ot.sanitizeWith(function(t){return B(ot.getValue(t),r)}):ot.sanitize)(e)}return P.none()},vt=[{text:"Current window",value:""},{text:"New window",value:"_blank"}],pt=function(t){var n=v(t);return f(n)?ot.sanitize(n).orThunk(function(){return P.some(vt)}):!1===n?P.none():P.some(vt)},yt=function(t,n,e){var r=t.getAttrib(n,e);return null!==r&&0<r.length?P.some(r):P.none()},kt=function(f,s){return dt(f).then(function(t){var n,e,r,o,i,u,a,l,c=(e=s,r=(n=f).dom,o=H(n.selection.getContent())?P.some(F(n.selection,e)):P.none(),i=e?P.some(r.getAttrib(e,"href")):P.none(),u=e?P.from(r.getAttrib(e,"target")):P.none(),a=yt(r,e,"rel"),l=yt(r,e,"class"),{url:i,text:o,title:yt(r,e,"title"),target:u,rel:a,linkClass:l});return{anchor:c,catalogs:{targets:pt(f),rels:ht(f,c.target),classes:mt(f),anchor:st(f),link:t},optNode:P.from(s),flags:{titleEnabled:f.getParam("link_title",!0,"boolean")}}})},xt=function(d){var t,n;(n=V(t=d),kt(t,n)).then(function(t){var i,u,n,e,r,o,a,l,c,f,s,m,g;return e=function(t){var e=t.getData();if(!e.url.value)return Z(i),void t.close();var n=function(n){return P.from(e[n]).filter(function(t){return!u.anchor[n].is(t)})},r={href:e.url.value,text:n("text"),target:n("target"),rel:n("rel"),"class":n("linkClass"),title:n("title")},o={href:e.url.value,attach:e.url.meta!==undefined&&e.url.meta.attach?e.url.meta.attach:function(){}};ft(i,r).then(function(t){Y(i,o,t)}),t.close()},r=i=d,l=(n=u=t).anchor.text.map(function(){return{name:"text",type:"input",label:"Text to display"}}).toArray(),c=n.flags.titleEnabled?[{name:"title",type:"input",label:"Title"}]:[],f=P.from(h(r)),a=f,s={url:{value:(o=n).anchor.url.getOr(""),meta:{attach:function(){},text:o.anchor.url.fold(function(){return""},function(){return o.anchor.text.getOr("")}),original:{value:o.anchor.url.getOr("")}}},text:o.anchor.text.getOr(""),title:o.anchor.title.getOr(""),anchor:o.anchor.url.getOr(""),link:o.anchor.url.getOr(""),rel:o.anchor.rel.getOr(""),target:o.anchor.target.or(a).getOr(""),linkClass:o.anchor.linkClass.getOr("")},m=ut(s,n),g=n.catalogs,{title:"Insert/Edit Link",size:"normal",body:{type:"panel",items:L([[{name:"url",type:"urlinput",filetype:"file",label:"URL"}],l,c,function(t){for(var n=[],e=function(t){n.push(t)},r=0;r<t.length;r++)t[r].each(e);return n}([g.anchor.map(ot.createUi("anchor","Anchors")),g.rels.map(ot.createUi("rel","Rel")),g.targets.map(ot.createUi("target","Open link in...")),g.link.map(ot.createUi("link","Link list")),g.classes.map(ot.createUi("linkClass","Class"))])])},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:s,onChange:function(n,t){var e=t.name;m.onChange(n.getData,{name:e}).each(function(t){n.setData(t)})},onSubmit:e}}).then(function(t){d.windowManager.open(t)})},bt=function(t,n){return t.dom.getParent(n,"a[href]")},Ot=function(t){return bt(t,t.selection.getStart())},wt=function(t,n){if(n){var e=j(n);if(/^#/.test(e)){var r=t.$(e);r.length&&t.selection.scrollIntoView(r[0],!0)}else k(n.href)}},Ct=function(t){return function(){xt(t)}},At=function(t){return function(){wt(t,Ot(t))}},Nt=function(r){r.on("click",function(t){var n=bt(r,t.target);n&&u.metaKeyPressed(t)&&(t.preventDefault(),wt(r,n))}),r.on("keydown",function(t){var n,e=Ot(r);e&&13===t.keyCode&&(!0===(n=t).altKey&&!1===n.shiftKey&&!1===n.ctrlKey&&!1===n.metaKey)&&(t.preventDefault(),wt(r,e))})},_t=function(e){return function(n){var t=function(t){return n.setActive(!e.mode.isReadOnly()&&!!V(e,t.element))};return e.on("NodeChange",t),function(){return e.off("NodeChange",t)}}},Pt=function(r){return function(n){var t=r.dom.getParents(r.selection.getStart());n.setDisabled(!$(t));var e=function(t){return n.setDisabled(!$(t.parents))};return r.on("NodeChange",e),function(){return r.off("NodeChange",e)}}};!function St(){o.add("link",function(t){var n,e,r,i,o,u,a;(n=t).ui.registry.addToggleButton("link",{icon:"link",tooltip:"Insert/edit link",onAction:Ct(n),onSetup:_t(n)}),n.ui.registry.addButton("openlink",{icon:"new-tab",tooltip:"Open link",onAction:At(n),onSetup:Pt(n)}),n.ui.registry.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onAction:function(){return Z(n)},onSetup:Pt(n)}),(e=t).ui.registry.addMenuItem("openlink",{text:"Open link",icon:"new-tab",onAction:At(e),onSetup:Pt(e)}),e.ui.registry.addMenuItem("link",{icon:"link",text:"Link...",shortcut:"Meta+K",onAction:Ct(e)}),e.ui.registry.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onAction:function(){return Z(e)},onSetup:Pt(e)}),(r=t).ui.registry.addContextMenu("link",{update:function(t){return $(r.dom.getParents(t,"a"))?"link unlink openlink":"link"}}),o=function(t){var n=i.selection.getNode();return t.setDisabled(!V(i,n)),function(){}},(i=t).ui.registry.addContextForm("quicklink",{launch:{type:"contextformtogglebutton",icon:"link",tooltip:"Link",onSetup:_t(i)},label:"Link",predicate:function(t){return!!V(i,t)&&i.getParam("link_context_toolbar",!1,"boolean")},initValue:function(){var t=V(i);return t?j(t):""},commands:[{type:"contextformtogglebutton",icon:"link",tooltip:"Link",primary:!0,onSetup:function(t){var n=i.selection.getNode();return t.setActive(!!V(i,n)),_t(i)(t)},onAction:function(t){var n=V(i),e=t.getValue();if(n)i.dom.setAttrib(n,"href",e),i.selection.collapse(!1),t.hide();else{var r={href:e,attach:function(){}},o=H(i.selection.getContent())?P.some(F(i.selection,n)).filter(function(t){return 0<t.length}).or(P.from(e)):P.none();Y(i,r,{href:e,text:o,title:P.none(),rel:P.none(),target:P.none(),"class":P.none()}),t.hide()}}},{type:"contextformbutton",icon:"unlink",tooltip:"Remove link",onSetup:o,onAction:function(t){Z(i),t.hide()}},{type:"contextformbutton",icon:"new-tab",tooltip:"Open link",onSetup:o,onAction:function(t){At(i)(),t.hide()}}]}),Nt(t),(u=t).addCommand("mceLink",function(){u.getParam("link_quicklink",!1,"boolean")?u.fire("contexttoolbar-show",{toolbarKey:"quicklink"}):Ct(u)()}),(a=t).addShortcut("Meta+K","",function(){a.execCommand("mceLink")})})}()}(window);
