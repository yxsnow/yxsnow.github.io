import{_ as o,o as e,c as d,a as c}from"./app-ff2f634e.js";const t={},n=c('<h1 id="从浏览器地址栏输入-url-到显示页面的步骤" tabindex="-1"><a class="header-anchor" href="#从浏览器地址栏输入-url-到显示页面的步骤" aria-hidden="true">#</a> 从浏览器地址栏输入 url 到显示页面的步骤</h1><h2 id="基础版本" tabindex="-1"><a class="header-anchor" href="#基础版本" aria-hidden="true">#</a> <a id="t1"></a><a id="_2"></a><strong>基础版本</strong>：</h2><ol><li><p>浏览器根据请求的 <code>URL</code> 交给 <code>DNS</code> <strong>域名解析</strong>，找到真实 <code>IP</code> ，向服务器<strong>发起请求</strong>；</p></li><li><p>服务器交给后台处理完成后<strong>返回数据</strong>，浏览器<strong>接收⽂件</strong>（ <code>HTML</code>、<code>JS</code>、<code>CSS</code> 、图象等）；</p></li><li><p>浏览器对加载到的资源（ <code>HTML</code>、<code>JS</code>、<code>CSS</code> 等）进⾏语法解析，建立相应的内部数据结构 （如 <code>HTML</code> 的 <code>DOM</code>）；</p></li><li><p><strong>载⼊解析</strong>到的资源⽂件，<strong>渲染页面</strong>，完成。</p></li></ol><h2 id="详细版" tabindex="-1"><a class="header-anchor" href="#详细版" aria-hidden="true">#</a> <a id="t2"></a><a id="_12"></a><strong>详细版</strong>：</h2><p>1、在浏览器地址栏输⼊<code>URL</code></p><p>2、浏览器<strong>查看缓存</strong>，如果请求资源在缓存中并且新鲜，跳转到转码步骤</p><ul><li><p>如果资源未缓存，发起新请求</p></li><li><p>如果已缓存，检验是否⾜够新鲜，⾜够新鲜直接提供给客户端，否则与服务器进⾏验证。</p></li><li><p>检验新鲜通常有两个<code>HTTP</code>头进⾏控制 <code>Expires</code> 和 <code>Cache-Control</code>：</p><ul><li>HTTP1.0提供 <code>Expires</code>，值为⼀个绝对时间表示缓存新鲜⽇期</li><li>HTTP1.1增加了<code>Cache-Control: max-age=time</code>，值为以秒为单位的最⼤新鲜时间</li></ul></li></ul><p>3、浏览器<strong>解析URL</strong>获取协议，主机，端⼝，<code>path</code></p><p>4、浏览器<strong>组装⼀个HTTP（GET）请求报⽂</strong></p><p>5、浏览器<strong>获取主机 <code>ip</code> 地址</strong>，过程如下：</p><ul><li><p>浏览器缓存</p></li><li><p>本机缓存</p></li><li><p><code>hosts</code>⽂件</p></li><li><p>路由器缓存</p></li><li><p><code>ISP</code> <code>DNS</code>缓存</p></li><li><p><code>DNS</code>递归查询（可能存在负载均衡导致每次<code>IP</code>不⼀样）</p></li></ul><p>6、<strong>打开⼀个<code>socket</code>与⽬标<code>IP</code>地址，端⼝建⽴<code>TCP</code>链接</strong>，三次握⼿如下：</p><ul><li><p>客户端发送⼀个<code>TCP</code>的<strong>SYN=1</strong>，<strong>Seq=X</strong>的包到服务器端口</p></li><li><p>服务器发回<strong>SYN=1</strong>， <strong>ACK=X+1</strong>， <strong>Seq=Y</strong>的响应包</p></li><li><p>客户端发送<strong>ACK=Y+1</strong>， <strong>Seq=Z</strong></p></li></ul><p>7、<code>TCP</code>链接建⽴后<strong>发送<code>HTTP</code>请求</strong></p><p>8、服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使⽤<code>HTTP</code> <code>Host</code>头部判断请求的服务程序</p><p>9、服务器检查**<code>HTTP</code>请求头是否包含缓存验证信息**，如果验证缓存新鲜，返回304等对应状态码</p><p>10、处理程序读取完整请求并准备<code>HTTP</code>响应，可能需要查询数据库等操作</p><p>11、服务器将<strong>响应报⽂通过<code>TCP</code>连接发送回浏览器</strong></p><p>12、浏览器接收<code>HTTP</code>响应，然后根据情况<strong>选择关闭<code>TCP</code>连接或者保留重⽤</strong>，关闭<code>TCP</code>连接的四次握⼿如下：</p><ul><li><p>主动⽅发送<strong>Fin=1</strong>， <strong>Ack=Z</strong>， <strong>Seq= X</strong>报⽂</p></li><li><p>被动⽅发送<strong>ACK=X+1</strong>， <strong>Seq=Z</strong>报⽂</p></li><li><p>被动⽅发送<strong>Fin=1</strong>， <strong>ACK=X</strong>， <strong>Seq=Y</strong>报⽂</p></li><li><p>主动⽅发送<strong>ACK=Y</strong>， <strong>Seq=X</strong>报⽂</p></li></ul><p>13、浏览器检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同</p><p>14、如果资源可缓存，<strong>进行缓存</strong></p><p>15、对响应<strong>进行解码</strong>（例如gzip压缩）</p><p>16、根据资源类型决定如何处理（假设资源为HTML⽂档）</p><p>17、<strong>解析HTML⽂档</strong>，<strong>构件DOM树</strong>，<strong>下载资源</strong>，<strong>构造CSSOM树</strong>，<strong>执⾏js脚本</strong>，这些操作没有严 格的先后顺序，以下分别解释：</p><p>16、<strong>构建DOM树</strong>：</p><ul><li><p><strong>Tokenizing</strong>：根据<code>HTML</code>规范将字符流解析为标记</p></li><li><p><strong>Lexing</strong>：词法分析将标记转换为对象并定义属性和规则</p></li><li><p><strong>DOM construction</strong>：根据HTML标记关系将对象组成<code>DOM</code>树</p></li></ul><p>17、解析过程中遇到图⽚、样式表、js⽂件，启动<strong>下载</strong></p><p>18、<strong>构建CSSOM树</strong>：</p><ul><li><p><strong>Tokenizing</strong>：字符流转换为标记流</p></li><li><p><strong>Node</strong>：根据标记创建节点</p></li><li><p><strong>CSSOM</strong>：节点创建<code>CSSOM</code>树</p></li></ul><p>19、<strong>根据DOM树和CSSOM树构建渲染树</strong> :</p><ul><li><p>从<code>DOM</code>树的根节点遍历所有可⻅节点，不可⻅节点包括：</p><ul><li><code>script</code> , <code>meta</code> 这样本身 不可⻅的标签。</li><li>被<code>css</code>隐藏的节点，如 <code>display: none</code></li></ul></li><li><p>对每⼀个可⻅节点，找到恰当的<code>CSSOM</code>规则并应⽤</p></li><li><p>发布可视节点的内容和计算样式</p></li></ul><p>20、<code>js</code>解析如下：</p><ul><li><p>浏览器创建<code>Document</code>对象并解析<code>HTML</code>，将解析到的元素和⽂本节点添加到⽂档中，此时**<code>document.readystate</code>为<code>loading</code>**</p></li><li><p><code>HTML</code>解析器遇到<strong>没有<code>async</code>和<code>defer</code>的<code>script</code>时</strong>，将他们添加到⽂档中，然后执⾏⾏内 或外部脚本。这些脚本会同步执⾏，并且在脚本下载和执⾏时解析器会暂停。这样就可以⽤<code>document.write()</code>把⽂本插⼊到输⼊流中。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作<code>script</code>和他们之前的⽂档内容</p></li><li><p>当解析器遇到<strong>设置了<code>async</code>属性的<code>script</code>时</strong>，开始下载脚本并继续解析⽂档。脚本会在它 下载完成后尽快执⾏，但是解析器不会停下来等它下载。异步脚本禁止使⽤ <strong>document.write()</strong>，它们可以访问⾃⼰<code>script</code>和之前的⽂档元素</p></li><li><p>当⽂档完成解析，<code>document.readState</code>变成<code>interactive</code></p></li><li><p>所有defer脚本会按照在⽂档出现的顺序执⾏，延迟脚本能访问完整⽂档树，禁止使⽤ <code>document.write()</code></p></li><li><p>浏览器在<code>Document</code>对象上触发<code>DOMContentLoaded</code>事件</p></li><li><p>此时⽂档完全解析完成，浏览器可能还在等待如图⽚等内容加载，等这些内容完成载⼊ 并且所有异步脚本完成载⼊和执⾏，<code>document.readState</code>变为<code>complete</code>，<code>window</code>触发 <code>load</code>事件</p></li></ul><p>21、显示⻚⾯（HTML解析过程中会逐步显示⻚⾯）</p><h2 id="详细简版" tabindex="-1"><a class="header-anchor" href="#详细简版" aria-hidden="true">#</a> <a id="t3"></a><a id="_128"></a>详细简版：</h2><ol><li>从浏览器接收 <code>url</code> 到开启⽹络请求线程（这⼀部分可以展开浏览器的机制以及进程与线程 之间的关系）</li><li>开启⽹络线程到发出⼀个完整的 <code>HTTP</code> 请求（这⼀部分涉及到dns查询， TCP/IP 请求，五层因特⽹协议栈等知识）</li><li>从服务器接收到请求到对应后台接收到请求（这⼀部分可能涉及到负载均衡，安全拦截以及后台内部的处理等等）</li><li>后台和前台的 <code>HTTP</code> 交互（这⼀部分包括 HTTP 头部、响应码、报⽂结构、 cookie 等知 识，可以提下静态资源的 cookie 优化，以及编码解码，如 gzip 压缩等）</li><li>单独拎出来的缓存问题， HTTP 的缓存（这部分包括http缓存头部， ETag ， catchcontrol 等）</li><li>浏览器接收到 <code>HTTP</code> 数据包后的解析流程（解析 <code>html</code>、 词法分析然后解析成 <code>dom</code> 树、解析 <code>css</code> ⽣成 <code>css</code> 规则树、合并成 <code>render</code> 树，然后 <code>layout</code> 、 <code>painting</code> 渲染、复合图层的合成、 <code>GPU</code> 绘制、外链资源的处理、 <code>loaded</code> 和 <code>DOMContentLoaded</code> 等）</li><li><code>CSS</code> 的可视化格式模型（元素的渲染规则，如包含块，控制框， <code>BFC</code> ， <code>IFC</code> 等概念）</li><li><code>JS</code> 引擎解析过程（ <code>JS</code> 的解释阶段，预处理阶段，执⾏阶段⽣成执⾏上下⽂， <code>VO</code> ，作 ⽤域链、回收机制等等）</li><li>其它（可以拓展不同的知识模块，如跨域，<code>web</code>安全， <code>hybrid</code> 模式等等内容）</li></ol>',37),r=[n];function i(s,l){return e(),d("div",null,r)}const g=o(t,[["render",i],["__file","shuruURLdaoxianshiyemiandequanguocheng.html.vue"]]);export{g as default};
