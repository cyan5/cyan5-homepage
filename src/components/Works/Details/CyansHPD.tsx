// CyansHPD.tsx

import { StyledWorkDetail } from "../../../styles/StyledWorkDetail";
import src_Fuji from '../../../images/DSC_0050.jpg' 
import IconLink from "../IconLink";

type CyansHPDType = {
  setShowIDNum: (id: number) => void
}

const CyansHPD = ({ setShowIDNum }: CyansHPDType) => {
  return(
    <StyledWorkDetail onClick={() => setShowIDNum(0)}>
      <div>
        <img src={src_Fuji} alt='image'></img>
        <div>
          <div id='date'>Date: 2023.11.08</div>
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
          <div id='icon'>
            <ul>
              <IconLink iconShape='Link' link='https://cyan5.github.io/cyan5-homepage/'/>
              <IconLink iconShape='GitHub' link='https://github.com/cyan5/cyan5-homepage'/>
            </ul>
          </div>
        </div>
      </div>
    </StyledWorkDetail>
  );
};

export default CyansHPD;
