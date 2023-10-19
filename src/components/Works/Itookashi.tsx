// Itookashi.tsx

import { StyledWorkItem } from "../../styles/StyledWorkItem";
import src_Itookashi from '../../images/thumbnail2.png'

const Itookashi = () => {
  return(
    <StyledWorkItem>
      <img src={src_Itookashi} alt='image'/>
      <div>
        <h4>『いとおかし』耳コピ</h4>
        <ul>
          <li>DTM</li>
          <li>耳コピ</li>
        </ul>
      </div>
    </StyledWorkItem>
  );
};

export default Itookashi;
