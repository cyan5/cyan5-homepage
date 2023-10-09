// Works.tsx

import { styled } from "@linaria/react";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";

const Works = () => {
  return(
    <div>
      <NavBar />
      {/* <Cover /> */}
      <StyledContents>
        <h1>Works</h1>
        <StyledBox>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
          <li>e</li>
          <li>f</li>
          <li>g</li>
          <li>h</li>
          <li>i</li>
          <li>j</li>
          <li>j</li>
          <li>j</li>
          <li>j</li>
          <li>j</li>
          <li>j</li>
          <li>j</li>
          <li>j</li>
        </StyledBox>
      </StyledContents>
      <Footer />
    </div>
  );
};

const StyledBox = styled.ul`

  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);

  li {
    list-style: none;
    background: gray;
    width: 200px;
    height: 150px;
    margin: 8px;
    border: none;
    border-radius: 10px;

    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }
`

export default Works;
