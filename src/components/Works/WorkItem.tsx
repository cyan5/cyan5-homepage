// WorkItem.tsx

import { styled } from "@linaria/react";

type workItemType = {
  img: string
  title: string
  tags: string[]
}

const WorkItem = ({ img, title, tags }: workItemType) => {
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

const StyledWorkItem = styled.li`
  list-style: none;
  width: 248px;
  height: 186px;
  margin: 4px;
  border: 1.2px;
  border-style: solid;
  border-color: gray;
  border-radius: 10px;
  position: relative;

  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 67%;
    border-radius: 8px 8px 0px 0px;
    margin: 0;
  }

  div {
    position: absolute;
    bottom: 0px;
    width: 100%;
    border-radius: 0px 0px 8px 8px;
    padding: 6px 20px;
    margin: 0;

    h4 {
      margin: 0;
    }

    ul {
      padding: 0;
      margin: 0;

      li {
        list-style: none;
        display: inline-flex;
        flex-wrap: wrap;
        flex-direction: row;
        font-size: 8pt;
        color: #555555;
        background: #dddddd;
        margin: 0px 4px 0px 0px;
        padding: 2px 4px;
        border-radius: 6px;
      }
    }
  }
`


export default WorkItem;
