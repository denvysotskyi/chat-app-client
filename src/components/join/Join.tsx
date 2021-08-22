import { FC } from 'react'
import styled from 'styled-components'
import Header from '../header/Header'
import JoinForm from './JoinForm'
import Chat from '../chat/Chat'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`
const Container = styled.div`
  width: 1440px;
  display: grid;
  grid-template-areas:
  'header'
  'content';
`
const Content = styled.div`
  grid-area: content;
  min-height: 700px;
`

const Join: FC = () => {

  const isJoined = useSelector((state: RootState) => state.user.isJoined)

  if (isJoined) {
    return <AppWrapper>
             <Container>
               <Header />
               <Content>
                 <Chat />
               </Content>
             </Container>
           </AppWrapper>
  }
  return <AppWrapper>
           <Container>
             <Header />
             <Content>
               <JoinForm />
             </Content>
           </Container>
         </AppWrapper>
}

export default Join