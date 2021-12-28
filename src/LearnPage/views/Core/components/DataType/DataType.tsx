import React from 'react';
import { Divider, Tag, Space } from 'antd'
import Highlight from 'react-highlight'
function DataType() {
  return (
    <div style={{ padding: 20 }}>
      <h3>数据类型</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
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
      <p >0.文档地址:<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures</a></p>
      <p >1.Number包括:64位双精度浮点数(范围-(2^53 -1) 到 2^53 -1)和三个符号值:+infinity/-infinity/NaN(Not a Number)</p>
      <p >2.使用Number.isFinite()函数检查其参数是否为有限数值(finite number),当参数为+Infinity,-Infinity,NaN时返回false</p>
      <p ><a href="https://zh.wikipedia.org/wiki/IEEE_754" target="_blank">3.IEEE二进制浮点数算术标准（IEEE 754）</a></p>
      <p >4.使用Number.isSafeInteger()检查number是否在双精度浮点数的范围内</p>
      <p >5.超出safe integer的大数用BigInt</p>
      <p >6.双精度二进制浮点数的存储表现为:一个符号位,11个指数偏移位,52个有效数字位,固定指数偏移位为:2^10-1 (1023)</p>
      <p >7.查看存储表现的工具:<a href="http://bartaz.github.io/ieee754-visualization/" target="_blank">http://bartaz.github.io/ieee754-visualization/</a></p>

      <iframe
        style={{ width: '100%', height: 600 }}
        scrolling="no"
        title="jsdatatype"
        frameBorder='0'
        src="https://codepen.io/dagedan/embed/ZEJKMZg?default-tab=js%2Cresult&editable=true&theme-id=dark"
        loading="lazy">
        See the Pen
        <a href="https://codepen.io/dagedan/pen/ZEJKMZg">jsdatatype</a> by 越南小商贩 (<a href="https://codepen.io/dagedan">@dagedan</a>)on <a href="https://codepen.io">CodePen</a>.
      </iframe>
      <Highlight className='javascript'>{`
        const allBaseType = "number string boolean undefined null bigint symbol"

        /*--------------- Number -----------------*/

        // Number包括:64位双精度浮点数(范围-(2^53 -1) 到 2^53 -1)和三个符号值:+infinity/-infinity/NaN(Not a Number)
        // 使用Number.isFinite()函数检查其参数是否为有限数值(finite number),当参数为+Infinity,-Infinity,NaN时返回false
        // 使用Number.isSafeInteger()检查number是否在双精度浮点数的范围内
        // 双精度二进制浮点数的存储表现为:一个符号位,11个指数偏移位,52个有效数字位,固定指数偏移位为:2^10-1 (1023)

        /*----------------------------------------*/


        /*--------------- String / Array -----------------*/

        /* push/pop/shift/unshift/splice/slice/join/copyWithin/
        concat/every/some/find/findIndex/entries/values/keys/filter/
        foreach/sort/reverse/fill/flat/flatMap/includes/map/reduce/
        reduceRight/isArray/from/of) */

        /*---------------- splice ------------------------*/
        // array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
        // 返回被替换的元素的数组
        const arr = [1,2,3,4,5];
        arr.splice(0, 5, '我', '是', '你', '爸', '爸'); //arr变为['我','是','你','爸','爸'],返回[1,2,3,4,5]

        /*---------------- slice ------------------------*/
        // array.slice([begin[, end]])
        // 返回起始位置到终止位置的数组浅拷贝
        const arr = [1,2,3,4,5];
        arr.slice(0,2); // [1,2]

        /*---------------- join ------------------------*/
        // array.join([separator])
        // 数组转字符串
        const arr = [1,2,3,4,5];
        arr.join('-'); // 1-2-3-4-5

        /*---------------- copyWithin/fill ------------------------*/
        // array.copyWithin(target[, start[, end]])
        // copyWithin(p1,p2,p3)将p2-p3这段,复制到p1位置覆盖.
        // fill(p1,p2,p3)将p2-p3这段,用p1填充
        const arr = [1,2,3,4,5];
        arr.join('----');

        /*---------------- every/some ------------------------*/
        // arr.every(callback(element[, index[, array]])[, thisArg])
        // every 每一项callback都为true,some至少一项为true


        /*---------------- flat/flatMap ------------------------*/
        // flat(depth) 拉平数组,depth是嵌套数组的层数,默认为1层
        // flatMap几乎等同于flat + map


        /*---------------- includes ------------------------*/
        // arr.includes(valueToFind[, fromIndex])
        // arr.includes(p1,p2)p2处查找p1是否包含在数组中


        /*---------------- Array.from ------------------------*/
        // Array.from(arrayLike[, mapFn[, thisArg]])
        // 创建一个数组的浅拷贝
        // Array.from('123', i => i**20)  [1, 1048576, 3486784401]
        // arr.includes(p1,p2)p2处查找p1是否包含在数组中


        /*---------------- Array.of和Array ------------------------*/
        // Array(p1) 创建p1个empty组成的数组,长度为p1
        
        // Array.of(element0[, element1[, ...[, elementN]]])
        // Array.of(p1) 创建[p1]


        /*---------------- reduce ------------------------*/
        // arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
        // 为数组中的每一个元素一次执行callback,最终返回一个值

        /*--------------- ArrayBuffer/typedArray/DataView -----------------*/

        /* 二进制数组的存在跟webgl的性能有关,为了提升浏览器跟显卡的交互性能 */
        /* ArrayBuffer不能直接操作,需要通过数据视图(DataView/typedArray)操作 */

        /*----------------------------------------*/


        /*--------------- Symbol -----------------*/

        /* 用来作为唯一键值 */
        const key = Symbol.for('uid')
        const obj = {
          [key]: 123123123
        }
        console.log(obj[key])
    

        /*----------------------------------------*/



    `}</Highlight>
      <h2>3.二进制数组:ArrayBuffer/typedArray/DataView</h2>
      <p >0.文档地址:<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" target="_blank">ArrayBuffer</a>/<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" target="_blank">typedArray和DataView</a></p>
      <p >1.二进制数组的存在跟webgl的性能有关,为了提升浏览器跟显卡的交互性能</p>
      <p >2.ArrayBuffer不能直接操作,需要通过数据视图(DataView/typedArray)操作</p>

    </div>
  );
}

export default DataType;
