// SubSubSection.tsx

import { styled } from "@linaria/react";

type SubSubSectionType = {
  text: string;
}

const SubSubSection = ({ text }: SubSubSectionType) => {
  return(
    <StyledSubSubSection>{text}</StyledSubSubSection>
  );
};

const StyledSubSubSection = styled.h4`
  color: #555555;
  width: fit-content;
  padding: 0px;
  margin: 8px 0 8px 30px;
  text-decoration: underline;
  filter: drop-shadow(1px 1px 1.3px #cccccc);
`

export default SubSubSection;
