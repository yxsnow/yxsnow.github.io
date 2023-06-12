import{_ as e,o as n,c as i,a as d}from"./app-ff2f634e.js";const s={},l=d(`<p>在 Golang 中用于执行命令的库是 <code>os/exec</code>，exec.Command 函数返回一个 <code>Cmd</code> 对象，根据不同的需求，可以将命令的执行分为三种情况</p><ol><li>只执行命令，不获取结果</li><li>执行命令，并获取结果（不区分 stdout 和 stderr）</li><li>执行命令，并获取结果（区分 stdout 和 stderr）</li></ol><h2 id="第一种-只执行命令-不获取结果" tabindex="-1"><a class="header-anchor" href="#第一种-只执行命令-不获取结果" aria-hidden="true">#</a> 第一种：只执行命令，不获取结果</h2><p>直接调用 Cmd 对象的 Run 函数，返回的只有成功和失败，获取不到任何输出的结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package main

import (
    &quot;log&quot;
    &quot;os/exec&quot;
)

func main() {
    cmd := exec.Command(&quot;ls&quot;, &quot;-l&quot;, &quot;/var/log/&quot;)
    err := cmd.Run()
    if err != nil {
        log.Fatalf(&quot;cmd.Run() failed with %s\\n&quot;, err)
    }
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第二种-执行命令-并获取结果" tabindex="-1"><a class="header-anchor" href="#第二种-执行命令-并获取结果" aria-hidden="true">#</a> 第二种：执行命令，并获取结果</h2><p>有时候我们执行一个命令就是想要获取输出结果，此时你可以调用 Cmd 的 CombinedOutput 函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package main

import (
&quot;fmt&quot;
&quot;log&quot;
&quot;os/exec&quot;
)

func main() {
    cmd := exec.Command(&quot;ls&quot;, &quot;-l&quot;, &quot;/var/log/&quot;)
    out, err := cmd.CombinedOutput()
    if err != nil {
        fmt.Printf(&quot;combined out:\\n%s\\n&quot;, string(out))
        log.Fatalf(&quot;cmd.Run() failed with %s\\n&quot;, err)
    }
    fmt.Printf(&quot;combined out:\\n%s\\n&quot;, string(out))
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CombinedOutput 函数，只返回 out，并不区分 stdout 和 stderr。如果你想区分他们，可以直接看第三种方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ go run demo.go 
combined out:
total 11540876
-rw-r--r--  2 root       root         4096 Oct 29  2018 yum.log
drwx------  2 root       root           94 Nov  6 05:56 audit
-rw-r--r--  1 root       root    185249234 Nov 28  2019 message
-rw-r--r--  2 root       root        16374 Aug 28 10:13 boot.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过在那之前，我却发现一个小问题：有时候，shell 命令能执行，并不代码 exec 也能执行。</p><p>比如我只想查看 <code>/var/log/</code> 目录下的 log 后缀名的文件呢？有点 Linux 基础的同学，都会用这个命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ls -l /var/log/*.log
total 11540
-rw-r--r--  2 root       root         4096 Oct 29  2018 /var/log/yum.log
-rw-r--r--  2 root       root        16374 Aug 28 10:13 /var/log/boot.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照这个写法将它放入到 <code>exec.Command</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package main

import (
&quot;fmt&quot;
&quot;log&quot;
&quot;os/exec&quot;
)

func main() {
    cmd := exec.Command(&quot;ls&quot;, &quot;-l&quot;, &quot;/var/log/*.log&quot;)
    out, err := cmd.CombinedOutput()
    if err != nil {
        fmt.Printf(&quot;combined out:\\n%s\\n&quot;, string(out))
        log.Fatalf(&quot;cmd.Run() failed with %s\\n&quot;, err)
    }
    fmt.Printf(&quot;combined out:\\n%s\\n&quot;, string(out))
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>什么情况？居然不行，报错了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ go run demo.go 
combined out:
ls: cannot access /var/log/*.log: No such file or directory

2020/11/11 19:46:00 cmd.Run() failed with exit status 2
exit status 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么会报错呢？shell 明明没有问题啊</p><p>其实很简单，原来 <code>ls -l /var/log/*.log</code> 并不等价于下面这段代码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exec.Command(&quot;ls&quot;, &quot;-l&quot;, &quot;/var/log/*.log&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这段代码对应的 Shell 命令应该是下面这样，如果你这样子写，ls 就会把参数里的内容当成具体的文件名，而忽略通配符 <code>*</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ls -l &quot;/var/log/*.log&quot;
ls: cannot access /var/log/*.log: No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三种-执行命令-并区分stdout-和-stderr" tabindex="-1"><a class="header-anchor" href="#第三种-执行命令-并区分stdout-和-stderr" aria-hidden="true">#</a> 第三种：执行命令，并区分stdout 和 stderr</h2><p>上面的写法，无法实现区分标准输出和标准错误，只要换成下面种写法，就可以实现。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package main

import (
    &quot;bytes&quot;
    &quot;fmt&quot;
    &quot;log&quot;
    &quot;os/exec&quot;
)

func main() {
    cmd := exec.Command(&quot;ls&quot;, &quot;-l&quot;, &quot;/var/log/*.log&quot;)
    var stdout, stderr bytes.Buffer
    cmd.Stdout = &amp;stdout  // 标准输出 

    cmd.Stderr = &amp;stderr  // 标准错误 

    err := cmd.Run()
    outStr, errStr := string(stdout.Bytes()), string(stderr.Bytes())
    fmt.Printf(&quot;out:\\n%s\\nerr:\\n%s\\n&quot;, outStr, errStr)
    if err != nil {
        log.Fatalf(&quot;cmd.Run() failed with %s\\n&quot;, err)
    }
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出如下，可以看到前面的报错内容被归入到标准错误里</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ go run demo.go 
out:

err:
ls: cannot access /var/log/*.log: No such file or directory

2020/11/11 19:59:31 cmd.Run() failed with exit status 2
exit status 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第四种-多条命令组合-请使用管道" tabindex="-1"><a class="header-anchor" href="#第四种-多条命令组合-请使用管道" aria-hidden="true">#</a> 第四种：多条命令组合，请使用管道</h2><p>将上一条命令的执行输出结果，做为下一条命令的参数。在 Shell 中可以使用管道符 <code>|</code> 来实现。</p><p>比如下面这条命令，统计了 message 日志中 ERROR 日志的数量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ grep ERROR /var/log/messages | wc -l
19
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>类似的，在 Golang 中也有类似的实现。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package main
import (
    &quot;os&quot;
    &quot;os/exec&quot;
)
func main() {
    c1 := exec.Command(&quot;grep&quot;, &quot;ERROR&quot;, &quot;/var/log/messages&quot;)
    c2 := exec.Command(&quot;wc&quot;, &quot;-l&quot;)
    c2.Stdin, _ = c1.StdoutPipe()
    c2.Stdout = os.Stdout
    _ = c2.Start()
    _ = c1.Run()
    _ = c2.Wait()
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ go run demo.go 
19
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第五种-设置命令级别的环境变量" tabindex="-1"><a class="header-anchor" href="#第五种-设置命令级别的环境变量" aria-hidden="true">#</a> 第五种：设置命令级别的环境变量</h2><p>使用 os 库的 Setenv 函数来设置的环境变量，是作用于整个进程的生命周期</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package main
import (
    &quot;fmt&quot;
    &quot;log&quot;
    &quot;os&quot;
    &quot;os/exec&quot;
)
func main() {
    os.Setenv(&quot;NAME&quot;, &quot;wangbm&quot;)
    cmd := exec.Command(&quot;echo&quot;, os.ExpandEnv(&quot;$NAME&quot;))
    out, err := cmd.CombinedOutput()
    if err != nil {
        log.Fatalf(&quot;cmd.Run() failed with %s\\n&quot;, err)
    }
    fmt.Printf(&quot;%s&quot;, out)
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要在这个进程里，<code>NAME</code> 这个变量的值都会是 <code>wangbm</code>，无论你执行多少次命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ go run demo.go 
wangbm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想把环境变量的作用范围再缩小到命令级别，也是有办法的。</p><p>为了方便验证，我新建个 sh 脚本，内容如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cat /home/wangbm/demo.sh
echo $NAME
$ bash /home/wangbm/demo.sh   # 由于全局环境变量中没有 NAME，所以无输出 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，demo.go 里的代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package main
import (
    &quot;fmt&quot;
    &quot;os&quot;
    &quot;os/exec&quot;
)

func ChangeYourCmdEnvironment(cmd * exec.Cmd) error {
    env := os.Environ()
    cmdEnv := []string{}

    for _, e := range env {
        cmdEnv = append(cmdEnv, e)
    }
    cmdEnv = append(cmdEnv, &quot;NAME=wangbm&quot;)
    cmd.Env = cmdEnv

    return nil
}

func main() {
    cmd1 := exec.Command(&quot;bash&quot;, &quot;/home/wangbm/demo.sh&quot;)
  ChangeYourCmdEnvironment(cmd1) // 添加环境变量到 cmd1 命令: NAME=wangbm 

    out1, _ := cmd1.CombinedOutput()
    fmt.Printf(&quot;output: %s&quot;, out1)

    cmd2 := exec.Command(&quot;bash&quot;, &quot;/home/wangbm/demo.sh&quot;)
    out2, _ := cmd2.CombinedOutput()
    fmt.Printf(&quot;output: %s&quot;, out2)
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行后，可以看到第二次执行的命令，是没有输出 NAME 的变量值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ go run demo.go 
output: wangbm
output: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),a=[l];function t(u,r){return n(),i("div",null,a)}const o=e(s,[["render",t],["__file","Goyuyanzhongyong os_exec zhixingminglingdewuzhongzishi.html.vue"]]);export{o as default};
