import { notification, NotificationArgsProps } from 'antd'

const useNotification = () => {
  const openNotification = (args: NotificationArgsProps) => {
    notification.open({ placement: 'topRight', ...args })
  }

  return { openNotification }
}

export default useNotification
