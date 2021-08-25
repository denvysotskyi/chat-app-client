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
  border: none;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  @media ${props => props.theme.media.tablet} {
    flex-direction: column;
  }
`
const Users = styled.div`
  width: 29.9%;
  height: 100%;
  background: blanchedalmond;
  border-radius: 15px 0 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${props => props.theme.media.tablet} {
    width: 100%;
    margin-bottom: 2px;
    border-radius: 15px 15px 0 0;
  }
`
const Title = styled.h3`
  padding-top: 25px;
`
const TitleSpan = styled.span`
  color: lightseagreen;
  margin-left: 5px;
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
`
interface INameStyled {
  right: string;
  bottom: string;
}
const Name = styled.p<INameStyled>`
  margin-right: ${({right}) => right};
  margin-bottom: ${({bottom}) => bottom};
  font-weight: 600;
  color: lightseagreen;
`
const MessagesWrapper = styled.div`
  width: 69.9%;
  height: 100%;
  background: blanchedalmond;
  border-radius: 0 15px 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${props => props.theme.media.tablet} {
    width: 100%;
    border-radius: 0 0 15px 15px;
  }
`
const MessagesTitle = styled.h2`
  padding-top: 21px;
`
const MessagesTitleSpan = styled.span`
  color: lightseagreen;
  margin-left: 5px;
`
const MessagesList = styled.ul`
  width: 70%;
  height: 56.5%;
  background: white;
  margin-top: 29px;
  border-radius: 8px;
  list-style: none;
  padding: 20px 0 0 20px;
`
const Message = styled.li`
`
const MsgWrapper = styled.div`
  display: flex;
`
const Msg = styled.p`
  font-weight: 500;
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
            Онлайн:
            <TitleSpan>
              {users.length}
            </TitleSpan>
          </Title>
          <UsersList>
            {
              users.map((user: string, index: number) => <User key={index}>
                                                           <Name right={'0'}
                                                                 bottom={'10px'}>
                                                             {user}
                                                           </Name>
                                                         </User>
              )
            }
          </UsersList>
        </Users>
        <MessagesWrapper>
          <MessagesTitle>
            Комната:
            <MessagesTitleSpan>
              {roomId}
            </MessagesTitleSpan>
          </MessagesTitle>
          <MessagesList>
            {
              messages.map((message: any, index: number) => <Message key={index}>
                                                              <MsgWrapper>
                                                                <Name right={'5px'}
                                                                      bottom={'10px'}>
                                                                 {message.userName}:
                                                                </Name>
                                                                <Msg>
                                                                 {message.message}
                                                                </Msg>
                                                              </MsgWrapper>
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