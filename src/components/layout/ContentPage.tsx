import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const ContentPage: React.FC = () => {
  return (
    <Content className="px-[50px] mt-2 flex-1">
      <div className="bg-white p-6 min-h-[380px]">
        <Outlet />
      </div>
    </Content>
  );
};

export default ContentPage;