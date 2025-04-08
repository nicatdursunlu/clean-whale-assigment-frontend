import { Navigate, Outlet, useLocation } from 'react-router'
import { FC } from 'react'

const PrivateRoute: FC = () => {
  const token = localStorage.getItem('accessToken')
  const location = useLocation()

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default PrivateRoute
