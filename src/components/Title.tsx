// Title.tsx

import { styled } from "@linaria/react";

type TitleType = {
  text: string;
}

const Title = ({ text }: TitleType) => {
  return(
    <StyledTitle>&nbsp;{text}&nbsp;</StyledTitle>
  );
};

const StyledTitle = styled.h1`
  width: fit-content;
  padding: 0;
  margin: 2vh 0;
  text-decoration: underline;
  text-underline-offset: 13px;
  filter: drop-shadow(1px 1px 1.3px #bbbbbb);
`

export default Title;
