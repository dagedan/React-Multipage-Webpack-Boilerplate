import React from "react";
import Home from './Home'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

interface Props { }

function About() {
  return <h2>About1</h2>;
}

function Users() {
  return <h2>
    <a href="/Page1">跳转到page1</a>
    <a href="/Page2">跳转到page2</a>
  </h2>;
}
export default function Main({ }: Props): React.ReactElement {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/IndexPage">Home</Link>
            </li>
            <li>
              <Link to="/IndexPage/about">About</Link>
            </li>
            <li>
              <Link to="/IndexPage/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/IndexPage/about" element={<About />}>
          </Route>
          <Route path="/IndexPage/users" element={<Users />}>
          </Route>
          <Route path="/IndexPage" element={<Home />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
