import { useNavigate } from 'react-router-dom'

// AQUI E PRA FUNÇAO DE TESTE SAIR
import { auth } from '../../config/firebase.config'
import { signOut } from 'firebase/auth'

// ICONS
import { BsCart3 } from 'react-icons/bs'

// STYLES
import {
  HeaderContainer,
  HeaderContent,
  HeaderItems,
  HeaderTitle,
  HeaderCart,
  HeaderParagraf
} from './header.styles'

const Header = () => {
  const navigate = useNavigate()

  // FUNCTION = ( PAGE ! LOGIN )
  const handleInitialPage = () => {
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/signup')
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleInitialPage}> CLUB CLOTHING </HeaderTitle>
      <HeaderContent>
        <HeaderItems>Explorar</HeaderItems>
        <HeaderItems onClick={handleLoginClick}>Login</HeaderItems>
        <HeaderItems onClick={handleSignUpClick}>Criar Conta</HeaderItems>
        <HeaderItems onClick={() => signOut(auth)}>Sair</HeaderItems>
        <HeaderCart>
          <BsCart3 size={20} />
          <HeaderParagraf>5</HeaderParagraf>
        </HeaderCart>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
