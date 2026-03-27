import { useForm } from 'react-hook-form'

// UTILITZ
import {
  signInWithEmailAndPassword,
  AuthError,
  AuthErrorCodes
} from 'firebase/auth'
import validator from 'validator'
import { auth } from '../../config/firebase.config'

// ICONS
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

// COMPONENTS
import Header from '../../components/header/header.components'
import CustomButton from '../../components/custom-button/custom-button.components'
import CustomIput from '../../components/custom-input/custom-input-components'
import InputErrorMessage from '../../components/input-error-message/input-error-message'

// CSS
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle,
  LoginLabel
} from './login.styles'

interface LoginPageForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginPageForm>()

  const handleSubmitPress = async (data: LoginPageForm) => {
    try {
      const UserCredencial = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      console.log({ UserCredencial })
    } catch (error) {
      const _error = error as AuthError
      console.log(error)
      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        return setError('password', { type: 'mismatch' })
      }
    }
  }

  // console.log({ errors })

  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadLine>Entre com sua conta</LoginHeadLine>
          <CustomButton startIcon={<BsGoogle size={25} />}>
            Entrar com Google
          </CustomButton>
          <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>

          {/* INPUT - 1 */}
          <LoginInputContainer>
            <LoginLabel>E-mail</LoginLabel>
            <CustomIput
              hasError={!!errors.email}
              placeholder='Digite seu e-mail'
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O email é obrigatório.</InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor, insira um e-mail válido.
              </InputErrorMessage>
            )}
          </LoginInputContainer>

          {/* INPUT - 2 */}
          <LoginInputContainer>
            <LoginLabel>Senha</LoginLabel>
            <CustomIput
              hasError={!!errors.password}
              placeholder='Digite sua senha'
              type='password'
              {...register('password', { required: true })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}

            {errors?.password?.type === 'mismatch' && (
              <InputErrorMessage>Insira a senha correta.</InputErrorMessage>
            )}
          </LoginInputContainer>

          <CustomButton
            onClick={() => handleSubmit(handleSubmitPress)()}
            startIcon={<FiLogIn size={20} />}
          >
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
