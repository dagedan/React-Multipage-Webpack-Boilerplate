export const coreMenu = [
  {
    title: '数据类型',
    key: 'datatype',
    children: [
      { title: '数据类型', key: 'datatype1', path: 'datatype' },
      { title: '类型转化', key: 'datatype2', path: 'conversion' },
      { title: '类型判断', key: 'datatype3', path: 'judgment' }
    ]
  },
  {
    title: '基础概念',
    key: 'base',
    children: [
      { title: 'this', key: 'base1', path: 'this' },
      { title: '闭包(Closure)', key: 'base2', path: 'closure' },
      { title: '词法环境(Lexical)', key: 'base3', path: 'datatype1' },
      { title: '变量提升(Hoisting)', key: 'base4', path: 'datatype1' }
    ]
  },
  {
    title: '经常混淆',
    key: 'garble',
    children: [
      { title: 'new', key: 'garble1', path: 'datatype1' },
      { title: 'call/apply/bind', key: 'garble2', path: 'datatype1' },
      { title: '原型', key: 'garble3', path: 'datatype1' },
      { title: 'class', key: 'garble4', path: 'datatype1' },
      { title: '继承', key: 'garble5', path: 'datatype1' },
      { title: '模块化', key: 'garble6', path: 'datatype1' },
    ]
  },
  {
    title: '开发常用',
    key: 'dev',
    children: [
      { title: 'promise', key: 'dev1', path: 'datatype1' },
      { title: '迭代器生成器', key: 'dev2', path: 'datatype1' },
      { title: 'async/await', key: 'dev3', path: 'datatype1' },
    ]
  },
  {
    title: '理论知识储备',
    key: 'theory',
    children: [
      { title: '事件循环', key: 'theory1', path: 'datatype1' },
      { title: '节流和防抖', key: 'theory2', path: 'datatype1' },
      { title: '柯里化', key: 'theory3', path: 'datatype1' },
      { title: '垃圾回收', key: 'theory4', path: 'datatype1' },
      { title: '设计模式', key: 'theory5', path: 'datatype1' },
      { title: '其他知识点', key: 'theory6', path: 'datatype1' },
    ]
  },
  {
    title: 'HTML',
    key: 'html',
    children: [
      { title: '语义化', key: 'html1', path: 'datatype1' },
    ]
  },
  {
    title: 'CSS',
    key: 'css',
    children: [
      { title: '盒子模型', key: 'css1', path: 'datatype1' },
      { title: '选择器', key: 'css2', path: 'datatype1' },
      { title: 'flex', key: 'css3', path: 'datatype1' },
      { title: 'grid', key: 'css4', path: 'datatype1' },
      { title: '其他', key: 'css5', path: 'datatype1' },
    ]
  },
]