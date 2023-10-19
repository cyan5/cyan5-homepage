// CyansHomepage.tsx

import { StyledWorkItem } from "../../styles/StyledWorkItem";
import src_Fuji from '../../images/DSC_0050.jpg' 

const CyansHomepage = () => {
  return(
    <StyledWorkItem>
      <img src={src_Fuji} alt='image'/>
      <div>
        <h4>cyan's Homepage</h4>
        <ul>
          <li>TypeScript + React</li>
          <li>WebApp</li>
        </ul>
      </div>
    </StyledWorkItem>
  );
};

export default CyansHomepage;
