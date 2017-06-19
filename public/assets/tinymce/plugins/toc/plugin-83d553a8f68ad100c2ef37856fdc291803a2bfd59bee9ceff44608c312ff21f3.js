!function(){var e={},n=function(n){for(var t=e[n],r=t.deps,a=t.defn,i=r.length,c=new Array(i),d=0;d<i;++d)c[d]=o(r[d]);var l=a.apply(null,c);if(void 0===l)throw"module ["+n+"] returned undefined";t.instance=l},t=function(n,t,o){if("string"!=typeof n)throw"module id must be a string";if(void 0===t)throw"no dependencies for "+n;if(void 0===o)throw"no definition function for "+n;e[n]={deps:t,defn:o,instance:void 0}},o=function(t){var o=e[t];if(void 0===o)throw"module ["+t+"] was undefined";return void 0===o.instance&&n(t),o.instance},r=function(e,n){for(var t=e.length,r=new Array(t),a=0;a<t;++a)r.push(o(e[a]));n.apply(null,n)},a={};a.bolt={module:{api:{define:t,require:r,demand:o}}};var i=t,c=function(e,n){i(e,[],function(){return n})};c("4",tinymce.util.Tools.resolve),i("1",["4"],function(e){return e("tinymce.PluginManager")}),i("2",["4"],function(e){return e("tinymce.util.I18n")}),i("3",["4"],function(e){return e("tinymce.util.Tools")}),i("0",["1","2","3"],function(e,n,t){return e.add("toc",function(e){function o(n){return!!n&&e.schema.isValidChild("div",n)}function r(n){return n&&e.dom.is(n,"."+m.className)&&e.getBody().contains(n)}function a(){var n=this;n.disabled(e.readonly||!c()),e.on("LoadContent SetContent change",function(){n.disabled(e.readonly||!c())})}function i(e){var n,t=[];for(n=1;n<=e;n++)t.push("h"+n);return t.join(",")}function c(){return!(!m||!d(m).length)}function d(n){var o=i(n.depth),r=h(o);return r.length&&/^h[1-9]$/i.test(n.headerTag)&&(r=r.filter(function(t,o){return!e.dom.hasClass(o.parentNode,n.className)})),t.map(r,function(e){return e.id||(e.id=p()),{id:e.id,level:parseInt(e.nodeName.replace(/^H/i,""),10),title:h.text(e)}})}function l(e){var n,t=9;for(n=0;n<e.length;n++)if(e[n].level<t&&(t=e[n].level),1==t)return t;return t}function u(n,t){var o="<"+n+' contenteditable="true">',r="</"+n+">";return o+e.dom.encode(t)+r}function s(e){var n=f(e);return'<div class="'+e.className+'" contenteditable="false">'+n+"</div>"}function f(e){var t,o,r,a,i="",c=d(e),s=l(c)-1;if(!c.length)return"";for(i+=u(e.headerTag,n.translate("Table of Contents")),t=0;t<c.length;t++){if(r=c[t],a=c[t+1]&&c[t+1].level,s===r.level)i+="<li>";else for(o=s;o<r.level;o++)i+="<ul><li>";if(i+='<a href="#'+r.id+'">'+r.title+"</a>",a!==r.level&&a)for(o=r.level;o>a;o--)i+="</li></ul><li>";else i+="</li>",a||(i+="</ul>");s=r.level}return i}var m,h=e.$,v={depth:3,headerTag:"h2",className:"mce-toc"},g=function(e){var n=0;return function(){var t=(new Date).getTime().toString(32);return e+t+(n++).toString(32)}},p=g("mcetoc_");e.on("PreInit",function(){var n=e.settings,t=parseInt(n.toc_depth,10)||0;m={depth:t>=1&&t<=9?t:v.depth,headerTag:o(n.toc_header)?n.toc_header:v.headerTag,className:n.toc_class?e.dom.encode(n.toc_class):v.className}}),e.on("PreProcess",function(e){var n=h("."+m.className,e.node);n.length&&(n.removeAttr("contentEditable"),n.find("[contenteditable]").removeAttr("contentEditable"))}),e.on("SetContent",function(){var e=h("."+m.className);e.length&&(e.attr("contentEditable",!1),e.children(":first-child").attr("contentEditable",!0))});var T=function(n){return!n.length||e.dom.getParents(n[0],".mce-offscreen-selection").length>0};e.addCommand("mceInsertToc",function(){var n=h("."+m.className);T(n)?e.insertContent(s(m)):e.execCommand("mceUpdateToc")}),e.addCommand("mceUpdateToc",function(){var n=h("."+m.className);n.length&&e.undoManager.transact(function(){n.html(f(m))})}),e.addButton("toc",{tooltip:"Table of Contents",cmd:"mceInsertToc",icon:"toc",onPostRender:a}),e.addButton("tocupdate",{tooltip:"Update",cmd:"mceUpdateToc",icon:"reload"}),e.addContextToolbar(r,"tocupdate"),e.addMenuItem("toc",{text:"Table of Contents",context:"insert",cmd:"mceInsertToc",onPostRender:a})}),function(){}}),o("0")()}();