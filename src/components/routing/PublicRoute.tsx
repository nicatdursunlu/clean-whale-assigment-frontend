import { Navigate, Outlet, useLocation } from 'react-router'
import { FC } from 'react'

const PublicRoute: FC = () => {
  const token = localStorage.getItem('accessToken')
  const location = useLocation()

  return token ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  )
}

export default PublicRoute
