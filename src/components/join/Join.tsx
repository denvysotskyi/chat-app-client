import styled from 'styled-components'
import Navbar from '../navbar/Navbar'
import JoinForm from './JoinForm'
import Chat from '../chat/Chat'
import { useAppSelector } from '../../hooks/hooks'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`
const Container = styled.div`
  width: 1440px;
  display: grid;
  grid-template-areas:
  'navbar'
  'content';
`
const Content = styled.div`
  grid-area: content;
  min-height: 700px;
`

const Join = (): JSX.Element => {

  const isJoined = useAppSelector(state => state.users.isJoined)

  if (isJoined) {
    return <AppWrapper>
      <Container>
        <Navbar />
        <Content>
          <Chat />
        </Content>
      </Container>
    </AppWrapper>
  }
  return <AppWrapper>
    <Container>
      <Navbar />
      <Content>
        <JoinForm />
      </Content>
    </Container>
  </AppWrapper>
}

export default Join
