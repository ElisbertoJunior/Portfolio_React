import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`

export const LinkButton = styled.a`
  font-size: 14px;
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.buttonBgColor};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
