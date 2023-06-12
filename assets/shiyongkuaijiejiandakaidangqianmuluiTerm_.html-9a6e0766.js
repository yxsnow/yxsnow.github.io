import{_ as e,o as i,c as n,a}from"./app-ff2f634e.js";const d="/assets/22433deb572c45431e7615576ac9bb3f_74b9df8bdaa44f89b-f4e61152.png",s="/assets/49dbd522a55250ae4f1ed87bbe586f8e_05eddbc985894432b-098af3a5.png",t="/assets/3fc560222528d2f91a8289e262896f86_9feba35bc02545558-cff5ee74.png",r="/assets/2b9e861753bc000563caadd56807bd70_0ee7b61566244cc4b-0df48dfe.png",o={},c=a('<h5 id="第一步-打开mac自带程序自动操作-新建快速操作" tabindex="-1"><a class="header-anchor" href="#第一步-打开mac自带程序自动操作-新建快速操作" aria-hidden="true">#</a> 第一步：打开Mac自带程序<code>自动操作</code>，新建<code>快速操作</code></h5><img width="962" height="696" src="'+d+'" class="jop-noMdConv"><p>开始创建服务</p><img width="962" height="163" src="'+s+'" class="jop-noMdConv"><p>参数设置</p><h5 id="第二步-点击操作-选择资源库下面的实用工具-点击运行applescript拖入到右边" tabindex="-1"><a class="header-anchor" href="#第二步-点击操作-选择资源库下面的实用工具-点击运行applescript拖入到右边" aria-hidden="true">#</a> <a href="#"></a>第二步：点击操作，选择<code>资源库</code>下面的<code>实用工具</code>，点击<code>运行AppleScript</code>拖入到右边</h5><img width="962" height="502" src="'+t+`" class="jop-noMdConv"><p>添加服务</p><h5 id="第三步-将下面的代码放到applescript里面-保存为open-iterm" tabindex="-1"><a class="header-anchor" href="#第三步-将下面的代码放到applescript里面-保存为open-iterm" aria-hidden="true">#</a> <a href="#"></a>第三步：将下面的代码放到AppleScript里面，保存为Open iTerm</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`on run {input, parameters}
    tell application &quot;Finder&quot;
        set pathList to (quoted form of POSIX path of (folder of the front window as alias))
        set command to &quot;clear; cd &quot; &amp; pathList
    end tell
    tell application &quot;System Events&quot;
        -- some versions might identify as &quot;iTerm2&quot; instead of &quot;iTerm&quot;
        set isRunning to (exists (processes where name is &quot;iTerm&quot;)) or (exists (processes where name is &quot;iTerm2&quot;))
    end tell
    tell application &quot;iTerm&quot;
        activate
        set hasNoWindows to ((count of windows) is 0)
        if isRunning and hasNoWindows then
            create window with default profile
        end if
        select first window
        tell the first window
            if isRunning and hasNoWindows is false then
                create tab with default profile
            end if
            tell current session to write text command
        end tell
    end tell
end run\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码意思是将当前最前面的Finder地址如果获取不到，则返回桌面地址 然后通知iTerm的第一个窗口新建标签并跳到这个目录去</p><h5 id="第四步-打开系统偏好设置-》键盘-》快捷键-》服务" tabindex="-1"><a class="header-anchor" href="#第四步-打开系统偏好设置-》键盘-》快捷键-》服务" aria-hidden="true">#</a> <a href="#"></a>第四步：打开<code>系统偏好设置</code>-》<code>键盘</code>-》<code>快捷键</code>-》<code>服务</code></h5><img width="962" height="837" src="`+r+'" class="jop-noMdConv"><p><strong>注意</strong>：设置的快捷键不能与<code>Finder</code>自带快捷键冲突。</p><h5 id="第五步-重启finder-打开终端输入-killall-finder" tabindex="-1"><a class="header-anchor" href="#第五步-重启finder-打开终端输入-killall-finder" aria-hidden="true">#</a> <a href="#"></a>第五步：重启<code>Finder</code>，打开终端输入：<code>killall Finder</code></h5><h5 id="第六步-随意进入一个文件夹-使用快捷键吧" tabindex="-1"><a class="header-anchor" href="#第六步-随意进入一个文件夹-使用快捷键吧" aria-hidden="true">#</a> <a href="#"></a>第六步：随意进入一个文件夹，使用快捷键吧~</h5>',16),l=[c];function h(u,m){return i(),n("div",null,l)}const v=e(o,[["render",h],["__file","shiyongkuaijiejiandakaidangqianmuluiTerm_.html.vue"]]);export{v as default};
