import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
      state.roomId = action.payload
    },
    getUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
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

export default usersSlice.reducer
