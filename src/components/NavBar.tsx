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
  width: 100%;
  height: auto;
  z-index: 100;
  background: rgba(0,0,0,0.3);
  padding-left: 15px;
  backdrop-filter: blur(20px);
  
  nav {
    width: 1000px;
    height: auto;
    margin: auto;
    display: flex;
  }
`

export default NavBar;
