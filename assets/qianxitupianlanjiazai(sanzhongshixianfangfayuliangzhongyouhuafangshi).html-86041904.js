import{_ as e,o as i,c as n,a as l}from"./app-ff2f634e.js";const d="/assets/watermark_type_d3F5LXplbmhlaQ_sh_5fd5ecef34d04f80a-fc4b3b4f.png",a="/assets/watermark_type_d3F5LXplbmhlaQ_sh_446734d260b0478f9-6bd34635.jpg",s="/assets/watermark_type_d3F5LXplbmhlaQ_sh_f9ac8e2f81db45baa-e6fbde1f.png",t="/assets/73357c0338744f2095aa40c71f12e32c_c0459ffd659d4420a-1a476305.png",c="/assets/c10c1d60a0e54233bb5823e70943b9dc_bf39b3b1b3134e278-f838fb5a.png",r="/assets/3bdf8cac439746b387fc94aaea983875_b7855716fac045c5a-d820d58f.png",o="/assets/watermark_type_d3F5LXplbmhlaQ_sh_4ac39f3055e34eaeb-4650dd1d.png",u={},v=l('<h1 id="写在前面" tabindex="-1"><a class="header-anchor" href="#写在前面" aria-hidden="true">#</a> 写在前面</h1><p>上一篇文章介绍了<code>防抖和节流</code>，那么今天我们就来康康图片懒加载(中间会涉及到<code>节流</code>的优化问题)</p><p>你将了解到<code>图片懒加载</code>的实现的三种方法(整体位置比较和视图位置比较和<code>observe</code>)</p><p>和优化的两种方式(<code>节流</code>和<code>IntersectionObserver</code>)</p><hr><p>写得不对的地方，希望大家能够批评指正！</p><h1 id="在不使用图片懒加载的情况下-我们打开开发者工具康康" tabindex="-1"><a class="header-anchor" href="#在不使用图片懒加载的情况下-我们打开开发者工具康康" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>在不使用图片懒加载的情况下,我们打开开发者工具康康</h1><ul><li>这里<code>display</code>给<code>block</code>是为了让图片变成块元素，这样图片会自己换行，这样更方便后面进行懒加载的操作</li><li>注意勾选<code>禁用缓存</code>，和<code>慢速3G</code>，这样效果更加明显</li></ul><img width="962" height="547" src="'+d+`" class="jop-noMdConv"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Document&lt;/title&gt;
  &lt;style&gt; img {
      display: block;
      width: 100px;
      height: 100px;
      margin-top: 20px;
    } &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;p&gt;今天介绍一下图片懒加载&lt;/p&gt;
  &lt;img src=&quot;./pic/1.png&quot; alt=&quot;&quot;&gt;
  &lt;img src=&quot;./pic/2.png&quot; alt=&quot;&quot;&gt;
  &lt;img src=&quot;./pic/3.png&quot; alt=&quot;&quot;&gt;
  &lt;img src=&quot;./pic/4.png&quot; alt=&quot;&quot;&gt;
  &lt;img src=&quot;./pic/5.png&quot; alt=&quot;&quot;&gt;
&lt;/body&gt;

&lt;/html&gt;\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>我们很容易看出，由于图片的加载时间很长，首屏的渲染用了<code>7s</code>完成</li><li>下面我们就来看看懒加载和懒加载的优化吧！</li><li>康康最后通过优化能提升多少性能！</li></ul><h1 id="什么是懒加载" tabindex="-1"><a class="header-anchor" href="#什么是懒加载" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>什么是懒加载？</h1><p>这里就来介绍一下懒加载</p><ul><li>简单来说，就是懒惰的加载<code>明日复明日</code></li><li>在首屏渲染，如果我的可视区域里面看不到图片，那就先不加载图片</li><li>这种合理的偷懒就是懒加载，它大大缩减了首屏的渲染时间</li></ul><h2 id="懒加载的前两种实现方法-位置判断" tabindex="-1"><a class="header-anchor" href="#懒加载的前两种实现方法-位置判断" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>懒加载的前两种实现方法(位置判断)</h2><ul><li>获取图片元素，图片的<code>src</code>属性改为<code>data-src</code>，即<code>src</code>属性为空</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`&lt;img data-src=&quot;./pic/1.png&quot; alt=&quot;&quot;&gt;
  &lt;img data-src=&quot;./pic/2.png&quot; alt=&quot;&quot;&gt;
  &lt;img data-src=&quot;./pic/3.png&quot; alt=&quot;&quot;&gt;
  &lt;img data-src=&quot;./pic/4.png&quot; alt=&quot;&quot;&gt;
  &lt;img data-src=&quot;./pic/5.png&quot; alt=&quot;&quot;&gt;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加滚动事件监听，判断图片位置和当前位置来给<code>src</code>赋值，从而达到了动态加载图片的效果</li><li>这个距离的判断又有大概两种，下面来分析一下</li></ul><h3 id="_1-通过整体距离来判断" tabindex="-1"><a class="header-anchor" href="#_1-通过整体距离来判断" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>1.通过整体距离来判断</h3><ul><li>通过下图，我们可以知道 <ul><li>一个图片元素的位置的顶部可以用<code>offsetTop</code>属性获得</li><li>如果把<code>div</code>换成文档对象，<code>scrollTop+clientHeight</code>就可以表示滚动距离的最下端</li><li>故<code>offsetTop&lt;scrollTop+clientHeight</code>的时候我们就要改变图片的<code>src</code>了</li><li>注意上面的<code>offsetTop</code>和后面的<code>scrollTop+clientHeight</code>是针对不同的元素哦，前者是图片，后者是文档对象</li><li><code>document.documentElement</code>会返回一个文档对象 <img src="`+a+`" alt="在这里插入图片描述"></li></ul></li></ul><hr><ul><li>故代码如下:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`const images = document.querySelectorAll(&#39;img&#39;)
    n = 0
    let lazyload = (e) =&gt; {
      const clientHeight = document.documentElement.clientHeight
      const scrollTop = document.documentElement.scrollTop
      for (let i = n; i &lt; images.length; i++) {
        if (images[i].offsetTop &lt; clientHeight + scrollTop) {
          images[i].setAttribute(&#39;src&#39;, images[i].getAttribute(&#39;data-src&#39;))
          n = i + 1
        }
      }
      console.log(&#39;scroll触发&#39;);
    }\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-通过视口距离来判断" tabindex="-1"><a class="header-anchor" href="#_2-通过视口距离来判断" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>2.通过视口距离来判断</h3><ul><li>与上面的方法不同的是，我们不去管整体滚动了多少，图片相对于整体的offset位置是多少</li><li>我们只去关心视口的距离</li><li><code>getBoundingClientRect().top</code>可以帮我们获得图片相对于视口距离顶部的距离</li><li><code>window.innerHeight</code>可以帮我们获得视口的高度(一般来说，对一个设备来说是一个固定值!)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`const images = document.querySelectorAll(&#39;img&#39;)
    let n = 0
    let lazyload = (e) =&gt; {
      for (let i = n; i &lt; images.length; i++) {
        const imageTop = images[i].getBoundingClientRect().top
        if (imageTop &lt; window.innerHeight) {
          images[i].setAttribute(&#39;src&#39;, images[i].getAttribute(&#39;data-src&#39;))
          n = i + 1
        }
      }
      console.log(&#39;scroll触发&#39;);
    }\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-两种距离判断方法的比较示意图" tabindex="-1"><a class="header-anchor" href="#_3-两种距离判断方法的比较示意图" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>3.两种距离判断方法的比较示意图</h3><p>为了更好地帮助大家理解这个判断的区别，我画了一个示意图</p><img width="962" height="612" src="`+s+'" class="jop-noMdConv"><h1 id="为什么要优化懒加载" tabindex="-1"><a class="header-anchor" href="#为什么要优化懒加载" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>为什么要优化懒加载</h1><ul><li>在前面的懒加载函数中，我们写了一个<code>log</code></li><li>好，现在我们去控制台看一下输出 <img width="930" height="63" src="'+t+`" class="jop-noMdConv"></li></ul><p><code>scroll</code>多次监听事件多次触发，这是我们不愿意看到的</p><h2 id="懒加载的两种优化方式" tabindex="-1"><a class="header-anchor" href="#懒加载的两种优化方式" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>懒加载的两种优化方式</h2><ul><li>懒加载的优化本质上就是减少监听事件的调用</li></ul><h3 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>节流</h3><ul><li>在上一篇文章里面提到了节流，我们直接拿节流函数过来用</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`function throttle (fn, delay) {
      let pre = 0
      let timer
      return function () {
        if (!pre) pre = new Date()
        let now = new Date()
        let context = this
        let args = arguments
        let remainTime = delay - (now - pre)
        if (now - pre &gt; delay) {
          fn.apply(context, args)
          pre = now
        } else {
          if (timer) return
          timer = setTimeout(() =&gt; {
            fn.apply(context, args)
            pre = now
            timer = null
          }, remainTime)
        }
      }
    }
    window.onscroll = throttle(lazyload, 1000)\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>我们看控制台可以明显看到调用次数减少了</li><li>虽然完成了所有的懒加载后，但是我们<code>仍然可以触发事件</code>，所以才有了第二种优化方式</li></ul><hr><img width="962" height="123" src="`+c+`" class="jop-noMdConv"><h3 id="intersectionobserver-第三种实现方法-同时是第二种优化方式" tabindex="-1"><a class="header-anchor" href="#intersectionobserver-第三种实现方法-同时是第二种优化方式" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>IntersectionObserver(第三种实现方法,同时是第二种优化方式)</h3><ul><li><code>IntersectionObserver</code>是什么？ <ul><li>允许你追踪目标元素与其祖先元素或视窗的交叉状态。此外，尽管只有一部分元素出现在视窗中，哪怕只有一像素，也可以选择触发回调函数。</li><li>所以它完美契合了懒加载！</li></ul></li><li>我们从代码中来学习它的用法吧！</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`const images = document.querySelectorAll(&#39;img&#39;)
    const callback = (entries) =&gt; {
      entries.forEach(entry =&gt; {
        console.log(entry)
        if (entry.isIntersecting) {            // 监听到出现
          const image = entry.target           // 获取目标
          image.setAttribute(&#39;src&#39;, image.getAttribute(&#39;data-src&#39;))
          observer.unobserve(image)            // 取消监听
          console.log(&#39;触发&#39;);
        }
      })
    }
    const observer = new IntersectionObserver(callback)
    images.forEach(image =&gt; {
      observer.observe(image)
    })\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数中<code>log</code> <code>entry</code>，我们主要是康<code>isIntersecting</code>属性来判断是否出现 <img width="930" height="75" src="`+r+'" class="jop-noMdConv"></li></ul><hr><ul><li>通过这个优化方式，几张图片就会触发几次，不会多次触发！</li><li><code>observer</code>会监听交叉状态，即出现和消失，出现交叉状态后会去调用<code>new</code>的时候传入的<code>callback</code>回调函数 <ul><li><code>observer.observe</code>添加交叉监听</li><li><code>observer.unobserve</code>取消交叉监听</li><li>上面这两个api基本够用了</li><li>给每张图片添加<code>observe</code></li><li><code>callback</code>里面判断交叉出现，就给<code>src</code>赋值然后<code>unobserve</code></li></ul></li></ul><h1 id="最后-我们看一下优化后懒加载能提高多少性能" tabindex="-1"><a class="header-anchor" href="#最后-我们看一下优化后懒加载能提高多少性能" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>最后,我们看一下优化后懒加载能提高多少性能</h1><ul><li>从第一次渲染加载<code>5张</code>图片变成了加载<code>2张</code>图片</li><li>请求的总耗时从<code>7s</code>降到了<code>6s</code></li><li>从我自己实验打开，还是明显感觉到要快一些了的(当然是在<code>3G慢速模式</code>下) <img width="930" height="442" src="'+o+'" class="jop-noMdConv"></li></ul><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>总结</h1><ul><li>1.前两种方法存在多次触发问题，所以我们可以使用节流来优化</li><li>2.第三种方法自己就考虑的优化(所以第三种方法也就是第二种优化方式)</li><li>3.咋一看，第三种方法是可以取代前两种方法的 <ul><li>但是，有的浏览器不兼容第三种方法的时候，我们就只能老老实实使用前两种方法并节流优化了</li></ul></li></ul>',52),m=[v];function h(b,g){return i(),n("div",null,m)}const f=e(u,[["render",h],["__file","qianxitupianlanjiazai(sanzhongshixianfangfayuliangzhongyouhuafangshi).html.vue"]]);export{f as default};
