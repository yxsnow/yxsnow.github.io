import{_ as e,o as n,c as i,a}from"./app-ff2f634e.js";const r="/assets/f21dddf271ff487694cd6a40de70ba80_58eff4e0ca704c94a-2e15406a.png",d={},t=a(`<h2 id="错误信息收集方案" tabindex="-1"><a class="header-anchor" href="#错误信息收集方案" aria-hidden="true">#</a> 错误信息收集方案：</h2><p>前端错误分为：代码执行错误、资源加载错误</p><h3 id="一、try-catch" tabindex="-1"><a class="header-anchor" href="#一、try-catch" aria-hidden="true">#</a> 一、try catch</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try{
    // 代码块
} catch(e){
    // 错误处理、这块可以进行上报
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式需要开发者手动对预估存在错误风险进行包裹，这种可以手动完成也可以通过自动化工具和类库完成。自动化工具也是基于AST实现的，比如UglityJS等。</p><p>try catch的特点：<strong>对于处理运行时非异步错误没问题，但无法处理语法错误和异步错误。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 能捕获
try{
    a // 未定义变量
} catch(e){
    console.log(e)
}
// 不能捕获--语法错误
try{
    var a = \\ &#39;a&#39;
}catch(e){
   console.log(e)
}
// 不能捕获--异步
try{
   setTimeout(()=&gt;{
        a
    })
} catch(e){
    console.log(e)
}
// 在setTimeout里面再加一层try catch才会生效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：try catch有局限性，且对代码侵入性强</p><h3 id="二、window-onerror-事件冒泡的方式处理" tabindex="-1"><a class="header-anchor" href="#二、window-onerror-事件冒泡的方式处理" aria-hidden="true">#</a> 二、window.onerror--事件冒泡的方式处理</h3><p>window.onerror的特点：能对<strong>语法异常和运行时异常（异步也能捕获）<strong>进行处理，但是对</strong>语法错误和网络错误</strong>（因为网络请求异常不会发生事件冒泡）无能为力，代码侵入性小，不必通过AST向代码中自动插入脚本。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.onerror = function(message, source, lineno, colno, error) { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>message：错误消息（字符串）。</li><li>source：引发错误的脚本的URL（字符串）</li><li>lineno：发生错误的行号（数值）</li><li>colno：发生错误的行的列号（数值）</li><li>error：错误对象（对象）,比如error.stack会获取错误的堆栈信息</li></ul><p>跨域脚本的错误处理：</p><p>对于不同域的js文件，window.onerror不能捕获到有效信息。出于安全原因，不同浏览器返回的错误信息参数可能不一致。跨域之后window.onerror在很多浏览器中是无法捕获异常信息的，统一会返回脚本错误（script error）。所以需要对脚本进行设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>crossorigin=&quot;anonymous&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用source map进行错误还原</p><h3 id="三、promise的错误信息处理" tabindex="-1"><a class="header-anchor" href="#三、promise的错误信息处理" aria-hidden="true">#</a> 三、Promise的错误信息处理</h3><p>提倡Promise最后写上catch函数的习惯，可以通过ESLint插件eslint-plugin-promise检查。</p><p>promise的错误通过捕获事件unhandlerejection</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.addEventListener(&#39;unhandledrejection&#39;,e=&gt;{
    console.log(e)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、网络异常错误处理" tabindex="-1"><a class="header-anchor" href="#四、网络异常错误处理" aria-hidden="true">#</a> 四、网络异常错误处理</h3><p>可以进行如下操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src&quot;**.js&quot; onerror=&quot;errorHandle(this)&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者使用：window.addEventListener(&#39;error&#39;) 事件捕获</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.addEventListener(&#39;error&#39;,e=&gt;{
    console.log(e)
},true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那这两个error：window.onerror和window.addEventListener(&#39;error&#39;)怎么区分网络加载错误和其他一般错误，可以通过以下方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.addEventListener(&#39;error&#39;,e=&gt;{
    if(!e.message){
        // 网络资源加载错误
    }
},true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>window.onerror和window.addEventListener(&#39;error&#39;)区别：</p><ul><li><p>window.onerror：冒泡，需要进行函数赋值，重复声明会被替换</p></li><li><p>window.addEventListener(&#39;error&#39;):捕获，可以绑定多个回调函数，按照绑定顺序执行</p></li></ul><h3 id="五、页面崩溃收集和处理" tabindex="-1"><a class="header-anchor" href="#五、页面崩溃收集和处理" aria-hidden="true">#</a> 五、页面崩溃收集和处理</h3><p>通过监听window对下的load和beforeunload进行处理并结合sessionStorage</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.addEventListener(&#39;load&#39;,()=&gt;{
    sessionStorage.setTitem(&#39;page_exit&#39;,&#39;pending&#39;)
})
window.addEventListener(&#39;beforeunload&#39;,()=&gt;{
    sessionStorage.setTitem(&#39;page_exit&#39;,&#39;true&#39;)
})

sessionStorage.getTitem(&#39;page_exit&#39;)!=&#39;true&#39; // 页面崩溃
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六、vue框架的错误处理" tabindex="-1"><a class="header-anchor" href="#六、vue框架的错误处理" aria-hidden="true">#</a> 六、vue框架的错误处理</h3><p>Vue.config.errorHandler捕获的错误会以console.error的方式输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.config.errorHandler = function (err, vm, info) {       reportError({             code: &#39;xx&#39;,             msg: encodeURIComponent(err),             action: &#39;vue-render-error&#39;,             line: info,             attach2: err &amp;&amp; err.stack || &#39;&#39;       });};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因此可以劫持console.error来捕获框架中的错误</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const nativeConsoleError = window.console.error

window.console.error = (..args)=&gt;nativeConsoleError.apply(this,args)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能数据" tabindex="-1"><a class="header-anchor" href="#性能数据" aria-hidden="true">#</a> 性能数据</h2><p>监控指标：首次绘制时间（FP）、首次有内容绘制（FCP）时间、 首次有意义绘制时间（FMP）、首屏时间、用户可交互（TTI）时间</p><img width="756" height="380" src="`+r+`" class="jop-noMdConv"><p>关键数据耗时：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var navigasitonInfo = null;if (typeof performance != &#39;undefined&#39; &amp;&amp; typeof performance.getEntriesByType != &#39;undefined&#39;) {  navigasitonInfo = performance.getEntriesByType(&#39;navigation&#39;)[0];};
let timing = window.performance.timing;
//页面完全加载耗时let complete_load_duration = timing.loadEventEnd - timing.navigationStart 
// 页面白屏时间
let white_screen_duration = time.domLoading - timing.navigationStart
// 首屏时间
let first_screen_duration = calcFirstScreen()
// 可交互

let interactive_duration = timing.domContentLoadedEventEnd - timing.navigationStart
// 准备耗时
let stalled_duration= timing.domainLookupStart - timing.navigationStart
// 重定向耗时
let redirect_duration = timing.redirectEnd - timing.redirectStart
// DNS解析耗时
let dns_duration = timing.domainLookupEnd - timing.domainLookupStart
// ip连接耗时
let ip_connect_duration = timing.connectEnd - timing.connectStart
// 首包耗时
let first_data_duration = timing.responseStart - timing.requestStart 
// 完整包加载耗时
let final_data_duration = timing.responseEnd - (timing.requestStart?timing.requestStart:timing.fetchStart)),
// dom处理
let dom_operate_duration = timing.domComplete - timing.domLoading
// 资源加载耗时
let res_load_duration  = info.duration
// 当前页面文件大小
let res_size = navigasitonInfo ? navigasitonInfo.transferSize : 0
function calcFirstScreen() {        var timing = window.performance.timing;        var firstScreen = timing.loadEventStart - timing.navigationStart;        if (typeof window.performance != &#39;undefined&#39; &amp;&amp; typeof window.performance.getEntriesByName != &#39;undefined&#39;){            try{                var iHeight = window.innerHeight;                var iWidth = window.innerWidth;                var imgList = document.querySelectorAll(&#39;img&#39;);                var loadEventDuration = timing.loadEventEnd - timing.navigationStart;                for (var i=0,j=imgList.length;i&lt;j;i++){                    var target = imgList[i];                    if (typeof target.getBoundingClientRect != &#39;undefined&#39; &amp;&amp; target.src) {                        var rectInfo = target.getBoundingClientRect();                        if (rectInfo){                            var pageYOffset = window.pageYOffset;                            var topH = rectInfo.top + pageYOffset;                            if (topH &lt; iHeight &amp;&amp; rectInfo.left &gt;=0 &amp;&amp;rectInfo.left&lt;iWidth){                                var perList = window.performance.getEntriesByName(target.src);                                if (perList.length){                                    var targetPer = perList[0];                                    if (targetPer.fetchStart &lt; loadEventDuration){                                        firstScreen = targetPer.responseEnd;                                    };                                };                            };                        };                    };                };            }catch (e) {            }        };        return firstScreen;    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误上报" tabindex="-1"><a class="header-anchor" href="#错误上报" aria-hidden="true">#</a> 错误上报</h2><p>最好采用单独域名，防止对业务服务器造成压力以及同一个域名的请求量有并发数的限制</p><h3 id="上报方式" tabindex="-1"><a class="header-anchor" href="#上报方式" aria-hidden="true">#</a> 上报方式：</h3><p>1、图片的形式</p><p>图片不涉及跨域的问题，使用构造空的Image对象的方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let reportUrl = &#39;xxurl.json&#39;;let reportImg= new Image();let dataStr = paramStr(xxx);reportImg.src = newReportUrl + &#39;?&#39; + dataStr;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、navigator.sendBeacon</p><p>使用 <strong><code>sendBeacon()</code></strong> 方法会使用户代理在有机会时异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能。这就解决了提交分析数据时的所有的问题：数据可靠，传输异步并且不会影响下一页面的加载。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.addEventListener(&#39;unload&#39;, logData, false);

function logData() {
    navigator.sendBeacon(&quot;/log&quot;, analyticsData);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上报时机" tabindex="-1"><a class="header-anchor" href="#上报时机" aria-hidden="true">#</a> 上报时机：</h3><ul><li>页面加载和重新刷新</li><li>页面切换路由</li><li>页面关闭</li><li>页面所在的tab标签重新可见</li></ul>`,53),s=[t];function l(o,c){return n(),i("div",null,s)}const u=e(d,[["render",l],["__file","qianduanxingnenjiankonghecuowushoujiyushangbao.html.vue"]]);export{u as default};
