// import './Home.css'
import { styled } from '@linaria/react'
import Cover from '../components/Cover'
import NavBar from '../components/NavBar'
import BigIcon from '../components/BigIcon'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <StyledHome>
      <NavBar />
      <BigIcon />
      <Cover />
      <StyledContents>
        <h1>cyan's Homepage</h1>
        <ul>
          <li><Link to='About'><h2>About</h2></Link></li>
          <li><Link to='Works'><h2>Works</h2></Link></li>
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

const StyledContents = styled.div`
  max-width: 1000px;
  min-height: 40vh;
  padding: 1em;
  margin: auto;
  /* background-color: #e7efff; */

  h1 {
    width: fit-content;
    padding: 0 10px;
    margin: 6vh 0 3vh 0;
    border-style: solid;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 2px;
  }

  h2 {
    padding: 0px 15px;
  }

  p {
    text-indent: 1rem;
  }
`

export default Home
