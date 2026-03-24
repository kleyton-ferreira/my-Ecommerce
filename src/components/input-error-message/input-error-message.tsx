import { FunctionComponent } from 'react'

// STYLE
import { InputErrorMessageContainer } from './input-error-message.styles'

interface InputErrorMessageProps {
  children: string
}

const InputErrorMessage: FunctionComponent<InputErrorMessageProps> = ({
  children
}) => {
  return (
    <>
      <InputErrorMessageContainer> {children} </InputErrorMessageContainer>
    </>
  )
}

export default InputErrorMessage
