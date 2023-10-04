// NotFound.tsx

import Cover from "../components/Cover";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";

const NotFound = () => {
  return(
    <div>
      <NavBar />
      <Cover />
      <StyledContents>
        <h1>404 Not Found.</h1>
      </StyledContents>
      <Footer />
    </div>
  );
};

export default NotFound;
