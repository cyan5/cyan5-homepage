// Section.tsx

import { StyledSection } from "../styles/StyledSection";

type SectionType = {
  text: string;
}

const Section = ({ text }: SectionType) => {
  return(
    <StyledSection>
      <ul>
        <li>
          <h2>{text}</h2>
        </li>
      </ul>
    </StyledSection>
  );
};

export default Section;
