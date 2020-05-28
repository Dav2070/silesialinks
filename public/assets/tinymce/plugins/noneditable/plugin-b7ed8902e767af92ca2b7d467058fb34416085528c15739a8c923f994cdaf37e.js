/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.3.0 (2020-05-21)
 */

!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),l=tinymce.util.Tools.resolve("tinymce.util.Tools"),u=function(t){return t.getParam("noneditable_noneditable_class","mceNonEditable")},f=function(n){return function(t){return-1!==(" "+t.attr("class")+" ").indexOf(n)}},s=function(i,o,c){return function(t){var n=arguments,e=n[n.length-2],r=0<e?o.charAt(e-1):"";if('"'===r)return t;if(">"===r){var a=o.lastIndexOf("<",e);if(-1!==a)if(-1!==o.substring(a,e).indexOf('contenteditable="false"'))return t}return'<span class="'+c+'" data-mce-content="'+i.dom.encode(n[0])+'">'+i.dom.encode("string"==typeof n[1]?n[1]:n[0])+"</span>"}},n=function(n){var t,e,r="contenteditable";t=" "+l.trim(n.getParam("noneditable_editable_class","mceEditable"))+" ",e=" "+l.trim(u(n))+" ";var a,i=f(t),o=f(e),c=(a=n.getParam("noneditable_regexp",[]))&&a.constructor===RegExp?[a]:a;n.on("PreInit",function(){0<c.length&&n.on("BeforeSetContent",function(t){!function(t,n,e){var r=n.length,a=e.content;if("raw"!==e.format){for(;r--;)a=a.replace(n[r],s(t,a,u(t)));e.content=a}}(n,c,t)}),n.parser.addAttributeFilter("class",function(t){for(var n,e=t.length;e--;)n=t[e],i(n)?n.attr(r,"true"):o(n)&&n.attr(r,"false")}),n.serializer.addAttributeFilter(r,function(t){for(var n,e=t.length;e--;)n=t[e],(i(n)||o(n))&&(0<c.length&&n.attr("data-mce-content")?(n.name="#text",n.type=3,n.raw=!0,n.value=n.attr("data-mce-content")):n.attr(r,null))})})};!function e(){t.add("noneditable",function(t){n(t)})}()}();
