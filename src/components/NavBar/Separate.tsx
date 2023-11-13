// Separate.tsx

import { styled } from "@linaria/react";

const Separate = () => {
  return(
    <StyledSeparate>
      <div>
        |
      </div>
    </StyledSeparate>
  ); 
};

const StyledSeparate = styled.div`
  padding: 0;
  margin: 0 10px;
  display:flex;
  align-items: center;
  justify-content: center;
  
  div {
    color: #cccccc;
    opacity: 0.5;
    font-size: 20px;
    text-shadow: rgba(0,0,0,1) 0 0 6px;
  }
`

export default Separate;
