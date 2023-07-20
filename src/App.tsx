import React from 'react';

import './App.css';
import LeftMenu from './components/LeftMenu';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './page-components/Index';
import RightMenu from './components/RightMenu';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  }
])

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <main id="content">
        <RouterProvider router={router} />
      </main>
      <RightMenu />
    </div>
  );
}

export default App;
