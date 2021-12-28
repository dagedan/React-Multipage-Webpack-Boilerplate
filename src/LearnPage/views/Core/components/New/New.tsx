import React from 'react';
import { Divider } from 'antd'
import Highlight from 'react-highlight'

function New() {
  return (
    <div style={{ margin: 20 }}>
      <h3>New</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
      <Highlight className='javascript'>{`
          const Foo = function (bar) {
            this.bar= bar
          }
          const tmp = new Foo('test')
          console.log(tmp)
          /*
            1.创建一个新的空对象{};
            2.设置步骤1创建的空对象的__proto__属性的值指向构建函数的原型(tmp.__proto__ == Foo.prototype);
            3.将步骤1创建的对象作为this的上下文;
            4.如果函数没有返回对象,则返回this;
          */ 
      `}</Highlight>
      <br />
      <br />
    </div>
  );
}

export default New;
