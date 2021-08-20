import { FC } from 'react'
import styled from 'styled-components'
import logo from '../../assets/icons/logo.jpeg'

const Wrapper = styled.div`
  height: 55px;
  background: darkviolet;
  display: flex;
  align-items: center;
`
const LogoWrapper = styled.div`
  padding-left: 20px;
`
const Logo = styled.img`
  width: 60px;
  height: 40px;
`

const Header: FC = () => (
    <Wrapper>
      <LogoWrapper>
        <Logo src={logo}
              alt={'logo'}
        />
      </LogoWrapper>
    </Wrapper>
  )

export default Header