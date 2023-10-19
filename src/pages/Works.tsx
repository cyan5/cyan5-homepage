// Works.tsx

import { styled } from "@linaria/react";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";
import WorkItem from "../components/Works/WorkItem";
// images
import src_Fuji from '../images/DSC_0050.jpg' 
import src_Weather from '../images/reactworldweather.png' 
import src_MoveItem from '../images/moveitem.png' 

import src_Itookashi from '../images/thumbnail2.png'
import src_Kizuna from '../images/kizuna_thunbnail.png'

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
            img={src_Fuji}
            tags={['TypeScript + React', 'WebApp']}/>
          <WorkItem 
            title='React World Weather' 
            img={src_Weather}
            tags={['TypeScript + React', 'WebApp']}/>
          <WorkItem 
            title='MoveItem' 
            img={src_MoveItem}
            tags={['Powershell', 'Shell']}/>
          <WorkItem 
            title='numer0n-search' 
            img='' 
            tags={['C', 'Console']}/>
          <WorkItem 
            title='Multi-Agent-Simulation' 
            img='' 
            tags={['Python', 'Console']}/>
        </StyledBox>
        <h2>Hobbies</h2>
        <StyledBox>
          <WorkItem 
            title='『いとおかし』耳コピ' 
            img={src_Itookashi} 
            tags={['DTM', '耳コピ']}/>
          <WorkItem 
            title='自作曲' 
            img='' 
            tags={['DTM', '作曲']}/>
          <WorkItem 
            title='Google Chrome CM 初音ミク×Kizuna AI' 
            img={src_Kizuna} 
            tags={['動画制作']}/>
          <WorkItem 
            title='『香る樹葉花』耳コピ' 
            img='' 
            tags={['DTM', '耳コピ']}/>
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
