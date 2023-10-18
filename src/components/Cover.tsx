// Cover.tsx

import { styled } from '@linaria/react'
import CoverImg from '../images/DSC_0050.jpg'


const Cover = () => {
  return(
    <StyledCover>
      <img src={CoverImg}></img>
    </StyledCover>
  );
};

const StyledCover = styled.div`
  background-size: cover;
  background-position: center;
  height: 50vh;
  padding: 0; 
  margin: 10 20 30 40;
  background: #007070;

  img {
    /* size: cover; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default Cover;
