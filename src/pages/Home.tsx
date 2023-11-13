// import './Home.css'
import { styled } from '@linaria/react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import { StyledContents } from '../styles/StyledContents'
import srcFuji from "../images/DSC_0050.jpg"

const Home = () => {
  return (
    <StyledHome>
      <NavBar />
      {/* <BigIcon /> */}
      {/* <Cover /> */}
      <StyledContents>
        <h1>cyan's Homepage</h1>
        <ul>
          <li><h2><Link to='About'>About</Link></h2></li>
          <li><h2><Link to='Works'>Works</Link></h2></li>
        </ul>
      </StyledContents>
      {/* <Footer /> */}
    </StyledHome>
  )
}

const StyledHome = styled.div`
  background: white;
  background-size: cover;
  background-position: bottom center;
  background-image: url(${srcFuji});
  width: 100%;
  height: 100vh;
  color: #1f1f1f;
`

export default Home
