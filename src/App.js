import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import styled from 'styled-components'
import Footer from './components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import NotFound from './Pages/NotFound'
import Alert from './components/Alert'
import UserPage from './Pages/UserPage'

function App() {
  return (
    <>
      <Wrapper>
        <div className='section'>
          <Navbar />
          <main>
            <Alert />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/user/:login' element={<UserPage />} />
              <Route path='/*' element={<NotFound />} />
              <Route path='/notfound' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
  main{
    width: 85%;
    margin: auto;
  }
`
export default App
