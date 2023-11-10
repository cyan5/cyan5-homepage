// Works.tsx

import { styled } from "@linaria/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";
import { useState } from "react";

// Works components
import CyansHP from "../components/Works/Boxes/CyansHP";
import CyansHPD from "../components/Works/Details/CyansHPD";
import ReactWorldWeather from "../components/Works/Boxes/ReactWorldWeather";
import MoveItem from "../components/Works/Boxes/MoveItem";
import Numer0nSearch from "../components/Works/Boxes/Numer0nSearch";
import Itookashi from "../components/Works/Boxes/Itookashi";
import Comp005 from "../components/Works/Boxes/Comp005";
import Kizuna from "../components/Works/Boxes/Kizuna";
import KaoruJuyoka from "../components/Works/Boxes/KaoruJuyoka";

const Works = () => {
  const [showID, setShowID] = useState<string>('');

  function setShowIDNum(id: string) {
    setShowID(id)
  }

  const showDetail = (id: string) => {
    if (id === 'cyansHP') {
      return (
        <CyansHPD closeDetail={closeDetail}/>
      )
    }
  }

  const closeDetail = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setShowID('')
    }
  }

  return(
    <>
      <NavBar />
      {showDetail(showID)}
      <StyledContents>
        <h1>Works</h1>
        <h2>Products</h2>
        <StyledBox>
          <CyansHP id={'cyansHP'} setShowIDNum={setShowIDNum}/>
          <ReactWorldWeather />
          <MoveItem />
          <Numer0nSearch />
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
    </>
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
