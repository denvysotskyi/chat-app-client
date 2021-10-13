import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import ChatForm from '../forms/ChatForm'
import { useAppSelector } from '../../hooks/hooks'

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
    min-height: 40%;
    margin-bottom: 2px;
    border-radius: 15px 15px 0 0;
  }
`
const Title = styled.h3`
  padding-top: 25px;
  @media ${props => props.theme.media.tablet} {
    font-size: 19px;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 14px;
  }
`
const TitleSpan = styled.span`
  color: lightseagreen;
  margin-left: 5px;
`
const UsersList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 30px;
  width: 60%;
  overflow: auto;
  background: white;
  border-radius: 8px;
  list-style: none;
  padding-top: 15px;
  @media ${props => props.theme.media.tablet} {
    min-height: calc(60% - 20px);
    width: 70%;
  }
`
const User = styled.li`
  margin: 7px;
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
  @media ${props => props.theme.media.tablet} {
    font-size: 15px;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 12px;
  }
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
    min-height: 60%;
  }
`
const MessagesTitle = styled.h2`
  padding-top: 21px;
  @media ${props => props.theme.media.tablet} {
    font-size: 19px;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 14px;
  }
`
const MessagesTitleSpan = styled.span`
  color: lightseagreen;
  margin-left: 5px
`

const MessagesList = styled.ul`
  width: 70%;
  height: calc(56.5% - 10px);
  overflow: auto;
  background: white;
  margin-top: 29px;
  border-radius: 8px;
  list-style: none;
  padding: 15px 0 0 20px;
  @media ${props => props.theme.media.tablet} {
    padding: 10px 0 0 15px;
    min-height: calc(38.5% - 10px);
  }
`
const Message = styled.li`
`
const MsgWrapper = styled.div`
  display: flex;
`
const Msg = styled.p`
  font-weight: 500;
  @media ${props => props.theme.media.tablet} {
    font-size: 17px;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 12px;
  }
`

const Chat = (): JSX.Element => {

  const roomId = useAppSelector(state => state.users.roomId)
  const users = useAppSelector(state => state.users.usersArr)
  const messages = useAppSelector(state => state.users.messagesArr)

  const usersRef = useRef<HTMLUListElement>(null)
  const messagesRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (usersRef.current) {
      usersRef.current.scrollTo(0, usersRef.current.scrollHeight)
    }
    if (messagesRef.current) {
      messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight)
    }
  }, [users, messages])

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
          <UsersList ref={usersRef}>
            {
              users.map((user: string, idx: number) => <User key={idx}>
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
          <MessagesList ref={messagesRef}>
            {
              messages.map((msg: any, idx: number) => <Message key={idx}>
                                                              <MsgWrapper>
                                                                <Name right={'5px'}
                                                                      bottom={'10px'}>
                                                                 {msg.userName}:
                                                                </Name>
                                                                <Msg>
                                                                 {msg.message}
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