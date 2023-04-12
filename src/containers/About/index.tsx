import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GitHubSection } from './styles'

const About = () => {
  return (
    <div>
      <section>
        <Title>Sobre</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          obcaecati asperiores, enim a unde perspiciatis quam id vel eum nobis?
          Placeat debitis dolores voluptatibus dolore deleniti ad officiis
          expedita unde.
        </Paragraph>
        <GitHubSection>
          <img src="https://github-readme-stats.vercel.app/api?username=ElisbertoJunior&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ElisbertoJunior&layout=compact&langs_count=7&theme=dracula" />
        </GitHubSection>
      </section>
    </div>
  )
}

export default About
