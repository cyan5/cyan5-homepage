// Footer.tsx

import { styled } from "@linaria/react";

const Footer = () => {
  return(
    <StyledFooter>
      <div>
        <div onClick={() => backToTop()}>Back to Page Top</div>
        <p>This Website is produced by cyan.</p>
      </div>
    </StyledFooter>
  );
};

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const StyledFooter = styled.footer`
  height: calc(50px + 2vh);
  background: #1f353d;
  
  div{
    max-width: 1000px;
    height: 100%;
    margin: auto;
    position: relative;
    
    div {
      width: fit-content;
      padding: 8px;
      margin: auto;
      font-size: 10pt;
      color: #cfcfcf;
      background: transparent;
      cursor: pointer;
    }
    
    p {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 0;
      margin: 4px;
      font-size: 8pt;
      text-align: right;
      color: #6f6f6f;
    }
  }
`

export default Footer;
