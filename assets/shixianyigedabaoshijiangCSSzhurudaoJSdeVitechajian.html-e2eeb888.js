import{_ as l,r as c,o as a,c as v,b as n,d as e,e as d,a as s}from"./app-ff2f634e.js";const r="/assets/v2-3a15022b380b8b6f3e2750a3b1b28_2076054ad67d41039-bfebd2e8.webp",t="/assets/v2-a09329c4101f5515cb255260c580d_0b82af20348245168-80edc95a.webp",u="/assets/v2-d6ccd988b7dded9f8ac53c697f491_25c9920e533543c38-1a31265f.webp",o="/assets/v2-3368e55eb4658438d88c1f5ef8b1a_8c7a35512e5748d19-62f6e632.webp",m="/assets/v2-1c97ddf77b0ee72579083a0b1619c_0947de072a3e409e8-63bd45e8.webp",b="/assets/v2-69539b1f976f9168f46f51cb49c51_94d65148aa4947e3b-a05c7ce7.webp",p="/assets/v2-16e7711a0baace8499a1e857a098a_992c57f3b9c543438-84b7eaa5.webp",h={},g=s('<p><code>Vite</code> 在2.0版本提供了<strong>Library Mode</strong>（库模式），让开发者可以使用<code>Vite</code>来构建自己的库以发布使用。正好我准备封装一个React组件并将其发布为npm包以供日后方便使用，同时之前也体验到了使用<code>Vite</code>带来的快速体验，于是便使用<code>Vite</code>进行开发。</p><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3><p>在开发完成后进行打包，出现了如图三个文件：</p><img width="690" height="158" src="'+r+`"><p>Image.png</p><p>其中的<code>style.css</code>文件里面包含了该组件的所有样式，如果该文件单独出现的话，意味着在使用时需要进行单独引入该样式文件，就像使用组件库时需在主文件引入其样式一样。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import xxxComponent from &#39;xxx-component&#39;;
import &#39;xxx-component/dist/xxx.css&#39;; // 引入样式 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但我封装的只是单一组件，样式不多且只应用于该组件上，没有那么复杂的样式系统。</p><p>所以打包时比较好的做法是配置构建工具将样式注入到<strong>JS文件</strong>中，从而无需再多一行引入语句。我们知道<code>Webpack</code>打包是可以进行配置来通过一个<strong>自执行函数</strong>在DOM上创建<code>style</code>标签并将CSS注入其中，最后只输出<strong>JS文件</strong>，但在<code>Vite</code>的官方文档中似乎并没有告诉我们怎么去配置。</p><p>让我们先来看一下官方提供的配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// vite.config.js 

import { resolve } from &#39;path&#39;
import { defineConfig } from &#39;vite&#39;

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, &#39;lib/main.js&#39;),
      name: &#39;MyLib&#39;,
      // the proper extensions will be added 

      fileName: &#39;my-lib&#39;
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn&#39;t be bundled 

      // into your library 

      external: [&#39;vue&#39;],
      output: {
        // Provide global variables to use in the UMD build 

        // for externalized deps 

        globals: {
          vue: &#39;Vue&#39;
        }
      }
    }
  }
}) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),f=n("code",null,"build.lib",-1),y=n("code",null,"Vite",-1),k=n("code",null,"rollup",-1),_=n("code",null,"Vue",-1),x=n("code",null,"React",-1),C=n("code",null,"React",-1),S=n("code",null,"React",-1),I=n("code",null,"external",-1),V=n("code",null,"output",-1),j=n("strong",null,"umd",-1),P=n("code",null,"build.lib.formats",-1),N={href:"https://link.zhihu.com/?target=https%3A//github.com/umdjs/umd",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"script",-1),w={href:"https://link.zhihu.com/?target=https%3A//vitejs.dev/config/build-options.html%23build-lib",target:"_blank",rel:"noopener noreferrer"},A=s('<p>配置完上述提及到的后，我接着寻找与打包样式相关的内容，然而并没有发现。。。</p><p><img src="'+t+'" alt=""></p><p>7625CB0E-F4E2-4AC2-BFFC-DC8C00CD604C.jpeg</p><p>没关系，我们还可以去仓库<code>[issues](https://link.zhihu.com/?target=https%3A//github.com/vitejs/vite/issues/1579)</code>看看，说不定有人也发现了这个问题。搜索后果不其然，底下竟有高达47条评论：</p><img width="690" height="55" src="'+u+'"><p>Image.png</p><p>点进去后，提问者问到如何才能不生成CSS文件，尤回答说：进行样式注入的DOM环境会产生服务端渲染的不兼容问题，如果CSS代码不多，使用<strong>行内样式</strong>进行解决。</p><img width="690" height="227" src="'+o+'"><p>Image.png</p><p>这个回答显然不能让很多人满意（这可能是该issue关闭后又重新打开的原因），因为带样式的库在编写过程中几乎不会采用行内的写法，提问者也回复说道那样自己就不能使用模块化的<code>Less</code>了，依旧希望能够给出更多的库模式<code>options</code>，然后下面都各抒己见，但都没有一种很好的解决方案被提出。</p><p>因此，为了解决我自己的问题，我决定写一个插件。</p><h3 id="vite-plugin-api" tabindex="-1"><a class="header-anchor" href="#vite-plugin-api" aria-hidden="true">#</a> Vite Plugin API</h3><p><code>Vite</code>插件提供的API实际上是一些<code>hook</code>，其划分为<code>Vite</code>独有hook和通用hook（<code>Rollup</code>的hook，由<code>Vite</code>插件容器进行调用）。这些hook执行的顺序为：</p><ul><li>Alias</li><li>带有 <code>enforce: &#39;pre&#39;</code> 的用户插件</li><li>Vite 核心插件</li><li>没有 enforce 值的用户插件</li><li>Vite 构建用的插件</li><li>带有 <code>enforce: &#39;post&#39;</code> 的用户插件</li><li>Vite 后置构建插件（最小化，manifest，报告）</li></ul><p><code>Vite</code>核心插件基本上是独有hook，主要用于配置解析，构建插件基本上都是<code>Rollup</code>的hook，这才是真正起构建作用的hook，而我们现在想要将获取构建好的CSS和JS产物并将其合二为一，所以编写的插件执行顺序应该在构建的插件执行之后，也就是‘**带有 <code>enforce: &#39;post&#39;</code> 的用户插件’（输出阶段）**这一阶段执行。</p>',15),E=n("code",null,"Rollup",-1),J={href:"https://link.zhihu.com/?target=https%3A//rollupjs.org/guide/en/%23output-generation-hooks",target:"_blank",rel:"noopener noreferrer"},z=s('<img width="690" height="1136" src="'+m+`"><p>Image.png</p><p>根据上图可以看到输出阶段钩子的执行顺序及其特性，而我们只需要在写入之前拿到输出的产物进行拼接，因此就得用到上面的<code>generateBundle</code>这个hook。</p><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><p>官方推荐编写的插件是一个返回<strong>实际插件对象</strong>的工厂函数，这样做的话可以允许用户传入配置选项作为参数来自定义插件行为。</p><p>基本结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import type { Plugin } from &#39;vite&#39;;

function VitePluginStyleInject(): Plugin {

  return {
    name: &#39;vite-plugin-style-inject&#39;,
    apply: &#39;build&#39;, // 应用模式 

    enforce: &#39;post&#39;, // 作用阶段 

    generateBundle(_, bundle) {

    }
  };
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Vite</code>默认的<code>formats</code>有<strong>es</strong>和<strong>umd</strong>两种格式，假设不修改该配置将会有两个<code>Bundle</code>产生，<code>generateBundle</code>钩子也就会执行两次，其方法的签名及其参数类型为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type generateBundle = (options: OutputOptions, bundle: { [fileName: string]: AssetInfo | ChunkInfo }, isWrite: boolean) =&gt; void;

type AssetInfo = {
  fileName: string;
  name?: string;
  source: string | Uint8Array;
  type: &#39;asset&#39;;
};

type ChunkInfo = {
  code: string;
  dynamicImports: string[];
  exports: string[];
  facadeModuleId: string | null;
  fileName: string;
  implicitlyLoadedBefore: string[];
  imports: string[];
  importedBindings: { [imported: string]: string[] };
  isDynamicEntry: boolean;
  isEntry: boolean;
  isImplicitEntry: boolean;
  map: SourceMap | null;
  modules: {
    [id: string]: {
      renderedExports: string[];
      removedExports: string[];
      renderedLength: number;
      originalLength: number;
      code: string | null;
    };
  };
  name: string;
  referencedFiles: string[];
  type: &#39;chunk&#39;;
}; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们只用到其中的<code>bundle</code>参数，它是一个键由<strong>文件名字符串</strong>值为<code>AssetInfo</code>或<code>ChunkInfo</code>组成的对象，其中一段的内容如下：</p><img width="690" height="269" src="`+b+`"><p>Image.png</p><p>上图看出CSS文件的值属于<code>AssetInfo</code>，我们先遍历<code>bundle</code>找到该CSS部分把<code>source</code>值提取出来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import type { Plugin } from &#39;vite&#39;;

function VitePluginStyleInject(): Plugin {
  let styleCode = &#39;&#39;;

  return {
    name: &#39;vite-plugin-style-inject&#39;,
    apply: &#39;build&#39;, // 应用模式 

    enforce: &#39;post&#39;, // 作用阶段 

    generateBundle(_, bundle) {
      // + 遍历bundle 

      for (const key in bundle) {
        if (bundle[key]) {
          const chunk = bundle[key]; // 拿到文件名对应的值 

          // 判断+提取+移除 

          if (chunk.type === &#39;asset&#39; &amp;&amp; chunk.fileName.includes(&#39;.css&#39;)) {
            styleCode += chunk.source;
            delete bundle[key];
          }
        }
      }
    }
  };
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在<code>styleCode</code>存储的就是构建后的所有CSS代码，因此我们需要一个能够实现创建style标签并将<code>styleCode</code>添加其中的自执行函数，然后把它插入到其中一个符合条件的<code>ChunkInfo.code</code>当中即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import type { Plugin } from &#39;vite&#39;;

function VitePluginStyleInject(): Plugin {
  let styleCode = &#39;&#39;;

  return {
    name: &#39;vite-plugin-style-inject&#39;,
    apply: &#39;build&#39;, // 应用模式 

    enforce: &#39;post&#39;, // 作用阶段 

    generateBundle(_, bundle) {
      // 遍历bundle 

      for (const key in bundle) {
        if (bundle[key]) {
          const chunk = bundle[key]; // 拿到文件名对应的值 

          // 判断+提取+移除 

          if (chunk.type === &#39;asset&#39; &amp;&amp; chunk.fileName.includes(&#39;.css&#39;)) {
            styleCode += chunk.source;
            delete bundle[key];
          }
        }
      }

      // + 重新遍历bundle，一次遍历无法同时实现提取注入，例如&#39;style.css&#39;是bundle的最后一个键 

      for (const key in bundle) {
        if (bundle[key]) {
          const chunk = bundle[key];
          // 判断是否是JS文件名的chunk 

          if (chunk.type === &#39;chunk&#39; &amp;&amp;
            chunk.fileName.match(/.[cm]?js$/) !== null &amp;&amp;
            !chunk.fileName.includes(&#39;polyfill&#39;)
          ) {
            const initialCode = chunk.code; // 保存原有代码 

            // 重新赋值 

            chunk.code = &#39;(function(){ try {var elementStyle = document.createElement(\\&#39;style\\&#39;); elementStyle.appendChild(document.createTextNode(&#39;;
            chunk.code += JSON.stringify(styleCode.trim());
            chunk.code += &#39;)); &#39;;
            chunk.code += &#39;document.head.appendChild(elementStyle);} catch(e) {console.error(\\&#39;vite-plugin-css-injected-by-js\\&#39;, e);} })();&#39;;
            // 拼接原有代码 

            chunk.code += initialCode;
            break; // 一个bundle插入一次即可 

          }
        }
      }
    }
  };
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，我们给这个<code>style</code>标签加上<strong>id属性</strong>以方便用户获取操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import type { Plugin } from &#39;vite&#39;;

// - function VitePluginStyleInject(): Plugin { 

function VitePluginStyleInject(styleId: &#39;&#39;): Plugin {
  let styleCode = &#39;&#39;;

  return {
    name: &#39;vite-plugin-style-inject&#39;,
    apply: &#39;build&#39;, // 应用模式 

    enforce: &#39;post&#39;, // 作用阶段 

    generateBundle(_, bundle) {
      // 遍历bundle 

      for (const key in bundle) {
        if (bundle[key]) {
          const chunk = bundle[key]; // 拿到文件名对应的值 

          // 判断+提取+移除 

          if (chunk.type === &#39;asset&#39; &amp;&amp; chunk.fileName.includes(&#39;.css&#39;)) {
            styleCode += chunk.source;
            delete bundle[key];
          }
        }
      }

      // 重新遍历bundle，一次遍历无法同时实现提取注入，例如&#39;style.css&#39;是bundle的最后一个键 

      for (const key in bundle) {
        if (bundle[key]) {
          const chunk = bundle[key];
          // 判断是否是JS文件名的chunk 

          if (chunk.type === &#39;chunk&#39; &amp;&amp;
            chunk.fileName.match(/.[cm]?js$/) !== null &amp;&amp;
            !chunk.fileName.includes(&#39;polyfill&#39;)
          ) {
            const initialCode = chunk.code; // 保存原有代码 

            // 重新赋值 

            chunk.code = &#39;(function(){ try {var elementStyle = document.createElement(\\&#39;style\\&#39;); elementStyle.appendChild(document.createTextNode(&#39;;
            chunk.code += JSON.stringify(styleCode.trim());
            chunk.code += &#39;)); &#39;;
            // + 判断是否添加id 

            if (styleId.length &gt; 0)
              chunk.code += \` elementStyle.id = &quot;\${styleId}&quot;; \`;
            chunk.code += &#39;document.head.appendChild(elementStyle);} catch(e) {console.error(\\&#39;vite-plugin-css-injected-by-js\\&#39;, e);} })();&#39;;
            // 拼接原有代码 

            chunk.code += initialCode;
            break; // 一个bundle插入一次即可 

          }
        }
      }
    }
  };
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，这个插件就写好了，是不是很简单。</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>在项目中使用该插件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// vite.config.js 

import { defineConfig } from &#39;vite&#39;;
import VitePluginStyleInject from &#39;vite-plugin-style-inject&#39;;

export default defineConfig({
  plugins: [VitePluginStyleInject()],
}) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行构建命令后，只输出两个文件：</p><img width="690" height="135" src="`+p+'"><p>Image.png</p><p>引入打包后的文件发现其能正常运行，终于搞定啦～</p>',26);function L(M,D){const i=c("ExternalLinkIcon");return a(),v("div",null,[g,n("p",null,[e("首先要开启"),f,e("选项，配置入口文件和文件名等基本配置，由于"),y,e("生产模式下打包采用的是"),k,e("，所以需要开启相关选项，当我们的库是由"),_,e("或"),x,e("编写的时候，使用的时候一般也是在该环境下，例如我的这个组件是基于"),C,e("进行编写，那么使用时无疑也是在"),S,e("中进行引入，这样就会造成产物冗余，所以需要在"),I,e("配置中添加上外部化的依赖，以在打包时给剔除掉。"),V,e("选项是输出产物为"),j,e("格式时（具体格式查看"),P,e("选项，umd为**"),n("a",N,[e("Universal Module Definition"),d(i)]),e("**，可以直接"),B,e("标签引入使用，所以需要提供一个全局变量）。")]),n("p",null,[n("a",w,[e("Vite"),d(i)])]),A,n("p",null,[e("打开"),E,e("官网，里面的"),n("a",J,[e("输出钩子部分"),d(i)]),e("有这么一张图：")]),z])}const R=l(h,[["render",L],["__file","shixianyigedabaoshijiangCSSzhurudaoJSdeVitechajian.html.vue"]]);export{R as default};
