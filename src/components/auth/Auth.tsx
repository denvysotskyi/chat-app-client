import { FC } from 'react'
import styled from 'styled-components'
import Header from '../header/Header'
import AuthForm from './AuthForm'
import { IAuth } from '../../types/data'

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

const Auth: FC<IAuth> = ({ isAuth }) => {

  if (isAuth) {
    return <AppWrapper>
             <Container>
               <Header />
               <Content></Content>
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