import { useForm } from 'react-hook-form'
import validator from 'validator'
import { auth, db, provider } from '../../config/firebase.config'

// UTILITZ
import {
  signInWithEmailAndPassword,
  AuthError,
  AuthErrorCodes,
  signInWithPopup
} from 'firebase/auth'

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
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'

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

  const handleSignInGooglePress = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, provider)
      console.log({ userCredentials })

      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', userCredentials.user.uid)
        )
      )

      const user = querySnapshot.docs[0]?.data()
      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0]
        const lastName = userCredentials.user.displayName?.split(' ')[1]

        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          providers: 'google'
        })
      }
      console.log({ user })
    } catch (error) {}
  }

  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadLine>Entre com sua conta</LoginHeadLine>
          <CustomButton
            onClick={handleSignInGooglePress}
            startIcon={<BsGoogle size={25} />}
          >
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
