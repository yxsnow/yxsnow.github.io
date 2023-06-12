import{_ as t,r,o as a,c as l,b as e,d as n,e as s,a as d}from"./app-ff2f634e.js";const c={},o=e("h1",{id:"三大原则",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#三大原则","aria-hidden":"true"},"#"),n(" 三大原则")],-1),v=e("p",null,"Redux 可以用这三个基本原则来描述：",-1),u=e("h3",{id:"单一数据源",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#单一数据源","aria-hidden":"true"},"#"),n(" 单一数据源")],-1),m={href:"https://www.redux.org.cn/docs/introduction/../Glossary.html#state",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.redux.org.cn/docs/introduction/../Glossary.html#store",target:"_blank",rel:"noopener noreferrer"},h=d(`<p>这让同构应用开发变得非常容易。来自服务端的 state 可以在无需编写更多代码的情况下被序列化并注入到客户端中。由于是单一的 state tree ，调试也变得非常容易。在开发中，你可以把应用的 state 保存在本地，从而加快开发速度。此外，受益于单一的 state tree ，以前难以实现的如“撤销/重做”这类功能也变得轻而易举。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(store.getState())

/* 输出
{
  visibilityFilter: &#39;SHOW_ALL&#39;,
  todos: [
    {
      text: &#39;Consider using Redux&#39;,
      completed: true,
    },
    {
      text: &#39;Keep all state in a single tree&#39;,
      completed: false
    }
  ]
}
*／ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-是只读的" tabindex="-1"><a class="header-anchor" href="#state-是只读的" aria-hidden="true">#</a> State 是只读的</h3>`,3),_={href:"https://www.redux.org.cn/docs/introduction/../Glossary.html#action",target:"_blank",rel:"noopener noreferrer"},p=d(`<p>这样确保了视图和网络请求都不能直接修改 state，相反它们只能表达想要修改的意图。因为所有的修改都被集中化处理，且严格按照一个接一个的顺序执行，因此不用担心 race condition 的出现。 Action 就是普通对象而已，因此它们可以被日志打印、序列化、储存、后期调试或测试时回放出来。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>store.dispatch({
  type: &#39;COMPLETE_TODO&#39;,
  index: 1
})

store.dispatch({
  type: &#39;SET_VISIBILITY_FILTER&#39;,
  filter: &#39;SHOW_COMPLETED&#39;
}) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用纯函数来执行修改" tabindex="-1"><a class="header-anchor" href="#使用纯函数来执行修改" aria-hidden="true">#</a> 使用纯函数来执行修改</h3>`,3),x={href:"https://www.redux.org.cn/docs/introduction/../Glossary.html#reducer",target:"_blank",rel:"noopener noreferrer"},f=d(`<p>Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state。刚开始你可以只有一个 reducer，随着应用变大，你可以把它拆成多个小的 reducers，分别独立地操作 state tree 的不同部分，因为 reducer 只是函数，你可以控制它们被调用的顺序，传入附加数据，甚至编写可复用的 reducer 来处理一些通用任务，如分页器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> function visibilityFilter(state = &#39;SHOW_ALL&#39;, action) {
  switch (action.type) {
    case &#39;SET_VISIBILITY_FILTER&#39;:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case &#39;ADD_TODO&#39;:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case &#39;COMPLETE_TODO&#39;:
      return state.map((todo, index) =&gt; {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

import { combineReducers, createStore } from &#39;redux&#39;
let reducer = combineReducers({ visibilityFilter, todos })
let store = createStore(reducer) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是这样，现在你应该明白 Redux 是怎么回事了。</p>`,3);function g(w,y){const i=r("ExternalLinkIcon");return a(),l("div",null,[o,v,u,e("p",null,[e("strong",null,[n("整个应用的 "),e("a",m,[n("state"),s(i)]),n(" 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 "),e("a",b,[n("store"),s(i)]),n(" 中。")])]),h,e("p",null,[e("strong",null,[n("唯一改变 state 的方法就是触发 "),e("a",_,[n("action"),s(i)]),n("，action 是一个用于描述已发生事件的普通对象。")])]),p,e("p",null,[e("strong",null,[n("为了描述 action 如何改变 state tree ，你需要编写 "),e("a",x,[n("reducers"),s(i)]),n("。")])]),f])}const L=t(c,[["render",g],["__file","sandayuanze · Redux.html.vue"]]);export{L as default};
