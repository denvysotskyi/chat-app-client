import Join from '../join/Join'
import { Provider } from 'react-redux'
import store from '../../store/store'

const App = (): JSX.Element => (
  <Provider store={store}>
    <Join />
  </Provider>
)

export default App
