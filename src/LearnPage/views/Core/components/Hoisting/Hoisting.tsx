import React from 'react';
import { Divider } from 'antd'
import styles from '../../Core.module.css'

function BasePointHoisting() {
  return (
    <div style={{ padding: 20 }}>
      <h3>变量提升(Hoisting)</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
      <p><strong>1</strong>.let/const这种提升会造成暂时性死区TDZ(Temporal Dead Zone)而报错.</p>
      <p><strong>2</strong>.应该使用strict model杜绝变量提升.</p>
      <p><strong>3</strong>.函数声明的提升级别最高.</p>
      <p><strong>4</strong>.变量提升的面试题一般都很简单,这里就不啰嗦记录了.</p>
    </div>
  );
}

export default BasePointHoisting;
