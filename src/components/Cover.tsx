// Cover.tsx

import { styled } from '@linaria/react'
import srcFuji from '../images/DSC_0050.jpg'

const Cover = () => {
  return(
    <StyledCover>
      {/* <img src={CoverImg}></img> */}
    </StyledCover>
  );
};

const StyledCover = styled.div`
  background-image: url(${srcFuji});
  background-size: cover;
  background-position: center;
  height: 40vh;
  padding: 0; 
  margin: 10 20 30 40;
  /* background: #007070; */

  /* img {
    size: cover;
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
`

export default Cover;
