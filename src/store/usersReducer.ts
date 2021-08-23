const GET_JOINED_USER_DATA = 'users/GET_JOINED_USER_DATA',
      SET_USERS = 'users/SET_USERS',
      SET_MESSAGES = 'users/SET_MESSAGES'

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

    case SET_USERS:
      return {
        ...state,
        users: action.payload
      }

    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload
      }

    default:
      return state
  }
}

export const getJoinedUserData = (roomId: string, userName: string, isJoined: boolean) =>
  ({ type: GET_JOINED_USER_DATA, payload: { roomId, userName, isJoined }})

export const setUsers = (users: string[]) => ({ type: SET_USERS, payload: { users }})

export const setMessages = (messages: string[]) => ({ type: SET_MESSAGES, payload: { messages }})

export default usersReducer