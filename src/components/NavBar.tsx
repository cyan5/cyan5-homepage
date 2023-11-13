// NavBar.tsx

import { styled } from '@linaria/react'
import Button from './NavBar/Button';
import Separate from './NavBar/Separate';

const NavBar = () => {
  return(
    <StyledNav>
      <nav>
        <Button text='HOME' link='/cyan5-homepage'/>
        <Separate />
        <Button text='About' link='/cyan5-homepage/about'/>
        <Button text='Works' link='/cyan5-homepage/works'/>
      </nav>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  position: fixed;
  z-index: 100;
  background: rgba(0,0,0,0.3);
  width: 100%;
  height: 6vh;
  backdrop-filter: blur(20px);
  padding-left: 15px;
  
  nav {
    height: 6vh;
    width: 1000px;
    margin: auto;
    /* left: 50%; */
    /* top: 50%; */
    /* transform: translate(-50%, -50%); */

    /* @media only screen and (max-width: 728px) {
    width: 80vw;
    } */

  }
`

export default NavBar;
