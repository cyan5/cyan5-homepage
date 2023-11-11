// Works.tsx

import { styled } from "@linaria/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";
import { useState } from "react";
import { worksProduct, worksHobby } from "../components/Works/WorksData";

// Works components
import CyansHP from "../components/Works/Boxes/CyansHP";
import ReactWorldWeather from "../components/Works/Boxes/ReactWorldWeather";
import MoveItem from "../components/Works/Boxes/MoveItem";
import Numer0nSearch from "../components/Works/Boxes/Numer0nSearch";
import Itookashi from "../components/Works/Boxes/Itookashi";
import Comp005 from "../components/Works/Boxes/Comp005";
import Kizuna from "../components/Works/Boxes/Kizuna";
import KaoruJuyoka from "../components/Works/Boxes/KaoruJuyoka";
import WorkDetail from "../components/Works/WorkDetail";
import WorkBox from "../components/Works/WorkBox";

const Works = () => {
  const [currentID, setCurrentID] = useState<string>('cyansHP')

  function setShowIDNum(id: string) {
    setCurrentID(id)
  }

  const closeDetail = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setCurrentID('')
    }
  }

  const workProductItems = worksProduct.map((workProductItem) =>
    <WorkBox key={workProductItem.id} dataSet={workProductItem} setShowIDNum={setShowIDNum} />
  )

  const workHobbyItems = worksHobby.map((workHobbyItem) => 
    <WorkBox key={workHobbyItem.id} dataSet={workHobbyItem} setShowIDNum={setShowIDNum} />
  )

  const workDetailItems = worksProduct.map((workDetailItem) =>
    <WorkDetail key={workDetailItem.id} currentID={currentID} dataSet={workDetailItem} closeDetail={closeDetail}/>
  )

  // const workDetail

  return(
    <>
      <NavBar />
      {/* {showDetail(currentID)} */}
      {workDetailItems}
      {/* <WorkDetail id={showID} closeDetail={closeDetail}/> */}
      <StyledContents>
        <h1>Works</h1>
        <ul><li><h2>Products</h2></li></ul>
        {/* <StyledBox>
          <WorkBox id={'cyansHP'} setShowIDNum={setShowIDNum} />
          <ReactWorldWeather />
          <MoveItem />
          <Numer0nSearch />
        </StyledBox> */}
        <StyledBox>{workProductItems}</StyledBox>
        <ul><li><h2>Hobbies</h2></li></ul>
        {/* <StyledBox>
          <Itookashi />
          <WorkBox id={'Comp005'} setShowIDNum={setShowIDNum} />
          <Kizuna />
          <KaoruJuyoka />
        </StyledBox> */}
        <StyledBox>{workHobbyItems}</StyledBox>
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
