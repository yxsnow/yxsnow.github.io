import{_ as e,o as n,c as i,a as s}from"./app-ff2f634e.js";const t="/assets/watermark_type_ZmFuZ3poZW5naGVpd_04ea1a60131e42a99-60cd7c2c.png",a="/assets/watermark_type_ZmFuZ3poZW5naGVpd_75d9f13a4d7a48cd8-9de201dc.png",d="/assets/20210717132438949_6fc91daf5e2c47429753f2a9f6b8a4d1-ee109865.png",o="/assets/watermark_type_ZmFuZ3poZW5naGVpd_9a7a57f3d43c4056b-6a5d300a.png",r="/assets/watermark_type_ZmFuZ3poZW5naGVpd_1a809c5902604bee9-91905c11.png",u="/assets/watermark_type_ZmFuZ3poZW5naGVpd_ade7fc663b5643aaa-765dec5c.png",l="/assets/watermark_type_ZmFuZ3poZW5naGVpd_fc539cb27af942f18-3c3ff91a.png",c="/assets/watermark_type_ZmFuZ3poZW5naGVpd_dff13a9b71e64aaab-94c547bb.png",v="/assets/20210717144201381_d3275565ac464ab9bc903d2c532abc3d-d1dd4b42.png",m={},p=s('<h1 id="vs-code自定义代码颜色-看这一篇就够了" tabindex="-1"><a class="header-anchor" href="#vs-code自定义代码颜色-看这一篇就够了" aria-hidden="true">#</a> VS Code自定义代码颜色，看这一篇就够了</h1><p>众所周知，VS Code是一款自定义空间很大的开发工具，需要的功能都在插件里，可谓非常方便，但是主题这个东西每个人的喜好都不同，即便是在拓展插件里找了许多主题拓展，也很难找到完全符合自己喜好的主题，那么有没有方法可以自己定义VS Code的主题呢，答案是当然有！继续看，打造属于你自己的主题。</p><h3 id="开始之前需要了解的地方" tabindex="-1"><a class="header-anchor" href="#开始之前需要了解的地方" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>开始之前需要了解的地方</h3><p>VS Code除默认设置之外，其他几乎所有需要自定义的设置，都可以通过编辑setting.json文件来完成，自定义主题也是这样，打开setting.json文件的方法为：点击【界面左下角设置按钮】→点击【设置】然后在右上角关闭按钮附近找到如下图标，点击就可以打开setting.json文件，剩下的操作都在里面完成。<img src="'+t+`" alt="在这里插入图片描述"> 另外，我们自定义主题一般是基于默认主题进行一些修改，就是默认主题哪里不符合你的喜好，就修改哪里，完全打造一个新的主题需要设置的地方太多了，也不太现实，那么接下来就开始设置。</p><h3 id="设置步骤" tabindex="-1"><a class="header-anchor" href="#设置步骤" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>设置步骤</h3><h4 id="一、添加字体设置代码块" tabindex="-1"><a class="header-anchor" href="#一、添加字体设置代码块" aria-hidden="true">#</a> <a href="#"></a>一、添加字体设置代码块</h4><p>打开你的setting.json文件，不要管里面有什么，在==最外层==的大括号里面输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`&quot;editor.tokenColorCustomizations&quot;:{}\` 

- 1


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入过程会有代码提示，直接选择提示会自动帮你填好。==不要忘记在上一个代码块结尾加一个英文逗号==，不然会报错。鼠标指向此代码，会给出提示，可以看到这个代码块是用来修改主题编辑器语法颜色的。</p><p><img src="`+a+'" alt="在这里插入图片描述"><img src="'+d+'" alt="在这里插入图片描述"></p><h4 id="二、找到当前使用的主题" tabindex="-1"><a class="header-anchor" href="#二、找到当前使用的主题" aria-hidden="true">#</a> <a href="#"></a>二、找到当前使用的主题</h4><p>前面提到，修改颜色其实是在原有主题上进行针对性修改，接下来的操作则是针对你当前使用的主题进行操作，默认的黑色主题是【深色+ Default Dark+】如果你不知道自己用的哪个主题，就在【设置】里搜索【主题】，在【Workbench: Color Theme】一栏查看当前主题。</p><p><img src="'+o+'" alt="在这里插入图片描述"></p><h4 id="三、针对该主题进行修改" tabindex="-1"><a class="header-anchor" href="#三、针对该主题进行修改" aria-hidden="true">#</a> <a href="#"></a>三、针对该主题进行修改</h4><p>回到setting.json文件，在==字体设置代码块==（就是刚才写的代码后面的大括号里）内输入==英文引号==，以我的默认深色主题为例，在给出的代码提示里选择【Default Dark+】。</p><p><img src="'+r+'" alt="在这里插入图片描述"> 在【Default Dark+】后面的大括号里继续输入英文引号，把给出的提示都选择一遍，同样要注意每一个语句后面要加逗号，如下图所示。</p><p><img src="'+u+`" alt="在这里插入图片描述"> 把鼠标移动到每个代码上，会有提示告诉你这一行是设置哪一部分的颜色。鼠标指向后面的颜色代码，会弹出一个颜色选择器，根据需要选择自己喜欢的颜色即可。</p><p>我这里遇到了一个bug，就是不管你鼠标指向哪个颜色设置，修改的都是第一行【comments】处的颜色，无奈之下我将颜色设置的代码全部都注释掉，然后一行一行取消注释再修改才解决问题。</p><p>这里我再写一下每行的对应的区域 “comments”:注释颜色 “functions”:函数/方法定义与引用颜色 “keywords”:关键字颜色，如new, if, else, try等 “numbers”:数字的颜色 “strings”:字符串的颜色 “types”:类型定义与引用的颜色 “variables”:变量的颜色 “textMateRules”:其他具体的颜色设置</p><p>这里的【textMateRules】放到后面说。</p><h4 id="textmaterules代码块的编辑" tabindex="-1"><a class="header-anchor" href="#textmaterules代码块的编辑" aria-hidden="true">#</a> <a href="#"></a>textMateRules代码块的编辑</h4><p>这里先放一下我的设置，我后面根据这个解释</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`&quot;textMateRules&quot;: [
                {
                    &quot;scope&quot;: &quot;keyword.control&quot;,//if ,else, try 等控制符
                    &quot;settings&quot;: {
                        &quot;foreground&quot;: &quot;#C586C0&quot;
                    }
                },
                {
                    &quot;scope&quot;: &quot;keyword.operator&quot;,//算数符
                    &quot;settings&quot;: {
                        &quot;foreground&quot;: &quot;#f07d3b&quot;
                    }
                },
                {
                    &quot;scope&quot;: &quot;storage.modifier&quot;,//修饰语
                    &quot;settings&quot;: {
                        &quot;foreground&quot;: &quot;#f09090&quot;
                    }
                },
                {
                    &quot;scope&quot;: &quot;entity.name.type.class&quot;,//类名
                    &quot;settings&quot;: {
                        &quot;foreground&quot;: &quot;#c0526a&quot;
                    }
                },
                {
                    &quot;scope&quot;: &quot;storage.type.primitive.java&quot;,//int和其他啥啥，忘记了
                    &quot;settings&quot;: {
                        &quot;foreground&quot;: &quot;#c0526a&quot;
                    }
                },
                {
                    &quot;scope&quot;: &quot;entity.name.type.interface&quot;,//接口
                    &quot;settings&quot;: {
                        &quot;foreground&quot;: &quot;#c0526a&quot;
                    }
                },
                {
                    &quot;scope&quot;: &quot;entity.name.namespace&quot;,//导入部分
                    &quot;settings&quot;: {
                        &quot;foreground&quot;: &quot;#74817c&quot;
                    }
                },
                {
                    &quot;scope&quot;: &quot;entity.name.tag&quot;,//html标签
                    &quot;settings&quot;: {
                        &quot;foreground&quot;: &quot;#d35c5c&quot;
                    }
                }
            ]\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的每一块代表一个具体的代码颜色设置，具体的意思是颜色设置的应用范围比较精确。 代码中的&quot;scope&quot;表示下面&quot;settings&quot;的应用范围，上面代码中用到的我已经标了注释，需要修改的话直接搬过去就好。</p><p>如果里面没有你要找的部分，你可以打开你的项目代码页面，按【F1】，搜索【developer:inspect editor tokens and scopes】打开标记作用域查看器，之后点击代码中你要修改颜色的地方，查看【foreground】处的作用域，复制下来粘贴到【settings.json】&quot;scope&quot;后的引号里，就可以把颜色设置应用到对应位置。</p><p><img src="`+l+'" alt="在这里插入图片描述"><img src="'+c+'" alt="在这里插入图片描述"></p><h4 id="编辑器其他的主题颜色设置" tabindex="-1"><a class="header-anchor" href="#编辑器其他的主题颜色设置" aria-hidden="true">#</a> <a href="#"></a>编辑器其他的主题颜色设置</h4><p>如果你只是想改代码的显示颜色，上面的教程看完已经足够了，下面的教程是如何修改整个编辑器的主题颜色，此设置的代码块标题为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>`&quot;workbench.colorCustomizations&quot;: {}`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>里面也需要先写当前主题名称，这个里面可以设置的东西就很多了，你可以输入&quot;&quot;之后先择给出的代码提示，然后鼠标指向它看提示来确定具体是哪里的设置，我这里只改了编辑器默认前景色，其他的就自行体验试试就好了。</p><p><img src="'+v+'" alt="在这里插入图片描述"> 这里贴一下官方文档的设置教程，如果我的博客没有解决你的问题，你可以去看一下，里面写的很详细</p><p>https://code.visualstudio.com/api/references/theme-color</p>',32),q=[p];function b(h,g){return n(),i("div",null,q)}const _=e(m,[["render",b],["__file","VS Codezidingyidaimayanse.html.vue"]]);export{_ as default};
