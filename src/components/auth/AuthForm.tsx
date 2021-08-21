import { FC } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`
const AppAuthForm = styled(Form)`
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
  width: 80px;
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
  room: Yup.string()
    .min(2, 'Поле должно содержать минимум 2 символа!')
    .required('Введите ваши данные'),
  name: Yup.string()
    .min(2, 'Поле должно содержать минимум 2 символа!')
    .required('Введите ваши данные')
})

const AuthForm: FC = () => (
  <Wrapper>
    <Formik
      initialValues={{
        room: '',
        name: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        console.log(values.room, values.name)
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ errors, touched }) => (
        <AppAuthForm>
          {
            errors.room && touched.room
              ? (<Error>
                {errors.room}
              </Error>)
              : null
          }
          <RoomField name={'room'}
                     type={'text'}
                     placeholder={'Введите Room ID'}
          />
          {
            errors.name && touched.name
              ? (<Error>
                {errors.name}
              </Error>)
              : null
          }
          <NameField name={'name'}
                     type={'text'}
                     placeholder={'Введите ваше имя'}
          />
          <Button type={'submit'}>
            Войти
          </Button>
        </AppAuthForm>
      )}
    </Formik>
  </Wrapper>
)

export default AuthForm