import React from 'react';
import { Divider, Tag, Space } from 'antd'
import ExecutionStrack from './assets/excutionstrack.png'
import Env from './assets/env.png'
import Way from './assets/way.png'
import styles from './Closure.module.css'
function BasePointClosure() {
  return (
    <div style={{ padding: 20 }}>
      <h3>执行栈 (Excution Strack)</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
      <article><strong>1</strong>.执行栈,其他语言中也称为调用栈.是存储代码执行时的所有执行上下文的一个抽象概念.</article>
      <article><strong>2</strong>.js引擎第一次遇到脚本时,会创建一个全局的执行上下文,并压入栈顶.当引擎遇到函数调用时,会创建函数的执行上下文,并压入栈顶.</article>
      <article><strong>3</strong>.js引擎会从栈顶开始执行被压入的执行上下文,当函数执行完毕后,执行上下文从栈顶弹出(先进后出LIFO).</article>
      <article><strong>4</strong>.下图展示了执行上下文压入执行栈顶和弹出执行栈顶的过程,可以明确结论:开始创建Global Execution Context并入栈,遇函数调用创建Function Execution Context,并压入栈顶,执行完毕后从执行栈中弹出,层层往下,直到全局执行上下文弹出执行栈为止. </article>
      <img src={ExecutionStrack} className={styles.img} alt="" />
      <br />
      <br />
      <h3>执行上下文 (Excution context)</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
      <article><strong>1</strong>.执行上下文,简单讲:执行上下文是javascript执行环境的抽象概念.</article>
      <article><strong>2</strong>.执行上下文:全局/函数/eval.</article>
      <article><strong>3</strong>.执行上下文中包含了词法环境/this绑定.</article>
      <br />
      <br />
      <h3>环境记录 (Environment Records)</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
      <article><strong>1</strong>.环境记录的作用,简单讲:基于代码词法嵌套结构来定义标识符与变量或函数之间的关联.</article>
      <article><strong>2</strong>.通俗的理解:当代码中出现某个标识,那么这个标识肯定代表了某个函数或者变量,Environment Records就用来记录这种对应关系.</article>
      <article><strong>3</strong>.执行上下文和词法环境<span style={{ color: 'red' }}>并非一一对应的</span>.</article>
      <article><strong>4</strong>.模块、函数声明、代码块、catch语句、with都会创建新的词法环境.</article>
      <article><strong>5</strong>.下图以抽象类的形式记录了环境记录的类型:</article>
      <img src={Env} className={styles.img} alt="" />
      <article><strong>6</strong>.ECMAscript规范中,抽象类(Environment Record)具体要实现的抽象方法如下(各个记录器实现方法略有差异详见<a href="https://262.ecma-international.org/#sec-environment-records" target={'_blank'}>ECMA</a>或者<a href="https://juejin.cn/post/6976079380149698596" target={'_blank'}>稀土掘金</a>上的翻译):</article>
      <img src={Way} className={styles.img} alt="" />
      <br />
      <br />
      <h3>闭包 (Cloure)</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
      <article><strong>1</strong>.<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures" target={'_blank'}>MDN</a>上的解释:函数跟他外部词法环境绑定(或者说函数被引用包围),这样的组合叫闭包.</article>
      <article><strong>2</strong>.闭包的作用:用来作为函数工厂/创造私有变量或方法,下面的示例呈现了闭包最简单的用法</article>
      <iframe height="300" style={{ width: '100%', height: 400 }} scrolling="no" title="closure" src="https://codepen.io/dagedan/embed/Vwzobqy?default-tab=js" frameBorder="no" loading="lazy">
        See the Pen <a href="https://codepen.io/dagedan/pen/Vwzobqy">
          closure</a> by 越南小商贩 (<a href="https://codepen.io/dagedan">@dagedan</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
      <br />
      <br />
    </div>
  );
}

export default BasePointClosure;
