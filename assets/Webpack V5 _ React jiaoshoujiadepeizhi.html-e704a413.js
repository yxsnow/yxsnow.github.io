import{_ as l,r as a,o as r,c as u,b as e,d as i,e as s,a as d}from"./app-ff2f634e.js";const t="/assets/957d781ab1834722b3b00b1167b97150_e9077e94dbe0452ab-1d072b98.webp",v="/assets/d908cac7b35545c0a730c0f5f6bea365_674e09fc84f649379-2b81e235.webp",c="/assets/4ab23dbd854143769f67b08b88e2db15_97117b46f83040c38-0052d06b.webp",o="/assets/04f8ce0e360141dcb4b595bb65734f7e_072901826fea4705a-c43de9c3.webp",b="/assets/33ffb520293c4b48b92d8d656d942f40_924027e1a2644911a-a7e68bc9.webp",m="/assets/aa7fd5f093f647208780d668a0390643_b9550e832deb45268-6fa7d97f.webp",p="/assets/94ea3a09e7264df0b5e36ef26392b8f3_482022b4f2d04b60b-55b2fb78.webp",q="/assets/13b90ef4c4e14a67acd032bf1086dfa2_1678b0fab88244dea-54c8f706.webp",g="/assets/f264173913bf49c9b665261823911652_addabcd5bc994d36b-ce474ff9.webp",h="/assets/2873d34fdfab4f7c8d5f1514ca0e7099_e9fa7e2baff340068-02af437a.webp",x="/assets/17aab624d9bb44c0aff46668794b8194_8da11ea8fed14377a-c30e38dc.webp",f="/assets/fae631b0e99b4112b2af57794d771826_1613ad15f3984e5bb-d93c5fe4.webp",w="/assets/24b7b7e0f8764df0b1a4f14c105dedf3_0904aaa6d4fe470bb-37758693.webp",k="/assets/8eb3f7b44bf94aa1af8d6de885c2e4ea_97bb93e9884e45078-2cb3e0e2.webp",j="/assets/f3409f92ba904f98996afc47c79b652a_ccaad3668dcf46d88-6acdc8a2.webp",_="/assets/8d0ec860be18469c94c288bc0cc3475e_4e56d6c056f9452b9-ac8bb91c.webp",y="/assets/82b6558ae9114453821e814cd32286ed_2320e32efe7a428da-d6d720b4.webp",C="/assets/6fbef4baf648409fa3967168e271023b_36b9fd2cd35a47899-0420b6d2.webp",M="/assets/ca807e69aa264483ad792f1996eb2bbd_8f9270002ae4483cb-179cf4e3.webp",P="/assets/bade03cdce864f3bb6617c5f669a5227_a75f968f4dce440e9-51fc2b07.webp",S="/assets/987b922236104b61b137365a94a3415f_833c0812d029431e8-e2dbf56d.webp",E="/assets/7ae91cfeb202409e8af54e55edf3c664_771ba0209d5c4c6db-dd173778.webp",F="/assets/04cc3b1fa31245a79bb6908b5401e25c_4589afdc364343369-d46aaa36.webp",D={},W=e("h1",{id:"基础配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#基础配置","aria-hidden":"true"},"#"),i(" 基础配置")],-1),T={href:"https://link.juejin.cn?target=https%3A%2F%2Fwebpack.docschina.org%2F",title:"https://webpack.docschina.org/",target:"_blank",rel:"noopener noreferrer"},L=d(`<h2 id="一、五大核心概念" tabindex="-1"><a class="header-anchor" href="#一、五大核心概念" aria-hidden="true">#</a> 一、五大核心概念：</h2><p>webpack的五大核心概念分别是：</p><h2 id="_1、entry" tabindex="-1"><a class="header-anchor" href="#_1、entry" aria-hidden="true">#</a> 1、Entry</h2><p>入口起点，告诉 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。默认值是 ./src/index.js，但也可以通过在 “webpack.config.js” 文件中的 entry 属性来配置，可以指定一个（或多个）不同的入口起点，例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 单文件入口简写
module.exports = {
  entry: &#39;./src/index.js&#39;,
};
 
 
// 单文件入口完整写法
module.exports = {
  entry: {
    main: &#39;./src/index.js&#39;,
  },
};
 
// 多文件入口写法
module.exports = {
  entry: [&#39;./src/index.js&#39;, &#39;./src/index_2.js&#39;],
  output: {
    filename: &#39;bundle.js&#39;,
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),$={href:"https://link.juejin.cn?target=https%3A%2F%2Fwebpack.docschina.org%2Fconcepts%2Fentry-points",title:"https://webpack.docschina.org/concepts/entry-points",target:"_blank",rel:"noopener noreferrer"},A=d(`<h2 id="_2、output" tabindex="-1"><a class="header-anchor" href="#_2、output" aria-hidden="true">#</a> 2、Output</h2><p>output 告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件。主要输出文件的默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中。也可通过在 “webpack.config.js” 文件中的 output 属性来配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const path = require(&#39;path&#39;);
module.exports = {
  entry: &#39;./src/index.js&#39;,
  output: {
    path: path.resolve(__dirname, &#39;dist&#39;),
    filename: &#39;main.js&#39;,
  },
};
 
 
// 多入口的配置
module.exports = {
  entry: {
    app: &#39;./src/app.js&#39;,
    search: &#39;./src/search.js&#39;,
  },
  // 写入到：./dist/app.js, ./dist/search.js
  output: {
    filename: &#39;[name].js&#39;,
    path: __dirname + &#39;/dist&#39;,
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),H={href:"https://link.juejin.cn?target=https%3A%2F%2Fwebpack.docschina.org%2Fconcepts%2Foutput",title:"https://webpack.docschina.org/concepts/output",target:"_blank",rel:"noopener noreferrer"},R=d(`<h2 id="_3、loader" tabindex="-1"><a class="header-anchor" href="#_3、loader" aria-hidden="true">#</a> 3、Loader</h2><p>webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。loader的基本属性就两个:</p><ul><li>test：识别出哪些文件会被转换</li><li>use：定义出在进行转换时，应该使用哪个 loader</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 示例
module.exports = {
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [
          // 最后执行 style-loader
          { loader: &#39;style-loader&#39; },
          // 其次执行 css-loader
          {
            loader: &#39;css-loader&#39;,
            options: {
              modules: true
            }
          },
          //  首先执行 sass-loader
          { loader: &#39;sass-loader&#39; }
        ]
      }
    ]
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里需要注意的是：module.rules 允许你在 webpack 配置中指定多个 loader。还有 loader 的执行顺序需要注意一下，他是从下到上依次执行的，配置过程中不要写错了。在上面的示例中，从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束。</p>`,5),O={href:"https://link.juejin.cn?target=https%3A%2F%2Fwebpack.docschina.org%2Fconcepts%2Floaders",title:"https://webpack.docschina.org/concepts/loaders",target:"_blank",rel:"noopener noreferrer"},N=d(`<h2 id="_4、plugins" tabindex="-1"><a class="header-anchor" href="#_4、plugins" aria-hidden="true">#</a> 4、Plugins</h2><p>loader 用于转换某些类型的模块，而plugins（插件）则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。</p><p>插件的使用需要用 require() 引入，然后通过 new 操作符来创建一个实例 最后添加到 plugins 数组中。如下示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;); // html的插件
 
module.exports = {
  module: {
    rules: [{ test: /\\.css$/, use: &#39;css-loader&#39; }],
  },
  plugins: [new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; })],
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述示例中 html-webpack-plugin 会为应用程序生成一个 HTML 文件，并自动将生成的所有 bundle 注入到此文件中。</p>`,5),V={href:"https://link.juejin.cn?target=https%3A%2F%2Fwebpack.docschina.org%2Fapi%2Fplugins",title:"https://webpack.docschina.org/api/plugins",target:"_blank",rel:"noopener noreferrer"},z=d(`<h2 id="_5、mode" tabindex="-1"><a class="header-anchor" href="#_5、mode" aria-hidden="true">#</a> 5、Mode</h2><p>模式，有生产模式（production）和开发模式（development）或 none。设置 mode 参数，可以启用 webpack 内置在相应环境下的优化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 其默认值为 production
module.exports = {
  mode: &#39;production&#39;,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),I={href:"https://link.juejin.cn?target=https%3A%2F%2Fwebpack.docschina.org%2Fapi%2Fplugins",title:"https://webpack.docschina.org/api/plugins",target:"_blank",rel:"noopener noreferrer"},U=d(`<h2 id="二、安装及简单的配置" tabindex="-1"><a class="header-anchor" href="#二、安装及简单的配置" aria-hidden="true">#</a> 二、安装及简单的配置</h2><p>在理解了 webpack 的五大核心配置以后，就可以开始着手一些简单的配置了。</p><h3 id="_1、安装" tabindex="-1"><a class="header-anchor" href="#_1、安装" aria-hidden="true">#</a> 1、安装</h3><p>webpack的安装需要注意的一点就是需要在全局和项目中都同时安装 webpack 和 webpack-cli</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i webpack webpack-cli -g
npm i webpack webpack-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、初始化项目" tabindex="-1"><a class="header-anchor" href="#_2、初始化项目" aria-hidden="true">#</a> 2、初始化项目</h3><p>初始化就是常说的项目初始化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、编译打包" tabindex="-1"><a class="header-anchor" href="#_3、编译打包" aria-hidden="true">#</a> 3、编译打包</h3><p>简单的创建一个项目，然后加入各种类型的文件，应用上面说的五大核心打包一个应用。</p><h4 id="首先加入webpack支持的js和json文件" tabindex="-1"><a class="header-anchor" href="#首先加入webpack支持的js和json文件" aria-hidden="true">#</a> 首先加入webpack支持的js和json文件</h4><img width="756" height="328" src="`+t+`" class="jop-noMdConv"><p>如上图所示：</p><ul><li>创建了一个webpack文件夹</li><li>在他的基础上初始化了项目：npm init</li><li>创建 src 文件夹，并在他下面创建 入口文件（index.js）和一些模块（module1.js、module2.js、module3.js ......）</li><li>创建 json 文件夹，并在他下面创建 json 文件（index.json）</li><li>创建 index.html 文件，以备之后引入webpack 构建后的文件</li><li>创建 webpack.config.js 文件，用于配置 webpack 的配置。</li></ul><h4 id="其次配置默认支持的js和json文件" tabindex="-1"><a class="header-anchor" href="#其次配置默认支持的js和json文件" aria-hidden="true">#</a> 其次配置默认支持的js和json文件</h4><p>这边直接贴一下代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack.config.js
 
const path = require(&#39;path&#39;);
module.exports = {
  // 入口文件配置
  entry: &#39;./src/js/index.js&#39;,
  // 出口文件配置
  output: {
    path: path.resolve(__dirname, &#39;dist&#39;),
    filename: &#39;main.js&#39;,
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单说一下，上面的配置文件主要做两件事。1、配置了入口文件地址为：&#39;./src/js/index.js&#39;  2、配置了出口文件的导出为：&#39;dist/main.js&#39;</p><p>配置完以后，执行命令：webpack</p><p><img width="756" height="298" src="`+v+'" class="jop-noMdConv"> 如图可以看到在目录中已经生成了构建后的代码：dist/main.js</p><p>到此说明构建已经成功，但有一个问题需要注意一下，就是在终端有一个警告，需要处理一下。如图</p><img width="756" height="236" src="'+c+`" class="jop-noMdConv"><p>这里其实就是提示没有配置 mode，配置完mode以后也就不会再有这个警告了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack.config.js
 
const path = require(&#39;path&#39;);
module.exports = {
  // 入口文件配置
  entry: &#39;./src/js/index.js&#39;,
  // 出口文件配置
  output: {
    path: path.resolve(__dirname, &#39;dist&#39;),
    filename: &#39;main.js&#39;,
  },
  // 模式选择（默认）
  mode: &#39;production&#39;,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一来我们就把webpack支持的js和json文件做了一个配置，同时用到了五大核心中的三大核心：entry、output、mode。</p><h4 id="然后看一下loader" tabindex="-1"><a class="header-anchor" href="#然后看一下loader" aria-hidden="true">#</a> 然后看一下loader</h4><h5 id="_1、less-loader" tabindex="-1"><a class="header-anchor" href="#_1、less-loader" aria-hidden="true">#</a> 1、less-loader</h5><p>首先添加一个 .less 文件，如图</p><img width="756" height="466" src="`+o+'" class="jop-noMdConv"><p>然后在入口文件中引入</p><img width="756" height="402" src="'+b+'" class="jop-noMdConv"><p>然后打包发现报错了</p><img width="756" height="281" src="'+m+'" class="jop-noMdConv"><p>报错的因为就是 webpack 不能识别 .less 的文件。那怎么识别呢？这里就需要我们前面说的五大核心中的：loader</p><p>在构建的时候，对于webpack不能识别的文件类型，咱们需要使用 loader 告诉 webpack 加载对应的文件，这里需要的是：less-loader</p><img width="756" height="545" src="'+p+'" class="jop-noMdConv"><p>loader的配置可以根据官网的配置来，但这里需要说明一下，上图左侧的这些loader并不是所有的loader，这里只是webpack官方觉得不错的挑选了几个列在这里以便使用。</p><p>但是，根据上面官方给的示例，配置完以后，发现报错了，如下图：</p><img width="756" height="218" src="'+q+`" class="jop-noMdConv"><p>其实这里是因为，在官方的示例中，他并不是只用了 &#39;less-loader&#39;、他还使用了&#39;style-loader&#39;和&#39;css-loader&#39;。所以这里我们需要把他两也安装上，所以说咱们转less文件，需要安装五个东西：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install less less-loader style-loader css-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里为什么需要安装&#39;style-loader&#39;和&#39;css-loader&#39;咱们写注释说明一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 构建 less 文件 说明
module.exports = {
  module: {
    rules: [
      {
        test: /\\.less$/i, // 匹配 .less 文件
        // 注意之前说过的，loader是从下到上的一个执行顺序
        use: [ // 还有官方的示例 这里是loader 咱们需要改成use
          &#39;style-loader&#39;, // 创建style标签，并将js中的css代码添加到style标签中
          &#39;css-loader&#39;, // 将css文件以common.js的方式整合到js文件中
          &#39;less-loader&#39;, // 将less文件解析成css文件
        ],
      },
    ],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完以后再试：</p><img width="756" height="257" src="`+g+'" class="jop-noMdConv"><p>上面看到已经编译成功了，那么打开index.html文件看一下，样式是够OK</p><img width="756" height="384" src="'+h+'" class="jop-noMdConv"><p>得到的结果，页面中间出现了一个黄色的正方形。以上就是less-loader的基本使用</p><h5 id="_2、ts-loader" tabindex="-1"><a class="header-anchor" href="#_2、ts-loader" aria-hidden="true">#</a> 2、ts-loader</h5><p>ts想要被 webpack 识别，不仅需要借助ts-loader，还需要借助babel-loader，这里直接看根据官网文档来</p><img width="756" height="494" src="'+x+`" class="jop-noMdConv"><p>但这里需要注意的是，在构建过程中，如果需要支持IE浏览器，需要额外配置：core-js</p><p>这里贴一下具体的配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 构建 ts 文件 说明
const path = require(&#39;path&#39;);
module.exports = {
  // 入口文件配置
  entry: &#39;./src/js/index.js&#39;,
  // 出口文件配置
  output: {
    path: path.resolve(__dirname, &#39;dist&#39;),
    filename: &#39;main.js&#39;,
  },
  // 模式选择（默认）
  mode: &#39;production&#39;,
  // loader的配置
  module: {
    rules: [
      // less-loader
      {
        test: /\\.less$/, // 匹配 .less 文件
        use: [
          &#39;style-loader&#39;,
          &#39;css-loader&#39;,
          &#39;less-loader&#39;,
        ],
      },
      // ts-loader
      {
        test:/\\.ts$/,
        exclude: /node-modules/,
        use: [
          // babel配置
          {
            // 加载器
            loader: &quot;babel-loader&quot;,
            // 设置babel
            options: {
              // 预定义的环境设置
              presets:[
                [
                  // 指定环境的插件
                  &quot;@babel/preset-env&quot;,
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      &quot;chrome&quot;: &quot;58&quot;,
                      &quot;ie&quot;: &quot;11&quot;,
                    },
                    // 指定core.js的版本
                    &quot;corejs&quot;: &quot;3&quot;,
                    // 使用corejs的方式 “usage” 表示按需加载
                    &quot;useBuiltIns&quot;: &quot;usage&quot;
                  }
                ]
              ],
              // 开启babel缓存
              cacheDirectory: true
            }
          },
          &#39;ts-loader&#39;
        ],
      }
    ],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、图片的构建" tabindex="-1"><a class="header-anchor" href="#_3、图片的构建" aria-hidden="true">#</a> 3、图片的构建</h5><p>在图片的构建中，以前的webpack4需要用到url-loader 和 file-loader，但在webpack5中确不需要了。</p><p><img width="756" height="580" src="`+f+'" class="jop-noMdConv"> <img width="756" height="604" src="'+w+`" class="jop-noMdConv"></p><p>上图就是之前webpack4 之前的配置。那为什么webpack5不用这么配置了呢？这里简单说一下：</p><p>webpack5 新增 资源模块（Asset Modules ）。资源模块(asset module)是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。</p><p>在 webpack5 之前，通常用 raw-loader 将文件导入为字符串、用 url-loader 将文件作为 data URI 内联到 bundle 中、用 file-loader 将文件发送到输出目录。但现在新增了资源模块后，资源模块通过添加 4 种新的模块类型，来替换所有这些 loader：</p><ul><li>asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。</li><li>asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。</li><li>asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。</li><li>asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。</li></ul><p>看一下webpack4 和 webpack5 的代码的区别：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack4 的使用
module.exports = {
  module: {
    rules: [
      {
        test: /\\.png$/i,
        use: &#39;file-loader&#39;
      },
      {
        test: /\\.ico$/i,
        use: &#39;url-loader&#39;
      },
      {
        test: /\\.text$/i,
        use: &#39;raw-loader&#39;
      },
    ],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack5 的使用
module.exports = {
  module: {
    rules: [
      {
        test: /\\.png$/i,
        use: &#39;asset/resource&#39;
      },
      {
        test: /\\.ico$/i,
        use: &#39;asset/inline&#39;
      },
      {
        test: /\\.text$/i,
        use: &#39;asset/source&#39;
      },
    ],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接下来看一下plugins" tabindex="-1"><a class="header-anchor" href="#接下来看一下plugins" aria-hidden="true">#</a> 接下来看一下plugins</h4><p>插件的话简单说两个，之后咱们会用到的，一个是 ‘mini-css-extract-plugin’ ，另一个是 ‘html-webpack-plugin’。他们是用来干啥的呢？下面简单说一下</p><h5 id="_1、mini-css-extract-plugin" tabindex="-1"><a class="header-anchor" href="#_1、mini-css-extract-plugin" aria-hidden="true">#</a> 1、mini-css-extract-plugin</h5><p>插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。</p><p>简单贴一下代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 安装
npm install --save-dev mini-css-extract-plugin
 
// 使用
const MiniCssExtractPlugin = require(&quot;mini-css-extract-plugin&quot;);
module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\\.css$/i,
        use: [MiniCssExtractPlugin.loader, &quot;css-loader&quot;],
      },
    ],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，插件基于 webpack5 的新特性构建，需要 webpack5 才能正常工作。</p><h5 id="_2、html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#_2、html-webpack-plugin" aria-hidden="true">#</a> 2、html-webpack-plugin</h5><p>插件会生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle。</p><p>简单贴一下代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 安装
npm install --save-dev html-webpack-plugin
 
 
// 使用
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
const path = require(&#39;path&#39;);
module.exports = {
  entry: &#39;index.js&#39;,
  output: {
    path: path.resolve(__dirname, &#39;./dist&#39;),
    filename: &#39;index_bundle.js&#39;,
  },
  plugins: [new HtmlWebpackPlugin()],
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是 如果你有多个 webpack 入口，也会在已生成 HTML 文件中的 script 标签内引入</p><p>如果在 webpack 的输出中有任何 CSS 资源（例如，使用 mini-css-extract-plugin 提取的 CSS），那么这些资源也会在 HTML 文件 head 元素中的 link 标签内引入</p><h4 id="最后来看一下代码规范" tabindex="-1"><a class="header-anchor" href="#最后来看一下代码规范" aria-hidden="true">#</a> 最后来看一下代码规范</h4><p>代码规范的工具有很多，但怎么选择是个问题，一般我觉得跟着主流的框架走总不会错，就目前vue3和react17用的都是Eslint，所以咱们就以Eslint为例，简单说一下。</p><p>这里有个小插曲，当我熟练的打开 webpack去搜索的时候发现没有搜索到 ‘eslint-loader’，我心想难道我记错了，但不可能啊，webpack最熟练地配置当属eslint了啊，我怎么说也算对代码规范有点洁癖的人啊！查阅了一些资料以后发现一个让我很大跌眼镜的事：eslint-loader 被废除了！我艹！！！！</p><p>但转念一想，那些废弃的loader都有替代品，eslint-loader应该不会没有。于是又跑webpack5 官网找了找，发现确实有：EslintWebpackPlugin</p><img width="756" height="531" src="`+k+`" class="jop-noMdConv"><p>没错，上图就是这哥们就是 “eslint-loader” 的接盘侠。那接下来看看这哥们怎么使用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 安装
npm install eslint eslint-webpack-plugin --save-dev
 
 
// 使用
const ESLintPlugin = require(&#39;eslint-webpack-plugin&#39;);
module.exports = {
  // ...
  plugins: [new ESLintPlugin({
    fix: true, // 启用 ESLint 自动修复特性
    extensions: [&#39;js&#39;, &#39;json&#39;, &#39;coffee&#39;], // 需要排查的文件
    exclude: &#39;/node_modules/&#39; // 排除 node_module 的检查
  })],
  // ...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="webpack5-react-搭建项目脚手架" tabindex="-1"><a class="header-anchor" href="#webpack5-react-搭建项目脚手架" aria-hidden="true">#</a> webpack5 + react 搭建项目脚手架</h1><p>上面我们说的主要是webpack5 的一些核心概念和基础的搭建。下面正式开始脚手架的搭建。</p><p>首先看一下目前我这边搭建好的一个目录</p><img width="756" height="509" src="`+j+'" class="jop-noMdConv"><p>下面就按照这个一步一步的来搭建一下吧，</p><h2 id="一、基础搭建" tabindex="-1"><a class="header-anchor" href="#一、基础搭建" aria-hidden="true">#</a> 一、基础搭建</h2><img width="756" height="598" src="'+_+'" class="jop-noMdConv"><p>如上图所示， 初始化项目和安装react以后，我们打开vscode 开始搭建项目</p><p>初始搭建的代码这边我简单贴一下</p><img width="756" height="335" src="'+y+`" class="jop-noMdConv"><p>如图webpack的基本配置已经OK，代码为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack.config.base.js
 
const path = require(&quot;path&quot;);
// 根据相对路径获取绝对路径
const resolvePath = (relativePath) =&gt; path.resolve(__dirname, relativePath);
 
// 基础配置
const baseConfig = {
  // 入口文件
  entry: resolvePath(&quot;../src/index.tsx&quot;),
  // 出口文件
  output: {
    path: resolvePath(&quot;../dist&quot;),
    filename: &quot;[name].bundle.js&quot;,
  },
};
module.exports = {
  baseConfig,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后对应的开发环境和生产环境的webpack配置代码为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack.config.dev.js
 
// 合并规则
const { merge } = require(&quot;webpack-merge&quot;);
// 导入基础配置
const { baseConfig } = require(&quot;./webpack.config.base&quot;);
module.exports = merge(baseConfig, {
  // 环境设置：开发环境
  mode: &quot;development&quot;,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack.config.prod.js
 
// 合并规则
const { merge } = require(&quot;webpack-merge&quot;);
// 导入基础配置
const { baseConfig } = require(&quot;./webpack.config.base&quot;);
module.exports = merge(baseConfig, {
  // 环境配置：生产环境
  mode: &quot;production&quot;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack的入口文件：src/index.tsx
 
import React from &quot;react&quot;;
import ReactDOM from &quot;react-dom&quot;;
import &quot;./index.less&quot;;
import logo from &quot;./assets/logo.svg&quot;;
 
function App() {
  return (
    &lt;div className=&quot;App&quot;&gt;
      &lt;header className=&quot;App-header&quot;&gt;
        &lt;img src={logo} className=&quot;App-logo&quot; alt=&quot;logo&quot; /&gt;
        &lt;h1&gt; Webpack V5 + React &lt;/h1&gt;
      &lt;/header&gt;
    &lt;/div&gt;
  );
}
 
ReactDOM.render(&lt;App /&gt;, document.getElementById(&quot;root&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// less文件也贴一下吧：src/index.less
 
.App {
  text-align: center;
  .App-logo {
    width: 30vw;
    pointer-events: none;
    margin: 100px auto 10px;
  }
}
 
@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}
 
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// html模板文件 public/index.html
 
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;!-- 配置title的导入 --&gt;
  &lt;title&gt;&lt;%=htmlWebpackPlugin.options.title %&gt;&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本模板搭建搭建完以后，开始安装需要的包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、webpack的安装
yarn add webpack webpack-cli -D
yarn add webpack webpack-cli -g
 
// 2、把打包的文件配置到html模板
yarn add html-webpack-plugin -D
 
 
// 3、入口文件中涉及到了 less 的文件 需要增加配置
yarn add style-loader css-loader less less-loader -D
 
 
// 4、入口文件中涉及到了 ts 的文件 需要增加的babel配置
yarn add babel-loader @babel/core @babel/preset-env @babel/preset-react -D
 
 
// 5、入口文件还涉及 svg 图片，这里不用增加配置文件，webpack 已经内置了他的处理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完需要配置到基础配置里面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack.config.base.js
 
const path = require(&quot;path&quot;);
// 根据相对路径获取绝对路径
const resolvePath = (relativePath) =&gt; path.resolve(__dirname, relativePath);
// HTML模板
const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);
 
// 基础配置
const baseConfig = {
  // 入口文件
  entry: resolvePath(&quot;../src/index.tsx&quot;),
  // 出口文件
  output: {
    path: resolvePath(&quot;../dist&quot;),
    filename: &quot;[name].bundle.js&quot;,
  },
  // 所有loader的配置都在 module.rules 中
  module: {
    rules: [
      // 对css文件的处理
      // use里的loader如果有多个的情况下，切记执行顺序是：从下到上（或者从右到左）
      {
        test: /\\.css$/,
        use: [&quot;style-loader&quot;, &quot;css-loader&quot;],
      },
      // 对less文件的处理
      {
        test: /\\.less$/,
        use: [
          &quot;style-loader&quot;,
          &quot;css-loader&quot;,
          &quot;less-loader&quot;,
        ],
      },
      // 对ts|tsx文件的处理
      {
        test: /\\.(ts|tsx)$/,
        use: &quot;babel-loader&quot;,
      },
      // 对图片的处理
      {
        test: /\\.(svg|png|jpg|gif)$/,
        type: &quot;asset/resource&quot;,
      },
    ],
  },
  // 插件的处理
  plugins: [
    new HtmlWebpackPlugin({
      // title 配置
      title: &quot;Webpack V5 + React&quot;,
      // 模板导入
      template: resolvePath(&quot;../public/index.html&quot;),
      // 名称为
      filename: &quot;index.html&quot;,
    }),
  ],
};
module.exports = {
  baseConfig,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时还需要增加babel的配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// babel.config.json
{
  &quot;presets&quot;: [&quot;@babel/preset-react&quot;, &quot;@babel/preset-env&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后配置一下webpack的启动命令: build 和 serve</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// package.json
 
{
  &quot;name&quot;: &quot;webpack5-react&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;description&quot;: &quot;weback V5 + react &quot;,
  &quot;main&quot;: &quot;index.js&quot;,
  &quot;scripts&quot;: {
    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,
    &quot;build&quot;: &quot;webpack --config ./webpack/webpack.config.prod.js&quot;,
    &quot;serve&quot;: &quot;webpack-dev-server --config ./webpack/webpack.config.dev.js&quot;
  },
  &quot;author&quot;: &quot;ndz&quot;,
  &quot;license&quot;: &quot;MIT&quot;,
  &quot;dependencies&quot;: {
    &quot;react&quot;: &quot;^18.0.0&quot;,
    &quot;react-dom&quot;: &quot;^18.0.0&quot;
  },
  &quot;devDependencies&quot;: {
    &quot;html-webpack-plugin&quot;: &quot;^5.5.0&quot;,
    &quot;webpack&quot;: &quot;^5.70.0&quot;,
    &quot;webpack-cli&quot;: &quot;^4.9.2&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需serve命令时 咱们需要起一个服务需要安装：webpack-dev-server</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 安装webpack服务
yarn add webpack-dev-server -D
 
 
// 刚才还漏了一个配置合并的插件
yarn add webpack-merge -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完以后的配置如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 合并规则
const { merge } = require(&quot;webpack-merge&quot;);
// 导入基础配置
const { baseConfig } = require(&quot;./webpack.config.base&quot;);
module.exports = merge(baseConfig, {
  // 环境设置：开发环境
  mode: &quot;development&quot;,
  // 便于开发调试 这里开启source-map模式
  devtool: &quot;source-map&quot;,
  // webpack-dev-server 的一下配置，webpack-dev-server 会提供一个本地服务(serve)
  devServer: {
    // host
    host: &quot;127.0.0.1&quot;,
    // 端口
    port: 8000,
    // 热更新
    hot: true,
    // 启动时打开浏览器
    open: true,
  },
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后启动看一下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // 启动项目
yarn serve
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以发现目前所有配置OK 项目启动成功了。</p><img width="756" height="379" src="`+C+`" class="jop-noMdConv"><p>再看看打包成功与否。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//打包
yarn build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img width="756" height="712" src="`+M+'" class="jop-noMdConv"><p>可以看到打包完成以后，咱们的文件目录 dist 已经生成了。</p><h2 id="二、优化" tabindex="-1"><a class="header-anchor" href="#二、优化" aria-hidden="true">#</a> 二、优化</h2><p>接下咱们将针对打包做一下优化</p><p>现在咱们的js和css文件是被统一打包在一个文件(dist/main.bundle.js)里面，如图</p><img width="756" height="272" src="'+P+`" class="jop-noMdConv"><p>那么现在咱们需要单独对css做一些处理，首先安装需要的插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// css分包处理
yarn add mini-css-extract-plugin -D
 
// css压缩处理
yarn add css-minimizer-webpack-plugin -D
 
// 进一步处理css文件，比如添加浏览器前缀等
yarn add postcss-loader autoprefixer -D
 
// 统一安装
yarn add mini-css-extract-plugin css-minimizer-webpack-plugin postcss-loader autoprefixer -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完以后的配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 首先是基础配置
const path = require(&quot;path&quot;);
// 根据相对路径获取绝对路径
const resolvePath = (relativePath) =&gt; path.resolve(__dirname, relativePath);
// HTML模板
const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);
// css 代码打包分离
const MiniCssExtractPlugin = require(&quot;mini-css-extract-plugin&quot;);
 
 
// 基础配置
const baseConfig = {
  // 入口文件
  entry: resolvePath(&quot;../src/index.tsx&quot;),
  // 出口文件
  output: {
    path: resolvePath(&quot;../dist&quot;),
    filename: &quot;[name].bundle.js&quot;,
  },
  // 所有loader的配置都在 module.rules 中
  module: {
    rules: [
      // 对css文件的处理
      // use里的loader如果有多个的情况下，切记执行顺序是：从下到上（或者从右到左）
      // MiniCssExtractPlugin插件和style-loader冲突，所以这里用MiniCssExtractPlugin插件替换了style-loader
      {
        test: /\\.css$/,
        use: [MiniCssExtractPlugin.loader, &quot;css-loader&quot;, &quot;postcss-loader&quot;],
      },
      // 对less文件的处理
      {
        test: /\\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          &quot;css-loader&quot;,
          &quot;postcss-loader&quot;,
          &quot;less-loader&quot;,
        ],
      },
      // 对ts|tsx文件的处理
      {
        test: /\\.(ts|tsx)$/,
        use: &quot;babel-loader&quot;,
      },
      // 对图片的处理
      {
        test: /\\.(svg|png|jpg|gif)$/,
        type: &quot;asset/resource&quot;,
      },
    ],
  },
  // 插件的处理
  plugins: [
    new HtmlWebpackPlugin({
      // title 配置
      title: &quot;Webpack V5 + React&quot;,
      // 模板导入
      template: resolvePath(&quot;../public/index.html&quot;),
      // 名称为
      filename: &quot;index.html&quot;,
    }),
    new MiniCssExtractPlugin({
      filename: \`[name].[hash:8].css\`,
    }),
  ],
};
module.exports = {
  baseConfig,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要注意的是 postcss-loader 需要添加配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// postcss.config.js
 
// postcss配置文件
module.exports = {
  plugins: {
    autoprefixer: require(&quot;autoprefixer&quot;),
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后css文件的压缩只需要在生产环境配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack.config.prod.js
 
 
// 合并规则
const { merge } = require(&quot;webpack-merge&quot;);
// 压缩css文件
const CssMinimizerWebpackPlugin = require(&quot;css-minimizer-webpack-plugin&quot;);
// 导入基础配置
const { baseConfig } = require(&quot;./webpack.config.base&quot;);
module.exports = merge(baseConfig, {
  // 环境配置：生产环境
  mode: &quot;production&quot;,
  plugins:[
    new CssMinimizerWebpackPlugin()
  ]
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后build看一下效果</p><p><img src="`+S+`" alt="image.png"></p><p>可以看到 css 文件已经被单独抽取出来了</p><p>接下来再做两个配置，一个是错误提示，另一个是清理上一次的打包文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 错误提示
yarn add friendly-errors-webpack-plugin -D
 
 
// 清理上一次的打包
yarn add clean-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>错误提示我们是添加在开发环境的配置中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack.config.dev.js
 
 
// 合并规则
const { merge } = require(&quot;webpack-merge&quot;);
// 错误提示插件
const FriendlyErrorsWebpackPlugin = require(&quot;friendly-errors-webpack-plugin&quot;);
// 导入基础配置
const { baseConfig } = require(&quot;./webpack.config.base&quot;);
module.exports = merge(baseConfig, {
  // 环境设置：开发环境
  mode: &quot;development&quot;,
  // 便于开发调试 这里开启source-map模式
  devtool: &quot;source-map&quot;,
  // webpack-dev-server 的一下配置，webpack-dev-server 会提供一个本地服务(serve)
  devServer: {
    // host
    host: &quot;127.0.0.1&quot;,
    // 端口
    port: 8000,
    // 热更新
    hot: true,
    // 启动时打开浏览器
    open: true,
  },
  // 插件配置
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ],
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>清理上一次的打包文件是配置在生产环境中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack.config.prod.js
 
 
// 合并规则
const { merge } = require(&quot;webpack-merge&quot;);
// 清理原来的打包文件
const { CleanWebpackPlugin } = require(&quot;clean-webpack-plugin&quot;);
// 压缩css文件
const CssMinimizerWebpackPlugin = require(&quot;css-minimizer-webpack-plugin&quot;);
// 导入基础配置
const { baseConfig } = require(&quot;./webpack.config.base&quot;);
module.exports = merge(baseConfig, {
  // 环境配置：生产环境
  mode: &quot;production&quot;,
  plugins:[
    new CleanWebpackPlugin(),
    new CssMinimizerWebpackPlugin()
  ]
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此咱们的基本配置和优化就算完成了。</p><p>但......但是，对于我这种有追求的人怎么可能少了代码检查呢?!，所以接下来 咱们继续搞Eslint 的配置。</p><h2 id="三、eslint-配置" tabindex="-1"><a class="header-anchor" href="#三、eslint-配置" aria-hidden="true">#</a> 三、Eslint 配置</h2><p>这里我就把需要安装的都全部列出来 然后单个解释一下，然后贴配置代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack5 弃用了eslint-loader 支持了eslint-webpack-plugin
yarn add -D eslint-webpack-plugin
 
// eslint 和 prettier 结合校验
yarn add -D eslint prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier
 
// 一个可扩展的共享配置
yarn add -D eslint-config-airbnb-base
 
// 用于react的eslint规则
yarn add -D eslint-plugin-react
 
// typescript相关规则 详细说明：https://www.npmjs.com/package/@typescript-eslint/parser
yarn add -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
 
// 添加一些.eslintrc文件的扩展特性
yarn add -D standard eslint-plugin-promise eslint-plugin-node eslint-plugin-import eslint-plugin-standard eslint-config-standard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完以后配置如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 合并规则
const { merge } = require(&quot;webpack-merge&quot;);
// 错误提示插件
const FriendlyErrorsWebpackPlugin = require(&quot;friendly-errors-webpack-plugin&quot;);
// eslint插件
const ESLintPlugin = require(&quot;eslint-webpack-plugin&quot;);
// 导入基础配置
const { baseConfig } = require(&quot;./webpack.config.base&quot;);
module.exports = merge(baseConfig, {
  // 环境设置：开发环境
  mode: &quot;development&quot;,
  // 便于开发调试 这里开启source-map模式
  devtool:  &#39;source-map&#39;,
  // webpack-dev-server 的一下配置，webpack-dev-server 会提供一个本地服务(serve)
  devServer: {
    // host
    host: &#39;127.0.0.1&#39;,
    // 端口
    port: 8000,
    // 热更新
    hot: true,
    // 启动时打开浏览器
    open: true,
  },
  // 插件配置
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new ESLintPlugin({
      fix: true,
      extensions: [&quot;js&quot;, &quot;ts&quot;, &quot;tsx&quot;, &quot;json&quot;],
      exclude: &quot;/node_modules/&quot;,
    })
  ],
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.eslintrc.js文件 的配置如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 增加.eslintrc.js文件
 
 
module.exports = {
  // eslint的配置主要走的是：typescript-eslint
  // 详细内容请参阅：https://typescript-eslint.io/
  parser: &quot;@typescript-eslint/parser&quot;,
  // 可共享的配置 是一个npm包，输出的是一个配置对象。
  extends: [
    &quot;standard&quot;,
    &quot;eslint:recommended&quot;,
    &quot;plugin:react/recommended&quot;,
    &quot;plugin:@typescript-eslint/recommended&quot;,
    &quot;plugin:prettier/recommended&quot;,
    &quot;plugin:import/typescript&quot;,
  ],
  // 指定脚本的运行环境。每种环境都有一组特定的预约义全局变量。
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  // 输出的规则
  plugins: [&quot;react&quot;, &quot;prettier&quot;, &quot;@typescript-eslint&quot;],
  // 为特定类型的文件（ts、tsx）指定处理器。
  overrides: [
    {
      files: [&quot;*.ts&quot;, &quot;*.tsx&quot;],
      rules: {
        &quot;@typescript-eslint/no-unused-vars&quot;: [1, { args: &quot;none&quot; }],
      },
    },
  ],
  // 规则集，会覆盖extends中的规则
  rules: {
    // 语句强制分号结尾
    semi: [2, &quot;always&quot;],
    // 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头 （off 不强制要求写 propTypes）
    &quot;react/boolean-prop-naming&quot;: &quot;off&quot;,
    // 一个 defaultProps 必须有对应的 propTypes （）
    &quot;react/default-props-match-prop-types&quot;: &quot;off&quot;,
    // 组件必须有 displayName 属性 （off 不强制要求写 displayName）
    &quot;react/display-name&quot;: &quot;off&quot;,
    // 禁止在自定义组件中使用一些指定的 props （off 没必要限制）
    &quot;react/forbid-component-props&quot;: &quot;off&quot;,
    // 禁止使用一些指定的 elements （off 没必要限制）
    &quot;react/forbid-elements&quot;: &quot;off&quot;,
    // 禁止使用一些指定的 propTypes （off 不强制要求写 propTypes）
    &quot;react/forbid-prop-types&quot;: &quot;off&quot;,
    // 禁止直接使用别的组建的 propTypes （off 不强制要求写 propTypes）
    &quot;react/forbid-foreign-prop-types&quot;: &quot;off&quot;,
    // 禁止使用数组的 index 作为 key （off 不强制要求 太严格了！）
    &quot;react/no-array-index-key&quot;: &quot;off&quot;,
    // note you must disable the base rule as it can report incorrect errors
    &quot;no-use-before-define&quot;: &quot;off&quot;,
    &quot;@typescript-eslint/no-use-before-define&quot;: [&quot;off&quot;],
    &quot;@typescript-eslint/no-var-requires&quot;: 0,
    // 禁止使用 children 做 props
    &quot;react/no-children-prop&quot;: &quot;error&quot;,
    // 禁止使用 dangerouslySetInnerHTML （off 没必要限制）
    &quot;react/no-danger&quot;: &quot;off&quot;,
    // 禁止在使用了 dangerouslySetInnerHTML 的组建内添加 children
    &quot;react/no-danger-with-children&quot;: &quot;error&quot;,
    // 禁止使用已废弃的 api
    &quot;react/no-deprecated&quot;: &quot;error&quot;,
    // 禁止在 componentDidMount 里面使用 setState （off 同构应用需要在 didMount 里写 setState）
    &quot;react/no-did-mount-set-state&quot;: &quot;off&quot;,
    // 禁止在 componentDidUpdate 里面使用 setState
    &quot;react/no-did-update-set-state&quot;: &quot;error&quot;,
    // 禁止直接修改 this.state
    &quot;react/no-direct-mutation-state&quot;: &quot;error&quot;,
    // 禁止使用 findDOMNode
    &quot;react/no-find-dom-node&quot;: &quot;error&quot;,
    // 禁止使用 isMounted
    &quot;react/no-is-mounted&quot;: &quot;error&quot;,
    // 禁止在一个文件创建两个组件
    &quot;react/no-multi-comp&quot;: &quot;off&quot;,
    // 禁止在 PureComponent 中使用 shouldComponentUpdate
    &quot;react/no-redundant-should-component-update&quot;: &quot;error&quot;,
    // 禁止使用 ReactDOM.render 的返回值
    &quot;react/no-render-return-value&quot;: &quot;error&quot;,
    // 禁止使用 setState
    &quot;react/no-set-state&quot;: &quot;off&quot;,
    // 禁止拼写错误
    &quot;react/no-typos&quot;: &quot;error&quot;,
    // 禁止使用字符串 ref
    &quot;react/no-string-refs&quot;: &quot;error&quot;,
    // 禁止在组件的内部存在未转义的 &gt;, &quot;, &#39; 或 }
    &quot;react/no-unescaped-entities&quot;: &quot;error&quot;,
    // @fixable 禁止出现 HTML 中的属性，如 class
    &quot;react/no-unknown-property&quot;: &quot;error&quot;,
    // 禁止出现未使用的 propTypes
    &quot;react/no-unused-prop-types&quot;: &quot;off&quot;,
    // 定义过的 state 必须使用
    &quot;react/no-unused-state&quot;: &quot;off&quot;,
    // 禁止在 componentWillUpdate 中使用 setState
    &quot;react/no-will-update-set-state&quot;: &quot;error&quot;,
    // 必须使用 Class 的形式创建组件
    &quot;react/prefer-es6-class&quot;: [&quot;error&quot;, &quot;always&quot;],
    // 必须使用 pure function
    &quot;react/prefer-stateless-function&quot;: &quot;off&quot;,
    // 组件必须写 propTypes
    &quot;react/prop-types&quot;: &quot;off&quot;,
    // 出现 jsx 的地方必须 import React
    &quot;react/react-in-jsx-scope&quot;: &quot;off&quot;,
    // 非 required 的 prop 必须有 defaultProps
    &quot;react/require-default-props&quot;: &quot;off&quot;,
    // 组件必须有 shouldComponentUpdate
    &quot;react/require-optimization&quot;: &quot;off&quot;,
    // render 方法中必须有返回值
    &quot;react/require-render-return&quot;: &quot;error&quot;,
    // @fixable 组件内没有 children 时，必须使用自闭和写法
    &quot;react/self-closing-comp&quot;: &quot;off&quot;,
    // @fixable 组件内方法必须按照一定规则排序
    &quot;react/sort-comp&quot;: &quot;off&quot;,
    // propTypes 的熟悉必须按照字母排序
    &quot;react/sort-prop-types&quot;: &quot;off&quot;,
    // HTML 中的自闭和标签禁止有 children
    &quot;react/void-dom-elements-no-children&quot;: &quot;error&quot;,
    // @fixable 布尔值的属性必须显式的写 someprop={true}
    &quot;react/jsx-boolean-value&quot;: &quot;off&quot;,
    // @fixable 自闭和标签的反尖括号必须与尖括号的那一行对齐
    &quot;react/jsx-closing-bracket-location&quot;: [
      &quot;error&quot;,
      {
        nonEmpty: false,
        selfClosing: &quot;line-aligned&quot;,
      },
    ],
    // @fixable 结束标签必须与开始标签的那一行对齐
    &quot;react/jsx-closing-tag-location&quot;: &quot;off&quot;,
    // @fixable 大括号内前后禁止有空格
    &quot;react/jsx-curly-spacing&quot;: [
      &quot;error&quot;,
      {
        when: &quot;never&quot;,
        attributes: {
          allowMultiline: true,
        },
        children: true,
        spacing: {
          objectLiterals: &quot;never&quot;,
        },
      },
    ],
    // @fixable props 与 value 之间的等号前后禁止有空格
    &quot;react/jsx-equals-spacing&quot;: [&quot;error&quot;, &quot;never&quot;],
    // 限制文件后缀
    &quot;react/jsx-filename-extension&quot;: &quot;off&quot;,
    // @fixable 第一个 prop 必须得换行
    &quot;react/jsx-first-prop-new-line&quot;: &quot;off&quot;,
    // handler 的名称必须是 onXXX 或 handleXXX
    &quot;react/jsx-handler-names&quot;: &quot;off&quot;,
    // 数组中的 jsx 必须有 key
    &quot;react/jsx-key&quot;: &quot;error&quot;,
    // @fixable 限制每行的 props 数量
    &quot;react/jsx-max-props-per-line&quot;: &quot;off&quot;,
    // jsx 中禁止使用 bind
    &quot;react/jsx-no-bind&quot;: &quot;off&quot;,
    // 禁止在 jsx 中使用像注释的字符串
    &quot;react/jsx-no-comment-textnodes&quot;: &quot;error&quot;,
    // 禁止出现重复的 props
    &quot;react/jsx-no-duplicate-props&quot;: &quot;error&quot;,
    // 禁止在 jsx 中出现字符串
    &quot;react/jsx-no-literals&quot;: &quot;off&quot;,
    // 禁止使用 target=&quot;_blank&quot;
    &quot;react/jsx-no-target-blank&quot;: &quot;off&quot;,
    // 禁止使用未定义的 jsx elemet
    &quot;react/jsx-no-undef&quot;: &quot;error&quot;,
    // 禁止使用 pascal 写法的 jsx，比如 &lt;TEST_COMPONENT&gt;
    &quot;react/jsx-pascal-case&quot;: &quot;error&quot;,
    // @fixable props 必须排好序
    &quot;react/jsx-sort-props&quot;: &quot;off&quot;,
    // @fixable jsx 的开始和闭合处禁止有空格
    &quot;react/jsx-tag-spacing&quot;: [
      &quot;error&quot;,
      {
        closingSlash: &quot;never&quot;,
        beforeSelfClosing: &quot;always&quot;,
        afterOpening: &quot;never&quot;,
      },
    ],
    // jsx 文件必须 import React
    &quot;react/jsx-uses-react&quot;: &quot;error&quot;,
    // 定义了的 jsx element 必须使用
    &quot;react/jsx-uses-vars&quot;: &quot;error&quot;,
    // @fixable 多行的 jsx 必须有括号包起来
    &quot;react/jsx-wrap-multilines&quot;: &quot;off&quot;,
    // 消除未使用的变量，函数和函数的参数。
    &quot;no-unused-vars&quot;: &quot;off&quot;,
    // jsdoc语法检查
    &quot;valid-jsdoc&quot;: [
      &quot;error&quot;,
      {
        requireReturn: false,
      },
    ],
  },
  // 添加共享设置
  settings: {
    react: {
      version: &quot;detect&quot;,
    },
    polyfills: [&quot;fetch&quot;, &quot;promises&quot;, &quot;url&quot;],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 增加 eslint 需要忽略的校验文件：.eslintignore
 
.eslintrc.js
node_modules
dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完启动项目，发现确实报了很多错误，咱们恢复一下，如图：</p><p><img src="`+E+'" alt="1.gif"></p><p>这边我是对 vscode 做了配置，结合项目可以做到 保存（Ctrl + S）自动格式化。 关于vscode的配置如下</p><h2 id="四、vs-code-配置" tabindex="-1"><a class="header-anchor" href="#四、vs-code-配置" aria-hidden="true">#</a> 四、VS Code 配置</h2><p>首先在vscode中安装Eslint 插件</p><img width="756" height="420" src="'+F+`" class="jop-noMdConv"><p>然后打开配置文件（VSCode =&gt; 首选项 =&gt; 设置 =&gt; 用户设置 =&gt; 打开settings.json）做如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//对 VSCode settings.json 文件的配置
 
 
    // 保存时开启自动修复 默认只支持 .js 文件
    &quot;eslint.autoFixOnSave&quot;: true,
 
    // 为以下的文件类型开启保存自动修复
    &quot;eslint.validate&quot;: [
        &quot;javascriptreact&quot;,
        &quot;javascript&quot;,
        &quot;typescript&quot;,
        &quot;html&quot;,
        &quot;vue&quot;,
        {
          &quot;language&quot;: &quot;html&quot;,
          &quot;autoFix&quot;: true
        },
        {
            &quot;language&quot;: &quot;vue&quot;,
            &quot;autoFix&quot;: true
        },
        {
            &quot;language&quot;: &quot;ts&quot;,
            &quot;autoFix&quot;: true
        },
        {
            &quot;language&quot;: &quot;tsx&quot;,
            &quot;autoFix&quot;: true
        },
    ],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此配置完毕。之后如有更新继续加上</p><h1 id="后续补充" tabindex="-1"><a class="header-anchor" href="#后续补充" aria-hidden="true">#</a> 后续补充</h1><h2 id="一、resolve-配置" tabindex="-1"><a class="header-anchor" href="#一、resolve-配置" aria-hidden="true">#</a> 一、Resolve 配置</h2><p>这边在之后的开发中涉及到ts和tsx 文件，webpack默认只会查找js和json，因此不加后缀的情况下是搜索不到的。还有在搜索模块的时候，导入路劲太费劲，所以也可以加一个映射：@ 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//对 webpack.config.base.js 增加 resolve 配置

......

  // Resolve 配置 Webpack 如何寻找模块所对应的文件
  resolve: {
    // 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。  resolve.extensions用于配置在尝试过程中用到的后缀列表，默认是：js 和 json
    extensions: [&quot;.js&quot;, &quot;.ts&quot;, &quot;.tsx&quot;],
    // 配置项通过别名来把原导入路径映射成一个新的导入路径
    alias: {
      &quot;@&quot;: resolvePath(&quot;../src&quot;),
    },
  },

......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,166);function X(B,J){const n=a("ExternalLinkIcon");return r(),u("div",null,[W,e("p",null,[i("因为考虑到之后可能会有小伙伴不太了解webpack,所以这边就从最基础的搭建开始说起。这里贴一个webpack的中文文档链接: "),e("a",T,[i("webpack"),s(n)])]),L,e("p",null,[i("更详细的入口文件配置可参考官网文档："),e("a",$,[i("entry-points"),s(n)])]),A,e("p",null,[i("更详细的出口文件配置可参考官网文档："),e("a",H,[i("output"),s(n)])]),R,e("p",null,[i("更详细的 loader 文件配置可参考官网文档："),e("a",O,[i("loaders"),s(n)])]),N,e("p",null,[i("更详细的 plugins 文件配置可参考官网文档："),e("a",V,[i("plugins"),s(n)])]),z,e("p",null,[i("更详细的 plugins 文件配置可参考官网文档："),e("a",I,[i("plugins"),s(n)])]),U])}const Y=l(D,[["render",X],["__file","Webpack V5 _ React jiaoshoujiadepeizhi.html.vue"]]);export{Y as default};
