import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

/**
 * App组件只负责渲染路由
 */
function App() {
  return (
    <Outlet />
  );
}

export default App;
