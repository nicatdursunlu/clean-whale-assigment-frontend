import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd'
import { FC, useState } from 'react'

import { setAccessToken, setUserInfo } from 'store/features/auth.slice'
import useNotification from 'hooks/useNotification'
import { TLogInRequest } from 'types/auth.type'
import { logIn } from 'services/auth.service'
import { useAppDispatch } from 'hooks/store'

const Login: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { openNotification } = useNotification()

  const [form] = Form.useForm()

  const [loading, setLoading] = useState<boolean>(false)
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  const onFinish = async (form: TLogInRequest) => {
    console.log('form', form)

    try {
      setLoading(true)

      const { token, user } = await logIn(form)

      dispatch(setAccessToken(token))
      dispatch(setUserInfo(user))
      navigate('/')
    } catch (error: any) {
      console.log('error', error?.response?.data)
      openNotification({
        message: error?.response?.data?.key,
        description: error?.response?.data?.message,
        type: 'error',
        className: 'bg-red-200 rounded',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-2xl w-[90%] md:w-[60%] lg:w-[40%]">
        <div className="text-center mb-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
            Login
          </h1>
        </div>
        <Form
          name="login"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="flex flex-col gap-y-3 mb-2"
        >
          <Form.Item
            name="email"
            label="Email"
            className="mb-0"
            rules={[{ required: true, message: 'Email is required!' }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Password is required!' },
              { min: 8, message: 'Password must be minimum 8 characters!' },
            ]}
            label="Password"
          >
            <Input.Password
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
              placeholder="Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full bg-primary"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
