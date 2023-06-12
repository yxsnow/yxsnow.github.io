import{_ as e,o as i,c as n,a}from"./app-ff2f634e.js";const s={},t=a(`<p>git切换到指定远程分支</p><p>我们在使用git进行开发的时候经常会遇到需要切换远程分支并且提交到远程指定分支的情况，现在记录下操作步骤。</p><p>查看远程所有分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git branch -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>git branch不带参数,列出本地已经存在的分支，并且在当前分支的前面用*标记，加上-a参数可以查看所有分支列表，包括本地和远程，远程分支一般会用红色字体标记出来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* dev
 master
 remotes/origin/HEAD -&gt; origin/master
 remotes/origin/master
 remotes/origin/release/caigou_v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建分支并切换到指定分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b dev origin/release/caigou_v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>git checkout -b 本地分支名 origin/远程分支名</code></p><p>该命令可以将远程git仓库里的指定分支拉取到本地，这样就在本地新建了一个dev分支，并和指定的远程分支release/caigou_v1.0关联了起来。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switched to a new branch &#39;dev&#39;
Branch &#39;dev&#39; set up to track remote branch &#39;release/caigou_v1.0&#39; from &#39;origin&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看本地分支及追踪的分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-vv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>git branch -vv命令可以显示本地所有分支，执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* dev    e67e3ef [origin/release/caigou_v1.0] 供应商详情页面
 master 11160c2 [origin/master: behind 5] Merge branch &#39;master&#39; of https://git.jointforce.com/scm/join/yj-stat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>*表示当前所在分支，[远程分支]表示当前本地分支追踪的远程分支，最后一个是最近一次提交的注释。</p><p>将本地分支推送到远程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git push -u origin dev:release/caigou_v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>git push &lt;远程主机名&gt; &lt;本地分支名&gt;:&lt;远程分支名&gt;</code></p><p>成功后显示如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Counting objects: 8, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 754 bytes | 754.00 KiB/s, done.
Total 8 (delta 6), reused 0 (delta 0)
remote:
remote: Create pull request for release/caigou_v1.0:
remote:   https://git.jointforce.com/projects/JOIN/repos/yj-stat/compare/commits?sourceBranch=refs/heads/release/caigou_v1.0
remote:
To https://git.jointforce.com/scm/join/yj-stat.git
   a22ed65..e8782b2  dev -&gt; release/caigou_v1.0
Branch &#39;dev&#39; set up to track remote branch &#39;release/caigou_v1.0&#39; from &#39;origin&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述命令表示将本地dev分支推送到远程release/caigou_v1.0分支。</p>`,22),d=[t];function r(l,c){return i(),n("div",null,d)}const v=e(s,[["render",r],["__file","gitqiehuandaozhidingyuanchengfenzhi.html.vue"]]);export{v as default};
