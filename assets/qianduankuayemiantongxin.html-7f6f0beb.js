import{_ as s,r,o as t,c as l,b as e,d as n,e as d,a}from"./app-ff2f634e.js";const c="/assets/169d767c01990c37_tplv-t2oaga2asx_c5086c7efbcd4f1ab-44c0b991.webp",o="/assets/169d8701f85f9f33_tplv-t2oaga2asx_f3b2942c2da6406a8-71a8d64e.webp",v="/assets/169d468988a6ba8f_tplv-t2oaga2asx_2e35a0e9731645e2a-a8690be9.webp",u={},m=a('<h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言" aria-hidden="true">#</a> 引言</h2><p>在浏览器中，我们可以同时打开多个Tab页，每个Tab页可以粗略理解为一个“独立”的运行环境，即使是全局对象也不会在多个Tab间共享。然而有些时候，我们希望能在这些“独立”的Tab页面之间同步页面的数据、信息或状态。</p><p>正如下面这个例子：我在列表页点击“收藏”后，对应的详情页按钮会自动更新为“已收藏”状态；类似的，在详情页点击“收藏”后，列表页中按钮也会更新。</p><img width="676" height="434" src="'+c+'"><p>这就是我们所说的前端跨页面通信。</p><p>你知道哪些跨页面通信的方式呢？如果不清楚，下面我就带大家来看看七种跨页面通信的方式。</p><hr><h2 id="一、同源页面间的跨页面通信" tabindex="-1"><a class="header-anchor" href="#一、同源页面间的跨页面通信" aria-hidden="true">#</a> 一、同源页面间的跨页面通信</h2>',8),b={href:"https://link.juejin.cn?target=https%3A%2F%2Falienzhou.github.io%2Fcross-tab-communication%2F",title:"https://alienzhou.github.io/cross-tab-communication/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://link.juejin.cn?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSame-origin_policy",title:"https://en.wikipedia.org/wiki/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"_1-broadcast-channel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-broadcast-channel","aria-hidden":"true"},"#"),n(" 1. BroadCast Channel")],-1),h={href:"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FBroadcastChannel",title:"https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel",target:"_blank",rel:"noopener noreferrer"},x=a(`<p>下面的方式就可以创建一个标识为<code>AlienZHOU</code>的频道：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const bc = new BroadcastChannel(&#39;AlienZHOU&#39;);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>各个页面可以通过<code>onmessage</code>来监听被广播的消息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bc.onmessage = function (e) {
    const data = e.data;
    const text = &#39;[receive] &#39; + data.msg + &#39; —— tab &#39; + data.from;
    console.log(&#39;[BroadcastChannel] receive message:&#39;, text);
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要发送消息时只需要调用实例上的<code>postMessage</code>方法即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bc.postMessage(mydata);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),f={href:"https://juejin.cn/post/6844903811228663815",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"_2-service-worker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-service-worker","aria-hidden":"true"},"#"),n(" 2. Service Worker")],-1),_={href:"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FService_Worker_API",title:"https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API",target:"_blank",rel:"noopener noreferrer"},w={href:"https://juejin.cn/post/6844903588691443725",target:"_blank",rel:"noopener noreferrer"},S=a(`<p>首先，需要在页面注册 Service Worker：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 页面逻辑 */
navigator.serviceWorker.register(&#39;../util.sw.js&#39;).then(function () {
    console.log(&#39;Service Worker 注册成功&#39;);
});
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>../util.sw.js</code>是对应的 Service Worker 脚本。Service Worker 本身并不自动具备“广播通信”的功能，需要我们添加些代码，将其改造成消息中转站：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* ../util.sw.js Service Worker 逻辑 */
self.addEventListener(&#39;message&#39;, function (e) {
    console.log(&#39;service worker receive message&#39;, e.data);
    e.waitUntil(
        self.clients.matchAll().then(function (clients) {
            if (!clients || clients.length === 0) {
                return;
            }
            clients.forEach(function (client) {
                client.postMessage(e.data);
            });
        })
    );
});
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在 Service Worker 中监听了<code>message</code>事件，获取页面（从 Service Worker 的角度叫 client）发送的信息。然后通过<code>self.clients.matchAll()</code>获取当前注册了该 Service Worker 的所有页面，通过调用每个client（即页面）的<code>postMessage</code>方法，向页面发送消息。这样就把从一处（某个Tab页面）收到的消息通知给了其他页面。</p><p>处理完 Service Worker，我们需要在页面监听 Service Worker 发送来的消息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 页面逻辑 */
navigator.serviceWorker.addEventListener(&#39;message&#39;, function (e) {
    const data = e.data;
    const text = &#39;[receive] &#39; + data.msg + &#39; —— tab &#39; + data.from;
    console.log(&#39;[Service Worker] receive message:&#39;, text);
});
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，当需要同步消息时，可以调用 Service Worker 的<code>postMessage</code>方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 页面逻辑 */
navigator.serviceWorker.controller.postMessage(mydata);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-localstorage" tabindex="-1"><a class="header-anchor" href="#_3-localstorage" aria-hidden="true">#</a> 3. LocalStorage</h3>`,10),W={href:"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FStorageEvent",title:"https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent",target:"_blank",rel:"noopener noreferrer"},F=e("code",null,"StorageEvent",-1),A=a(`<p>当 LocalStorage 变化时，会触发<code>storage</code>事件。利用这个特性，我们可以在发送消息时，把消息写入到某个 LocalStorage 中；然后在各个页面内，通过监听<code>storage</code>事件即可收到通知。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.addEventListener(&#39;storage&#39;, function (e) {
    if (e.key === &#39;ctc-msg&#39;) {
        const data = JSON.parse(e.newValue);
        const text = &#39;[receive] &#39; + data.msg + &#39; —— tab &#39; + data.from;
        console.log(&#39;[Storage I] receive message:&#39;, text);
    }
});
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在各个页面添加如上的代码，即可监听到 LocalStorage 的变化。当某个页面需要发送消息时，只需要使用我们熟悉的<code>setItem</code>方法即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mydata.st = +(new Date);
window.localStorage.setItem(&#39;ctc-msg&#39;, JSON.stringify(mydata));
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，这里有一个细节：我们在mydata上添加了一个取当前毫秒时间戳的<code>.st</code>属性。这是因为，<code>storage</code>事件只有在值真正改变时才会触发。举个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.localStorage.setItem(&#39;test&#39;, &#39;123&#39;);
window.localStorage.setItem(&#39;test&#39;, &#39;123&#39;);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于第二次的值<code>&#39;123&#39;</code>与第一次的值相同，所以以上的代码只会在第一次<code>setItem</code>时触发<code>storage</code>事件。因此我们通过设置<code>st</code>来保证每次调用时一定会触发<code>storage</code>事件。</p><h3 id="小憩一下" tabindex="-1"><a class="header-anchor" href="#小憩一下" aria-hidden="true">#</a> 小憩一下</h3><p>上面我们看到了三种实现跨页面通信的方式，不论是建立广播频道的 Broadcast Channel，还是使用 Service Worker 的消息中转站，抑或是些 tricky 的<code>storage</code>事件，其都是“广播模式”：一个页面将消息通知给一个“中央站”，再由“中央站”通知给各个页面。</p><blockquote><p>在上面的例子中，这个“中央站”可以是一个 BroadCast Channel 实例、一个 Service Worker 或是 LocalStorage。</p></blockquote><p>下面我们会看到另外两种跨页面通信方式，我把它称为“共享存储+轮询模式”。</p><hr><h3 id="_4-shared-worker" tabindex="-1"><a class="header-anchor" href="#_4-shared-worker" aria-hidden="true">#</a> 4. Shared Worker</h3>`,13),j={href:"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FSharedWorker",title:"https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker",target:"_blank",rel:"noopener noreferrer"},E=a(`<p>Shared Worker 在实现跨页面通信时的问题在于，它无法主动通知所有页面，因此，我们会使用轮询的方式，来拉取最新的数据。思路如下：</p><p>让 Shared Worker 支持两种消息。一种是 post，Shared Worker 收到后会将该数据保存下来；另一种是 get，Shared Worker 收到该消息后会将保存的数据通过<code>postMessage</code>传给注册它的页面。也就是让页面通过 get 来主动获取（同步）最新消息。具体实现如下：</p><p>首先，我们会在页面中启动一个 Shared Worker，启动方式非常简单：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 构造函数的第二个参数是 Shared Worker 名称，也可以留空
const sharedWorker = new SharedWorker(&#39;../util.shared.js&#39;, &#39;ctc&#39;);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在该 Shared Worker 中支持 get 与 post 形式的消息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* ../util.shared.js: Shared Worker 代码 */
let data = null;
self.addEventListener(&#39;connect&#39;, function (e) {
    const port = e.ports[0];
    port.addEventListener(&#39;message&#39;, function (event) {
        // get 指令则返回存储的消息数据
        if (event.data.get) {
            data &amp;&amp; port.postMessage(data);
        }
        // 非 get 指令则存储该消息数据
        else {
            data = event.data;
        }
    });
    port.start();
});
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后，页面定时发送 get 指令的消息给 Shared Worker，轮询最新的消息数据，并在页面监听返回信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 定时轮询，发送 get 指令的消息
setInterval(function () {
    sharedWorker.port.postMessage({get: true});
}, 1000);

// 监听 get 消息的返回数据
sharedWorker.port.addEventListener(&#39;message&#39;, (e) =&gt; {
    const data = e.data;
    const text = &#39;[receive] &#39; + data.msg + &#39; —— tab &#39; + data.from;
    console.log(&#39;[Shared Worker] receive message:&#39;, text);
}, false);
sharedWorker.port.start();
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，当要跨页面通信时，只需给 Shared Worker <code>postMessage</code>即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sharedWorker.port.postMessage(mydata);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意，如果使用<code>addEventListener</code>来添加 Shared Worker 的消息监听，需要显式调用<code>MessagePort.start</code>方法，即上文中的<code>sharedWorker.port.start()</code>；如果使用<code>onmessage</code>绑定监听则不需要。</p></blockquote><h3 id="_5-indexeddb" tabindex="-1"><a class="header-anchor" href="#_5-indexeddb" aria-hidden="true">#</a> 5. IndexedDB</h3>`,12),I={href:"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FIndexedDB_API",title:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",target:"_blank",rel:"noopener noreferrer"},B=a(`<blockquote><p>鉴于大家对 cookie 已经很熟悉，加之作为“互联网最早期的存储方案之一”，cookie 已经在实际应用中承受了远多于其设计之初的责任，我们下面会使用 IndexedDB 来实现。</p></blockquote><p>其思路很简单：与 Shared Worker 方案类似，消息发送方将消息存至 IndexedDB 中；接收方（例如所有页面）则通过轮询去获取最新的信息。在这之前，我们先简单封装几个 IndexedDB 的工具方法。</p><ul><li>打开数据库连接：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function openStore() {
    const storeName = &#39;ctc_aleinzhou&#39;;
    return new Promise(function (resolve, reject) {
        if (!(&#39;indexedDB&#39; in window)) {
            return reject(&#39;don\\&#39;t support indexedDB&#39;);
        }
        const request = indexedDB.open(&#39;CTC_DB&#39;, 1);
        request.onerror = reject;
        request.onsuccess =  e =&gt; resolve(e.target.result);
        request.onupgradeneeded = function (e) {
            const db = e.srcElement.result;
            if (e.oldVersion === 0 &amp;&amp; !db.objectStoreNames.contains(storeName)) {
                const store = db.createObjectStore(storeName, {keyPath: &#39;tag&#39;});
                store.createIndex(storeName + &#39;Index&#39;, &#39;tag&#39;, {unique: false});
            }
        }
    });
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>存储数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function saveData(db, data) {
    return new Promise(function (resolve, reject) {
        const STORE_NAME = &#39;ctc_aleinzhou&#39;;
        const tx = db.transaction(STORE_NAME, &#39;readwrite&#39;);
        const store = tx.objectStore(STORE_NAME);
        const request = store.put({tag: &#39;ctc_data&#39;, data});
        request.onsuccess = () =&gt; resolve(db);
        request.onerror = reject;
    });
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询/读取数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function query(db) {
    const STORE_NAME = &#39;ctc_aleinzhou&#39;;
    return new Promise(function (resolve, reject) {
        try {
            const tx = db.transaction(STORE_NAME, &#39;readonly&#39;);
            const store = tx.objectStore(STORE_NAME);
            const dbRequest = store.get(&#39;ctc_data&#39;);
            dbRequest.onsuccess = e =&gt; resolve(e.target.result);
            dbRequest.onerror = reject;
        }
        catch (err) {
            reject(err);
        }
    });
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剩下的工作就非常简单了。首先打开数据连接，并初始化数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openStore().then(db =&gt; saveData(db, null))
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于消息读取，可以在连接与初始化后轮询：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openStore().then(db =&gt; saveData(db, null)).then(function (db) {
    setInterval(function () {
        query(db).then(function (res) {
            if (!res || !res.data) {
                return;
            }
            const data = res.data;
            const text = &#39;[receive] &#39; + data.msg + &#39; —— tab &#39; + data.from;
            console.log(&#39;[Storage I] receive message:&#39;, text);
        });
    }, 1000);
});
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，要发送消息时，只需向 IndexedDB 存储数据即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openStore().then(db =&gt; saveData(db, null)).then(function (db) {
    // …… 省略上面的轮询代码
    // 触发 saveData 的方法可以放在用户操作的事件监听内
    saveData(db, mydata);
});
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小憩一下-1" tabindex="-1"><a class="header-anchor" href="#小憩一下-1" aria-hidden="true">#</a> 小憩一下</h3><p>在“广播模式”外，我们又了解了“共享存储+长轮询”这种模式。也许你会认为长轮询没有监听模式优雅，但实际上，有些时候使用“共享存储”的形式时，不一定要搭配长轮询。</p><p>例如，在多 Tab 场景下，我们可能会离开 Tab A 到另一个 Tab B 中操作；过了一会我们从 Tab B 切换回 Tab A 时，希望将之前在 Tab B 中的操作的信息同步回来。这时候，其实只用在 Tab A 中监听<code>visibilitychange</code>这样的事件，来做一次信息同步即可。</p><p>下面，我会再介绍一种通信方式，我把它称为“口口相传”模式。</p><hr><h3 id="_6-window-open-window-opener" tabindex="-1"><a class="header-anchor" href="#_6-window-open-window-opener" aria-hidden="true">#</a> 6. window.open + window.opener</h3><p>当我们使用<code>window.open</code>打开页面时，方法会返回一个被打开页面<code>window</code>的引用。而在未显示指定<code>noopener</code>时，被打开的页面可以通过<code>window.opener</code>获取到打开它的页面的引用 —— 通过这种方式我们就将这些页面建立起了联系（一种树形结构）。</p><p>首先，我们把<code>window.open</code>打开的页面的<code>window</code>对象收集起来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let childWins = [];
document.getElementById(&#39;btn&#39;).addEventListener(&#39;click&#39;, function () {
    const win = window.open(&#39;./some/sample&#39;);
    childWins.push(win);
});
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，当我们需要发送消息的时候，作为消息的发起方，一个页面需要同时通知它打开的页面与打开它的页面：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 过滤掉已经关闭的窗口
childWins = childWins.filter(w =&gt; !w.closed);
if (childWins.length &gt; 0) {
    mydata.fromOpenner = false;
    childWins.forEach(w =&gt; w.postMessage(mydata));
}
if (window.opener &amp;&amp; !window.opener.closed) {
    mydata.fromOpenner = true;
    window.opener.postMessage(mydata);
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，我这里先用<code>.closed</code>属性过滤掉已经被关闭的 Tab 窗口。这样，作为消息发送方的任务就完成了。下面看看，作为消息接收方，它需要做什么。</p><p>此时，一个收到消息的页面就不能那么自私了，除了展示收到的消息，它还需要将消息再传递给它所“知道的人”（打开与被它打开的页面）:</p><blockquote><p>需要注意的是，我这里通过判断消息来源，避免将消息回传给发送方，防止消息在两者间死循环的传递。（该方案会有些其他小问题，实际中可以进一步优化）</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.addEventListener(&#39;message&#39;, function (e) {
    const data = e.data;
    const text = &#39;[receive] &#39; + data.msg + &#39; —— tab &#39; + data.from;
    console.log(&#39;[Cross-document Messaging] receive message:&#39;, text);
    // 避免消息回传
    if (window.opener &amp;&amp; !window.opener.closed &amp;&amp; data.fromOpenner) {
        window.opener.postMessage(data);
    }
    // 过滤掉已经关闭的窗口
    childWins = childWins.filter(w =&gt; !w.closed);
    // 避免消息回传
    if (childWins &amp;&amp; !data.fromOpenner) {
        childWins.forEach(w =&gt; w.postMessage(data));
    }
});
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，每个节点（页面）都肩负起了传递消息的责任，也就是我说的“口口相传”，而消息就在这个树状结构中流转了起来。</p><h3 id="小憩一下-2" tabindex="-1"><a class="header-anchor" href="#小憩一下-2" aria-hidden="true">#</a> 小憩一下</h3><p>显然，“口口相传”的模式存在一个问题：如果页面不是通过在另一个页面内的<code>window.open</code>打开的（例如直接在地址栏输入，或从其他网站链接过来），这个联系就被打破了。</p><p>除了上面这六个常见方法，其实还有一种（第七种）做法是通过 WebSocket 这类的“服务器推”技术来进行同步。这好比将我们的“中央站”从前端移到了后端。</p>`,33),M={href:"https://juejin.cn/post/6844903618043183111",target:"_blank",rel:"noopener noreferrer"},q={href:"https://link.juejin.cn?target=https%3A%2F%2Falienzhou.github.io%2Fcross-tab-communication%2F",title:"https://alienzhou.github.io/cross-tab-communication/",target:"_blank",rel:"noopener noreferrer"},y=a('<img width="676" height="300" src="'+o+`"><h2 id="二、非同源页面之间的通信" tabindex="-1"><a class="header-anchor" href="#二、非同源页面之间的通信" aria-hidden="true">#</a> 二、非同源页面之间的通信</h2><p>上面我们介绍了七种前端跨页面通信的方法，但它们大都受到同源策略的限制。然而有时候，我们有两个不同域名的产品线，也希望它们下面的所有页面之间能无障碍地通信。那该怎么办呢？</p><p>要实现该功能，可以使用一个用户不可见的 iframe 作为“桥”。由于 iframe 与父页面间可以通过指定<code>origin</code>来忽略同源限制，因此可以在每个页面中嵌入一个 iframe （例如：<code>http://sample.com/bridge.html</code>），而这些 iframe 由于使用的是一个 url，因此属于同源页面，其通信方式可以复用上面第一部分提到的各种方式。</p><p>页面与 iframe 通信非常简单，首先需要在页面中监听 iframe 发来的消息，做相应的业务处理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 业务页面代码 */
window.addEventListener(&#39;message&#39;, function (e) {
    // …… do something
});
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，当页面要与其他的同源或非同源页面通信时，会先给 iframe 发送消息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 业务页面代码 */
window.frames[0].window.postMessage(mydata, &#39;*&#39;);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中为了简便此处将<code>postMessage</code>的第二个参数设为了<code>&#39;*&#39;</code>，你也可以设为 iframe 的 URL。iframe 收到消息后，会使用某种跨页面消息通信技术在所有 iframe 间同步消息，例如下面使用的 Broadcast Channel：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* iframe 内代码 */
const bc = new BroadcastChannel(&#39;AlienZHOU&#39;);
// 收到来自页面的消息后，在 iframe 间进行广播
window.addEventListener(&#39;message&#39;, function (e) {
    bc.postMessage(e.data);
});    
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他 iframe 收到通知后，则会将该消息同步给所属的页面：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* iframe 内代码 */
// 对于收到的（iframe）广播消息，通知给所属的业务页面
bc.onmessage = function (e) {
    window.parent.postMessage(e.data, &#39;*&#39;);
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下图就是使用 iframe 作为“桥”的非同源页面间通信模式图。</p><p><img src="`+v+'" alt=""></p><p>其中“同源跨域通信方案”可以使用文章第一部分提到的某种技术。</p><hr><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>今天和大家分享了一下跨页面通信的各种方式。</p><p>对于同源页面，常见的方式包括：</p><ul><li>广播模式：Broadcast Channe / Service Worker / LocalStorage + StorageEvent</li><li>共享存储模式：Shared Worker / IndexedDB / cookie</li><li>口口相传模式：window.open + window.opener</li><li>基于服务端：Websocket / Comet / SSE 等</li></ul><p>而对于非同源页面，则可以通过嵌入同源 iframe 作为“桥”，将非同源页面通信转换为同源页面通信。</p>',21);function C(P,T){const i=r("ExternalLinkIcon");return t(),l("div",null,[m,e("blockquote",null,[e("p",null,[n("以下各种方式的 "),e("a",b,[n("在线 Demo 可以戳这里 >>"),d(i)])])]),e("p",null,[n("浏览器的"),e("a",p,[n("同源策略"),d(i)]),n("在下述的一些跨页面通信方法中依然存在限制。因此，我们先来看看，在满足同源策略的情况下，都有哪些技术可以用来实现跨页面通信。")]),g,e("p",null,[e("a",h,[n("BroadCast Channel"),d(i)]),n(" 可以帮我们创建一个用于广播的通信频道。当所有页面都监听同一频道的消息时，其中某一个页面通过它发送的消息就会被其他所有页面收到。它的API和用法都非常简单。")]),x,e("blockquote",null,[e("p",null,[n("Broadcast Channel 的具体的使用方式可以看这篇"),e("a",f,[n("《【3分钟速览】前端广播式通信：Broadcast Channel》"),d(i)]),n("。")])]),k,e("p",null,[e("a",_,[n("Service Worker"),d(i)]),n(" 是一个可以长期运行在后台的 Worker，能够实现与页面的双向通信。多页面共享间的 Service Worker 可以共享，将 Service Worker 作为消息的处理中心（中央站）即可实现广播效果。")]),e("blockquote",null,[e("p",null,[n("Service Worker 也是 PWA 中的核心技术之一，由于本文重点不在 PWA ，因此如果想进一步了解 Service Worker，可以阅读我之前的文章"),e("a",w,[n("【PWA学习与实践】(3) 让你的WebApp离线可用"),d(i)]),n("。")])]),S,e("p",null,[n("LocalStorage 作为前端最常用的本地存储，大家应该已经非常熟悉了；但"),e("a",W,[F,d(i)]),n("这个与它相关的事件有些同学可能会比较陌生。")]),A,e("p",null,[e("a",j,[n("Shared Worker"),d(i)]),n(" 是 Worker 家族的另一个成员。普通的 Worker 之间是独立运行、数据互不相通；而多个 Tab 注册的 Shared Worker 则可以实现数据共享。")]),E,e("p",null,[n("除了可以利用 Shared Worker 来共享存储数据，还可以使用其他一些“全局性”（支持跨页面）的存储方案。例如 "),e("a",I,[n("IndexedDB"),d(i)]),n(" 或 cookie。")]),B,e("p",null,[n("关于 WebSocket 与其他“服务器推”技术，不了解的同学可以阅读这篇"),e("a",M,[n("《各类“服务器推”技术原理与实例（Polling/COMET/SSE/WebSocket）》"),d(i)])]),e("p",null,[n("此外，我还针对以上各种方式写了一个 "),e("a",q,[n("在线演示的 Demo >>"),d(i)])]),y])}const L=s(u,[["render",C],["__file","qianduankuayemiantongxin.html.vue"]]);export{L as default};
