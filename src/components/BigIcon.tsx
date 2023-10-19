// BigIcon.tsx

import { styled } from "@linaria/react";
import src_Cyan from '../images/cyan.png'

const BigIcon = () => {
  return(
    <StyledBigIcon>
      <img src={src_Cyan} alt='cyan.png' />
    </StyledBigIcon>
  );
};

const StyledBigIcon = styled.div`
  background: cyan;
  background-size: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border: 1px;
  border-style: solid;
  border-color: black;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

export default BigIcon;
