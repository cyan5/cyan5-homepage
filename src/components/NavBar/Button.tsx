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
        <div>
          {text}
        </div>
      </StyledButton>
    </Link>
  );
};

const StyledButton = styled.div`
  height: calc(30px + 1vh);
  background: transparent;
  padding: 0 20px;
  cursor: pointer;
  display:flex;
  align-items: center;
  justify-content: center;

  div {
    color: #cccccc;
    text-decoration: underline;
    text-decoration-color: white;
    text-shadow: rgba(0,0,0,1) 0 0 6px;

    :hover {
      color: white;
    }
  }
`

export default Button;
