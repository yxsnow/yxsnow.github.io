import{_ as e,o as n,c as i,a as l}from"./app-ff2f634e.js";const a={},r=l(`<ul><li>什么是 Generator： ES6 引入了 Generator 函数，可以通过 yield 关键字，把函数的执行流挂起，为改变执行流程提供了可能，从而为异步编程解决方案</li><li>如何使用 Generator：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Generator 函数的声明，* 可以不用紧跟着 function 
// function * g()、function *g() 均可
function* g(){
  yield 1
  yield 2
  yield 3
  return 4
}

const gen = g() // 此时并不会执行 g() 方法，只是拿到了该方法返回的遍历器对象
console.log(gen.next()) // {value: 1, done : false}
console.log(gen.next()) // {value: 2, done : false}
console.log(gen.next()) // {value: 3, done : false}
console.log(gen.next()) // {value: 4, done : true}  ，此时执行完了遍历器
console.log(gen.next()) // {value: undefined, done : true} ，因为遍历器已经执行完了，所以没有再返回值
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Generator 原理：</p><ul><li>Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。</li><li>整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用yield语句注明。Generator 函数的执行方法如下。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function* gen(x) {
  var y = yield x + 2;
  return y;
}

var g = gen(1);
g.next() // { value: 3, done: false }
g.next() // { value: undefined, done: true }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>上面代码中，调用 Generator 函数，会返回一个内部指针（即遍历器）g。这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象。调用指针g的next方法，会移动内部指针（即执行异步任务的第一段），指向第一个遇到的yield语句，上例是执行到x + 2为止。</li><li>换言之，next方法的作用是分阶段执行Generator函数。每次调用next方法，会返回一个对象，表示当前阶段的信息（value属性和done属性）。value属性是yield语句后面表达式的值，表示当前阶段的值；done属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段。</li></ul></li></ul><h3 id="知识拓展" tabindex="-1"><a class="header-anchor" href="#知识拓展" aria-hidden="true">#</a> 知识拓展</h3><ul><li><p>Generator 可以跟 Promise、Async / Await 一样用来解决异步回调的问题，但并不是其全部</p></li><li><p>Generator 的其他用法：</p><ul><li>生成一个无限列表，每次获取都递增1</li><li>完成类似C#的Linq的工作，即多个对数组元素的操作（Iterator）只需要遍历一次数组，比如这样：asGenerator(array).each(o -&gt; o.x++).where(o -&gt; o.x &gt; 10).map(o -&gt; o.x)，只有一次遍历</li><li>产生一个每次获取一个元素都有重要、高消耗的资源访问的列表，完成延迟加载模型来将高消耗的元素获取延迟到真正访问时，而不需要一开始就获取N次形成静态的数组</li></ul></li><li><p>进程：</p><ul><li>进程是操作系统进行资源分配的基本单位，每个进程都有自己的独立内存空间。</li></ul></li><li><p>线程：</p><ul><li>线程又叫做轻量级进程，是进程的一个实体，是处理器任务调度和执行的基本单位位。它是比进程更小的能独立运行的基本单位。</li><li>进程是操作系统资源分配的基本单位，而线程是处理器任务调度和执行的基本单位。</li><li>JS 执行是单线程</li></ul></li><li><p>协程：</p><ul><li>协程，又称微线程，是一种用户态的轻量级线程，协程的调度完全由用户控制（也就是在用户态执行）。</li><li>一个线程可以有多个协程。</li><li>Generator 是 JS 语言的协程实现。</li></ul></li><li><p>个人理解：</p><ul><li>本身对于协程的实现 Generator 应用并不多，上述很多内容均来自于网上已有的文章。实际中接触到 Generator 的项目，还是 Ant Design Pro 中用到的 redux-saga，其余便很少实践。</li><li>但是在查阅资料的过程中，发现大部分人认为 Generator 的目的是为了解决异步，在零星的一些文章中才看到了大家从 JS 语言的角度去理解 Generator 的应用，从协程的角度去理解，让我有了新的认识。</li><li>也许在更底层的项目设计中，Genetator 能够帮我解决一些问题，如果仅是为了实现异步调用，现有的 Promise 和 Async / Await 其实足矣，甚至更为方便。</li></ul></li></ul>`,5),d=[r];function s(t,o){return n(),i("div",null,d)}const v=e(a,[["render",s],["__file","shuoxia generator yuanli.html.vue"]]);export{v as default};
