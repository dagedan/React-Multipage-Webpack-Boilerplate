import React from 'react';
import {Divider, Tag, Space} from 'antd'
function DataType() {
  return (
    <div style={{padding: 20}}>
      <h3>数据类型</h3>
      <Divider plain style={{marginTop: 0}}></Divider>
      <Space>
        原始类型:
        <Tag>String</Tag>
        <Tag>Number</Tag>
        <Tag>Boolean</Tag>
        <Tag>Null</Tag>
        <Tag>Undefined</Tag>
        <Tag>BigInt</Tag>
        <Tag>Symbol</Tag>
      </Space>
      <br />
      <br />
      <Space>
        对象类型:
        <Tag>Objects</Tag>
      </Space>
      <br />
      <br />
      <h2>1.Number和BigInt</h2>
      <p style={{color: '#ff4d4f'}}>0.文档地址:<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures</a></p>
      <p style={{color: '#ff4d4f'}}>1.Number包括:64位双精度浮点数(范围-(2^53 -1) 到 2^53 -1)和三个符号值:+infinity/-infinity/NaN(Not a Number)</p>
      <p style={{color: '#ff4d4f'}}>2.使用Number.isFinite()函数检查其参数是否为有限数值(finite number),当参数为+Infinity,-Infinity,NaN时返回false</p>
      <p style={{color: '#ff4d4f'}}><a href="https://zh.wikipedia.org/wiki/IEEE_754" target="_blank">3.IEEE二进制浮点数算术标准（IEEE 754）</a></p>
      <p style={{color: '#ff4d4f'}}>4.使用Number.isSafeInteger()检查number是否在双精度浮点数的范围内</p>
      <p style={{color: '#ff4d4f'}}>5.超出safe integer的大数用BigInt</p>
      <p style={{color: '#ff4d4f'}}>6.双精度二进制浮点数的存储表现为:一个符号位,11个指数偏移位,52个有效数字位,固定指数偏移位为:2^10-1 (1023)</p>
      <p style={{color: '#ff4d4f'}}>7.查看存储表现的工具:<a href="http://bartaz.github.io/ieee754-visualization/" target="_blank">http://bartaz.github.io/ieee754-visualization/</a></p>
      
      <iframe 
        style={{width: '100%', height: 600}} 
        scrolling="no" 
        title="jsdatatype" 
        frameBorder='0'
        src="https://codepen.io/dagedan/embed/ZEJKMZg?default-tab=js%2Cresult&editable=true&theme-id=dark" 
        loading="lazy">
        See the Pen 
        <a href="https://codepen.io/dagedan/pen/ZEJKMZg">jsdatatype</a> by 越南小商贩 (<a href="https://codepen.io/dagedan">@dagedan</a>)on <a href="https://codepen.io">CodePen</a>.
      </iframe>
      <h2>2.Array</h2>
      <p style={{color: '#ff4d4f'}}>0.文档地址:<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array</a></p>
      <p style={{color: '#ff4d4f'}}>1.push:在数组的尾部添加一个或者几个元素,返回添加元素的最后一个,原数组会改变</p>
      <p style={{color: '#ff4d4f'}}>2.pop:数组尾部删除一个元素,返回被删除的元素,原数组会改变</p>
      <p style={{color: '#ff4d4f'}}>3.shift:删除数组的子一个元素,返回被删除的元素,原数组会改变</p>
      <p style={{color: '#ff4d4f'}}>4.unshift:在数组的起始位置添加一个元素,返回数组长度,原数组会改变</p>
      <p style={{color: '#ff4d4f'}}>5.splice:从数组的指定位置起删除固定长度的元素,返回被删除的元素,原数组会改变</p>
      <p style={{color: '#ff4d4f'}}>6.slice:指定起始位置和终止位置,复制一个数组,不传参时复制整个数组,原数组不会改变(可以用来截断字符串),不包括终止位置</p>
      <p style={{color: '#ff4d4f'}}>7.join:数组转字符串,参数为分割字符串</p>
      <p style={{color: '#ff4d4f'}}>8.copyWithin:复制数组的一部分到另外一部分(覆盖),数组的总长度不变</p>
      <p style={{color: '#ff4d4f'}}>9.concat:链接数组,返回一个新的数组(数组合并去重可以使用解构赋值的方式,例如:[...new Set([...a,...b])])</p>
      <p style={{color: '#ff4d4f'}}>10.every:返回一个boolean值,表示是否数组的每一项执行测试函数时,都返回true</p>
      <p style={{color: '#ff4d4f'}}>11.some:返回一个boolean值,表示至少有一个元素为true</p>
      <p style={{color: '#ff4d4f'}}>12.find/findIndex:返回满足测试函数的第一个值/第一个值的Index.若没有则返回undefined/-1</p>
      <p style={{color: '#ff4d4f'}}>13.entries/keys/values:跟Object的entries/keys/values差不多</p>
      <p style={{color: '#ff4d4f'}}>14.filter/foreach:过滤/遍历</p>
      <p style={{color: '#ff4d4f'}}>15.sort/reverse:排序和反转</p>
      <p style={{color: '#ff4d4f'}}>16.fill:用一个固定值填充,数组起始位置到终止位置的所有值</p>
      <p style={{color: '#ff4d4f'}}>17.flat/flatMap:指定层数的扁平化,默认为1层/映射每一个元素,然后将结果压缩成一个新数组</p>
      <p style={{color: '#ff4d4f'}}>18.includes:判断数组中是否包含指定值</p>
      <p style={{color: '#ff4d4f'}}>19.map/reduce/reduceRight:映射/升序执行reduce函数,汇总返回为一个值/接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值</p>
      <p style={{color: '#ff4d4f'}}>20.静态方法:isArray,from,of</p>

      <iframe height="300" style={{width: '100%',height: 600}} scrolling="no" title="array" src="https://codepen.io/dagedan/embed/JjyyRpQ?default-tab=js%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy">
        See the Pen <a href="https://codepen.io/dagedan/pen/JjyyRpQ">
        array</a> by 越南小商贩 (<a href="https://codepen.io/dagedan">@dagedan</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <h2>3.二进制数组:ArrayBuffer/typedArray/DataView</h2>
      <p style={{color: '#ff4d4f'}}>0.文档地址:<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" target="_blank">ArrayBuffer</a>/<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" target="_blank">typedArray和DataView</a></p>
      <p style={{color: '#ff4d4f'}}>1.二进制数组的存在跟webgl的性能有关,为了提升浏览器跟显卡的交互性能</p>
      <p style={{color: '#ff4d4f'}}>2.ArrayBuffer不能直接操作,需要通过数据视图(DataView/typedArray)操作</p>
      <h2>4.Symbol</h2>
      <p style={{color: '#ff4d4f'}}>0.<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol">文档地址</a></p>
      <p style={{color: '#ff4d4f'}}>待补充</p>

    </div>
  );
}

export default DataType;
