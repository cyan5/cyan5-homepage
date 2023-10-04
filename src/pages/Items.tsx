// Works.tsx

import Cover from "../components/Cover";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";

const Works = () => {
  return(
    <div>
      <NavBar />
      <Cover />
      <StyledContents>
        <h1>This is Works Page.</h1>
      </StyledContents>
      <Footer />
    </div>
  );
};

export default Works;
