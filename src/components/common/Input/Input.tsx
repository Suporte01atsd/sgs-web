import styled from "styled-components"

const InputContainer = styled.div`
  margin-bottom: 10px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0px;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
  font-size: 14px;
`

const StyledInput = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border: 2px solid #e0e0e0;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 14px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.disabled};
  }
`

const ErrorMessage = styled.span`
  color: ${props => props.theme.colors.error};
  font-size: 14px;
  margin-top: ${props => props.theme.spacing.xs};
  display: block;
`

export const Input = ({ label, error, ...props }) => {
    return (
        <InputContainer>
            {label && <Label>{label}</Label>}
            <StyledInput {...props} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputContainer>
    )
}