// Separate.tsx

import { styled } from "@linaria/react";

const Separate = () => {
  return(
    <StyledSeparate>
      |
    </StyledSeparate>
  ); 
};

const StyledSeparate = styled.div`
  font-size: 20px;
  text-align: center;
  color: #cccccc;
  text-shadow: rgba(0,0,0,1) 0 0 6px;
  opacity: 0.5;
  margin-left: 10px;
  margin-right: 10px;
  height: 50px;
  line-height: 50px;
  padding: 0;
  display: block;
  float: left;
`

export default Separate;
