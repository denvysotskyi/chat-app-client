import { FC } from 'react'
import styled from 'styled-components'
import Header from '../header/Header'
import Auth from '../auth/Auth'

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

const App: FC = () => (
  <AppWrapper>
    <Container>
      <Header />
      <Content>
        <Auth />
      </Content>
    </Container>
  </AppWrapper>
)

export default App