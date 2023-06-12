import{_ as a,r as t,o as d,c as r,b as n,d as e,e as s,a as l}from"./app-ff2f634e.js";const c="/assets/2b2c21887cfe487a84b87c4edebd17b3_9f9e54943c1f4bf2b-945b80be.png",o="/assets/7d2376e935124a828f59be152deb0fa8_8597c0ad26b5480a9-0a95dec2.png",v="/assets/b1471a9c2d8d4ea7b038695c8454cb2e_9994444fefd346e6b-c9fb79de.png",u="/assets/316458ee5e8b4682bf4b26a4fe138c8b_bcb7f3ebfa48430cb-4e5875d0.png",p={},b=l('<p>Next.js 支持：</p><ul><li>在服务端预渲染</li><li>静态页面生成和服务端渲染</li><li>有数据和无数据的静态生成</li><li>一些预定义的方法（生命周期函数）注入数据</li></ul><h2 id="_6-1-预渲染" tabindex="-1"><a class="header-anchor" href="#_6-1-预渲染" aria-hidden="true">#</a> 6.1 预渲染</h2><p>默认情况下，Next.js 预渲染每个页面。这意味着 Next.js 会提前为每个页面生成 HTML，预渲染可以带来更好的性能和SEO。</p><p>每个生成的 HTML 都与该页面<strong>所需的最少</strong> JavaScript 代码相关联。当浏览器加载页面时，其 JavaScript 代码会运行并使页面完全交互。</p><p>预渲染和无预渲染的对比如下：</p><img width="756" height="449" src="'+c+'"><img width="756" height="375" src="'+o+'"><h2 id="_6-2-静态生成和服务端渲染" tabindex="-1"><a class="header-anchor" href="#_6-2-静态生成和服务端渲染" aria-hidden="true">#</a> 6.2 静态生成和服务端渲染</h2><p>Next.js 支持两种形式的<strong>预渲染</strong>方式：<strong>静态生成</strong>和<strong>服务端渲染</strong></p><ul><li><strong>静态生成：</strong> 在构建时生成 HTML 的预渲染方法。然后在每个请求上重用预渲染的 HTML。</li><li><strong>服务器端渲染：</strong> 在每个请求上生成 HTML 的预渲染方法。</li></ul><img width="756" height="406" src="'+v+'"><img width="756" height="436" src="'+u+`"><h2 id="_6-3-获取数据" tabindex="-1"><a class="header-anchor" href="#_6-3-获取数据" aria-hidden="true">#</a> 6.3 获取数据</h2><h3 id="_1-静态生成时获取数据" tabindex="-1"><a class="header-anchor" href="#_1-静态生成时获取数据" aria-hidden="true">#</a> （1）静态生成时获取数据</h3><p>在服务端构建生成静态页面之前，有时候需要获取一些数据，可以借助 <code>getStaticProps</code> 方法。</p><p>在<strong>页面组件</strong>内，同时导出一个 <code>getStaticProps</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default function HomePage(props) { ... }

// 导出异步获取数据方法
export async function getStaticProps() {
  // 获取数据，例如从数据库、API、文件等
  const data = ...

  // 返回的参数将会按照 key 值赋值到 HomePage 组件的同名入参中
  return {
    props: ...
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，仅在页面组件内导出该方法</p><h3 id="_2-服务端渲染时获取数据" tabindex="-1"><a class="header-anchor" href="#_2-服务端渲染时获取数据" aria-hidden="true">#</a> （2）服务端渲染时获取数据</h3><p>比如用户的个人中心页面，该页面时不需要 SEO 优化的，其数据通常需要实时更新获取，因此采用 SSR 的方式，而 SSR 在服务端获取数据可以借助 <code>getServerSideProps</code> 方法</p><p>和构建时获取数据方法类似：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default function HomePage(props) { ... }

// 导出异步获取数据方法
export async function getServerSideProps() {
  // 获取数据，例如从数据库、API、文件等
  const data = ...

  // 返回的参数将会按照 key 值赋值到 HomePage 组件的同名入参中
  return {
    props: ...
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-客户端渲染时获取数据" tabindex="-1"><a class="header-anchor" href="#_3-客户端渲染时获取数据" aria-hidden="true">#</a> （3）客户端渲染时获取数据</h3><p>如果不需要“预渲染”时候获取数据，即不需要“静态生成”和“服务端渲染”的时候获取数据，则可以在对应页面组件代内，编写网络请求相关代码。</p><p>Next.js 团队提供了一个基于 React Hooks 的 <code>useSWR</code> 钩子，推荐使用，该钩子会处理缓存、重新验证、焦点跟踪、间隔重新获取等。</p><p>一个简单的示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import useSWR from &#39;swr&#39;

function Profile() {
  const { data, error } = useSWR(&#39;/api/user&#39;, fetch)

  if (error) return &lt;div&gt;failed to load&lt;/div&gt;
  if (!data) return &lt;div&gt;loading...&lt;/div&gt;
  return &lt;div&gt;hello {data.name}!&lt;/div&gt;
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),h={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Funfetch",title:"https://www.npmjs.com/package/unfetch",target:"_blank",rel:"noopener noreferrer"},m={href:"https://link.juejin.cn?target=https%3A%2F%2Fswr.vercel.app%2Fzh-CN%2Fdocs%2Fgetting-started",title:"https://swr.vercel.app/zh-CN/docs/getting-started",target:"_blank",rel:"noopener noreferrer"};function g(_,f){const i=t("ExternalLinkIcon");return d(),r("div",null,[b,n("p",null,[e("和一些封装的请求 Hooks 类似，useSWR 还支持自定义请求库，默认使用的是 fetch 的 pollyfill 模块（"),n("a",h,[e("unfetch"),s(i)]),e("），提供的中文官方的文档也非常清晰，地址："),n("a",m,[e("swr.vercel.app/zh-CN/docs/…"),s(i)])])])}const S=a(p,[["render",g],["__file","jiyu Next.js de SSR_SSG fanganliaojieyixia.html.vue"]]);export{S as default};
