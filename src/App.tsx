import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
import GlobalStyle, { Container } from './styles'

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </div>
  )
}

export default App
