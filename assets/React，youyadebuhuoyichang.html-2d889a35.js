import{_ as d,r as l,o as t,c as a,b as n,d as e,e as r,a as s}from"./app-ff2f634e.js";const o={},c=s(`<h2 id="errorboundary" tabindex="-1"><a class="header-anchor" href="#errorboundary" aria-hidden="true">#</a> ErrorBoundary</h2><p>EerrorBoundary是16版本出来的，有人问那我的15版本呢，我不听我不听，反正我用16，当然15有<code>unstable_handleError</code>。</p><p>关于ErrorBoundary官网介绍比较详细，这个不是重点，重点是他能捕捉哪些异常。</p><ul><li>子组件的渲染</li><li>生命周期函数</li><li>构造函数</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return &lt;h1&gt;Something went wrong.&lt;/h1&gt;;
    }
    return this.props.children;
  }
}


&lt;ErrorBoundary&gt;
  &lt;MyWidget /&gt;
&lt;/ErrorBoundary&gt;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Freact-error-boundary",title:"https://www.npmjs.com/package/react-error-boundary",target:"_blank",rel:"noopener noreferrer"},u=n("code",null,"Reset",-1),m=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {ErrorBoundary} from &#39;react-error-boundary&#39;

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    &lt;div role=&quot;alert&quot;&gt;
      &lt;p&gt;Something went wrong:&lt;/p&gt;
      &lt;pre&gt;{error.message}&lt;/pre&gt;
      &lt;button onClick={resetErrorBoundary}&gt;Try again&lt;/button&gt;
    &lt;/div&gt;
  )
}

const ui = (
  &lt;ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() =&gt; {
      // reset the state of your app so the error doesn&#39;t happen again
    }}
  &gt;
    &lt;ComponentThatMayError /&gt;
  &lt;/ErrorBoundary&gt;
)
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遗憾的是，error boundaries并不会捕捉这些错误：</p><ul><li>事件处理程序</li><li>异步代码 (e.g. setTimeout or requestAnimationFrame callbacks)</li><li>服务端的渲染代码</li><li>error boundaries自己抛出的错误</li></ul>`,3),b={href:"https://link.juejin.cn?target=https%3A%2F%2Freactjs.org%2Fdocs%2Ferror-boundaries.html%23introducing-error-boundaries",title:"https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries",target:"_blank",rel:"noopener noreferrer"},h={href:"https://link.juejin.cn?target=https%3A%2F%2Freactjs.org%2Fdocs%2Ferror-boundaries.html%23how-about-event-handlers",title:"https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers",target:"_blank",rel:"noopener noreferrer"},p=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> handleClick() {
    try {
      // Do something that could throw
    } catch (error) {
      this.setState({ error });
    }
  }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="error-boundary-之外" tabindex="-1"><a class="header-anchor" href="#error-boundary-之外" aria-hidden="true">#</a> Error Boundary 之外</h2><p>我们先看看一张表格，罗列了我们能捕获异常的手段和范围。</p><table><thead><tr><th>异常类型</th><th>同步方法</th><th>异步方法</th><th>资源加载</th><th>Promise</th><th>async/await</th></tr></thead><tbody><tr><td>try/catch</td><td>√</td><td></td><td></td><td></td><td>√</td></tr><tr><td>window.onerror</td><td>√</td><td>√</td><td></td><td></td><td></td></tr><tr><td>error</td><td>√</td><td>√</td><td>√</td><td></td><td></td></tr><tr><td>unhandledrejection</td><td></td><td></td><td></td><td>√</td><td>√</td></tr></tbody></table><h3 id="try-catch" tabindex="-1"><a class="header-anchor" href="#try-catch" aria-hidden="true">#</a> try/catch</h3><p>可以捕获同步和async/await的异常。</p><h3 id="window-onerror-error事件" tabindex="-1"><a class="header-anchor" href="#window-onerror-error事件" aria-hidden="true">#</a> window.onerror , error事件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> window.addEventListener(&#39;error&#39;, this.onError, true);
    window.onerror = this.onError
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>window.addEventListener(&#39;error&#39;)</code> 这种可以比 <code>window.onerror</code> 多捕获资源记载异常. 请注意最后一个参数是 <code>true</code>, <code>false</code>的话可能就不如你期望。</p><p>当然你如果问题这第三个参数的含义，我就有点不想理你了。拜。</p><h3 id="unhandledrejection" tabindex="-1"><a class="header-anchor" href="#unhandledrejection" aria-hidden="true">#</a> unhandledrejection</h3><p>请注意最后一个参数是 <code>true</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.addEventListener(&#39;unhandledrejection&#39;, this.onReject, true)
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其捕获未被捕获的Promise的异常。</p><h3 id="xmlhttprequest-与-fetch" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest-与-fetch" aria-hidden="true">#</a> XMLHttpRequest 与 fetch</h3><p><code>XMLHttpRequest</code> 很好处理，自己有onerror事件。 当然你99.99%也不会自己基于<code>XMLHttpRequest</code>封装一个库， <code>axios</code> 真香，有这完毕的错误处理机制。</p><p>至于<code>fetch</code>, 自己带着catch跑，不处理就是你自己的问题了。</p>`,17),g={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Freact-error-catch",title:"https://www.npmjs.com/package/react-error-catch",target:"_blank",rel:"noopener noreferrer"},x=s(`<p>其核心如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> ErrorBoundary.prototype.componentDidMount = function () {
        // event catch
        window.addEventListener(&#39;error&#39;, this.catchError, true);
        // async code
        window.addEventListener(&#39;unhandledrejection&#39;, this.catchRejectEvent, true);
    };
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import ErrorCatch from &#39;react-error-catch&#39;

const App = () =&gt; {
  return (
  &lt;ErrorCatch
      app=&quot;react-catch&quot;
      user=&quot;cxyuns&quot;
      delay={5000}
      max={1}
      filters={[]}
      onCatch={(errors) =&gt; {
        console.log(&#39;报错咯&#39;);
        // 上报异常信息到后端，动态创建标签方式
        new Image().src = \`http://localhost:3000/log/report?info=\${JSON.stringify(errors)}\`
      }}
    &gt;
      &lt;Main /&gt;
    &lt;/ErrorCatch&gt;)
}

export default 
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>鼓掌，鼓掌。</p><p>其实不然： 利用error捕获的错误，其最主要的是提供了错误堆栈信息，对于分析错误相当不友好，尤其打包之后。</p><p>错误那么多，我就先好好处理React里面的事件处理程序。 至于其他，待续。</p><h2 id="事件处理程序的异常捕获" tabindex="-1"><a class="header-anchor" href="#事件处理程序的异常捕获" aria-hidden="true">#</a> 事件处理程序的异常捕获</h2><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>`,9),_={href:"https://link.juejin.cn?target=http%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fdecorator",title:"http://es6.ruanyifeng.com/#docs/decorator",target:"_blank",rel:"noopener noreferrer"},y=s(`<p>先看一下使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @methodCatch({ message: &quot;创建订单失败&quot;, toast: true, report:true, log:true })
    async createOrder() {
        const data = {...};
        const res = await createOrder();
        if (!res || res.errCode !== 0) {
            return Toast.error(&quot;创建订单失败&quot;);
        }
        
        .......
        其他可能产生异常的代码
        .......
        
       Toast.success(&quot;创建订单成功&quot;);
    }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意四个参数：</p><ul><li>message： 出现错误时，打印的错误</li><li>toast： 出现错误，是否Toast</li><li>report: 出现错误，是否上报</li><li>log: 使用使用console.error打印</li></ul><p>可能你说，这这，消息定死，不合理啊。我要是有其他消息呢。 此时我微微一笑别急， 再看一段代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @methodCatch({ message: &quot;创建订单失败&quot;, toast: true, report:true, log:true })
    async createOrder() {
        const data = {...};
        const res = await createOrder();
        if (!res || res.errCode !== 0) {
            return Toast.error(&quot;创建订单失败&quot;);
        }
       
        .......
        其他可能产生异常的代码
        .......
        
       throw new CatchError(&quot;创建订单失败了，请联系管理员&quot;, {
           toast: true,
           report: true,
           log: false
       })
       
       Toast.success(&quot;创建订单成功&quot;);

    }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是都，没错，你可以通过抛出 自定义的<code>CatchError</code>来覆盖之前的默认选项。</p><p>这个<code>methodCatch</code>可以捕获，同步和异步的错误，我们来一起看看全部的代码。</p><h3 id="类型定义" tabindex="-1"><a class="header-anchor" href="#类型定义" aria-hidden="true">#</a> 类型定义</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export interface CatchOptions {
    report?: boolean;
    message?: string;
    log?: boolean;
    toast?: boolean;
}

// 这里写到 const.ts更合理
export const DEFAULT_ERROR_CATCH_OPTIONS: CatchOptions = {
    report: true,
    message: &quot;未知异常&quot;,
    log: true,
    toast: false
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义的catcherror" tabindex="-1"><a class="header-anchor" href="#自定义的catcherror" aria-hidden="true">#</a> 自定义的CatchError</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { CatchOptions, DEFAULT_ERROR_CATCH_OPTIONS } from &quot;@typess/errorCatch&quot;;

export class CatchError extends Error {

    public __type__ = &quot;__CATCH_ERROR__&quot;;
    /**
     * 捕捉到的错误
     * @param message 消息
     * @options 其他参数
     */
    constructor(message: string, public options: CatchOptions = DEFAULT_ERROR_CATCH_OPTIONS) {
        super(message);
    }
}

复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Toast from &quot;@components/Toast&quot;;
import { CatchOptions, DEFAULT_ERROR_CATCH_OPTIONS } from &quot;@typess/errorCatch&quot;;
import { CatchError } from &quot;@util/error/CatchError&quot;;

const W_TYPES = [&quot;string&quot;, &quot;object&quot;];
export function methodCatch(options: string | CatchOptions = DEFAULT_ERROR_CATCH_OPTIONS) {

    const type = typeof options;

    let opt: CatchOptions;

    
    if (options == null || !W_TYPES.includes(type)) { // null 或者 不是字符串或者对象
        opt = DEFAULT_ERROR_CATCH_OPTIONS;
    } else if (typeof options === &quot;string&quot;) {  // 字符串
        opt = {
            ...DEFAULT_ERROR_CATCH_OPTIONS,
            message: options || DEFAULT_ERROR_CATCH_OPTIONS.message,
        }
    } else { // 有效的对象
        opt = { ...DEFAULT_ERROR_CATCH_OPTIONS, ...options }
    }

    return function (_target: any, _name: string, descriptor: PropertyDescriptor): any {

        const oldFn = descriptor.value;

        Object.defineProperty(descriptor, &quot;value&quot;, {
            get() {
                async function proxy(...args: any[]) {
                    try {
                        const res = await oldFn.apply(this, args);
                        return res;
                    } catch (err) {
                        // if (err instanceof CatchError) {
                        if(err.__type__ == &quot;__CATCH_ERROR__&quot;){
                            err = err as CatchError;
                            const mOpt = { ...opt, ...(err.options || {}) };

                            if (mOpt.log) {
                                console.error(&quot;asyncMethodCatch:&quot;, mOpt.message || err.message , err);
                            }

                            if (mOpt.report) {
                                // TODO::
                            }

                            if (mOpt.toast) {
                                Toast.error(mOpt.message);
                            }

                        } else {
                            
                            const message = err.message || opt.message;
                            console.error(&quot;asyncMethodCatch:&quot;, message, err);

                            if (opt.toast) {
                                Toast.error(message);
                            }
                        }
                    }
                }
                proxy._bound = true;
                return proxy;
            }
        })
        return descriptor;
    }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结一下" tabindex="-1"><a class="header-anchor" href="#总结一下" aria-hidden="true">#</a> 总结一下</h2><ol><li>利用装饰器重写原方法，达到捕获错误的目的</li><li>自定义错误类，抛出它，就能达到覆盖默认选项的目的。增加了灵活性。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @methodCatch({ message: &quot;创建订单失败&quot;, toast: true, report:true, log:true })
    async createOrder() {
        const data = {...};
        const res = await createOrder();
        if (!res || res.errCode !== 0) {
            return Toast.error(&quot;创建订单失败&quot;);
        }
       Toast.success(&quot;创建订单成功&quot;);
       
        .......
        其他可能产生异常的代码
        .......
        
       throw new CatchError(&quot;创建订单失败了，请联系管理员&quot;, {
           toast: true,
           report: true,
           log: false
       })
    }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步" aria-hidden="true">#</a> 下一步</h2><p>啥下一步，走一步看一步啦。</p><p>不，接下来的路，还很长。 这才是一个基础版本。</p><ol><li>扩大成果，支持更多类型，以及hooks版本。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @XXXCatch
classs AAA{
    @YYYCatch
    method = ()=&gt; {
    }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>抽象，再抽象，再抽象</li></ol><p>玩笑开完了，严肃一下：</p><p><strong>当前方案存在的问题:</strong></p><ol><li>功能局限</li><li>抽象不够 获取选项,代理函数, 错误处理函数完全可以分离，变成通用方法。</li><li>同步方法经过转换后会变为异步方法。 所以理论上，要区分同步和异步方案。</li><li>错误处理函数再异常怎么办</li></ol><p>之后，我们会围绕着这些问题，继续展开。</p><h2 id="hooks版本" tabindex="-1"><a class="header-anchor" href="#hooks版本" aria-hidden="true">#</a> Hooks版本</h2><p>有掘友说，这个年代了，谁还不用Hooks。 是的，大佬们说得对，我们得与时俱进。 Hooks的基础版本已经有了，先分享使用，后续的文章跟上。</p><p>Hook的名字就叫useCatch</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> const TestView: React.FC&lt;Props&gt; = function (props) {

    const [count, setCount] = useState(0);

    
    const doSomething  = useCatch(async function(){
        console.log(&quot;doSomething: begin&quot;);
        throw new CatchError(&quot;doSomething error&quot;)
        console.log(&quot;doSomething: end&quot;);
    }, [], {
        toast: true
    })

    const onClick = useCatch(async (ev) =&gt; {
        console.log(ev.target);
        setCount(count + 1);

        doSomething();

        const d = delay(3000, () =&gt; {
            setCount(count =&gt; count + 1);
            console.log()
        });
        console.log(&quot;delay begin:&quot;, Date.now())

        await d.run();
        
        console.log(&quot;delay end:&quot;, Date.now())
        console.log(&quot;TestView&quot;, this)
        throw new CatchError(&quot;自定义的异常，你知道不&quot;)
    },
        [count],
        {
            message: &quot;I am so sorry&quot;,
            toast: true
        });

    return &lt;div&gt;
        &lt;div&gt;&lt;button onClick={onClick}&gt;点我&lt;/button&gt;&lt;/div&gt;
        &lt;div&gt;{count}&lt;/div&gt;
    &lt;/div&gt;
}

export default React.memo(TestView);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至于思路，基于<code>useMemo</code>,可以先看一下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export function useCatch&lt;T extends (...args: any[]) =&gt; any&gt;(callback: T, deps: DependencyList, options: CatchOptions =DEFAULT_ERRPR_CATCH_OPTIONS): T {    

    const opt =  useMemo( ()=&gt; getOptions(options), [options]);
    
    const fn = useMemo((..._args: any[]) =&gt; {
        const proxy = observerHandler(callback, undefined, function (error: Error) {
            commonErrorHandler(error, opt)
        });
        return proxy;

    }, [callback, deps, opt]) as T;

    return fn;
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function f(C,q){const i=l("ExternalLinkIcon");return t(),a("div",null,[c,n("p",null,[e("开源世界就是好，早有大神封装了"),n("a",v,[e("react-error-boundary"),r(i)]),e(" 这种优秀的库。 你只需要关心出现错误后需要关心什么，还以来个 "),u,e(", 完美。")]),m,n("p",null,[e("原文可见参见官网"),n("a",b,[e("introducing-error-boundaries"),r(i)])]),n("p",null,[e("本文要捕获的就是 事件处理程序的错误。 官方其实也是有方案的"),n("a",h,[e("how-about-event-handlers"),r(i)]),e("， 就是 try catch. 但是，那么多事件处理程序，我的天，得写多少，。。。。。。。。。。。。。。。。。。。。")]),p,n("p",null,[e("这么多，太难了。 还好，其实有一个库 "),n("a",g,[e("react-error-catch"),r(i)]),e(" 是基于ErrorBoudary,error与unhandledrejection封装的一个组件。")]),x,n("p",null,[e("我的思路原理很简单，使用"),n("a",_,[e("decorator"),r(i)]),e("来重写原来的方法。")]),y])}const w=d(o,[["render",f],["__file","React，youyadebuhuoyichang.html.vue"]]);export{w as default};
