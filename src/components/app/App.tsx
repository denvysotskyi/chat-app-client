import Join from '../join/Join'
import { FC } from 'react'
import { Provider } from 'react-redux'
import store from '../../store/store'

const App: FC = () => (
  <Provider store={store}>
    <Join />
  </Provider>
)

export default App