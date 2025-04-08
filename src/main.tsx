import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import ConfigProviderAnt from 'utils/ConfigProvider.ant.tsx'
import store, { persistor } from 'store'
import App from './App.tsx'
import 'assets/css/styles.css'
import 'antd/dist/reset.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ConfigProviderAnt>
          <App />
        </ConfigProviderAnt>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
