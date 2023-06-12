import{_ as o,r as t,o as l,c as u,b as e,d as n,e as d,a as s}from"./app-ff2f634e.js";const c={},a=s('<p>模块化之争的在 ESM 标准出来的时候已成为定局，这两年前端界也在进行 ESM 大迁移。关于 ESM 个人感觉可以聊的并不多，最近讨论最多的可能还是到底该不该用 default import 以及它俩互相转换的各种坑。前不久 TS 发布了 5.0，引入了新的 moduleResolution：<code>bundler</code>。官方文档对此的描述非常简单，阅读完本文，你会对它的产生有更深刻的理解。</p><h2 id="什么是-moduleresolution" tabindex="-1"><a class="header-anchor" href="#什么是-moduleresolution" aria-hidden="true">#</a> 什么是 moduleResolution</h2><p>当我们讨论<strong>模块化标准</strong>（对应的英文术语 <code>module</code>），我们更多的是讨论一个模块是如何声明使用导入/导出的语法。具体来说：</p><ul><li>commonjs 使用 require 来导入，exports.xxx 来导出</li><li>esm 使用 import/export，使用 import(&#39;xxx&#39;) 来动态导入模块</li></ul><p>而<strong>模块解析策略</strong>（ moduleResolution）更多描述的是一个模块包括相对路径以及非相对路径（也就是第三方库，亦或者说 npm 包）是按照怎样的规则去查找的。相对路径没什么复杂的，不做讨论，本文主要聊聊第三方库的解析。</p><p>我们最熟悉的模块解析策略其实是 nodejs 的模块解析策略。第一次了解到还有别的模块解析策略还是在我刚学习 <code>typescript</code> 的时候。模块解析策略可以使用 <code>tsconfig.json</code> 的 <code>moduleResolution</code> 选项来配置，最早只支持两个值：<code>classic</code> 和 <code>node</code>。<code>node</code> 策略在 <code>typescript</code> 中又称之为<code>node10</code> 的解析策略。</p><h3 id="moduleresolution-classic" tabindex="-1"><a class="header-anchor" href="#moduleresolution-classic" aria-hidden="true">#</a> moduleResolution: classic</h3>',7),r={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Ftsconfig%23moduleResolution",title:"https://www.typescriptlang.org/tsconfig#moduleResolution",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"moduleResolution",-1),p={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Fmodule-resolution.html%23node",title:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#node",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"--module commonjs",-1),b={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Fmodule-resolution.html%23classic",title:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#classic",target:"_blank",rel:"noopener noreferrer"},q={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Ftsconfig%23module",title:"https://www.typescriptlang.org/tsconfig#module",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"module",-1),g=e("code",null,"amd",-1),x=e("code",null,"system",-1),j=e("code",null,"umd",-1),_=e("code",null,"es2015",-1),k=e("code",null,"esnext",-1),f=s(`<p>其实 <code>classic</code> 策略才是普通人最容易想到的模块解析策略，例如对于下面这个导入第三方依赖 <code>pkg</code> 的代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 文件：/root/src/folder/index.js
import &#39;pkg&#39;;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会经历下面的步骤来查找 <code>pkg</code>:</p><ol><li><code>/root/src/folder/pkg.js</code></li><li><code>/root/src/pkg.js</code></li><li><code>/root/pkg.js</code></li><li><code>/pkg.js</code></li></ol><p>简单来说这种模块解析策略就是一直递归往上找同名文件，当前目录找不到同名文件就往父级目录找。不过这种策略目前前端界用得不多。</p><h3 id="moduleresolution-node" tabindex="-1"><a class="header-anchor" href="#moduleresolution-node" aria-hidden="true">#</a> moduleResolution: node</h3><p>写过 nodejs 的人应当非常熟悉了这个模块解析策略了，这个模块解析策略其实就是 nodejs 解析模块的策略，其实也就是 <code>require.resolve</code> 实现。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(require.resolve(&#39;lodash&#39;));
// =&gt; /xxx/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),y=e("code",null,"webpack",-1),F=e("code",null,"vite",-1),w=e("code",null,"rollup",-1),A=e("code",null,"rollup",-1),R=e("code",null,"rollup",-1),S=e("code",null,"npm",-1),E=e("code",null,"external",-1),T={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Frollup%2Fplugins%2Ftree%2Fmaster%2Fpackages%2Fnode-resolve",title:"https://github.com/rollup/plugins/tree/master/packages/node-resolve",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"vite",-1),V=e("code",null,"vite",-1),I=e("p",null,"很多前端工具的 node 模块解析策略都不太一样：",-1),O=e("code",null,"vite",-1),P={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Flukeed%2Fresolve.exports",title:"https://github.com/lukeed/resolve.exports",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"rollup",-1),C={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Frollup%2Fplugins%2Ftree%2Fmaster%2Fpackages%2Fnode-resolve",title:"https://github.com/rollup/plugins/tree/master/packages/node-resolve",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"webpack",-1),N={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fenhanced-resolve",title:"https://www.npmjs.com/package/enhanced-resolve",target:"_blank",rel:"noopener noreferrer"},U={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fljharb",title:"https://github.com/ljharb",target:"_blank",rel:"noopener noreferrer"},X={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fresolve",title:"https://www.npmjs.com/package/resolve",target:"_blank",rel:"noopener noreferrer"},z={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbrowserify%2Fresolve%2Fissues%2F222",title:"https://github.com/browserify/resolve/issues/222",target:"_blank",rel:"noopener noreferrer"},B={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fweb-infra-dev%2Fnodejs_resolver",title:"https://github.com/web-infra-dev/nodejs_resolver",target:"_blank",rel:"noopener noreferrer"},G=e("ul",null,[e("li",null,"查找模块是构建过程的高频操作了，基本上每个文件都需要解析模块 id"),e("li",null,"nodejs 的模块解析规则又比较复杂，并且是偏计算型的")],-1),H={href:"https://link.juejin.cn?target=https%3A%2F%2Ftwitter.com%2Fboshen_c%2Fstatus%2F1625694791014187009",title:"https://twitter.com/boshen_c/status/1625694791014187009",target:"_blank",rel:"noopener noreferrer"},J={href:"https://link.juejin.cn?target=https%3A%2F%2Fnodejs.org%2Fapi%2Fmodules.html%23all-together",title:"https://nodejs.org/api/modules.html#all-together",target:"_blank",rel:"noopener noreferrer"},K=s(`<p>对于下面这段 nodejs 代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 文件 /root/src/index.js
require(&#39;pkg&#39;);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会按照下面的步骤来查找 <code>pkg</code>：</p><ol><li>同级目录的 <code>node_modules</code> 找同名的 js 文件： <code>/root/src/node_modules/pkg.js</code></li><li>同级目录 <code>node_modules</code> 里面找包含 <code>package.json</code> 的名为 <code>pkg</code> 文件夹：<code>/root/src/node_modules/pkg/package.json</code></li><li>同级目录 <code>node_modules</code> 里面找包含 <code>index.js</code> 的名为 <code>pkg</code> 文件夹 <code>/root/src/node_modules/pkg/index.js</code></li><li>还是找不到的话，那就往上一级目录重复前面的查找步骤</li><li><code>/root/node_modules/pkg.js</code></li><li><code>/root/node_modules/pkg/package.json</code></li><li><code>/root/node_modules/pkg/index.js</code></li></ol><p>需要说明的是实际的查找过程还有很多细节我没写出来，例如解析 <code>package.json</code> 的 <code>main</code> 和 <code>exports</code> 字段等，这里只是为了大致描述 node 的解析过程。</p><p>其实上面的过程主要对应 nodejs 官方文档中的下面这段，不过要读懂官方文档还是需要一定的背景知识，有经验的读者还是建议完整阅读一下官方文档的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LOAD_NODE_MODULES(X, START)
1. let DIRS = NODE_MODULES_PATHS(START)
2. for each DIR in DIRS:
   a. LOAD_PACKAGE_EXPORTS(X, DIR)
   b. LOAD_AS_FILE(DIR/X)
   c. LOAD_AS_DIRECTORY(DIR/X)

NODE_MODULES_PATHS(START)
1. let PARTS = path split(START)
2. let I = count of PARTS - 1
3. let DIRS = []
4. while I &gt;= 0,
   a. if PARTS[I] = &quot;node_modules&quot; CONTINUE
   b. DIR = path join(PARTS[0 .. I] + &quot;node_modules&quot;)
   c. DIRS = DIR + DIRS
   d. let I = I - 1
5. return DIRS + GLOBAL_FOLDERS
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比于 <code>classic</code> 策略的区别在于：</p><ul><li>递归查找的目录是 <code>node_modules</code>，不是父级文件夹</li><li>引入了 <code>package.json</code>，各种配置项尤其是后面会展开说的 <code>exports</code> 字段使得 node 模块解析策略的变得非常复杂</li><li>支持文件夹模块，也就是 <code>pkg/index.js</code>，文件夹中包含 index.js，这个文件夹就是一个模块。</li></ul><p>其它需要注意的点：</p><ul><li>在讨论模块解析策略时，查找的文件类型不重要。<code>css</code>, <code>png</code>，<code>html</code>, <code>wasm</code> 文件都可以视为一个模块。</li><li>在哪个工具中查找模块也不重要。 <code>tsc</code>, <code>nodejs</code>, <code>vite</code>, <code>esbuild</code>, <code>webpack</code>, <code>rspack</code> 都需要处理 import/require，都需要解析模块，都需要选择一个查找模块的策略，而绝大多数都是使用 node 策略</li><li>node 的模块解析策略本身是不断变化的。例如说早期的 node 并不支持 <code>package.json</code> 的 <code>exports</code> 字段</li></ul><h3 id="调试模块解析" tabindex="-1"><a class="header-anchor" href="#调试模块解析" aria-hidden="true">#</a> 调试模块解析</h3><h4 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs" aria-hidden="true">#</a> nodejs</h4><p>当然最准确的还是看 nodejs 源码，debug nodejs 源码。菜鸡如我觉得太麻烦可以退而求其次 debug 一个实现 nodejs 解析策略的 npm package：</p>`,14),W={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Flukeed%2Fresolve.exports",title:"https://github.com/lukeed/resolve.exports",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Frollup%2Fplugins%2Ftree%2Fmaster%2Fpackages%2Fnode-resolve",title:"https://github.com/rollup/plugins/tree/master/packages/node-resolve",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fenhanced-resolve",title:"https://www.npmjs.com/package/enhanced-resolve",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fresolve",title:"https://www.npmjs.com/package/resolve",target:"_blank",rel:"noopener noreferrer"},$={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ftjx666%2Fmodule-resolution%2Ftree%2Fmain",title:"https://github.com/tjx666/module-resolution/tree/main",target:"_blank",rel:"noopener noreferrer"},ee=s(`<h4 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> typescript</h4><p>tsc 有一个参数 <code>--traceResolution</code> 可以用来调试 tsc 查找 ts 文件的步骤。nodejs 没有找到类似的工具，有机会我来自己手动实现一遍 node 的解析策略，并输出每一步它在查找什么。tsc 虽然用的是 node 的解析策略，但是它还是有它自己的一些特殊性的，例如 ts 支持 <code>node_modules/types</code> 目录，package.json 支持 <code>types</code>, <code>typings</code>, <code>typesVersions</code> 等字段。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { pow } from &#39;math/pow&#39;;

console.log(pow(1, 2));
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>❯ tsc --traceResolution
======== Resolving module &#39;math/pow&#39; from &#39;/Users/yutengjing/code/module-resolution/apps/commonjs-ts-app/src/index.ts&#39;. ========
Explicitly specified module resolution kind: &#39;NodeNext&#39;.
Resolving in CJS mode with conditions &#39;require&#39;, &#39;types&#39;, &#39;node&#39;.
File &#39;/Users/yutengjing/code/module-resolution/apps/commonjs-ts-app/src/package.json&#39; does not exist according to earlier cached lookups.
File &#39;/Users/yutengjing/code/module-resolution/apps/commonjs-ts-app/package.json&#39; exists according to earlier cached lookups.
Loading module &#39;math/pow&#39; from &#39;node_modules&#39; folder, target file types: TypeScript, JavaScript, Declaration.
Directory &#39;/Users/yutengjing/code/module-resolution/apps/commonjs-ts-app/src/node_modules&#39; does not exist, skipping all lookups in it.
Found &#39;package.json&#39; at &#39;/Users/yutengjing/code/module-resolution/apps/commonjs-ts-app/node_modules/math/package.json&#39;.
Entering conditional exports.
Matched &#39;exports&#39; condition &#39;types&#39;.
Using &#39;exports&#39; subpath &#39;./*&#39; with target &#39;./src/pow.ts&#39;.
File &#39;/Users/yutengjing/code/module-resolution/apps/commonjs-ts-app/node_modules/math/src/pow.ts&#39; exists - use it as a name resolution result.
Resolved under condition &#39;types&#39;.
Exiting conditional exports.
Resolving real path for &#39;/Users/yutengjing/code/module-resolution/apps/commonjs-ts-app/node_modules/math/src/pow.ts&#39;, result &#39;/Users/yutengjing/code/module-resolution/packages/math/src/pow.ts&#39;.
======== Module name &#39;math/pow&#39; was successfully resolved to &#39;/Users/yutengjing/code/module-resolution/packages/math/src/pow.ts&#39;. ========
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块主入口" tabindex="-1"><a class="header-anchor" href="#模块主入口" aria-hidden="true">#</a> 模块主入口</h2><p><code>package.json</code> 是前端绕不开的东西，很多前端工具都支持通过 <code>package.json</code> 来写配置。而在 <code>node_modules</code> 下，一个包含 <code>package.json</code> 的文件夹可以视为一个模块，我们可以通过 <code>package.json</code>来定义这个模块在被另一个模块导入时的解析规则。</p><h3 id="main-字段" tabindex="-1"><a class="header-anchor" href="#main-字段" aria-hidden="true">#</a> main 字段</h3>`,7),ne={href:"https://link.juejin.cn?target=https%3A%2F%2Fnpmview.vercel.app%2Flodash",title:"https://npmview.vercel.app/lodash",target:"_blank",rel:"noopener noreferrer"},ie=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;lodash&quot;,
  &quot;version&quot;: &quot;4.17.21&quot;,
  &quot;main&quot;: &quot;lodash.js&quot;
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当没有其它字段时，node 在解析不含子路径的模块时就会找到 <code>main</code> 字段对应的文件。</p><p>那如果模块包含子路径时会怎样处理呢？例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const add = require(&#39;lodash/add&#39;);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lodash
├── add.js
├── fp
│   └── add.js
└── package.json
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nodejs 会直接查找 <code>node_modules/lodash/add.js</code>，也就是说查找模块子路径非常简单粗暴。但如果你的项目不是像 <code>lodash</code> 那样把所有源码平铺到 <code>package.json</code> 同级，只使用 <code>main</code> 字段的情况下就没办法通过 <code>lodash/add</code> 来引用了。例如你把所有源码都丢到 <code>src</code> 目录，那你使用的时候就要写成：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const add = require(&#39;lodash/src/add&#39;);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这也解释了我一直以来的一个困惑：为啥 <code>lodash</code> 要把所有源码平铺到 <code>package.json</code> 同级，每次打开它的 <code>github</code> 主页就要等很长时间，找 <code>package.json</code> 也找半天，很不方便。原因我想就是为了处理导入子路径。</p><h3 id="module-字段" tabindex="-1"><a class="header-anchor" href="#module-字段" aria-hidden="true">#</a> module 字段</h3>`,9),de=e("code",null,"module",-1),se={href:"https://link.juejin.cn?target=https%3A%2F%2Fnpmview.vercel.app%2Fredux",title:"https://npmview.vercel.app/redux",target:"_blank",rel:"noopener noreferrer"},oe=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;redux&quot;,
  &quot;version&quot;: &quot;4.2.1&quot;,
  &quot;main&quot;: &quot;lib/redux.js&quot;,
  &quot;unpkg&quot;: &quot;dist/redux.js&quot;,
  &quot;module&quot;: &quot;es/redux.js&quot;,
  &quot;typings&quot;: &quot;./index.d.ts&quot;,
  &quot;files&quot;: [&quot;dist&quot;, &quot;lib&quot;, &quot;es&quot;, &quot;src&quot;, &quot;index.d.ts&quot;]
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似的字段还有很多，像上面写到的：</p>`,2),te=s("<li><code>typings</code>：和 <code>types</code> 是一样的作用，用来给 tsc 说明模块的类型声明入口。它俩相比我更建议用 <code>typings:</code><ul><li>首先 <code>types</code> 和另一个字段<code>type</code> 很接近，容易拼错。</li><li>另外，我们 ts 项目里面的 .d.ts 一般也放 <code>typings</code> 文件夹</li><li><code>ts-node</code> 查找 .d.ts 默认也只找 <code>typings</code> 目录。</li></ul></li>",1),le=e("code",null,"unpkg",-1),ue=e("code",null,"jsdeliver",-1),ce=e("code",null,"cdn",-1),ae=e("code",null,"browser",-1),re={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fstereobooster%2Fpackage.json%2Fissues%2F14%23top",title:"https://github.com/stereobooster/package.json/issues/14#top",target:"_blank",rel:"noopener noreferrer"},ve=e("code",null,"cdn",-1),pe={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fstereobooster%2Fpackage.json%2Fissues%2F14",title:"https://github.com/stereobooster/package.json/issues/14",target:"_blank",rel:"noopener noreferrer"},me=s(`<h3 id="vite-如何选择模块入口" tabindex="-1"><a class="header-anchor" href="#vite-如何选择模块入口" aria-hidden="true">#</a> vite 如何选择模块入口</h3><p><code>vite</code> 使用 <code>esbuild</code> 将 ts 文件转成 js 文件，<code>esbuild</code> 在转换时会直接丢弃 ts 类型，并不会做类型检查，所以它不用管类型怎样解析，也就不用处理 <code>typings</code> 等字段。</p><p>当同时存在 <code>main</code> 和 <code>module</code>入口，各种构建工具尤其是 <code>rollup</code>, <code>vite</code> 这些基于 ESM 的都是优先使用 <code>module</code> 字段。那如果只有 1 个 <code>main</code> 字段，使用 <code>vite</code> 会发生啥呢？</p><p>首先 <code>vite</code> 打包情况分很多种：</p><ul><li>pre bundling: 使用 esbuild 预构建</li><li>esm dev server: <code>vite</code> 内置插件 <code>vite:resolve</code> 处理模块 id 解析</li><li>prod build: 生产环境构建，本质是 <code>rollup</code> + <code>vite:resolve</code> 插件 + <code>@rollup/plugin-commonjs</code> 插件</li></ul><p>默认情况下，<code>vite</code> 预构建不管你第三方依赖支不支持 esm，都会给你打包。你可能会认为如果一个模块声明了 <code>&quot;type&quot;: &quot;module&quot;</code>，<code>vite</code> 就不会给你预构建，但实际上 <code>vite</code> 会的，应该是考虑类似 <code>lodash-es</code> 这样模块数量特多的依赖不预构建的话 http 请求数就太多了。</p><p>如果你不想预构建，就得手动将依赖添加到预构建 exclude 列表。当把一个依赖添加到预构建 exclude 列表，<code>vite</code> 就不会对它进行 <code>commonjs</code> -&gt; <code>esm</code> 转换，即便把 <code>main</code> 字段指向一个 <code>commonjs</code> 模块，<code>vite</code> 还是会傻傻的把那个模块当 esm 模块处理。</p><p><code>vite</code> 和 <code>rollup</code> 都是通过插件系统来增加自身的能力，它们都是先通过 resolve 插件确定一个模块的最终文件路径，再下一步使用 <code>@rollup/plugin-commonjs</code> 插件在需要转换的情况下给你转成 esm。如果同时存在 esm 的入口和通用入口，都会优先使用 esm 入口。</p><p>一些人可能会认为 <code>main</code> 入口是给 <code>commonjs</code> 专用的，其实不是，<code>main</code> 入口也可以给 <code>esm</code> 用，它是一个通用入口。另一个类似的还有 <code>exports</code> 中的 <code>default</code> 字段。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;exports&quot;: {
    &quot;.&quot;: {
      &quot;import&quot;: {
        &quot;development&quot;: &quot;./src&quot;,
        &quot;import&quot;: &quot;./dist/es/index.mjs&quot;,
        &quot;require&quot;: &quot;./dist/cjs/index.cjs&quot;,
        &quot;default&quot;: &quot;./dist/es/index.mjs&quot;
      }
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typesversions" tabindex="-1"><a class="header-anchor" href="#typesversions" aria-hidden="true">#</a> typesVersions</h3>`,11),be={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fnicoespeon%2Fabracadabra",title:"https://github.com/nicoespeon/abracadabra",target:"_blank",rel:"noopener noreferrer"},qe=e("p",null,"由于 ts 的流行，发布 npm 包的类型声明文件自然也成为了一个问题。目前主要有两种形式：",-1),he={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FDefinitelyTyped%2FDefinitelyTyped",title:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"},ge=e("li",null,"发布 npm 包时捆绑类型文件",-1),xe=s(`<p>使用 pnpm 安装依赖的时候有时候会看到这个警告：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> WARN  deprecated @types/markdownlint@0.18.0: This is a stub types definition. markdownlint provides its own type definitions, so you do not need this installed.
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其实就是说这个 <code>markdownlint</code> 已经自己带了类型声明文件，你不用手动安装 <code>@types/markdownlint</code> 了。</p><p>我们可以观察一下它的 <code>package.json</code> 看看它是如何通知包管理器去做出这个提示的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;@types/markdownlint&quot;,
  &quot;version&quot;: &quot;0.18.0&quot;,
  &quot;typings&quot;: null,
  &quot;description&quot;: &quot;Stub TypeScript definitions entry for markdownlint, which provides its own types definitions&quot;,
  &quot;main&quot;: &quot;&quot;,
  &quot;dependencies&quot;: {
    &quot;markdownlint&quot;: &quot;*&quot;
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我猜可能是根据一个 types 包 <code>@types/xxx</code> 有没有 <code>xxx</code> 在 <code>dependencies</code> 中。</p>`,6),je=e("code",null,"typings",-1),_e={href:"https://link.juejin.cn?target=https%3A%2F%2Fnpmview.vercel.app%2Fmoment",title:"https://npmview.vercel.app/moment",target:"_blank",rel:"noopener noreferrer"},ke=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;moment&quot;,
  &quot;version&quot;: &quot;2.29.4&quot;,
  &quot;main&quot;: &quot;./moment.js&quot;,
  &quot;typings&quot;: &quot;./moment.d.ts&quot;
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子路径导出类型声明" tabindex="-1"><a class="header-anchor" href="#子路径导出类型声明" aria-hidden="true">#</a> 子路径导出类型声明</h4>`,2),fe={href:"https://link.juejin.cn?target=https%3A%2F%2Fnpmview.vercel.app%2F%40types%2Flodash",title:"https://npmview.vercel.app/@types/lodash",target:"_blank",rel:"noopener noreferrer"},ye=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@types/lodash
├── add.d.ts
├── fp
│   └── add.d.ts
└── package.json
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体来说你导入语句是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import add from &#39;lodash/add&#39;;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>就需要存在 <code>node_modules/@types/lodash/add.d.ts</code> 这样的文件。如果你是像 <code>node_modules/@types/lodash/src/add.d.ts</code> 这样组织，把代码都放到 src 目录下，tsc 肯定是找不到的。</p><p>但如果你是选择类型声明和源码一起捆绑发布，还采用这种方式，把源码和类型声明混在一起，维护起来便会相当难受。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lodash
├── add.d.ts
├── add.js
├── fp
│   ├── add.d.ts
│   └── add.js
└── package.json
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),Fe={href:"https://link.juejin.cn?target=https%3A%2F%2Fnpmview.vercel.app%2Funplugin-auto-import",title:"https://npmview.vercel.app/unplugin-auto-import",target:"_blank",rel:"noopener noreferrer"},we=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── auto-imports.d.ts
├── dist
│   ├── astro.d.ts
│   ├── esbuild.d.ts
│   ├── index.d.ts
│   ├── nuxt.d.ts
│   ├── rollup.d.ts
│   ├── types.d.ts
│   ├── vite.d.ts
│   ├── webpack.d.ts
└── package.json
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到它的 .d.ts 没有平铺到 package.json 同级，那么现在问题就是怎样把类型声明从 <code>unplugin-auto-import/vite</code> 重定向到 <code>unplugin-auto-import/dist/vite.d.ts</code> 了。这就用到了 <code>typesVersions</code> 字段：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;unplugin-auto-import&quot;,
  &quot;version&quot;: &quot;0.15.2&quot;,
  &quot;types&quot;: &quot;dist/index.d.ts&quot;,
  &quot;typesVersions&quot;: {
    &quot;*&quot;: {
      &quot;*&quot;: [&quot;./dist/*&quot;]
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Ae=e("li",null,[n("外层的 "),e("code",null,"*"),n(" 表示 typescript 的版本范围是任意版本")],-1),Re=e("li",null,[n("内层的 "),e("code",null,"*"),n(" 表示任意子路径，例如 "),e("code",null,"unplugin-auto-import/vite"),n(" 就对应 "),e("code",null,"vite")],-1),Se=e("code",null,"unplugin-auto-import",-1),Ee={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Fdeclaration-files%2Fpublishing.html%23version-selection-with-typesversions",title:"https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions",target:"_blank",rel:"noopener noreferrer"},Te=e("code",null,"typesVersions",-1),De=e("li",null,[n("注意我们这里 "),e("code",null,"./dist/*"),n(" 没有写扩展名，如果 "),e("code",null,"tsconfig.json"),n(" 设置的 "),e("code",null,"moduleResolution"),n(" 是 "),e("code",null,"node16"),n(" / "),e("code",null,"nodenext"),n("，那就要改成 "),e("code",null,"./dist/*.d.ts")],-1),Ve=s(`<p>其实 <code>typesVersions</code> 设计目的并不是用来处理子路径导出的，这一点从它的名字就可以看出来，它是用来解决同一个包在不同版本的 typescript 下使用不同的类型声明，例如我们看 <code>@types/node</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;@types/node&quot;,
  &quot;version&quot;: &quot;18.15.11&quot;,
  &quot;typesVersions&quot;: {
    &quot;&lt;=4.8&quot;: {
      &quot;*&quot;: [&quot;ts4.8/*&quot;]
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说当你使用的 <code>typescript</code> 版本不大于 4.8，<code>tsc</code> 就会使用 <code>@types/node/ts4.8</code> 文件夹内的类型说明，否则就用 <code>@types/node</code> 包根目录的类型声明：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// node_modules/@types/node
.
├── fs
│   └── promises.d.ts
├── fs.d.ts
├── package.json
├── ts4.8
│   ├── fs
│   │   └── promises.d.ts
│   ├── fs.d.ts
│   └── zlib.d.ts
└── zlib.d.ts
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于下面的导入语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import fs from &#39;node:fs/promises&#39;;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当 ts 版本为 4.7，会找到 <code>@types/node/ts4.8/fs/promises</code></li><li>当 ts 版本为 5.0，会找到 <code>@types/node/fs/promises</code></li></ul><h2 id="exports" tabindex="-1"><a class="header-anchor" href="#exports" aria-hidden="true">#</a> exports</h2>`,8),Ie=e("code",null,"package.json",-1),Oe=e("code",null,"exports",-1),Pe={href:"https://link.juejin.cn?target=https%3A%2F%2Fnodejs.org%2Fdist%2Flatest-v18.x%2Fdocs%2Fapi%2Fpackages.html",title:"https://nodejs.org/dist/latest-v18.x/docs/api/packages.html",target:"_blank",rel:"noopener noreferrer"},Le=e("code",null,"exports",-1),Ce=e("code",null,"exports",-1),Me=s(`<h3 id="主入口导出" tabindex="-1"><a class="header-anchor" href="#主入口导出" aria-hidden="true">#</a> 主入口导出</h3><p>类似 <code>main</code> 和 <code>module</code> 字段，我们可以使用下面的写法来配置一个模块没有写子路径时怎样导出的，也叫主入口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;xxx&quot;,
  &quot;exports&quot;: {
    &quot;.&quot;: &quot;./index.js&quot;
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>exports</code> 中所有的路径都必须以 <code>.</code> 开头</li><li>可以把 <code>.</code> 简单理解为就是模块名</li></ul><p>对于上面的例子，可以把对象简化为一个路径：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;xxx&quot;,
  &quot;exports&quot;: &quot;./index.js&quot;
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如 <code>import x from &#39;xxx&#39;</code> 其实会被解析到 <code>node_modules/xxx/index.js</code></p><h3 id="子路径导出" tabindex="-1"><a class="header-anchor" href="#子路径导出" aria-hidden="true">#</a> 子路径导出</h3><p>你可以像下面这样定义子路径模块的映射规则：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;es-module-package&quot;,
  &quot;exports&quot;: {
    &quot;./submodule.js&quot;: &quot;./src/submodule.js&quot;
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有声明的子路径不能使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Loads ./node_modules/es-module-package/src/submodule.js
import submodule from &#39;es-module-package/submodule.js&#39;;

// Throws ERR_PACKAGE_PATH_NOT_EXPORTED
import submodule from &#39;es-module-package/private-module.js&#39;;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="导出多个子路径" tabindex="-1"><a class="header-anchor" href="#导出多个子路径" aria-hidden="true">#</a> 导出多个子路径</h4><p>例如我们重构 <code>lodash</code>，把所有的子路径模块，也就是 <code>package.json</code> 同级的的那一堆 js 模块放到 lib 文件夹。一种选择就是声明所有子路径：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;lodash&quot;,
  &quot;exports&quot;: {
    &quot;./add&quot;: &quot;./lib/add.js&quot;,
    &quot;./multiply&quot;: &quot;./lib/multiply.js&quot;,
    &quot;...&quot;: &quot;...&quot;
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是由于 lodash 的模块非常多，这样处理会导致 <code>package.json</code> 非常臃肿。</p><p>通过在子路径中使用通配符可以处理任意的嵌套子路径：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;lodash&quot;,
  &quot;exports&quot;: {
    &quot;./*&quot;: &quot;./lib/*.js&quot;
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 node 官方文档中：</p><ul><li><code>exports</code> 可以写通配符 <code>*</code> 的路径例如 <code>./*</code> 在英文术语里叫 pattern，也就是模式</li><li><code>exports</code> 的 value <code>./lib/*.js</code> 的英文术语叫 target pattern，也就是目标模式</li></ul><p>注意我们这里的 <code>*</code> 用的不是 glob 语法，在 glob 语法里面 <code>*</code> 表示任意的一层目录，但是在 exports pattern 中可以表示无限层任意路径。</p><p>要读懂这个映射规则，我们可以这样理解：</p><ol><li>给定一个模块 id <code>lodash/add</code></li><li>使用模块名 <code>lodash</code> 替换左侧的 pattern <code>./*</code> 中的 <code>.</code> ，得到 <code>lodash/*</code></li><li>把 pattern <code>lodash/*</code> 和模块 id <code>lodash/add</code> 做模式匹配，得到 <code>*</code> 的值就是 <code>add</code></li><li>将 target pattern <code>./lib/*.js</code> 中的 <code>*</code> 替换第三步得到的 <code>*</code> 的值得到 <code>./lib/add.js</code>，也就是相对于 <code>lodash</code> package 的相对路径</li><li>把相对路径中的 <code>.</code> 替换为 <code>lodash</code> package 的绝对路径就能得到模块 id <code>lodash/add</code> 的绝对路径：<code>/xxx/node_modules/lodash/lib/add.js</code></li></ol><h4 id="禁止模块导出" tabindex="-1"><a class="header-anchor" href="#禁止模块导出" aria-hidden="true">#</a> 禁止模块导出</h4><p>你可以用通过将一个模块的 target pattern 设置为 <code>null</code> 来禁止某个子路径被另一个模块导入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;xxx&quot;,
  &quot;exports&quot;: {
    &quot;./forbidden&quot;: null
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;xxx/forbidden&#39;;
// 报错：Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath &#39;./hello&#39; is not defined by &quot;exports&quot;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="扩展名和文件夹模块问题" tabindex="-1"><a class="header-anchor" href="#扩展名和文件夹模块问题" aria-hidden="true">#</a> 扩展名和文件夹模块问题</h4><p>需要注意的是 nodejs 在通过 exports 解析模块时是不会做自动添加扩展名的操作，例如你写成下面这样是有问题的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;lodash&quot;,
  &quot;exports&quot;: {
    &quot;./*&quot;: &quot;./lib/*&quot;
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用上面的配置， <code>lodash/add</code> 会被解析到 <code>xxx/node_modules/lodash/add</code>，如果是在 nodejs esm 环境下，由于模块必须带扩展名，它显然是有问题的。</p><p>有些人可能认为在 cjs 下它就能正常工作了，因为 nodejs 在 cjs 情况下不需要写扩展名。但事实上也是不能工作的，exports 配置的映射规则已经到底了，也就是说不会处理扩展名，nodejs 会把 <code>xxx/node_modules/lodash/add</code> 当做一个绝对路径，而这个文件在文件系统并不存在。</p><p>也就是说下面这样的目录结构是不会正常工作的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── add
│   └── index.js
├── add.js
├── index.js
└── package.json
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面这样的目录结构反倒是正常工作的，其中 add 是一个没有 <code>.js</code> 扩展名的 js 代码文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── add
├── index.js
└── package.json
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你要处理文件夹模块，例如有一个组件库，需要将 <code>ui/xxx</code> 解析到 <code>node_modules/ui/dist/xxx/index.js</code>，那就需要写成：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;ui&quot;,
  &quot;exports&quot;: {
    // 写成 ./dist/* 是不行的，./dist/xxx 并不是一个 js 文件
    &quot;./*&quot;: &quot;./dist/*/index.js&quot;
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h4><p>如果 <code>exports</code> 映射左侧的多个 pattern 都能匹配当前导入模块，最终会选择哪个呢?</p><p>当 package.json 为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;xxx&quot;,
  &quot;export&quot;: {
    &quot;./*&quot;: &quot;./*&quot;,
    &quot;./a/*&quot;: &quot;./a/*.js&quot;,
    &quot;./a/b&quot;: &quot;./a/b.js&quot;,
    &quot;./*.js&quot;: &quot;./*.js&quot;
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如模块 id 是：<code>xxx/a/b</code>，其实最终会使用最具体的 <code>./a/b</code>。</p><blockquote><p>短路匹配：从前到后匹配，当一个 key pattern 匹配成功，不管 target pattern 对应的文件能否找到都结束匹配</p></blockquote><p><code>./*</code>, <code>./a/*</code>, <code>./a/b</code> 都能匹配这个模块 id，显然短路匹配时是不合理的，因为如果采用短路匹配，那么就是采用 <code>./*</code> 这个规则了，我们就没办法去设置一个更具体的规则，也就是说 <code>./a/b</code> 这个规则就没用了。</p><p>再看另一个例子：</p><p>package.json:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;xxx&quot;,
  &quot;exports&quot;: {
    &quot;./*&quot;: null,
    &quot;./a/*/c&quot;: null,
    &quot;./a/b/*&quot;: &quot;./dist/hello.js&quot;
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),Ne=e("code",null,"xxx/a/b/c",-1),Ue=e("code",null,'"./a/b/*"',-1),Xe={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fwebpack%2Fenhanced-resolve",title:"https://github.com/webpack/enhanced-resolve",target:"_blank",rel:"noopener noreferrer"},ze=e("code",null,"vite",-1),Be=e("code",null,"vite:resolve",-1),Ge=e("code",null,"resolve.exports",-1),He={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Flukeed%2Fresolve.exports%2Fissues%2F29",title:"https://github.com/lukeed/resolve.exports/issues/29",target:"_blank",rel:"noopener noreferrer"},Je=e("code",null,"rollup",-1),Ke=e("code",null,"@rollup/plugin-node-resolve",-1),We={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Frollup%2Fplugins%2Fissues%2F1476",title:"https://github.com/rollup/plugins/issues/1476",target:"_blank",rel:"noopener noreferrer"},Ye=e("code",null,"rspack",-1),Qe=e("code",null,"nodejs-resolver",-1),Ze={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fweb-infra-dev%2Fnodejs_resolver%2Fissues%2F177",title:"https://github.com/web-infra-dev/nodejs_resolver/issues/177",target:"_blank",rel:"noopener noreferrer"},$e=s(`<p>虽然 <code>enhanced-resolve</code> 可以处理上面给出的用例，但是它却处理不了下面这个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// issue: https://github.com/webpack/enhanced-resolve/issues/376
{
  &quot;name&quot;: &quot;xxx&quot;,
  &quot;exports&quot;: {
    &quot;./*/c&quot;: &quot;./dist/hello.js&quot;
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;xxx/a/b/c&#39;;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于这个例子 <code>enhanced-resolve</code> 的结果是 <code>undefined</code>, 但是 nodejs 是可以正确解析到 <code>./dist/hello.js</code> 这个 target。可见 nodejs 的模块解析策略之复杂远超常人想象，以至于主流的解析库在处理一些特殊情况都或多或少有些 bug，尤其是在处理优先级的时候。</p>`,4),en=e("strong",null,"更具体",-1),nn={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fwebpack%2Fenhanced-resolve%2Fblob%2Fmain%2Flib%2Futil%2Fentrypoints.js%23L565",title:"https://github.com/webpack/enhanced-resolve/blob/main/lib/util/entrypoints.js#L565",target:"_blank",rel:"noopener noreferrer"},dn=s(`<ol><li>首先遍历所有 pattern，筛选出和模块 id 可以匹配的 pattern。在我们之前的例子就是 <code>./*</code>, <code>./a/*/c</code>, <code>./a/b/*</code></li><li>根据所有匹配的 pattern 构造一颗树，每一个节点对应 <code>pattern.split(&#39;/&#39;)</code> 的一个元素</li><li>采用层级遍历顺序，优先取当前层非通配符的节点。这个例子中就在第二层把 <code>./*</code> pass 掉了，在第三层把 <code>./a/*/c</code> pass</li><li>最终遍历到叶子节点的这条路径表示的 pattern 就是最特殊的 pattern，也就是 <code>./a/b/*</code></li></ol><p><img src="https://github.com/tjx666/blog/blob/main/images/module-resolution/path-tree.png?raw=true" alt="path tree"></p><h3 id="条件导出" tabindex="-1"><a class="header-anchor" href="#条件导出" aria-hidden="true">#</a> 条件导出</h3><p>为了能够在不同条件下使用不同的模块解析规则，你可以使用条件导出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;exports&quot;: {
    &quot;.&quot;: {
      // node-addons, node, import 这些 key 表示条件
      &quot;node-addons&quot;: &quot;./c-plus-native.node&quot;,
      &quot;node&quot;: &quot;./can-be-esm-or-cjs.js&quot;,
      &quot;import&quot;: &quot;./index-module.mjs&quot;,
      &quot;require&quot;: &quot;./index-require.cjs&quot;,
      &quot;default&quot;: &quot;./fallback-to-this-pattern.js&quot;
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个例子演示的是 nodejs 内置支持的条件，导入模块 <code>xxx</code>：</p><ul><li>在 nodejs esm 情况下，会使用 <code>&quot;import&quot;: &quot;./index-module.mjs&quot;</code></li><li>在 commonjs 情况下，会使用 <code>&quot;require&quot;: &quot;./index-require.cjs&quot;</code></li><li>在各种情况不满足的情况下，会使用 <code>&quot;default&quot;: &quot;./fallback-to-this-pattern.js&quot;</code></li></ul><p>语法糖简写版本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;exports&quot;: {
    &quot;node-addons&quot;: &quot;./c-plus-native.node&quot;,
    &quot;node&quot;: &quot;./can-be-esm-or-cjs.js&quot;,
    &quot;import&quot;: &quot;./index-module.mjs&quot;,
    &quot;require&quot;: &quot;./index-require.cjs&quot;,
    &quot;default&quot;: &quot;./fallback-to-this-pattern.js&quot;
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自然而然，子路径导出也是支持条件导出的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;exports&quot;: {
    &quot;./feature.js&quot;: {
      &quot;node&quot;: &quot;./feature-node.js&quot;,
      &quot;default&quot;: &quot;./feature.js&quot;
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="优先级-1" tabindex="-1"><a class="header-anchor" href="#优先级-1" aria-hidden="true">#</a> 优先级</h4><p>条件导出的各个条件的优先级取决于它声明的顺序，越前面的越高。</p><p>换句话说它是从前到后短路匹配的，因此，在 node 使用 <code>commonjs</code> 情况下导入下面这个模块会报错：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;xxx&quot;,
  &quot;exports&quot;: {
    &quot;.&quot;: {
      &quot;default&quot;: null,
      &quot;require&quot;: &quot;./dist/hello.js&quot;
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就要求我们使用条件导出的时候注意按照优先级顺序去编写，<strong>将越特殊的条件放越前面</strong>。</p><h4 id="自定义-condition" tabindex="-1"><a class="header-anchor" href="#自定义-condition" aria-hidden="true">#</a> 自定义 condition</h4><p>显然，nodejs 不可能内置支持所有条件，例如社区广泛使用的下列条件</p><ul><li><code>&quot;types&quot;</code></li><li><code>&quot;deno&quot;</code></li><li><code>&quot;browser&quot;</code></li><li><code>&quot;react-native&quot;</code></li><li><code>&quot;development&quot;</code></li><li><code>&quot;production&quot;</code></li></ul><p>如果你想让 nodejs 能够处理 <code>xxx</code> 条件，你可以在运行 node 指定 <code>conditions</code> 参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;xxx&quot;,
  &quot;exports&quot;: {
    &quot;.&quot;: {
      &quot;xxx&quot;: &quot;./dist/hello.js&quot;,
      &quot;require&quot;: null,
      &quot;default&quot;: null
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node --conditions=xxx apps/commonjs-app/index.js
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意这里条件 <code>xxx</code> 我放到了 <code>require</code> 前面了，因为 commonjs 下 <code>require</code> 条件也能匹配，所以为了 <code>xxx</code> 能优先匹配，需要将它放到 <code>require</code> 前面。</p><h4 id="内嵌条件" tabindex="-1"><a class="header-anchor" href="#内嵌条件" aria-hidden="true">#</a> 内嵌条件</h4><p>在 <code>monorepo</code> 越来越流行的今天，一个 <code>app</code> package 引用另一个在 <code>workspace</code> 中的 <code>library</code> package 的场景是非常常见的。如果直接使用 <code>library</code> package 对外发布时的 <code>exports</code> 规则（例如都指向 dist 文件夹的文件），就不方便通过修改 <code>library</code> src 下的源码来利用热更新。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>monorepo-project
├── apps
│   └── app1
│       ├── package.json
│       ├── src
│       │   └── main.ts
│       └── vite.config.ts
└── packages
    └── library1
        ├── dist
        │   └── index.mjs // 发布时的代码
        ├── package.json
        └── src
            └── index.ts // 希望修改代码热更新能生效
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了实现 <code>vite</code> 开发环境下 <code>library</code> package 能热更新，我们一般会这样组织它的 <code>exports</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;type&quot;: &quot;module&quot;,
  &quot;exports&quot;: {
    &quot;.&quot;: {
      &quot;import&quot;: {
        // 开发环境使用 src 下的源码，因此我们修改源码也能热更新
        &quot;development&quot;: &quot;./src&quot;,
        // 生产环境下，也就是在 app 运行 vite build 时使用打包编译的 dist
        &quot;default&quot;: &quot;./dist/es/index.mjs&quot;
      }
    }
  },
  &quot;publishConfig&quot;: {
    // 发布出去时我们不需要保留 development 这个 condition
    // 如果保留，会导致使用这个库的用户也走 src
    &quot;exports&quot;: {
      &quot;.&quot;: {
        &quot;import&quot;: &quot;./dist/es/index.mjs&quot;
      }
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),sn=e("code",null,"development",-1),on=e("code",null,"vite",-1),tn={href:"https://link.juejin.cn?target=https%3A%2F%2Fvitejs.dev%2Fconfig%2Fshared-options.html%23resolve-conditions",title:"https://vitejs.dev/config/shared-options.html#resolve-conditions",target:"_blank",rel:"noopener noreferrer"},ln=e("code",null,"import",-1),un=e("code",null,"development",-1),cn=e("code",null,"exports",-1),an=e("p",null,[n("值得注意的是我们使用了 "),e("code",null,"publishConfig"),n(" 配置来在 "),e("code",null,"npm publish"),n(" 时覆盖我们的 "),e("code",null,"exports"),n(" 配置。")],-1),rn=e("code",null,"publicConfig",-1),vn={href:"https://link.juejin.cn?target=https%3A%2F%2Fdocs.npmjs.com%2Fcli%2Fv9%2Fconfiguring-npm%2Fpackage-json%23publishconfig",title:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig",target:"_blank",rel:"noopener noreferrer"},pn=e("code",null,"typesVersion",-1),mn={href:"https://link.juejin.cn?target=https%3A%2F%2Fdocs.npmjs.com%2Fcli%2Fv9%2Fconfiguring-npm%2Fpackage-json%23publishconfig",title:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig",target:"_blank",rel:"noopener noreferrer"},bn=s(`<h4 id="types-条件" tabindex="-1"><a class="header-anchor" href="#types-条件" aria-hidden="true">#</a> types 条件</h4><p>前面我们提到过可以使用 <code>typesVersions</code> 字段处理子路径模块的 typescript 类型，但是 <code>typesVersions</code> 正如它的名字所表达的是用来表示不同的版本下使用不同的类型。聪明的你应该很容易想到要是能统一用 <code>exports</code> 来管理类型就好了，<code>types</code>条件就是用来描述 typescript 类型的解析规则。</p><p>看一个实际的例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;unplugin-auto-import&quot;,
  &quot;version&quot;: &quot;0.15.2&quot;,
  &quot;exports&quot;: {
    &quot;.&quot;: {
      &quot;types&quot;: &quot;./dist/index.d.ts&quot;,
      &quot;require&quot;: &quot;./dist/index.cjs&quot;,
      &quot;import&quot;: &quot;./dist/index.js&quot;
    },
    &quot;./*&quot;: &quot;./*&quot;,
    &quot;./nuxt&quot;: {
      &quot;types&quot;: &quot;./dist/nuxt.d.ts&quot;,
      &quot;require&quot;: &quot;./dist/nuxt.cjs&quot;,
      &quot;import&quot;: &quot;./dist/nuxt.js&quot;
    },
    &quot;./astro&quot;: {
      &quot;types&quot;: &quot;./dist/astro.d.ts&quot;,
      &quot;require&quot;: &quot;./dist/astro.cjs&quot;,
      &quot;import&quot;: &quot;./dist/astro.js&quot;
    },
    &quot;./rollup&quot;: {
      &quot;types&quot;: &quot;./dist/rollup.d.ts&quot;,
      &quot;require&quot;: &quot;./dist/rollup.cjs&quot;,
      &quot;import&quot;: &quot;./dist/rollup.js&quot;
    },
    &quot;./types&quot;: {
      &quot;types&quot;: &quot;./dist/types.d.ts&quot;,
      &quot;require&quot;: &quot;./dist/types.cjs&quot;,
      &quot;import&quot;: &quot;./dist/types.js&quot;
    },
    &quot;./vite&quot;: {
      &quot;types&quot;: &quot;./dist/vite.d.ts&quot;,
      &quot;require&quot;: &quot;./dist/vite.cjs&quot;,
      &quot;import&quot;: &quot;./dist/vite.js&quot;
    },
    &quot;./webpack&quot;: {
      &quot;types&quot;: &quot;./dist/webpack.d.ts&quot;,
      &quot;require&quot;: &quot;./dist/webpack.cjs&quot;,
      &quot;import&quot;: &quot;./dist/webpack.js&quot;
    },
    &quot;./esbuild&quot;: {
      &quot;types&quot;: &quot;./dist/esbuild.d.ts&quot;,
      &quot;require&quot;: &quot;./dist/esbuild.cjs&quot;,
      &quot;import&quot;: &quot;./dist/esbuild.js&quot;
    }
  },
  &quot;main&quot;: &quot;dist/index.cjs&quot;,
  &quot;module&quot;: &quot;dist/index.js&quot;,
  &quot;types&quot;: &quot;dist/index.d.ts&quot;,
  &quot;typesVersions&quot;: {
    &quot;*&quot;: {
      &quot;*&quot;: [&quot;./dist/*&quot;]
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意点：</p><ul><li><code>types</code> 条件应该放到其它条件也就是 <code>require</code> 和 <code>import</code> 前面</li><li>这里声明 <code>main</code>, <code>module</code>,<code>typesVersions</code> 是为了兼容性，在理想情况下，一个 <code>exports</code> 对象能解决所有问题，它们都可以不写。</li></ul><h4 id="通用类型配置方法" tabindex="-1"><a class="header-anchor" href="#通用类型配置方法" aria-hidden="true">#</a> 通用类型配置方法</h4><p>typescript 在所有模块解析策略下查找类型时都支持相邻文件扩展名匹配。也就是说在其它配置不使用的情况下（例如不使用 <code>exports</code>，设置 <code>typings</code>）：</p><ul><li><p>如果你是使用 <code>node</code> 策略，对于 <code>./dist/index.js</code>，只要存在相邻的 <code>./index/index.d.ts</code> 即可。</p></li><li><p>如果你使用的 <code>node16</code>/<code>nodenext</code> 策略，对于 <code>./dist/index.mjs</code> 需要存在 <code>./dist/index.d.mts</code>，对于 <code>./dist/index.cjs</code>，需要存在 <code>./dist/index.cts</code>。</p></li></ul><h4 id="细说-typescript-中的-moduleresolution" tabindex="-1"><a class="header-anchor" href="#细说-typescript-中的-moduleresolution" aria-hidden="true">#</a> 细说 typescript 中的 moduleResolution</h4><p>最新的 <code>typescript</code> v5.1， <code>tsconfig.json</code> 的 <code>moduleResolution</code> 选项支持 5 个值：</p><ul><li><code>classic</code></li><li><code>node</code></li><li><code>node16</code></li><li><code>nodenext</code> 表示最新的 nodejs 模块解析策略，所以是兼容 <code>node16</code> 的</li><li><code>bundler</code></li></ul><p><code>classic</code> 和 <code>node</code> 这两个从 ts 诞生支持就存在，但它们不支持 <code>exports</code>，后来新增的 <code>node16</code>, <code>nodenext</code>, <code>bundler</code> 都支持。</p><p>有意思的是 <code>typescript</code> 第一个支持 <code>exports</code> 配置模块类型解析策略是 <code>node16</code>，就是我不太理解为啥要叫 <code>node16</code>：</p><ul><li>nodejs 支持 <code>esm</code> 的最低版本是 v8.5.0</li><li>nodejs 支持 <code>exports</code> 的最低版本是 v12.11</li></ul><p>那叫 <code>node12</code> 不是刚好？</p><p><code>node16</code> 策略主要是增加了 <code>esm</code> 的限制，例如文件必须带扩展名：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// file: src/index,ts
import add from &#39;./add&#39;;

add(1, 2);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会报错：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Relative import paths need explicit file extensions in EcmaScript imports when &#39;--moduleResolution&#39; is &#39;node16&#39; or &#39;nodenext&#39;. Did you mean &#39;./add.js&#39;?
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是：你要设置 <code>package.json</code> 中 <code>&quot;type&quot;: &quot;module&quot;</code> 来明确开启 <code>esm</code>，否则即便你配置了 <code>&quot;module&quot;: &quot;ESNext&quot;</code>，那些 <code>esm</code> 限制也不会生效。</p><h4 id="优先级-2" tabindex="-1"><a class="header-anchor" href="#优先级-2" aria-hidden="true">#</a> 优先级</h4><p>可以看到它同时配置了 <code>typesVersion</code> 和 <code>exports</code>，那 <code>tsc</code> 以哪个为标准呢？</p><p>首先这和当前配置的 <code>moduleResolution</code> 有关，如果是 node，那它根本不认识 <code>exports</code> 字段，所以使用的是 <code>typesVersions</code>。也因为这个原因，<code>unplugin-auto-import</code> 为了兼容用户使用的<code>moduleResolution</code> 是 node 的情况，还是配置了 <code>typesVersions</code>。</p><p>在使用 <code>node16</code> 之后新增的模块解析策略时，<code>tsc</code> 会优先取 <code>exports</code> 配置的类型解析规则，忽略 <code>typesVersions</code>。不过如果你不使用 <code>exports</code> 配置 ts 类型，<code>tsc</code> 还是支持<code>typesVersions</code> 的。需要注意的是这个时候 <code>typesVersions</code> 需要写扩展名：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;math&quot;,
  &quot;exports&quot;: {
    &quot;./*&quot;: {
      &quot;types&quot;: &quot;./src/*.ts&quot;
    }
  },
  // moduleResolution: node16 情况下，没写 exports, typesVersions 还是有用的
  &quot;typesVersions&quot;: {
    &quot;*&quot;: {
      &quot;*&quot;: [
        // 如果是 moduleResolution: node，不用写扩展名 .ts
        &quot;./src/*.ts&quot;
      ]
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="bundler" tabindex="-1"><a class="header-anchor" href="#bundler" aria-hidden="true">#</a> bundler</h4><p><code>bundler</code> 是 TypeScript5.0 新增的一个模块解析策略，它是一个对现实妥协的产物，社区倒逼标准。为啥么这么说呢？因为最理想最标准的模块解析策略其实是 <code>node16</code> / <code>nodenext</code>：严格遵循 ESM 标准并且支持 <code>exports</code>。</p><p>现实情况：拿 <code>vite</code> 来举个例子，<code>vite</code> 宣称是一个基于 <code>ESM</code> 的前端开发工具，但是声明相对路径模块的时候却不要求写扩展名。</p><p>问题就出在现有的几个模块解析策略都不能完美适配 <code>vite</code> + <code>ts</code> + <code>esm</code> 开发场景：</p><ul><li>node：不支持 <code>exports</code></li><li><code>node16</code> / <code>nodenext</code>: 强制要求使用相对路径模块时必须写扩展名</li></ul><p>这就导致 <code>node16</code> / <code>nodenext</code> 这俩策略几乎没人用，用的最多的还是 node。</p><p>于是乎，ts5.0 新增了个新的模块解析策略：<code>bundler</code>。它的出现解决的最大痛点就是：可以让你使用 <code>exports</code> 声明类型的同时，使用相对路径模块可以不写扩展名。</p><h4 id="nodenext" tabindex="-1"><a class="header-anchor" href="#nodenext" aria-hidden="true">#</a> nodenext</h4><p>这个模块策略比 <code>bundler</code> 出的早，但是我放到最后说，因为它最复杂也不推荐使用。</p>`,35),qn=e("code",null,"moduleResolution: nodenext",-1),hn={href:"https://link.juejin.cn?target=https%3A%2F%2Fnpmview.vercel.app%2F%40vitejs%2Fplugin-vue2",title:"https://npmview.vercel.app/@vitejs/plugin-vue2",target:"_blank",rel:"noopener noreferrer"},gn=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;@vitejs/plugin-vue2&quot;,
  &quot;version&quot;: &quot;2.2.0&quot;,
  &quot;main&quot;: &quot;./dist/index.cjs&quot;,
  &quot;module&quot;: &quot;./dist/index.mjs&quot;,
  &quot;types&quot;: &quot;./dist/index.d.ts&quot;,
  &quot;exports&quot;: {
    &quot;.&quot;: {
      &quot;types&quot;: &quot;./dist/index.d.ts&quot;,
      &quot;import&quot;: &quot;./dist/index.mjs&quot;,
      &quot;require&quot;: &quot;./dist/index.cjs&quot;
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// vite.config.mts
import vitePluginVue2 from &#39;@vitejs/plugin-vue2&#39;;

vitePluginVue2();

// This expression is not callable.
// Type &#39;typeof import(&quot;/xxx/node_modules/.pnpm/@vitejs+plugin-vue2@2.2.0_vite@4.2.1_vue@2.7.14/node_modules/@vitejs/plugin-vue2/dist/index&quot;)&#39; has no call signatures
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),xn={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvitejs%2Fvite-plugin-react%2Fissues%2F104%23issuecomment-1485806985",title:"https://github.com/vitejs/vite-plugin-react/issues/104#issuecomment-1485806985",target:"_blank",rel:"noopener noreferrer"},jn=s(`<p>我说下我自己的理解：<code>nodenext</code> 模块解析策略严格按照最新的 <code>nodejs</code> 模块解析算法判断一个 ts 文件是 <code>commonjs</code> 模块还是 esm 模块。也就是瞒住下面两个条件一个 js 模块会被 nodejs 视为 esm 模块：</p><ol><li>最近的 <code>package.json</code> 设置了 <code>&quot;type&quot;: &quot;module&quot;</code></li><li>扩展名是 <code>.mjs</code></li></ol><p>上面的例子中，<code>vite.config.mts</code> 是一个 esm 模块，因此 <code>@vitejs/plugin-vue2</code> 会匹配到 <code>import</code> 条件，最终解析到 <code>/xxx/node_modules/@vitejs/plugin-vue2/dist/index.d.ts</code>。</p><p>但是这个文件会被识别为一个 <code>commonjs</code> 的 ts 模块，因为离它最近 <code>/xxx/@vitejs/plugin-vue2/package.json</code> 中没有声明 <code>&quot;type&quot;: &quot;module&quot;</code>，它的扩展名也不是 <code>.d.mts</code>，所以它是一个 <code>commonjs</code> 的 ts 模块。从实际的报错信息来看，在 <code>moduleResolution</code> 是 <code>node16</code> / <code>nodenext</code> 情况下，<strong>ts 是不支持对一个 commonjs 的 ts 模块使用默认导出</strong>，即便是 <code>index.d.ts</code> 中存在 <code>export default</code> 也没有用。</p><p>实测如果你是使用<strong>命名导出</strong>是没问题的，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { parseVueRequest } from &#39;@vitejs/plugin-vue2&#39;;

parseVueRequest(&#39;&#39;);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想正确配置，需要改成这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;exports&quot;: {
    &quot;.&quot;: {
      &quot;import&quot;: {
        &quot;types&quot;: &quot;./dist/index.d.mts&quot;,
        &quot;default&quot;: &quot;./dist/index.mjs&quot;
      },
      &quot;require&quot;: {
        &quot;types&quot;: &quot;./dist/index.d.cts&quot;,
        &quot;default&quot;: &quot;./dist/index.cjs&quot;
      }
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以为啥没人愿意用 <code>node16</code> / <code>nodenext</code>：</p><ol><li>相对路径需要要扩展名</li><li>写类型要写两套</li></ol><p>尽管它是理论上最符合最新的 nodejs 模块解析规则的。</p><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><p>对于项目结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pkg
├── dist
│   ├── cjs
│   │   ├── index.cjs
│   │   └── utils.cjs
│   ├── es
│   │   ├── index.mjs
│   │   └── utils.mjs
│   └── types
│       ├── index.d.ts
│       └── utils.d.ts
├── package.json
├── src
│   ├── index.ts
│   └── utils.ts
├── tsconfig.json
└── vite.config.ts
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="理想情况" tabindex="-1"><a class="header-anchor" href="#理想情况" aria-hidden="true">#</a> 理想情况</h3><ul><li>只发布 <code>esm</code> 模块，<code>package.json</code> 设置 <code>&quot;type&quot;: &quot;module&quot;</code></li><li>使用类似 vite/rollup 可以不写模块扩展名的打包工具</li><li><code>typescript</code> 版本 &gt;= 5.0，<code>tsconfig.json</code> 设置<code>&quot;moduleResolution&quot;: &quot;bundler&quot;</code></li></ul><p><code>package.json</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;type&quot;: &quot;module&quot;,
  &quot;exports&quot;: {
    // 新的第三方库大可不必考虑 cjs
    &quot;.&quot;: {
      &quot;types&quot;: &quot;./src/index.ts&quot;,
      // 如果用的是 vite, 也可以直接写 &quot;./src&quot;，其实这也是 vite 和 node 标准不完全一致的地方
      // vite dev
      &quot;development&quot;: &quot;./src/index.ts&quot;,
      // 用 production 条件也行
      // vite build
      &quot;default&quot;: &quot;./dist/es/index.mjs&quot;
    },
    &quot;./*&quot;: {
      &quot;types&quot;: &quot;./src/*.ts&quot;,
      // 使用 vite 可以不写扩展名，可能是为了方便用户引用 css，图片等模块
      // 但是如果你是执行 node 脚本引用这个模块就会报错
      &quot;development&quot;: &quot;./src/*&quot;,
      &quot;default&quot;: &quot;./dist/es/*&quot;
    }
  },
  &quot;publishConfig&quot;: {
    // 发布出去的包都要写扩展名，因为这个库的使用环境可能要求写扩展名，例如 nodejs
    &quot;exports&quot;: {
      &quot;.&quot;: {
        &quot;types&quot;: &quot;./dist/types/index.d.ts&quot;,
        &quot;import&quot;: &quot;./dist/es/index.mjs&quot;
      },
      &quot;./*&quot;: {
        &quot;types&quot;: &quot;./dist/types/*.d.ts&quot;,
        &quot;import&quot;: &quot;./dist/es/*.mjs&quot;
      }
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其它字段像 <code>main</code>, <code>typings</code> 都不用写。</p><h3 id="考虑兼容性" tabindex="-1"><a class="header-anchor" href="#考虑兼容性" aria-hidden="true">#</a> 考虑兼容性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;type&quot;: &quot;module&quot;,
  // 兼容不支持 exports 的打包器，例如 webpack4
  // 也是挺离谱的，最新版的 webpack4 现在下载量还是最新版的 webpack5 的接近 50 倍
  // https://github.com/webpack/webpack/issues/9509#issuecomment-1381896299
  &quot;module&quot;: &quot;./dist/es/index.mjs&quot;,
  &quot;main&quot;: &quot;./dist/cjs/index.cjs&quot;,
  &quot;typings&quot;: &quot;./dist/types/index.d.ts&quot;,
  &quot;exports&quot;: {
    &quot;.&quot;: {
      &quot;types&quot;: &quot;./src/index.ts&quot;,
      &quot;development&quot;: &quot;./src/index.ts&quot;,
      &quot;default&quot;: &quot;./dist/es/index.mjs&quot;
    },
    &quot;./*&quot;: {
      &quot;types&quot;: &quot;./src/*.ts&quot;,
      &quot;development&quot;: &quot;./src/*&quot;,
      &quot;default&quot;: &quot;./dist/es/*&quot;
    }
  },
  // 兼容用户 ts moduleResolution: node
  // 开发环境使用源码目录 src 下的 .ts
  &quot;typesVersions&quot;: {
    &quot;*&quot;: {
      &quot;*&quot;: [&quot;./src/*&quot;]
    }
  },
  &quot;publishConfig&quot;: {
    &quot;exports&quot;: {
      &quot;.&quot;: {
        &quot;types&quot;: &quot;./dist/types/index.d.ts&quot;,
        &quot;import&quot;: &quot;./dist/es/index.mjs&quot;,
        &quot;require&quot;: &quot;./dist/cjs/index.cjs&quot;
      },
      &quot;./*&quot;: {
        &quot;types&quot;: &quot;./dist/types/*.d.ts&quot;,
        &quot;import&quot;: &quot;./dist/es/*.mjs&quot;,
        &quot;require&quot;: &quot;./dist/cjs/*.cjs&quot;
      }
    },
    // 生产环境使用 .d.ts
    // npm 不支持覆盖 typesVersions，但是 pnpm 支持
    &quot;typesVersions&quot;: {
      &quot;*&quot;: {
        &quot;*&quot;: [&quot;./dist/types/*&quot;]
      }
    }
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exports-规范检测工具" tabindex="-1"><a class="header-anchor" href="#exports-规范检测工具" aria-hidden="true">#</a> exports 规范检测工具</h3>`,22),_n={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbluwy%2Fpublint",title:"https://github.com/bluwy/publint",target:"_blank",rel:"noopener noreferrer"},kn=e("code",null,"import",-1),fn=e("code",null,".cjs",-1),yn={href:"https://link.juejin.cn?target=https%3A%2F%2Farethetypeswrong.github.io%2F",title:"https://arethetypeswrong.github.io/",target:"_blank",rel:"noopener noreferrer"},Fn=e("code",null,"typescript",-1),wn=e("code",null,"moduleResolution",-1),An=s('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>JS 在设计之初并没有模块这个概念，ESM 也才这两年正式落地，而模块解析策略随着<code>exports</code> 的出现有了统一的并且能够满足各种场景需求的标准。估计过个一两年很多新发布的 npm 包连<code>main</code> 字段都不写了。</p><ul><li><code>exports</code> 是一个强大并且被各种前端工具广泛支持的模块解析标准，我们开发 npm 包时，应该使用 <code>exports</code>来管理它的解析规则</li><li><code>exports</code> 的解析规则较为复杂，社区的很多第三方实现或多或少有些 bug，尤其是和优先级相关的</li><li>对于很多不想写扩展名的 typescript 项目来说，应该使用 <code>bundler</code> 解析策略，这样的话第三方库就可以只写 <code>exports</code>，不写 <code>typesVersions</code></li><li><code>typescript</code> 的很多设计都是对现实妥协的产物，除了 <code>bundler</code> 解析策略，再例如装饰器，早期的装饰器并没有进到 ECMAScript stage3 标准，TS 还是自己实现了一套。换句话说就是 typescript 在开发效率和 ECMAScript 标准之间在当时选择了开发效率。</li></ul>',3);function Rn(Sn,En){const i=t("ExternalLinkIcon");return l(),u("div",null,[a,e("blockquote",null,[e("p",null,[n("You can use the "),e("a",r,[v,d(i)]),n(" option to specify the module resolution strategy. If not specified, the default is "),e("a",p,[n("Node"),d(i)]),n(" for "),m,n(", and "),e("a",b,[n("Classic"),d(i)]),n(" otherwise (including when "),e("a",q,[h,d(i)]),n(" is set to "),g,n(", "),x,n(", "),j,n(", "),_,n(", "),k,n(", etc.).")])]),f,e("p",null,[n("这也是各种前端构建工具如 "),y,n(", "),F,n(" 所采用的模块解析策略。这里没说 "),w,n(" 是因为"),A,n(" 默认没有内置模块解析策略，"),R,n(" 默认所有"),S,n(" 包都是 "),E,n(" 的，你需要使用 node 模块解析策略的插件："),e("a",T,[n("@rollup/plugin-node-resolve"),d(i)]),n("。虽然说 "),D,n(" 用的 nodejs 模块解析策略，但 "),V,n(" 的实现并不完全和 nodejs 一致，其它工具也一样，你可以认为是对 nodejs 模块解析策略的扩展。不过如果说一个模块在 nodejs 中能正常解析，但它们解析不了，那肯定就算是 bug 了。")]),I,e("ul",null,[e("li",null,[O,n(" 用的是第三方库 "),e("a",P,[n("resolve.exports"),d(i)])]),e("li",null,[L,n(" 在 "),e("a",C,[n("@rollup/plugin-node-resolve"),d(i)]),n(" 自己实现的")]),e("li",null,[M,n(" 用的 "),e("a",N,[n("enhanced-resolve"),d(i)])]),e("li",null,[n("不过还是 "),e("a",U,[n("ljharb"),d(i)]),n(" 大佬的 "),e("a",X,[n("resolve"),d(i)]),n(" 下载量最高，但有个很大的问题是"),e("a",z,[n("不支持 package.json 的 exports"),d(i)])])]),e("p",null,[n("其实也有框架想通过优化这个解析速度来优化构建速度的，例如 rspack 用的 rust 模块 "),e("a",B,[n("nodejs_resolver"),d(i)]),n("，其实也很好理解：")]),G,e("p",null,[n("用 rust 重写一遍大概率能得到比较可观的收益，"),e("a",H,[n("rspack 核心作者给出的数据是速度 enhance-resolve 的 15 倍"),d(i)]),n("。")]),e("p",null,[n("完整的 nodejs 解析策略可以看官方文档："),e("a",J,[n("module#all-together"),d(i)]),n("。")]),K,e("ul",null,[e("li",null,[e("a",W,[n("resolve.exports"),d(i)])]),e("li",null,[e("a",Y,[n("@rollup/plugin-node-resolve"),d(i)])]),e("li",null,[e("a",Q,[n("enhanced-resolve"),d(i)])]),e("li",null,[e("a",Z,[n("resolve"),d(i)])])]),e("p",null,[n("我写这篇博客时用来做各种测试的项目："),e("a",$,[n("module-resolution"),d(i)])]),ee,e("p",null,[n("通过 main 字段来定义一个模块如何导出是目前最常见的做法了。拿全球下载量第一的 npm 包 lodash 来举例，"),e("a",ne,[n("它的 package.json"),d(i)]),n(" 简化一下是这样的：")]),ie,e("p",null,[n("为了解决某些库想同时提供 cjs 和 esm 两份 js 代码，我们可以使用 "),de,n(" 字段来指定 esm 版本的入口。例如 "),e("a",se,[n("redux"),d(i)]),n("，简化后的 package.json：")]),oe,e("ul",null,[te,e("li",null,[le,n("： 和 "),ue,n(", "),ce,n(", "),ae,n(" 字段一样都是给 cdn 厂家用的，细节可以参考这个 issue: ["),e("a",re,[n("What about "),ve,n(" entry?"),d(i)]),n("](https://juejin.cn/post/"),e("a",pe,[n("github.com/stereoboost…"),d(i)]),n(")")])]),me,e("p",null,[n("2023 年了，typescript 已然成为前端 er 的标配，即便你写的是 js，也能通过 jsdoc 充分感受的 ts 的强大和魅力。曾在知乎上看到有人吐槽说 ts 的类型系统过于复杂，在我看来，所谓的复杂其实某种程度上反映的是 TS 的强大和灵活。对于 ts，我现在最感到沮丧的反倒是它的性能，也不是说 tsc 构建性能，tsc 现在每个月还在投入精力优化的构建模式我也不是很感兴趣。我更希望优化的是编辑器代码提示的速度，稍微大点的项目有时能卡上好几秒才出提示。如果你没体过 vscode ts 代码提示的慢，可以试试在 VSCode 打开这个项目 "),e("a",be,[n("github.com/nicoespeon/…"),d(i)]),n("，sematic token 的速度也不尽人意。写 vue 时经常肉眼可见一个变量从普通文本变成变量。最近一个消息挺有意思的，svelte 据说下一个大版本要从 ts 全面切回 js...")]),qe,e("ul",null,[e("li",null,[n("发布 types 包到 "),e("a",he,[n("github.com/DefinitelyT…"),d(i)]),n("，目前有 8000+ 包采用这个方式")]),ge]),xe,e("p",null,[n("当我们发布一个 npm 包并且想要把类型声明文件一起发布的时候，一般情况下我们使用 "),je,n(" 字段指向我们入口类型文件即可，例如 "),e("a",_e,[n("moment"),d(i)]),n("：")]),ke,e("p",null,[n("如果你选择使用 types 包发布类型声明，那问题倒简单，你只需要像 "),e("a",fe,[n("@types/lodash"),d(i)]),n(" 那样将类型声明文件按照导入的路径一样组织目录即可。")]),ye,e("p",null,[n("我们来看看 "),e("a",Fe,[n("unplugin-auto-import"),d(i)]),n(" 是怎样做的，首先它的目录结构是这样：")]),we,e("ul",null,[Ae,Re,e("li",null,[n("整体表示在任意版本的 typescript 下，查找 "),Se,n(" 的类型时，将查找路径重定向到 dist 目录。更详细的解释可以看官方文档："),e("a",Ee,[n("Version selection with"),Te,d(i)]),n("。")]),De]),Ve,e("p",null,[n("如果说 ESM 是模块化标准的最终解决方案，那么 "),Ie,n(" 的 "),Oe,n(" 便是模块解析策略的最终解决方案。nodejs 官方文档"),e("a",Pe,[n("Modules: Packages"),d(i)]),n(" 章节其实大部分内容主要就是在讲 "),Le,n("。换句话说就是花了一整个章节专门讲 "),Ce,n("。")]),Me,e("p",null,[n("当模块 id 是 "),Ne,n("，nodejs 会采用 "),Ue,n("。尴尬的是：目前主流的几个 node 模块解析库都不能正确解析这个例子，只有 webpack 用的 "),e("a",Xe,[n("enhanced-resolve"),d(i)]),n(" 是可以解析的，下面三全跪：")]),e("ul",null,[e("li",null,[ze,n(" 内置插件 "),Be,n(" 使用的 "),Ge,n("："),e("a",He,[n("resolve priority incorrectly"),d(i)])]),e("li",null,[Je,n(" 官方插件 "),Ke,n("："),e("a",We,[n("[node-resolve] * in exports key can't correctly resolved"),d(i)])]),e("li",null,[Ye,n(" 使用的 "),Qe,n(": "),e("a",Ze,[n("can't deal with priority correctly"),d(i)])])]),$e,e("p",null,[n("那么所谓的"),en,n("到底是怎样的算法呢？参考 "),e("a",nn,[n("enhanced-resolve 的源码"),d(i)]),n(" ，我们可以这样做：")]),dn,e("p",null,[n("在上面的例子中，首先我们使用了 "),sn,n(" 条件，这个条件 "),on,n(" 是"),e("a",tn,[n("默认支持"),d(i)]),n("的。然后你会发现我们是在 "),ln,n(" 条件中使用的 "),un,n(" 条件，也就是说 "),cn,n(" 是支持内嵌条件的。")]),an,e("p",null,[n("并不是所有的字段都支持在 "),rn,n(" 覆盖，例如 "),e("a",vn,[n("npm"),d(i)]),n(" 不支持覆盖 "),pn,n("，但是我平时使用的 "),e("a",mn,[n("pnpm"),d(i)]),n(" 是支持的。")]),bn,e("p",null,[n("目前前端界大部分库都不能正常的在 "),qn,n(" 下使用，例如 "),e("a",hn,[n("@vitejs/plugin-vue2"),d(i)]),n("：")]),gn,e("p",null,[n("详细的解释你可以看 ts 团队在 github 上的一个回复："),e("a",xn,[n('ts error when moduleResolution is "node16"'),d(i)])]),jn,e("ul",null,[e("li",null,[e("a",_n,[n("publint"),d(i)]),n(" cli 工具，可以帮你检测出 target pattern 对应的文件是否存在，以及是否出现 "),kn,n(" 条件却指向一个扩展名是 "),fn,n(" 的模块")]),e("li",null,[e("a",yn,[n("Are the types wrong?"),d(i)]),n(" 在线网站，帮你检测一个 npm package 的 "),Fn,n(" 类型配置在各种 "),wn,n(" 是否会出现问题")])]),An])}const Dn=o(c,[["render",Rn],["__file","moduleResolution zongjie.html.vue"]]);export{Dn as default};
