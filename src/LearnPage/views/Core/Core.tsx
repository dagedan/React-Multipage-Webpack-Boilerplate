import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'
// import styles from './Core.module.css'
import { useStore } from 'effector-react'
import { LeftDrawerLayout } from './components/Layout'
import SideMenu from './components/SideMenu';
import DataType from './components/DataType';
import Conversion from './components/Conversion';
import Judgment from './components/Judgment';
import This from './components/This';
import Closure from './components/Closure';
import Lexical from './components/Lexical';
import Hoisting from './components/Hoisting';
import New from './components/New';
import Cab from './components/Cab';
import Prototype from './components/Prototype';
import Class from './components/Class';
import Extand from './components/Extand';
import Module from './components/Module';
import PromisePage from './components/PromisePage';
import Iterator from './components/Iterator';
import EventLoop from './components/EventLoop';
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
        <Route path="conversion" element={<Conversion />} />
        <Route path="judgment" element={<Judgment />} />
        <Route path="this" element={<This />} />
        <Route path="closure" element={<Closure />} />
        <Route path="lexical" element={<Lexical />} />
        <Route path="hoisting" element={<Hoisting />} />
        <Route path="new" element={<New />} />
        <Route path="cab" element={<Cab />} />
        <Route path="prototype" element={<Prototype />} />
        <Route path="class" element={<Class />} />
        <Route path="extand" element={<Extand />} />
        <Route path="module" element={<Module />} />
        <Route path="promise" element={<PromisePage />} />
        <Route path="iterator" element={<Iterator />} />
        <Route path="event" element={<EventLoop />} />
      </Route>
    </Routes>
  );
}

export default Core;
