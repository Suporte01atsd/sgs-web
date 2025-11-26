import styled from "styled-components"

const StyledButton = styled.button`
  background-color: ${props => props.variant === 'secondary' ? props.theme.colors.secondary : props.theme.colors.primary};
  color: white;
  border: none;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.text.disabled};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

export const Button = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>
}