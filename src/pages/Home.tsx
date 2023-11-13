import { styled } from '@linaria/react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import { StyledContents } from '../styles/StyledContents'
import srcFuji from "../images/DSC_0050.jpg"
import Title from '../components/Title'

const Home = () => {
  return (
    <StyledHome>
      <NavBar />
      <StyledContents>
        <Title text="cyan's Homepage"/>
        <ul>
          <li><h2><Link to='About'>About</Link></h2></li>
          <li><h2><Link to='Works'>Works</Link></h2></li>
        </ul>
      </StyledContents>
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
