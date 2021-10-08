const GET_JOINED_USER_DATA = 'users/GET_JOINED_USER_DATA',
      GET_USERS = 'users/GET_USERS',
      GET_MESSAGES = 'users/GET_MESSAGES'

interface IInitialState {
  roomId: string | null,
  userName: string | null,
  isJoined: boolean,
  users: string[],
  messages: string[]
}

const initialState: IInitialState = {
  roomId: null,
  userName: null,
  isJoined: false,
  users: [],
  messages: []
}

const usersReducer = (state = initialState, action: ActionsType): IInitialState => {
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

type ActionsType = IgetJoinedUserData | IgetUsers | IgetMessages

interface IgetJoinedUserDataPayload {
  roomId: string
  userName: string
  isJoined: boolean
}
interface IgetJoinedUserData {
  type: typeof GET_JOINED_USER_DATA
  payload: IgetJoinedUserDataPayload
}
export const getJoinedUserData = (roomId: string, userName: string, isJoined: boolean): IgetJoinedUserData =>
  ({ type: GET_JOINED_USER_DATA, payload: { roomId, userName, isJoined }})

interface IgetUsersPayload {
  users: string[]
}
interface IgetUsers {
  type: typeof GET_USERS
  payload: IgetUsersPayload
}
export const getUsers = (users: string[]): IgetUsers => ({ type: GET_USERS, payload: { users }})

interface IgetMessagesPayload {
  messages: string[]
}
interface IgetMessages {
  type: typeof GET_MESSAGES
  payload: IgetMessagesPayload
}
export const getMessages = (messages: string[]): IgetMessages => ({ type: GET_MESSAGES, payload: { messages }})

export default usersReducer
