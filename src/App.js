import Footer from "components/Footer"
import AppContainer from "templates/AppContainer"
import ContainerWithNav from "templates/ContainerWithNav"
import Home from "views/Home"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <AppContainer>
      <ContainerWithNav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ContainerWithNav>
      <Footer />
    </AppContainer>
  )
}

export default App
