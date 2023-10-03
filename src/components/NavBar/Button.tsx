// Button.tsx

import { styled } from "@linaria/react";
import { Link } from "react-router-dom";

type ButtonTextType = {
  text: string
  link: string
}

const Button = ({ text, link }: ButtonTextType) => {
  return(
    <Link to={link}>
      <StyledButton>
        {text}
      </StyledButton>
    </Link>
  );
};

const StyledButton = styled.div`
  background: transparent;
  color: #cccccc;
  text-align: center;
  text-shadow: rgba(0,0,0,1) 0 0 6px;
  height: 50px;
  line-height: 50px;
  padding-left: 1em;
  padding-right: 1em;
  display: block;
  float: left;
  cursor: pointer;

  :hover {
    color: white;
  }
`

export default Button;
