import{_ as e,o as n,c as i,a as s}from"./app-ff2f634e.js";const d="/assets/640_wx_fmt_png_wxfrom_5_wx_lazy__934aa341482746c0a-e1f45c48.png",l={},a=s(`<p>先来说说一些API的用法</p><h3 id="setup-script" tabindex="-1"><a class="header-anchor" href="#setup-script" aria-hidden="true">#</a> setup script</h3><p>这个语法糖真的是太爽了，想想之前vue2的那些写法，真的让人很恼火，自由度非常不够，<code>setup script</code>体验过的都说好~别急，咱们继续~</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
// 在这里写vue的逻辑
&lt;/script&gt;
&lt;template&gt;
  &lt;div&gt;哈哈&lt;/div&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref-reactive-事件" tabindex="-1"><a class="header-anchor" href="#ref-reactive-事件" aria-hidden="true">#</a> ref &amp; reactive &amp; 事件</h3><p>总结三点：</p><ul><li><p><strong>ref</strong>：需要响应式的常量，但是使用或者赋值时需要<code>xxx.value</code></p></li><li><p><strong>reactive</strong>：需要响应式的对象或者数组，可直接使用或赋值</p></li><li><p><strong>事件</strong>：在<code>setup script</code>中，直接定义事件，不需要像vue2那样在method中定义</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import { ref, reactive } from &#39;vue&#39;
const enum Name {
  CN = &#39;林三心&#39;,
  EN = &#39;Sunshine_Lin&#39;
}
const enum Gender {
  MAN = &#39;男&#39;,
  WOMAN = &#39;女&#39;
}
// 常量
const name = ref(Name.CN)
// 对象、数组
const user = reactive({
  name: Name.CN,
  gender: Gender.MAN
})
const arr = reactive&lt;{ name: string }[]&gt;([{ name: &#39;嘻嘻嘻&#39; }])
// 事件直接定义
const switchName = () =&gt; {
  // 赋值需要name.value
  name.value = name.value === Name.CN ? Name.EN : Name.CN
}
// 事件直接定义
const switchGender = () =&gt; {
  // 直接赋值
  user.gender = user.gender === Gender.MAN ? Gender.WOMAN : Gender.MAN
}
const handleAdd = () =&gt; {
  arr.push({ name: &#39;哈哈哈&#39; })
}
&lt;/script&gt;
&lt;template&gt;
  &lt;button @click=&quot;switchName&quot;&gt;
    我叫 {{name}}
  &lt;/button&gt;
  &lt;button @click=&quot;switchGender&quot;&gt;
    我叫 {{user.name}}，我是 {{user.gender}}
  &lt;/button&gt;
  &lt;button @click=&quot;handleAdd&quot;&gt;新增&lt;/button&gt;
  &lt;ul&gt;
    &lt;li v-for=&quot;(item, index) in arr&quot; :key=&quot;index&quot;&gt;{{ item.name }}-{{ index }}&lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="computed-watch-watcheffect" tabindex="-1"><a class="header-anchor" href="#computed-watch-watcheffect" aria-hidden="true">#</a> computed &amp; watch &amp; watchEffect</h3><ul><li><p><strong>computed</strong>：计算函数</p></li><li><p><strong>watch</strong>：监听函数，可监听常量和引用变量，可传<code>immediate</code>和<code>deep</code>。<strong>可监听对象也可只监听对象的某个属性</strong></p></li><li><p><strong>watchEffect</strong>：跟watch差不多，但是watchEffect不需要说明监听谁，用到谁就监听谁（详情见下）</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import { ref, 
         reactive, 
         computed, 
         watch, 
         watchEffect } from &#39;vue&#39;
const enum Name {
  CN = &#39;林三心&#39;,
  EN = &#39;Sunshine_Lin&#39;
}
const enum Gender {
  MAN = &#39;男&#39;,
  WOMAN = &#39;女&#39;
}
const name = ref(Name.CN)
const user = reactive({
  name: Name.CN,
  gender: Gender.MAN
})
const switchName = () =&gt; {
  name.value = name.value === Name.CN ? Name.EN : Name.CN
}
const switchGender = () =&gt; {
  user.gender = user.gender === Gender.MAN ? Gender.WOMAN : Gender.MAN
}
// computed计算出userText
const userText = computed(() =&gt; {
  return \`我叫\${user.name}，我是\${user.gender}的\`
})
// 监听常量name
watch(name, (next, pre) =&gt; {
  console.log(&#39;name被修改了&#39;, next, pre)
})
// 监听user对象
watch(user, (next) =&gt; {
  console.log(&#39;user被修改了&#39;, next)
}, {
  immediate: false, // 首次执行
  deep: true // 深度监听对象
})
// 可监听对象的某个属性，这里监听user.gender
watch(() =&gt; user.gender, (next, pre) =&gt; {
  console.log(&#39;user.gender被修改了&#39;, next, pre)
})
// 不需要说明监听谁
// 用到user.gender就监听user.gender
watchEffect(() =&gt; {
  const gender = user.gender
  console.log(&#39;user.gender被修改了&#39;, gender)
})
&lt;/script&gt;
&lt;template&gt;
  &lt;button @click=&quot;switchName&quot;&gt;修改name&lt;/button&gt;
  &lt;button @click=&quot;switchGender&quot;&gt;修改user.gender&lt;/button&gt;
  &lt;div&gt;{{ userText }}&lt;/div&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3><p>看一下vue2的生命周期在vue3中的表现</p><ul><li><p>beforeCreate -&gt; 没了</p></li><li><p>created -&gt; 没了</p></li><li><p>beforeMount -&gt; onBeforeMount</p></li><li><p>mounted -&gt; onMounted</p></li><li><p>beforeUpdate -&gt; onBeforeUpdate</p></li><li><p>updated -&gt; onUpdated</p></li><li><p>beforeUnmount -&gt; onBeforeUnmount</p></li><li><p>unmounted -&gt; onUnmounted</p></li><li><p>activated -&gt; onActivated</p></li><li><p>deactivated -&gt; onDeactivated</p></li><li><p>errorCaptured -&gt; onErrorCaptured</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import {
  onBeforeMount,
  onMounted,
  onUpdated,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured
} from &#39;vue&#39;
onBeforeMount(() =&gt; {
  console.log(&#39;挂载前&#39;)
})
onMounted(() =&gt; {
  console.log(&#39;挂载&#39;)
})
onBeforeUpdate(() =&gt; {
  console.log(&#39;更新前&#39;)
})
onUpdated(() =&gt; {
  console.log(&#39;更新&#39;)
})
onBeforeUnmount(() =&gt; {
  console.log(&#39;销毁前&#39;)
})
onUnmounted(() =&gt; {
  console.log(&#39;销毁&#39;)
})
onActivated(() =&gt; {
  console.log(&#39;kee-alive激活本组件&#39;)
})
onDeactivated(() =&gt; {
  console.log(&#39;kee-alive隐藏本组件&#39;)
})
onErrorCaptured(() =&gt; {
  console.log(&#39;错误捕获&#39;)
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defineprops-defineemits" tabindex="-1"><a class="header-anchor" href="#defineprops-defineemits" aria-hidden="true">#</a> defineProps &amp; defineEmits</h3><p>还记得之前vue2的父传子，子改父，的做法吗？使用<code>porps、this.$emit</code></p><p>到了vue3，这种写法改了</p><p>我们来看看父组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import Dialog from &#39;./Dialog.vue&#39;
const msg = ref(&#39;我是msg&#39;)
const changeMsg = (val: string) =&gt; {
  msg.value = val
}
&lt;/script&gt;
&lt;template&gt;
// 传进子组件
&lt;Dialog :msg=&quot;msg&quot; @changeMsg=&quot;changeMsg&quot; /&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来看看子组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import { defineProps, defineEmits } from &#39;vue&#39;
// 注册父传子的props
const { msg } = defineProps({
  msg: {
    type: String,
    required: true
  }
})
// 注册父传子的事件
const emits = defineEmits([&#39;changeMsg&#39;])
const handleClick = () =&gt; {
  // 修改父组件的值
  emits(&#39;changeMsg&#39;, &#39;修改msg&#39;)
}
&lt;/script&gt;
&lt;template&gt;
  &lt;div @click=&quot;handleClick&quot;&gt;{{ msg }}&lt;/div&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defineexpose" tabindex="-1"><a class="header-anchor" href="#defineexpose" aria-hidden="true">#</a> defineExpose</h3><p>这个API主要主要作用是：将子组件的东西暴露给父组件，好让父组件可以使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 子组件 --&gt;
&lt;script setup&gt;
import { ref } from &#39;vue&#39;
const msg = ref(&#39;hello vue3!&#39;)
function change(

) {
  msg.value = &#39;hi vue3!&#39;
  console.log(msg.value)
}
// 属性或方法必须暴露出去，父组件才能使用
defineExpose({ msg, change })
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 父组件 --&gt;
&lt;script setup&gt;
import ChildView from &#39;./ChildView.vue&#39;
import { ref, onMounted } from &#39;vue&#39;
const child = ref(null)
onMounted(() =&gt; {
  console.log(child.value.msg) // hello vue3!
  child.value.change() // hi vue3!
})
&lt;/script&gt;
&lt;template&gt;
  &lt;ChildView ref=&quot;child&quot;&gt;&lt;/ChildView&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局api" tabindex="-1"><a class="header-anchor" href="#全局api" aria-hidden="true">#</a> 全局API</h3><p>需要注意几个点：</p><ul><li><p>1、vue3已经没有filter这个全局方法了</p></li><li><p>2、vue.component -&gt; app.component</p></li><li><p>3、vue.directive -&gt; app.directive</p></li><li><p>4、之前Vue.xxx现在都改成app.xxx</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 全局自定义指令
app.directive(&#39;focus&#39;, {
  mounted(el) {
    el.focus()
  }
})
// 全局自定义组件
import CustomComp from &#39;./components/CustomComp.vue&#39;
app.component(&#39;CustomComp&#39;, CustomComp)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h3><p>还记得vue2中的自定义指令吗？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.directive(&#39;xxx&#39;, {
  // 指令绑定到指定节点，只执行一次
  bind() {},
  // 指定节点插入dom
  inserted() { },
  // 节点VNode更新时，可能刚更新，没完全更新
  update() {},
  // VNode完全更新
  componentUpdated() {},
  // 指令从指定节点解绑，只执行一次
  unbind() {}
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来看看vue3的，比较贴近vue本身的生命周期</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app.directive(&#39;xxx&#39;, {
    // 在绑定元素的 attribute 或事件监听器被应用之前调用, 在指令需要附加须要在普通的 v-on 事件监听器前调用的事件监听器时，这很有用
    created() {},
    // 当指令第一次绑定到元素并且在挂载父组件之前调用
    beforeMount() {},
    // 在绑定元素的父组件被挂载后调用
    mounted() {},
    // 在更新包含组件的 VNode 之前调用
    beforeUpdate() {},
    // 在包含组件的 VNode 及其子组件的 VNode 更新后调用
    updated() {},
    // 在卸载绑定元素的父组件之前调用
    beforeUnmount() {},
    // 当指令与元素解除绑定且父组件已卸载时, 只调用一次
    unmounted() {},
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defineaysnccompoment-suspense" tabindex="-1"><a class="header-anchor" href="#defineaysnccompoment-suspense" aria-hidden="true">#</a> defineAysncCompoment &amp; Suspense</h3><p>这个API用来加载异步组件，异步组件的好处我想大家也知道，就是用不到他就不加载，用到了才会加载，这大大降低了首屏加载时间，是优化的重要手段</p><blockquote><p>defineAysncCompoment需配合vue3的内置全局组件<code>Suspense</code>使用，需要用<code>Suspense</code>包住异步组件</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const AsyncPopup = defineAsyncComponent({ 
  loader: () =&gt; import(&quot;./LoginPopup.vue&quot;),
   // 加载异步组件时要使用的组件
  loadingComponent: LoadingComponent,
   // 加载失败时要使用的组件
  errorComponent: ErrorComponent, 
  // 在显示 loadingComponent 之前的延迟 | 默认值：200（单位 ms）
  delay: 1000, 
  // 如果提供了 timeout ，并且加载组件的时间超过了设定值，将显示错误组件
  // 默认值：Infinity（即永不超时，单位 ms）
  timeout: 3000 
})
// 使用时，可控制显隐
&lt;Suspense v-if=&quot;show&quot; &gt;
  &lt;AsyncPopup /&gt;
&lt;/Suspense&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> Hooks</h2><h3 id="自定义hook——useuser" tabindex="-1"><a class="header-anchor" href="#自定义hook——useuser" aria-hidden="true">#</a> 自定义hook——<code>useUser</code></h3><p>我们要知道<code>Hooks</code>的好处，其实它就是一个函数，好处有：</p><ul><li><p>复用性高</p></li><li><p>减少代码量，提高可维护性</p></li><li><p>相同逻辑可放一起</p></li></ul><p>就比如刚刚我们修改user的那个例子，假如很多页面都需要这个逻辑，那岂不是每个地方都需要写一遍？</p><p>所以最好的办法就是把这部分逻辑封装成<code>Hook</code></p><blockquote><p>注意：规范点，hook都要以<code>use</code>开头</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// useUser.ts
import { reactive, computed } from &#39;vue&#39;
const enum Name {
  CN = &#39;林三心&#39;,
  EN = &#39;Sunshine_Lin&#39;,
}
const enum Gender {
  MAN = &#39;男&#39;,
  WOMAN = &#39;女&#39;,
}
const useUser = () =&gt; {
  const user = reactive({
    name: Name.CN,
    gender: Gender.MAN,
  })
  const userText = computed(() =&gt; \`我叫\${user.name}，我是\${user.gender}的\`)
  const switchGender = () =&gt; {
    user.gender = user.gender === Gender.MAN ? Gender.WOMAN : Gender.MAN
  }
  return {
    switchGender,
    userText,
  }
}
export default useUser

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们可以在页面中使用这个自定义hook</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import useUser from &#39;./useUser&#39;
const {
  userText,
  switchGender
} = useUser()
&lt;/script&gt;
&lt;template&gt;
  &lt;div @click=&quot;switchGender&quot;&gt;
    {{ userText }}
  &lt;/div&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="userouter-useroute" tabindex="-1"><a class="header-anchor" href="#userouter-useroute" aria-hidden="true">#</a> useRouter &amp; useRoute</h3><p>这是vue3提供给我们的两个路由hook</p><ul><li><p><strong>useRouter</strong>：用来执行路由跳转</p></li><li><p><strong>useRoute</strong>：用来获取路由参数</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import { useRouter } from &#39;vue-router&#39;
const router = useRouter()
function onClick(

) {
  // 跳转
  router.push({
    path: &#39;/about&#39;,
    query: {
      msg: &#39;hello vue3!&#39;
    }
  })
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import { useRoute } from &#39;vue-router&#39;
const route = useRoute()
console.log(route.query.msg) 
// hello vue3!
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><p>介绍一些vue3内置的组件</p><h3 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h3><p>回想一下，在vue2中，只允许存在一个根节点，但是在vue3中，允许存在多个根节点，其实是因为vue3做了处理：</p><p>vue3检测到你有多个根节点时，会为你最外层补上一个<code>Fragment</code>，所以其实根节点还是一个</p><p>vue3支持多个根节点，大家要记得哦~</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
&lt;template&gt;
  &lt;div&gt;哈哈&lt;/div&gt;
  &lt;div&gt;嘻嘻&lt;/div&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport" aria-hidden="true">#</a> Teleport</h3><p><code>Teleport</code>是传送门组件，他可以将你的组件，挂载到任意一个节点之下，只要你指定一个选择器，可以是id、class</p><p>例如：将Dialog组件挂载到id为app的节点下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Dialog.vue
&lt;template&gt;
  &lt;div&gt;我是林三心我是林三心我是林三心我是林
    三心我是林三心我是林三心我是林三心我是
    林三心我是林三心我是林三心我是林三心
    我是林三心&lt;/div&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import Dialog from &#39;./Dialog.vue&#39;
&lt;/script&gt;
&lt;template&gt;
  // 将Dialog组件挂载到id为app的节点下
  &lt;Teleport to=&quot;#app&quot;&gt;
    &lt;Dialog /&gt;
  &lt;/Teleport&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到，Dialog组件被挂到了id为app的节点下</p><img width="677" height="247" src="`+d+'">',68),t=[a];function v(r,u){return n(),i("div",null,t)}const m=e(l,[["render",v],["__file","zuizhibaideVue3jiaocheng，5fenzhongjiukanwanliao.html.vue"]]);export{m as default};
