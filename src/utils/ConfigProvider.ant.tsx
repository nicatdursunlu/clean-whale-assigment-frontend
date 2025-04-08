import { ConfigProvider, ConfigProviderProps } from 'antd'

const ConfigProviderAnt = (props: ConfigProviderProps) => {
  return (
    <ConfigProvider
      {...props}
      theme={{
        token: {
          colorPrimary: '#8C7837',
          borderRadius: 8,
        },
        components: {
          Button: {
            controlHeight: 48,
            borderRadius: 10,
          },
          Input: {
            lineHeight: 3,
            controlHeight: 38,
            borderRadius: 8,
          },
          Table: {
            colorBorder: '#EAEAEA',
          },
          Select: {
            controlHeight: 44,
            lineHeight: 3,
            borderRadius: 8,
          },
          DatePicker: {
            controlHeight: 44,
            lineHeight: 3,
          },
          Tabs: {
            borderRadius: 20,
          },
          InputNumber: {
            lineHeight: 3,
            controlHeight: 38,
            borderRadius: 8,
          },
        },
      }}
    >
      {props.children}
    </ConfigProvider>
  )
}

export default ConfigProviderAnt
