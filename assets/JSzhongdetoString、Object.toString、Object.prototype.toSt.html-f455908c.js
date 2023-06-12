import{_ as r,r as c,o as l,c as a,b as e,d as t,e as i,a as o}from"./app-ff2f634e.js";const d={},s=o(`<h3 id="object-tostring与object-prototype-tostring的区别" tabindex="-1"><a class="header-anchor" href="#object-tostring与object-prototype-tostring的区别" aria-hidden="true">#</a> Object.toString与Object.prototype.toString的区别</h3><p>首先明确一下toString相同的调用方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.  console.log(toString === window.toString); // true
2.  console.log(window.toString === Object.prototype.toString); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),u={href:"https://so.csdn.net/so/search?q=%E5%8E%9F%E5%9E%8B%E9%93%BE&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/z1324402468/article/details/89682764",target:"_blank",rel:"noopener noreferrer"},v=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.  Object.prototype.toString.call(&#39;&#39;);                            //[object String]
2.  Object.prototype.toString.call(1);                             //[object Number]
3.  Object.prototype.toString.call(true);                          //[object Boolean]
4.  Object.prototype.toString.call([]);                            //[object Array]
5.  Object.prototype.toString.call({});                            //[object Object]
6.  Object.prototype.toString.call(undefined);                     //[object Undefined]
7.  Object.prototype.toString.call(null);                          //[object Null]
8.  Object.prototype.toString.call(new Function());                //[object Function]
9.  Object.prototype.toString.call(new Date());                    //[object Date]
10. Object.prototype.toString.call(new RegExp());                  //[object RegExp]
11. Object.prototype.toString.call(new Error());                   //[object Error]
13. Object.prototype.toString.call(document);                      //[object HTMLDocument]
14. document.toString();                                           //[object HTMLDocument]
15. Object.prototype.toString.call(window);                        //[object Window]
16. window.toString();                                             //[object Window]
19. //toString通过原型链调用Object.prototype.toString，可达到同样效果
20. toString.call([]);                                             //[object Array]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>由此而引出疑问，为何通过Object.toString的方式不能调用原型链上的toString方法呢？</strong></p><p>虽然所有对象的原型链最顶端都是Object.prototype，但同时Object本身也是一个构造函数，继承于Function，调用Object.toString最终通过原型链调用的是Function.prototype.toString。相关关系如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.  Object.prototype.__proto__ === null; // true
2.  Function.prototype.__proto__ === Object.prototype; //true
4.  Object.toString === Function.prototype.toString; //true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js内置对象即构造函数的tostring方法" tabindex="-1"><a class="header-anchor" href="#js内置对象即构造函数的tostring方法" aria-hidden="true">#</a> <a href="#"></a>JS内置对象即构造函数的toString方法</h3><p>Number、String，Boolean，Array，RegExp、Date、Function等内置对象均重写了Object原型上的toString方法，作用为将当前数据类型转为字符串类型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.  Number.toString();           // &quot;function Number() { [native code] }&quot;
    
2.  String.toString();           // &quot;function String() { [native code] }&quot;
    
3.  Boolean.toString();          // &quot;function Boolean() { [native code] }&quot;
    
4.  Array.toString();            // &quot;function Array() { [native code] }&quot;
    
5.  RegExp.toString();           // &quot;function RegExp() { [native code] }&quot;
    
6.  Date.toString();             // &quot;function Date() { [native code] }&quot;
    
7.  RegExp.toString();           // &quot;function RegExp() { [native code] }&quot;
    
8.  Function.toString();         // &quot;function Function() { [native code] }&quot;
    


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function p(g,m){const n=c("ExternalLinkIcon");return l(),a("div",null,[s,e("p",null,[t("Object"),e("a",u,[t("原型链"),i(n)]),t("上的toString方法可以用于对象类型的判断，如常用的区分数组与普通对象。（"),e("a",b,[t("参考文章"),i(n)]),t("）")]),v])}const j=r(d,[["render",p],["__file","JSzhongdetoString、Object.toString、Object.prototype.toSt.html.vue"]]);export{j as default};
