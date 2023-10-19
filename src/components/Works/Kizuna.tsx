// Kizuna.tsx

import { StyledWorkItem } from "../../styles/StyledWorkItem";
import src_Kizuna from '../../images/kizuna_thunbnail.png'


const Kizuna = () => {
  return(
    <StyledWorkItem>
      <img src={src_Kizuna} alt='image'/>
      <div>
        <h4>Google Chrome CM 初音ミク×Kizuna AI</h4>
        <ul>
          <li>動画制作</li>
        </ul>
      </div>
    </StyledWorkItem>
  );
};

export default Kizuna;
