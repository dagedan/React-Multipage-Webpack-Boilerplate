import React from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col } from 'antd';
import Expand from '../assets/expand.png'
import { toggle } from '../../store/dataSource'

import styles from './NavBar.module.css';

import { Desktop, Tablet, Mobile, Default } from '@/utils/responsive'
const menuList = [{
  to: '/LearnPage/home',
  name: '核心知识'
}, {
  to: '/LearnPage/frame',
  name: '框架'
}, {
  to: '/LearnPage/react',
  name: 'React'
}, {
  to: '/LearnPage/vue',
  name: 'Vue'
}, {
  to: '/LearnPage/browser',
  name: '浏览器'
}, {
  to: '/LearnPage/performance',
  name: '性能优化'
}, {
  to: '/LearnPage/micro',
  name: '微前端'
}, {
  to: '/LearnPage/tool',
  name: '生产力'
}, {
  to: '/LearnPage/other',
  name: '其他杂项'
},]
function NavBar() {
  return (
    <Desktop>
      <div>
        <Row style={{ display: 'flex' }} className={styles.nav}>
          <Col span={4} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: 20, marginRight: 10, fontSize: 20, fontWeight: 900 }}>知识体系</div>
            <img src={Expand} onClick={() => toggle()} alt="" className={styles.expand} />
          </Col>
          <Col flex={1}></Col>
          <Col>{
            menuList.map(i => {
              return <NavLink key={i.to} to={i.to} className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>{i.name} </NavLink>
            })
          }
          </Col>
        </Row>
      </div>
    </Desktop>
  );
}

export default NavBar;
