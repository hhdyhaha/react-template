import { Menu, Layout } from 'antd';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const { Header } = Layout;

export interface MenuItemType {
  key: string;
  label: string;
}

const HeaderPage: React.FC = () => {
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
  );
};

export default HeaderPage;