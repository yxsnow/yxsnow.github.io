import{_ as n,o as s,c as a,a as e}from"./app-ff2f634e.js";const t={},o=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mynew</span><span class="token punctuation">(</span><span class="token parameter">Func<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.创建一个新对象</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 2.新对象原型指向构造函数原型对象</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Func</span><span class="token punctuation">.</span>prototype
    <span class="token comment">// 3.将构建函数的this指向新对象</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token comment">// 4.根据返回值判断</span>
    <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mynew</span><span class="token punctuation">(</span><span class="token parameter">Func<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.创建一个新对象</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 2.新对象原型指向构造函数原型对象</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Func</span><span class="token punctuation">.</span>prototype
    <span class="token comment">// 3.将构建函数的this指向新对象</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token comment">// 4.根据返回值判断</span>
    <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="做了什么" tabindex="-1"><a class="header-anchor" href="#做了什么" aria-hidden="true">#</a> 做了什么？</h2><p>1、创建了一个空的js对象（即{}）</p><p>2、将空对象的原型prototype指向构造函数的原型</p><p>3、将空对象作为构造函数的上下文（改变this指向）</p><p>4、对构造函数有返回值的判断</p><h2 id="怎么实现" tabindex="-1"><a class="header-anchor" href="#怎么实现" aria-hidden="true">#</a> 怎么实现？</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mynew</span><span class="token punctuation">(</span><span class="token parameter">Func<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.创建一个新对象</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 2.新对象原型指向构造函数原型对象</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Func</span><span class="token punctuation">.</span>prototype
    <span class="token comment">// 3.将构建函数的this指向新对象</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token comment">// 4.根据返回值判断</span>
    <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
 create函数要接受不定量的参数，第一个参数是构造函数（也就是new操作符的目标函数），其余参数被构造函数使用。 new Create() 是一种js语法糖。我们可以用函数调用的方式模拟实现 */
function create(Con,...args){
    //1、创建一个空的对象     
    let obj = {}; // let obj = Object.create({});     
    //2、将空对象的原型prototype指向构造函数的原型     
    Object.setPrototypeOf(obj,Con.prototype); // obj.__proto__ = Con.prototype     
    //3、改变构造函数的上下文（this）,并将剩余的参数传入     
    let result = Con.apply(obj,args);
    //4、在构造函数有返回值的情况进行判断     
    return result instanceof Object?result:obj;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function myNew (func, ...args) {
  const obj = Object.create(func.prototype) // Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
  let result = func.apply(obj, args)
  return result instanceof Object ? result : obj
}

let p = myNew(Person, &quot;huihui&quot;, 123)
console.log(p) // Person {name: &quot;huihui&quot;, age: 123}
p.sayName() // huihui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造函数返回值的判断" tabindex="-1"><a class="header-anchor" href="#构造函数返回值的判断" aria-hidden="true">#</a> 构造函数返回值的判断</h2><p>一般情况下构造函数没有返回值，但是作为函数，是可以有返回值的。</p><p>那么在构造函数有返回值的情况下，new操作符做了什么？</p><p>先看两个例子：</p><p><strong>注意一下上面两个返回值的差异</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person(name){
  this.name = name;
  return 1; // return undefined/NaN/&#39;string&#39;/null }
let me = new Person(&#39;快乐每一天&#39;);
console.log(me); // { name:&#39;快乐每一天&#39; } 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person(name){
  this.name = name;
  return { age:12 };
}
let me = new Person(&#39;快乐每一天&#39;);
console.log(me); // { age:12 } 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论：</h2><p><strong>在new的时候，会对构造函数的返回值做一些判断：</strong></p><p><strong>1、如果返回值是基础数据类型，则忽略返回值；</strong></p><p><strong>2、如果返回值是引用数据类型，则使用return 的返回，也就是new操作符无效；</strong></p>`,22),i=[o];function p(c,l){return s(),a("div",null,i)}const u=n(t,[["render",p],["__file","jsdenewcaozuofudaodizuoliaoshime.html.vue"]]);export{u as default};
