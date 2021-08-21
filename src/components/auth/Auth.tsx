import { FC } from 'react'
import styled from 'styled-components'
import Header from '../header/Header'
import AuthForm from './AuthForm'
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

const Auth: FC = () => {

  const isAuth = useSelector((state: RootState) => state.user.isAuth)

  if (isAuth) {
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
               <AuthForm />
             </Content>
           </Container>
         </AppWrapper>
}

export default Auth