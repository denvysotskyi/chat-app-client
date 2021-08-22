import {FC, useState} from 'react'
import styled from 'styled-components'
import logo from '../../assets/icons/logo.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { getJoinedUserData } from '../../store/userReducer'

const Wrapper = styled.div`
  height: 55px;
  background: darkviolet;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoWrapper = styled.div`
  margin-left: 20px;
`
const Logo = styled.img`
  width: 60px;
  height: 40px;
`
const OutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  width: 70px;
  height: 30px;
  border-radius: 8px;
  border: none;
  outline: none;
  text-transform: uppercase;
  background: white;
  &:hover {
    cursor: pointer;
    transform: translateY(3px);
    transition: .3s all ease;
  }
`

const Header: FC = () => {

  const dispatch = useDispatch()

  const isJoinedUser = useSelector((state: RootState) => state.user.isJoined)

  const [isJoined, setIsJoined] = useState(isJoinedUser)

  const onOut = () => {
    setIsJoined(false)
    dispatch(getJoinedUserData(isJoined))
  }

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={logo}
              alt={'logo'}
        />
      </LogoWrapper>
      {
        isJoinedUser
          ? <OutButton onClick={onOut}>
            Выйти
          </OutButton>
          : ''
      }
    </Wrapper>
  )
}

export default Header