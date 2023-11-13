// WorkDetail.tsx

import IconLink from "../IconLink";
import { StyledIconRight } from "../../styles/StyledIconRight";
import { styled } from "@linaria/react";

type WorkDetailType = {
  currentID: string;
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
  closeDetail: (event: React.MouseEvent) => void;
}

const WorkDetail = ({ currentID, dataSet, closeDetail }: WorkDetailType) => {
  const tagItems = dataSet.tags.map((tagItem) => 
    <li key={tagItem}>{tagItem}</li>
  )

  const iconLinkItems = dataSet.links.map((iconLinkItem) =>
    <IconLink key={iconLinkItem.shape} shape={iconLinkItem.shape} link={iconLinkItem.link} />
  )

  return(
    <>
      {
        (dataSet.id === currentID) &&
        <StyledWorkDetail onClick={closeDetail}>
          <StyledWorkBody>
            <StyledUp>
              <StyledDel onClick={closeDetail}>×</StyledDel>
              <img src={dataSet.srcImage} alt='image'></img>
            </StyledUp>
            <StyledDown>
              <div id='date'>Date: {dataSet.date}</div>
              <h2>{dataSet.title}</h2>
              <div id='tags'>
                <ul>{tagItems}</ul>
              </div>
              <p>{dataSet.outline}</p>
              <StyledIconRight>{iconLinkItems}</StyledIconRight>
            </StyledDown>
          </StyledWorkBody>
        </StyledWorkDetail>
      }
    </>
  );
};

const StyledWorkDetail = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(128,128,128,0.5);
  backdrop-filter: blur(8px);
  z-index: 200;
  padding: 0;
  margin: 0;
`

const StyledWorkBody = styled.div`  
  width: 840px;
  @media only screen and (max-width: 1050px) {
    width: 92vw;
  }
  height: 672px;
  @media only screen and (max-height: 700px) {
    height: 96vh;
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 20px;
  border-style: solid;
  border-color: rgb(160,160,160);
  display: grid;
  grid-template-rows: minmax(20vh, auto) min-content;
`

const StyledUp = styled.div`
  position: relative;
  width: 100%;
  background-color: gray;
  background-size: cover;
  padding: 0.8px;
  border-radius: 18px 18px 0px 0px;
  object-fit: cover;

  div {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 16pt;
    padding: 0 6px;
    margin: 1.5%;

    :hover {
      cursor: pointer
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 18px 18px 0px 0px;
  }
`

const StyledDown = styled.div`
  position: relative;
  padding: 2% 8%;

  h2 {
    text-align: center;
    margin: 2.5vh 0 0 0;
  }

  h4 {
    margin: 0;
  }

  p {
    text-indent: 1rem;
    margin: 0;
  }

  #date {
    text-align: right;
    font-size: 10pt;
    position: absolute;
    top: 0;
    right: 0;
    padding: 2% 5%;
  }

  #tags {
    ul {
      padding: 0;
      margin: 1vh 0;
      li {
        list-style: none;
        display: inline-flex;
        flex-wrap: wrap;
        flex-direction: row;
        font-size: 10.5pt;
        font-weight: bold;
        color: #555555;
        background: #dddddd;
        margin: 0 6px 6px 0;
        padding: 3px 6px;
        border-radius: 6px;
      }
    }
  }
`

const StyledDel = styled.div`
  font-family: 'MaterialIcons';
  text-shadow: 0px 1px 1px white, 0px -1px 1px white, 1px 0px 1px white, -1px 0px 1px white;
`

export default WorkDetail;
