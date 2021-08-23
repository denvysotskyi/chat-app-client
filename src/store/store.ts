import { createStore, combineReducers } from 'redux'
import usersReducer from './usersReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  users: usersReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore( rootReducer, composeWithDevTools())

export default store



