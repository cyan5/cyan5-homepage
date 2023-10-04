// About.tsx

import Cover from "../components/Cover";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";

const About = () => {
  return(
    <div>
      <NavBar />
      <Cover />
      <StyledContents>
        <h1>This is About Page.</h1>
      </StyledContents>
      <Footer />
    </div>
  );
};

export default About;
