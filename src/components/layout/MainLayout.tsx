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
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo" style={{ width: 120, height: 31, margin: '16px 24px 16px 0', background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[current]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        React Template ©{new Date().getFullYear()} Created with Vite
      </Footer>
    </Layout>
  )
}

export default MainLayout 