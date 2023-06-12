import{_ as s,r as l,o as t,c as a,b as n,d as e,e as d,a as r}from"./app-ff2f634e.js";const c={},o=r(`<p>要在 ESLint 中使用 Airbnb 的代码规范，需要安装 <code>eslint-config-airbnb</code> 包以及相关的 peerDependencies。</p><p>首先，需要全局或局部安装 ESLint：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install eslint --save-dev
# or
yarn add eslint --dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，需要安装 <code>eslint-config-airbnb</code> 以及其 peerDependencies：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx install-peerdeps --dev eslint-config-airbnb
# or
npm install eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y --save-dev
# or
yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y --dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，在项目的根目录下添加 <code>.eslintrc.js</code> 文件，并配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  &quot;extends&quot;: &quot;airbnb&quot;,
  &quot;rules&quot;: {
    // 在此处自定义你的规则
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),u={href:"http://eslint.cn/docs/user-guide/configuring#extending-configuration-files",target:"_blank",rel:"noopener noreferrer"};function v(p,b){const i=l("ExternalLinkIcon");return t(),a("div",null,[o,n("p",null,[e("这样就可以使用 Airbnb 的代码规范了。["),n("a",u,[e("1"),d(i)]),e("]")])])}const g=s(c,[["render",v],["__file","eslintpeizhiairbnb.html.vue"]]);export{g as default};
