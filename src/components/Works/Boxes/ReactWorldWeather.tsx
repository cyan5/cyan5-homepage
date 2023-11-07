// ReactWorldWeather.tsx

import { StyledWorkItem } from "../../../styles/StyledWorkBox";
import src_Weather from '../../../images/reactworldweather.png' 

const ReactWorldWeather = () => {
  return(
    <StyledWorkItem>
      <img src={src_Weather} alt='image'/>
      <div>
        <h4>React World Weather</h4>
        <ul>
          <li>TypeScript + React</li>
          <li>WebApp</li>
        </ul>
      </div>
    </StyledWorkItem>
  );
};

export default ReactWorldWeather;
