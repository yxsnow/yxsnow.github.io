import{_ as e,o as n,c as i,a}from"./app-ff2f634e.js";const s="/assets/c2e127e58dfe4fbc9154adb33b601070_3213fba32a3346298-b6a6725d.webp",l="/assets/597888ee749b49a69385e687abd57173_7153d7175b424a4fa-246320f2.webp",d={},t=a(`<h3 id="_1-相比普通函数-箭头函数有更加简洁的语法。" tabindex="-1"><a class="header-anchor" href="#_1-相比普通函数-箭头函数有更加简洁的语法。" aria-hidden="true">#</a> 1. 相比普通函数，箭头函数有更加简洁的语法。</h3><blockquote><p>普通函数</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function add(num) {
  return num + 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>箭头函数</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const add = num =&gt; num + 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-箭头函数不绑定this-会捕获其所在上下文的this-作为自己的this。" tabindex="-1"><a class="header-anchor" href="#_2-箭头函数不绑定this-会捕获其所在上下文的this-作为自己的this。" aria-hidden="true">#</a> 2. 箭头函数不绑定this，会捕获其所在上下文的this，作为自己的this。</h3><blockquote><p>这句话需要注意的是，箭头函数的外层如果有普通函数，那么箭头函数的this就是这个外层的普通函数的this，箭头函数的外层如果没有普通函数，那么箭头函数的this就是全局变量。</p></blockquote><blockquote><p>下面这个例子是箭头函数的外层有普通函数。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let obj = {
  fn:function(){
      console.log(&#39;我是普通函数&#39;,this === obj)   // true
      return ()=&gt;{
          console.log(&#39;我是箭头函数&#39;,this === obj) // true
      }
  }
}
console.log(obj.fn()())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>下面这个例子是箭头函数的外层没有普通函数。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let obj = {
    fn:()=&gt;{
        console.log(this === window);
    }
}
console.log(obj.fn())
// true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-箭头函数是匿名函数-不能作为构造函数-不可以使用new命令-否则后抛出错误。" tabindex="-1"><a class="header-anchor" href="#_3-箭头函数是匿名函数-不能作为构造函数-不可以使用new命令-否则后抛出错误。" aria-hidden="true">#</a> 3. 箭头函数是匿名函数，不能作为构造函数，不可以使用new命令，否则后抛出错误。</h3><p><img src="`+s+`" alt="image.png"></p><h3 id="_4-箭头函数不绑定arguments-取而代之用rest参数解决-同时没有super和new-target。" tabindex="-1"><a class="header-anchor" href="#_4-箭头函数不绑定arguments-取而代之用rest参数解决-同时没有super和new-target。" aria-hidden="true">#</a> 4. 箭头函数不绑定arguments，取而代之用rest参数解决，同时没有super和new.target。</h3><blockquote><p>箭头函数没有arguments、super、new.target的绑定，这些值由外围最近一层非箭头函数决定。</p></blockquote><blockquote><p>下面的这个函数会报错，在浏览器环境下。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let f = (

)=&gt;console.log(arguments);

//报错
f(); // arguments is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>下面的箭头函数不会报错，因为arguments是外围函数的。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn(

){
  let f = (

)=&gt; {
    console.log(arguments)
  }
  f();
}
fn(1,2,3) // [1,2,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>箭头函数可以通过拓展运算符获取传入的参数。</p></blockquote><p><img src="`+l+`" alt="image.png"></p><h3 id="_5-使用call-apply-bind并不会改变箭头函数中的this指向。" tabindex="-1"><a class="header-anchor" href="#_5-使用call-apply-bind并不会改变箭头函数中的this指向。" aria-hidden="true">#</a> 5. 使用call,apply,bind并不会改变箭头函数中的this指向。</h3><ul><li>当对箭头函数使用call或apply方法时，只会传入参数并调用函数，并不会改变箭头函数中this的指向。</li><li>当对箭头函数使用bind方法时，只会返回一个预设参数的新函数，并不会改变这个新函数的this指向。</li></ul><blockquote><p>请看下面的代码</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.name = &quot;window_name&quot;;

let f1 = function (

) {
return this.name;
};
let f2 = (

) =&gt; this.name;

let obj = { name: &quot;obj_name&quot; };

console.log(f1.call(obj));  //obj_name
console.log(f2.call(obj));  // window_name
console.log(f1.apply(obj)); // obj_name
console.log(f2.apply(obj)); // window_name
console.log(f1.bind(obj)());  // obj_name
console.log(f2.bind(obj)());  // window_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-箭头函数没有原型对象prototype这个属性" tabindex="-1"><a class="header-anchor" href="#_6-箭头函数没有原型对象prototype这个属性" aria-hidden="true">#</a> 6. 箭头函数没有原型对象prototype这个属性</h3><blockquote><p>由于不可以通过new关键字调用，所以没有构建原型的需求，所以箭头函数没有prototype这个属性。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let F = (

)=&gt;{};
console.log(F.prototype) // undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-不能使用yield关键字-不能用作generator函数" tabindex="-1"><a class="header-anchor" href="#_7-不能使用yield关键字-不能用作generator函数" aria-hidden="true">#</a> 7. 不能使用yield关键字，不能用作Generator函数</h3><h2 id="二、arguments辨析" tabindex="-1"><a class="header-anchor" href="#二、arguments辨析" aria-hidden="true">#</a> 二、arguments辨析</h2><blockquote><p>既然上文我们提到了arguments，那么下面我们就仔细讲讲这个arguments。</p></blockquote><h3 id="arguments有什么用" tabindex="-1"><a class="header-anchor" href="#arguments有什么用" aria-hidden="true">#</a> arguments有什么用？</h3><blockquote><p>arguments对象是所有非箭头函数中都可用的局部变量，可以使用arguments对象在函数中引用函数的参数，此对象包含传递给函数的每一个参数，第一个参数在索引0的位置。</p></blockquote><h3 id="如何将arguments对象转换为数组" tabindex="-1"><a class="header-anchor" href="#如何将arguments对象转换为数组" aria-hidden="true">#</a> 如何将arguments对象转换为数组</h3><ol><li>通过slice</li><li>通过拓展运算符</li><li>通过Array.from</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

const args = Array.from(arguments);
const args = [...arguments];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arguments函数如何调用自身函数" tabindex="-1"><a class="header-anchor" href="#arguments函数如何调用自身函数" aria-hidden="true">#</a> arguments函数如何调用自身函数？</h3><blockquote><p>我们先看看下面这个函数，这个是可以正常运行的。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function factorial (n) {
    return !(n &gt; 1) ? 1 : factorial(n - 1) * n;
}

[1,2,3,4,5].map(factorial);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>但是作为匿名函数则不行。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1,2,3,4,5].map(function (n) {
    return !(n &gt; 1) ? 1 : /* what goes here? */ (n - 1) * n;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>因此arguments.callee诞生了。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1,2,3,4,5].map(function (n) {
    return !(n &gt; 1) ? 1 : arguments.callee(n - 1) * n;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>所以arguments要想调用自身的匿名函数，可以通过arguments.callee来调用。</p></blockquote>`,44),r=[t];function c(u,o){return n(),i("div",null,r)}const b=e(d,[["render",c],["__file","es6jiantouhanshu.html.vue"]]);export{b as default};
