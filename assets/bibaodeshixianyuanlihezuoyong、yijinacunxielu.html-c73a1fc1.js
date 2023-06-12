import{_ as l,r as a,o as t,c as o,b as n,d as e,e as s,a as r}from"./app-ff2f634e.js";const d={},c=n("h2",{id:"一、闭包的实现原理和作用-可以列举几个开发中闭包的实际应用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、闭包的实现原理和作用-可以列举几个开发中闭包的实际应用","aria-hidden":"true"},"#"),e(" 一、闭包的实现原理和作用，可以列举几个开发中闭包的实际应用")],-1),u=n("strong",null,"闭包的概念",-1),v={href:"https://so.csdn.net/so/search?q=%E4%BD%9C%E7%94%A8%E5%9F%9F&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},p=n("strong",null,"闭包的作用",-1),b={href:"https://so.csdn.net/so/search?q=%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},m=r(`<p>因为函数内部声明 的变量是局部的，只能在函数内部访问到，但是函数外部的变量是对函数内部可见的，这就是作用域链的特点了。</p><p>子级可以向父级查找变量，逐级查找，找到为止</p><p>因此我们可以在函数内部再创建一个函数，这样对内部的函数来说，外层函数的变量都是可见的，然后我们就可以访问到他的变量了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`&lt;script&gt;
    function  bar(){
        //外层函数声明的变量
        var value=1;

        function foo(){
            console.log(value);
        }
        return foo();
    };
    var bar2=bar;
    //实际上bar()函数并没有因为执行完就被垃圾回收机制处理掉
    //这就是闭包的作用，调用bar()函数，就会执行里面的foo函数，foo这时就会访问到外层的变量
    bar2();
&lt;/script&gt;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>foo（）包含bar（）内部作用域的闭包，使得该作用域能够一直存活，不会被垃圾回收机制处理掉，这就是闭包的作用，以供foo（）在任何时间进行引用。</p><p>3、<strong>闭包的优点：</strong></p><ul><li>方便调用上下文中声明的局部变量</li><li>逻辑紧密，可以在一个函数中再创建个函数，避免了传参的问题</li></ul><p>4、<strong>闭包的缺点：</strong></p>`,8),h={href:"https://so.csdn.net/so/search?q=%E5%86%85%E5%AD%98&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},g=r(`<p>5、<strong>闭包在实际中的应用</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`function addFn(a,b){
        return(function(){
            console.log(a+&quot;+&quot;+b);
        })
  }
    var test =addFn(a,b);
    setTimeout(test,3000);\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般setTimeout的第一个参数是个函数，但是不能传值。如果想传值进去，可以调用一个函数返回一个内部函数的调用，将内部函数的调用传给setTimeout。内部函数执行所需的参数，外部函数传给他，在setTimeout函数中也可以访问到外部函数。</p><h2 id="二、理解堆栈溢出和内存泄漏的原理-如何防止" tabindex="-1"><a class="header-anchor" href="#二、理解堆栈溢出和内存泄漏的原理-如何防止" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>二、理解堆栈溢出和内存泄漏的原理，如何防止</h2><p>1、<strong>内存泄露</strong>：是指申请的内存执行完后没有及时的清理或者销毁，占用空闲内存，内存泄露过多的话，就会导致后面的程序申请不到内存。因此内存泄露会导致内部内存溢出</p><p>2、<strong>堆栈溢出</strong>：是指内存空间已经被申请完，没有足够的内存提供了</p><p>3、在一些编程软件中，比如c语言中，需要使用malloc来申请内存空间，再使用free释放掉，需要手动清除。而js中是有自己的垃圾回收机制的，一般常用的垃圾收集方法就是标记清除。</p><p><strong>标记清除法</strong>：在一个变量进入执行环境后就给它添加一个标记：进入环境，进入环境的变量不会被释放，因为只要执行流进入响应的环境，就可能用到他们。当变量离开环境后，则将其标记为“离开环境”。</p><p>4、<strong>常见的内存泄露的原因</strong></p><ul><li>全局变量引起的内存泄露</li><li>闭包</li><li>没有被清除的计时器</li></ul><p>5、<strong>解决方法</strong></p><ul><li>减少不必要的全局变量</li><li>减少闭包的使用（因为闭包会导致内存泄露）</li><li>避免死循环的发生</li></ul>`,12);function _(f,x){const i=a("ExternalLinkIcon");return t(),o("div",null,[c,n("p",null,[e("1、"),u,e("：指有权访问另一个函数"),n("a",v,[e("作用域"),s(i)]),e("中的变量的函数，一般情况就是在一个函数中包含另一个函数。")]),n("p",null,[e("2、"),p,e("：访问函数内部变量、保持函数在环境中一直存在，不会被"),n("a",b,[e("垃圾回收"),s(i)]),e("机制处理")]),m,n("p",null,[e("因为使用闭包，可以使函数在执行完后不被销毁，保留在"),n("a",h,[e("内存"),s(i)]),e("中，如果大量使用闭包就会造成内存泄露，内存消耗很大")]),g])}const k=l(d,[["render",_],["__file","bibaodeshixianyuanlihezuoyong、yijinacunxielu.html.vue"]]);export{k as default};
