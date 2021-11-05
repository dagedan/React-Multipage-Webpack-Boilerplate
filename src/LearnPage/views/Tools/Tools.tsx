import React from 'react';
import { List } from 'antd';
import styles from './Tools.module.css';
const data = [
  {
    title: '查看双精度浮点数的内存',
    url: 'http://bartaz.github.io/ieee754-visualization/',
    des: 'http://bartaz.github.io/ieee754-visualization/'
  },
  {
    title: '给不易命名的变量查找一个合适的命名',
    url: 'https://unbug.github.io/codelf/',
    des: 'https://unbug.github.io/codelf/'
  },
  {
    title: '在线图片无损压缩',
    url: 'https://tinypng.com/',
    des: 'https://tinypng.com/'
  },
];
function Tools() {
  return (
    <div className={styles.container}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href={item.url} target="_blank">{item.title}</a>}
              description={item.des}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Tools;
