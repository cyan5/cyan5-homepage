// BigIcon.tsx

import { styled } from "@linaria/react";

const BigIcon = () => {
  return(
    <StyledBigIcon>
      image
    </StyledBigIcon>
  );
};

const StyledBigIcon = styled.div`
  text-align: center;
  color: transparent;
  background: cyan;
  background-image: url(src/images/cyan.png);
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
`

export default BigIcon;
