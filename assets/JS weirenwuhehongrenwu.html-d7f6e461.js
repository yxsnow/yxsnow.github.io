import{_ as e,o as t,c as i,a as s}from"./app-ff2f634e.js";const a="/assets/watermark_type_ZmFuZ3poZW5naGVpd_6a77aa405d2f4aaab-ad0b340b.png",o="/assets/watermark_type_ZmFuZ3poZW5naGVpd_bf3c25120cdd40129-efb96548.png",r="/assets/watermark_type_ZmFuZ3poZW5naGVpd_d98f5f91ea214b4fb-68a0c358.png",l="/assets/watermark_type_ZmFuZ3poZW5naGVpd_1ad6cbcd6692446d9-ad83f5aa.png",c={},n=s('<h2 id="单线程和任务队列" tabindex="-1"><a class="header-anchor" href="#单线程和任务队列" aria-hidden="true">#</a> 单线程和任务队列</h2><ol><li>单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等待。</li><li>如果排队是因为计算量过大，CPU忙不过来，倒也算了，但是很多时候CPU是闲着的，因为IO设备(输入输出设备)很慢（比如Ajax操作从网络读取数据），不得不等着结果出来，再往下执行!</li><li>JavaScript语言的设计者意识到，这时主线程完全可以不管IO设备，挂起处于等待中的任务，先运行排在后边的任务，等到IO设备返回了结果，再回过头把挂起的任务继续执行下去</li><li>于是，所有的任务可以分为两种，一种是同步任务（synchronous），另外一种是异步任务(asynchronous)。同步任务指的是，在主线程上，排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务;异步任务指的是，不进入主线程，而进入“任务队列”（task queue）的任务，只有“任务队列”通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。</li></ol><p><strong>javascript事件循环</strong></p><ol><li>同步任务：直接通过主线程执行，如script代码</li><li>异步任务： 进入Event Table,并注册回调函数——&gt; Event Queue,等主线程的执行栈为空时候，读取Event Queue里面的函数就，进入主线程。如setTimeout,promise.then()等；</li></ol><p>==javascript是单线程的，但是浏览器是多线程的，典型的浏览器有如下线程：==</p><ul><li>javascript引擎线程</li><li>界面渲染线程</li><li>浏览器事件触发线程</li><li>Http请求线程</li></ul><p><strong>关于javaScript的单线程</strong></p><ul><li>应用场景决定了javascript的单线程的特性，假如javascript是多线程，同时进行：一个线程对某一个dom进行添加属性操作，另一个线程对该线程进行删除操作，那么浏览器该听哪一个。这就决定javascript必须是单线程。</li><li>web worker:是一个多线程。它出现的目的是当浏览器有大量密集的计算时候或者响应时间很长的运算时候，页面出现卡顿，可以起一个worker子线程，主线程和worker线程互不干预，这样页面就可以进行点击之类的操作，但这个子线程不能操作DOM元素。</li></ul><p><strong>任务队列</strong></p><blockquote><p>Js 中，有两类任务队列：宏任务队列（macro tasks）和微任务队列（microtasks）。宏任务队列可以有多个，微任务队列只有一个</p></blockquote><ul><li>宏任务：script（全局任务）, setTimeout, setInterval, setImmediate, I/O, UI rendering.</li><li>微任务：process.nextTick （node.js中进程相关的对象）, Promise, Object.observer, MutationObserver。</li></ul><img width="962" height="789" src="'+a+'"><h2 id="宏任务-macrotask-和微任务-microtask" tabindex="-1"><a class="header-anchor" href="#宏任务-macrotask-和微任务-microtask" aria-hidden="true">#</a> <a id="t1"></a><a id="macrotask_microtask__29"></a>宏任务（macrotask ）和微任务（microtask ）</h2><blockquote><p>macrotask 和 microtask 表示异步任务的两种分类。</p></blockquote><p>==宏任务（task）==：就是JS 内部（任务队列里）的任务，严格按照时间顺序压栈和执行。如 setTimeOut、setInverter、setImmediate 、 MessageChannel等</p><p>==微任务（Microtask ）==：通常来说就是需要在当前 任务 执行结束后立即执行的任务，例如需要对一系列的任务做出回应，或者是需要异步的执行任务而又不需要分配一个新的 任务 ，这样便可以减小一点性能的开销。</p><p>在挂起任务时，JS 引擎会将所有任务按照类别分到这两个队列中，首先在 macrotask 的队列（这个队列也被叫做 task queue）中取出第一个任务，执行完毕后取出 microtask 队列中的所有任务顺序执行；之后再取 macrotask 任务，周而复始，直至两个队列的任务都取完。</p><p><strong>宏任务与微任务的关系：</strong><img width="962" height="806" src="'+o+'"><strong>宏任务与微任务属性机制:</strong><img src="'+r+'" alt="在这里插入图片描述"><strong>运行机制:</strong></p><ol><li><p>在执行栈中执行一个宏任务。</p></li><li><p>执行过程中遇到微任务，将微任务添加到微任务队列中。</p></li><li><p>当前宏任务执行完毕，立即执行微任务队列中的任务。</p></li><li><p>当前微任务队列中的任务执行完毕，检查渲染，GUI线程接管渲染。</p></li><li><p>渲染完毕后，js线程接管，开启下一次事件循环，执行下一次宏任务（事件队列中取）。</p></li></ol><p><strong>让我们先来看一段代码：</strong><img src="'+l+'" alt="在这里插入图片描述"></p><ol><li>首先浏览器执行js进入第一个宏任务进入主线程, 直接打印console.log(‘1’)</li><li>遇到 <strong>setTimeout</strong> 分发到宏任务Event Queue中</li><li>遇到 process.nextTick 丢到微任务Event Queue中</li><li>遇到 Promise， new Promise 直接执行 输出 console.log(‘7’);</li><li>执行then 被分发到微任务Event Queue中``</li><li>第一轮宏任务执行结束，开始执行微任务 打印 6,8</li><li>第一轮微任务执行完毕，执行第二轮宏事件，执行setTimeout</li><li>先执行主线程宏任务，在执行微任务，打印’2,4,3,5’</li><li>在执行第二个setTimeout,同理打印 ‘9,11,10,12’</li><li>整段代码，共进行了三次事件循环，完整的输出为1，7，6，8，2，4，3，5，9，11，10，12。</li></ol><p>以上是在浏览器环境下执行的数据，只作为宏任务和微任务的分析，我在node环境下测试打印出来的顺序为：1，7，6，8，2，4，9，11，3，10，5，12。node环境执行结果和浏览器执行结果不一致的原因是：浏览器的Event loop是在HTML5中定义的规范，而node中则由libuv库实现。libuv库流程大体分为6个阶段：timers，I/O callbacks，idle、prepare，poll，check，close callbacks，和浏览器的microtask，macrotask那一套有区别。</p><p><strong>注意事项：</strong></p><ol><li>先是宏任务–&gt;微任务–&gt;宏任务–&gt;微任务一直循环下去；</li><li>script代码为第一层宏任务，如果有setTimeout，setInterval，则他们的回调函数会成为第二层的宏任务，</li><li>promise.then()和process.nextTick()是微任务，在执行完该一层的宏任务后执行，==且process.nextTick()优先于promise.then();==</li></ol><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> <a id="t2"></a><a id="_76"></a>小结</h2><ol><li>macrotask（按优先级顺序排列）: script(你的全部JS代码，“同步代码”）, setTimeout, setInterval, setImmediate, I/O,UI rendering</li><li>microtask（按优先级顺序排列）:process.nextTick,Promises（这里指浏览器原生实现的 Promise）, Object.observe, MutationObserver</li><li>JS引擎首先从macrotask queue中取出第一个任务，执行完毕后，将microtask queue中的所有任务取出，按顺序全部执行；</li><li>然后再从macrotask queue（宏任务队列）中取下一个，执行完毕后，再次将microtask queue（微任务队列）中的全部取出；</li><li>循环往复，直到两个queue中的任务都取完。</li></ol><p><strong>提别强调：</strong></p><p>队列的优先级执行顺序为： ==先执行同步和立即执行任务&gt;microtask&gt;macrotask==</p>',28),p=[n];function m(u,d){return t(),i("div",null,p)}const g=e(c,[["render",m],["__file","JS weirenwuhehongrenwu.html.vue"]]);export{g as default};
