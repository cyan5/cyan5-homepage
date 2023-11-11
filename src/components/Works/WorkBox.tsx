// WorkBox.tsx

import { StyledWorkItem } from "../../styles/StyledWorkBox";

type WorkBoxType = {
  dataSet: {
    id: string;
    title: string;
    date: string;
    srcImage: string;
    tags: string[];
    outline: string;
    links: {
      shape: string;
      link: string;
    }[];
  };
  setShowIDNum: (id: string) => void;
}

const WorkBox = ({ dataSet, setShowIDNum }: WorkBoxType) => {
  const tagItems = dataSet.tags.map((tagItem) => 
    <li key={tagItem}>{tagItem}</li>
  )
  return(
    <StyledWorkItem onClick={() => setShowIDNum(dataSet.id)}>
      <img src={dataSet.srcImage} alt='image'/>
      <div>
        <h4>{dataSet.title}</h4>
        <ul>{tagItems}</ul>
      </div>
    </StyledWorkItem>
  );
};

export default WorkBox;
