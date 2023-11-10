// CyansHP.tsx

import { StyledWorkItem } from "../../../styles/StyledWorkBox";
import src_Fuji from '../../../images/DSC_0050.jpg' 

type CyansHPType = {
  id: number
  setShowIDNum: (id: number) => void
}

const CyansHP = ({ id, setShowIDNum }: CyansHPType) => {
  return(
    <StyledWorkItem onClick={() => setShowIDNum(id)}>
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
