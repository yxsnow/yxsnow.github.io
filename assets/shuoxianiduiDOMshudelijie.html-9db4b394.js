import{_ as i,o as l,c as e,a as n}from"./app-ff2f634e.js";const d={},a=n(`<ul><li><p>概念：DOM 是表述 HTML 的内部数据结构，它会将 Web 页面和 JavaScript 脚本连接起来，并过滤一些不安全的内容。</p></li><li><p>DOM 的生成：通过浏览器渲染引擎内部的 HTML 解析器，将 HTML 字节流转换为 DOM 结构</p><ul><li>HTML 解析器并不是等整个文档加载完成之后再解析的，而是网络进程加载了多少数据，HTML 解析器便解析多少数据</li></ul></li><li><p>DOM 生成简单过程：HTML 字节流 -&gt; 分词器 -&gt; DOM 节点 -&gt; DOM 树节点</p><ul><li>通过分词器将字节流转换为 Token。（有点类似于虚拟 DOM 的结构）</li><li>至于后续的第二个和第三个阶段是同步进行的，需要将 Token 解析为 DOM 节点，并将 DOM 节点添加到 DOM 树中。</li></ul></li></ul><h3 id="知识拓展" tabindex="-1"><a class="header-anchor" href="#知识拓展" aria-hidden="true">#</a> 知识拓展</h3><ul><li><p>JavaScript 文件的下载过程会阻塞 DOM 解析</p></li><li><p>优化 JavaScript 影响 DOM 树生成的策略：</p><ul><li>CDN 来加速 JavaScript 文件的加载</li><li>压缩 JavaScript 文件的体积</li><li>异步加载 <ul><li>defer：脚本并行加载，等待HTML解析完成之后，按照加载顺序执行脚本，执行时机在DOMContentLoaded事件派发之前</li><li>async：使用 async 标志的脚本文件一旦加载完成，会立即执行，执行时机不确定，仍有可能阻塞HTML解析，执行时机在load事件派发之前</li></ul></li></ul></li><li><p>DOM 树在浏览器内部生成是用的什么算法</p><ul><li>DFS（深度优先算法）：可以参考<code>chromium 源码-dom 渲染</code></li><li>C++ 代码示例：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// In C++

// Traverse a children.
for (Node* child = parent.firstChild(); child; child = child-&gt;nextSibling()) {
  ...
}

// ...

// Traverse nodes in tree order, depth-first traversal.
void foo(const Node&amp; node) {
  ...
  for (Node* child = node.firstChild(); child; child = child-&gt;nextSibling()) {
    foo(*child);  // Recursively
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>HTML 解析器维护了一个 Token 栈结构，该 Token 栈主要用来计算节点之间的父子关系，在第一个阶段中生成的 Token 会被按照顺序压到这个栈中。具体的处理规则如下所示： <ul><li>如果压入到栈中的是 StartTag Token，HTML 解析器会为该 Token 创建一个 DOM 节点，然后将该节点加入到 DOM 树中，它的父节点就是栈中相邻的那个元素生成的节点。</li><li>如果分词器解析出来是文本 Token，那么会生成一个文本节点，然后将该节点加入到 DOM 树中，文本 Token 是不需要压入到栈中，它的父节点就是当前栈顶 Token 所对应的 DOM 节点。</li><li>如果分词器解析出来的是 EndTag 标签，比如是 EndTag div，HTML 解析器会查看 Token 栈顶的元素是否是 StarTag div，如果是，就将 StartTag div 从栈中弹出，表示该 div 元素解析完成。</li></ul></li><li>个人理解： <ul><li>DOM 生成流程，先解析 html 流，转成 token，完事之后在生成 node ，之后是 stack 栈的逻辑</li><li>如果是 stack 栈的话，有点像 DFS 的感觉，因为 html 流里面如果一个元素嵌套了子元素，那按照代码的顺序，应该会先把子节点给 push 进去</li></ul></li></ul></li></ul>`,3),s=[a];function r(c,t){return l(),e("div",null,s)}const u=i(d,[["render",r],["__file","shuoxianiduiDOMshudelijie.html.vue"]]);export{u as default};
