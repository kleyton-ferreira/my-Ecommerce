import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const SignUpContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SignUpHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 30px;
  padding: 20px ;
  color: ${Colors.primary};
  border-bottom: 1px solid ${Colors.text.dark};
  width: 100%;
  text-align: center;
`

export const SigUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`

export const SigUpInputContainer = styled.div`
   width: 100%;
   margin-bottom: 20px;
  p:nth-child(1) {
    font-family: 600;
    margin-bottom: 5px;
  }
`