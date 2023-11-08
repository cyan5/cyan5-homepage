// Comp005.tsx

import { StyledWorkItem } from "../../../styles/StyledWorkBox";
import src_Comp005 from '../../../images/comp005.png'

const Comp005 = () => {
  return(
    <StyledWorkItem>
      <img src={src_Comp005} alt='image'/>
      <div>
        <h4>作曲005</h4>
        <ul>
          <li>DTM</li>
          <li>作曲</li>
        </ul>
      </div>
    </StyledWorkItem>
  );
};

export default Comp005;
