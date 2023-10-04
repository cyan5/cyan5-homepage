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
        <Button text='作品' link='/Items'/>
        <Button text='研究' link='/Research'/>
        <Button text='趣味' link='/Hobbies'/>
      </nav>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  position: fixed;
  background: rgba(0,0,0,0.2);
  width: 100%;
  height: 50px;
  backdrop-filter: blur(20px);
  /* padding-left: 200px; */
  
  nav {
    height: 50px;
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