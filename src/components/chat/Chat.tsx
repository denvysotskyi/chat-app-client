import { FC } from 'react'
import styled from 'styled-components'
import ChatForm from './ChatForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Main = styled.div`
  width: 83%;
  height: 700px;
  border: 1px solid lightgray;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
`
const Users = styled.div`
  width: 29.9%;
  height: 100%;
  background: darkviolet;
  border-radius: 15px 0 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h3`
  padding-top: 25px;
  color: white;
`
const UsersList = styled.ul`
  margin-top: 30px;
  width: 60%;
  height: 70%;
  background: white;
  border-radius: 8px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`
const User = styled.li`
  margin-bottom: 10px;
`
const Name = styled.p`
  font-weight: 600;
`
const MessagesWrapper = styled.div`
  width: 69.9%;
  height: 100%;
  background: darkviolet;
  border-radius: 0 15px 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MessagesTitle = styled.h2`
  padding-top: 21px;
  color: white;
`
const MessagesList = styled.ul`
  width: 70%;
  height: 56.5%;
  background: white;
  margin-top: 29px;
  border-radius: 8px;
`
const Message = styled.li`
  margin-bottom: 10px;
`
const Msg = styled.p`
  font-weight: 600;
`

const Chat: FC = () => {

  const users = useSelector((state: RootState) => state.users.users)
  const roomId = useSelector((state: RootState) => state.users.roomId)
  const messages = useSelector((state: RootState) => state.users.messages)

  return (
    <Wrapper>
      <Main>
        <Users>
          <Title>
            Онлайн: {users.length}
          </Title>
          <UsersList>
            {
              users.map((user: string, index: number) => <User key={index}>
                                                           <Name>
                                                             {user}
                                                           </Name>
                                                         </User>
              )
            }
          </UsersList>
        </Users>
        <MessagesWrapper>
          <MessagesTitle>
            Комната: {roomId}
          </MessagesTitle>
          <MessagesList>
            {
              messages.map((message: any, index: number) => <Message key={index}>
                                                              <Msg>
                                                               {message.message}
                                                              </Msg>
                                                            </Message>
              )
            }
          </MessagesList>
          <ChatForm />
        </MessagesWrapper>
      </Main>
    </Wrapper>
  )
}

export default Chat