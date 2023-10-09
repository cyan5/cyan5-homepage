// NavBar.tsx

import { styled } from '@linaria/react'
import Button from './NavBar/Button';
import Separate from './NavBar/Separate';

const NavBar = () => {
  return(
    <StyledNav>
      <nav>
        <Button text='HOME' link='/'/>
        <Separate />
        <Button text='About' link='/About'/>
        <Button text='Works' link='/Works'/>
      </nav>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  position: fixed;
  background: rgba(0,0,0,0.2);
  width: 100%;
  height: 6vh;
  backdrop-filter: blur(20px);
  padding-left: 15px;
  
  nav {
    height: 6vh;
    width: 728px;
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
