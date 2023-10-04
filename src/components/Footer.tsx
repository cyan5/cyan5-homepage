// Footer.tsx

import { styled } from "@linaria/react";

const Footer = () => {
  return(
    <StyledFooter>
      <div>
        <button>Back to Page Top</button>
        <p>This Website is produced by cyan.</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 10vh;
  background: #1a1a1a;
  /* margin: 0; */

  div{
    max-width: 728px;
    height: 10vh;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    
    button {
      position: absolute;
      top: 1em;
      left: 50%;
      transform: translate(-50%, 0%);
      font-size: 10pt;
      color: #cfcfcf;
      text-align: center;
      border: none;
      background: transparent;
      cursor: pointer;
    }
    
    p {
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 8pt;
      text-align: right;
      color: #6f6f6f;
      margin: 0;
      margin-bottom: 1em;
    }
  }
`

export default Footer;
