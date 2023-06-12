import{_ as n,r as s,o as r,c as l,b as e,d as i,e as a,a as t}from"./app-ff2f634e.js";const c="/assets/5b16b678f4144ab2a1d5d107303e6d41_93f88a1ae2f145dfa-d0697c9c.webp",o="/assets/1bc1bfc61251470bad158d941964fea1_57589d620c8e411b9-8532e66c.webp",u="/assets/429c4237ba1f41ef8acaeff5f3d35381_1639adacb1554640b-81091e4c.webp",p="/assets/ec10a1ecf18c459cb83a1d507ad4a482_e8712b3afb5342099-d585e0ab.webp",m="/assets/1f77a302f66d43518e881d0fdffc8ec9_7b481134cf224f679-bc86fa55.webp",v="/assets/b2fd663830d34b62955263fc27405fa4_a3d6638541824ff0a-03aa90b9.webp",b="/assets/349dae7986c24f12a4773ea7e21fc84b_6b0ba7a98cf64b65b-429a8ac5.webp",h="/assets/217178b474e5417fa7129db44e3a598f_8df0340e3c4541c4b-9f6b4233.webp",g="/assets/c671fe1a4a36461c993e5c473d7018fb_601b43f4a1584918a-92c97296.webp",f={},_=t('<h1 id="verdaccio" tabindex="-1"><a class="header-anchor" href="#verdaccio" aria-hidden="true">#</a> Verdaccio</h1><h2 id="一、简介" tabindex="-1"><a class="header-anchor" href="#一、简介" aria-hidden="true">#</a> 一、简介</h2><h3 id="_1-什么是-verdaccio" tabindex="-1"><a class="header-anchor" href="#_1-什么是-verdaccio" aria-hidden="true">#</a> 1. 什么是 Verdaccio</h3><p>“一个基于 Node.js 的轻量级私有仓库”。 平时使用 npm publish 进行发布时，上传的仓库默认地址是 npm，通过 Verdaccio 工具在本地新建一个仓库地址，再把本地的默认上传仓库地址切换到本地仓库地址即可。当 npm install 时没有找到本地的仓库，则 Verdaccio 默认配置中会从 npm 中央仓库下载。</p><p><em><code>注：</code>Verdaccio 表示意大利中世纪晚期 fresco 绘画中流行的一种绿色的意思。</em></p><h3 id="_2-优点" tabindex="-1"><a class="header-anchor" href="#_2-优点" aria-hidden="true">#</a> 2. 优点</h3><ul><li>私密性高，仅团队共享。</li><li>安全性高，能够有效的防治恶意代码攻击。</li><li>使用局域网，传输速度快。</li></ul><h3 id="_3-官网" tabindex="-1"><a class="header-anchor" href="#_3-官网" aria-hidden="true">#</a> 3. 官网</h3>',8),x={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fverdaccio%2Fverdaccio",title:"https://github.com/verdaccio/verdaccio",target:"_blank",rel:"noopener noreferrer"},q={href:"https://link.juejin.cn?target=https%3A%2F%2Fverdaccio.org%2Fzh-cn%2F",title:"https://verdaccio.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="二、准备环境" tabindex="-1"><a class="header-anchor" href="#二、准备环境" aria-hidden="true">#</a> 二、准备环境</h2><h3 id="_1-npm" tabindex="-1"><a class="header-anchor" href="#_1-npm" aria-hidden="true">#</a> 1. NPM</h3><p><code>包管理工具</code></p><ul><li>常用命令</li></ul><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>npm who am i</td><td>查看当前用户</td></tr><tr><td>npm config list</td><td>查看源地址</td></tr><tr><td>npm set registry url</td><td>切换源地址</td></tr><tr><td>npm config rm registry</td><td>删除源地址</td></tr><tr><td>npm login</td><td>登录</td></tr><tr><td>npm publish</td><td>发布</td></tr><tr><td>npm unpublish 包名</td><td>撤销发布</td></tr></tbody></table><h3 id="_2-nrm" tabindex="-1"><a class="header-anchor" href="#_2-nrm" aria-hidden="true">#</a> 2. NRM</h3><p><code>npm 源管理工具（可以快速切换仓库源）</code></p><ul><li>安装</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 全局安裝
npm install -g nrm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置环境变量</li></ul><p>在系统变量Path中配置 nodejs的全局安装路径</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/130c1a023fa541598eb67be12293318f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="nrm②.png"></p><p><img src="`+c+'" alt="nrm③.png"></p><ul><li>常用命令</li></ul><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>nrm ls</td><td>查看源地址</td></tr><tr><td>nrm add registry url</td><td>添加源地址</td></tr><tr><td>nrm use registry</td><td>切换源地址</td></tr><tr><td>nrm current</td><td>查看当前源地址</td></tr><tr><td>nrm del registry</td><td>删除源地址</td></tr></tbody></table><h3 id="_3-pm2" tabindex="-1"><a class="header-anchor" href="#_3-pm2" aria-hidden="true">#</a> 3. PM2</h3><p><code>进程管理</code> <code>重启策略</code> <code>日志</code> <code>持久化</code> <code>集群模式</code> <code>静态服务</code> <code>应用部署</code> <code>监控</code> <code>...</code></p><ul><li>官网</li></ul>',18),j={href:"https://link.juejin.cn?target=https%3A%2F%2Fpm2.io%2F",title:"https://pm2.io/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://link.juejin.cn?target=https%3A%2F%2Fpm2.fenxianglu.cn%2F",title:"https://pm2.fenxianglu.cn/",target:"_blank",rel:"noopener noreferrer"},w=t(`<ul><li>介绍</li></ul><p>PM2 是一个守护进程管理工具，帮助您管理和守护您的应用程序。它以简单直观的 C​​LI 命令行方式进行工作。</p><ul><li>安装</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 全局安裝
npm install pm2@latest -g
yarn global add pm2
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>常用命令</li></ul><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>pm2 ls</td><td>查看进程</td></tr><tr><td>pm2 start [app.js]</td><td>启动某个应用</td></tr><tr><td>pm2 stop [appName/ID]</td><td>停止某个应用(进程名/ID)</td></tr><tr><td>pm2 restart [app.js]</td><td>重启某个应用</td></tr><tr><td>pm2 describe [appName]</td><td>查看某个进程的具体情况</td></tr><tr><td>pm2 logs [appName/ID]</td><td>查看应用日志(进程名/ID)</td></tr><tr><td>pm2 delete [appName/ID]</td><td>删除进程(进程名/ID)</td></tr><tr><td>pm2 stop all</td><td>停止所有应用</td></tr><tr><td>pm2 restart all</td><td>重启所有应用</td></tr><tr><td>pm2 logs</td><td>查看实时日志</td></tr><tr><td>pm2 logs all</td><td>查看所有日志</td></tr><tr><td>pm2 delete all</td><td>删除所有进程</td></tr></tbody></table><ul><li>通过 PM2 启动 Verdaccio</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 以管理员身份打开 cmd
# 1.直接执行，启动失败
pm2 start verdaccio
 # 2.输出日志，查看报错信息
pm2 logs
 # 3.正确的 pm2 执行应该拼上 verdaccio 包所在的路径
# D:\\Nvm\\v16.17.0\\node_global\\node_modules\\verdaccio\\bin\\verdaccio
pm2 start D:\\Nvm\\v16.17.0\\node_global\\node_modules\\verdaccio\\bin\\verdaccio
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/066382518aed4db1bb08529bd8841b94~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="pm2_error.png"></p><p><em><code>注：</code>直接运行会启动失败，可输出日志查看，是因为要执行的 verdaccio 包未找到</em></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52ae71e05f64457a8b76697e105448a5~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="pm2_success.png"></p><p><em><code>注：</code>pm2 start 后面拼上 verdaccio 包的路径，启动成功，可以访问 <code>http://localhost:4873/</code></em></p><h2 id="三、安装与运行" tabindex="-1"><a class="header-anchor" href="#三、安装与运行" aria-hidden="true">#</a> 三、安装与运行</h2><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 全局安装
# 本地环境 node-16.17.0 npm-8.15.0
npm install -g verdaccio
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-运行" tabindex="-1"><a class="header-anchor" href="#_2-运行" aria-hidden="true">#</a> 2. 运行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 直接使用 verdaccio 命令运行 (不建议)
verdaccio
 # 使用 pm2 运行 (建议使用pm2托管)
pm2 start verdaccio
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在路径 <code>C: \\Users \\Lemon \\AppData\\Roaming\\verdaccio\\</code> 下生成默认的配置文件 config.yaml</li></ul><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f93178513db4bd596659e95c34a3104~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="run_verdaccio.png"></p><ul><li>默认页面地址：<code>http://localhost:4873/</code></li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e1a6568604043a1b120459e5545500c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="url.png"></p><ul><li>配置 <code>config.yaml</code> 文件后，可以通过 <code>http://192.168.3.7:4873/</code> 访问页面</li></ul><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/647df83181b7470cb3422b4f9dcfd765~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="yaml.png"></p><h2 id="四、配置流程" tabindex="-1"><a class="header-anchor" href="#四、配置流程" aria-hidden="true">#</a> 四、配置流程</h2><h3 id="_1-添加源地址" tabindex="-1"><a class="header-anchor" href="#_1-添加源地址" aria-hidden="true">#</a> 1. 添加源地址</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看可选源，* 代表正在使用的源
nrm ls
 # 添加一个私有 npm 源，&#39;localhost&#39; 为自定义的源地址名称
nrm add localhost http://localhost:4873/
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6717910cd50c4d74bd1e4391e7c44873~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="add_registry.png"></p><h3 id="_2-使用源地址" tabindex="-1"><a class="header-anchor" href="#_2-使用源地址" aria-hidden="true">#</a> 2. 使用源地址</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># &#39;localhost&#39; 为添加源时定义的源地址名称
nrm use localhost
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt="use_registry.png"></p><h3 id="_3-添加用户" tabindex="-1"><a class="header-anchor" href="#_3-添加用户" aria-hidden="true">#</a> 3. 添加用户</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 添加 npm 用户前，需要先启动 verdaccio 服务
npm adduser --registry http://localhost:4873/
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c942a2d970974c0686369a8550c8d00f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="adduser.png"></p><p><em><code>注：</code>密码不能少于8位</em></p><h2 id="五、发布与下载" tabindex="-1"><a class="header-anchor" href="#五、发布与下载" aria-hidden="true">#</a> 五、发布与下载</h2><h3 id="_1-包" tabindex="-1"><a class="header-anchor" href="#_1-包" aria-hidden="true">#</a> 1. 包</h3><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f94d44c0d37c467da76f36fec085f76d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="package①.png"></p><p><img src="`+u+'" alt="package②.png"></p><p><img src="'+p+`" alt="package③.png"></p><ul><li>package.json 配置</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  // 包名
  &quot;name&quot; : &quot;@its/log&quot; ,
  // 包的版本号
  &quot;version&quot; : &quot;1.0.0&quot;,
  // 包的描述信息
  &quot;description&quot;:&quot;私有包&quot;,
  // 入口文件
  &quot;main&quot; : &quot;index.ts&quot;,
  // 以 ES Module(也就是 ES6)模块化方式进行加载：因为早期没有 ES6 模块化方案时，都是遵循 CommonJS 规范，而 CommonJS 规范的包是以 main 的方式表示入口文件的；为了区分就新增了 module 方式，但是 ES6 模块化方案效率更高，所以会优先查看是否有 module 字段，没有才使用 main 字段。
  &quot;module&quot;: &quot;index.ts&quot;,
  // 执行 npm 脚本命令简写
  &quot;scripts&quot;: {
    &quot;test&quot; : &quot;echo \\ &quot;Error: no test specified\\ &quot; &amp;&amp; exit 1&quot;
  },
  // 关键词
  &quot;keywords&quot; : [ &quot;npm &quot; ,&quot;package&quot; ] ,
  // 可以配置要上传 npm 的文件白名单目录
  &quot;files&quot; : {
    &quot;dist&quot;
  },
  // 开发环境下，项目所需的依赖
  &quot;dependencies&quot; : {},
  // 生产环境下，项目所需的依赖
  &quot;devDependencies&quot; : {},
  // 作者
  &quot;author&quot; : &quot;wyw&quot; ,
  // 开源许可协议：BSD ISC MIT ...
  &quot;license&quot; :&quot;MIT&quot;,
  // 代码仓库地址
  &quot;repository&quot;: {
      &quot;type&quot;: &quot;git&quot;,
      &quot;url&quot;: &quot;&quot;
  },
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-登录" tabindex="-1"><a class="header-anchor" href="#_2-登录" aria-hidden="true">#</a> 2. 登录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 登录
npm login
 # 验证是否登录成功，登录成功后会显示用户名
npm who i am
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt="npm_login.png"></p><h3 id="_3-发布" tabindex="-1"><a class="header-anchor" href="#_3-发布" aria-hidden="true">#</a> 3. 发布</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 发布前，需要先切换到要上传的包报所在的目录
npm publish
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+'" alt="publish_package①.png"></p><p><img src="'+b+`" alt="publish_package②.png"></p><h3 id="_4-下载" tabindex="-1"><a class="header-anchor" href="#_4-下载" aria-hidden="true">#</a> 4. 下载</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># &#39;@its/log&#39; 为上传包的包名
npm install @its/log --save
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+'" alt="download_package①.png"></p><p><img src="'+g+'" alt="download_package②.png"></p>',52);function N(F,I){const d=s("ExternalLinkIcon");return r(),l("div",null,[_,e("ul",null,[e("li",null,[e("a",x,[i("GitHub"),a(d)])]),e("li",null,[e("a",q,[i("官方文档"),a(d)])])]),k,e("p",null,[e("a",j,[i("英文网"),a(d)]),e("a",y,[i("中文网"),a(d)])]),w])}const z=n(f,[["render",N],["__file","jiyu Node.js deqingliangjisiyoucangku Verdaccio.html.vue"]]);export{z as default};
