import{_ as l,r as t,o as a,c as d,b as e,d as n,e as s,a as r}from"./app-ff2f634e.js";const c={},o=e("h2",{id:"react-typescript-默认-props-的处理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#react-typescript-默认-props-的处理","aria-hidden":"true"},"#"),n(" React + TypeScript 默认 Props 的处理")],-1),v=e("code",null,"defaultProps",-1),u={href:"https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values",target:"_blank",rel:"noopener noreferrer"},p=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`class Greeting extends React.Component {
  render() {
    return (
      &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;
    );
  }
}

// Specifies the default values for props:
Greeting.defaultProps = {
  name: &#39;Stranger&#39;
};

// Renders &quot;Hello, Stranger&quot;:
ReactDOM.render(
  &lt;Greeting /&gt;,
  document.getElementById(&#39;example&#39;)
);\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=e("code",null,"react",-1),b={href:"https://babeljs.io/docs/en/babel-plugin-proposal-class-properties",target:"_blank",rel:"noopener noreferrer"},h=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`class Greeting extends React.Component {
  static defaultProps = {
    name: &#39;stranger&#39;
  }

  render() {
    return (
      &lt;div&gt;Hello, {this.props.name}&lt;/div&gt;
    )
  }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="加入-typescript" tabindex="-1"><a class="header-anchor" href="#加入-typescript" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>加入 TypeScript</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`interface Props {
  name?: string;  // 这里定义类型
}
class Greeting extends React.Component&lt;Props, {}&gt; {
static defaultProps = {
name: &quot;stranger&quot;,  // 这里赋值默认值
};

render() {
return &lt;div&gt;Hello, {this.props.name}&lt;/div&gt;;
}
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时不支持直接通过类访问 <code>defaultProps</code> 来赋值以设置默认属性，因为<code>React.Component</code>类型上并没有该属性。</p>`,4);function _(g,f){const i=t("ExternalLinkIcon");return a(),d("div",null,[o,e("p",null,[n("通过组件的 "),v,n(" 属性可为其 Props 指定默认值。 以下示例来自 "),e("strong",null,[e("a",u,[n("React 官方文档 - Default Prop Values："),s(i)])])]),p,e("p",null,[n("如果是用"),m,n("框架搭建的项目会有"),e("a",b,[n("proposal-class-properties："),s(i)]),n("这个包，就可以这样写")]),h])}const P=l(c,[["render",_],["__file","React React _ TypeScript moren Props dechuli.html.vue"]]);export{P as default};
