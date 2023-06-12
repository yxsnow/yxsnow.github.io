import{_ as e,o as i,c as n,a as d}from"./app-ff2f634e.js";const o={},l=d(`<h3 id="模块化就是将一个复杂的应用程序-按照规范拆分成几个相互独立的文件-这些文件里面完成共同的或者类似的逻辑-通过对外暴露一些数据或者调用方法-与外部整合" tabindex="-1"><a class="header-anchor" href="#模块化就是将一个复杂的应用程序-按照规范拆分成几个相互独立的文件-这些文件里面完成共同的或者类似的逻辑-通过对外暴露一些数据或者调用方法-与外部整合" aria-hidden="true">#</a> 模块化就是将一个复杂的应用程序，按照规范拆分成几个相互独立的文件，这些文件里面完成共同的或者类似的逻辑，通过对外暴露一些数据或者调用方法，与外部整合</h3><p>这样每个文件彼此独立，我们开发者更容易开发和维护代码，特别是当开发的项目越来越大，代码复杂性也不断增加，这对于模块化的需求也会越来越大</p><p>模块化主要特点是：<code>可复用性</code>、<code>可组合性</code>、<code>独立性</code>、<code>中心化</code></p><p>所以使用模块化可以帮我们解决什么问题呢？</p><ul><li><strong>解决了命名冲突</strong>：因为每个模块是独立的，所以变量或函数名重名不会发生冲突</li><li><strong>提高可维护性</strong>：因为每个文件的职责单一，有利于代码维护</li><li><strong>性能优化</strong>：异步加载模块对页面性能会非常好</li><li><strong>模块的版本管理</strong>：通过别名等配置，配合构建工具，可以实现模块的版本管理</li><li><strong>跨环境共享模块</strong>：通过 Sea.js 的 NodeJS 版本，可以实现模块的跨服务器和浏览器共享</li></ul><p>目前前端主流的模块化标准有：</p><ul><li><strong>CommonJS</strong></li><li><strong>AMD</strong></li><li><strong>CMD</strong></li><li><strong>UMD</strong></li><li><strong>ES6</strong></li></ul><p>下面一一展开详细总结</p><h2 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJS</h2><p>Node 用的就是 CommonJS 模块化规范</p><p>规范是这样的，每一个文件都是一个模块，有单独的作用域、变量和方法等，并且对其他文件是不可见的，这也是独立性的体现</p><p>在每个模块内部有一个 module 对象，代表当前模块，通过它来导出当前模块里的 API，module 有几个属性：</p><ul><li><code>exports</code> : 是对外的接口，加载某个模块，就是加载该模块的 <strong>module.exports</strong> 属性</li><li><code>loaded</code>: 返回一个布尔值，表示该模块是否已完成加载</li><li><code>parent</code>: 返回一个对象，表示调用该模块的模块</li><li><code>children</code>：返回一个数组，表示该模块被用到了其他模块的集合</li><li><code>filename</code>：模块的文件名，带有绝对路径</li><li><code>id</code>：模块的标识符，一般是带有绝对路径的模块文件名</li></ul><p><strong>CommonJS 规范的特点：</strong></p><ul><li>每个文件都是<strong>独立</strong>的模块，有独立的作用域，不会污染全局空间</li><li>文件可以被重复引用、加载。<strong>第一次加载时会被缓存</strong>，之后再引用就直接读取缓存</li><li>加载某个模块时，<strong>module.exports 输出的是值的拷贝</strong>，一旦这个值被输出，模块内再发生变化不会影响已经输出的值</li></ul><p>用法是这样的：</p><p>导出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports.foo = function(){ ... } // 只能输出一个
或 可以输出多个
exports.a = 1
exports.foo = function(){ ... }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>exports 可以理解为是 module.exports 的引用，所以上面两种方式结果是一样的。阮一峰老师说过，如果两个不好区分，那就放弃exports，<strong>只用 module.exports 就好</strong></p><p>导入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const foo = require(&quot;./xxx&quot;) // 如果没有写文件名后缀，会自动按照 .js、.json、.node的顺序补齐查找
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>加载过程如下：</strong></p><ul><li>先从缓存里找，有就加载</li><li>缓存没有就检查是不是全局模块，是就直接加载</li><li>不是就检查模块路径有没有该文件，有就解析路径并定位文件，然后执行加载</li><li>如果以上都不是，就沿当前路径向上层逐级递归查找，直到根目录 node_modules</li></ul><h2 id="amd" tabindex="-1"><a class="header-anchor" href="#amd" aria-hidden="true">#</a> AMD</h2><p>和 CommonJS 一样都是模块化，只不过 <strong>CommonJS 规范加载模块是同步加载</strong>，只有加载完成，才能执行后面的操作，而 <strong>AMD 是异步加载模块</strong>，可以指定回调函数</p><p>因为 Node.js 运行在服务器上，所有的文件一般都存在本地硬盘里，不需要再去请求异步加载。可如果放在浏览器环境下，就需要去请求从服务器获取模块文件，这时如果再使用同步加载显然就不合适了，所以才有了完全贴合浏览器的 ADM 规范，<strong>该规范的实现就是</strong> <code>require.js</code></p><p>它的使用方法就是通过一个全局函数 <code>define</code>，把代码定义为模块，再用 <code>require</code> 方法加载模块</p><p><code>define</code> 接收三个参数</p><ul><li>第一个是模块名称，也可以不填，默认就是文件名</li><li>第二个参数必须是一个数组，定义了该模块依赖的模块列表</li><li>第三个参数是模块初始化要执行的函数或对象。如果是函数，只会被执行一次，如果是对象，那这个对象应该作为模块的输出值</li></ul><p>看个栗子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>define(&quot;myModule&quot;， [&quot;require&quot;, &quot;exports&quot;, &quot;beta&quot;],  function(require, exports, beta){
    exports.foo = function(){
        return beat.foo()
    }
})
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是创建了一个名为 myModule 的模块，该模块依赖 require、exports 和 beta 三个模块，并导出 foo 函数</p><p>导出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = { ... }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>导入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const foo = require(&quot;./xxx&quot;)
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> CMD</h2><p>CMD 规范整合了上面说的 CommonJS 规范和 AMD 规范的特点，<strong>CMD 规范的实现就是</strong> <code>sea.js</code></p><p>CMD 规范最大的特点就是<code>懒加载</code>，不需要在定义模块的时候声明依赖，可以在模块执行时动态加载依赖，<code>并且同时支持同步和异步</code>加载模块</p><p><strong>CMD 和 AMD 的主要区别是</strong>：</p><ul><li>AMD 需要异步加载模块，而 CMD 可以同步加载(<code>require</code>)，也可以异步加载(<code>require.sync</code>)</li><li>CMD 遵循依赖就近原则，AMD 遵循依赖前置原则。就是说在 AMD 中我们需要把模块需要的依赖都提前在依赖数组里声明，而在 CMD 里我们只需要在具体代码逻辑内，把需要使用的模块 require 进来就可以了</li></ul><p>用法和 require.js 差不多，通过定义一个全局函数 define 来实现，不过只能接受一个参数，可以是函数或者对象。如果是对象，模块导出的就是对象，如果是函数，那这个函数会被传入三个参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>define( function(require, exports, module){
    ...
})
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三个参数分别是：</p><ul><li><code>require</code>：可以引用其他模块，也可以用 require.async 异步调用其他模块</li><li><code>expxort</code>：是一个对象，定义模块的时候，需要通过参数 export 添加属性来导出 API</li><li><code>module</code>：是一个对象，它有三个上属性 <ul><li><strong>uri</strong>： 模块完整的 URI 路径</li><li><strong>dependencies</strong>：模块的依赖</li><li><strong>exports</strong>：模块需要被导出的 API</li></ul></li></ul><p>看个栗子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>define( function(require, export, module){
    const add = require(&quot;math&quot;).add
    exports.increment = function(val){
        return add(val, 1)
    }
    module.id = &quot;increment&quot;
})
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是定义一个名为 increment 的模块，引用 math 模块里的 add 方法，经过处理后，再导出 increment 函数</p><h2 id="umd" tabindex="-1"><a class="header-anchor" href="#umd" aria-hidden="true">#</a> UMD</h2><p><strong>UMD 没有专门的规范，而是集合了上面说的三个规范于一身，它可以让我们在合适的环境选择合适的模块规范</strong></p><p>比如在 Node.js 环境中用 CommonJS 模块规范管理，在浏览器端支持 AMD 的话就采用 AMD 模块规范，不支持就导出为全局函数</p><p>看实现代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function(root, factory){
    if(typeof define === &quot;function&quot; &amp;&amp; define.amd){
        define([&quot;xxx&quot;], factory)
    }else if(typeof exports === &quot;object&quot;){
        module.exports = factory( require(&quot;xxx&quot;) )
    }else{
        root.returnExports = factory( root.xxx )
    }
}(this, ($) =&gt; {
    return { ... }
}))
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断过程是这样的</p><ul><li>先判断支不支持 AMD (define 是否存在)，存在就使用 AMD 方式加载模块</li><li>再判断支不支持 Node.js 模块格式(export 是否存在)，存在就用 Node.js 模块格式</li><li>如果前两个都不存在，就将模块公开到全局，window 或 global</li></ul><h2 id="es6-模块化" tabindex="-1"><a class="header-anchor" href="#es6-模块化" aria-hidden="true">#</a> ES6 模块化</h2><p>CommonJS 和 AMD 都是在运行时确定依赖关系，也就是运行时加载，CommonJS 加载的是拷贝，而 ES6 module 是在编译时就确定依赖关系，所有的加载都是引用，这样做的好处是可以执行静态分析和类型检查</p><p><strong>ES6 Module 和 CommonJS 的区别</strong>：</p><ul><li><code>ES6 Module</code> 的 import 是静态引入，CommonJS的 require 是动态引入</li><li><code>Tree-Shaking</code> 就是通过 ES6 Module 的 import 来进行静态分析，并且只支持 <code>ES6 Module</code> 模块的使用。Tree-Shaking 就是移除掉 JS 上下文中没有引用的代码，比如 import 导入模块没有返回值的情况下，webpack 在打包编译时 Tree-Shaking 会默认忽略掉此文件</li><li><code>ES6 Module</code> 是对模块的引用，输出的是值的引用，改变原来模块中的值引用的值也会改变；<code>CommonJS</code> 是对模块的拷贝，修改原来模块的值不会影响引用的值</li><li><code>ES6 Module</code> 里的 this 指向 undefined；<code>CommonJS</code> 里的 this 指向模块本身</li><li><code>ES6 Module</code> 是在编译时确定依赖关系，生成接口并对外输出；CommonJS 是在运行时加载模块</li><li><code>ES6 Module</code> 可以单独加载某个方法；<code>CommonJS</code> 是加载整个模块</li><li><code>ES6 Module</code> 不能被重新赋值，会报错；<code>CommonJS</code> 可以重新赋值(改变 this 指向)</li></ul><p>静态分析是啥？什么是静态引入？什么是动态引入？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// CommonJS / AMD 中动态引入的写法
const foo = require( \`all/\${[&quot;f&quot;,&quot;o&quot;,&quot;o&quot;].join(&quot;&quot;)}\` )
const foo = require( &quot;all/FOO&quot;.toLowerCase() )
const foo = require( (()=&gt;&quot;foo&quot;)() )
const foo = xx.get( require(&quot;foo&quot;) )

// ES6 Module 中静态引入的写法
import foo from &quot;xxxx/xxx&quot;
import { foo1, foo2 } from &quot;xxxx/xxx&quot;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：动态==可以拼接，静态==不准拼接，哈哈哈 ~~~ ，不是 === 哈，简单理解一下，原理就不拓展了</p><p>不能拼接，ES6 Module 自然就可以很容易分析出使用了哪些模块，这就是静态分析，可以在不运行代码的情况下，对代码扫描检测分析</p><p>ES6 Module 的用法，看下代码</p><p>导出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 方式一 可以输出多个
export const a = 1
export function foo(){}

//方式二 只能输出一个
const a = 1
function foo(){}
export default {
    a, 
    foo 
}

// 注意
export { a as b }  // as 的意思就是重命名
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有 export default 会导出默认输出，用 vue 的应该特别熟悉，就是不需要知道模块中输出的名字，在导入的时候再自定义名字</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 导出
export default function(){ ... }

// 引入
import &quot;./xxx&quot;  这样只是加载，没有输出，也就不能调用
// 下面这样就可以使用
import funName1 from &quot;./xxx&quot;
import { funName1 as foo } from &quot;./xxx&quot;
import { funName1, funName2 } from &quot;./xxx&quot;

// 加载整个模块  会忽略 default 输出
import * as myModule from &quot;./xxx&quot;
// 使用
myModule.a
myModule.foo()

// 模块的继承
import * from &quot;./xxx&quot; // 在当前模块里这样引入别的模块，就把 xxx 模块里导出的全部继承过来了
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在浏览器中使用-es-模块化" tabindex="-1"><a class="header-anchor" href="#在浏览器中使用-es-模块化" aria-hidden="true">#</a> 在浏览器中使用 ES 模块化</h3><p>只需要在 script 标签中添加 <code>type=&quot;module&quot;</code> 属性就行，目前各大浏览器较新版本都已支持，如果是不支持的浏览器通过添加 <code>nomodule</code> 属性来执行其他方案</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script type=&quot;module&quot;&gt;
    import module1 from &quot;./xxx&quot;
&lt;/script&gt;
&lt;script nomodule&gt; alert(&quot;您的浏览器暂不支持 ES 模块，请先升级浏览器版本&quot;) &lt;/script&gt;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-node-js-中使用-es-模块化" tabindex="-1"><a class="header-anchor" href="#在-node-js-中使用-es-模块化" aria-hidden="true">#</a> 在 Node.js 中使用 ES 模块化</h3><p>Node.js 从 9.0 版本开始支持 ES 模块</p><p>可以在执行脚本需要启动时加上 <strong>–experimental-modules</strong>，需要文件后缀名必须为 .mjs</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node --experimental-modules module1.mjs

//使用
import module1 from &quot;./xxx&quot;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者也可以安装 <strong>babel-cli</strong> 和 <strong>babel-preset-env</strong>，配置 .babelrc 文件后，执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./node_modules/.bin/babel-node
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx babel-node
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><p>Webpack 本身维护了一套模块系统，兼容了几乎所有前端历史下的模块规范，上面说的模块化全都有</p>`,81),s=[l];function r(a,t){return i(),n("div",null,s)}const c=e(o,[["render",r],["__file","qianduanmokuaihuaguifanxiangxizongjie.html.vue"]]);export{c as default};
