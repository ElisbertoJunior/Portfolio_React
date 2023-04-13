import Title from '../../components/Title'
import Project from '../../components/Project'
import { List } from './styles'

const Projects = () => {
  return (
    <div>
      <section>
        <Title>Projetos</Title>
        <List>
          <li>
            <Project></Project>
          </li>
          <li>
            <Project></Project>
          </li>
          <li>
            <Project></Project>
          </li>
        </List>
      </section>
    </div>
  )
}

export default Projects
