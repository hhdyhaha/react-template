import { Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const { Header, Content, Footer } = Layout

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 根据当前路径确定选中的菜单项
  const getSelectedKey = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/dashboard')) return 'dashboard';
    if (path.startsWith('/login')) return 'login';
    return '';
  };
  
  const [current, setCurrent] = useState(getSelectedKey);

  const menuItems = [
    { key: 'home', label: '首页' },
    { key: 'dashboard', label: '仪表盘' },
    { key: 'login', label: '登录' },
  ];

  const handleMenuClick = (e: { key: string }) => {
    setCurrent(e.key);
    navigate(e.key === 'home' ? '/' : `/${e.key}`);
  };

  return (
    <Layout className="app-layout">
      <Header className="flex items-center !bg-white">
        <div className="logo w-[120px] h-[31px] mr-6 my-4 bg-gray-300" />
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[current]}
          items={menuItems}
          onClick={handleMenuClick}
          className="flex-1 min-w-0"
        />
      </Header>
      <Content className="px-[50px] mt-2">
        <div className="bg-white p-6 min-h-[380px]">
          <Outlet />
        </div>
      </Content>
      <Footer className="text-center">
        React Template ©{new Date().getFullYear()} Created with Vite
      </Footer>
    </Layout>
  )
}

export default MainLayout 