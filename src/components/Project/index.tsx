import Title from '../Title'
import Paragraph from '../Paragraph'
import { Card, LinkButton } from './styled'

const Project = () => {
  return (
    <Card>
      <Title>Projeto lista de tarefas</Title>
      <Paragraph typeText={'secondary'}>
        Lista de tarefas feita com vueJS
      </Paragraph>
      <LinkButton>Visualizar</LinkButton>
    </Card>
  )
}

export default Project
