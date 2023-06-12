import{_ as l,r as a,o as r,c as t,b as n,d as e,e as d,a as i}from"./app-ff2f634e.js";const c="/assets/watermark_type_ZmFuZ3poZW5naGVpd_f1feac2312354580a-02059ea5.png",v={},o=i('<h2 id="es5如何实现继承-附每种继承方式优缺点" tabindex="-1"><a class="header-anchor" href="#es5如何实现继承-附每种继承方式优缺点" aria-hidden="true">#</a> ES5如何实现继承（附每种继承方式优缺点）</h2><p><strong>原型链的核心只需要记住三点：</strong></p><ol><li>每个对象都有__proto__属性，该属性指向其原型对象，在调用实例的方法和属性时，如果在实例对象 上找不到，就会往原型对象上找</li><li>构造函数的prototype属性也指向实例的原型对象</li><li>原型对象的constructor属性指向构造函数</li></ol><h2 id="·一-原型链继承" tabindex="-1"><a class="header-anchor" href="#·一-原型链继承" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a><strong>·一. 原型链继承</strong></h2>',4),m={href:"https://so.csdn.net/so/search?q=%E5%8E%9F%E5%9E%8B%E9%93%BE&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// 父类
function Parent() {
    this.name = &#39;写代码像蔡徐抻&#39;
}
// 父类的原型方法
Parent.prototype.getName = function() {
    return this.name
}
// 子类
function Child() {}

// 让子类的原型对象指向父类实例, 这样一来在Child实例中找不到的属性和方法就会到原型对象(父类实例)上寻找
Child.prototype = new Parent()
Child.prototype.constructor = Child // 根据原型链的规则,顺便绑定一下constructor, 这一步不影响继承, 只是在用到constructor时会需要

// 然后Child实例就能访问到父类及其原型上的name属性和getName()方法
const child = new Child()
child.name          // &#39;写代码像蔡徐抻&#39;
child.getName()     // &#39;写代码像蔡徐抻&#39;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原型继承的缺点:</strong></p><p>由于所有Child实例原型都指向同一个Parent实例, 因此对某个Child实例的父类引用类型变量修改会影响所有的Child实例 在创建子类实例时无法向父类构造传参, 即没有实现super()的功能</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`// 示例:
function Parent() {
    this.name = [&#39;写代码像蔡徐抻&#39;] 
}
Parent.prototype.getName = function() {
    return this.name
}
function Child() {}

Child.prototype = new Parent()
Child.prototype.constructor = Child 

// 测试
const child1 = new Child()
const child2 = new Child()
child1.name[0] = &#39;foo&#39;
console.log(child1.name)          // [&#39;foo&#39;]
console.log(child2.name)          // [&#39;foo&#39;] (预期是[&#39;写代码像蔡徐抻&#39;], 对child1.name的修改引起了所有child实例的变化)\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-构造函数继承" tabindex="-1"><a class="header-anchor" href="#二-构造函数继承" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a><strong>二. 构造函数继承</strong></h2>`,5),h={href:"https://so.csdn.net/so/search?q=%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`function Parent(name) {
    this.name = [name]
}
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    Parent.call(this, &#39;zhangsan&#39;)   // 执行父类构造方法并绑定子类的this, 使得父类中的属性能够赋到子类的this上
}

//测试
const child1 = new Child()
const child2 = new Child()
child1.name[0] = &#39;foo&#39;
console.log(child1.name)          // [&#39;foo&#39;]
console.log(child2.name)          // [&#39;zhangsan&#39;]
child2.getName()                  // 报错,找不到getName(), 构造函数继承的方式继承不到父类原型上的属性和方法\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>构造函数继承的缺点:</strong></p><p>继承不到父类原型上的属性和方法</p><h2 id="三-组合式继承" tabindex="-1"><a class="header-anchor" href="#三-组合式继承" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a><strong>三. 组合式继承</strong></h2><p>既然原型链继承和构造函数继承各有互补的优缺点, 那么我们为什么不组合起来使用呢, 所以就有了综合二者的组合式继承</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`function Parent(name) {
    this.name = [name]
}
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    // 构造函数继承
    Parent.call(this, &#39;zhangsan&#39;) 
}
//原型链继承
Child.prototype = new Parent()
Child.prototype.constructor = Child

//测试
const child1 = new Child()
const child2 = new Child()
child1.name[0] = &#39;foo&#39;
console.log(child1.name)          // [&#39;foo&#39;]
console.log(child2.name)          // [&#39;zhangsan&#39;]
child2.getName()                  // [&#39;zhangsan&#39;]\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组合式继承的缺点:</strong></p><p>每次创建子类实例都执行了两次构造函数(Parent.call()和new Parent())，虽然这并不影响对父类的继承，但子类创建实例时，原型中会存在两份相同的属性和方法，这并不优雅</p><p>**</p><h2 id="四-寄生式组合继承" tabindex="-1"><a class="header-anchor" href="#四-寄生式组合继承" aria-hidden="true">#</a> <a href="#"></a><a href="#"></a>四. 寄生式组合继承</h2><p>** 为了解决构造函数被执行两次的问题, 我们将指向父类实例改为指向父类原型, 减去一次构造函数的执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`\`function Parent(name) {
    this.name = [name]
}
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    // 构造函数继承
    Parent.call(this, &#39;zhangsan&#39;) 
}
//原型链继承
// Child.prototype = new Parent()
Child.prototype = Parent.prototype  //将\`指向父类实例\`改为\`指向父类原型\`
Child.prototype.constructor = Child

//测试
const child1 = new Child()
const child2 = new Child()
child1.name[0] = &#39;foo&#39;
console.log(child1.name)          // [&#39;foo&#39;]
console.log(child2.name)          // [&#39;zhangsan&#39;]
child2.getName()                  // [&#39;zhangsan&#39;]\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但这种方式存在一个问题，由于子类原型和父类原型指向同一个对象，我们对子类原型的操作会影响到父类原型，例如给Child.prototype增加一个getName()方法，那么会导致Parent.prototype也增加或被覆盖一个getName()方法，为了解决这个问题，我们给Parent.prototype做一个浅拷贝</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`\`function Parent(name) {
    this.name = [name]
}
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    // 构造函数继承
    Parent.call(this, &#39;zhangsan&#39;) 
}
//原型链继承
// Child.prototype = new Parent()
Child.prototype = Object.create(Parent.prototype)  //将\`指向父类实例\`改为\`指向父类原型\`
Child.prototype.constructor = Child

//测试
const child = new Child()
const parent = new Parent()
child.getName()                  // [&#39;zhangsan&#39;]
parent.getName()                 // 报错, 找不到getName()\`\` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里我们就完成了ES5环境下的继承的实现，这种继承方式称为寄生组合式继承，是目前最成熟的继承方式，babel对ES6继承的转化也是使用了寄生组合式继承 我们回顾一下实现过程： 一开始最容易想到的是原型链继承，通过把子类实例的原型指向父类实例来继承父类的属性和方法，但原型链继承的缺陷在于对子类实例继承的引用类型的修改会影响到所有的实例对象以及无法向父类的构造方法传参。 因此我们引入了构造函数继承, 通过在子类构造函数中调用父类构造函数并传入子类this来获取父类的属性和方法，但构造函数继承也存在缺陷，构造函数继承不能继承到父类原型链上的属性和方法。 所以我们综合了两种继承的优点，提出了组合式继承，但组合式继承也引入了新的问题，它每次创建子类实例都执行了两次父类构造方法，我们通过将子类原型指向父类实例改为子类原型指向父类原型的浅拷贝来解决这一问题，也就是最终实现 —— 寄生组合式继承</p><img width="962" height="667" src="`+c+'" class="jop-noMdConv">',16);function p(g,f){const s=a("ExternalLinkIcon");return r(),t("div",null,[o,n("p",null,[n("a",m,[e("原型链"),d(s)]),e("继承的原理很简单，直接让子类的原型对象指向父类实例，当子类实例找不到对应的属性和方法时，就会往它的原型对象，也就是父类实例上找，从而实现对父类的属性和方法的继承")]),u,n("p",null,[n("a",h,[e("构造函数"),d(s)]),e("继承，即在子类的构造函数中执行父类的构造函数，并为其绑定子类的this，让父类的构造函数把成员属性和方法都挂到子类的this上去，这样既能避免实例之间共享一个原型实例，又能向父类构造方法传参")]),b])}const x=l(v,[["render",p],["__file","ES5ruheshixianjicheng（fumeizhongjichengfangshiyouquedian）.html.vue"]]);export{x as default};
