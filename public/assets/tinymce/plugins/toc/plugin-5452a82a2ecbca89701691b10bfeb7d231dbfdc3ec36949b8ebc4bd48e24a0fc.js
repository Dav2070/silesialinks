/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.3.0 (2020-05-21)
 */

!function(){"use strict";var e,n,t=tinymce.util.Tools.resolve("tinymce.PluginManager"),s=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),f=tinymce.util.Tools.resolve("tinymce.util.I18n"),c=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=function(t){return t.getParam("toc_class","mce-toc")},m=function(t){var e=t.getParam("toc_header","h2");return/^h[1-6]$/.test(e)?e:"h2"},a=(e="mcetoc_",n=0,function(){var t=(new Date).getTime().toString(32);return e+t+(n++).toString(32)}),u=function u(t){var e,n=[];for(e=1;e<=t;e++)n.push("h"+e);return n.join(",")},v=function(n){var t,o=l(n),e=m(n),i=u(1<=(t=parseInt(n.getParam("toc_depth","3"),10))&&t<=9?t:3),r=n.$(i);return r.length&&/^h[1-9]$/i.test(e)&&(r=r.filter(function(t,e){return!n.dom.hasClass(e.parentNode,o)})),c.map(r,function(t){return{id:t.id?t.id:a(),level:parseInt(t.nodeName.replace(/^H/i,""),10),title:n.$.text(t),element:t}})},d=function(t){var e,n,o,i,r,c,l,a="",u=v(t),d=function(t){var e,n=9;for(e=0;e<t.length;e++)if(t[e].level<n&&(n=t[e].level),1===n)return n;return n}(u)-1;if(!u.length)return"";for(a+=(r=m(t),c=f.translate("Table of Contents"),l="</"+r+">","<"+r+' contenteditable="true">'+s.DOM.encode(c)+l),e=0;e<u.length;e++){if((o=u[e]).element.id=o.id,i=u[e+1]&&u[e+1].level,d===o.level)a+="<li>";else for(n=d;n<o.level;n++)a+="<ul><li>";if(a+='<a href="#'+o.id+'">'+o.title+"</a>",i!==o.level&&i)for(n=o.level;i<n;n--)a+="</li></ul><li>";else a+="</li>",i||(a+="</ul>");d=o.level}return a},r=function(t){var e,n,o,i,r=l(t),c=t.$("."+r);o=t,!(i=c).length||0<o.dom.getParents(i[0],".mce-offscreen-selection").length?t.insertContent((n=d(e=t),'<div class="'+e.dom.encode(l(e))+'" contenteditable="false">'+n+"</div>")):g(t)},g=function(t){var e=l(t),n=t.$("."+e);n.length&&t.undoManager.transact(function(){n.html(d(t))})},o=function(n){return function(t){var e=function(){return t.setDisabled(n.mode.isReadOnly()||!(0<v(n).length))};return e(),n.on("LoadContent SetContent change",e),function(){return n.on("LoadContent SetContent change",e)}}},h=function(t){var e;t.ui.registry.addButton("toc",{icon:"toc",tooltip:"Table of contents",onAction:function(){return t.execCommand("mceInsertToc")},onSetup:o(t)}),t.ui.registry.addButton("tocupdate",{icon:"reload",tooltip:"Update",onAction:function(){return t.execCommand("mceUpdateToc")}}),t.ui.registry.addMenuItem("toc",{icon:"toc",text:"Table of contents",onAction:function(){return t.execCommand("mceInsertToc")},onSetup:o(t)}),t.ui.registry.addContextToolbar("toc",{items:"tocupdate",predicate:(e=t,function(t){return t&&e.dom.is(t,"."+l(e))&&e.getBody().contains(t)}),scope:"node",position:"node"})};!function i(){t.add("toc",function(t){var e,n,o,i;(e=t).addCommand("mceInsertToc",function(){r(e)}),e.addCommand("mceUpdateToc",function(){g(e)}),h(t),o=(n=t).$,i=l(n),n.on("PreProcess",function(t){var e=o("."+i,t.node);e.length&&(e.removeAttr("contentEditable"),e.find("[contenteditable]").removeAttr("contentEditable"))}),n.on("SetContent",function(){var t=o("."+i);t.length&&(t.attr("contentEditable",!1),t.children(":first-child").attr("contentEditable",!0))})})}()}();
