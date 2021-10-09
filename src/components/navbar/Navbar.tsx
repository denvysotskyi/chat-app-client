import { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/icons/logo.jpeg'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { getRoomId, getUserName, getIsJoined } from '../../store/usersSlice'

const Wrapper = styled.div`
  height: 55px;
  background: blanchedalmond;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: navbar;
`
const LogoWrapper = styled.div`
  margin-left: 20px;
`
const Logo = styled.img`
  width: 60px;
  height: 40px;
`
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Name = styled.p`
  font-weight: 600;
  color: lightseagreen;
  @media ${props => props.theme.media.tablet} {
    font-size: 15px;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 12px;
  }
`
const OutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0 10px;
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
  @media ${props => props.theme.media.tablet} {
    height: 34px;
    width: 55px;
    font-size: 10px;
  }
`

const Navbar = (): JSX.Element => {

  const dispatch = useAppDispatch()

  const isJoinedUser = useAppSelector(state => state.users.isJoined)
  const name = useAppSelector(state => state.users.userName)

  const [roomId] = useState('')
  const [userName] = useState('')
  const [isJoined, setIsJoined] = useState(isJoinedUser)

  const onOut = () => {
    setIsJoined(false)
    dispatch(getRoomId(roomId))
    dispatch(getUserName(userName))
    dispatch(getIsJoined(isJoined))
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
          ? <ButtonWrapper>
            <Name>
              {name}
            </Name>
            <OutButton onClick={onOut}>
              Выйти
            </OutButton>
          </ButtonWrapper>
          : ''
      }
    </Wrapper>
  )
}

export default Navbar
