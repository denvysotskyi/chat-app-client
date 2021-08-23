import { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Main = styled.div`
  width: 83%;
  height: 700px;
  border: 1px solid lightgray;
  border-radius: 15px;
`
const Users = styled.div`
  width: 30%;
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
`
const MessagesDisplay = styled.div`
`
const MessagesForm = styled.div`
`

const Chat: FC = () => {

  return (
    <Wrapper>
      <Main>
        <Users>
          <Title>
            Пользователи: (1)
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
          <MessagesDisplay>

          </MessagesDisplay>
          <MessagesForm>

          </MessagesForm>
        </MessagesWrapper>
      </Main>
    </Wrapper>
  )
}

export default Chat