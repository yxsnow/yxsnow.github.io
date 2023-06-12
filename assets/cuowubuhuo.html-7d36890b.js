import{_ as e,o as n,c as i,a}from"./app-ff2f634e.js";const d={},l=a(`<ol><li><h2 id="promise异步错误-通过unhandledrejection事件捕获" tabindex="-1"><a class="header-anchor" href="#promise异步错误-通过unhandledrejection事件捕获" aria-hidden="true">#</a> Promise异步错误：通过unhandledrejection事件捕获</h2><ol><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.addEventListener(&#39;unhandledrejection&#39;, function (ev) {
  console.log(&#39;promise异步错误：&#39;, ev);
});
new Promise(() =&gt; {
  a;
});
fetch(&#39;aaa&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol>`,1),s=[l];function o(c,r){return n(),i("div",null,s)}const u=e(d,[["render",o],["__file","cuowubuhuo.html.vue"]]);export{u as default};
