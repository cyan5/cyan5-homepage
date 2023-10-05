// import './App.css'
// import { Link } from 'react-router-dom'
import { styled } from '@linaria/react'
import Cover from '../components/Cover'
import NavBar from '../components/NavBar'
import BigIcon from '../components/BigIcon'
import Footer from '../components/Footer'
import { StyledContents } from '../styles/StyledContents'

const App = () => {
  return (
    <StyledApp>
      <BigIcon />
      <NavBar />
      <Cover />

      <StyledContents>
        <div>
          <h1>cyan's Homepage</h1>
          <ul>
            <li><h2>About</h2></li>
            <li><h2>Works</h2></li>
            <li><h2>Blog</h2></li>
          </ul>
        </div>
      </StyledContents>
      <Footer />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  background: white;
  color: #1f1f1f;
`

export default App
