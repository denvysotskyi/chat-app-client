import {FC, useState} from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { getJoinedUserData } from '../../store/userReducer'
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
  border: 1px solid black;
  border-radius: 15px;
  background: darkviolet;
`
const RoomField = styled(Field)`
  margin: 8px 0 15px 0;
  padding-left: 10px;
  width: 200px;
  height: 30px;
  border-radius: 8px;
  border: none;
  outline: none;
`
const NameField = styled(Field)`
  margin: 8px 0 15px 0;
  padding-left: 10px;
  width: 200px;
  height: 30px;
  border-radius: 8px;
  border: none;
  outline: none;
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
`
const Error = styled.div`
  font-size: 12px;
  color: white;
`

const SignupSchema = Yup.object().shape({
  roomId: Yup.string()
    .min(1)
    .required('Введите ваши данные'),
  userName: Yup.string()
    .min(2, 'Поле должно содержать минимум 2 символа!')
    .required('Введите ваши данные')
})

const JoinForm: FC = () => {

  const dispatch = useDispatch()

  const [isJoined, setIsJoined] = useState(false)

  const onJoin = () => {
    setIsJoined(true)
  }

  return (
    <Wrapper>
      <Formik
        initialValues={{
          roomId: '',
          userName: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const url = 'http://localhost:7878/api/1.0/rooms'
          await axios.post(url, values)
          const socket = io('http://localhost:7878')
          socket.emit('ROOM: JOIN', { values })
          socket.on('ROOM: JOINED', ({ roomId, userName }) => console.log(`${userName} is enter in room ${roomId}`))
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
            <RoomField name={'roomId'}
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
            <NameField name={'userName'}
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