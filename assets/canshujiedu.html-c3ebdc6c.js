import{_ as c,r as n,o as s,c as i,b as e,d as o,e as a,a as l}from"./app-ff2f634e.js";const d={},u=e("p",null,[e("strong",null,'{ "incar": { "multiRes": { "basePath": "https://els-pub-01.oss-cn-hangzhou.aliyuncs.com/detection/202305/M0001/1A6F0D76625348/Panoramic", "cubeResolution": 2139, "extension": "jpg", "fallbackPath": "/fallback/%s", "maxLevel": 4, "path": "/%l/%s%y_%x", "tileResolution": 512 }, "title": "内饰", "type": "multires" } }')],-1),_=e("p",null,[o("这份配置是一个全景场景的配置，场景类型为多分辨率图像（"),e("code",null,"multires"),o("）。该场景的名称为“内饰”（"),e("code",null,"title"),o("字段）。")],-1),h=e("p",null,[o("该场景使用了多分辨率图像技术，以提供更快的加载速度和更流畅的交互体验。使用了 "),e("code",null,"multiRes"),o(" 字段来配置多分辨率设置，其中：")],-1),r=l("<li><code>basePath</code> 字段指定了存储全景图像各分辨率级别所在路径的根目录，值为 &quot;https://els-pub-01.oss-cn-hangzhou.aliyuncs.com/detection/202305/M0001/1A6F0D76625348/Panoramic&quot;。</li><li><code>cubeResolution</code> 字段指定了立方体贴图的边长（正方形）像素数，值为 2139。</li><li><code>extension</code> 字段指定了全景图像文件扩展名，值为 &quot;jpg&quot;。</li><li><code>fallbackPath</code> 字段指定了当某个分辨率级别的图像获取失败时，可以使用的备用图像路径（相对于 <code>basePath</code>），默认值为 &quot;/fallback/%s&quot;，其中 <code>%s</code> 表示分辨率级别。</li><li><code>maxLevel</code> 字段指定了全景图像的最大分辨率级别，值为 4。</li>",5),p=e("code",null,"path",-1),m=e("code",null,"%l",-1),x=e("code",null,"%s",-1),b=e("code",null,"%y",-1),f=e("code",null,"%x",-1),g=e("code",null,"extension",-1),y={href:"https://els-pub-01.oss-cn-hangzhou.aliyuncs.com/detection/202305/M0001/1A6F0D76625348/Panoramic/%25l/%25s%25y_%25x.jpg",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,[e("code",null,"tileResolution"),o(" 字段指定了每个分块（瓦片）的边长（正方形）像素数，值为 512。")],-1),P=l("<p>以上这些配置项都是多分辨率图像技术必须的。如果使用全景图像或立方体贴图，则不需要使用这些配置项。</p><p><strong>%l ，，%s、%y 和 %x ,这些参数的值怎么获取</strong></p><p>这些参数的值是由全景场景生成引擎自动计算并使用的，不需要手动设置：</p><ul><li><code>%l</code> 表示分辨率级别，从 0 开始，表示全景图像的原始分辨率，每级别为原始分辨率的一半。例如，如果原始分辨率为 4096x2048 像素，则第 0 级分辨率为 4096x2048 像素，第 1 级分辨率为 2048x1024 像素，第 2 级分辨率为 1024x512 像素，以此类推。</li><li><code>%s</code>、<code>%y</code> 和 <code>%x</code> 分别表示行索引、列索引和图像文件扩展名。在多分辨率图像中，一张全景图像被切割成了若干个分块（瓦片）。通过指定行索引、列索引和分辨率级别，可以获取分块的位置，再加上图像文件扩展名，就可以得到对应的图像文件路径。</li></ul><p>这些值是由全景场景生成引擎自动计算和传递的，因此在其他代码中不需要手动设置。但是，在构建全景图像时需要按照一定的规则来命名和切割分块，以便场景生成引擎在解析全景图像时能够正确地计算出这些参数的值。</p>",5);function j(q,R){const t=n("ExternalLinkIcon");return s(),i("div",null,[u,_,h,e("ul",null,[r,e("li",null,[p,o(" 字段指定了全景图像各分辨率级别下的图片存储路径，其中 "),m,o(" 表示分辨率级别，"),x,o("、"),b,o(" 和 "),f,o(" 分别表示行索引、列索引和图像文件扩展名（去掉了之前已经指定的 "),g,o('）。最终存储路径为 "'),e("a",y,[o("https://els-pub-01.oss-cn-hangzhou.aliyuncs.com/detection/202305/M0001/1A6F0D76625348/Panoramic/%l/%s%y_%x.jpg"),a(t)]),o('"。')]),k]),P])}const z=c(d,[["render",j],["__file","canshujiedu.html.vue"]]);export{z as default};
