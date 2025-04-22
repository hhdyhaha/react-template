import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import App from '@/App';
import MainLayout from '@/components/layout/MainLayout';
import LazyLoad from '@/components/LazyLoad';

// 懒加载页面组件
const Home = lazy(() => import('@/pages/Home/index'));
const Login = lazy(() => import('@/pages/Login/index'));
const Dashboard = lazy(() => import('@/pages/Dashboard/index'));
const NotFound = lazy(() => import('@/pages/NotFound/index'));

// 路由配置
const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <LazyLoad Component={Home} />,
          },
          {
            path: 'login',
            element: <LazyLoad Component={Login} />,
          },
          {
            path: 'dashboard',
            element: <LazyLoad Component={Dashboard} />,
          },
          {
            path: '*',
            element: <LazyLoad Component={NotFound} />,
          },
        ],
      },
    ],
  },
];

// 创建路由器
const router = createBrowserRouter(routes, {
  basename: '/index'
});

export default router; 