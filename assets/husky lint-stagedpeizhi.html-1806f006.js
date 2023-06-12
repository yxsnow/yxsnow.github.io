import{_ as s,r as l,o,c as a,b as n,d as e,e as i,a as d}from"./app-ff2f634e.js";const r={},u=d(`<p>lint-staged和husky是两个常用的npm包，用于在git commit或git push时自动运行代码检查、格式化等操作，可以有效避免代码库中出现低级错误。下面是它们的安装和配置步骤：</p><ol><li>安装 husky 和 lint-staged 包（版本最好是最新版）。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install husky lint-staged --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>在 package.json 中添加如下两个字段：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;lint&quot;: &quot;eslint .&quot;,
    &quot;format&quot;: &quot;prettier --write \\&quot;**/*.{js,json,md}\\&quot;&quot;
  },
  &quot;husky&quot;: {
    &quot;hooks&quot;: {
      &quot;pre-commit&quot;: &quot;lint-staged&quot;
    }
  },
  &quot;lint-staged&quot;: {
    &quot;*.{js,json,md}&quot;: [
      &quot;npm run lint&quot;,
      &quot;npm run format&quot;
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>运行 npm run lint 和 npm run format 来分别检查和格式化代码。如果不进行格式化使用即可省略。</p></li><li><p>通过 git commit 提交代码，检测到有文件被修改后会自动执行命令进行检查和格式化。</p></li></ol>`,6),c={href:"https://juejin.cn/post/7103889661465985038",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.cn/post/6986584081630756877",target:"_blank",rel:"noopener noreferrer"};function v(p,q){const t=l("ExternalLinkIcon");return o(),a("div",null,[u,n("p",null,[e("以上是一个基本的 lint-staged 和 husky 的配置步骤，更多高级用法可以参考相关文档和网站。["),n("a",c,[e("1"),i(t)]),e("]["),n("a",m,[e("4"),i(t)]),e("]")])])}const h=s(r,[["render",v],["__file","husky lint-stagedpeizhi.html.vue"]]);export{h as default};
