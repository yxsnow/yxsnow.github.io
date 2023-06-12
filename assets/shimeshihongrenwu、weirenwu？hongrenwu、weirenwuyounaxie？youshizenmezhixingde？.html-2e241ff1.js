import{_ as o,r as d,o as t,c as r,b as e,d as n,e as s,a as l}from"./app-ff2f634e.js";const a="/assets/watermark_type_ZmFuZ3poZW5naGVpd_266d9da587244d44a-a856be69.png",c={},v=e("h1",{id:"一、那么宏任务和微任务是什么呢",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、那么宏任务和微任务是什么呢","aria-hidden":"true"},"#"),n(" 一、那么宏任务和微任务是什么呢？")],-1),u=e("p",null,"首先，我们要先了解下 Js 。js 是一种单线程语言，简单的说就是：只有一条通道，那么在任务多的情况下，就会出现拥挤的情况，这种情况下就产生了 ‘多线程’ ，但是这种“多线程”是通过单线程模仿的，也就是假的。那么就产生了同步任务和异步任务。",-1),m={href:"https://blog.csdn.net/NancyFyn/article/details/118381312",target:"_blank",rel:"noopener noreferrer"},b=l('<blockquote><p>ES6 规范中，microtask 称为 jobs，macrotask 称为 task 宏任务是由宿主发起的，而微任务由JavaScript自身发起。</p></blockquote><p>在ES3以及以前的版本中，JavaScript本身没有发起异步请求的能力，也就没有微任务的存在。在ES5之后，JavaScript引入了Promise，这样，不需要浏览器，JavaScript引擎自身也能够发起异步任务了。</p><table><thead><tr><th>s</th><th>宏任务（macrotask）</th><th>微任务（microtask）</th></tr></thead><tbody><tr><td>谁发起的</td><td>宿主（Node、浏览器）</td><td>JS引擎</td></tr><tr><td>具体事件</td><td>1. script (可以理解为外层同步代码)2. setTimeout/setInterval3. UI rendering/UI事件4. postMessage，MessageChannel5. setImmediate，I/O（Node.js）</td><td>1. Promise2. MutaionObserver3. Object.observe（已废弃；Proxy 对象替代）4. process.nextTick（Node.js）</td></tr><tr><td>谁先运行</td><td>后运行</td><td>先运行</td></tr><tr><td>会触发新一轮Tick吗</td><td>会</td><td>不会</td></tr></tbody></table><h1 id="二、宏任务、微任务有哪些" tabindex="-1"><a class="header-anchor" href="#二、宏任务、微任务有哪些" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>二、宏任务、微任务有哪些？</h1><blockquote><p>宏任务：1. script (可以理解为外层同步代码)2. setTimeout/setInterval3. UI rendering/UI事件4. postMessage，MessageChannel5. setImmediate，I/O（Node.js）</p></blockquote><blockquote><p>微任务：1. Promise2.process.nextTick（Node.js） 3. Object.observe（已废弃；Proxy 对象替代）4. MutaionObserver</p></blockquote><h1 id="三、宏任务、微任务是怎么执行的" tabindex="-1"><a class="header-anchor" href="#三、宏任务、微任务是怎么执行的" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>三、宏任务、微任务是怎么执行的？</h1><blockquote><p>执行顺序：先执行同步代码，遇到异步宏任务则将异步宏任务放入宏任务队列中，遇到异步微任务则将异步微任务放入微任务队列中，当所有同步代码执行完毕后，再将异步微任务从队列中调入主线程执行，微任务执行完毕后再将异步宏任务从队列中调入主线程执行，一直循环直至所有任务执行完毕。</p></blockquote><p>这里容易产生一个<strong>错误的</strong>认识：就是微任务先于宏任务执行。实际上是先执行同步任务，异步任务有宏任务和微任务两种，先将宏任务添加到宏任务队列中，将宏任务里面的微任务添加到微任务队列中。所有同步执行完之后执行异步，再将异步微任务从队列中调入主线程执行，微任务执行完毕后再将异步宏任务从队列中调入主线程执行。之后就一直循环…</p><img width="962" height="806" src="'+a+`" class="jop-noMdConv"><h1 id="四、案例" tabindex="-1"><a class="header-anchor" href="#四、案例" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>四、案例</h1><p>例一、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`setTimeout(function(){
    console.log(&#39;1&#39;);
});
new Promise(function(resolve){		    
    console.log(&#39;2&#39;);
    resolve();
}).then(function(){		    
    console.log(&#39;3&#39;);
}).then(function(){
console.log(&#39;4&#39;)
}); 		
console.log(&#39;5&#39;);
// 2 5 3 4 1\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析：</p>`,14),h={href:"https://so.csdn.net/so/search?q=Promise&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},g=l(`<p>例二、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`setTimeout(()=&gt;{
  new Promise(resolve =&gt;{
  	resolve();
  }).then(()=&gt;{
  	console.log(&#39;test&#39;);
  });

  console.log(4);
});

new Promise(resolve =&gt; {
  resolve();
  console.log(1)
}).then( () =&gt; {
  console.log(3);
  Promise.resolve().then(() =&gt; {
    console.log(&#39;before timeout&#39;);
  }).then(() =&gt; {
    Promise.resolve().then(() =&gt; {
      console.log(&#39;also before timeout&#39;)
    })
  })
})
console.log(2);\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>1.遇到setTimeout，异步宏任务，将() =&gt; {console.log(4)}放入宏任务队列中；</p><p>2.遇到new Promise，new Promise在实例化的过程中所执行的代码都是同步进行的，所以输出1；</p><p>3.而Promise.then中注册的回调才是异步执行的，将其放入微任务队列中 4.遇到同步任务console.log(2)，输出2；主线程中同步任务执行完 5.从微任务队列中取出任务到主线程中，输出3，此微任务中又有微任务，Promise.resolve().then(微任务a).then(微任务b)，将其依次放入微任务队列中； 6.从微任务队列中取出任务a到主线程中，输出 before timeout； 7.从微任务队列中取出任务b到主线程中，任务b又注册了一个微任务c，放入微任务队列中； 8.从微任务队列中取出任务c到主线程中，输出 also before timeout；微任务队列为空 9.从宏任务队列中取出任务到主线程，此任务中注册了一个微任务d，将其放入微任务队列中，接下来遇到输出4，宏任务队列为空 10.从微任务队列中取出任务d到主线程 ，输出test，微任务队列为空</p></blockquote><p>例三、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`console.log(&#39;1&#39;);

setTimeout(function() {
    console.log(&#39;2&#39;);
    process.nextTick(function() {
        console.log(&#39;3&#39;);
    })
    new Promise(function(resolve) {
        console.log(&#39;4&#39;);
        resolve();
    }).then(function() {
        console.log(&#39;5&#39;)
    })
})
process.nextTick(function() {
    console.log(&#39;6&#39;);
})
new Promise(function(resolve) {
    console.log(&#39;7&#39;);
    resolve();
}).then(function() {
    console.log(&#39;8&#39;)
})

setTimeout(function() {
    console.log(&#39;9&#39;);
    process.nextTick(function() {
        console.log(&#39;10&#39;);
    })
    new Promise(function(resolve) {
        console.log(&#39;11&#39;);
        resolve();
    }).then(function() {
        console.log(&#39;12&#39;)
    })
})
// 1 7 6 8 2 4 3 5 9 11 10 12\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,7);function p(f,_){const i=d("ExternalLinkIcon");return t(),r("div",null,[v,u,e("p",null,[e("a",m,[n("js 同步任务和异步任务"),s(i)])]),b,e("blockquote",null,[e("p",null,[n("1.遇到setTimout，异步宏任务，放入宏任务队列中 2.遇到new "),e("a",h,[n("Promise"),s(i)]),n("，new Promise在实例化的过程中所执行的代码都是同步进行的，所以输出2 3.而Promise.then中注册的回调才是异步执行的，将其放入微任务队列中 4.遇到同步任务console.log(‘5’);输出5；主线程中同步任务执行完 5.从微任务队列中取出任务到主线程中，输出3、 4，微任务队列为空 6.从宏任务队列中取出任务到主线程中，输出1，宏任务队列为空")])]),g])}const k=o(c,[["render",p],["__file","shimeshihongrenwu、weirenwu？hongrenwu、weirenwuyounaxie？youshizenmezhixingde？.html.vue"]]);export{k as default};
