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
        <StyledBox>
          <WorkItem 
            img='src/images/DSC_0050.JPG' 
            title="cyan's Homepage" 
            tags={['TypeScript', 'React']}/>
          <WorkItem 
            img='' 
            title='React World Weather' 
            tags={['TypeScript', 'React']}/>
          <WorkItem 
            img='' 
            title='MoveItem' 
            tags={['Powershell']}/>
          <WorkItem 
            img='' 
            title='numer0n-search' 
            tags={['C言語']}/>
          <WorkItem 
            img='' 
            title='Multi-Agent-Simulation' 
            tags={['Python']}/>
          <WorkItem 
            img='' 
            title='' 
            tags={[]}/>
          <WorkItem 
            img='' 
            title='' 
            tags={[]}/>
          <WorkItem 
            img='' 
            title='' 
            tags={[]}/>
          <WorkItem 
            img='' 
            title='' 
            tags={[]}/>
          <WorkItem 
            img='' 
            title='' 
            tags={[]}/>
          <WorkItem 
            img='' 
            title='' tags={[]}/>
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
