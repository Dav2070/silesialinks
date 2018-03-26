!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(t){return/^[A-Za-z][A-Za-z0-9\-:._]*$/.test(t)},e=function(t){var e=t.selection.getNode();return"A"===e.tagName&&""===t.dom.getAttrib(e,"href")?e.id||e.name:""},i=function(t,e){var n=t.selection.getNode();"A"===n.tagName&&""===t.dom.getAttrib(n,"href")?(n.removeAttribute("name"),n.id=e):(t.focus(),t.selection.collapse(!0),t.execCommand("mceInsertContent",!1,t.dom.createHTML("a",{id:e})))},n=function(r){var t=e(r);r.windowManager.open({title:"Anchor",body:{type:"textbox",name:"id",size:40,label:"Id",value:t},onsubmit:function(t){var e,n,o=t.data.id;e=r,(a(n=o)?(i(e,n),0):(e.windowManager.alert("Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores."),1))&&t.preventDefault()}})},o=function(t){t.addCommand("mceAnchor",function(){n(t)})},r=function(o){return function(t){for(var e=0;e<t.length;e++)(n=t[e]).attr("href")||!n.attr("id")&&!n.attr("name")||n.firstChild||t[e].attr("contenteditable",o);var n}},c=function(t){t.on("PreInit",function(){t.parser.addNodeFilter("a",r("false")),t.serializer.addNodeFilter("a",r(null))})},d=function(t){t.addButton("anchor",{icon:"anchor",tooltip:"Anchor",cmd:"mceAnchor",stateSelector:"a:not([href])"}),t.addMenuItem("anchor",{icon:"anchor",text:"Anchor",context:"insert",cmd:"mceAnchor"})};t.add("anchor",function(t){c(t),o(t),d(t)})}();