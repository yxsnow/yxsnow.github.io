import{_ as s,r as a,o as l,c as d,b as e,d as n,e as t,a as r}from"./app-ff2f634e.js";const c={},v={href:"https://so.csdn.net/so/search?q=yaml&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},u=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`dependencies:
  get:\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-状态管理" tabindex="-1"><a class="header-anchor" href="#_1-状态管理" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>1. 状态管理</h2><p>状态管理其实就是管理应用的数据，在 <code>get</code>中也称为控制器，所有的数据都必须放在 继承自 GetController 的类中，才可以在视图中使用</p><h3 id="第一步-创建-一个controller" tabindex="-1"><a class="header-anchor" href="#第一步-创建-一个controller" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>第一步：创建 一个Controller</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`import &#39;package:get/get.dart&#39;;

/// 定义数据控制器
class HomeController extends GetxController {}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二步-在控制器中声明变量" tabindex="-1"><a class="header-anchor" href="#第二步-在控制器中声明变量" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>第二步：在控制器中声明变量</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`/// 定义数据控制器
class HomeController extends GetxController {
  // 使用 .obs 作为你值的后缀
  final name = &quot;老汪&quot;.obs;

  // 使用 Rx 和 Darts 泛型，Rx &lt; type &gt;
  final count = Rx&lt;int&gt;(0);

  // 使用 Rx { Type }
  final isLogged = RxBool(false);
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三步-在ui中使用变量" tabindex="-1"><a class="header-anchor" href="#第三步-在ui中使用变量" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>第三步：在UI中使用变量</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`import &#39;package:flutter/material.dart&#39;;
import &#39;package:getx_demo/page/home_controller.dart&#39;;

class HomePage extends StatelessWidget {
  // 实例化控制器
  final controller = HomeController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(&quot;状态管理&quot;),
        centerTitle: true,
      ),
      body: Container(
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(&#39;name: \${controller.name}&#39;),
            Text(&#39;count: \${controller.count}&#39;),
            Text(&#39;isLogged: \${controller.isLogged}&#39;),
            Divider(),
            Text(&#39;循环items列表：&#39;),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children:
                  controller.items.map((item) =&gt; Text(&quot;$item, &quot;)).toList(),
            )
          ],
        ),
      ),
    );
  }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-声明-可观察的-变量" tabindex="-1"><a class="header-anchor" href="#_2-声明-可观察的-变量" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>2. 声明“可观察的”变量</h2><h3 id="_2-1-第一个是使用-rx-type-。" tabindex="-1"><a class="header-anchor" href="#_2-1-第一个是使用-rx-type-。" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>2.1 第一个是使用 Rx { Type }。</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`final name = RxString(&#39;&#39;);
final isLogged = RxBool(false);
final count = RxInt(0);
final balance = RxDouble(0.0);
final items = RxList&lt;String&gt;([]);
final myMap = RxMap&lt;String, int&gt;({});\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-第二种是使用-rx-和-darts-泛型-rx-type" tabindex="-1"><a class="header-anchor" href="#_2-2-第二种是使用-rx-和-darts-泛型-rx-type" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>2.2 第二种是使用 Rx 和 Darts 泛型，Rx &lt; type &gt;</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>\`<span class="token keyword">final</span> name <span class="token operator">=</span> <span class="token class-name">Rx</span><span class="token generics"><span class="token punctuation">&lt;</span>string<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> isLogged <span class="token operator">=</span> <span class="token class-name">Rx</span><span class="token generics"><span class="token punctuation">&lt;</span>bool<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> count <span class="token operator">=</span> <span class="token class-name">Rx</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> balance <span class="token operator">=</span> <span class="token class-name">Rx</span><span class="token generics"><span class="token punctuation">&lt;</span>double<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> number <span class="token operator">=</span> <span class="token class-name">Rx</span><span class="token generics"><span class="token punctuation">&lt;</span>num<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">final</span> items <span class="token operator">=</span> <span class="token class-name">Rx</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span>string<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> myMap <span class="token operator">=</span> <span class="token class-name">Rx</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span>string<span class="token punctuation">,</span> int<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 自定义类</span>
<span class="token keyword">final</span> user <span class="token operator">=</span> <span class="token class-name">Rx</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-第三种方法更实用、更简单也是首选-就是把-obs-作为你的变量的后缀" tabindex="-1"><a class="header-anchor" href="#_2-3-第三种方法更实用、更简单也是首选-就是把-obs-作为你的变量的后缀" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>2.3 第三种方法更实用、更简单也是首选，就是把.obs 作为你的变量的后缀:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`final name = &#39;&#39;.obs;
final isLogged = false.obs;
final count = 0.obs;
final balance = 0.0.obs;
final number = 0.obs;
final items = &lt;String&gt;[].obs;
final myMap = &lt;String, int&gt;{}.obs;

// Custom classes - it can be any class, literally
final user = User().obs;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-什么类型可被定义为的obs" tabindex="-1"><a class="header-anchor" href="#_3-什么类型可被定义为的obs" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>3. 什么类型可被定义为的obs</h2><p>你可以在 obs 上转换任何东西：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`import &#39;package:get/get.dart&#39;;

class User {
  final name;
  final age;
  User({this.name, this.age});
}

class Teacher {
  final name = &quot;李思思&quot;.obs;
  final languer = &quot;语文&quot;.obs;
}

/// 定义数据控制器
class HomeController extends GetxController {
  // 使用 .obs 作为你值的后缀
  final name = &quot;老汪&quot;.obs;

  // 使用 Rx 和 Darts 泛型，Rx &lt; type &gt;
  final count = Rx&lt;int&gt;(0);

  // 使用 Rx { Type }
  final isLogged = RxBool(false);

  // 使用 .obs 作为你值的后缀
  final items = &lt;String&gt;[&quot;flutter&quot;, &quot;getx&quot;, &quot;redux&quot;, &quot;java&quot;].obs;

  // 自定义User类
  final user = User(name: &quot;Camila&quot;, age: 18).obs;

  // 自定义teacher类
  final teacher = Teacher();

  // Map， 不响应的数据
  final subjects = {&quot;name&quot;: &quot;语文&quot;, &quot;desc&quot;: &quot;超扫good&quot;};
}\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-如何改变数据的值" tabindex="-1"><a class="header-anchor" href="#_4-如何改变数据的值" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>4. 如何改变数据的值</h2><p>第一步： 计数器案例</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 创建控制器</span>
<span class="token keyword">class</span> <span class="token class-name">HomeController</span> <span class="token keyword">extends</span> <span class="token class-name">GetxController</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用 Rx 和 Darts 泛型，Rx &lt; type &gt;</span>
  <span class="token keyword">final</span> count <span class="token operator">=</span> <span class="token class-name">Rx</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
  <span class="token comment">// 每次点击增加1</span>
  <span class="token keyword">void</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;++&quot;</span></span><span class="token punctuation">)</span>
    <span class="token comment">// 必须使用 .value 修饰具体的值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步： UI中使用，并添加点击事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`class HomePage extends StatelessWidget {
  // 实例化控制器
  final controller = HomeController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(&quot;状态管理&quot;),
        centerTitle: true,
      ),
      body: Container(
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(&#39;数字类型: \${controller.count}&#39;),
            MaterialButton(
              onPressed: () {
                // 直接调用函数
                controller.increment();
              },
              color: Colors.blue,
              child: Text(&quot;change数字类型&quot;),
            )
          ],
        ),
      ),
    );
  }
}\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>此刻点击，按钮发送事件，控制台会打印数据，数据也确实改变了，但视图不会更新</strong></p><h2 id="_5-如何触发视图的更新" tabindex="-1"><a class="header-anchor" href="#_5-如何触发视图的更新" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>5. 如何触发视图的更新</h2><p>在Get中， 有两个不同的状态管理器: 简单的状态管理器(GetBuilder) 和 响应式的管理器(GetX/Obx)，所以只有</p><p>使用这两个状态管理器修饰的值才会引起视图的更新</p><h3 id="_5-1-使用getbuilder-更新" tabindex="-1"><a class="header-anchor" href="#_5-1-使用getbuilder-更新" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>5.1 使用GetBuilder()更新</h3><p>GetBuilder 的目标正是多状态控制。想象一下，你在一个购物车中添加了30种商品，你点击删除一种，同时列表被更新，价格被更新，购物车中的徽章被更新为一个更小的数字。这种类型的方法使得 GetBuilder 成为杀手，因为它将状态分组并同时更改它们，而不需要任何“计算逻辑”。创建 GetBuilder 时就考虑到了这种情况，因为对于状态的临时更改，可以使用 setState，而且不需要状态管理器</p><p>这样，如果您想要一个单独的控制器，您可以为它分配 id，或者使用 GetX。这取决于您，记住您拥有的小部件越多，GetX 的性能就越突出，而当状态发生多次更改时，GetBuilder 的性能应该更好。</p><p><strong>优点：</strong></p><p>只更新所需的小部件。</p><p>使用较少内存(接近0mb)的状态管理器</p><h3 id="_5-1-1-getbuilder的使用" tabindex="-1"><a class="header-anchor" href="#_5-1-1-getbuilder的使用" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>5.1.1 GetBuilder的使用</h3><p>第一步： 创建控制器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`/// 定义数据控制器
class HomeController extends GetxController {
  // 注意，这里定义普通的值就行，不用使用.obs修饰
  int count = 0;
  // 需要手动调用update()，触发更新
  void increment() {
    count++;
    update(); 
  }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：渲染视图并触发更新</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(&quot;状态管理&quot;),
        centerTitle: true,
      ),
      body: Container(
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            // 使用GetBuilder， 需要手动调用update（）
            GetBuilder&lt;HomeController&gt;(
              init: HomeController(),
              builder: (_) =&gt; Column(
                children: [
                  Text(
                    &#39;数字类型: \${_.count}&#39;,
                    style: TextStyle(fontSize: 35),
                  ),
                  MaterialButton(
                    onPressed: _.increment,
                    color: Colors.blue,
                    child: Text(&quot;++&quot;),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-1-2-如果想用-getbuilder-具体更新某个具体的小部件-你可以给它们分配唯一的-id" tabindex="-1"><a class="header-anchor" href="#_5-1-2-如果想用-getbuilder-具体更新某个具体的小部件-你可以给它们分配唯一的-id" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>5.1.2 如果想用 GetBuilder 具体更新某个具体的小部件，你可以给它们分配唯一的 id:</h3><p>第一步：添加id属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`GetBuilder&lt;HomeController&gt;(
  id: &quot;num&quot;,
  init: HomeController(),
  builder: (_) =&gt; Column(
    children: [
      Text(
        &#39;数字类型: \${_.count}&#39;,
        style: TextStyle(fontSize: 35),
      ),
      MaterialButton(
        onPressed: _.increment,
        color: Colors.blue,
        child: Text(&quot;++&quot;),
      )
    ],
  ),
)\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：update 时传入某个id属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// 直接按id更新
void increment() {
    count++;
    update([&quot;num&quot;]); 
}

// 您还可以为更新添加条件, 当count 小于 5 时才更新
void increment() {
    count++;
    update([&quot;num&quot;], count &lt; 5); 
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-使用obx-更新" tabindex="-1"><a class="header-anchor" href="#_5-2-使用obx-更新" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>5.2 使用Obx()更新</h3><p>第一步： 创建控制器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`/// 定义数据控制器
class HomeController extends GetxController {
  // 变量必须用final修饰
  final count = 0.obs;
  void increment() {
    count.value++;
  }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：渲染UI</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`class HomePage extends StatelessWidget {
  // 实例化控制器
  final controller = HomeController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(&quot;状态管理&quot;),
        centerTitle: true,
      ),
      body: Container(
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            // 使用Obx返回渲染的 UI widget
            Obx(
              () =&gt; Text(
                &#39;数字: \${controller.count}&#39;,
                style: TextStyle(fontSize: 35),
              ),
            ),
            // 添加点击事件
            MaterialButton(
              onPressed: controller.increment,
              color: Colors.blue,
              child: Text(&quot;++&quot;),
            )
          ],
        ),
      ),
    );
  }
}\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在用户界面中，当你想要显示这个值并在值改变时更新屏幕时，只需要这样做:</p><p>注1：只有在 定义的变量的值发生变化时才会更改。</p><p>如果在一个 Obx 中有5多个 Rx (可观察的)变量，当它们中的任何一个发生变化时，它都会自动更新。</p><p>但如果我在一个类中有30个变量，当我更新一个时，它会更新该类中的所有变量吗？</p><p>并不会的，只有使用 Rx 变量的特定 Widget 才会更新，因此，当 Rx 变量改变它的值时，GetX 只更新屏幕</p><hr><h3 id="_5-3-使用-getx-更新" tabindex="-1"><a class="header-anchor" href="#_5-3-使用-getx-更新" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>5.3 使用 GetX () 更新</h3><p>用法同GetBuilder()， 但不能添加需要惟一的 id属性，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(&quot;状态管理&quot;),
        centerTitle: true,
      ),
      body: Container(
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            GetX&lt;HomeController&gt;(
              init: HomeController(),
              builder: (_) =&gt; Column(
                children: [
                  Text(
                    &#39;数字类型: \${_.count}&#39;,
                    style: TextStyle(fontSize: 35),
                  ),
                  MaterialButton(
                    onPressed: _.increment,
                    color: Colors.blue,
                    child: Text(&quot;++&quot;),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-getxcontroller生命周期钩子" tabindex="-1"><a class="header-anchor" href="#_6-getxcontroller生命周期钩子" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>6. GetxController生命周期钩子</h2><ul><li>onInit ： 初次渲染完毕，可以在这里定义控制器(输入框，顶部选项卡，PageView等)，调接口</li><li>onClose： 组件卸载时触发，清除定时器等</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`class MyController extends GetxController {
    
  @override  
  onInit(){
      
  }    
  @override
  void onClose() {
    
  }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-1-演示输入框配合控制器" tabindex="-1"><a class="header-anchor" href="#_6-1-演示输入框配合控制器" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>6. 1 演示输入框配合控制器，</h3><ul><li>调接口就不演示了，放到 写 GetConnect 这个文章里</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// 控制器
class HomeController extends GetxController {
  // 用户名控制器
  TextEditingController userNameController;

  @override
  void onInit() {
    super.onInit();
    userNameController = TextEditingController();
    print(&quot;渲染完成&quot;);
  }

  @override
  void onClose() {
    super.onClose();
    print(&quot;close&quot;);
  }
}

// UI 渲染
class HomePage extends StatelessWidget {
  // 实例化控制器
  final controller = HomeController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(&quot;状态管理&quot;),
        centerTitle: true,
      ),
      body: Container(
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            TextField(
              controller: controller.userNameController,
              decoration: InputDecoration(
                hintText: &quot;请输入用户名&quot;,
              ),
              onChanged: (val) {
                print(val);
              },
            )
          ],
        ),
      ),
    );
  }
}\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-get-find" tabindex="-1"><a class="header-anchor" href="#_7-get-find" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>7. Get.find()</h2><p>当有多个控制器时，指定使用某个具体的控制器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// 现有 - HomeController, LoginController
Get.find&lt;LoginController&gt;()\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-混入状态-statemixin-保存动态接口数据" tabindex="-1"><a class="header-anchor" href="#_8-混入状态-statemixin-保存动态接口数据" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>8. 混入状态 StateMixin （保存动态接口数据）</h2><p>这个一般配合接口数据，在写 <strong>getConnect</strong> 一块时 说，可以简单看看</p><p>另一种处理 UI 状态的方法是使用 StateMixin &lt; t &gt; 。要实现它，可以使用 with 将 StateMixin &lt; t &gt; 添加到允许 t 模型的控制器中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`class Controller extends GetController with StateMixin&lt;User&gt;{}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方法可以随时改变状态，只需以下方式传递数据和状态:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`change(data, status: RxStatus.success());\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>允许这些状态:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`RxStatus.loading();
RxStatus.success();
RxStatus.empty();
RxStatus.error(&#39;message&#39;);\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要在 UI 中表示它，请使用:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`class OtherClass extends GetView&lt;Controller&gt; {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: controller.obx(
        (state)=&gt;Text(state.name),
        
        onLoading: CustomLoadingIndicator(),
        onEmpty: Text(&#39;No data found&#39;),
       
        onError: (error)=&gt;Text(error),
      ),
    );
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-内置函数工具类-woker-一般事件发生时触发特定的回调。" tabindex="-1"><a class="header-anchor" href="#_9-内置函数工具类-woker-一般事件发生时触发特定的回调。" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>9. 内置函数工具类 Woker(一般事件发生时触发特定的回调。)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`/// 变量发出新值时，都会调用
ever(count1, (_) =&gt; print(&quot;$_ has been changed&quot;));

/// 在变量第一次被更改时才调用 
once(count1, (_) =&gt; print(&quot;$_ was changed once&quot;));

/// 防抖，连续点击多次，只执行一次，比如登录，搜索函数中非常有用
debounce(count1, (_) =&gt; print(&quot;debouce$_&quot;), time: Duration(seconds: 1));

/// 节流，如果用户在1秒内对一个变量进行了1000次更改，那么他只会在规定的计时器之后发送最后一次更改，默认为800毫秒
interval(count1, (_) =&gt; print(&quot;interval $_&quot;), time: Duration(seconds: 1));\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-对比-getbuilder-vs-getx-vs-obx" tabindex="-1"><a class="header-anchor" href="#_10-对比-getbuilder-vs-getx-vs-obx" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>10. 对比 GetBuilder vs GetX vs Obx</h2><p>GetBuilder 在 内存消耗 方面非常经济，而且几乎没有比他更经济的方法了，但是，GetBuilder 仍然是一个机械状态管理器，您需要手动调用 update () 才会更新视图</p><p>GetX 仍然比其他任何反应状态管理器更经济，但是它比 GetBuilder 消耗更多的内存</p><p>Obx 比 GetX 更经济，但是输给了 GetBuilder, 与 GetX 和 GetBuilder 不同，您不能在 Obx 中初始化控制器</p><p>但使用 Obx，您不需要编写控制器类型，可以从多个不同的控制器中听到更改，但是需要在此之前进行初始化</p><p><strong>一劳永逸，使用Obx， 然后是GetX， 追求极致性能使用 GetBuilder</strong></p>`,85);function o(m,b){const i=a("ExternalLinkIcon");return l(),d("div",null,[e("p",null,[n("pubspec."),e("a",v,[n("yaml"),t(i)]),n(" 文件:")]),u])}const g=s(c,[["render",o],["__file","Getx - ruheshiyongzhuangtaiguanlishuju_rxbool.html.vue"]]);export{g as default};
