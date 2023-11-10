// import './Home.css'
import { styled } from '@linaria/react'
import Cover from '../components/Cover'
import NavBar from '../components/NavBar'
import BigIcon from '../components/BigIcon'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { StyledContents } from '../styles/StyledContents'

const Home = () => {
  return (
    <StyledHome>
      <NavBar />
      <BigIcon />
      <Cover />
      <StyledContents>
        <h1>cyan's Homepage</h1>
        <ul>
          <li><h2><Link to='About'>About</Link></h2></li>
          <li><h2><Link to='Works'>Works</Link></h2></li>
        </ul>
      </StyledContents>
      <Footer />
    </StyledHome>
  )
}

const StyledHome = styled.div`
  background: white;
  color: #1f1f1f;
`

export default Home
