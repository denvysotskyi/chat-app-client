import { FC } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const Wrapper = styled.div`
`
const MessagesForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 30px;
`
const Textarea = styled(Field)`
  width: 582px;
  height: 100px;
  border-radius: 8px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  padding: 0 0 53px 15px;
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
`
const Error = styled.div`
  font-size: 12px;
  color: white;
  margin: 0 7px 8px 0;
`

const SignupSchema = Yup.object().shape({
  message: Yup.string()
    .min(2, 'Поле должно содержать минимум 2 символа!')
    .required('Введите ваши данные')
})

const ChatForm: FC = () => (
    <Wrapper>
      <Formik
        initialValues={{
          message: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const url = 'http://localhost:7878/api/1.0/rooms'
          await axios.post(url, values)
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
              Войти
            </Button>
          </MessagesForm>
        )}
      </Formik>
    </Wrapper>
  )

export default ChatForm