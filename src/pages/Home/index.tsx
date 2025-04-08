import { useAppSelector } from 'hooks/store'
import { FC } from 'react'

const Home: FC = () => {
  const { user } = useAppSelector((state) => state.auth)
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-xl font-bold">Hello, {user.email}</h1>
    </div>
  )
}

export default Home
