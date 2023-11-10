// WorkDetail.tsx

import { StyledContent, StyledImg, StyledWorkBody, StyledWorkDetail } from "../../../styles/StyledWorkDetail";
import IconLink from "../IconLink";
import { StyledIconRight } from "../../../styles/StyledIconRight";

type WorkDetailType = {
  srcImage: string
  closeDetail: (event: React.MouseEvent) => void
}

const WorkDetail = ({ srcImage, closeDetail }: WorkDetailType) => {
  return(
    <StyledWorkDetail onClick={closeDetail}>
      <StyledWorkBody>
        <StyledImg>
          <div onClick={closeDetail}>×</div>
          <img src={srcImage} alt='image'></img>
        </StyledImg>
        <StyledContent>
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
        </StyledContent>
      </StyledWorkBody>
    </StyledWorkDetail>
  );
};

export default WorkDetail;
