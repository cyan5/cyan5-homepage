// KaoruJuyoka.tsx

import { StyledWorkItem } from '../../../styles/StyledWorkBox';
import src_KaoruJuyoka from '../../../images/kaorujuyoka.png'

const KaoruJuyoka = () => {
  return(
    <StyledWorkItem>
      <img src={src_KaoruJuyoka} alt='image'/>
      <div>
        <h4>『香る樹葉花』耳コピ</h4>
        <ul>
          <li>DTM</li>
          <li>耳コピ</li>
        </ul>
      </div>
    </StyledWorkItem>
  );
};

export default KaoruJuyoka;
