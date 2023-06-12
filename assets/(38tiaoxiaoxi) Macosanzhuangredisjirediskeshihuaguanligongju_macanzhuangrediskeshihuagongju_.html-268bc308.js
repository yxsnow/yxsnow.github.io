import{_ as d,r,o as t,c as l,b as e,d as s,e as a,a as n}from"./app-ff2f634e.js";const c="/assets/watermark_type_d3F5LXplbmhlaQ_sh_9d6bf6e8a90c4e1cb-5ab96692.png",h="/assets/watermark_type_d3F5LXplbmhlaQ_sh_4b90e7852ce94956a-1f6e2640.png",o="/assets/watermark_type_d3F5LXplbmhlaQ_sh_1a0f4495d5014981a-9dfe80e3.png",_="/assets/watermark_type_d3F5LXplbmhlaQ_sh_42ba4ba23a5e4bb5a-ef7de5d2.png",m="/assets/watermark_type_d3F5LXplbmhlaQ_sh_ab495508c55e4b9ab-2ad392b9.png",p="/assets/watermark_type_d3F5LXplbmhlaQ_sh_104169eaf5204c278-7300719f.png",b="/assets/watermark_type_d3F5LXplbmhlaQ_sh_1dd5be36441e499d8-2dc5a6bf.png",u="/assets/watermark_type_d3F5LXplbmhlaQ_sh_6707a6c7cf3c40238-0ac983de.png",v="/assets/watermark_type_d3F5LXplbmhlaQ_sh_5acac92289b344ac8-95e1d76b.png",g="/assets/watermark_type_d3F5LXplbmhlaQ_sh_c225b59d66144a2c9-8d6290bb.png",f="/assets/watermark_type_d3F5LXplbmhlaQ_sh_4413c4ace1cd4fd1b-e9297e83.png",k="/assets/watermark_type_d3F5LXplbmhlaQ_sh_dd4a6e0837e349c18-45d63f24.png",w="/assets/watermark_type_d3F5LXplbmhlaQ_sh_5e8292b025b344678-1aab1038.png",x={},y={id:"_1-首先将clashx的系统代理复制为终端代理-这样可以使用国外镜像源",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#_1-首先将clashx的系统代理复制为终端代理-这样可以使用国外镜像源","aria-hidden":"true"},"#",-1),F={href:"https://so.csdn.net/so/search?q=%E9%95%9C%E5%83%8F%E6%BA%90&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},X=n('<img width="962" height="62" src="'+c+'"><h2 id="_2-安装完成之后会有如下的提示" tabindex="-1"><a class="header-anchor" href="#_2-安装完成之后会有如下的提示" aria-hidden="true">#</a> <a id="t1"></a>2.安装完成之后会有如下的提示：</h2><img width="962" height="330" src="'+h+'"><h2 id="_3-redis的安装路径" tabindex="-1"><a class="header-anchor" href="#_3-redis的安装路径" aria-hidden="true">#</a> <a id="t2"></a>3.redis的安装路径：</h2>',4),Q={href:"https://so.csdn.net/so/search?q=Homebrew%E5%AE%89%E8%A3%85&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"/usr/local/Cellar/",-1),E=e("li",null,[e("p",null,[s("redis的配置文件"),e("code",null,"redis.conf"),s("存放在"),e("code",null,"/usr/local/etc"),s("路径下")])],-1),M=n('<h2 id="_4-将redis设置为后台运行" tabindex="-1"><a class="header-anchor" href="#_4-将redis设置为后台运行" aria-hidden="true">#</a> <a id="t3"></a>4.将redis设置为后台运行</h2><p>redis默认是前台启动，如果关闭当前终端后，redis将自动关闭，如果我们想以守护进程的方式运行（后台运行），可以进入<code>/usr/local/etc路径，</code>在<code>redis.conf</code>中将<code>daemonize no</code>,修改成<code>yes</code>即可。</p><img width="962" height="236" src="'+o+`"><p>使用vim编辑redis.conf文件，可以进行如下的配置修改：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

1.  #允许访问的地址，默认是127.0.0.1，会导致只能在本地访问。修改为0.0.0.0则可以在任意IP访问，生产环境不要设置为0.0.0.0
    
2.  bind 0.0.0.0
    
3.  # 守护进程，修改为yes后即可后台运行
    
4.  daemonize yes 
    
5.  # 密码，设置后访问Redis必须输入密码
    
6.  requirepass 123321
    


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改监听端口：</p><img width="962" height="97" src="`+_+'"><p>修改守护进程，保证redis可在后台运行：</p><p><img width="962" height="350" src="'+m+'"> 设置redis访问密码：<img width="962" height="98" src="'+p+`"></p><p>一些其他的配置，可以根据自己的需求自定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

1.  # 监听的端口
    
2.  port 6379
    
3.  # 工作目录，默认是当前目录，也就是运行redis-server时的命令，日志、持久化等文件会保存在这个目录
    
4.  dir .
    
5.  # 数据库数量，设置为1，代表只使用1个库，默认有16个库，编号0~15
    
6.  databases 1
    
7.  # 设置redis能够使用的最大内存
    
8.  maxmemory 512mb
    
9.  # 日志文件，默认为空，不记录日志，可以指定日志文件名
    
10. logfile &quot;redis.log&quot;
    


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img width="962" height="98" src="`+b+'"><h2 id="_5-运行redis" tabindex="-1"><a class="header-anchor" href="#_5-运行redis" aria-hidden="true">#</a> <a id="t4"></a>5.运行redis：</h2><p>可以使用ps -ef | grep redis查看redis是否正在运行</p><h2 id="_6-停止redis服务" tabindex="-1"><a class="header-anchor" href="#_6-停止redis服务" aria-hidden="true">#</a> <a id="t5"></a><img width="962" height="129" src="'+u+'">6.停止redis服务：</h2><p>使用brew services stop redis: <img width="962" height="66" src="'+v+'"></p><h2 id="_7-安装可视化工具" tabindex="-1"><a class="header-anchor" href="#_7-安装可视化工具" aria-hidden="true">#</a> <a id="t6"></a>7.安装可视化工具</h2>',17),A={href:"https://github.com/qishibo/AnotherRedisDesktopManag",title:"https://github.com/qishibo/AnotherRedisDesktopManager",target:"_blank",rel:"noopener noreferrer"},j=e("img",{src:"https://csdnimg.cn/release/blog_editor_html/release2.0.8/ckeditor/plugins/CsdnLink/icons/icon-default.png?t=M276",alt:"icon-default.png?t=M276"},null,-1),z=e("img",{width:"962",height:"231",src:g},null,-1),R=n('<p>AnotherRedisDesktopManager是一款优秀的redis可视化管理工具，下载完成后可在设置中选择简体中文。</p><p><img width="962" height="630" src="'+f+'">​ 根据之前配置的redis.conf连接上redis：</p><h2 id="​-可以通过get-key的指令查看数据" tabindex="-1"><a class="header-anchor" href="#​-可以通过get-key的指令查看数据" aria-hidden="true">#</a> <a id="t7"></a><img width="962" height="630" src="'+k+'">​ 可以通过get key的指令查看数据：<img width="962" height="630" src="'+w+'"></h2>',3);function D(B,C){const i=r("ExternalLinkIcon");return t(),l("div",null,[e("h2",y,[L,s(" 1.首先将clashX的系统代理复制为终端代理，这样可以使用国外"),e("a",F,[s("镜像源"),a(i)])]),X,e("ul",null,[e("li",null,[e("p",null,[e("a",Q,[s("Homebrew安装"),a(i)]),s("的软件会默认在"),q,s("路径下")])]),E]),M,e("p",null,[e("a",A,[s("https://github.com/qishibo/AnotherRedisDesktopManager"),j,s("https://github.com/qishibo/AnotherRedisDesktopManag"),a(i)]),z]),R])}const V=d(x,[["render",D],["__file","(38tiaoxiaoxi) Macosanzhuangredisjirediskeshihuaguanligongju_macanzhuangrediskeshihuagongju_.html.vue"]]);export{V as default};
