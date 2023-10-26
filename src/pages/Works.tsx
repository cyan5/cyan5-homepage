// Works.tsx

import { styled } from "@linaria/react";
// import Cover from "../components/Cover";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";
import { useState } from "react";

// Works components
import CyansHomepage from "../components/Works/CyansHomepage";
import ReactWorldWeather from "../components/Works/ReactWorldWeather";
import MoveItem from "../components/Works/MoveItem";
import Numer0nSearch from "../components/Works/Numer0nSearch";
import Itookashi from "../components/Works/Itookashi";
import Comp005 from "../components/Works/Comp005";
import Kizuna from "../components/Works/Kizuna";
import KaoruJuyoka from "../components/Works/KaoruJuyoka";
import MultiAgentSimulation from "../components/Works/MultiAgentSimulation";
// import Details from "../components/Works/Detail";

const Works = () => {
  // const [showId, setShowId] = useState<number>();

  return(
    <div>
      {/* <Cover /> */}
      <NavBar />
      {/* <Details id={showId}/> */}
      <StyledContents>
        <h1>Works</h1>
        <h2>Products</h2>
        <StyledBox>
          <CyansHomepage />
          <ReactWorldWeather />
          <MoveItem />
          <Numer0nSearch />
          <MultiAgentSimulation />
        </StyledBox>
        <h2>Hobbies</h2>
        <StyledBox>
          <Itookashi />
          <Comp005 />
          <Kizuna />
          <KaoruJuyoka />
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
  width: 100%;
  margin: 0;
  padding: 0;
`

export default Works;
