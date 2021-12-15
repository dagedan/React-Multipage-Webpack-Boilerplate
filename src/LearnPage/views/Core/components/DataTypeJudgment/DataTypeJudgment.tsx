import React from 'react';
import {Divider, Tag, Space} from 'antd'
function DataTypeJudgment() {
  return (
    <div style={{padding: 20}}>
      <h3>类型判断</h3>
      <Divider plain style={{marginTop: 0}}></Divider>
      <h2>1.直接类型判断:Number/Boolean/String/Array/Function/Date/RegExp/Symbol/Error/Null/Undefined</h2>
     
      <iframe style={{width: '100%', height: 450}} scrolling="no" title="datatypeJudgment" src="https://codepen.io/dagedan/embed/PoKePZN?default-tab=js&editable=true&theme-id=dark" frameBorder="no" loading="lazy">
        See the Pen <a href="https://codepen.io/dagedan/pen/PoKePZN">
        datatypeJudgment</a> by 越南小商贩 (<a href="https://codepen.io/dagedan">@dagedan</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
      <h2>2.复杂类型判断:isElementObj/isEmptyObj/isPlainObj/isWindowObj/isArrayLike</h2>
      <iframe style={{width:'100%', height: 450}} scrolling="no" title="complexDatatypeJudgment" src="https://codepen.io/dagedan/embed/yLojeyZ?default-tab=js&editable=true&theme-id=dark" frameBorder="no" loading="lazy">
        See the Pen <a href="https://codepen.io/dagedan/pen/yLojeyZ">
        complexDatatypeJudgment</a> by 越南小商贩 (<a href="https://codepen.io/dagedan">@dagedan</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  );
}

export default DataTypeJudgment;
