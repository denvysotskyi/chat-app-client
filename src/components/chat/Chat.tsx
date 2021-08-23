import { FC } from 'react'
import styled from 'styled-components'
import ChatForm from './ChatForm'

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
const List = styled.ul`
  margin-top: 30px;
  width: 70%;
  height: 70%;
  background: white;
  border-radius: 8px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`
const Li = styled.li`
  margin-bottom: 10px;
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
const MessagesDisplay = styled.div`
  width: 70%;
  height: 56.5%;
  background: white;
  margin-top: 29px;
  border-radius: 8px;
`

const Chat: FC = () => {

  return (
    <Wrapper>
      <Main>
        <Users>
          <Title>
            Пользователи: (2)
          </Title>
          <List>
            <Li>
              Иван
            </Li>
            <Li>
              Маша
            </Li>
          </List>
        </Users>
        <MessagesWrapper>
          <MessagesTitle>
            Комната: 1
          </MessagesTitle>
          <MessagesDisplay />
          <ChatForm />
        </MessagesWrapper>
      </Main>
    </Wrapper>
  )
}

export default Chat