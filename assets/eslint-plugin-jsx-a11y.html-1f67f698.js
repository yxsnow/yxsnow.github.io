import{_ as t,r as s,o as r,c as i,b as e,d as n,e as o,a}from"./app-ff2f634e.js";const c={},d=e("code",null,"eslint-config-airbnb",-1),u={href:"https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb-1",target:"_blank",rel:"noopener noreferrer"},h={href:"http://eslint.org",target:"_blank",rel:"noopener noreferrer"},p=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># npm
npm install eslint --save-dev
# yarn
yarn add eslint --dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，安装<code>eslint-plugin-jsx-a11y</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># npm
npm install eslint-plugin-jsx-a11y --save-dev
# yarn
yarn add eslint-plugin-jsx-a11y --dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意：**如果你全局安装了 ESLint（使用<code>-g</code>npm 中的标志，或者<code>global</code>yarn 中的前缀），那么你也必须<code>eslint-plugin-jsx-a11y</code>全局安装。</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> <a href="#"></a><a href="#usage"></a>用法</h2><p>添加<code>jsx-a11y</code>到<code>.eslintrc</code>配置文件的插件部分。您可以省略<code>eslint-plugin-</code>前缀：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
&quot;plugins&quot;:[&quot;jsx-a11y&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在规则部分配置您要使用的规则。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
&quot;rules&quot;:{
&quot;jsx-a11y/rule-name&quot;:2
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您还可以一次启用所有推荐的或严格的规则。添加<code>plugin:jsx-a11y/recommended</code>或<code>plugin:jsx-a11y/strict</code>输入<code>extends</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
&quot;extends&quot;:[&quot;plugin:jsx-a11y/recommended&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的规则" tabindex="-1"><a class="header-anchor" href="#支持的规则" aria-hidden="true">#</a> <a href="#"></a><a href="#supported-rules"></a>支持的规则</h2>`,12),b=e("code",null,"<span>",-1),_={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/accessible-emoji.md",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/alt-text.md",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-has-content.md",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-activedescendant-has-tabindex.md",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-props.md",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"aria-*",-1),k={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-proptypes.md",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-role.md",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-unsupported-elements.md",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/autocomplete-valid.md",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/click-events-have-key-events.md",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/heading-has-content.md",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"h1",-1),I=e("code",null,"h2",-1),B={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/html-has-lang.md",target:"_blank",rel:"noopener noreferrer"},R=e("code",null,"<html>",-1),L=e("code",null,"lang",-1),N={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/iframe-has-title.md",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/img-redundant-alt.md",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"<img>",-1),S={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/interactive-supports-focus.md",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"onClick",-1),O={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/label-has-associated-control.md",target:"_blank",rel:"noopener noreferrer"},F=e("code",null,"label",-1),J={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/lang.md",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/media-has-caption.md",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"<audio>",-1),T=e("code",null,"<video>",-1),w=e("code",null,"<track>",-1),z={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/mouse-events-have-key-events.md",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"onMouseOver",-1),Q=e("code",null,"onMouseOut",-1),U=e("code",null,"onFocus",-1),W=e("code",null,"onBlur",-1),X={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-access-key.md",target:"_blank",rel:"noopener noreferrer"},Y=e("code",null,"accessKey",-1),Z={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-autofocus.md",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-autofocus.md",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-distracting-elements.md",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md",target:"_blank",rel:"noopener noreferrer"},le={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-element-interactions.md",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md",target:"_blank",rel:"noopener noreferrer"},te={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-tabindex.md",target:"_blank",rel:"noopener noreferrer"},se=e("code",null,"tabIndex",-1),re={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-onchange.md",target:"_blank",rel:"noopener noreferrer"},ie=e("code",null,"onBlur",-1),ae=e("code",null,"onChange",-1),ce={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-redundant-roles.md",target:"_blank",rel:"noopener noreferrer"},de={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-static-element-interactions.md",target:"_blank",rel:"noopener noreferrer"},ue=e("code",null,"<div>",-1),he={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-has-required-aria-props.md",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-supports-aria-props.md",target:"_blank",rel:"noopener noreferrer"},be=e("code",null,"aria-*",-1),_e=e("code",null,"role",-1),ge={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/scope.md",target:"_blank",rel:"noopener noreferrer"},me=e("code",null,"scope",-1),ve=e("code",null,"<th>",-1),fe={href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/tabindex-no-positive.md",target:"_blank",rel:"noopener noreferrer"},xe=e("code",null,"tabIndex",-1);function ye(ke,je){const l=s("ExternalLinkIcon");return r(),i("div",null,[e("p",null,[e("strong",null,[n("如果您通过 安装此插件"),d,n("，请按照"),e("a",u,[n("这些说明进行操作"),o(l)]),n("。")])]),e("p",null,[n("您首先需要安装"),e("a",h,[n("ESLint"),o(l)]),n("：")]),p,e("ul",null,[e("li",null,[e("p",null,[b,n("access "),e("a",_,[n("-emoji"),o(l)]),n("：强制表情符号被包裹并提供屏幕阅读器访问。")])]),e("li",null,[e("p",null,[e("a",g,[n("alt-text"),o(l)]),n("：强制所有需要替代文本的元素都具有有意义的信息以传递回最终用户。")])]),e("li",null,[e("p",null,[e("a",m,[n("anchor-has-content"),o(l)]),n("：强制所有锚点包含可访问的内容。")])]),e("li",null,[e("p",null,[e("a",v,[n("anchor-is-valid"),o(l)]),n("：强制所有锚点都是有效的、可导航的元素。")])]),e("li",null,[e("p",null,[e("a",f,[n("aria-activedescendant-has-tabindex"),o(l)]),n("：使用 aria-activedescendant 强制元素是可选项卡的。")])]),e("li",null,[e("p",null,[e("a",x,[n("aria-props"),o(l)]),n("：强制所有"),y,n("道具都有效。")])]),e("li",null,[e("p",null,[e("a",k,[n("aria-proptypes"),o(l)]),n("：强制 ARIA 状态和属性值有效。")])]),e("li",null,[e("p",null,[e("a",j,[n("aria-role"),o(l)]),n("：强制具有 ARIA 角色的元素必须使用有效的、非抽象的 ARIA 角色。")])]),e("li",null,[e("p",null,[e("a",A,[n("aria-unsupported-elements"),o(l)]),n("：强制不支持 ARIA 角色、状态和属性的元素不具有这些属性。")])]),e("li",null,[e("p",null,[e("a",E,[n("autocomplete-valid"),o(l)]),n("：强制正确使用自动完成属性。")])]),e("li",null,[e("p",null,[e("a",D,[n("click-events-have-key-events"),o(l)]),n("：强制一个可点击的非交互式元素至少有一个键盘事件监听器。")])]),e("li",null,[e("p",null,[e("a",H,[n("标题-具有含量"),o(l)]),n("：实施标题（"),q,n("，"),I,n("等）元素包含可访问的内容。")])]),e("li",null,[e("p",null,[e("a",B,[n("html-has-lang"),o(l)]),n("：强制"),R,n("元素有"),L,n("道具。")])]),e("li",null,[e("p",null,[e("a",N,[n("iframe-has-title"),o(l)]),n("：强制 iframe 元素具有标题属性。")])]),e("li",null,[e("p",null,[e("a",V,[n("img-redundant-alt"),o(l)]),n("：强制"),C,n("alt 道具不包含“图像”、“图片”或“照片”一词。")])]),e("li",null,[e("p",null,[e("a",S,[n("Interactive-supports-focus"),o(l)]),n("：强制具有交互式处理程序的元素"),M,n("必须是可聚焦的。")])]),e("li",null,[e("p",null,[e("a",O,[n("label-has-related-control"),o(l)]),n("：强制"),F,n("标签具有文本标签和关联控件。")])]),e("li",null,[e("p",null,[e("a",J,[n("lang"),o(l)]),n("：强制 lang 属性具有有效值。")])]),e("li",null,[e("p",null,[e("a",K,[n("媒体有字幕"),o(l)]),n("：强制执行"),P,n("和"),T,n("元素必须有一个"),w,n("为字幕。")])]),e("li",null,[e("p",null,[e("a",z,[n("mouse-events-have-key-events"),o(l)]),n("：强制"),G,n("/"),Q,n("伴随"),U,n("/"),W,n("仅用于键盘用户。")])]),e("li",null,[e("p",null,[e("a",X,[n("no-access-key"),o(l)]),n("：强制"),Y,n("不在任何元素上使用该道具，以避免屏幕阅读器使用的键盘命令出现复杂情况。")])]),e("li",null,[e("p",null,[e("a",Z,[n("no-autofocus"),o(l)]),n("：不使用强制"),e("a",$,[n("自动对焦"),o(l)]),n("道具。")])]),e("li",null,[e("p",null,[e("a",ee,[n("no-distracting-elements"),o(l)]),n("：强制不使用分散注意力的元素。")])]),e("li",null,[e("p",null,[e("a",ne,[n("no-interactive-element-to-noninteractive-role"),o(l)]),n("：不应为交互元素分配非交互角色。")])]),e("li",null,[e("p",null,[e("a",le,[n("no-noninteractive-element-interactions"),o(l)]),n("：不应为非交互式元素分配鼠标或键盘事件侦听器。")])]),e("li",null,[e("p",null,[e("a",oe,[n("no-noninteractive-element-to-interactive-role"),o(l)]),n("：不应为非交互式元素分配交互式角色。")])]),e("li",null,[e("p",null,[e("a",te,[n("no-noninteractive-tabindex"),o(l)]),n("："),se,n("应该只在交互式元素上声明。")])]),e("li",null,[e("p",null,[e("a",re,[n("no-onchange"),o(l)]),n("：为了可访问性"),ie,n("，"),ae,n("在选择菜单上强制使用over 。")])]),e("li",null,[e("p",null,[e("a",ce,[n("no-redundant-roles"),o(l)]),n("：强制显式角色属性与元素上的隐式/默认角色属性不同。")])]),e("li",null,[e("p",null,[e("a",de,[n("no-static-element-interactions"),o(l)]),n("：强制"),ue,n("具有单击处理程序的非交互式可见元素（例如）使用 role 属性。")])]),e("li",null,[e("p",null,[e("a",he,[n("role-has-required-aria-props"),o(l)]),n("：强制具有 ARIA 角色的元素必须具有该角色的所有必需属性。")])]),e("li",null,[e("p",null,[e("a",pe,[n("role-supports-aria-props"),o(l)]),n("：强制定义具有显式或隐式角色的元素仅包含"),be,n("该支持的属性"),_e,n("。")])]),e("li",null,[e("p",null,[e("a",ge,[n("scope"),o(l)]),n(" : Enforce "),me,n("prop 仅用于"),ve,n("元素。")])]),e("li",null,[e("p",null,[e("a",fe,[n("tabindex-no-positive"),o(l)]),n("：强制"),xe,n("值不大于零。")])])])])}const Ee=t(c,[["render",ye],["__file","eslint-plugin-jsx-a11y.html.vue"]]);export{Ee as default};
