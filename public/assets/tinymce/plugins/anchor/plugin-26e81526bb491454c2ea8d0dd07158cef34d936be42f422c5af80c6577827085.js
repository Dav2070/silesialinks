/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.3.0 (2020-05-21)
 */

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(e,t){return"A"===t.tagName&&""===e.dom.getAttrib(t,"href")},r=function(e,t){return/^[A-Za-z][A-Za-z0-9\-:._]*$/.test(t)?(o=t,r=(n=e).selection.getNode(),a(n,r)?(r.removeAttribute("name"),r.id=o,n.undoManager.add()):(n.focus(),n.selection.collapse(!0),n.insertContent(n.dom.createHTML("a",{id:o}))),!0):(e.windowManager.alert("Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores."),!1);var n,o,r},i=function(t){var e,n,o=(n=(e=t).selection.getNode(),a(e,n)?n.getAttribute("id")||n.getAttribute("name"):"");t.windowManager.open({title:"Anchor",size:"normal",body:{type:"panel",items:[{name:"id",type:"input",label:"ID",placeholder:"example"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{id:o},onSubmit:function(e){r(t,e.getData().id)&&e.close()}})},c=function(o){return function(e){for(var t=0;t<e.length;t++)(n=e[t]).attr("href")||!n.attr("id")&&!n.attr("name")||n.firstChild||e[t].attr("contenteditable",o);var n}};!function t(){e.add("anchor",function(e){var t,n,o;(t=e).on("PreInit",function(){t.parser.addNodeFilter("a",c("false")),t.serializer.addNodeFilter("a",c(null))}),(n=e).addCommand("mceAnchor",function(){i(n)}),(o=e).ui.registry.addToggleButton("anchor",{icon:"bookmark",tooltip:"Anchor",onAction:function(){return o.execCommand("mceAnchor")},onSetup:function(e){return o.selection.selectorChangedWithUnbind("a:not([href])",e.setActive).unbind}}),o.ui.registry.addMenuItem("anchor",{icon:"bookmark",text:"Anchor...",onAction:function(){return o.execCommand("mceAnchor")}})})}()}();
