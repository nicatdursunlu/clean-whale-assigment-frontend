import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'
import { FC } from 'react'

import Header from './Header'

const Layouts: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className="!bg-white !min-h-screen">
      <Layout className={`transition-all duration-300`}>
        <Header />
        <Content style={{ background: colorBgContainer }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Layouts
