// Works.tsx

import { styled } from "@linaria/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";
import { useState } from "react";
import { workProducts, workHobbies } from "../components/Works/WorksData";
import WorkDetail from "../components/Works/WorkDetail";
import WorkBox from "../components/Works/WorkBox";

const Works = () => {
  const [currentID, setCurrentID] = useState<string>('')

  function setShowIDNum(id: string) {
    setCurrentID(id)
  }

  const closeDetail = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setCurrentID('')
    }
  }

  const workProductBoxes = workProducts.map((workProductBox) =>
    <WorkBox key={workProductBox.id} dataSet={workProductBox} setShowIDNum={setShowIDNum} />
  )

  const workHobbyBoxes = workHobbies.map((workHobbyBox) => 
    <WorkBox key={workHobbyBox.id} dataSet={workHobbyBox} setShowIDNum={setShowIDNum} />
  )

  const workProductDetails = workProducts.map((workDetailItem) =>
    <WorkDetail key={workDetailItem.id} currentID={currentID} dataSet={workDetailItem} closeDetail={closeDetail}/>
  )

  const workHobbyDetails = workHobbies.map((workHobbyDetail) =>
    <WorkDetail key={workHobbyDetail.id} currentID={currentID} dataSet={workHobbyDetail} closeDetail={closeDetail}/>
  )

  return(
    <>
      <NavBar />
      {workProductDetails}
      {workHobbyDetails}
      <StyledContents>
        <h1>Works</h1>
        <ul><li><h2>Products</h2></li></ul>
        <StyledBox>{workProductBoxes}</StyledBox>
        <ul><li><h2>Hobbies</h2></li></ul>
        <StyledBox>{workHobbyBoxes}</StyledBox>
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
