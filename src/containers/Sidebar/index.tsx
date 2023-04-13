import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Elisberto Junior</Title>
        <Paragraph typeText={'secondary'} fontSize={16}>
          ElisbertoJunior
        </Paragraph>
        <Description typeText={'primary'} fontSize={12}>
          Desenvolvedor Full Stack Java
        </Description>
        <ThemeButton>Trocar tema</ThemeButton>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
