import React from "react";
import queryString from 'query-string';
import { changeHashTag } from '../store/dataSource'
import NavBar from '../components/NavBar'
import Core from './Core'
import Tools from './Tools'

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom";

interface Props { }

function Frame() {
  return <h2>Frame</h2>;
}

function ReactPage() {
  return <h2>React</h2>;
}
function VuePage() {
  return <h2>Vue</h2>;
}
function Browser() {
  return <h2>Browser</h2>;
}
function Performance() {
  return <h2>Performance</h2>;
}
function Micro() {
  return <h2>Micro</h2>;
}
function Other() {
  return <h2>Other</h2>;
}
export default function Main({ }: Props): React.ReactElement {
  const hash = queryString.parseUrl(location.href, { parseFragmentIdentifier: true });
  changeHashTag(String(hash.fragmentIdentifier))
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <NavBar></NavBar>
        <Routes>
          <Route path="/LearnPage/home/*" element={<Core />}>
          </Route>
          <Route path="/LearnPage/frame" element={<Frame />}>
          </Route>
          <Route path="/LearnPage/react" element={<ReactPage />}>
          </Route>
          <Route path="/LearnPage/vue" element={<VuePage />}>
          </Route>
          <Route path="/LearnPage/browser" element={<Browser />}>
          </Route>
          <Route path="/LearnPage/performance" element={<Performance />}>
          </Route>
          <Route path="/LearnPage/micro" element={<Micro />}>
          </Route>
          <Route path="/LearnPage/tool" element={<Tools />}>
          </Route>
          <Route path="/LearnPage/other" element={<Other />}>
          </Route>
          {/* <Route path="/LearnPage/home" element={<Navigate to="/" />}>
          </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
