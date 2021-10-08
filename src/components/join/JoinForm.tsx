import { useState } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { getJoinedUserData, getMessages, getUsers } from '../../store/usersReducer'
import { io } from 'socket.io-client'
import axios from 'axios'

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`
const JoinedForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 290px;
  min-height: 195px;
  border: none;
  border-radius: 15px;
  background: blanchedalmond;
  @media ${props => props.theme.media.tablet} {
    width: 200px;
    min-height: 180px;
  }
`
const ItemField = styled(Field)`
  margin: 8px 0 15px 0;
  padding-left: 10px;
  width: 200px;
  height: 30px;
  border-radius: 8px;
  border: none;
  outline: none;
  @media ${props => props.theme.media.tablet} {
    width: 150px;
    font-size: 10px;
    ::-webkit-input-placeholder { 
      font-size: 10px; 
    }
  }
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 11px;
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
    margin-top: 3px;
    height: 34px;
    width: 55px;
    font-size: 10px;
  }
`
const Error = styled.div`
  font-size: 12px;
  color: red;
  @media ${props => props.theme.media.tablet} {
    font-size: 7px;
  }
`

const SignupSchema = Yup.object().shape({
  roomId: Yup.string()
    .min(1)
    .required('Введите ваши данные'),
  userName: Yup.string()
    .min(2, 'Поле должно содержать минимум 2 символа!')
    .required('Введите ваши данные')
})

const JoinForm = (): JSX.Element => {

  const dispatch = useDispatch()

  const [isJoined, setIsJoined] = useState(false)

  const onJoin = () => setIsJoined(true)

  return (
    <Wrapper>
      <Formik
        initialValues={{
          roomId: '',
          userName: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const url = 'https://chat-app-server-3.herokuapp.com/api/1.0/rooms'
          await axios.post(url, values)
          const socket = io('https://chat-app-server-3.herokuapp.com')
          socket.emit('ROOM:ENTER', { values })
          socket.on('USERS:GET', users => dispatch(getUsers(users)))
          socket.on('MESSAGES:GET', messages => dispatch(getMessages(messages)))
          dispatch(getJoinedUserData(values.roomId, values.userName, isJoined))
          setSubmitting(false)
          resetForm()
        }}
      >
        {({errors, touched}) => (
          <JoinedForm>
            {
              errors.roomId && touched.roomId
                ? (<Error>
                  {errors.roomId}
                </Error>)
                : null
            }
            <ItemField name={'roomId'}
                       type={'text'}
                       placeholder={'Введите Room Id'}
            />
            {
              errors.userName && touched.userName
                ? (<Error>
                  {errors.userName}
                </Error>)
                : null
            }
            <ItemField name={'userName'}
                       type={'text'}
                       placeholder={'Введите ваше имя'}
            />
            <Button onClick={onJoin}
                    type={'submit'}>
              Войти
            </Button>
          </JoinedForm>
        )}
      </Formik>
    </Wrapper>
  )
}

export default JoinForm