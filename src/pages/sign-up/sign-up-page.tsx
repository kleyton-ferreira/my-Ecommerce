import { FiLogIn } from 'react-icons/fi'
import validator from 'validator'
import {
  AuthError,
  createUserWithEmailAndPassword,
  AuthErrorCodes
} from 'firebase/auth'
import { auth, db } from '../../config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'

// COMPONENTS
import { useForm } from 'react-hook-form'
import CustomInput from '../../components/custom-input/custom-input-components'
import Header from '../../components/header/header.components'
import CustomButton from '../../components/custom-button/custom-button.components'
import InputErrorMessage from '../../components/input-error-message/input-error-message'

// STYLES
import {
  SigUpInputContainer,
  SignUpHeadline,
  SigUpContent,
  SignUpContainer
} from './sign-up-style'

interface SignUpForm {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError
  } = useForm<SignUpForm>()

  const watchPassword = watch('password')

  const handleSubmitSignUpPage = async (data: SignUpForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      console.log({ userCredentials })
      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: data.firstName,
        lastName: data.lastName
      })
    } catch (error) {
      const _error = error as AuthError
      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', { type: 'alreadyInUse' })
      }
    }
  }

  console.log({ errors })

  return (
    <>
      <Header />
      <SignUpContainer>
        <SigUpContent>
          <SignUpHeadline>Crie a sua conta</SignUpHeadline>
          {/* INPUT - 1 */}
          <SigUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors.firstName}
              placeholder='Digite seu nome'
              {...register('firstName', { required: true })}
            />
            {errors?.firstName?.type === 'required' && (
              <InputErrorMessage>O nome é obrigatório.</InputErrorMessage>
            )}
          </SigUpInputContainer>

          {/* INPUT - 2 */}
          <SigUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors.lastName}
              placeholder='Digite seu sobrenome'
              {...register('lastName', { required: true })}
            />
            {errors?.lastName?.type === 'required' && (
              <InputErrorMessage>O sobrenome é obrigatório.</InputErrorMessage>
            )}
          </SigUpInputContainer>

          {/* INPUT - 3 */}
          <SigUpInputContainer>
            <p>E-mail</p>
            <CustomInput
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

            {errors?.email?.type === 'alreadyInUse' && (
              <InputErrorMessage>Esse email já existe.</InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor, insira um e-mail válido
              </InputErrorMessage>
            )}
          </SigUpInputContainer>

          {/* INPUT - 4 */}
          <SigUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors.password}
              placeholder='Digite sua senha'
              {...register('password', { required: true, minLength: 6 })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}

            {errors?.password?.type === 'minLength' && (
              <InputErrorMessage>
                A senha deve conter 6 caracteres.
              </InputErrorMessage>
            )}
          </SigUpInputContainer>

          {/* INPUT - 5 */}
          <SigUpInputContainer>
            <p>Confirmação de senha</p>
            <CustomInput
              hasError={!!errors.passwordConfirmation}
              placeholder='Comfirme sua senha'
              {...register('passwordConfirmation', {
                required: true,
                minLength: 6,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />

            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>
                A confirmação de senha é obrigatório.
              </InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === 'minLength' && (
              <InputErrorMessage>
                A confirmação de senha deve conter 6 caracteres.
              </InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessage>
                A confirmação de senha precisa ser igual a senha.
              </InputErrorMessage>
            )}
          </SigUpInputContainer>

          <CustomButton
            onClick={() => handleSubmit(handleSubmitSignUpPage)()}
            startIcon={<FiLogIn size={20} />}
          >
            Entrar
          </CustomButton>
        </SigUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUpPage
