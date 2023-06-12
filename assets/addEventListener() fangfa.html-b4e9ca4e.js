import{_ as d,r,o as n,c as i,b as e,d as a,e as t,a as o}from"./app-ff2f634e.js";const s={},h=e("h2",{id:"定义和用法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#定义和用法","aria-hidden":"true"},"#"),a(" 定义和用法")],-1),c={href:"https://so.csdn.net/so/search?q=addEventListener&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},u=o('<p>提示： 使用 removeEventListener() 方法来移除 addEventListener() 方法添加的事件句柄。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> <a href="#"></a>语法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>`element.addEventListener(event, function, useCapture)`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数值" tabindex="-1"><a class="header-anchor" href="#参数值" aria-hidden="true">#</a> <a href="#"></a>参数值</h2><p>event 必须。字符串，指定事件名。</p><p>注意: 不要使用 “on” 前缀。 例如，使用 “click” ,而不是使用 “onclick”。</p><p>function 必须。指定要事件触发时执行的函数。</p><p>当事件对象会作为第一个参数传入函数。 事件对象的类型取决于特定的事件。例如， “click” 事件属于 MouseEvent(鼠标事件) 对象。 useCapture 可选。布尔值，指定事件是否在捕获或冒泡阶段执行。</p><p>可能值: true - 事件句柄在捕获阶段执行 false- false- 默认。事件句柄在冒泡阶段执行</p><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> <a href="#"></a>event</h3><h4 id="鼠标事件" tabindex="-1"><a class="header-anchor" href="#鼠标事件" aria-hidden="true">#</a> 鼠标事件</h4><p>click 当用户点击某个对象时调用的事件句柄。</p><p>contextmenu 在用户点击鼠标右键打开上下文菜单时触发</p><p>dblclick 当用户双击某个对象时调用的事件句柄。</p><p>mousedown 鼠标按钮被按下。</p><p>mouseenter 当鼠标指针移动到元素上时触发。</p><p>mouseleave 当鼠标指针移出元素时触发</p><p>mousemove 鼠标被移动。</p><p>mouseover 鼠标移到某元素之上。</p><p>mouseout 鼠标从某元素移开。</p><p>mouseup 鼠标按键被松开。</p><h4 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h4><p>属性 描述 DOM keydown 某个键盘按键被按下。</p><p>keypress 某个键盘按键被按下并松开。</p><p>keyup 某个键盘按键被松开。</p><h4 id="框架-对象-frame-object-事件" tabindex="-1"><a class="header-anchor" href="#框架-对象-frame-object-事件" aria-hidden="true">#</a> 框架/对象（Frame/Object）事件</h4><p>abort 图像的加载被中断。</p><p>( ) beforeunload 该事件在即将离开页面（刷新或关闭）时触发</p><p>error 在加载文档或图像时发生错误。</p><p>hashchange 该事件在当前 URL 的锚部分发生修改时触发。</p><p>load 一张页面或一幅图像完成加载。</p><p>pageshow 该事件在用户访问页面时触发</p><p>pagehide 该事件在用户离开当前网页跳转到另外一个页面时触发</p><p>resize 窗口或框架被重新调整大小。</p><p>scroll 当文档被滚动时发生的事件。</p><p>unload 用户退出页面。</p><h4 id="表单事件" tabindex="-1"><a class="header-anchor" href="#表单事件" aria-hidden="true">#</a> 表单事件</h4><p>blur 元素失去焦点时触发</p><p>change 该事件在表单元素的内容改变时触发( , , , 和 )</p><p>focus 元素获取焦点时触发</p><p>focusin 元素即将获取焦点是触发</p><p>focusout 元素即将失去焦点是触发</p><p>input 元素获取用户输入是触发</p><p>reset 表单重置时触发</p><p>search 用户向搜索域输入文本时触发 (</p><h4 id="剪贴板事件" tabindex="-1"><a class="header-anchor" href="#剪贴板事件" aria-hidden="true">#</a> 剪贴板事件</h4><p>copy 该事件在用户拷贝元素内容时触发</p><p>cut 该事件在用户剪切元素内容时触发</p><p>paste 该事件在用户粘贴元素内容时触发</p><h4 id="打印事件" tabindex="-1"><a class="header-anchor" href="#打印事件" aria-hidden="true">#</a> 打印事件</h4><p>afterprint 该事件在页面已经开始打印，或者打印窗口已经关闭时触发</p><p>beforeprint 该事件在页面即将开始打印时触发</p><h4 id="拖动事件" tabindex="-1"><a class="header-anchor" href="#拖动事件" aria-hidden="true">#</a> 拖动事件</h4><p>drag 该事件在元素正在拖动时触发</p><p>dragend 该事件在用户完成元素的拖动时触发</p><p>dragenter 该事件在拖动的元素进入放置目标时触发</p><p>dragleave 该事件在拖动元素离开放置目标时触发</p><p>dragover 该事件在拖动元素在放置目标上时触发</p><p>dragstart 该事件在用户开始拖动元素时触发</p><p>drop 该事件在拖动元素放置在目标区域时触发</p><h4 id="多媒体-media-事件" tabindex="-1"><a class="header-anchor" href="#多媒体-media-事件" aria-hidden="true">#</a> 多媒体（Media）事件</h4><p>abort 事件在视频/音频（audio/video）终止加载时触发。</p><p>canplay 事件在用户可以开始播放视频/音频（audio/video）时触发。</p><p>canplaythrough 事件在视频/音频（audio/video）可以正常播放且无需停顿和缓冲时触发。</p><p>durationchange 事件在视频/音频（audio/video）的时长发生变化时触发。</p><p>emptied The event occurs when the current playlist is empty ended 事件在视频/音频（audio/video）播放结束时触发。</p><p>error 事件在视频/音频（audio/video）数据加载期间发生错误时触发。</p><p>loadeddata 事件在浏览器加载视频/音频（audio/video）当前帧时触发触发。</p><p>loadedmetadata 事件在指定视频/音频（audio/video）的元数据加载后触发。</p><p>loadstart 事件在浏览器开始寻找指定视频/音频（audio/video）触发。</p><p>pause 事件在视频/音频（audio/video）暂停时触发。</p><p>play 事件在视频/音频（audio/video）开始播放时触发。</p><p>playing 事件在视频/音频（audio/video）暂停或者在缓冲后准备重新开始播放时触发。</p><p>progress 事件在浏览器下载指定的视频/音频（audio/video）时触发。</p><p>ratechange 事件在视频/音频（audio/video）的播放速度发送改变时触发。</p><p>seeked 事件在用户重新定位视频/音频（audio/video）的播放位置后触发。</p><p>seeking 事件在用户开始重新定位视频/音频（audio/video）时触发。</p><p>stalled 事件在浏览器获取媒体数据，但媒体数据不可用时触发。</p><p>suspend 事件在浏览器读取媒体数据中止时触发。</p><p>timeupdate 事件在当前的播放位置发送改变时触发。</p><p>volumechange 事件在音量发生改变时触发。</p><p>waiting 事件在视频由于要播放下一帧而需要缓冲时触发。</p><h4 id="动画事件" tabindex="-1"><a class="header-anchor" href="#动画事件" aria-hidden="true">#</a> 动画事件</h4><p>animationend 该事件在 CSS 动画结束播放时触发</p><p>animationiteration 该事件在 CSS 动画重复播放时触发</p><p>animationstart 该事件在 CSS 动画开始播放时触发</p><h4 id="过渡事件" tabindex="-1"><a class="header-anchor" href="#过渡事件" aria-hidden="true">#</a> 过渡事件</h4><p>transitionend 该事件在 CSS 完成过渡后触发。</p><h4 id="其他事件" tabindex="-1"><a class="header-anchor" href="#其他事件" aria-hidden="true">#</a> 其他事件</h4><p>message 该事件通过或者从对象(WebSocket, Web Worker, Event Source 或者子 frame 或父窗口)接收到消息时触发</p><p>online 该事件在浏览器开始在线工作时触发。</p><p>offline 该事件在浏览器开始离线工作时触发。</p><p>popstate 该事件在窗口的浏览历史（history 对象）发生改变时触发。 event occurs when the window’s history changes</p><p>show 该事件当元素在上下文菜单显示时触发</p><p>storage 该事件在 Web Storage(HTML 5 Web 存储)更新时触发</p><p>toggle 该事件在用户打开或关闭 元素时触发</p><p>wheel 该事件在鼠标滚轮在元素上下滚动时触发</p>',97);function l(v,f){const p=r("ExternalLinkIcon");return n(),i("div",null,[h,e("p",null,[e("a",c,[a("addEventListener"),t(p)]),a("() 方法用于向指定元素添加事件句柄。")]),u])}const b=d(s,[["render",l],["__file","addEventListener() fangfa.html.vue"]]);export{b as default};
