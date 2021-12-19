import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'
// import styles from './Core.module.css'
import { useStore } from 'effector-react'
import { LeftDrawerLayout } from './components/Layout'
import SideMenu from './components/SideMenu';
import DataType from './components/DataType';
import DataTypeConversion from './components/DataTypeConversion';
import DataTypeJudgment from './components/DataTypeJudgment';
import BasePointThis from './components/BasePointThis';
import BasePointClosure from './components/BasePointClosure';
import BasePointLexical from './components/BasePointLexical';
import BasePointHoisting from './components/BasePointHoisting';
import { $isExpand } from '../../store/dataSource'

import { Desktop, Tablet, Mobile, Default } from '@/utils/responsive'
interface Children {
  id: string;
  y: number;
  offsetHeight: number;
}
function Core() {
  const expand = useStore($isExpand)
  return (
    <Routes>
      <Route path="/" element={<LeftDrawerLayout left={<SideMenu></SideMenu>} right={<Outlet />} expand={expand}></LeftDrawerLayout>}>
        <Route index element={<DataType />} />
        <Route path="datatype" element={<DataType />} />
        <Route path="conversion" element={<DataTypeConversion />} />
        <Route path="judgment" element={<DataTypeJudgment />} />
        <Route path="this" element={<BasePointThis />} />
        <Route path="closure" element={<BasePointClosure />} />
        <Route path="lexical" element={<BasePointLexical />} />
        <Route path="hoisting" element={<BasePointHoisting />} />
      </Route>
    </Routes>
  );
}

export default Core;
