import { Routes, Route } from 'react-router-dom'
import { FC, lazy, Suspense } from 'react'
import { Spin } from 'antd'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Layouts from 'components/layout'

const Login = lazy(() => import('pages/Login'))
const Home = lazy(() => import('pages/Home'))

const Routers: FC = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Spin size="large" />
        </div>
      }
    >
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<Layouts />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default Routers
