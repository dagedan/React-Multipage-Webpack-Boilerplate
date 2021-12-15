import React from 'react';
import {Divider, Tag, Space} from 'antd'

function BasePointClosure() {
  return (
    <div>
       <h3>执行上下文</h3>
        <Divider plain style={{marginTop: 0}}></Divider>
        <p style={{color: '#ff4d4f'}}>1.var/function声明创建在全局对象中,let const class声明创建在全局scope中</p>
        <p style={{color: '#ff4d4f'}}>2.现在全局scope中找,找不到再去全局对象中找</p>
        <p style={{color: '#ff4d4f'}}>3.函数在哪里创建,就保存在哪里的执行上下文中</p>

    </div>
  );
}

export default BasePointClosure;
