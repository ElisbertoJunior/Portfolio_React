import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`
//criando componente a partir de outro
const BotaoAzul = styled(Botao)`
  background-color: blue;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

const Teste = () => {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="20px" principal={false}>
        cancelar
      </Botao>
      <BotaoAzul principal>
        <span>Nao clique</span>
      </BotaoAzul>
    </>
  )
}

export default Teste
