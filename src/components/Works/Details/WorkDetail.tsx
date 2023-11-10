// WorkDetail.tsx

// import { StyledContent } from "../../../styles/StyledWorkDetail";
import IconLink from "../IconLink";
import { StyledIconRight } from "../../../styles/StyledIconRight";
import { styled } from "@linaria/react";

type WorkDetailType = {
  srcImage: string
  closeDetail: (event: React.MouseEvent) => void
}

const WorkDetail = ({ srcImage, closeDetail }: WorkDetailType) => {
  return(
    <StyledWorkDetail onClick={closeDetail}>
      <StyledWorkBody>
        <StyledUp>
          <div onClick={closeDetail}>×</div>
          <img src={srcImage} alt='image'></img>
        </StyledUp>
        <StyledDown>
          <div id='date'>Date: 2023.11.10</div>
          <h2>cyan's Homepage</h2>
          <div id='tags'>
            <ul>
              <li>TypeScript + React</li>
              <li>WebApp</li>
            </ul>
          </div>
          <p>
            当ウェブサイト。プロダクトや趣味をわかりやすくするために作成。今後も作品が追加され次第更新予定。
          </p>
          <StyledIconRight>
            <IconLink iconShape='Link' link='https://cyan5.github.io/cyan5-homepage/'/>
            <IconLink iconShape='GitHub' link='https://github.com/cyan5/cyan5-homepage'/>
          </StyledIconRight>
        </StyledDown>
      </StyledWorkBody>
    </StyledWorkDetail>
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
    width: 80vw;
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
  padding: 0 3% 20px;

  h2 {
    text-align: center;
    margin: 2.5vh 0 0 0;
  }

  h4 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  #date {
    text-align: right;
    font-size: 10pt;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.2vh 3%;
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

export default WorkDetail;