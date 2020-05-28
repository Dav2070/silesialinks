/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.3.0 (2020-05-21)
 */

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=tinymce.util.Tools.resolve("tinymce.Env"),c=function(){return"mce-pagebreak"},g=function(){return'<img src="'+a.transparentSrc+'" class="'+c()+'" data-mce-resize="false" data-mce-placeholder />'};!function n(){e.add("pagebreak",function(e){var a,n,o,i,t,r;(a=e).addCommand("mcePageBreak",function(){a.settings.pagebreak_split_block?a.insertContent("<p>"+g()+"</p>"):a.insertContent(g())}),(n=e).ui.registry.addButton("pagebreak",{icon:"page-break",tooltip:"Page break",onAction:function(){return n.execCommand("mcePageBreak")}}),n.ui.registry.addMenuItem("pagebreak",{text:"Page break",icon:"page-break",onAction:function(){return n.execCommand("mcePageBreak")}}),i=(o=e).getParam("pagebreak_separator","\x3c!-- pagebreak --\x3e"),t=new RegExp(i.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g,function(e){return"\\"+e}),"gi"),o.on("BeforeSetContent",function(e){e.content=e.content.replace(t,g())}),o.on("PreInit",function(){o.serializer.addNodeFilter("img",function(e){for(var a,n,t=e.length;t--;)if((n=(a=e[t]).attr("class"))&&-1!==n.indexOf("mce-pagebreak")){var r=a.parent;if(o.schema.getBlockElements()[r.name]&&o.getParam("pagebreak_split_block",!1)){r.type=3,r.value=i,r.raw=!0,a.remove();continue}a.type=3,a.value=i,a.raw=!0}})}),(r=e).on("ResolveName",function(e){"IMG"===e.target.nodeName&&r.dom.hasClass(e.target,c())&&(e.name="pagebreak")})})}()}();
