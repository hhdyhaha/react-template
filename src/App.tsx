import React from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '@/components/Loading';
import './App.css';

/**
 * App组件只负责渲染路由
 */
const App: React.FC = () => {
  return (
    <>
      <Loading />
      <Outlet />
    </>
  );
};

export default App;
