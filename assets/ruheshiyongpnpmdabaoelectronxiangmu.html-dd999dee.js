import{_ as l,r as u,o,c as t,b as e,d as n,e as d,a as s}from"./app-ff2f634e.js";const r={},a=s(`<h1 id="如何使用pnpm打包electron项目" tabindex="-1"><a class="header-anchor" href="#如何使用pnpm打包electron项目" aria-hidden="true">#</a> 如何使用pnpm打包electron项目</h1><p>最近手头有一个<strong>electron</strong>的项目，使用的是<strong>electron-builder</strong>这个包来对项目进行打包，打包过程很曲折，控制台哐哐报错，其中最主要的就是因为项目使用的<strong>包管理工具是pnpm</strong>，为了避免有人和我一样卡在了这里所以写了这篇文章</p><h2 id="所需的材料" tabindex="-1"><a class="header-anchor" href="#所需的材料" aria-hidden="true">#</a> 所需的材料</h2><ul><li><strong>主要材料</strong><ul><li>一个electron的项目</li></ul></li><li><strong>包</strong><ul><li>electron</li><li>electron-builder</li></ul></li><li><strong>工具</strong><ul><li>pnpm</li></ul></li><li><strong>还有一种不怕困难的精神，和保持热爱的心😆</strong></li></ul><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2><blockquote><p>官方推荐的包管理工具是yarn，vscode也是用的yarn</p></blockquote><h3 id="第一步-创建所需的配置文件" tabindex="-1"><a class="header-anchor" href="#第一步-创建所需的配置文件" aria-hidden="true">#</a> 第一步，创建所需的配置文件</h3><p>在项目的根目录中创建一个<code>.npmrc</code>的文件 内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 将pnpm变成扁平化架构
node-linker=hoisted

# 在国内使用pnpm安装electron需要配置一下electron的下载路径
electron_mirror=&quot;https://npm.taobao.org/mirrors/electron/&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在配置好该文件后，把<code>node_module</code>文件夹删了，重新执行一下<code>pnpm install</code></p><p>原因： pnpm再对项目进行打包的时候，也许你会打包成功，但是在启动打包好的exe可执行文件的时候，就会报出有文件找不到</p><blockquote><p>这其中最主要的一个原因是因为pnpm使用的是非扁平化架构，这个架构虽然可以让我们的node_modules小很多，且用的时候也很快，但是在electron中是找不到这些包的，第一层的包找得到，但是你安装的包中他们也有安装一些其他的包，这些包就找不到了</p></blockquote><p>解决方法：将pnpm的架构变成扁平化</p><h3 id="第二步-修改package-json文件" tabindex="-1"><a class="header-anchor" href="#第二步-修改package-json文件" aria-hidden="true">#</a> 第二步，修改package.json文件</h3><p>内容:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;name&quot;: &quot;项目名称&quot;,
    &quot;version&quot;: &quot;0.0.0&quot;,
    &quot;description&quot;: &quot;项目的解释&quot;, // 这个解释会在项目打包好后出现在exe可执行文件上，把鼠标停放到那个文件上就会出现
    &quot;main&quot;: &quot;./electron/main.js&quot;, // electron的入口文件，electron启动的时候会优先找到这个文件
    &quot;author&quot;: { // 作者信息，如果是公司的项目，则这里写公司的信息
        &quot;name&quot;: &quot;xxx&quot;,
        &quot;email&quot;: &quot;xxx.com&quot;,
        &quot;url&quot;: &quot;https://xxx&quot;
    },
    &quot;license&quot;: &quot;MIT&quot;,
    &quot;private&quot;: true,
    &quot;scripts&quot;: {
        // 项目的前端资源打包和electron-builder打包命令
        &quot;electron:build&quot;: &quot;pnpm run build &amp;&amp; electron-builder&quot;,
        // electro-buildern的打包命令，这条命令的主要作用是因为前端资源已经打包好了，不需要再打包一次，直接打包electron
        &quot;electron:builder&quot;: &quot;electron-builder&quot;,
    },
    &quot;devDependencies&quot;: {
        &quot;electron&quot;: &quot;18.2.3&quot;,
        &quot;electron-builder&quot;: &quot;^23.0.3&quot;,
    },

    // 下面就是重点了，执行electron-builder命令时候，会找到package.json下面的build字段，这个字段里面存放的都是打包的配置信息
    &quot;build&quot;: {
        // 应用名称，会出现在所有跟这个应用有关的地方，包括任务管理器，但不会出现在应用的安装目录，安装目录显示的名称是上面的name字段
        &quot;productName&quot;: &quot;xxx&quot;,
        // 应用的Id，这个好像没有什么要求，按下面格式写就行了
        &quot;appId&quot;: &quot;com.xxx.app&quot;,
        // 应用的版权信息，俩括号得去掉
        &quot;copyright&quot;: &quot;Copyright © {{年份}} - {{年份 | present}} {{作者 | 公司}}&quot;,
        // 应用的资源
        &quot;files&quot;: [
            &quot;dist/**/*&quot;,
            &quot;electron/**/*&quot;
        ],
        &quot;directories&quot;: {
            // 打包应用时会涉及到的资源
            &quot;buildResources&quot;: &quot;dist&quot;,
            // 打包后的输出文件夹
            &quot;output&quot;: &quot;electron_build&quot;
        },
        // dmg MacOS系统用来打包应用的程序，就像打包electron需要electron-builder一样概念
        &quot;dmg&quot;: {
            // 下面这些是安装应用程序的设置
            &quot;window&quot;: {
                &quot;x&quot;: 100,
                &quot;y&quot;: 100,
                &quot;width&quot;: 500,
                &quot;height&quot;: 300
            }
        },
        // nsis 概念和上面的一样，不过是windows的
        &quot;nsis&quot;: {
            // 是否一键安装
            &quot;oneClick&quot;: false,
            // 安装包的图标，默认是win下面的icon图标
            &quot;installerIcon&quot;: &quot;./dist/icon-install-256x256.ico&quot;,
            // 卸载应用程序的程序名称
            &quot;uninstallDisplayName&quot;: &quot;卸载xxx | xxx Uninstall&quot;,
            // 卸载应用程序的程序图标，注意！！！这里需要在前面加个点变成相对路径，不然会找不到文件
            &quot;uninstallerIcon&quot;: &quot;./dist/icon-uninstall-256x256.ico&quot;,
            // 是否允许用户更改应用的安装目录
            &quot;allowToChangeInstallationDirectory&quot;: true
        },
        // 将应用打包至win系统的配置
        &quot;win&quot;: {
            // 应用图标，这里不需要使用相对路径，但是所有涉及应用打包的图标必须是256x256或以上的，不然会报错，且图标的名称上需要写上图标的尺寸
            &quot;icon&quot;: &quot;/dist/icon-256x256.ico&quot;,
            &quot;target&quot;: [
                {
                    // 使用什么程序进行打包
                    &quot;target&quot;: &quot;nsis&quot;,
                    // 打包32位的还是64位的，可以俩个一起写进去
                    &quot;arch&quot;: [ &quot;ia32&quot; ]
                }
            ]
        },
        // 打包打包至mac系统的配置
        &quot;mac&quot;: {
            // mac系统上的应用图标后缀名为icns，这里要注意一下
            &quot;icon&quot;: &quot;/dist/icons-256x256.icns&quot;,
            &quot;target&quot;: &quot;dmg&quot;
        },
        &quot;linux&quot;: {
            &quot;icon&quot;: &quot;/dist/icon-256x256.ico&quot;,
            &quot;target&quot;: &quot;deb&quot;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三步-打包" tabindex="-1"><a class="header-anchor" href="#第三步-打包" aria-hidden="true">#</a> 第三步，打包</h2><p>再项目执行<code>pnpm run build</code>或者<code>pnpm run builder</code>，等待一会就打包成功了，项目的根目录会生成一个<code>electron_build</code>的文件夹，这个是我们刚刚上面写好的输出文件夹。 如果你在<code>windows</code>系统上的话，内部会有一个应用程序的安装包，和一个<code>win-i32-unpacked</code>的文件夹，里面存放着一个应用的可程序文件，</p><p>打包是可以打包多次的，并不是说配置好后一键打包就完成了，可以再打包后修改一下配置文件，再进行打包，生成多个不一样的安装包</p>`,19),c={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F4699b825d285",title:"https://www.jianshu.com/p/4699b825d285",target:"_blank",rel:"noopener noreferrer"};function v(q,m){const i=u("ExternalLinkIcon");return o(),t("div",null,[a,e("p",null,[n("electron-builder的构建命令参数等可以去看这篇文件 "),e("a",c,[n("Electron-builder打包详解"),d(i)]),n(" 里面说的很详细，这篇文件也有很多是参考那篇文件写的")])])}const p=l(r,[["render",v],["__file","ruheshiyongpnpmdabaoelectronxiangmu.html.vue"]]);export{p as default};
