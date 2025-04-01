import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;

const FooterPage: React.FC = () => {
  return (
    <Footer className="text-center">
      React Template ©{new Date().getFullYear()} Created with Vite
    </Footer>
  );
};

export default FooterPage;