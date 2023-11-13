import { styled } from '@linaria/react'
import NavBar from '../components/NavBar'
import { StyledContents } from '../styles/StyledContents'
import srcFuji from "../images/DSC_0050.jpg"
import Title from '../components/Title'
import SectionLink from '../components/SectionLink'

const Home = () => {
  return (
    <StyledHome>
      <NavBar />
      <StyledContents>
        <Title text="cyan's Homepage"/>
        <SectionLink text="About" link="about" />
        <SectionLink text="Works" link="works" />
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
