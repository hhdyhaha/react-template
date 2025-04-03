import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '@/App';
import MainLayout from '@/components/layout/MainLayout';

// 懒加载页面组件
const Home = lazy(() => import('@/pages/Home/index'));
const Login = lazy(() => import('@/pages/Login/index'));
const Dashboard = lazy(() => import('@/pages/Dashboard/index'));
const NotFound = lazy(() => import('@/pages/NotFound/index'));

// 加载组件
const LazyLoad = (Component: React.LazyExoticComponent<React.ComponentType<any>>) => (
  <Suspense fallback={<div>加载中...</div>}>
    <Component />
  </Suspense>
);

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
            element: LazyLoad(Home),
          },
          {
            path: 'login',
            element: LazyLoad(Login),
          },
          {
            path: 'dashboard',
            element: LazyLoad(Dashboard),
          },
          {
            path: '*',
            element: LazyLoad(NotFound),
          },
        ],
      },
    ],
  },
];

// 创建路由器
const router = createBrowserRouter(routes);

export default router; 