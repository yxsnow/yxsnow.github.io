import{_ as s,o as n,c as a,a as e}from"./app-ff2f634e.js";const t={},i=e(`<p>在TS的项目中，TS最终都会被编译JS文件执行，TS编译器在编译TS文件的时候都会先在项目根目录的<code>tsconfig.json</code>文件，根据该文件的配置进行编译，默认情况下，如果该文件没有任何配置，TS编译器会默认编译项目目录下所有的<code>.ts、.tsx、.d.ts</code>文件。实际项目中，会根据自己的需求进行自定义的配置，下面就来详细了解下<code>tsconfig.json</code>的文件配置。</p><h4 id="文件选项配置" tabindex="-1"><a class="header-anchor" href="#文件选项配置" aria-hidden="true">#</a> 文件选项配置</h4><ul><li><p><code>files</code> : 表示编译需要编译的单个文件列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;files&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
  // 指定编译文件是src目录下的a.ts文件
  <span class="token string">&quot;scr/a.ts&quot;</span>
<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>include</code>: 表示编译需要编译的文件或目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;include&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
  // <span class="token string">&quot;scr&quot;</span> // 会编译src目录下的所有文件，包括子目录
  // <span class="token string">&quot;scr/*&quot;</span> // 只会编译scr一级目录下的文件
  <span class="token string">&quot;scr/*/*&quot;</span> // 只会编译scr二级目录下的文件
<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>exclude</code>：表示编译器需要排除的文件或文件夹</p><blockquote><p>默认排除<code>node_modules</code>文件夹下文件</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;exclude&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
  // 排除src目录下的lib文件夹下的文件不会编译
  <span class="token string">&quot;src/lib&quot;</span>
<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>extends</code>: 引入其他配置文件，继承配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 把基础配置抽离成tsconfig.base.json文件，然后引入
<span class="token string">&quot;extends&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./tsconfig.base.json&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>compileOnSave</code>:设置保存文件的时候自动编译</p><blockquote><p>vscode暂不支持该功能，可以使用’Atom’编辑器</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;compileOnSave&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h4 id="编译选项配置" tabindex="-1"><a class="header-anchor" href="#编译选项配置" aria-hidden="true">#</a> 编译选项配置</h4><ul><li><p><code>compilerOptions</code>:配置编译选项</p><blockquote><p>编译选项配置非常繁杂，有很多配置，这里只列出常用的配置。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;compilerOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;incremental&quot;</span><span class="token builtin class-name">:</span> true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
  <span class="token string">&quot;tsBuildInfoFile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./buildFile&quot;</span>, // 增量编译文件的存储位置
  <span class="token string">&quot;diagnostics&quot;</span><span class="token builtin class-name">:</span> true, // 打印诊断信息 
  <span class="token string">&quot;target&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ES5&quot;</span>, // 目标语言的版本
  <span class="token string">&quot;module&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CommonJS&quot;</span>, // 生成代码的模板标准
  <span class="token string">&quot;outFile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./app.js&quot;</span>, // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置<span class="token string">&quot;module&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;AMD&quot;</span>,
  <span class="token string">&quot;lib&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;DOM&quot;</span>, <span class="token string">&quot;ES2015&quot;</span>, <span class="token string">&quot;ScriptHost&quot;</span>, <span class="token string">&quot;ES2019.Array&quot;</span><span class="token punctuation">]</span>, // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入<span class="token string">&quot;ES2019.Array&quot;</span>,
  <span class="token string">&quot;allowJS&quot;</span><span class="token builtin class-name">:</span> true, // 允许编译器编译JS，JSX文件
  <span class="token string">&quot;checkJs&quot;</span><span class="token builtin class-name">:</span> true, // 允许在JS文件中报错，通常与allowJS一起使用
  <span class="token string">&quot;outDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./dist&quot;</span>, // 指定输出目录
  <span class="token string">&quot;rootDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./&quot;</span>, // 指定输出文件目录<span class="token punctuation">(</span>用于输出<span class="token punctuation">)</span>，用于控制输出目录结构
  <span class="token string">&quot;declaration&quot;</span><span class="token builtin class-name">:</span> true, // 生成声明文件，开启后会自动生成声明文件
  <span class="token string">&quot;declarationDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./file&quot;</span>, // 指定生成声明文件存放目录
  <span class="token string">&quot;emitDeclarationOnly&quot;</span><span class="token builtin class-name">:</span> true, // 只生成声明文件，而不会生成js文件
  <span class="token string">&quot;sourceMap&quot;</span><span class="token builtin class-name">:</span> true, // 生成目标文件的sourceMap文件
  <span class="token string">&quot;inlineSourceMap&quot;</span><span class="token builtin class-name">:</span> true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
  <span class="token string">&quot;declarationMap&quot;</span><span class="token builtin class-name">:</span> true, // 为声明文件生成sourceMap
  <span class="token string">&quot;typeRoots&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>, // 声明文件目录，默认时node_modules/@types
  <span class="token string">&quot;types&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>, // 加载的声明文件包
  <span class="token string">&quot;removeComments&quot;</span>:true, // 删除注释 
  <span class="token string">&quot;noEmit&quot;</span><span class="token builtin class-name">:</span> true, // 不输出文件,即编译后不会生成任何js文件
  <span class="token string">&quot;noEmitOnError&quot;</span><span class="token builtin class-name">:</span> true, // 发送错误时不输出任何文件
  <span class="token string">&quot;noEmitHelpers&quot;</span><span class="token builtin class-name">:</span> true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
  <span class="token string">&quot;importHelpers&quot;</span><span class="token builtin class-name">:</span> true, // 通过tslib引入helper函数，文件必须是模块
  <span class="token string">&quot;downlevelIteration&quot;</span><span class="token builtin class-name">:</span> true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
  <span class="token string">&quot;strict&quot;</span><span class="token builtin class-name">:</span> true, // 开启所有严格的类型检查
  <span class="token string">&quot;alwaysStrict&quot;</span><span class="token builtin class-name">:</span> true, // 在代码中注入<span class="token string">&#39;use strict&#39;</span>
  <span class="token string">&quot;noImplicitAny&quot;</span><span class="token builtin class-name">:</span> true, // 不允许隐式的any类型
  <span class="token string">&quot;strictNullChecks&quot;</span><span class="token builtin class-name">:</span> true, // 不允许把null、undefined赋值给其他类型的变量
  <span class="token string">&quot;strictFunctionTypes&quot;</span><span class="token builtin class-name">:</span> true, // 不允许函数参数双向协变
  <span class="token string">&quot;strictPropertyInitialization&quot;</span><span class="token builtin class-name">:</span> true, // 类的实例属性必须初始化
  <span class="token string">&quot;strictBindCallApply&quot;</span><span class="token builtin class-name">:</span> true, // 严格的bind/call/apply检查
  <span class="token string">&quot;noImplicitThis&quot;</span><span class="token builtin class-name">:</span> true, // 不允许this有隐式的any类型
  <span class="token string">&quot;noUnusedLocals&quot;</span><span class="token builtin class-name">:</span> true, // 检查只声明、未使用的局部变量<span class="token punctuation">(</span>只提示不报错<span class="token punctuation">)</span>
  <span class="token string">&quot;noUnusedParameters&quot;</span><span class="token builtin class-name">:</span> true, // 检查未使用的函数参数<span class="token punctuation">(</span>只提示不报错<span class="token punctuation">)</span>
  <span class="token string">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token builtin class-name">:</span> true, // 防止switch语句贯穿<span class="token punctuation">(</span>即如果没有break语句后面不会执行<span class="token punctuation">)</span>
  <span class="token string">&quot;noImplicitReturns&quot;</span><span class="token builtin class-name">:</span> true, //每个分支都会有返回值
  <span class="token string">&quot;esModuleInterop&quot;</span><span class="token builtin class-name">:</span> true, // 允许export<span class="token operator">=</span>导出，由import from 导入
  <span class="token string">&quot;allowUmdGlobalAccess&quot;</span><span class="token builtin class-name">:</span> true, // 允许在模块中全局变量的方式访问umd模块
  <span class="token string">&quot;moduleResolution&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;node&quot;</span>, // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
  <span class="token string">&quot;baseUrl&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./&quot;</span>, // 解析非相对模块的基地址，默认是当前目录
  <span class="token string">&quot;paths&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> // 路径映射，相对于baseUrl
    // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置
    <span class="token string">&quot;jquery&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules/jquery/dist/jquery.min.js&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;rootDirs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src&quot;</span>,<span class="token string">&quot;out&quot;</span><span class="token punctuation">]</span>, // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
  <span class="token string">&quot;listEmittedFiles&quot;</span><span class="token builtin class-name">:</span> true, // 打印输出文件
  <span class="token string">&quot;listFiles&quot;</span><span class="token builtin class-name">:</span> true// 打印编译的文件<span class="token punctuation">(</span>包括引用的声明文件<span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* Basic Options */</span>
    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2017&quot;</span><span class="token punctuation">,</span> <span class="token comment">/* Specify ECMAScript target version: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;,&#39;ES2018&#39; or &#39;ESNEXT&#39;. */</span>
    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span> <span class="token comment">/* Specify module code generation: &#39;none&#39;, &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39;, &#39;es2015&#39;, or &#39;ESNext&#39;. */</span>
    <span class="token comment">// &quot;lib&quot;: [],                             /* Specify library files to be included in the compilation. */</span>
    <span class="token comment">// &quot;allowJs&quot;: true,                       /* Allow javascript files to be compiled. */</span>
    <span class="token comment">// &quot;checkJs&quot;: true,                       /* Report errors in .js files. */</span>
    <span class="token comment">// &quot;jsx&quot;: &quot;preserve&quot;,                     /* Specify JSX code generation: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;. */</span>
    <span class="token comment">// &quot;declaration&quot;: true,                   /* Generates corresponding &#39;.d.ts&#39; file. */</span>
    <span class="token comment">// &quot;declarationMap&quot;: true,                /* Generates a sourcemap for each corresponding &#39;.d.ts&#39; file. */</span>
    <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                     <span class="token comment">/* Generates corresponding &#39;.map&#39; file. */</span>
    <span class="token comment">// &quot;outFile&quot;: &quot;./&quot;,                       /* Concatenate and emit output to single file. */</span>
    <span class="token string-property property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span>                        <span class="token comment">/* Redirect output structure to the directory. */</span>
    <span class="token comment">// &quot;rootDir&quot;: &quot;./&quot;,                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */</span>
    <span class="token comment">// &quot;composite&quot;: true,                     /* Enable project compilation */</span>
    <span class="token comment">// &quot;removeComments&quot;: true,                /* Do not emit comments to output. */</span>
    <span class="token comment">// &quot;noEmit&quot;: true,                        /* Do not emit outputs. */</span>
    <span class="token comment">// &quot;importHelpers&quot;: true,                 /* Import emit helpers from &#39;tslib&#39;. */</span>
    <span class="token comment">// &quot;downlevelIteration&quot;: true,            /* Provide full support for iterables in &#39;for-of&#39;, spread, and destructuring when targeting &#39;ES5&#39; or &#39;ES3&#39;. */</span>
    <span class="token comment">// &quot;isolatedModules&quot;: true,               /* Transpile each file as a separate module (similar to &#39;ts.transpileModule&#39;). */</span>
    <span class="token comment">/* Strict Type-Checking Options */</span>
    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">/* Enable all strict type-checking options. */</span>
    <span class="token comment">// &quot;noImplicitAny&quot;: true,                 /* Raise error on expressions and declarations with an implied &#39;any&#39; type. */</span>
    <span class="token comment">// &quot;strictNullChecks&quot;: true,              /* Enable strict null checks. */</span>
    <span class="token comment">// &quot;strictFunctionTypes&quot;: true,           /* Enable strict checking of function types. */</span>
    <span class="token comment">// &quot;strictPropertyInitialization&quot;: true,  /* Enable strict checking of property initialization in classes. */</span>
    <span class="token comment">// &quot;noImplicitThis&quot;: true,                /* Raise error on &#39;this&#39; expressions with an implied &#39;any&#39; type. */</span>
    <span class="token comment">// &quot;alwaysStrict&quot;: true,                  /* Parse in strict mode and emit &quot;use strict&quot; for each source file. */</span>
    <span class="token comment">/* Additional Checks */</span>
    <span class="token comment">// &quot;noUnusedLocals&quot;: true,                /* Report errors on unused locals. */</span>
    <span class="token comment">// &quot;noUnusedParameters&quot;: true,            /* Report errors on unused parameters. */</span>
    <span class="token comment">// &quot;noImplicitReturns&quot;: true,             /* Report error when not all code paths in function return a value. */</span>
    <span class="token comment">// &quot;noFallthroughCasesInSwitch&quot;: true,    /* Report errors for fallthrough cases in switch statement. */</span>
    <span class="token comment">/* Module Resolution Options */</span>
    <span class="token comment">// &quot;moduleResolution&quot;: &quot;node&quot;,            /* Specify module resolution strategy: &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6). */</span>
    <span class="token comment">// &quot;baseUrl&quot;: &quot;./&quot;, /* Base directory to resolve non-absolute module names. */</span>
    <span class="token comment">// &quot;paths&quot;: {</span>
    <span class="token comment">//   &quot;src/*&quot;: [&quot;src/*&quot;],</span>
    <span class="token comment">// }, /* A series of entries which re-map imports to lookup locations relative to the &#39;baseUrl&#39;. */</span>
    <span class="token comment">// &quot;rootDirs&quot;: [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */</span>
    <span class="token string-property property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./node_modules/@types&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./src/types&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                       <span class="token comment">/* List of folders to include type definitions from. */</span>
    <span class="token comment">// &quot;types&quot;: [],                           /* Type declaration files to be included in compilation. */</span>
    <span class="token comment">// &quot;allowSyntheticDefaultImports&quot;: true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */</span>
    <span class="token string-property property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">/* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies &#39;allowSyntheticDefaultImports&#39;. */</span>
    <span class="token comment">// &quot;preserveSymlinks&quot;: true,              /* Do not resolve the real path of symlinks. */</span>
    <span class="token comment">/* Source Map Options */</span>
    <span class="token comment">// &quot;sourceRoot&quot;: &quot;&quot;,                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */</span>
    <span class="token comment">// &quot;mapRoot&quot;: &quot;&quot;,                         /* Specify the location where debugger should locate map files instead of generated locations. */</span>
    <span class="token comment">// &quot;inlineSourceMap&quot;: true,               /* Emit a single file with source maps instead of having a separate file. */</span>
    <span class="token comment">// &quot;inlineSources&quot;: true,                 /* Emit the source alongside the sourcemaps within a single file; requires &#39;--inlineSourceMap&#39; or &#39;--sourceMap&#39; to be set. */</span>
    <span class="token comment">/* Experimental Options */</span>
    <span class="token comment">// &quot;experimentalDecorators&quot;: true,        /* Enables experimental support for ES7 decorators. */</span>
    <span class="token comment">// &quot;emitDecoratorMetadata&quot;: true,         /* Enables experimental support for emitting type metadata for decorators. */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;src/**/*&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;src/**/*.test.ts&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="工程引用配置" tabindex="-1"><a class="header-anchor" href="#工程引用配置" aria-hidden="true">#</a> 工程引用配置</h4><ul><li><p><code>references</code> 指定工程引用依赖</p><blockquote><p>在项目开发中，有时候我们为了方便将前端项目和后端<code>node</code>项目放在同一个目录下开发，两个项目依赖同一个配置文件和通用文件，但我们希望前后端项目进行灵活的分别打包，那么我们可以进行如下配置：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Project
  - src
    - client //客户端项目
      - index.ts // 客户端项目文件
      - tsconfig.json // 客户端配置文件
        <span class="token punctuation">{</span>
          <span class="token string">&quot;extends&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;../../tsconfig.json&quot;</span>, // 继承基础配置
          <span class="token string">&quot;compilerOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;outDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;../../dist/client&quot;</span>, // 指定输出目录
          <span class="token punctuation">}</span>,
          <span class="token string">&quot;references&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> // 指定依赖的工程
            <span class="token punctuation">{</span><span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./common&quot;</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    - common // 前后端通用依赖工程
      - index.ts  // 前后端通用文件
      - tsconfig.json // 前后端通用代码配置文件
        <span class="token punctuation">{</span>
          <span class="token string">&quot;extends&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;../../tsconfig.json&quot;</span>, // 继承基础配置
          <span class="token string">&quot;compilerOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;outDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;../../dist/client&quot;</span>, // 指定输出目录
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    - server // 服务端项目
      - index.ts // 服务端项目文件
      - tsconfig.json // 服务端项目配置文件
        <span class="token punctuation">{</span>
          <span class="token string">&quot;extends&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;../../tsconfig.json&quot;</span>, // 继承基础配置
          <span class="token string">&quot;compilerOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;outDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;../../dist/server&quot;</span>, // 指定输出目录
          <span class="token punctuation">}</span>,
          <span class="token string">&quot;references&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> // 指定依赖的工程
            <span class="token punctuation">{</span><span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./common&quot;</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
  - tsconfig.json // 前后端项目通用基础配置
    <span class="token punctuation">{</span>
      <span class="token string">&quot;compilerOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;target&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;es5&quot;</span>,
        <span class="token string">&quot;module&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;commonjs&quot;</span>,
        <span class="token string">&quot;strict&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;composite&quot;</span><span class="token builtin class-name">:</span> true, // 增量编译
        <span class="token string">&quot;declaration&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样配置以后，就可以单独的构建前后端项目。</p><ul><li>前端项目构建</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc <span class="token parameter variable">-v</span> src/client 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>后端项目构建</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc <span class="token parameter variable">-b</span> src/server 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>输出目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Project
 - dist 
  - client
    - index.js
    - index.d.ts
  - common
    - index.js
    - index.d.ts
  - server
    - index.js
    - index.d.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,8),o=[i];function l(c,p){return n(),a("div",null,o)}const r=s(t,[["render",l],["__file","xiangjieTypeScriptxiangmuzhongdetsconfig.jsonpeizhi.html.vue"]]);export{r as default};
