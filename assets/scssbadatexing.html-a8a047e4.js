import{_ as d,r,o as l,c,b as e,d as a,e as n,a as i}from"./app-ff2f634e.js";const t={},h=e("h1",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),a(" 前言")],-1),v={href:"https://so.csdn.net/so/search?q=SASS&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},o=i(`<p>sass是最早的css预处理语言，有比less更为强大的功能。但因其一开始的缩进式语法并不能被开发者们接受，所以使用率不高，不过由于其强大的功能和Ruby on Rails 的大力推动，逐渐被更多开发者使用。</p><p>sass是采用的Ruby语言编写的一款css预处理语言，它诞生于2007年，是最早成熟css预处理语言。最初它是为了配合haml而设计的，因此有着和haml一样的缩进式风格。</p><p>sass从第三代开始，放弃了缩进式风格，并且完全向下兼容普通的css代码，这一代的sass也被称为scss</p><h1 id="一、sass与scss的区别-其实是一种东西" tabindex="-1"><a class="header-anchor" href="#一、sass与scss的区别-其实是一种东西" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>一、sass与scss的区别：（其实是一种东西）</h1><ol><li><p>scss是sass3引入的新语法，语法完全兼容css3， 继承了sass的功能</p></li><li><p>scss和sass大部分语法相同，唯一不同的是，scss需要使用分号和花括号，sass是以严格的缩进式语法缩写—换行和缩进</p></li><li><p>文件扩展名不同</p></li></ol><h1 id="二、八大特性" tabindex="-1"><a class="header-anchor" href="#二、八大特性" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>二、八大特性</h1><h2 id="_1-节点-可嵌套性" tabindex="-1"><a class="header-anchor" href="#_1-节点-可嵌套性" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>1.（节点）可嵌套性</h2><p>类似于标签节点可进行嵌套，使之整体为树形结构。</p><p>代码如下（示例）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`div{
wideth:100%;
height:80rpx;
p{
    color:red;
    }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-变量" tabindex="-1"><a class="header-anchor" href="#_2-变量" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>2.变量</h2><p>变量以$开头（通常网站会有基础变量，譬如基础字体，基础色调等，可以将他们赋值给一个变量，以后调用变量就好了，很类似js里的变量） 代码如下（示例）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`$CSS_COLOR :red
div{
color:{$CSS_COLOR}
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-mixins-混合-mixin" tabindex="-1"><a class="header-anchor" href="#_3-mixins-混合-mixin" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>3.Mixins(混合@mixin)</h2><p>可重用性高，可以注入任何东西</p><p>注意点：</p><p>1.可以相互调用，但是不能拿自己调用自己，形成递归</p><p>2.通过@include引用</p><p>代码如下（示例）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`@mixin body{
    width:100%;
    color:red
    }
.html{
    @include body
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),u={id:"_4-extend",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_4-extend","aria-hidden":"true"},"#",-1),b=e("a",{href:"#"},null,-1),p=e("a",{href:"#"},null,-1),x={href:"https://so.csdn.net/so/search?q=extend&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},_=i(`<p>允许一个选择器继承另一个选择器类,似于java中的类继承，一个类可以继承另一个类的方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`.body{
    width:100%;
    color:red
    }
.html{
    @extend .body
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-function" tabindex="-1"><a class="header-anchor" href="#_5-function" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>5.@function</h2><p>函数功能，用户使用@function可以去编写自己的函数 使用语法： 使用 @function+函数名称，每个函数都需要有返回值的内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`@function send($a){
    @return $a*2
    }
.cacl{
    width:60 + {send(50)}px
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-引用父元素" tabindex="-1"><a class="header-anchor" href="#_6-引用父元素" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>6.引用父元素&amp;</h2><p>在编译时，&amp;将被替换成父选择符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`.body{
    width:100%;
    color:red
    }
&amp;::child-add{
    background:blue
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-计算功能" tabindex="-1"><a class="header-anchor" href="#_7-计算功能" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>7.计算功能</h2><p>可以进行简单的加减乘除运算</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`.body{
    width:20px + 50px;
    color:red 
    }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-组合连接" tabindex="-1"><a class="header-anchor" href="#_8-组合连接" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>8.组合连接：#{}</h2><p>变量连接字符串 $name:liang</p><p>body .#{$liang}{ color:red }</p>`,14);function f(g,S){const s=r("ExternalLinkIcon");return l(),c("div",null,[h,e("p",null,[a("众所周知css并不能算是一门真正意义上的“编程”语言，它本身无法未完成像其它编程语言一样的嵌套、继承、设置变量等工作。为了解决css的不足，开发者们想到了编写一种对css进行预处理的“中间语言”，可以实现一些“编程”语言才有的功能，然后自动编译成css供浏览识别，这样既一定程度上弥补了css的不足，也无需一种新的语言来代替css以供浏览器识别。于是css预处理语言"),e("a",v,[a("SASS"),n(s)]),a("就应运而生了。")]),o,e("h2",u,[m,a(),b,p,a("4.@"),e("a",x,[a("extend"),n(s)])]),_])}const k=d(t,[["render",f],["__file","scssbadatexing.html.vue"]]);export{k as default};
