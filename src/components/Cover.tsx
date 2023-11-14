// Cover.tsx

import { styled } from '@linaria/react'
import srcFuji from '../images/DSC_0050.jpg'

const Cover = () => {
  return(
    <StyledCover>
      <img src={srcFuji}></img>
    </StyledCover>
  );
};

const StyledCover = styled.div`
  height: 40vh;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    top: -14vh;
    width: 100%;
    height: 180%;
    object-fit: cover;
  }
`

export default Cover;
