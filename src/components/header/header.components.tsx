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
  return (
    <HeaderContainer>
      <HeaderTitle> CLUB CLOTHING </HeaderTitle>
      <HeaderContent>
        <HeaderItems>Explorar</HeaderItems>
        <HeaderItems>Login</HeaderItems>
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
