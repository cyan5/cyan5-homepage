// Cover.tsx

import { styled } from '@linaria/react'

const Cover = () => {
  return(
    <StyledCover>
      {/* <img></img> */}
    </StyledCover>
  );
};

const StyledCover = styled.div`
  background-image: url(src/images/wallpaperbetter.com_7680x4320.jpg);
  background-size: cover;
  background-position: center;
  height: 50vh;
  padding: 0; 
  margin: 10 20 30 40;
  /* background: #007070; */
`

export default Cover;
