import React from 'react';
import { Divider } from 'antd'
import Ger from './assets/ger.png'
import styles from '../../Core.module.css'

function BasePointLexical() {
  return (
    <div style={{ padding: 20 }}>
      <h3>词法环境(Lexical Environment)</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
      <p><strong>1</strong>.基于代码的词法嵌套结构,形成的环境.其中包括环境记录器(Environment Record)和外部词法环境的引用([outerEnv]).</p>
      <p><strong>2</strong>.词法环境等同于es6之前的"作用域",词法环境保存的[outerENV]形成的引用链等同于es6之前的作用域链.</p>
      <br />
      <br />
      <h3>全局环境记录器(Global Environment Record)</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
      <p><strong>1</strong>.全局词法环境下的记录器可以看做是对一个声明式环境记录和对象式环境记录的封装,表现如下:</p>
      <img src={Ger} alt="全局环境记录器的表现" className={styles.img} />
      <p><strong>2</strong>.查找记录器内部的变量定义时,优先查找声明式环境记录器中的记录.</p>
      <br />
      <br />
      <h3>对象式环境记录器(Object Environment Record)</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
      <p><strong>1</strong>.对象环境记录都关联一个Binding Object,这个Binding Object的属性名与记录器的标识符一一对应,由于所有对象的属性均可自由操作,所以对象环境记录的绑定均是可变的.</p>
      <br />
      <br />
      <h3>声明式环境记录器(declarative Environment Record)</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
      <p><strong>1</strong>.分为Function/module 环境记录器,均可理解为字面意思.注:1/箭头函数不提供本身的this绑定;2/import的所有模块的绑定都是只读的.因此我们可以直接访问引入的模块.</p>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default BasePointLexical;
