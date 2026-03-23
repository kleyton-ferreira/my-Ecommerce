import styled from "styled-components";
import Colors from "../../theme/theme.colors";


export const HeaderContainer = styled.div`
 width: 100%;
 background-color: ${Colors.backgound.dark};
 display: flex;
 justify-content: space-between;
 padding: 20px;
 
`

export const HeaderContent = styled.div`
display: flex;
 gap: 30px;
 align-items: center;
 justify-content: space-between;
 `

export const HeaderItems = styled.div`
 cursor: pointer;
 transition: all 0.3s ease;
 color: ${Colors.text.whithe};
 transition: all 0.3s ease;
  
 &:hover {
     color: ${Colors.text.hover};
    }
 `

export const HeaderTitle = styled.h2`
  cursor: pointer;
  color: ${Colors.text.whithe};
 `

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.text.whithe};
  cursor: pointer;
 `

export const HeaderParagraf = styled.p`
  position: relative;
  left: 3px;
  top: -3px;
 `





