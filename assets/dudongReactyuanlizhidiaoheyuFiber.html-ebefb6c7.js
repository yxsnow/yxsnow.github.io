import{_ as d,r as s,o as r,c as t,b as e,d as i,e as a,a as n}from"./app-ff2f634e.js";const v="/assets/format_png_f8c387d3210e490698c1b80aa5066069-16f7da00.png",c={},o=n(`<h2 id="一-引沿" tabindex="-1"><a class="header-anchor" href="#一-引沿" aria-hidden="true">#</a> 一 引沿</h2><p>Fiber 架构是React16中引入的新概念，目的就是解决大型 React 应用卡顿，React在遍历更新每一个节点的时候都不是用的真实DOM，都是采用虚拟DOM，所以可以理解成fiber就是React的虚拟DOM，更新Fiber的过程叫做调和，每一个fiber都可以作为一个执行单元来处理，所以每一个 fiber 可以根据自身的过期时间expirationTime，来判断是否还有空间时间执行更新，如果没有时间更新，就要把主动权交给浏览器去渲染，做一些动画，重排（ reflow ），重绘 repaints 之类的事情，这样就能给用户感觉不是很卡。</p><h2 id="二-什么是调和" tabindex="-1"><a class="header-anchor" href="#二-什么是调和" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>二 什么是调和</h2><p>调和是一种算法，就是React对比新老虚拟DOM的过程，以决定需要更新哪一部分。</p><h2 id="三-什么是filber" tabindex="-1"><a class="header-anchor" href="#三-什么是filber" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>三 什么是Filber</h2><p>Fiber的目的是为了让React充分利用调度，以便做到如下几点：</p><ul><li>暂停工作，稍后再回来</li><li>优先考虑不同类型的工作</li><li>重用以前完成的工作</li><li>如果不再需要，则中止工作</li></ul><p>为了实现上面的要求，我们需要把任务拆分成一个个可执行的单元，这些可执行的单元就叫做一个Fiber，一个Fiber就代表一个可执行的单元。</p><p>一个Fiber就是一个普通的JS对象，包含一些组件的相关信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`function FiberNode(){
  this.tag = tag;                  // fiber 标签 证明是什么类型fiber。
  this.key = key;                  // key调和子节点时候用到。 
  this.type = null;                // dom元素是对应的元素类型，比如div，组件指向组件对应的类或者函数。 
  this.stateNode = null;           // 指向对应的真实dom元素，类组件指向组件实例，可以被ref获取。

  this.return = null;              // 指向父级fiber
  this.child = null;               // 指向子级fiber
  this.sibling = null;             // 指向兄弟fiber 
  this.index = 0;                  // 索引

  this.ref = null;                 // ref指向，ref函数，或者ref对象。

  this.pendingProps = pendingProps;// 在一次更新中，代表element创建
  this.memoizedProps = null;       // 记录上一次更新完毕后的props
  this.updateQueue = null;         // 类组件存放setState更新队列，函数组件存放
  this.memoizedState = null;       // 类组件保存state信息，函数组件保存hooks信息，dom元素为null
  this.dependencies = null;        // context或是时间的依赖项

  this.mode = mode;                //描述fiber树的模式，比如 ConcurrentMode 模式

  this.effectTag = NoEffect;       // effect标签，用于收集effectList
  this.nextEffect = null;          // 指向下一个effect

  this.firstEffect = null;         // 第一个effect
  this.lastEffect = null;          // 最后一个effect

  this.expirationTime = NoWork;    // 通过不同过期时间，判断任务是否过期， 在v17版本用lane表示。

  this.alternate = null;           //双缓存树，指向缓存的fiber。更新阶段，两颗树互相交替。
}\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>type 就是react的元素类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`export const FunctionComponent = 0;       // 对应函数组件
export const ClassComponent = 1;          // 对应的类组件
export const IndeterminateComponent = 2;  // 初始化的时候不知道是函数组件还是类组件 
export const HostRoot = 3;                // Root Fiber 可以理解为跟元素 ， 通过reactDom.render()产生的根元素
export const HostPortal = 4;              // 对应  ReactDOM.createPortal 产生的 Portal 
export const HostComponent = 5;           // dom 元素 比如 &lt;div&gt;
export const HostText = 6;                // 文本节点
export const Fragment = 7;                // 对应 &lt;React.Fragment&gt; 
export const Mode = 8;                    // 对应 &lt;React.StrictMode&gt; 
export const ContextConsumer = 9;         // 对应 &lt;Context.Consumer&gt;
export const ContextProvider = 10;        // 对应 &lt;Context.Provider&gt;
export const ForwardRef = 11;             // 对应 React.ForwardRef
export const Profiler = 12;               // 对应 &lt;Profiler/ &gt;
export const SuspenseComponent = 13;      // 对应 &lt;Suspense&gt;
export const MemoComponent = 14;          // 对应 React.memo 返回的组件\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如元素结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`export default class Parent extends React.Component{
   render(){
     return &lt;div&gt;
       &lt;h1&gt;hello，world&lt;/h1&gt;
       &lt;Child /&gt;
     &lt;/div&gt;
   }
}

function Child() {
  return &lt;p&gt;child&lt;/p&gt;
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的Filber结构如下：</p><p><img src="`+v+`" alt="alt 属性文本"></p><p>有了上面的概念后我们就自己实现一个Fiber的更新机制</p><h2 id="四-实现调和的过程" tabindex="-1"><a class="header-anchor" href="#四-实现调和的过程" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>四 实现调和的过程</h2><p>我们通过渲染一段jsx来说明React的调和过程，也就是我们要手写实现ReactDOM.render()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`const jsx = (
  &lt;div className=&quot;border&quot;&gt;
    &lt;h1&gt;hello&lt;/h1&gt;
    &lt;a href=&quot;https://www.reactjs.org/&quot;&gt;React&lt;/a&gt;
  &lt;/div&gt;
)

ReactDOM.render(
  jsx,
  document.getElementById(&#39;root&#39;)
);\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1. 创建FiberRoot</strong></p><p>react-dom.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`function createFiberRoot(element, container){
    return {
    type: container.nodeName.toLocaleLowerCase(),
    props: { children: element },
    stateNode: container
  }
}

function render(element, container) {
  const FibreRoot = createFiberRoot(element, container)
  scheduleUpdateOnFiber(FibreRoot)
}
export default { render }\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),u={href:"https://kc7474.com/archives/1473",target:"_blank",rel:"noopener noreferrer"},m=n(`<p><strong>2. render阶段</strong></p><p>调和的核心是render和commit，本文不讲调度过程，我们会简单的用requestIdleCallback代替React的调度过程。</p><p>ReactFiberWorkloop.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`let wipRoot = null // work in progress
let nextUnitOfwork = null // 下一个fiber节点

export function scheduleUpdateOnFiber(fiber) {
  wipRoot = fiber
  nextUnitOfwork = fiber
}

function workLoop(IdleDeadline) {
  while(nextUnitOfwork &amp;&amp; IdleDeadline.timeRemaining() &gt; 0) {
    nextUnitOfwork = performUnitOfWork(nextUnitOfwork)
  }
}

function performUnitOfWork() {}

requestIdleCallback(workLoop)\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一个 fiber 可以看作一个执行的单元，在调和过程中，每一个发生更新的 fiber 都会作为一次 workInProgress 。那么 workLoop 就是执行每一个单元的调度器，如果渲染没有被中断，那么 workLoop 会遍历一遍 fiber 树</p><p>performUnitOfWork 包括两个阶段:</p><ol><li>是向下调和的过程，就是由 fiberRoot 按照 child 指针逐层向下调和，期间会执行函数组件，实例类组件，diff 调和子节点</li><li>是向上归并的过程，如果有兄弟节点，会返回 sibling兄弟，没有返回 return 父级，一直返回到 fiebrRoot</li></ol><p>这么一上一下，构成了整个 fiber 树的调和。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`import { updateHostComponent } from &#39;./ReactFiberReconciler&#39;
function performUnitOfWork(wip) {
  // 1. 更新wip
  const { type } = wip
  if (isStr(type)) {
    // type是string，更新普通元素节点
    updateHostComponent(wip)
  } else if (isFn(type)) {
    // ...
  }

  // 2. 返回下一个要更新的任务 深度优先遍历
  if (wip.child) {
    return wip.child
  }
  let next = wip
  while(next) {
    if (next.sibling) {
      return next.sibling
    }
    next = next.return
  }
  return null
}\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据type类型区分是FunctionComponent/ClassComponent/HostComponent/… 本文中只处理HostComponent类型，其他类型的处理可以看文末的完整代码链接。</p><p>ReactFiberReconciler.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`import { createFiber } from &#39;./createFiber&#39;

export function updateHostComponent(wip) {
  if (!wip.stateNode) {
    wip.stateNode = document.createElement(wip.type);
    updateNode(wip.stateNode, wip.props);
  }
  // 调和子节点
  reconcileChildren(wip, wip.props.children);
}

function reconcileChildren(returnFiber, children) {
  if (isStr(children)) {
    return
  }

  const newChildren = isArray(children) ? children : [children];
  let previousNewFiber = null
  for(let i = 0; i &lt; newChildren.length; i++) {
    const newChild = newChildren[i];
    const newFiber = createFiber(newChild, returnFiber)

    if (previousNewFiber === null) {
      returnFiber.child = newFiber
    } else {
      previousNewFiber.sibling = newFiber
    }
    previousNewFiber = newFiber
  }
}

function updateNode(node, nextVal) {
  Object.keys(nextVal).forEach((k) =&gt; {
    if (k === &quot;children&quot;) {
      if (isStringOrNumber(nextVal[k])) {
        node.textContent = nextVal[k];
      }
    } else {
      node[k] = nextVal[k];
    }
  });
}\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>createFiber.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`export function createFiber(vnode, returnFiber) {
  const newFiber = {
    type: vnode.type,   // 标记节点类型
    key: vnode.key,     // 标记节点在当前层级下的唯一性
    props: vnode.props, // 属性
    stateNode: null,    // 如果组件是原生标签则是dom节点，如果是类组件则是类实例
    child: null,        // 第一个子节点
    return: returnFiber,// 父节点
    sibling: null,      // 下一个兄弟节点
  };

  return newFiber;
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此已经完成了render阶段，下面是commit阶段，commit阶段就是依据Fiber结构操作DOM</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`function workLoop(IdleDeadline) {
  while(nextUnitOfwork &amp;&amp; IdleDeadline.timeRemaining() &gt; 0) {
    nextUnitOfwork = performUnitOfWork(nextUnitOfwork)
  }

  // commit
  if (!nextUnitOfwork &amp;&amp; wipRoot) {
    commitRoot();
  }
}

function commitRoot() {
  commitWorker(wipRoot.child)
  wipRoot = null;
}

function commitWorker(wip) {
  if (!wip) {
    return
  }
  // 1. 提交自己
  const { stateNode } = wip
  let parentNode = wip.return.stateNode
  if (stateNode) {
    parentNode.appendChild(stateNode);
  }

  // 2. 提交子节点
  commitWorker(wip.child);

  // 3. 提交兄弟节点
  commitWorker(wip.sibling);
}\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-总结" tabindex="-1"><a class="header-anchor" href="#五-总结" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>五 总结</h2><ul><li>Fiber结构，Fiber的生成过程。</li><li>调和过程，以及 render 和 commit 两大阶段。</li></ul>`,18);function b(p,h){const l=s("ExternalLinkIcon");return r(),t("div",null,[o,e("p",null,[i("参考React实战视频讲解："),e("a",u,[i("进入学习"),a(l)])]),m])}const g=d(c,[["render",b],["__file","dudongReactyuanlizhidiaoheyuFiber.html.vue"]]);export{g as default};
