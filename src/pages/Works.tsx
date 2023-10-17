// Works.tsx

import { styled } from "@linaria/react";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";
import WorkItem from "../components/Works/WorkItem";

const Works = () => {
  return(
    <div>
      <NavBar />
      <Cover />
      <StyledContents>
        <h1>Works</h1>
        <h2>Products</h2>
        <StyledBox>
          <WorkItem 
            title="cyan's Homepage" 
            img='src/images/DSC_0050.jpg' 
            tags={['TypeScript + React']}/>
          <WorkItem 
            title='React World Weather' 
            img='src/images/reactworldweather.png' 
            tags={['TypeScript + React']}/>
          <WorkItem 
            title='MoveItem' 
            img='src/images/moveitem.png' 
            tags={['Powershell']}/>
          <WorkItem 
            title='numer0n-search' 
            img='' 
            tags={['C']}/>
          <WorkItem 
            title='Multi-Agent-Simulation' 
            img='' 
            tags={['Python']}/>
          {/* <WorkItem 
            title='' 
            img='' 
            tags={[]}/> */}
        </StyledBox>
        <h2>Hobbies</h2>
        <StyledBox>
          <WorkItem 
              title='『いとおかし』耳コピ' 
              img='' 
              tags={['DTM']}/>
          {/* <WorkItem 
              title='' 
              img='' 
              tags={[]}/> */}
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
  margin: 0;
  padding: 0;
`

export default Works;
