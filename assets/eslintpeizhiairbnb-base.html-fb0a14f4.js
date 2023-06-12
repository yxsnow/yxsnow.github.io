import{_ as s,r as a,o as d,c as l,b as n,d as e,e as t,a as r}from"./app-ff2f634e.js";const c={},o=r(`<p>如果只想使用 <code>eslint-config-airbnb-base</code>，则需要安装 <code>eslint-config-airbnb-base</code> 包以及相关的 peerDependencies。</p><p>首先，需要全局或局部安装 ESLint：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install eslint --save-dev
# or
yarn add eslint --dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，需要安装 <code>eslint-config-airbnb-base</code> 以及其 peerDependencies：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx install-peerdeps --dev eslint-config-airbnb-base
# or
npm install eslint-config-airbnb-base eslint-plugin-import --save-dev
# or
yarn add eslint-config-airbnb-base eslint-plugin-import --dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，在项目的根目录下添加 <code>.eslintrc.js</code> 文件，并配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  &quot;extends&quot;: &quot;airbnb-base&quot;,
  &quot;rules&quot;: {
    // 在此处自定义你的规则
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),b={href:"https://www.npmjs.com/package/eslint-config-airbnb-base",target:"_blank",rel:"noopener noreferrer"};function v(u,p){const i=a("ExternalLinkIcon");return d(),l("div",null,[o,n("p",null,[e("这样就可以使用 Airbnb 的基础代码规范了。["),n("a",b,[e("3"),t(i)]),e("]")])])}const g=s(c,[["render",v],["__file","eslintpeizhiairbnb-base.html.vue"]]);export{g as default};
