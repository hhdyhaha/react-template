import { Layout } from 'antd'
import React from 'react'
import HeaderPage from './HeaderPage'
import ContentPage from './ContentPage'
import FooterPage from './FooterPage'

const MainLayout: React.FC = () => {
  return (
    <Layout className="app-layout flex flex-col !min-h-screen">
      <HeaderPage />
      <ContentPage />
      <FooterPage />
    </Layout>
  )
}

export default MainLayout 