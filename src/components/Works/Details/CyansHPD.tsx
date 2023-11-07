// CyansHPD.tsx

import src_Fuji from '../../../images/DSC_0050.jpg' 
import { StyledWorkDetail } from "../../../styles/StyledWorkDetail";

type CyansHPDType = {
  setShowIDNum: () => void
}

const CyansHPD = ({ setShowIDNum }: CyansHPDType) => {
  return(
    <StyledWorkDetail onClick={setShowIDNum}>
      <div>
        <img src={src_Fuji} alt='image'></img>
        <div>
          <div>Date: 2023.10.27</div>
          <h2>cyan's Homepage</h2>
          <p>
            本ウェブサイト。個人開発のプロダクトや趣味がわかりやすく見られるサイトがあれば良いなと思い作成。今後も作品が追加され次第更新していく予定。
          </p>
        </div>
      </div>
    </StyledWorkDetail>
  );
};

export default CyansHPD;
