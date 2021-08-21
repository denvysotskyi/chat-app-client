import Auth from '../auth/Auth'
import { FC } from 'react'
import { Provider } from 'react-redux'
import store from '../../store/store'

const App: FC = () => (
  <Provider store={store}>
    <Auth />
  </Provider>
)

export default App