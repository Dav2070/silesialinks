!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=tinymce.util.Tools.resolve("tinymce.Env"),c=function(e){return parseInt(e.getParam("plugin_preview_width","650"),10)},a=function(e){return parseInt(e.getParam("plugin_preview_height","500"),10)},s=function(e){return e.getParam("content_style","")},d=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=function(t){var n="",i=t.dom.encode,e=s(t);n+='<base href="'+i(t.documentBaseURI.getURI())+'">',e&&(n+='<style type="text/css">'+e+"</style>"),d.each(t.contentCSS,function(e){n+='<link type="text/css" rel="stylesheet" href="'+i(t.documentBaseURI.toAbsolute(e))+'">'});var o=t.settings.body_id||"tinymce";-1!==o.indexOf("=")&&(o=(o=t.getParam("body_id","","hash"))[t.id]||o);var r=t.settings.body_class||"";-1!==r.indexOf("=")&&(r=(r=t.getParam("body_class","","hash"))[t.id]||"");var c=t.settings.directionality?' dir="'+t.settings.directionality+'"':"";return"<!DOCTYPE html><html><head>"+n+'</head><body id="'+i(o)+'" class="mce-content-body '+i(r)+'"'+i(c)+">"+t.getContent()+'<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A") {e.preventDefault();}}}, false);</script> </body></html>'},m=function(e,t,n){var i=l(e);if(n)t.src="data:text/html;charset=utf-8,"+encodeURIComponent(i);else{var o=t.contentWindow.document;o.open(),o.write(i),o.close()}},t=function(n){var i=!r.ie,e='<iframe src="" frameborder="0"'+(i?' sandbox="allow-scripts"':"")+"></iframe>",t=c(n),o=a(n);n.windowManager.open({title:"Preview",width:t,height:o,html:e,buttons:{text:"Close",onclick:function(e){e.control.parent().parent().close()}},onPostRender:function(e){var t=e.control.getEl("body").firstChild;m(n,t,i)}})},n=function(e){e.addCommand("mcePreview",function(){t(e)})},i=function(e){e.addButton("preview",{title:"Preview",cmd:"mcePreview"}),e.addMenuItem("preview",{text:"Preview",cmd:"mcePreview",context:"view"})};e.add("preview",function(e){n(e),i(e)})}();