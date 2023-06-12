import{_ as s,r as d,o as l,c as r,b as n,d as e,e as t,a as i}from"./app-ff2f634e.js";const v={},c=i(`<h6 id="es6新特性-2015" tabindex="-1"><a class="header-anchor" href="#es6新特性-2015" aria-hidden="true">#</a> ES6新特性（2015）</h6><p>ES6的特性比较多，在这里列举几个常用的：</p><ul><li>类</li><li>模块化</li><li>箭头函数</li><li>函数参数默认值</li><li>模板字符串</li><li>解构赋值</li><li>延展操作符</li><li>对象属性简写</li><li>Promise</li><li>Let与Const</li></ul><h6 id="_1-类-class" tabindex="-1"><a class="header-anchor" href="#_1-类-class" aria-hidden="true">#</a> <a href="#"></a>1.类（class）</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`class Animal {
    // 构造函数，实例化的时候将会被调用，如果不指定，那么会有一个不带参数的默认构造函数.
    constructor(name,color) {
      this.name = name;
      this.color = color;
    }
    // toString 是原型对象上的属性
    toString() {
      console.log(&#39;name:&#39; + this.name + &#39;,color:&#39; + this.color);

    }
  }

 var animal = new Animal(&#39;dog&#39;,&#39;white&#39;);//实例化Animal
 animal.toString();

 console.log(animal.hasOwnProperty(&#39;name&#39;)); //true
 console.log(animal.hasOwnProperty(&#39;toString&#39;)); // false
 console.log(animal.__proto__.hasOwnProperty(&#39;toString&#39;)); // true

 class Cat extends Animal {
  constructor(action) {
    // 子类必须要在constructor中指定super 函数，否则在新建实例的时候会报错.
    // 如果没有置顶consructor,默认带super函数的constructor将会被添加、
    super(&#39;cat&#39;,&#39;white&#39;);
    this.action = action;
  }
  toString() {
    console.log(super.toString());
  }
 }

var cat = new Cat(&#39;catch&#39;)
 cat.toString();

 // 实例cat 是 Cat 和 Animal 的实例，和Es5完全一致。
 console.log(cat instanceof Cat); // true
 console.log(cat instanceof Animal); // true\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-模块化-module" tabindex="-1"><a class="header-anchor" href="#_2-模块化-module" aria-hidden="true">#</a> <a href="#"></a>2.模块化(Module)</h6><p>ES5不支持原生的模快化，在ES6中模块作为重要的组成部分被添加进来。模块的功能主要有export和import组成。每个模块都有自己的独立的作用域，模块之间的相互调用关系是通过export来规定模块对外暴露的接口，通过import来引用其他模块提供的接口。同时还为模块创造了命名空间，防止函数名的冲突。</p><p><strong>导出（export）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`导出变量或者常量

export var name = &#39;acb&#39;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6将一个文件视为一个模块，上面的模块通过 export 向外输出了一个变量。一个模块也可以同时往外面输出多个变量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// test.js
var name = &#39;abc&#39;;
 var age = &#39;10&#39;;
 export {name, age};\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>导出函数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`//main.js
export function myModule(someArg) {
  return someArg;
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>导入（import）</strong> 定义好的模块的输出以后可以在另一个模块通过import引用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`import {myModule} from &#39;myModule&#39;;// main.js
import {name,age} from &#39;test&#39;;// test.js\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>心得:一条import 语句可以同时导入默认函数和其它变量。import defaultMethod, { otherMethod } from ‘xxx.js’;</p></blockquote><h6 id="_3-箭头-arrow-函数" tabindex="-1"><a class="header-anchor" href="#_3-箭头-arrow-函数" aria-hidden="true">#</a> <a href="#"></a>3.箭头（Arrow）函数</h6>`,17),o={href:"https://so.csdn.net/so/search?q=%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},u=n("strong",null,"箭头函数的结构",-1),m=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`()=&gt;1
v=&gt;v+1
(a,b)=&gt;a+b
()=&gt;{
    alert(&quot;foo&quot;);
}
e=&gt;{
    if (e == 0){
        return 0;
    }
    return 1000/e;
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4-函数参数默认值" tabindex="-1"><a class="header-anchor" href="#_4-函数参数默认值" aria-hidden="true">#</a> <a href="#"></a>4.函数参数默认值</h6><p>ES6支持在定义函数的时候为其设置默认值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`function foo(height = 50, color = &#39;red&#39;)
{
    // ...
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5-模板字符串" tabindex="-1"><a class="header-anchor" href="#_5-模板字符串" aria-hidden="true">#</a> <a href="#"></a>5.模板字符串</h6><p>ES6支持模板字符串，使得字符串的拼接更加的简洁、直观。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`\`var name = \`Your name is \${first} 

 \${last}.\` \`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ES6中通过\${}就可以完成字符串的拼接，只需要将变量放在大括号之中。</p><h6 id="_6-解构赋值" tabindex="-1"><a class="header-anchor" href="#_6-解构赋值" aria-hidden="true">#</a> <a href="#"></a>6.解构赋值</h6><p>解构赋值语法是JavaScript的一种表达式，可以方便的从数组或者对象中快速提取值赋给定义的变量。 <strong>获取数组中的值</strong> 从数组中获取值并赋值到变量中，变量的顺序与数组中对象顺序对应。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`var foo = [&quot;one&quot;, &quot;two&quot;, &quot;three&quot;, &quot;four&quot;];

var [one, two, three] = foo;
console.log(one); // &quot;one&quot;
console.log(two); // &quot;two&quot;
console.log(three); // &quot;three&quot;

//如果你要忽略某些值，你可以按照下面的写法获取你想要的值
var [first, , , last] = foo;
console.log(first); // &quot;one&quot;
console.log(last); // &quot;four&quot;

//你也可以这样写
var a, b; //先声明变量

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有从数组中的获取到值，你可以为变量设置一个默认值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过解构赋值可以方便的交换两个变量的值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>获取对象中的值</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`const student = {
  name:&#39;Ming&#39;,
  age:&#39;18&#39;,
  city:&#39;Shanghai&#39;  
};

const {name,age,city} = student;
console.log(name); // &quot;Ming&quot;
console.log(age); // &quot;18&quot;
console.log(city); // &quot;Shanghai&quot;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_7-延展操作符-spread-operator" tabindex="-1"><a class="header-anchor" href="#_7-延展操作符-spread-operator" aria-hidden="true">#</a> <a href="#"></a>7.延展操作符(Spread operator)</h6><p>延展操作符…可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造对象时, 将对象表达式按key-value的方式展开。</p><p><strong>函数的调用</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`myFunction(...iterableObj);\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>数组构造或字符串：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`[...iterableObj, &#39;4&#39;, ...&#39;hello&#39;, 6];\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>构造对象时,进行克隆或者属性拷贝</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`let objClone = { ...obj };\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>应用场景</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];

//不使用延展操作符
console.log(sum.apply(null, numbers));

//使用延展操作符
console.log(sum(...numbers));// 6\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>构造数组</strong> 没有展开语法的时候，只能组合使用 push，splice，concat 等方法，来将已有数组元素变成新数组的一部分。有了展开语法, 构造新数组会变得更简单、更优雅：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`const stuendts = [&#39;Jine&#39;,&#39;Tom&#39;]; 
const persons = [&#39;Tony&#39;,... stuendts,&#39;Aaron&#39;,&#39;Anna&#39;];
conslog.log(persions)// [&quot;Tony&quot;, &quot;Jine&quot;, &quot;Tom&quot;, &quot;Aaron&quot;, &quot;Anna&quot;]\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和参数列表的展开类似, … 在构造字数组时, 可以在任意位置多次使用。 <strong>数组拷贝</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`var arr = [1, 2, 3];
var arr2 = [...arr]; // 等同于 arr.slice()
arr2.push(4); 
console.log(arr2)//[1, 2, 3, 4]\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展开语法和 Object.assign() 行为一致, 执行的都是浅拷贝(只遍历一层)。 <strong>连接多个数组</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];// 将 arr2 中所有元素附加到 arr1 后面并返回
//等同于
var arr4 = arr1.concat(arr2);\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ECMAScript 2018中延展操作符增加了对对象的支持</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`var obj1 = { foo: &#39;bar&#39;, x: 42 };
var obj2 = { foo: &#39;baz&#39;, y: 13 };

var clonedObj = { ...obj1 };
// 克隆后的对象: { foo: &quot;bar&quot;, x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// 合并后的对象: { foo: &quot;baz&quot;, x: 42, y: 13 }\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>react中的应用</strong></p><p>通常我们在封装一个组件时，会对外公开一些 props 用于实现功能。大部分情况下在外部使用都应显示的传递 props 。但是当传递大量的props时，会非常繁琐，这时我们可以使用 …(延展操作符,用于取出参数对象的所有可遍历属性) 来进行传递。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`const params = {
    name: &#39;Jine&#39;,
    age: 21
}
&lt;CustomComponent {...params} /&gt;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配合解构赋值避免传入一些不需要的参数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`var params = {
    name: &#39;123&#39;,
    title: &#39;456&#39;,
    type: &#39;aaa&#39;
}

var { type, ...other } = params;

&lt;CustomComponent type=&#39;normal&#39; number={2} {...other} /&gt;
//等同于
&lt;CustomComponent type=&#39;normal&#39; number={2} name=&#39;123&#39; title=&#39;456&#39; /&gt;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_8-对象属性简写" tabindex="-1"><a class="header-anchor" href="#_8-对象属性简写" aria-hidden="true">#</a> <a href="#"></a>8.对象属性简写</h6><p>在ES6中允许我们在设置一个对象的属性的时候不指定属性名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`const name=&#39;Ming&#39;,age=&#39;18&#39;,city=&#39;Shanghai&#39;;
  
const student = {
    name,
    age,
    city
};
console.log(student);//{name: &quot;Ming&quot;, age: &quot;18&quot;, city: &quot;Shanghai&quot;}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_9-promise" tabindex="-1"><a class="header-anchor" href="#_9-promise" aria-hidden="true">#</a> <a href="#"></a>9.Promise</h6><p>Promise 是异步编程的一种解决方案，比传统的解决方案callback更加的优雅。它最早由社区提出和实现的，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。</p><blockquote><p>嵌套两个setTimeout回调函数：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`setTimeout(function()
{
    console.log(&#39;Hello&#39;); // 1秒后输出&quot;Hello&quot;
    setTimeout(function()
    {
        console.log(&#39;Hi&#39;); // 2秒后输出&quot;Hi&quot;
    }, 1000);
}, 1000);\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用ES6</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`var waitSecond = new Promise(function(resolve, reject)
{
    setTimeout(resolve, 1000);
});

waitSecond
    .then(function()
    {
      console.log(&quot;Hello&quot;); // 1秒后输出&quot;Hello&quot;
      return waitSecond;
    })
    .then(function()
    {
        console.log(&quot;Hi&quot;); // 2秒后输出&quot;Hi&quot;
    });\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的的代码使用两个then来进行异步编程串行化，避免了回调地狱;</p><h6 id="_10-支持let与const" tabindex="-1"><a class="header-anchor" href="#_10-支持let与const" aria-hidden="true">#</a> <a href="#"></a>10.支持let与const</h6><p>在之前JS是没有块级作用域的，const与let填补了这方便的空白，const与let都是块级作用域。</p><blockquote><p>使用var定义的变量为函数级作用域：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`{
  var a = 10;
}

console.log(a); // 输出10\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用let与const定义的变量为块级作用域：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`{
  let a = 10;
}

console.log(a); //-1 or Error“ReferenceError: a is not defined”\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="es7新特性-2016" tabindex="-1"><a class="header-anchor" href="#es7新特性-2016" aria-hidden="true">#</a> <a href="#"></a>ES7新特性（2016）</h4><p>ES2016添加了两个小的特性来说明标准化过程：</p><ul><li>数组includes()方法，用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true，否则返回false。</li><li>a ** b指数运算符，它与 Math.pow(a, b)相同。</li><li>1.Array.prototype.includes() includes() 函数用来判断一个数组是否包含一个指定的值，如果包含则返回 true，否则返回false。</li></ul><h6 id="_1-array-prototype-includes" tabindex="-1"><a class="header-anchor" href="#_1-array-prototype-includes" aria-hidden="true">#</a> <a href="#"></a>1.Array.prototype.includes()</h6><p>includes 函数与 indexOf 函数很相似，下面两个表达式是等价的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`arr.includes(x)
arr.indexOf(x) &gt;= 0\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-指数操作符" tabindex="-1"><a class="header-anchor" href="#_2-指数操作符" aria-hidden="true">#</a> <a href="#"></a>2.指数操作符</h6><p>在ES7中引入了指数运算符**，**具有与Math.pow(…)等效的计算结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`console.log(2**10);// 输出1024\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="es8新特性-2017" tabindex="-1"><a class="header-anchor" href="#es8新特性-2017" aria-hidden="true">#</a> <a href="#"></a>ES8新特性（2017）</h4><ul><li>async/await</li><li>Object.values()</li><li>Object.entries()</li><li>String padding:padStart()和padEnd()，填充字符串达到当前长度</li><li>函数参数列表结尾允许逗号</li><li>Object.getOwnPropertyDescriptors()</li></ul><h6 id="_1-async-await" tabindex="-1"><a class="header-anchor" href="#_1-async-await" aria-hidden="true">#</a> <a href="#"></a>1.async/await</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-object-values" tabindex="-1"><a class="header-anchor" href="#_2-object-values" aria-hidden="true">#</a> <a href="#"></a>2.Object.values()</h6><p>Object.values()是一个与Object.keys()类似的新函数，但返回的是Object自身属性的所有值，不包括继承的值。</p><p>假设我们要遍历如下对象obj的所有值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`const obj = {a: 1, b: 2, c: 3};

const values=Object.values(obj1);
console.log(values);//[1, 2, 3]\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述代码中可以看出Object.values()为我们省去了遍历key，并根据这些key获取value的步骤。</p><h6 id="_3-object-entries" tabindex="-1"><a class="header-anchor" href="#_3-object-entries" aria-hidden="true">#</a> <a href="#"></a>3.Object.entries()</h6><p>Object.entries()函数返回一个给定对象自身可枚举属性的键值对的数组。</p><p>接下来我们来遍历上文中的obj对象的所有属性的key和value：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`\`for(let [key,value] of Object.entries(obj1)){
    console.log(\`key: \${key} value:\${value}\`)
}
//key:a value:1
//key:b value:2
//key:c value:3\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4-string-padding" tabindex="-1"><a class="header-anchor" href="#_4-string-padding" aria-hidden="true">#</a> <a href="#"></a>4.String padding</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`console.log(&#39;0.0&#39;.padStart(4,&#39;10&#39;)) //10.0

console.log(&#39;0.0&#39;.padEnd(4,&#39;0&#39;)) //0.00\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5-函数参数列表结尾允许逗号" tabindex="-1"><a class="header-anchor" href="#_5-函数参数列表结尾允许逗号" aria-hidden="true">#</a> <a href="#"></a>5.函数参数列表结尾允许逗号</h6><p>主要作用是方便使用git进行多人协作开发时修改同一个函数减少不必要的行变更。</p><h6 id="_6-object-getownpropertydescriptors" tabindex="-1"><a class="header-anchor" href="#_6-object-getownpropertydescriptors" aria-hidden="true">#</a> <a href="#"></a>6.Object.getOwnPropertyDescriptors()</h6><p>Object.getOwnPropertyDescriptors()函数用来获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`Object.getOwnPropertyDescriptors(obj)\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="es9新特性-2018" tabindex="-1"><a class="header-anchor" href="#es9新特性-2018" aria-hidden="true">#</a> <a href="#"></a>ES9新特性（2018）</h4><ul><li>异步迭代</li><li>Promise.finally()</li></ul><h6 id="_1-异步迭代" tabindex="-1"><a class="header-anchor" href="#_1-异步迭代" aria-hidden="true">#</a> <a href="#"></a>1.异步迭代</h6><p>在async/await的某些时刻，你可能尝试在同步循环中调用异步函数。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`async function process(array) {
  for (let i of array) {
    await doSomething(i);
  }
}

这段代码不会正常运行，下面这段同样也不会：

async function process(array) {
  array.forEach(async i =&gt; {
    await doSomething(i);
  });
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码中，循环本身依旧保持同步，并在在内部异步函数之前全部调用完成。</p><p>ES2018引入异步迭代器（asynchronous iterators），这就像常规迭代器，除了next()方法返回一个Promise。因此await可以和for…of循环一起使用，以串行的方式运行异步操作。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-promise-finally" tabindex="-1"><a class="header-anchor" href="#_2-promise-finally" aria-hidden="true">#</a> <a href="#"></a>2.Promise.finally()</h6><p>一个Promise调用链要么成功到达最后一个.then()，要么失败触发.catch()。在某些情况下，你想要在无论Promise运行成功还是失败，运行相同的代码，例如清除，删除对话，关闭数据库连接等。</p><blockquote><p>.finally()允许你指定最终的逻辑：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`function doSomething() {
  doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err =&gt; {
    console.log(err);
  })
  .finally(() =&gt; {
    // finish here!
  });
}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="es10新特性-2019" tabindex="-1"><a class="header-anchor" href="#es10新特性-2019" aria-hidden="true">#</a> <a href="#"></a>ES10新特性（2019）</h4><ul><li>新增了Array的flat()方法和flatMap()方法</li><li>新增了String的trimStart()方法和trimEnd()方法</li><li>新的基本数据类型BigInt</li></ul><h6 id="_1-新增了array的flat-方法和flatmap-方法" tabindex="-1"><a class="header-anchor" href="#_1-新增了array的flat-方法和flatmap-方法" aria-hidden="true">#</a> <a href="#"></a>1.新增了Array的flat()方法和flatMap()方法</h6><p>flat()和flatMap()本质上就是是归纳（reduce） 与 合并（concat）的操作。 <strong>Array.prototype.flat()</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity 作为深度，展开任意深度的嵌套数组
arr3.flat(Infinity); 
// [1, 2, 3, 4, 5, 6]\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Array.prototype.flatMap()</strong> flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 和 深度值1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。</p><h6 id="_2-新增了string的trimstart-方法和trimend-方法" tabindex="-1"><a class="header-anchor" href="#_2-新增了string的trimstart-方法和trimend-方法" aria-hidden="true">#</a> <a href="#"></a>2.新增了String的trimStart()方法和trimEnd()方法</h6><p>新增的这两个方法很好理解，分别去除字符串首尾空白字符，这里就不用例子说声明了。</p><h6 id="_3-新的基本数据类型bigint" tabindex="-1"><a class="header-anchor" href="#_3-新的基本数据类型bigint" aria-hidden="true">#</a> <a href="#"></a>3.新的基本数据类型BigInt</h6><p>现在的基本数据类型（值类型）不止5种（ES6之后是六种）了！加上BigInt一共有七种基本数据类型，分别是： String、Number、Boolean、Null、Undefined、Symbol、BigInt</p>`,107);function b(g,p){const a=d("ExternalLinkIcon");return l(),r("div",null,[c,n("p",null,[e("不只是关键字function的简写，它还带来了其它好处。"),n("a",o,[e("箭头函数"),t(a)]),e("与包围它的代码共享同一个this,能帮你很好的解决this的指向问题。有经验的JavaScript开发者都熟悉诸如var self = this;或var that = this这种引用外围this的模式。但借助=>，就不需要这种模式了。 "),u,e(" 箭头函数的箭头=>之前是一个空括号、单个的参数名、或用括号括起的多个参数名，而箭头之后可以是一个表达式（作为函数的返回值），或者是用花括号括起的函数体（需要自行通过return来返回值，否则返回的是undefined）。")]),m])}const x=s(v,[["render",b],["__file","JavaScriptdeES6、ES7、ES8、ES9、ES10xintexing.html.vue"]]);export{x as default};
