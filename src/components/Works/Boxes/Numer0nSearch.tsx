// Numer0nSearch.tsx

import { StyledWorkItem } from '../../../styles/StyledWorkBox';
import src_Numer0n from '../../../images/numer0nsearch.png'

const Numer0nSearch = () => {
  return(
    <StyledWorkItem>
      <img src={src_Numer0n} alt='image'/>
      <div>
        <h4>numer0n-search</h4>
        <ul>
          <li>C</li>
          <li>Console</li>
        </ul>
      </div>
    </StyledWorkItem>
  );
};

export default Numer0nSearch;
