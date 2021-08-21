const GET_AUTH_USER_DATA = 'user/GET_AUTH_USER_DATA'

const initialState = {
  roomName: '',
  name: '',
  isAuth: false
}

const userReducer = (state = initialState, action: any) => {
  switch(action.type) {

    case GET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}

export const getAuthUserData = (roomName: string, name: string, isAuth: boolean) =>
  ({ type: GET_AUTH_USER_DATA, payload: { roomName, name, isAuth }})

export default userReducer