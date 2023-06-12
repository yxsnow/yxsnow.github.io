import{_ as t,o as e,c as n,a as o}from"./app-ff2f634e.js";const r="/assets/bdd068dfc8da3c17ef351177fbe653dd-312f555f.png",d={},i=o(`<h3 id="object-prototype-tostring-call-obj-的功能" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring-call-obj-的功能" aria-hidden="true">#</a> Object.prototype.toString.call(obj)的功能</h3><p>可能作为程序员以及即将迈入程序员门槛的小伙伴都知道<code>Object.prototype.toString.call(obj)</code>方法，功能简单但是确是类型检测界的“扛把子”。 首先来讲，对刚接触的人来说，我们为什么要使用这种奇怪的方法呢？<code>typeof</code>也可以检测类型，然而它有什么优势？我们来引入一道JavaScript的题目来参考： 使用 <code>typeof bar === &quot;object&quot;</code> 检测 变量“bar”是否为对象有什么缺点？如何避免？ 缺点很明确，typeof可以准确的检测bar是否为对象吗？答案是否定的。<code>Array null…</code>检测出来也均为<code>object</code>，因此规避方法还是要用到本文所提方法。接下来我们进行测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`console.log(Object.prototype.toString.call(&quot;jerry&quot;));//[object String]
console.log(Object.prototype.toString.call(12));//[object Number]
console.log(Object.prototype.toString.call(true));//[object Boolean]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(Object.prototype.toString.call({name: &quot;jerry&quot;}));//[object Object]
console.log(Object.prototype.toString.call(function(){}));//[object Function]
console.log(Object.prototype.toString.call([]));//[object Array]
console.log(Object.prototype.toString.call(new Date));//[object Date]
console.log(Object.prototype.toString.call(/\\d/));//[object RegExp]

function Person(){};
console.log(Object.prototype.toString.call(new Person));//[object Object]\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这即是此方法的用处，它可以精准判断所传入参数的数据类型。</p><p>它是如何做到的呢？接下来让我们一起来探讨一下其原理</p><h3 id="object-prototype-tostring-call-obj-类型检测原理" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring-call-obj-类型检测原理" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>Object.prototype.toString.call(obj)类型检测原理</h3><p>此方法为什么能检测数据类型呢？起初我也很奇怪，只是记住了此方法，并未深究，今天让我们来一探究竟。</p><p>首先，这句话的意思是让我们用Object原型上的toString方法作用在传入的obj的上下文中（通过call将this指向obj），那么我们知道数组本身也有toString()方法，那我们为什么非要用Object上的呢？ 首先，让我们再来看一下toString()方法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`var num = 123
num.toString() // &#39;123&#39;

var str = &#39;hello&#39;
str.toString() // &#39;hello&#39;

var bool = false
bool.toString() // &#39;false&#39;

var arr = [1, 2, 3]
arr.toString()  // &#39;1,2,3&#39;

var obj = {lang:&#39;zh&#39;}
obj.toString()  // &#39;[object Object]&#39;

var fn = function(){}
fn.toString()  // &#39;function(){}&#39;

null.toString()  // Cannot read property &#39;toString&#39; of null

undefined.toString() // Cannot read property &#39;toString&#39; of undefined\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>toString:由名字可以看出此方法是将传入的数据类型转换成字符串输出（null和undefined除外） 我们再来看一下Object以及其原型上的toString方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`Object.toString()//&quot;function Object() { [native code] }&quot;
Object.prototype.toString()//&quot;[object Object]&quot;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Object输出的是其函数体<code>&quot;function Object() { [native code] }&quot;</code>而Object上输出的是其类型。我们可以看出<strong>Object对象</strong>和它的<strong>原型链</strong>上各自有一个<code>toString()</code>方法，第一个返回的是一个函数，第二个返回的是值类型。</p><p>接下来让我们看一个表格：</p><table><thead><tr><th>数据类型</th><th>例子</th><th>return</th></tr></thead><tbody><tr><td>字符串</td><td>“foo”.toString()</td><td>“foo”</td></tr><tr><td>数字</td><td>1.toString()</td><td>Uncaught SyntaxError: Invalid or unexpected token</td></tr><tr><td>布尔值</td><td>false.toString()</td><td>“false”</td></tr><tr><td>undefined</td><td>undefined.toString()</td><td>Uncaught TypeError: Cannot read property ‘toString’ of undefined</td></tr><tr><td>null</td><td>null.toString()</td><td>Uncaught TypeError: Cannot read property ‘toString’ of null</td></tr><tr><td>String</td><td>String.toString()</td><td>“function String() { [native code] }”</td></tr><tr><td>Number</td><td>Number.toString()</td><td>“function Number() { [native code] }”</td></tr><tr><td>Boolean</td><td>Boolean.toString()</td><td>“function Boolean() { [native code] }”</td></tr><tr><td>Array</td><td>Array.toString()</td><td>“function Array() { [native code] }”</td></tr><tr><td>Function</td><td>Function.toString()</td><td>“function Function() { [native code] }”</td></tr><tr><td>Date</td><td>Date.toString()</td><td>“function Date() { [native code] }”</td></tr><tr><td>RegExp</td><td>RegExp.toString()</td><td>“function RegExp() { [native code] }”</td></tr><tr><td>Error</td><td>Error.toString()</td><td>“function Error() { [native code] }”</td></tr><tr><td>Promise</td><td>Promise.toString()</td><td>“function Promise() { [native code] }”</td></tr><tr><td>Obejct</td><td>Object.toString()</td><td>“function Object() { [native code] }”</td></tr><tr><td>Math</td><td>Math.toString()</td><td>“[object Math]”</td></tr><tr><td>这就是各种数据类型调用toString()方法的返回值，由此我们看出不同的数据类型都有其自身toString()方法。所以上述toString()方法来自于<code>Number、String、Boolean…</code>等等这些类。</td><td></td><td></td></tr><tr><td>我们又知道，在JavaScript中，所有类都继承于Object，因此toString()方法应该也被继承了，但由上述可见事实并不像我们想的那样，其实各数据类型使用toString()后的结果表现不一的原因在于：<strong>所有类在继承Object的时候，改写了toString()方法。</strong> Object原型上的方法是可以输出数据类型的。因此我们想判断数据类型时，也只能使用原始方法。继而有了此方法：<code>Object.prototype.toString.call(obj)</code></td><td></td><td></td></tr></tbody></table><h3 id="接下来让我们进行验证" tabindex="-1"><a class="header-anchor" href="#接下来让我们进行验证" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>接下来让我们进行验证</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// 定义一个数组
var arr = [1, 2, 3]

// 数组原型上是否具有 toString() 方法
console.log(Array.prototype.hasOwnProperty(&#39;toString&#39;)) //true

// 数组直接使用自身的 toString() 方法
console.log(arr.toString()) // &#39;1,2,3&#39;

// delete操作符删除数组原型上的 toString()
delete Array.prototype.toString

// 删除后，数组原型上是否还具有 toString() 方法
console.log(Array.prototype.hasOwnProperty(&#39;toString&#39;)) //false

// 删除后的数组再次使用 toString() 时，会向上层访问这个方法，即 Object 的 toString()
console.log(arr.toString()) // &#39;[object Array]&#39;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们把Array自身的toString()方法删除之后，再次使用它时，由原型链它会向上查找这个方法，即Object的toString()，也便将Object上的toString()方法作用在数组上，得出其数据类型<code>[object Array]</code></p><p>至此便透彻了Object.prototype.toString.call(obj)功能及原理。</p><p><img src="`+r+'" alt="bdd068dfc8da3c17ef351177fbe653dd.png"></p>',19),l=[i];function c(a,s){return e(),n("div",null,l)}const v=t(d,[["render",c],["__file","qiantanObject.prototype.toString.call(obj)gongnenjiyuanli.html.vue"]]);export{v as default};
