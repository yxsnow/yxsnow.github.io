import{_ as a,r as s,o as l,c as d,b as e,d as n,e as t,a as r}from"./app-ff2f634e.js";const o="/assets/watermark_type_d3F5LXplbmhlaQ_sh_ae7f7cc7f4094d68a-fb2f3484.png",u="/assets/watermark_type_d3F5LXplbmhlaQ_sh_e2737e3760804122b-97a5c532.png",c={},v={href:"https://so.csdn.net/so/search?q=Flutter&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},m=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`SocketException: OS Error: Connection refused, errno = 111, address = localhost, port = 38396
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),p=e("p",null,"这里调用时的api请求路径：http:localhost:10086/auth",-1),h=e("p",null,"之前因为忙于开发，查了下资料都没有解决问题，时间紧，任务重，就直接将后台api部署到云环境，通过调用云函数来获取数据。但是这样做，每次修改api都得部署到云环境上，app才能正确获取数据，很麻烦，但是当时也没有其他的办法和时间，所以将就了。",-1),b=e("p",null,"现在开发阶段已经结束了，趁着有时间，再回过头来调查，经过测试，已完美解决该问题，能够通过调用本地后台api获取数据。深层次的原因还没调查到，待日后调查到根本原因后再记录，这里只记录一下解决方案。",-1),g={href:"https://jingyan.baidu.com/article/cd4c297923ca37756e6e6037.html",title:"Linux获取本机ip",target:"_blank",rel:"noopener noreferrer"},_={href:"https://jingyan.baidu.com/article/851fbc37951f183e1f15ab26.html",title:"Windows获取本机ip",target:"_blank",rel:"noopener noreferrer"},f=r(`<p>2.找到 android/app/src/main/AndroidManifest.xml 这个文件，如果没有就自己创建一个，然后添加如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.  &lt;manifest xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
2.      package=&quot;com.example.my_app&quot;&gt; 
3.     &lt;application
4.          android:label=&quot;my_app&quot;
5.          android:icon=&quot;@mipmap/ic_launcher&quot;  
6.          android:usesCleartextTraffic=&quot;true&quot;  
7.          &gt;  
8.          &lt;activity   
9.              android:name=&quot;.MainActivity&quot;   
10.             android:launchMode=&quot;singleTop&quot;   
11.             android:theme=&quot;@style/LaunchTheme&quot;  
12.             android:configChanges=&quot;orientation|keyboardHidden|keyboard|screenSize|smallestScreenSize|locale|layoutDirection|fontScale|screenLayout|density|uiMode&quot; 
13.             android:hardwareAccelerated=&quot;true&quot; 
14.             android:windowSoftInputMode=&quot;adjustResize&quot;&gt;
15.             &lt;!-- Specifies an Android theme to apply to this Activity as soon as
16.  the Android process has started. This theme is visible to the user   
17.  while the Flutter UI initializes. After that, this theme continues
18.  to determine the Window background behind the Flutter UI. --&gt;  
19.             &lt;meta-data 
20.               android:name=&quot;io.flutter.embedding.android.NormalTheme&quot;  
21.               android:resource=&quot;@style/NormalTheme&quot;  
22.               /&gt;
23.             &lt;!-- Displays an Android View that continues showing the launch screen  
24.  Drawable until Flutter paints its first frame, then this splash 
25.  screen fades out. A splash screen is useful to avoid any visual
26.  gap between the end of Android&#39;s launch screen and the painting of  
27.  Flutter&#39;s first frame. --&gt;  
28.             &lt;meta-data  
29.               android:name=&quot;io.flutter.embedding.android.SplashScreenDrawable&quot; 
30.               android:resource=&quot;@drawable/launch_background&quot; 
31.               /&gt;  
32.             &lt;intent-filter&gt; 
33.                 &lt;action android:name=&quot;android.intent.action.MAIN&quot;/&gt; 
34.                 &lt;category android:name=&quot;android.intent.category.LAUNCHER&quot;/&gt;  
35.             &lt;/intent-filter&gt;  
36.         &lt;/activity&gt;  
37.         &lt;!-- Don&#39;t delete the meta-data below.  
38.  This is used by the Flutter tool to generate GeneratedPluginRegistrant.java --&gt;
39.         &lt;meta-data  
40.             android:name=&quot;flutterEmbedding&quot; 
41.             android:value=&quot;2&quot; /&gt; 
42.     &lt;/application&gt;  
43.     &lt;uses-permission android:name=&quot;android.permission.INTERNET&quot; /&gt;
44. &lt;/manifest&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中重要的是</p><p><img src="`+o+'" alt=""></p><p>添加后就像这样：</p><img width="772" height="414" src="'+u+`" class="jop-noMdConv"><p>如果是IOS，需要将下面这段添加到 ios/Runner/info.plist文件中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.  &lt;key&gt;NSAppTransportSecurity&lt;/key&gt;   
2.  &lt;dict&gt;  
3.          &lt;key&gt;NSAllowsArbitraryLoads&lt;/key&gt;
4.          &lt;true/&gt; 
5.  &lt;/dict&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次编译运行，成功。</p>`,9);function q(y,x){const i=s("ExternalLinkIcon");return l(),d("div",null,[e("p",null,[n("在使用"),e("a",v,[n("Flutter"),t(i)]),n("编写手机app时，开发过程中想要通过调用本地的后台服务来获取数据，但是每次都会报错：")]),m,p,h,b,e("p",null,[n("1.首先，我们访问本地后台api时的http请求不能使用 http:localhost:10086/auth 这样的URL，或者 http:127.0.0.1:10086/auth 这样的也不行，需要将这里的 localhost 或 127.0.0.1 替换成 本机的真实 IPv4 地址，例如 192.166.1.12 (获取本机ip地址方式可以参考："),e("a",g,[n("Linux获取本机ip"),t(i)]),n(" 或 "),e("a",_,[n("Windows获取本机ip"),t(i)]),n(")，替换后的请求地址就变成了  http:192.166.1.12:10086/auth")]),f])}const w=a(c,[["render",q],["__file","Flutter lianjiezhenshishoujishebeishiwufashiyonglocalhost.html.vue"]]);export{w as default};
