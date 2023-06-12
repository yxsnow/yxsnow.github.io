import{_ as e,o as n,c as i,a}from"./app-ff2f634e.js";const d={},s=a(`<p><strong>内存泄漏</strong></p><p>官方解释：内存泄漏（Memory Leak）是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。 通俗点就是指由于疏忽或者错误造成程序未能释放已经不再使用的内存，不再用到的内存却没有及时释放，从而造成内存上的浪费。</p><p><strong>避免内存泄漏</strong></p><p>在局部作用域中，等函数执行完毕，变量就没有存在的必要了，垃圾回收机制很快地做出判断并且回收，但是对于全局变量，很难判断什么时候不用这些变量，无法正常回收；所以，尽量少使用全局变量。在使用闭包的时候，就会造成严重的内存泄漏，因为闭包中的局部变量，会一直保存在内存中。</p><h2 id="常见的js内存泄漏" tabindex="-1"><a class="header-anchor" href="#常见的js内存泄漏" aria-hidden="true">#</a> <strong>常见的js内存泄漏</strong></h2><h3 id="意外的全局变量" tabindex="-1"><a class="header-anchor" href="#意外的全局变量" aria-hidden="true">#</a> 意外的全局变量</h3><p>在js中，一个未声明变量的使用，会在全局对象中创建一个新的变量；在浏览器环境下，全局对象就是window</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo(){
  a=&quot;test&quot;
}
//上面的写法等同于
function foo(){
  window.a =&quot;test&quot;
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo(){
  this.a=&quot;test&quot;
  // 函数自身发生调用，this指向全局对象window
}
foo()
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的a变量应该是foo()内部作用域变量的引用，由于没有使用var来声明这个变量，这时变量a就被创建成了全局变量，这个就是错误的，会导致内存泄漏。 解决方式： 在js文件开头添加 ‘use strict&#39;，开启严格模式。（或者一般将使用过后的全局变量设置为 null 或者将它重新赋值，这个会涉及的缓存的问题，需要注意）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
&quot;use strict&quot;
console.log(&quot;这是严格模式。&quot;)
&lt;/script&gt;
&lt;script&gt; console.log(&quot;这是正常模式。&quot;) &lt;/script&gt;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计时器和回调函数timers" tabindex="-1"><a class="header-anchor" href="#计时器和回调函数timers" aria-hidden="true">#</a> 计时器和回调函数timers</h3><p>定时器setInterval或者setTimeout在不需要使用的时候，没有被clear，导致定时器的回调函数及其内部依赖的变量都不能被回收，这就会造成内存泄漏。 解决方式：当不需要interval或者timeout的时候，调用clearInterval或者clearTimeout</p><h3 id="dom泄漏" tabindex="-1"><a class="header-anchor" href="#dom泄漏" aria-hidden="true">#</a> DOM泄漏</h3><p><strong>1.给DOM对象添加的属性是一个对象的引用</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = {}
document.getElementById(&#39;id&#39;).diyProp = a
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法：在<code>window.onload</code>时间中加上 <code>document.getElementById(&#39;id&#39;).diyProp = null</code>;</p><p><strong>2.元素引用没有清理</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = document.getElementById(&#39;id&#39;);
document.body.removeChild(a);
// 不能回收，因为存在变量a对它的引用。虽然我们用removeChild移除了但是还在对象里保存着#的引用，即DOM元素还在内存里面。
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法： <code>a = null</code></p><p><strong>3.事件的绑定没有移除</strong></p><p>解决方法： 移除时间的监听</p><h3 id="js闭包" tabindex="-1"><a class="header-anchor" href="#js闭包" aria-hidden="true">#</a> js闭包</h3><p>闭包在IE6下会造成内存泄漏，但是现在已经无须考虑了。值得注意的是闭包本身不会造成内存泄漏，但闭包过多很容易导致内存泄漏。闭包会造成对象引用的生命周期脱离当前函数的上下文，如果闭包如果使用不当，可以导致环形引用（circular reference），类似于死锁，只能避免，无法发生之后解决，即使有垃圾回收也还是会内存泄露。</p><h3 id="console" tabindex="-1"><a class="header-anchor" href="#console" aria-hidden="true">#</a> console</h3><p>控制台日志记录对总体内存内置文件的影响，也是个重大的问题，同时也是容易被忽略的。记录错误的对象，可以将大量的数据保留在内存中。传递给console.log的对象是不能被垃圾回收，所以没有去掉console.log可能会存在内存泄漏</p>`,26),t=[s];function l(r,o){return n(),i("div",null,t)}const u=e(d,[["render",l],["__file","JSchangjiannacunxieloujijiejuefangan.html.vue"]]);export{u as default};
