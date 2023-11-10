// WorkBox.tsx

import { StyledWorkItem } from "../../styles/StyledWorkBox";
import { worksData } from "./WorksData";

type WorkBoxType = {
  id: string
  setShowIDNum: (id: string) => void
}

const WorkBox = ({ id, setShowIDNum }: WorkBoxType) => {
  const workDataKey: keyof typeof worksData = id
  const workData = worksData[workDataKey]

  const tagItems = workData.tags.map((tagItem, index) => 
    <li key={index}>{tagItem}</li>
  )
  return(
    <StyledWorkItem onClick={() => setShowIDNum(id)}>
      <img src={workData.srcImage} alt='image'/>
      <div>
        <h4>{workData.title}</h4>
        <ul>{tagItems}</ul>
      </div>
    </StyledWorkItem>
  );
};

export default WorkBox;
