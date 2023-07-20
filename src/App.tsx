import React from 'react';

import './App.css';
import LeftMenu from './components/LeftMenu';
import { Outlet } from "react-router-dom";
import RightMenu from './components/RightMenu';


function App() {
  return (
    <div className="App">
      <LeftMenu />
      <main id="content">
        <Outlet />
      </main>
      <RightMenu />
    </div>
  );
}

export default App;
