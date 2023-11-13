// IconLink.tsx

import { styled } from "@linaria/react"
import srcGitHub from "../images/icon/github-mark.png"
import srcLink from "../images/icon/hyperlink.png"
import srcX from "../images/icon/xlogo-black_240p.png"
import srcYouTube from "../images/icon/yt_icon_mono_light_240p.png"
import srcNiconico from "../images/icon/nc296561_172p.png"

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
  }, 
  niconico: {
    text: "ニコニコ動画", 
    height: "100%", 
    alt: "icon_niconico", 
    srcImage: srcNiconico
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
  width: 83px;
  /* height: min-content; */
  height: auto;
  list-style: none;
  text-align: center;
  
  a {
    display: grid;
    grid-template-rows: 50px min-content;
    height: auto;
    #up {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3px 0;
    }
    
    #down {
      font-size: 10pt;
      margin: 3px 0;
      align-items: center
    }
  }
`

export default IconLink;
