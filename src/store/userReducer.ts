const GET_JOINED_USER_DATA = 'user/GET_JOINED_USER_DATA'

const initialState = {
  roomId: '',
  userName: '',
  isJoined: false
}

const userReducer = (state = initialState, action: any) => {
  switch(action.type) {

    case GET_JOINED_USER_DATA:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}

export const getJoinedUserData = (roomId: string, userName: string, isJoined: boolean) =>
  ({ type: GET_JOINED_USER_DATA, payload: { roomId, userName, isJoined }})

export default userReducer