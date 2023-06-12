import{_ as h,r as s,o as t,c as r,b as e,d as l,e as o,a as i}from"./app-ff2f634e.js";const u={},n=i(`<h2 id="_1-前端路由的由来" tabindex="-1"><a class="header-anchor" href="#_1-前端路由的由来" aria-hidden="true">#</a> 1. 前端路由的由来</h2><ul><li>说前端路由由来之前，先看下后端路由：</li></ul><blockquote><p>后端路由：在前后端不分离的时代，路由都是通过服务端指定的，服务端根据客户端发来的HTTP请求，将返回的数据于模板引擎响应结果结合后进行渲染，将渲染完毕的页面发送给客户端。 优点：SEO友好，爬虫爬取到的页面就是最终的渲染结果。 缺点：每次发起请求都要刷新页面，用户体验不好，服务器压力大。</p></blockquote><ul><li>SPA</li></ul><blockquote><p>SPA是单页面应用Single Page web Application的简写。简单理解就是一个web项目只有一个html文件，一旦页面加载完成，SPA不会因为用户的操作进行重新加载或跳转，而是用JS动态变换html的内容（使页面无需重新加载，用户体验更加流程），页面本身的url并没有变化，这将导致两个问题： 1.SPA无法就记住用户的操作：刷新 &amp; 前进 &amp; 后退。 2.实际只有一个url，对SEO不友好，爬虫获取到的html只是模板而不是最终的页面。</p></blockquote><ul><li><strong>前端路由的由来</strong>可以理解成是基于SPA页面局部更新特点的，但是要解决SPA的两个问题，实现： <ul><li>改变url不让浏览器向服务器发送请求</li><li>监听url的变化，执行对应的操作</li></ul></li></ul><h2 id="_2-hash模式" tabindex="-1"><a class="header-anchor" href="#_2-hash模式" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>2.hash模式</h2><ul><li>hash模式：<code>www.baidu.com/#hashhash</code></li><li>hash指的就是url的#及后面的字符，如上面的“#hashhash”</li><li>hash模式的特点； <ul><li>hash值的变化不会导致浏览器向服务器发送请求，不会引起页面刷新</li><li>hash值变化会触发hashchange事件</li><li>hash值变化会在浏览器的历史中留下记录，使用的浏览器的后退按钮可以回到上一个hash值</li><li>hash永远不会提交到服务器，即使刷新页面也不会。</li></ul></li></ul><p>由以上特点可见，hash模式完全满足前端路由的需求，因此在h5的history模式出现之前，基本都是使用hash模式实现前端路由。</p><ul><li>优缺点： <ul><li>优点： <ul><li>兼容性好，支持低版本和IE浏览器</li><li>实现前端路由无需服务端支持</li></ul></li><li>缺点 <ul><li>url带有#符号，略丑</li></ul></li></ul></li></ul><h2 id="_3-history模式" tabindex="-1"><a class="header-anchor" href="#_3-history模式" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>3.history模式</h2><ul><li>在HTML5之前，浏览器就有history对象了，只能用于多页面之间的跳转</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`history.go(n) // n&gt;0前进n页；n&lt;0后退n页
history.forward() // 前进一页
history.back() // 后退一页\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在HTML5规范中，history中增加了新的API：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`/*
  参数说明：
    state：合法的JavaScript对象，可以用在popstate对象中
    title：标题，基本忽略，用null
    url: 任意有效的url，将要跳转的新地址
*/
history.pushState(state, title, url) // 保留现有记录的同时，将url加到历史记录中
history.replaceState(state, title, url) // 将历史记录中的当前页面替换成url
history.state // 返回当前状态对象\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>pushState</code>和<code>replaceState</code>方法可以改变url，但是不会刷新页面，浏览器不会向服务端发送请求，具备了实现前端路由的能力。</li><li>如何监听url的变化？ <ul><li>对比hash的<code>hashchange</code>方法，history的变化不会触发任何事件，我们可以通过罗列可能触发history变化的情况，对这些情况进行拦截，以此监听history的变化。</li><li>对于单页面的history模式而言，url的改变只能由以下情况引起： <ul><li>1.点击浏览器的前进/后退按钮，onpopstate可以监听到</li><li>2.点击a标签</li><li>3.在JS代码中触发<code>history.pushState()</code>或<code>history.replaceState()</code></li></ul></li></ul></li><li>history模式的url发生变化时不会立即向服务器发起请求，刷新会立即请求。</li></ul><h2 id="_4-两种模式的区别" tabindex="-1"><a class="header-anchor" href="#_4-两种模式的区别" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>4.两种模式的区别</h2><ol><li>外观：hash的url有个#符号，history没有，history外观更好看。</li><li>刷新：hash刷新会加载到地址栏对应的页面，history刷新浏览器会重新发起请求，如果服务端没有匹配当前的url，就会出现404页面。</li><li>兼容性：hash能兼容到IE8，history只能兼容到IE10。</li><li>服务端支持：hash（#及后面的内容）的变化不会导致浏览器向服务器发起请求；history刷新会重新向服务器发起请求，需要在服务端做处理：如果没有匹配到资源，就返回同一个html页面。</li><li>原理：hash通过监听浏览器的<code>onhashchange()</code>事件，查找对应的路由规则；history利用H5新增的<code>pushState()</code>和<code>replaceState()</code>方法改变url。</li><li>记录：hash模式只有#后面的内容被修改才会添加新的记录栈；history通过<code>pushState()</code>设置的url于当前url一模一样也会被记录到历史记录栈。</li></ol><h2 id="_5-使用场景-如何选择" tabindex="-1"><a class="header-anchor" href="#_5-使用场景-如何选择" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>5.使用场景（如何选择）</h2>`,19),d={href:"https://so.csdn.net/so/search?q=vue-router&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},c=i('<ol><li>如果追求外观，history更合适。</li><li>对比hash，history有以下优势：</li></ol><ul><li><code>pushState()</code>设置的url可以是与当前url同源的url；而hash只能改变#后面的内容，只能设置于当前url同文档的url。</li><li><code>pushState()</code>设置的url与当前url一模一样也会被添加到历史记录栈；hash必须#后面的内容被更新才会记录。</li><li><code>pushState()</code>可以通过stateObject参数添加任意类型的数据到记录中，而hash只能添加短字符串。</li><li>pushState()可以额外设置title属性供后续使用。</li></ul><ol start="3"><li>history模式需要后端配合。</li><li>hash兼容性更好。</li></ol>',3);function p(v,b){const a=s("ExternalLinkIcon");return t(),r("div",null,[n,e("p",null,[l("一般情况下，"),e("a",d,[l("vue-router"),o(a)]),l("前端路由使用hash和history模式都可以。")]),c])}const y=h(u,[["render",p],["__file","qianduanluyouhashhehistorydequbie.html.vue"]]);export{y as default};