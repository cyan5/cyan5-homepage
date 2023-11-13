// SectionLink.tsx

import { Link } from "react-router-dom";
import { StyledSection } from "../styles/StyledSection";

type SectionLinkType = {
  text: string;
  link: string;
}

const SectionLink = ({ text, link }: SectionLinkType) => {
  return(
    <StyledSection>
      <ul>
        <li>
          <h2>
            <Link to={link}>{text}</Link>
          </h2>
        </li>
      </ul>
    </StyledSection>
  );
};

export default SectionLink;
