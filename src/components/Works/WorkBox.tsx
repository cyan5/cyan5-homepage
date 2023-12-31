// WorkBox.tsx

import { styled } from "@linaria/react";

type WorkBoxType = {
  dataSet: {
    id: string;
    title: string;
    date: string;
    srcImage: string;
    tags: string[];
    outline: JSX.Element;
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

const StyledWorkItem = styled.li`
  list-style: none;
  width: calc(97% / 3);
  margin: 0.5%;
  height: 220px;
  border: 1.2px;
  border-style: solid;
  border-color: gray;
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  @media only screen and (max-width: 790px) {
    width: calc(98% / 2);
  }

  @media only screen and (max-width: 540px) {
    width: calc(99%);
    margin: 7px 0.5%;
  }

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
    box-sizing: border-box;

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
        font-weight: bold;
        color: #555555;
        background: #dddddd;
        margin: 0px 4px 0px 0px;
        padding: 2px 4px;
        border-radius: 6px;
      }
    }
  }
`

export default WorkBox;
