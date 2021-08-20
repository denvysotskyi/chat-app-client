import { FC } from 'react'
import styled from 'styled-components'
import Header from '../header/Header'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`
const Container = styled.div`
  display: grid;
  grid-template-areas:
  'header'
  'content';
  width: 1440px;
`
const Content = styled.div`
  grid-area: content;
  min-height: 700px;
`

const App: FC = () => (
  <AppWrapper>
    <Container>
      <Header />
      <Content />
    </Container>
  </AppWrapper>
)

export default App