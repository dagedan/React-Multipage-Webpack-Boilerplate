export const coreMenu = [
  {
    title: '数据类型',
    key: 'datatype',
    children: [
      { title: '数据类型', key: 'datatype', path: 'datatype' },
      { title: '类型转化', key: 'conversion', path: 'conversion' },
      { title: '类型判断', key: 'judgment', path: 'judgment' }
    ]
  },
  {
    title: '基础概念',
    key: 'base',
    children: [
      { title: 'this', key: 'this', path: 'this' },
      { title: '闭包(Closure)', key: 'closure', path: 'closure' },
      { title: '词法环境(Lexical)', key: 'lexical', path: 'lexical' },
      { title: '变量提升(Hoisting)', key: 'hoisting', path: 'hoisting' }
    ]
  },
  {
    title: '经常混淆',
    key: 'garble',
    children: [
      { title: 'new', key: 'new', path: 'new' },
      { title: 'call/apply/bind', key: 'cab', path: 'cab' },
      { title: '原型', key: 'prototype', path: 'prototype' },
      { title: 'class', key: 'class', path: 'class' },
      { title: '继承', key: 'extand', path: 'extand' },
      { title: '模块化', key: 'module', path: 'module' },
    ]
  },
  {
    title: '开发常用',
    key: 'dev',
    children: [
      { title: 'promise/async/await', key: 'promise', path: 'promise' },
      { title: 'Iterator/Generator', key: 'dev2', path: 'iterator' },
      { title: 'Proxy/Reflect', key: 'proxy', path: 'proxy' },
    ]
  },
  {
    title: '理论知识储备',
    key: 'theory',
    children: [
      { title: '事件循环', key: 'event', path: 'event' },
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