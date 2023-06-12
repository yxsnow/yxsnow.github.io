import{_ as s,r as d,o as l,c as a,b as e,d as n,e as t,a as r}from"./app-ff2f634e.js";const v={},c=e("h2",{id:"什么是高阶组件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是高阶组件","aria-hidden":"true"},"#"),n(" 什么是高阶组件")],-1),u={href:"https://so.csdn.net/so/search?q=React&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},m=r(`<h2 id="怎么理解高阶组件" tabindex="-1"><a class="header-anchor" href="#怎么理解高阶组件" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>怎么理解高阶组件</h2><p>​ 可以简单将其理解成 “类工厂”</p><p>​ 将一些可复用的逻辑写在高阶组件中，把一个普通组件传入高阶组件，通过返回值的形式，将处理好的组件return出来</p><p><em>即：高阶组件为一个函数，接收一个组件作为参数，并且返回值为一个新组件</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`function HOC (OneComponent) {
    return class NewComponent extends Component {
        render() {
            return &lt;OneComponent {...this.props} /&gt;
        }
    }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高阶组件的目的" tabindex="-1"><a class="header-anchor" href="#高阶组件的目的" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>高阶组件的目的</h2><p>​ 将可复用的逻辑进行组件化封装，更好的将逻辑与 UI 分离</p><p>​ 让我们在增强原有组件的功能的同时，不破坏组件原有的特性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// 通过高阶组件给基础组件添加新属性
function HOC (OneComponent) {
    return class NewComponent extends Component {
    	const newProps = {
            id: 1,
            name: &#39;张三&#39;
        }
        render() {
            return &lt;OneComponent {...this.props} {...newProps} /&gt;
        }
    }
}
// 可以在 OneComponent 中，通过this.props.id/this.props.name去获取新添加的属性\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// 通过高阶组件给基础组件添加新方法
function HOC (OneComponent) {
    return class NewComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0  // 定义一个私有属性
            }
        }
        const add = () =&gt; {
            this.setState({
                count: this.state.count + 1
            })
        }
    	const newProps = {
            num: this.state.count,
            add: () =&gt; this.add()
        }
        render() {
            return &lt;OneComponent {...this.props} {...newProps}/&gt;
        }
    }
}
// 通过HOC这个高阶组件，给基础组件添加了一个&#39;num&#39;属性和&#39;add&#39;这个方法\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>demo</h2><p>场景：</p><p>​ 简单计数器：在页面记录总数，给出两个按钮，一个控制总数加，一个控制总数减</p><p><strong>方案一：</strong></p><p>​ 通过高阶组件的形式实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// 主函数
// 这里直接解构props
const Main = ({count, add, minus}) =&gt; {
    return (
        &lt;div&gt;
            &lt;p&gt;当前总数{count}&lt;/p&gt;
            &lt;button onClick={() =&gt; add()}&gt;加&lt;/button&gt;
            &lt;button onClick={() =&gt; minus()}&gt;减&lt;/button&gt;
        &lt;/div&gt;
    )
}

export default HOC(Main)\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// 高阶组件函数
const HOC = (OneComponent) =&gt; {
    return class NewComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0 // 总数
            }
            
            // 点击事件：总数加一
            const add = () =&gt; {
                this.setState({
                    count: this.state.count + 1
                })
            }
            
            // 点击事件：总数减一
            const minus = () =&gt; {
                this.setState({
                    count: this.state.count - 1
                })
            }
            
            render() {
                // 通过props的方式传出
                return &lt;OneComponent
                           {...this.props}
                           count={this.state.count}
                           add={() =&gt; this.add()}
                           minus={() =&gt; this.minus()}
                       /&gt;
            } 
        }
    }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`*	更方便的实现相同逻辑的复用，可以直接给其他组件反复使用
  *	通过高阶组件的state，驱动无状态组件的数据刷新，实现逻辑和UI分离，代码清晰\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`*	对属性名称限制大，若同样功能，属性名称不一致，就导致高阶组件失效\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>方案二：</strong></p><p>​ 通过自定义Hooks的方式实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// 主函数
const Count = () =&gt; {
    const [count, add, minus] = useCount()
    return (
    	&lt;div&gt;
            &lt;p&gt;当前总数{count}&lt;/p&gt;
            &lt;button onClick={() =&gt; add()}&gt;加&lt;/button&gt;
            &lt;button onClick={() =&gt; minus()}&gt;减&lt;/button&gt;
        &lt;/div&gt;
    )
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// 自定义hook
const useCount = () =&gt; {
    // 初始化总数值
    const [count, setCount] = useState(0)
    // 点击事件：总数加一
    const add = () =&gt; {
        setCount(count =&gt; count + 1)
    }
    // 点击事件：总数减一
    const minus = () =&gt; {
        setCount(count =&gt; count - 1)
    }
    // 将属性值和方法导出
    return [
        count,
        add,
        minus
    ]
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：</p><ul><li>代码量减少，逻辑相对清晰</li><li>结构相对于高阶组件更加简单明了</li><li>不受属性名称限制</li></ul><h2 id="个人总结" tabindex="-1"><a class="header-anchor" href="#个人总结" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>个人总结：</h2><p>​ 高阶组件是在使用class组件时，state被定义在了内部，导致逻辑上的复用困难，才出现的一种设计模式。</p><p>​ 但是在新版的React中，整个React社区都在推崇函数式的编程方式，所以Hooks的学习就变得重要起来。一些简单的逻辑复用完全可以使用Hooks去实现，避免使用高阶组件使组件变得极其复杂。</p>`,30);function o(b,p){const i=d("ExternalLinkIcon");return l(),a("div",null,[c,e("p",null,[n("​ 高阶组件是包装了另一个"),e("a",u,[n("React"),t(i)]),n("组件的React组件")]),m])}const h=s(v,[["render",o],["__file","jiandanlijiegaojiezujian.html.vue"]]);export{h as default};
