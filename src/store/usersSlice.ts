import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface UsersState {
  roomId: string,
  userName: string,
  isJoined: boolean,
  usersArr: string[],
  messagesArr: string[]
}

const initialState: UsersState = {
  roomId: '',
  userName: '',
  isJoined: false,
  usersArr: [],
  messagesArr: []
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getRoomId: (state, action: PayloadAction<string>) => {
      state.roomId += action.payload
    },
    getUserName: (state, action: PayloadAction<string>) => {
      state.userName += action.payload
    },
    getIsJoined: (state, action: PayloadAction<boolean>) => {
      state.isJoined = action.payload
    },
    getUsers: (state, action: PayloadAction<string[]>) => {
      state.usersArr = action.payload
    },
    getMessages: (state, action: PayloadAction<string[]>) => {
      state.messagesArr = action.payload
    }
  }
})

export const { getRoomId, getUserName, getIsJoined, getUsers, getMessages } = usersSlice.actions

export const selectRoomId = (state: RootState) => state.users.roomId
export const selectUserName = (state: RootState) => state.users.userName
export const selectIsJoined = (state: RootState) => state.users.isJoined
export const selectUsersArr = (state: RootState) => state.users.usersArr
export const selectMessagesArr = (state: RootState) => state.users.messagesArr

export default usersSlice.reducer
