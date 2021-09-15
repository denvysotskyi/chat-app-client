const GET_JOINED_USER_DATA = 'users/GET_JOINED_USER_DATA',
  GET_USERS = 'users/GET_USERS',
  GET_MESSAGES = 'users/GET_MESSAGES'

const initialState = {
  roomId: '',
  userName: '',
  isJoined: false,
  users: [],
  messages: []
}

const usersReducer = (state = initialState, action: any) => {
  switch(action.type) {

    case GET_JOINED_USER_DATA:
      return {
        ...state,
        ...action.payload
      }

    case GET_USERS:
      return {
        ...state,
        ...action.payload
      }

    case GET_MESSAGES:
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

export const getUsers = (users: string[]) => ({ type: GET_USERS, payload: { users }})

export const getMessages = (messages: object) => ({ type: GET_MESSAGES, payload: { messages }})

export default usersReducer