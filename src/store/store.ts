import { createStore, combineReducers } from 'redux'
import userReducer from './userReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore( rootReducer, composeWithDevTools())

export default store



