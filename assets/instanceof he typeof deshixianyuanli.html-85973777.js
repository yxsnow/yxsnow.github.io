import{_ as t,r as d,o as c,c as l,b as n,d as e,e as a,a as i}from"./app-ff2f634e.js";const s="/assets/163a55d5d35b866d_tplv-t2oaga2asx_5780a1a7139142c18-0cce9270.webp",r={},u=i(`<h3 id="typeof-实现原理" tabindex="-1"><a class="header-anchor" href="#typeof-实现原理" aria-hidden="true">#</a> typeof 实现原理</h3><p><code>typeof</code> 一般被用于判断一个变量的类型，我们可以利用 <code>typeof</code> 来判断<code>number</code>, <code>string</code>, <code>object</code>, <code>boolean</code>, <code>function</code>, <code>undefined</code>, <code>symbol</code> 这七种类型，这种判断能帮助我们搞定一些问题，比如在判断不是 object 类型的数据的时候，<code>typeof</code>能比较清楚的告诉我们具体是哪一类的类型。但是，很遗憾的一点是，<code>typeof</code> 在判断一个 object的数据的时候只能告诉我们这个数据是 object, 而不能细致的具体到是哪一种 object, 比如👉</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let s = new String(&#39;abc&#39;);
typeof s === &#39;object&#39;// true
s instanceof String // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要想判断一个数据具体是哪一种 object 的时候，我们需要利用 <code>instanceof</code> 这个操作符来判断，这个我们后面会说到。</p><p>来谈谈关于 <code>typeof</code> 的原理吧，我们可以先想一个很有意思的问题，js 在底层是怎么存储数据的类型信息呢？或者说，一个 js 的变量，在它的底层实现中，它的类型信息是怎么实现的呢？</p><p>其实，js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息👉</p><ul><li>000：对象</li><li>010：浮点数</li><li>100：字符串</li><li>110：布尔</li><li>1：整数</li></ul><p>but, 对于 <code>undefined</code> 和 <code>null</code> 来说，这两个值的信息存储是有点特殊的。</p><p><code>null</code>：所有机器码均为0</p><p><code>undefined</code>：用 −2^30 整数来表示</p><p>所以，<code>typeof</code> 在判断 <code>null</code> 的时候就出现问题了，由于 <code>null</code> 的所有机器码均为0，因此直接被当做了对象来看待。</p><p>然而用 <code>instanceof</code> 来判断的话👉</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>null instanceof null // TypeError: Right-hand side of &#39;instanceof&#39; is not an object
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),v=n("code",null,"null",-1),p={href:"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2Ftypeof",title:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>因此在用 <code>typeof</code> 来判断变量类型的时候，我们需要注意，最好是用 <code>typeof</code> 来判断基本数据类型（包括<code>symbol</code>），避免对 null 的判断。</p><p>还有一个不错的判断类型的方法，就是Object.prototype.toString，我们可以利用这个方法来对一个变量的类型来进行比较准确的判断</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.prototype.toString.call(1) // &quot;[object Number]&quot;

Object.prototype.toString.call(&#39;hi&#39;) // &quot;[object String]&quot;

Object.prototype.toString.call({a:&#39;hi&#39;}) // &quot;[object Object]&quot;

Object.prototype.toString.call([1,&#39;a&#39;]) // &quot;[object Array]&quot;

Object.prototype.toString.call(true) // &quot;[object Boolean]&quot;

Object.prototype.toString.call(() =&gt; {}) // &quot;[object Function]&quot;

Object.prototype.toString.call(null) // &quot;[object Null]&quot;

Object.prototype.toString.call(undefined) // &quot;[object Undefined]&quot;

Object.prototype.toString.call(Symbol(1)) // &quot;[object Symbol]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instanceof-操作符的实现原理" tabindex="-1"><a class="header-anchor" href="#instanceof-操作符的实现原理" aria-hidden="true">#</a> instanceof 操作符的实现原理</h3><p>之前我们提到了 <code>instanceof</code> 来判断对象的具体类型，其实 <code>instanceof</code> 主要的作用就是判断一个实例是否属于某种类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let person = function () {
}
let nicole = new person()
nicole instanceof person // true
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，<code>instanceof</code> 也可以判断一个实例是否是其父类型或者祖先类型的实例。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let person = function () {
}
let programmer = function () {
}
programmer.prototype = new person()
let nicole = new programmer()
nicole instanceof person // true
nicole instanceof programmer // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是 <code>instanceof</code> 的用法，但是 <code>instanceof</code> 的原理是什么呢？根据 ECMAScript 语言规范，我梳理了一下大概的思路，然后整理了一段代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function new_instance_of(leftVaule, rightVaule) { 
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
    	if (leftVaule === null) {
            return false; 
        }
        if (leftVaule === rightProto) {
            return true; 
        } 
        leftVaule = leftVaule.__proto__ 
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实 <code>instanceof</code> 主要的实现原理就是只要右边变量的 <code>prototype</code> 在左边变量的原型链上即可。因此，<code>instanceof</code> 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 <code>prototype</code>，如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。</p><p>看几个很有趣的例子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Foo() {
}

Object instanceof Object // true
Function instanceof Function // true
Function instanceof Object // true
Foo instanceof Foo // false
Foo instanceof Object // true
Foo instanceof Function // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要想全部理解 <code>instanceof</code> 的原理，除了我们刚刚提到的实现原理，我们还需要知道 JavaScript 的原型继承原理。</p><p>关于原型继承的原理，我简单用一张图来表示</p><p><img src="`+s+`" alt=""></p><p>我们知道每个 JavaScript 对象均有一个隐式的 <code>__proto__</code> 原型属性，而显式的原型属性是 <code>prototype</code>，只有 <code>Object.prototype.__proto__</code> 属性在未修改的情况下为 null 值。根据图上的原理，我们来梳理上面提到的几个有趣的 <code>instanceof</code> 使用的例子。</p><ul><li><p><code>Object instanceof Object</code></p><p>由图可知，Object 的 <code>prototype</code> 属性是 <code>Object.prototype</code>, 而由于 Object 本身是一个函数，由 Function 所创建，所以 <code>Object.__proto__</code> 的值是 <code>Function.prototype</code>，而 <code>Function.prototype</code> 的 <code>__proto__</code> 属性是 <code>Object.prototype</code>，所以我们可以判断出，<code>Object instanceof Object</code> 的结果是 true 。用代码简单的表示一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>leftValue = Object.__proto__ = Function.prototype;
rightValue = Object.prototype;
// 第一次判断
leftValue != rightValue
leftValue = Function.prototype.__proto__ = Object.prototype
// 第二次判断
leftValue === rightValue
// 返回 true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Function instanceof Function</code> 和 <code>Function instanceof Object</code> 的运行过程与 <code>Object instanceof Object</code> 类似，故不再详说。</p></li><li><p><code>Foo instanceof Foo</code></p><p>Foo 函数的 <code>prototype</code> 属性是 <code>Foo.prototype</code>，而 Foo 的 <code>__proto__</code> 属性是 <code>Function.prototype</code>，由图可知，Foo 的原型链上并没有 <code>Foo.prototype</code> ，因此 <code>Foo instanceof Foo</code> 也就返回 false 。</p><p>我们用代码简单的表示一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>leftValue = Foo, rightValue = Foo
leftValue = Foo.__proto = Function.prototype
rightValue = Foo.prototype
// 第一次判断
leftValue != rightValue
leftValue = Function.prototype.__proto__ = Object.prototype
// 第二次判断
leftValue != rightValue
leftValue = Object.prototype = null
// 第三次判断
leftValue === null
// 返回 false
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Foo instanceof Object</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>leftValue = Foo, rightValue = Object
leftValue = Foo.__proto__ = Function.prototype
rightValue = Object.prototype
// 第一次判断
leftValue != rightValue
leftValue = Function.prototype.__proto__ = Object.prototype
// 第二次判断
leftValue === rightValue
// 返回 true 
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Foo instanceof Function</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>leftValue = Foo, rightValue = Function
leftValue = Foo.__proto__ = Function.prototype
rightValue = Function.prototype
// 第一次判断
leftValue === rightValue
// 返回 true 
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>简单来说，我们使用 <code>typeof</code> 来判断基本数据类型是 ok 的，不过需要注意当用 <code>typeof</code> 来判断 <code>null</code> 类型时的问题，如果想要判断一个对象的具体类型可以考虑用 <code>instanceof</code>，但是 <code>instanceof</code> 也可能判断不准确，比如一个数组，他可以被 <code>instanceof</code> 判断为 Object。所以我们要想比较准确的判断对象实例的类型时，可以采取 <code>Object.prototype.toString.call</code> 方法。</p>`,20);function m(f,g){const o=d("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[v,e(" 直接被判断为不是 object，这也是 JavaScript 的历史遗留bug，可以参考"),n("a",p,[e("typeof"),a(o)]),e("。")]),b])}const h=t(r,[["render",m],["__file","instanceof he typeof deshixianyuanli.html.vue"]]);export{h as default};
