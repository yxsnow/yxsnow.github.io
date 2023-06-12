import{_ as i,r as t,o as r,c,b as e,d as n,e as d,a as s}from"./app-ff2f634e.js";const l={},o=e("h2",{id:"什么是-pnpm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是-pnpm","aria-hidden":"true"},"#"),n(" 什么是 pnpm？")],-1),p=e("code",null,"pnpm",-1),m=e("strong",null,"最先进的包管理器",-1),u=e("strong",null,"节约磁盘空间并提升安装速度",-1),v=e("strong",null,"创建非扁平化的 node_modules 文件夹",-1),g={href:"https://link.juejin.cn/?target=https%3A%2F%2Fpnpm.io%2Fzh%2Fmotivation",target:"_blank",rel:"noopener noreferrer"},h=s(`<h2 id="如何使用pnpm" tabindex="-1"><a class="header-anchor" href="#如何使用pnpm" aria-hidden="true">#</a> 如何使用pnpm?</h2><h3 id="全局安装pnpm" tabindex="-1"><a class="header-anchor" href="#全局安装pnpm" aria-hidden="true">#</a> 全局安装pnpm</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g pnpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="menorepo工程项目结构" tabindex="-1"><a class="header-anchor" href="#menorepo工程项目结构" aria-hidden="true">#</a> menorepo工程项目结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>packages
    pkg1
        package.json
    pkg2
        package.json
package.json
pnpm-workspace.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>packages</code> 为工作区目录，里面可创建多个项目，项目里面需包含<code>package.json</code>文件，<code>package.json</code>里的<code>name</code>为项目名需要必填</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>packages
    pkg1
        package.json
    pkg2
        package.json
package.json
pnpm-workspace.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),b=e("code",null,"pnpm-workspace.yaml",-1),k={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.pnpm.cn%2Fworkspaces",title:"https://www.pnpm.cn/workspaces",target:"_blank",rel:"noopener noreferrer"},x=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// pnpm-workspace.yaml
packages:
    // packages目录下的所有子目录
    - &#39;packages/*&#39;
    // components目录下的所有子目录
    - &#39;components/*&#39;
    // 排除test目录下的包
    - &#39;!**/test/**&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为所有包安装依赖" tabindex="-1"><a class="header-anchor" href="#为所有包安装依赖" aria-hidden="true">#</a> 为所有包安装依赖</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装全局的公共依赖包" tabindex="-1"><a class="header-anchor" href="#安装全局的公共依赖包" aria-hidden="true">#</a> 安装全局的公共依赖包</h3>`,4),_=e("code",null,"pnpm",-1),f={href:"https://link.juejin.cn/?target=https%3A%2F%2Fpnpm.io%2Fzh%2Fpnpm-cli%23-w---workspace-root",target:"_blank",rel:"noopener noreferrer"},w=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add react -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是一个开发依赖的话，可以加上 <code>-D</code> 参数，表示这是一个开发依赖，会装到 <code>pacakage.json</code> 中的 <code>devDependencies</code> 中，比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add react -wD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="给某个package单独安装指定依赖" tabindex="-1"><a class="header-anchor" href="#给某个package单独安装指定依赖" aria-hidden="true">#</a> 给某个package单独安装指定依赖</h3>`,4),j=e("code",null,"pnpm",-1),F={href:"https://link.juejin.cn/?target=https%3A%2F%2Fpnpm.io%2Fzh%2Ffiltering",target:"_blank",rel:"noopener noreferrer"},y=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add react --filter pkg1(项目名)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，<code>--filter</code> 参数跟着的是package下的 <code>package.json</code> 的 <code>name</code> 字段，并不是目录名。</p><p>也可进入到对应项目下执行以下代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// packages/pkg1
pnpm add react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块之间相互安装依赖" tabindex="-1"><a class="header-anchor" href="#模块之间相互安装依赖" aria-hidden="true">#</a> 模块之间相互安装依赖</h3><p>将package下的pkg1包安装到pkg2中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add pkg1 --filter pkg2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function A(N,V){const a=t("ExternalLinkIcon");return r(),c("div",null,[o,e("p",null,[p,n(" 是新一代的包管理工具，号称是"),m,n("。按照官网说法，可以实现"),u,n("和"),v,n("两大目标，具体原理可以参考 "),e("a",g,[n("pnpm 官网"),d(a)]),n("。")]),h,e("p",null,[b,n("可以自定义"),e("a",k,[n("工作区"),d(a)]),n("目录，默认为packages下的所有子目录。")]),x,e("p",null,[_,n(" 提供了 "),e("a",f,[n("-w, --workspace-root"),d(a)]),n(" 参数，可以将依赖包安装到工程的根目录下，作为所有 package 的公共依赖。")]),w,e("p",null,[j,n(" 提供了 "),e("a",F,[n("--filter"),d(a)]),n(" 参数，可以用来对特定的package进行某些操作。")]),y])}const B=i(l,[["render",A],["__file","pnpm workspacedechangyongmingling.html.vue"]]);export{B as default};
