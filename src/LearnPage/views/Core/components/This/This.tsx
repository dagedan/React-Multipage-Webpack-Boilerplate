import React from 'react';
import { Divider, Tag, Space } from 'antd'

function BasePointThis() {
  return (
    <div style={{ padding: 20 }}>
      <h3>this</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
      <p>1.大多数情况下,函数的调用方式决定了this的值(运行时绑定),执行期间不允许给this赋值,每次函数调用时this的值也有可能不同.</p>
      <p>2.箭头函数不提供自身的this绑定,es5新增了bind方法设置this的值,而不用考虑函数如何被调用的.</p>
      <p>3.<a href="https://segmentfault.com/a/1190000011194676" target="_blank">关于this的显式绑定,隐式绑定,new绑定,默认绑定,箭头函数绑定的教学</a></p>
      <iframe style={{ width: '100%', height: 450 }} scrolling="no" title="Untitled" src="https://codepen.io/dagedan/embed/WNEJwgx?default-tab=js&editable=true&theme-id=dark" frameBorder="no" loading="lazy">
        See the Pen <a href="https://codepen.io/dagedan/pen/WNEJwgx">
          Untitled</a> by 越南小商贩 (<a href="https://codepen.io/dagedan">@dagedan</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  );
}

export default BasePointThis;
