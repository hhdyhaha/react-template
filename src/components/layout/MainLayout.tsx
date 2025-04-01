import { Layout } from 'antd'
import React from 'react'
import HeaderPage from '@/components/layout/HeaderPage'
import ContentPage from '@/components/layout/ContentPage'
import FooterPage from '@/components/layout/FooterPage'

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