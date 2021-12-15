import React from 'react';
import { useToggle } from 'ahooks';
import { Routes, Route, Outlet } from 'react-router-dom'
import styles from './Core.module.css'
// import { useStore } from 'effector-react'
import { LeftDrawerLayout } from './components/Layout'
import SideMenu from './components/SideMenu';
import DataType from './components/DataType';
import DataTypeConversion from './components/DataTypeConversion';
import DataTypeJudgment from './components/DataTypeJudgment';
import BasePointThis from './components/BasePointThis';
import BasePointClosure from './components/BasePointClosure';

import { Desktop, Tablet, Mobile, Default } from '@/utils/responsive'
interface Children {
  id: string;
  y: number;
  offsetHeight: number;
}
function Core() {
  const [expand, { toggle }] = useToggle();
  return (
    <Routes>
      <Route path="/" element={<LeftDrawerLayout left={<SideMenu></SideMenu>} right={<Outlet />} expand={expand}></LeftDrawerLayout>}>
        <Route index element={<DataType />} />
        <Route path="datatype" element={<DataType />} />
        <Route path="conversion" element={<DataTypeConversion />} />
        <Route path="judgment" element={<DataTypeJudgment />} />
        <Route path="this" element={<BasePointThis />} />
        <Route path="closure" element={<BasePointClosure />} />
      </Route>
    </Routes>
  );
  // return (
  //   <div>
  //     <div className={styles.container}>
  //       <button className={styles.test} onClick={() => toggle()}>切换</button>
  //       <LeftDrawerLayout left={<SideMenu></SideMenu>} right={<Outlet />} expand={expand}></LeftDrawerLayout>
  //     </div>
  //   </div>
  // );
}

export default Core;
