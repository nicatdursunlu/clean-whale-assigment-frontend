import { Avatar, Dropdown, Grid, Layout, MenuProps } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { FC } from 'react'

import { logOut } from 'store/features/auth.slice'
import { useAppDispatch } from 'hooks/store'

const Header: FC = () => {
  const { useBreakpoint } = Grid
  const screens = useBreakpoint()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logOut())
    navigate('/login')
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Log out',
      icon: <ArrowRightOutlined className="w-4 h-4" />,
      onClick: handleLogout,
    },
  ]

  return (
    <Layout.Header className="py-0 !px-4 !bg-white sticky top-0 z-10 w-full flex items-center justify-end border-b-[0.1px] border-b-gray-300">
      <Dropdown menu={{ items }} placement="bottom" trigger={['click']}>
        <div className="cursor-pointer">
          <Avatar
            className="bg-primary !mr-2 align-middle"
            size={screens.xs ? 'default' : 'large'}
          >
            <span>ND</span>
          </Avatar>
          {!screens.xs && (
            <span className="text-base font-medium">Nijat Dursunlu</span>
          )}
        </div>
      </Dropdown>
    </Layout.Header>
  )
}

export default Header
