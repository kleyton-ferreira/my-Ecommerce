import { useNavigate } from 'react-router-dom'

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
  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleInitialPage = () => {
    navigate('/')
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleInitialPage}> CLUB CLOTHING </HeaderTitle>
      <HeaderContent>
        <HeaderItems>Explorar</HeaderItems>
        <HeaderItems onClick={handleLoginClick}>Login</HeaderItems>
        <HeaderItems>Criar Conta</HeaderItems>
        <HeaderCart>
          <BsCart3 size={20} />
          <HeaderParagraf>5</HeaderParagraf>
        </HeaderCart>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
