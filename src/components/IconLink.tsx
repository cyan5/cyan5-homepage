// IconLink.tsx

import { styled } from '@linaria/react'
import srcGitHub from '../images/icon/github-mark.png'
import srcLink from '../images/icon/hyperlink.png'
import srcX from '../images/icon/xlogo-black_240p.png'
import srcYouTube from '../images/icon/yt_icon_rgb_240p.png'

type IconLinkType = {
  shape: string
  link: string
}

interface iconDataKey {
  [key: string]: {
    text: string;
    height: string;
    alt: string
    srcImage: string;
  };
}

const iconData: iconDataKey = {
  GitHub: {
    text: "GitHub", 
    height: "100%", 
    alt: "icon_GitHub", 
    srcImage: srcGitHub
  }, 
  Link: {
    text: "Link", 
    height: "100%", 
    alt: "icon_Link", 
    srcImage: srcLink
  }, 
  X: {
    text: "X (旧Twitter)", 
    height: "80%", 
    alt: "icon_X", 
    srcImage: srcX
  }, 
  YouTube: {
    text: "YouTube", 
    height: "80%", 
    alt: "icon_YouTube", 
    srcImage: srcYouTube
  }
}

const IconLink = ({ shape, link }: IconLinkType) => {
  return(
    <>
      <StyledLi>
        <a href={link} target='_blank'>
          <div id='up'>
            <img src={iconData[shape].srcImage} height={iconData[shape].height} alt={iconData[shape].alt}></img>
          </div>
          <div id='down'>{iconData[shape].text}</div>
        </a>
      </StyledLi>
    </>
  );
};

const StyledLi = styled.li`
  width: calc(2% + 60px);
  height: max-content;
  list-style: none;
  text-align: center;
  margin-top: 1vh;
  
  a {
    display: grid;
    grid-template-rows: 50px min-content;
    height: auto;
    #up {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    #down {
      font-size: 10pt;
      margin-top: 6px;
      align-items: center
    }
  }
`

export default IconLink;
