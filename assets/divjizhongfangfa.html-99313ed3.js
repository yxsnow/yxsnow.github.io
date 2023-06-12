import{_ as d,r as n,o as l,c as r,b as t,d as e,e as s,a as i}from"./app-ff2f634e.js";const o={},h=i(`<h1 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中" aria-hidden="true">#</a> <strong>水平居中</strong></h1><h3 id="_1-行级元素-为该行级元素的父元素设置text-align-center配合line-height样式" tabindex="-1"><a class="header-anchor" href="#_1-行级元素-为该行级元素的父元素设置text-align-center配合line-height样式" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a><strong>1.行级元素</strong>：为该行级元素的父元素设置text-align:center配合line-height样式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div style=&quot;width: 500px;height: 100px;line-height: 100px;border: 1px solid green;text-align:center;&quot;&gt;
  &lt;span&gt;行级元素&lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=t("strong",null,"块级元素",-1),c={href:"https://so.csdn.net/so/search?q=margin&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div style=&quot;width: 500px;height: 100px;border: 1px solid red;&quot;&gt;
  &lt;div style=&quot;line-height: 100px;text-align: center;margin:auto;width: 100px;height: 100px;border: 1px solid gold&quot;&gt;
    块级元素
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="垂直居中" tabindex="-1"><a class="header-anchor" href="#垂直居中" aria-hidden="true">#</a> <a href="#"></a><strong>垂直居中</strong></h2><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> <a href="#"></a>方法一：</h3><p>display:table;此元素会作为块级表格来显示（类似 &lt;table&gt;），表格前后带有换行符.</p><p><a href="#"></a>display:table-cell;此元素会作为一个表格单元格显示（类似 &lt;td&gt; 和 &lt;th&gt;）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div style=&quot;display: table;width: 500px;height: 200px;border: 1px solid red;&quot;&gt;
  &lt;div style=&quot;display: table-cell;vertical-align: middle;text-align:center;&quot;&gt;块级元素&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> <a href="#"></a>方法二：</h3><p>利用flex布局使内部块级元素水平，垂直居中（display:flex;justify-content: center; align-items:center;）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div style=&quot;display:flex;justify-content: center; align-items:center; width: 500px;height: 200px;border: 1px solid green;text-align:center;line-height:100px &quot;&gt;
  &lt;div style=&quot;width: 100px;height: 100px;border: 1px solid gold&quot;&gt;块级元素&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法三" tabindex="-1"><a class="header-anchor" href="#方法三" aria-hidden="true">#</a> <a href="#"></a>方法三：</h3><p>利用定位实现，父元素：position:relative; ，子元素：position: absolute;top:50%;left:50%;transform:translate(-50%,-50%);</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div style=&quot;position:relative; width: 500px;height: 200px;border: 1px solid red;&quot;&gt;
  &lt;div style=&quot;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width: 100px;height: 100px;border: 1px solid gold;text-align:center;line-height:100px&quot;&gt;
    块级元素
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法四" tabindex="-1"><a class="header-anchor" href="#方法四" aria-hidden="true">#</a> <a href="#"></a>方法四：</h3><p>绝对定位， left：50%，top: 50% + margin-left:-(自身宽度的一半),margin-top:-(自身高度的一半) 缺点：要自己计算容器的宽高，万一容器的宽高改变还要修改css样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div style=&quot;position:relative; width: 500px;height: 200px;border: 1px solid red;&quot;&gt;
  &lt;div style=&quot;position:absolute;top:50%;left:50%;margin-left: -50px;margin-top: -50px;width: 100px;height: 100px;border: 1px solid gold;text-align:center;line-height:100px&quot;&gt;
    块级元素
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法五" tabindex="-1"><a class="header-anchor" href="#方法五" aria-hidden="true">#</a> <a href="#"></a>方法五：</h3><p>绝对定位，left: 0，right: 0, top: 0, bottom: 0 + margin：auto</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div style=&quot;position:relative; width: 500px;height: 200px;border: 1px solid red;&quot;&gt;
  &lt;div style=&quot;position:absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;width: 100px;height: 100px;border: 1px solid gold;text-align:center;line-height:100px&quot;&gt;
    块级元素
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法六" tabindex="-1"><a class="header-anchor" href="#方法六" aria-hidden="true">#</a> <a href="#"></a>方法六：</h3><p>固定定位position:fixed;并设置一个较大的z-index层叠属性值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div style=&quot;position:fixed;top: 50%;left: 50%;margin-left: -50px;margin-top: -50px;z-index: 999;width: 100px;height: 100px;border: 1px solid gold;text-align:center;line-height:100px&quot;&gt;
  块级元素
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法七" tabindex="-1"><a class="header-anchor" href="#方法七" aria-hidden="true">#</a> <a href="#"></a>方法七：</h3><p>要把元素相对于视口进行居中，那么相当于父元素的高度就是视口的高度，视口的高度可以用vh来获取：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div style=&quot;margin: 50vh auto 0;transform: translateY(-50%);line-height:100pxwidth: 100px;height: 100px;border: 1px solid gold;text-align:center;&quot;&gt;
  块级元素
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法八" tabindex="-1"><a class="header-anchor" href="#方法八" aria-hidden="true">#</a> <a href="#"></a>方法八：</h3><p>Flex加margin:auto</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div style=&quot;display: flex;width: 500px;height: 200px;border: 1px solid red;&quot;&gt;
  &lt;div style=&quot;margin: auto;width: 100px;height: 100px;border: 1px solid gold;text-align:center;line-height:100px&quot;&gt;
    块级元素
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function u(x,p){const a=n("ExternalLinkIcon");return l(),r("div",null,[h,t("p",null,[e("2."),v,e("：为其自身设置"),t("a",c,[e("margin"),s(a)]),e(":auto样式")]),g])}const b=d(o,[["render",u],["__file","divjizhongfangfa.html.vue"]]);export{b as default};
