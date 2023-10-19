// MoveItem.tsx

import { StyledWorkItem } from "../../styles/StyledWorkItem";
import src_MoveItem from '../../images/moveitem.png' 

const MoveItem = () => {
  return(
    <StyledWorkItem>
      <img src={src_MoveItem} alt='image'/>
      <div>
        <h4>MoveItem</h4>
        <ul>
          <li>Powershell</li>
          <li>Shell</li>
        </ul>
      </div>
    </StyledWorkItem>
  );
};

export default MoveItem;
