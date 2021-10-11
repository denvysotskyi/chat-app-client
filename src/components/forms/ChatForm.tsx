import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useAppSelector } from '../../hooks/hooks'
import { io } from 'socket.io-client'

const Wrapper = styled.div`
`
const MessagesForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 30px;
  @media ${props => props.theme.media.tablet} {
    align-items: center;
  }
`
const Textarea = styled(Field)`
  width: 480px;
  height: 100px;
  border-radius: 8px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  padding: 0 0 53px 15px;
  @media ${props => props.theme.media.widescreen} {
    width: 440px;
  }
  @media ${props => props.theme.media.desktop} {
    width: 360px;
  }
  @media ${props => props.theme.media.laptop} {
    width: 280px;
  }
  @media ${props => props.theme.media.tablet} {
    width: 310px;
  }
  @media ${props => props.theme.media.phone} {
    width: 170px;
  }
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
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
    margin-bottom: 45px;
    height: 40px;
    width: 80px;
    font-size: 10px;
  }
`
const Error = styled.div`
  font-size: 12px;
  color: red;
  margin: 0 7px 8px 0;
  @media ${props => props.theme.media.phone} {
    font-size: 10px;
  }
`

const SignupSchema = Yup.object().shape({
  message: Yup.string()
    .required('Введите сообщение')
})

const ChatForm = (): JSX.Element => {

  const roomId = useAppSelector(state => state.users.roomId)
  const userName = useAppSelector(state => state.users.userName)

  return (
    <Wrapper>
      <Formik
        initialValues={{
          roomId,
          userName,
          message: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, {setSubmitting, resetForm}) => {
          const url = 'https://chat-app-server-3.herokuapp.com/api/1.0/rooms'
          await axios.post(url, values)
          const socket = io('https://chat-app-server-3.herokuapp.com')
          socket.emit('DATA:SEND', { values })
          setSubmitting(false)
          resetForm()
        }}
      >
        {({errors, touched}) => (
          <MessagesForm>
            {
              errors.message && touched.message
                ? (<Error>
                  {errors.message}
                </Error>)
                : null
            }
            <Textarea name={'message'}
                      type={'text'}
            />
            <Button type={'submit'}>
              Отправить
            </Button>
          </MessagesForm>
        )}
      </Formik>
    </Wrapper>
  )
}

export default ChatForm