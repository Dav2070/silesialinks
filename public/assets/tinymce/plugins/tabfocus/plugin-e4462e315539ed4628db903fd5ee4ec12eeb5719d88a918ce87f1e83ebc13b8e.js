/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.3.0 (2020-05-21)
 */

!function(s){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),a=tinymce.util.Tools.resolve("tinymce.EditorManager"),y=tinymce.util.Tools.resolve("tinymce.Env"),f=tinymce.util.Tools.resolve("tinymce.util.Delay"),d=tinymce.util.Tools.resolve("tinymce.util.Tools"),m=tinymce.util.Tools.resolve("tinymce.util.VK"),v=t.DOM,n=function(e){e.keyCode!==m.TAB||e.ctrlKey||e.altKey||e.metaKey||e.preventDefault()},i=function(c){function e(n){var i,o,e,l,t;if(!(n.keyCode!==m.TAB||n.ctrlKey||n.altKey||n.metaKey||n.isDefaultPrevented())&&(1===(e=d.explode((t=c).getParam("tab_focus",t.getParam("tabfocus_elements",":prev,:next")))).length&&(e[1]=e[0],e[0]=":prev"),o=n.shiftKey?":prev"===e[0]?r(-1):v.get(e[0]):":next"===e[1]?r(1):v.get(e[1]))){var u=a.get(o.id||o.name);o.id&&u?u.focus():f.setTimeout(function(){y.webkit||s.window.focus(),o.focus()},10),n.preventDefault()}function r(e){function t(e){return/INPUT|TEXTAREA|BUTTON/.test(e.tagName)&&a.get(n.id)&&-1!==e.tabIndex&&function t(e){return"BODY"===e.nodeName||"hidden"!==e.type&&"none"!==e.style.display&&"hidden"!==e.style.visibility&&t(e.parentNode)}(e)}if(o=v.select(":input:enabled,*[tabindex]:not(iframe)"),d.each(o,function(e,t){if(e.id===c.id)return i=t,!1}),0<e){for(l=i+1;l<o.length;l++)if(t(o[l]))return o[l]}else for(l=i-1;0<=l;l--)if(t(o[l]))return o[l];return null}}c.on("init",function(){c.inline&&v.setAttrib(c.getBody(),"tabIndex",null),c.on("keyup",n),y.gecko?c.on("keypress keydown",e):c.on("keydown",e)})};!function o(){e.add("tabfocus",function(e){i(e)})}()}(window);
