import{_ as i,r as o,o as c,c as a,b as t,d as e,e as d,a as s}from"./app-ff2f634e.js";const l={},r={id:"_1-setstate同步-异步",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#_1-setstate同步-异步","aria-hidden":"true"},"#",-1),v={href:"https://so.csdn.net/so/search?q=setState&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},h={href:"https://so.csdn.net/so/search?q=React&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"setState",-1),b=t("code",null,"state",-1),g=t("strong",null,"有些时候",-1),_=t("code",null,"setState",-1),p=t("code",null,"setState",-1),f={href:"https://so.csdn.net/so/search?q=%E6%A1%86%E6%9E%B6&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},x=t("strong",null,"合成事件",-1),S=t("strong",null,"生命周期函数",-1),R=t("strong",null,"合成事件",-1),k=t("strong",null,"生命周期函数",-1),D=t("strong",null,"异步",-1),E=s(`<p>假如在一个<strong>合成事件</strong>中，循环调用了<code>setState</code>方法<code>n</code>次，如果 React 没有优化，当前组件就要被渲染<code>n</code>次，这对性能来说是很大的浪费。所以，React 为了性能原因，对调用多次<code>setState</code>方法合并为一个来执行。当执行<code>setState</code>的时候，<code>state</code>中的数据并不会马上更新。</p><p>前面已经说到，在 React 的<strong>合成事件</strong>和<strong>生命周期函数</strong>中直接调用<code>setState</code>，会表现出<strong>异步</strong>的形式。</p><p>除此之外，如果越过 React 的性能优化机制，在原生事件、<code>setTimeout</code>中使用<code>setState</code>，就会表现出<strong>同步</strong>的形式。</p><h1 id="_2-表现为异步" tabindex="-1"><a class="header-anchor" href="#_2-表现为异步" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>2. 表现为异步</h1><h2 id="_1-react-合成事件" tabindex="-1"><a class="header-anchor" href="#_1-react-合成事件" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>1. React 合成事件</h2><p>在 React 中直接使用的事件，如<code>onChange</code>、<code>onClick</code>等，都是由 React 封装后的事件，是合成事件，由 React 管理。那么由于性能优化的机制，在合成事件中直接调用<code>setState</code>，将表现出<strong>异步</strong>的形式。</p><p>如下代码，在合成事件<code>onClick</code>中，直接将<code>state</code>中的<code>count</code>加<code>1</code>，并在此之后打印<code>count</code>的值，结果<strong>第一次</strong>点击按钮时，会打印出<code>0</code>，而不是最新的<code>1</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`state = { count: 0 };
add = () =&gt; {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count); // 0
};
render() {
    return (
        &lt;&gt;
            &lt;div&gt;当前计数：{this.state.count}&lt;/div&gt;
            &lt;button onClick={this.add}&gt;add&lt;/button&gt;
        &lt;/&gt;
    );
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),M={id:"_2-生命周期函数",tabindex:"-1"},T=t("a",{class:"header-anchor",href:"#_2-生命周期函数","aria-hidden":"true"},"#",-1),q=t("a",{href:"#"},null,-1),B=t("a",{href:"#"},null,-1),C={href:"https://so.csdn.net/so/search?q=%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},y=s(`<p>生命周期函数也是由 React 所管理，在生命周期函数中直接调用<code>setState</code>，也会表现出<strong>异步</strong>的形式。</p><p>如下代码，在生命周期<code>componentDidMount</code>函数中，将<code>state</code>中的<code>count</code>加<code>1</code>，并在此之后打印<code>count</code>的值，结果打印出<code>0</code>，而不是最新的<code>1</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`state = { count: 0 };
componentDidMount() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count); // 0
}
render() {
    return (
        &lt;&gt;
            &lt;div&gt;当前计数：{this.state.count}&lt;/div&gt;
            &lt;button&gt;add&lt;/button&gt;
        &lt;/&gt;
    );
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-表现为同步" tabindex="-1"><a class="header-anchor" href="#_3-表现为同步" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>3. 表现为同步</h1><h2 id="_1-原生事件" tabindex="-1"><a class="header-anchor" href="#_1-原生事件" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>1. 原生事件</h2><p><code>setState</code>本身执行的过程是同步的，使用原生事件，绕过 React 的管理，将表现出<strong>同步</strong>的形式。</p><p>如下代码，通过<code>id</code>获取到 DOM 元素，用原生方法绑定点击事件。在点击事件中，将<code>state</code>中的<code>count</code>加<code>1</code>，并在此之后打印<code>count</code>的值，结果会打印最新的<code>count</code>值<code>1</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`state = { count: 0 };
componentDidMount() {
    const btn = document.getElementById(&#39;btn&#39;);
    btn.onclick = () =&gt; {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count); // 1
    };
}
render() {
    return (
        &lt;&gt;
            &lt;div&gt;当前计数：{this.state.count}&lt;/div&gt;
            &lt;button id=&quot;btn&quot;&gt;add&lt;/button&gt;
        &lt;/&gt;
    );
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-settimeout" tabindex="-1"><a class="header-anchor" href="#_2-settimeout" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>2. setTimeout</h2><p>如下代码，在生命周期<code>componentDidMount</code>函数中写了一个定时器<code>setTimeout</code>，在<code>setTimeout</code>内部将<code>state</code>中的<code>count</code>加<code>1</code>，并在此之后打印<code>count</code>的值，结果会打印最新的<code>count</code>值<code>1</code>。</p><p><code>setState</code>虽然也是写在生命周期<code>componentDidMount</code>函数中的，但并不是直接写在<code>componentDidMount</code>里，而是套了一层<code>setTimeout</code>。这样，<code>setState</code>就表现出<strong>同步</strong>的形式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`state = { count: 0 };
componentDidMount() {
    setTimeout(() =&gt; {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count); // 1
    }, 0);
}
render() {
    return (
        &lt;&gt;
            &lt;div&gt;当前计数：{this.state.count}&lt;/div&gt;
            &lt;button&gt;add&lt;/button&gt;
        &lt;/&gt;
    );
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-setstate的第二个参数" tabindex="-1"><a class="header-anchor" href="#_4-setstate的第二个参数" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>4. setState的第二个参数</h1><p>无论<code>setState</code>的<strong>对象式</strong>写法，还是<strong>函数式</strong>写法，都有<strong>第二个参数</strong>，为可选的<strong>回调函数</strong>，这个回调函数在<strong>状态更新完毕</strong>、<strong>界面也更新后</strong>（<code>render</code>调用后）才被调用。</p><p>如下代码所示，<code>setState</code>虽然直接在<code>componentDidMount</code>中调用，但在<code>setState</code>的回调函数中打印<code>count</code>的值，得到了最新的值<code>1</code>，因为回调函数在状态更新完毕后才被调用，当然能得到最新的<code>count</code>了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>state = { count: 0 };
componentDidMount() {
    this.setState({ count: this.state.count + 1 }, () =&gt; {
        console.log(this.state.count); // 1
    });
}
render() {
    return (
        &lt;&gt;
            &lt;div&gt;当前计数：{this.state.count}&lt;/div&gt;
            &lt;button&gt;add&lt;/button&gt;
        &lt;/&gt;
    );
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function N(V,I){const n=o("ExternalLinkIcon");return c(),a("div",null,[t("h1",r,[u,e(" 1. "),t("a",v,[e("setState"),d(n)]),e("同步？异步？")]),t("p",null,[e("在 "),t("a",h,[e("React"),d(n)]),e(" 的类式组件中，我们可以使用"),m,e("方法更新"),b,e("状态。但"),g,e("使用"),_,e("之后，得不到最新的数据。")]),t("p",null,[e("其实 React 中"),p,e("本身执行的过程和代码是同步的，只是因为 React "),t("a",f,[e("框架"),d(n)]),e("本身的性能优化机制而导致的。React 中"),x,e("和"),S,e("的调用顺序在更新之前，导致在"),R,e("和"),k,e("中无法立刻得到更新后的值，形成了"),D,e("的形式。")]),E,t("h2",M,[T,e(),q,B,e("2. "),t("a",C,[e("生命周期"),d(n)]),e("函数")]),y])}const w=i(l,[["render",N],["__file","React guanyusetStatetongbuhuoyibuwentidelijie.html.vue"]]);export{w as default};
