// WorkItem.tsx

import { styled } from "@linaria/react";
import { StyledWorkItem } from "../../styles/StyledWorkItem";

type workItemType = {
  title: string
  img: string
  tags: string[]
}

const WorkItem = ({ title, img, tags }: workItemType) => {
  return(
    <StyledWorkItem>
      <img src={img} alt='image'/>
      <div>
        <h4>{title}</h4>
        <ul>
          {tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </StyledWorkItem>
  );
};

export default WorkItem;
