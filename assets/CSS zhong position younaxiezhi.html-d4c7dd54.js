import{_ as i,o as l,c as t,a as e}from"./app-ff2f634e.js";const o={},s=e('<ul><li><p>position：允许您从正常的文档流布局中取出元素，并使它们具有不同的行为，例如放在另一个元素的上面，或者始终保持在浏览器视窗内的同一位置。</p></li><li><p><code>static</code>：静态定位是每个元素获取的默认值——它只是意味着“将元素放入它在文档布局流中的正常位置 ——这里没有什么特别的。</p></li><li><p><code>relative</code>：与静态定位非常相似，占据在正常的文档流中，除了你仍然可以修改它的最终位置，包括让它与页面上的其他元素重叠。</p><ul><li>如果不设置 top,right,bottom,left，则基本与static 表现一致</li><li>设置了 top,right,bottom,left 后，会使元素做对应的偏移</li></ul></li><li><p><code>absolute</code>：绝对定位的元素不再存在于正常文档布局流中。相反，它坐在它自己的层独立于一切。</p><ul><li>绝对定位设置位置偏移之后，是相对于其父级元素</li><li>如果父级元素为 static ，则会相对于其父级的父级元素，如果没有找到非 static 值的父级元素，则最终会相对于 html</li><li>相对父级元素是非 static 意味着，父级是 relative、absolute、fixed、sticky 均可</li><li>最佳实践是用一个 relative 的父级包裹</li></ul></li><li><p><code>fixed</code>：固定定位，与 absolute 的唯一区别是，固定定位固定元素则是相对于浏览器视口本身</p></li><li><p><code>sticky</code>：粘性定位，它基本上是相对位置和固定位置的混合体，它允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点（例如，从视口顶部起10像素）为止，此后它就变得固定了。</p><ul><li>是相对于视口位置</li><li>如果这个元素的父级是 body ，则达到其阈值点后，会一直固定在设置的位置</li><li>如果这个元素的父级是其他元素，则达到其阈值点后，会固定在设置的位置，但是当其父级元素已不在视口中时，则当前元素也会消失在视口中</li></ul></li></ul><h3 id="知识拓展" tabindex="-1"><a class="header-anchor" href="#知识拓展" aria-hidden="true">#</a> 知识拓展</h3><ul><li>当元素设置了如 static、relative、sticky 等值时，再设置 margin-top 等属性，会影响父元素，这里可以用 BFC 相关知识解决</li><li>所有的 position 属性，如果不设置改变其位置的 top、left、right、bottom 等属性，均不会有位置变化</li><li>z-index 作用于所有 position 非 static 属性的元素上</li><li>除了上述 5 种属性值之外，position 还有 4 种取值，但归根结底是5种类型，9 种取值： <ul><li>inherit：规定应该从父元素继承 position 属性的值，inherit 关键字可用于任何 HTML 元素上的任何 CSS 属性，兼容：ie7及以下版本不支持此属性</li><li>initial：设置positon的值为默认值(static)，兼容：ie不支持此属性</li><li>unset：设置positon的值为不设置，即为 static <ul><li>如果该属性的默认属性是 继承属性(例如字体相关的默认属性基本都是继承)，该值等同于 inherit</li><li>如果该属性的默认属性 不是继承属性(例如pisition的默认属性为static)，该值等同于 initial</li></ul></li><li>revert：指定恢复 user-agent 的设置，如果用户有设置，则为用户设置，否则为浏览器默认设置</li></ul></li></ul>',3),a=[s];function c(n,r){return l(),t("div",null,a)}const u=i(o,[["render",c],["__file","CSS zhong position younaxiezhi.html.vue"]]);export{u as default};