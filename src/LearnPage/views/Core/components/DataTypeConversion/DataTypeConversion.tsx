import React from 'react';
import {Divider, Tag, Space} from 'antd'
function DataType() {
  return (
    <div style={{padding: 20}}>
      <h3>类型转化</h3>
      <Divider plain style={{marginTop: 0}}></Divider>
      <h2>1.==和===</h2>
      <p style={{color: '#ff4d4f'}}>0.<a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality">文档地址</a></p>
      <p style={{color: '#ff4d4f'}}>1.==与严格相等===不同,双等会进行隐式类型转换</p>
      <p style={{color: '#ff4d4f'}}>2.如果两个操作数都是对象,那么仅当两个对象指向同一个时才返回true</p>
      <p style={{color: '#ff4d4f'}}>3.null==undefined 返回true</p>
      <p style={{color: '#ff4d4f'}}>4.数字和字符串比较时会转化为数字</p>
      <p style={{color: '#ff4d4f'}}>5.其中一个操作数为boolean时会将boolean转化为0或者1</p>
      <p style={{color: '#ff4d4f'}}>6.如果操作数其中一个为对象另外一个为字符货数字时,会调用对象的valueOf和toString将对象转化为原始对象</p>
      <p style={{color: '#ff4d4f'}}>7.Boolean()/Number()/String()/parseInt()/parseFloat()</p>

      <iframe style={{width: '100%', height:400}} scrolling="no" title="Untitled" src="https://codepen.io/dagedan/embed/OJjzqqo?default-tab=js&editable=true&theme-id=dark" frameBorder="no" loading="lazy">
      See the Pen <a href="https://codepen.io/dagedan/pen/OJjzqqo">
      Untitled</a> by 越南小商贩 (<a href="https://codepen.io/dagedan">@dagedan</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>
    </div>
  );
}

export default DataType;
