import{_ as n,o as s,c as a,a as e}from"./app-ff2f634e.js";const t={},c=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const curry = (fn, ...args) =&gt; 
    // 函数的参数个数可以直接通过函数数的.length属性来访问
    args.length &gt;= fn.length // 这个判断很关键！！！
    // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
    ? fn(...args)
    /**
     * 传入的参数小于原始函数fn的参数个数时
     * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
    */
    : (..._args) =&gt; curry(fn, ...args, ..._args);

function add1(x, y, z) {
    return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="柯里化有什么作用" tabindex="-1"><a class="header-anchor" href="#柯里化有什么作用" aria-hidden="true">#</a> 柯里化有什么作用</h2><p>主要有3个作用： <strong>参数复用</strong>、<strong>提前返回</strong>和 <strong>延迟执行</strong></p><p>我们来简单的解释一下: 参数复用：拿上面 <code>f</code>这个函数举例，只要传入一个参数 <code>z</code>，执行，计算结果就是 <code>1 + 2 + z</code> 的结果，1 和 2 这两个参数就直接可以复用了。</p><p>提前返回 和 延迟执行 也很好理解，因为每次调用函数时，它只接受一部分参数，并返回一个函数（提前返回），直到(延迟执行)传递所有参数为止。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 将函数柯里化的工具函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 待柯里化的函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>array<span class="token punctuation">}</span></span> <span class="token parameter">args</span> 已经接收的参数列表
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">currying</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// fn需要的参数个数</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> fn<span class="token punctuation">.</span>length
    <span class="token comment">// 返回一个函数接收剩余参数</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 拼接已经接收和新接收的参数列表</span>
        <span class="token keyword">let</span> _args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>params<span class="token punctuation">]</span>
        <span class="token comment">// 如果已经接收的参数个数还不够，继续返回一个新函数接收剩余参数</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>_args<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">currying</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token operator">...</span>_args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
       <span class="token comment">// 参数全部接收完调用原函数</span>
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> _args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[c];function i(o,l){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","hanshukelihua：sanxingdaimashixian add(1)(2)(3).html.vue"]]);export{d as default};
