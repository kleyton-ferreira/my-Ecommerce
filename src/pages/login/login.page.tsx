// UTILITZ
import { useForm } from 'react-hook-form'

// COMPONENTS
import Header from '../../components/header/header.components'
import CustomButton from '../../components/custom-button/custom-button.components'
import CustomIput from '../../components/custom-input/custom-input-components'

// ICONS
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

// CSS
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }

  console.log({ errors })

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
            <p>E-mail</p>
            <CustomIput
              placeholder='Digite seu e-mail'
              {...register('email', { required: true })}
            />
          </LoginInputContainer>

          {/* INPUT - 1 */}
          <LoginInputContainer>
            <p>Senha</p>
            <CustomIput
              placeholder='Digite sua senha'
              {...register('password', { required: true })}
            />
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
