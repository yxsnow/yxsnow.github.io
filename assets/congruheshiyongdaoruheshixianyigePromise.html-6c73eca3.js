import{_ as e,o as i,c as n,a as s}from"./app-ff2f634e.js";const d="/assets/1d0cf25e98854a98ae45ba19b6370fa0_3a7309aee0e8488e9-a7f2b08a.png",l={},r=s(`<h2 id="promise是什么-主要用来解决什么问题" tabindex="-1"><a class="header-anchor" href="#promise是什么-主要用来解决什么问题" aria-hidden="true">#</a> promise是什么？主要用来解决什么问题？</h2><p>Promise是异步编程的一种解决方案，比传统解决方案–回调函数和事件–更合理更强大。</p><p><code>Promise</code>特点：</p><p>（1）对象的状态不受外界影响。<code>Promise</code>对象代表一个异步操作，有三种状态：<code>pending</code>(进行中)，<code>fulfilled</code>(已成功)和<code>reject</code>(已失败)。只有异步操作的结果，可以决定当前是哪一种状态，任何其它操作都无法改变这个状态。这也是<code>Promise</code>（承诺）这个名字的由来。</p><p>（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。<code>Promise</code>对象的状态改变，只有两种可能：从<code>pending</code>变为<code>fulfilled</code>和从<code>pending</code>变为<code>rejected</code>。</p><p>promise主要用来解决：</p><ul><li>回调地狱</li><li>并发请求</li><li>异步方案优化（但它本身不是异步的，new Promise()后，它会立即执行）</li></ul><h2 id="promise基本用法" tabindex="-1"><a class="header-anchor" href="#promise基本用法" aria-hidden="true">#</a> promise基本用法</h2><p>ES6规定，<code>Promise</code>对象是一个构造函数，用来生成<code>Promise</code>实例</p><p>下面代码创造了一个<code>Promise</code>实例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const promise = new Promise(function(resolve,reject){
    //...
    if(/*异步操作成功*/){
       resolve(value)
    }else{
        //异步操作失败
        reject(error)
    }
})
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Promise</code>构造函数接受一个函数作为参数，该函数的两个参数分别是<code>resolve</code>和<code>reject</code>.他们是两个函数，由JavaScript引擎提供，不用自己部署。</p><p><code>resolve</code>函数的作用是，将<code>Promise</code>对象的状态从“未完成”变成“成功”（即从pending变为resolve），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；<code>reject</code>函数的作用是，将<code>Promise</code>对象的状态从“未完成”变成“失败”（即从pending变为rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。</p><p><code>Promise</code>实例生成以后，可以用<code>then</code>方法分别指定<code>resolved</code>状态和<code>rejected</code>状态的回调函数,或用<code>catch</code>方法指定<code>rejected</code>状态的回调函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>promise.then(res=&gt;{
    //success
},error=&gt;{
    //error
}).catch(err=&gt;{})
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>then</code>方法可以接受两个回调函数作为参数，第一个回调函数是<code>Promise</code>对象的状态变为<code>resolved</code>时调用，第二个回调函数是<code>Promise</code>对象的状态变为<code>rejected</code>时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接收<code>Promise</code>对象传出的值作为参数。</p><p><strong>Ok,通过上面对promise基本用法的描述，我们大概知道了一个promise类里面都应该包含哪些内容了：</strong></p><ul><li><p>promise状态：pending，fulfilled，rejected</p></li><li><p>promise返回值</p></li><li><p>执行器：promise执行入口（也就是你传入的那个函数）</p></li><li><p>resolve：改变promise状态为fulfilled</p></li><li><p>reject：改变promise状态为rejected</p></li><li><p>then：接收两个回调，onFulfilled, onRejected。分别在promise状态变为fulfiled或rejected后执行</p></li><li><p>catch：接受一个回调，在promise状态变为rejected后执行</p></li></ul><h2 id="简单实现一个promise" tabindex="-1"><a class="header-anchor" href="#简单实现一个promise" aria-hidden="true">#</a> 简单实现一个promise</h2><p>我们知道了一个promise内容至少包含以上那些内容，所以一个简单的promise内部至少是这样的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class myPromise {
    static PENDING = &#39;pending&#39;
    static FULFILLEd = &#39;fulfilled&#39;
    static REJECTED = &#39;rejected&#39;
    constructor(init){
        this.state = myPromise.PENDING // promise状态
        this.promiseRes = null  // promise返回值
       	const resolve = result=&gt;{
        //...
        }
        const reject = result=&gt;{
           //...
        }
        try{
            init(resolve,reject)  // init就是初始化执行器
        }catch(err){
            reject(err)
        }
        
    }
    then(onFulfilled,onRejected){
       //...
    }
  	catch(onRejected){
      //...
    }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK，大概了解之后，我们再来一个一个的看里面每个部分的实现以及作用</p><h3 id="promise的执行器" tabindex="-1"><a class="header-anchor" href="#promise的执行器" aria-hidden="true">#</a> Promise的执行器</h3><p>它其实是我们在<code>new Promise</code>时传入的一个回调函数，这个函数本身是同步的，也就是说在<code>new Promise</code>时它就会执行，这也是我们操作promise的入口。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class myPromise{
  //...
  constructor(init){
        try{
            init(resolve,reject)  // init就是初始化执行器
        }catch(err){
            reject(err) //这里主要是在init执行器函数出错时，用以让promise状态变为rejected
        } 
    }
  //...
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该函数接受两个回调函数（resolve，reject）作为参数，用以改变Promise的状态</p><h3 id="resolve与reject方法" tabindex="-1"><a class="header-anchor" href="#resolve与reject方法" aria-hidden="true">#</a> resolve与reject方法</h3><p>这两个函数作为参数传到执行器函数中，用以后续改变Promise状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class myPromise {
    static PENDING = &#39;pending&#39;
    static FULFILLEd = &#39;fulfilled&#39;
    static REJECTED = &#39;rejected&#39;
    constructor(init){
        this.state = myPromise.PENDING // promise状态
        this.promiseRes = null  // promise返回值
        this.resolveCallback = [] //成功回调集合
        this.rejectCallback = [] //失败回调集合
        const resolve = result=&gt;{
            // 只有当状态为pending时才改变，保证状态一旦改变就不会再变
            if(this.state === myPromise.PENDING){
                this.state = myPromise.FULFILLEd //改变状态
                this.promiseRes = result //返回值
                //依次调用成功回调
                this.resolveCallback.forEach(fn=&gt;fn())
            }
        }
        const reject = result=&gt;{
            // 只有当状态为pending时才改变，保证状态一旦改变就不会再变
            if(this.state === myPromise.PENDING){
                this.state = myPromise.REJECTED //改变状态
                this.promiseRes = result //返回值
                // 依次调用失败回调
                this.rejectCallback.forEach(fn=&gt;fn())
            }
        }
        try{
            init(resolve,reject)  // 注意this指向
        }catch(err){
            reject(err)
        }
        
    }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初步then方法" tabindex="-1"><a class="header-anchor" href="#初步then方法" aria-hidden="true">#</a> 初步then方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class myPromise {
    static PENDING = &#39;pending&#39;
    static FULFILLEd = &#39;fulfilled&#39;
    static REJECTED = &#39;rejected&#39;
    constructor(init){
        this.state = myPromise.PENDING // promise状态
        this.promiseRes = null  // promise返回值
        this.resolveCallback = [] //成功回调集合
        this.rejectCallback = [] //失败回调集合
        const resolve = result=&gt;{
            // 只有当状态为pending时才改变，保证状态一旦改变就不会再变
            if(this.state === myPromise.PENDING){
                this.state = myPromise.FULFILLEd //改变状态
                this.promiseRes = result //返回值
                //依次调用成功回调
                this.resolveCallback.forEach(fn=&gt;fn())
            }
        }
        const reject = result=&gt;{
            // 只有当状态为pending时才改变，保证状态一旦改变就不会再变
            if(this.state === myPromise.PENDING){
                this.state = myPromise.REJECTED //改变状态
                this.promiseRes = result //返回值
                // 依次调用失败回调
                this.rejectCallback.forEach(fn=&gt;fn())
            }
        }
        try{
            init(resolve,reject)  // 注意this指向
        }catch(err){
            reject(err)
        }
        
    }
    then(onFulfilled,onRejected){
        if(this.state === myPromise.FULFILLEd &amp;&amp; typeof onFulfilled === &#39;function&#39;) {
            onFulfilled(this.promiseRes)
        }
        if(this.state === myPromise.REJECTED &amp;&amp; typeof onRejected === &#39;function&#39;) {
            onRejected(this.promiseRes)
        }
    }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写到这里，我们的promise已经初步成型了，我们可以来测试一下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const res1 = new myPromise((res,rej)=&gt;{
    res(&#39;成功啦～&#39;)
    rej(&#39;失败啦～&#39;)
})
res1.then((res)=&gt;{
    console.log(res)
},err=&gt;{
    console.log(err)
})
// 按照预期，这里应该是只会打印出成功啦～
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="promise1.png"></p><p>从上图看我们，是不是符合我们的预期，并且<code>myPromise</code>内部与原生的<code>Promise</code>也是非常相似的。你们是不是觉得这里已经没问题了，上面我们只是测了一下同步方法的执行，但别忘了，Promise主要是来解决异步问题的，我们再来试一下里面执行异步方法还符不符合我们的预期？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const res1 = new myPromise((res,rej)=&gt;{
    setTimeout(()=&gt;res(&#39;成功啦～&#39;),1000)
    // rej(&#39;失败啦～&#39;)
})
res1.then((res)=&gt;{
    console.log(res)
})
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们预期本来是一秒之后打印成功啦，但它并没有如我们所愿，反而是什么也没打印出来，这是因为在setTimeout执行之前（pen ding）这个then方法已经执行过了，1s后状态变成fulfilled时，then也不会再执行了。</p><p><strong>所以我们需要保证then方法的回调函数在promise状态变成<code>fulfilled</code>或<code>rejected</code>时再执行,那么当promise状态为<code>pending</code>时我们先要把回调存在对应的队列中，等后续状态改变后再执行</strong></p><h3 id="较完整then方法" tabindex="-1"><a class="header-anchor" href="#较完整then方法" aria-hidden="true">#</a> 较完整then方法</h3><p>OK，这里我们修改一下我们的then方法，让其保证异步代码执行的正确性 <strong>（具体实现微任务我们可以用 mutationObserver，这里我们就用setTimeout来模拟一下）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class myPromise {
    static PENDING = &#39;pending&#39;
    static FULFILLEd = &#39;fulfilled&#39;
    static REJECTED = &#39;rejected&#39;
    constructor(init){
        this.state = myPromise.PENDING // promise状态
        this.promiseRes = null  // promise返回值
        this.resolveCallback = [] //成功回调集合
        this.rejectCallback = [] //失败回调集合
        const resolve = result=&gt;{
            // 只有当状态为pending时才改变，保证状态一旦改变就不会再变
            if(this.state === myPromise.PENDING){
                this.state = myPromise.FULFILLEd //改变状态
                this.promiseRes = result //返回值
                //依次调用成功回调
                this.resolveCallback.forEach(fn=&gt;fn())
            }
        }
        const reject = result=&gt;{
            // 只有当状态为pending时才改变，保证状态一旦改变就不会再变
            if(this.state === myPromise.PENDING){
                this.state = myPromise.REJECTED //改变状态
                this.promiseRes = result //返回值
                // 依次调用失败回调
                this.rejectCallback.forEach(fn=&gt;fn())
            }
        }
        try{
            init(resolve,reject)  // 注意this指向
        }catch(err){
            reject(err)
        }
        
    }
    then(onFulfilled,onRejected){
        if(this.state === myPromise.FULFILLEd &amp;&amp; typeof onFulfilled === &#39;function&#39;) {
            onFulfilled(this.promiseRes)
        }
        if(this.state === myPromise.REJECTED &amp;&amp; typeof onRejected === &#39;function&#39;) {
            onRejected(this.promiseRes)
        }
        if(this.state === myPromise.PENDING){
            if(onFulfilled &amp;&amp; typeof onFulfilled === &#39;function&#39;){
                this.resolveCallback.push(()=&gt;
                // 这里我们用setTimeout来模拟实现then的微任务
                setTimeout(()=&gt;{
                    onFulfilled(this.promiseRes)
                },0)
                )
            }
            if(onRejected &amp;&amp; typeof onRejected === &#39;function&#39;){
                this.rejectCallback.push(()=&gt;
                // 这里我们用setTimeout来模拟实现then的微任务
                setTimeout(()=&gt;{
                    onRejected(this.promiseRes)
                },0)
                )
            }
        }
    }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们可以再测试一下上面那个异步函数的测试用例，发现它能够正确打印，OK，一个较完整的then方法就算实现了～</p><h3 id="then的链式调用" tabindex="-1"><a class="header-anchor" href="#then的链式调用" aria-hidden="true">#</a> then的链式调用</h3><p><code>then</code>方法会返回一个新的<code>Promise</code>（⚠️注意：不是原来的那个<code>Promise</code>）所以可以采用链式调用</p><p>采用链式的<code>then</code>，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个<code>Promise</code>对象（即有异步操作），这时后一个回调函数，就会等待该<code>Promise</code>对象的状态发生变化，才会被调用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>then(onFulfilled,onRejected){
        const {promiseRes,state} = this
        let promise = new myPromise((reso,reje)=&gt;{
            const resolveMyPromise = promiseRes =&gt; {
                try{
                    if(typeof onFulfilled !== &#39;function&#39;){
                        // 如果then的第一个回调不是一个函数，直接忽略，返回一个新的promise
                        reso(promiseRes)
                    }else{
                        // 获取第一个回调的执行结果
                        const res = onFulfilled(promiseRes)
                        // 看该执行结果是否是一个promise
                        if(res instanceof myPromise){
                            // 是一个promise,等它状态改变后再改变then返回的promise状态
                            res.then(reso,rej) 
                        }else{
                            // 不是一个promise，将它作为新的promise的resolve
                            reso(res)
                        }
                    }
                }catch(err){
                    //异常，直接将新的promise状态置为rejected
                    reje(err)
                }
            }
            const rejectMyPromise = promiseRes =&gt; {
                try{
                    if(typeof onRejected !== &#39;function&#39;){
                        // 如果then的第二个回调不是一个函数，直接忽略，返回一个新的promise
                        reje(promiseRes)
                    }else{
                        // 获取第二个回调的执行结果
                        const res = onRejected(promiseRes)
                        // 看该执行结果是否是一个promise
                        if(res instanceof myPromise){
                            // 是一个promise,等它状态改变后再改变then返回的promise状态
                            res.then(reso,rej) 
                        }else{
                            // 不是一个promise，将它作为新的promise的resolve
                            reje(res)
                        }
                    }
                    
                }catch(err){
                    //异常，直接将新的promise状态置为rejected
                    reje(err)
                }
            }
            if(state === myPromise.FULFILLEd) {
                resolveMyPromise(promiseRes)
            }
            if(state === myPromise.REJECTED) {
                rejectMyPromise(promiseRes)
            }
            if(state === myPromise.PENDING){
                if(onFulfilled &amp;&amp; typeof onFulfilled === &#39;function&#39;){
                    this.resolveCallback.push(()=&gt;
                    // 这里我们用setTimeout来模拟实现then的微任务
                    setTimeout(()=&gt;{
                        resolveMyPromise(this.promiseRes)
                    },0)
                    )
                }
                if(onRejected &amp;&amp; typeof onRejected === &#39;function&#39;){
                    this.rejectCallback.push(()=&gt;
                    // 这里我们用setTimeout来模拟实现then的微任务
                    setTimeout(()=&gt;{
                        rejectMyPromise(this.promiseRes)
                    },0)
                    )
                }
            }

        })
        return promise
    }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="catch方法" tabindex="-1"><a class="header-anchor" href="#catch方法" aria-hidden="true">#</a> catch方法</h3><p>我们知道then的第二个回调其实与catch方法是一样的，所以catch方法我们可以这样实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>catch(onRejected) {
        return this.then(undefined,onRejected)
    }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="promise-resolve" tabindex="-1"><a class="header-anchor" href="#promise-resolve" aria-hidden="true">#</a> Promise.resolve</h3><p>将对象转为一个promise对象，根据参数不通可分为四种情况</p><ul><li>参数是一个Promise实例，直接返回该实例</li><li>参数是一个<code>thenable</code>对象，将该对象转为Promise对象后，执行该对象的<code>then</code>方法</li><li>没有参数，也是返回一个状态为<code>resolved</code>的新的Promise对象</li><li>参数是一个一个原始值，返回一个新的Promise对象，状态为<code>resolved</code></li></ul><p><strong>手动实现：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>static resolve(v){
  //1.参数是一个Promise实例,直接返回
  if(v instanceof myPromise){
    return v
  }
  //2.参数是一个thenable对象，转为Promise后执行该对象的then方法
  if(typeof v === &#39;object&#39; &amp;&amp; typeof v.then === &#39;function&#39;){
    return new myPromise((res,rej)=&gt;{
      v.then(res,rej)
    })
  }
  //3.没有参数，直接返回一个resolved状态的promise
  if(!v){
    return new myPromise(res=&gt;{
      res()
    })
  }
  //4.参数是一个原始值，返回一个新的Promise，状态为resolved
  return new myPromise(res=&gt;{
    res(v)
  })
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="promise-reject" tabindex="-1"><a class="header-anchor" href="#promise-reject" aria-hidden="true">#</a> Promise.reject</h3><p>返回一个新的Promise对象，状态为<code>rejected</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>static reject(v){
  return new myPromise((res,rej)=&gt;{
    rej(v)
  })
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="promise-all" tabindex="-1"><a class="header-anchor" href="#promise-all" aria-hidden="true">#</a> Promise.all</h3><p>该方法用于将多个Promise实例包装成一个新的Promise实例,如果有不是Promise的项，则让该项直接成功</p><p><strong>用法：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const p = Promise.all([p1,p2,p3])
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>p</code>的状态由<code>p1</code>、<code>p2</code>、<code>p3</code>决定，分成两种情况。</p><p>（1）只有<code>p1</code>、<code>p2</code>、<code>p3</code>的状态都变成<code>fulfilled</code>，<code>p</code>的状态才会变成<code>fulfilled</code>，此时<code>p1</code>、<code>p2</code>、<code>p3</code>的返回值组成一个数组，传递给<code>p</code>的回调函数。</p><p>（2）只要<code>p1</code>、<code>p2</code>、<code>p3</code>之中有一个被<code>rejected</code>，<code>p</code>的状态就变成<code>rejected</code>，此时第一个被<code>reject</code>的实例的返回值，会传递给<code>p</code>的回调函数。</p><p>Ok,了解完<code>Promise.all</code>我们动手来实现一遍</p><p><strong>手动实现：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>static all (promises){
        return new myPromise((res,rej)=&gt;{
            let count = 0
            const result = [];
            function addFun(index,resf) {
                result[index]=resf // 这里用索引别用push,保证返回的顺序
                count++
                if(count==promises.length) {
                    res(result)
                }
            }
            [].forEach.call(promises,(promise,index)=&gt;{
                if(promise instanceof myPromise) {
                    promise.then(success=&gt;{
                        // count ++
                        // result.push(success)
                        addFun(index,success)
                    },err=&gt;{
                        rej(err)
                    })
                }else{
                    addFun(index,promise)
                }
            })
        })
    }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="promise-race" tabindex="-1"><a class="header-anchor" href="#promise-race" aria-hidden="true">#</a> Promise.race</h3><p><code>Promise.race()</code>方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。</p><p><strong>用法：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const p = Promise.race([p1, p2, p3]);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，只要<code>p1</code>、<code>p2</code>、<code>p3</code>之中有一个实例率先改变状态，<code>p</code>的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给<code>p</code>的回调函数。</p><p><strong>手动实现：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>static race(promises) {
        return new myPromise((res,rej)=&gt;{
            [].forEach.call(promises,promise=&gt;{
                if(promise instanceof myPromise){
                    promise.then(success=&gt;{
                        res(success)
                    },error=&gt;{
                        rej(error)
                    })
                }else{
                    res(promise)
                } 
            })
        })
    }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class myPromise {
    static PENDING = &#39;pending&#39;
    static FULFILLEd = &#39;fulfilled&#39;
    static REJECTED = &#39;rejected&#39;
    constructor(init){
        this.state = myPromise.PENDING // promise状态
        this.promiseRes = null  // promise返回值
        this.resolveCallback = [] //成功回调集合
        this.rejectCallback = [] //失败回调集合
        const resolve = result=&gt;{
            // 只有当状态为pending时才改变，保证状态一旦改变就不会再变
            if(this.state === myPromise.PENDING){
                this.state = myPromise.FULFILLEd //改变状态
                this.promiseRes = result //返回值
                //依次调用成功回调
                this.resolveCallback.forEach(fn=&gt;fn())
            }
        }
        const reject = result=&gt;{
            // 只有当状态为pending时才改变，保证状态一旦改变就不会再变
            if(this.state === myPromise.PENDING){
                this.state = myPromise.REJECTED //改变状态
                this.promiseRes = result //返回值
                // 依次调用失败回调
                this.rejectCallback.forEach(fn=&gt;fn())
            }
        }
        try{
            init(resolve,reject)  // 注意this指向
        }catch(err){
            reject(err)
        }
        
    }
    then(onFulfilled,onRejected){
        const {promiseRes,state} = this
        let promise = new myPromise((reso,reje)=&gt;{
            const resolveMyPromise = promiseRes =&gt; {
                try{
                    if(typeof onFulfilled !== &#39;function&#39;){
                        // 如果then的第一个回调不是一个函数，直接忽略，返回一个新的promise
                        reso(promiseRes)
                    }else{
                        // 获取第一个回调的执行结果
                        const res = onFulfilled(promiseRes)
                        // 看该执行结果是否是一个promise
                        if(res instanceof myPromise){
                            // 是一个promise,等它状态改变后再改变then返回的promise状态
                            res.then(reso,rej) 
                        }else{
                            // 不是一个promise，将它作为新的promise的resolve
                            reso(res)
                        }
                    }
                }catch(err){
                    //异常，直接将新的promise状态置为rejected
                    reje(err)
                }
            }
            const rejectMyPromise = promiseRes =&gt; {
                try{
                    if(typeof onRejected !== &#39;function&#39;){
                        // 如果then的第二个回调不是一个函数，直接忽略，返回一个新的promise
                        reje(promiseRes)
                    }else{
                        // 获取第二个回调的执行结果
                        const res = onRejected(promiseRes)
                        // 看该执行结果是否是一个promise
                        if(res instanceof myPromise){
                            // 是一个promise,等它状态改变后再改变then返回的promise状态
                            res.then(reso,rej) 
                        }else{
                            // 不是一个promise，将它作为新的promise的resolve
                            reje(res)
                        }
                    }
                    
                }catch(err){
                    //异常，直接将新的promise状态置为rejected
                    reje(err)
                }
            }
            if(state === myPromise.FULFILLEd) {
                resolveMyPromise(promiseRes)
            }
            if(state === myPromise.REJECTED) {
                rejectMyPromise(promiseRes)
            }
            if(state === myPromise.PENDING){
                if(onFulfilled &amp;&amp; typeof onFulfilled === &#39;function&#39;){
                    this.resolveCallback.push(()=&gt;
                    // 这里我们用setTimeout来模拟实现then的微任务
                    setTimeout(()=&gt;{
                        resolveMyPromise(this.promiseRes)
                    },0)
                    )
                }
                if(onRejected &amp;&amp; typeof onRejected === &#39;function&#39;){
                    this.rejectCallback.push(()=&gt;
                    // 这里我们用setTimeout来模拟实现then的微任务
                    setTimeout(()=&gt;{
                        rejectMyPromise(this.promiseRes)
                    },0)
                    )
                }
            }

        })
        return promise
    }
    catch(onRejected) {
        return this.then(undefined,onRejected)
    }
    static all (promises){
        return new myPromise((res,rej)=&gt;{
            let count = 0
            const result = [];
            function addFun(index,resf) {
                result[index]=resf // 这里用索引别用push,保证返回的顺序
                count++
                if(count==promises.length) {
                    res(result)
                }
            }
            [].forEach.call(promises,(promise,index)=&gt;{
                if(promise instanceof myPromise) {
                    promise.then(success=&gt;{
                        addFun(index,success)
                    },err=&gt;{
                        rej(err)
                    })
                }else{
                    addFun(index,promise)
                }
            })
        })
    }
    static race(promises) {
        return new myPromise((res,rej)=&gt;{
            [].forEach.call(promises,promise=&gt;{
                if(promise instanceof myPromise){
                    promise.then(success=&gt;{
                        res(success)
                    },error=&gt;{
                        rej(error)
                    })
                }else{
                    res(promise)
                } 
            })
        })
    }
    static resolve(v){
        //1.参数是一个Promise实例,直接返回
        if(v instanceof myPromise){
            return v
        }
        //2.参数是一个thenable对象，转为Promise后执行该对象的then方法
        if(typeof v === &#39;object&#39; &amp;&amp; typeof v.then === &#39;function&#39;){
            return new myPromise((res,rej)=&gt;{
                v.then(res,rej)
            })
        }
        //3.没有参数，直接返回一个resolved状态的promise
        if(!v){
            return new myPromise(res=&gt;{
                res()
            })
        }
        //4.参数是一个原始值，返回一个新的Promise，状态为resolved
        return new myPromise(res=&gt;{
            res(v)
        })
    }
    static reject(v){
        return new myPromise((res,rej)=&gt;{
            rej(v)
        })
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,76),v=[r];function c(a,m){return i(),n("div",null,v)}const u=e(l,[["render",c],["__file","congruheshiyongdaoruheshixianyigePromise.html.vue"]]);export{u as default};
