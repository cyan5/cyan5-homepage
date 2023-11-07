// CyansHP.tsx

import { StyledWorkItem } from "../../../styles/StyledWorkBox";
import src_Fuji from '../../../images/DSC_0050.jpg' 

type CyansHPType = {
  setShowIDNum: () => void
}

const CyansHP = ({ setShowIDNum }: CyansHPType) => {
  return(
    <StyledWorkItem onClick={setShowIDNum}>
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

export default CyansHP;
