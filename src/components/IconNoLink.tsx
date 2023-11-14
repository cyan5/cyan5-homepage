// IconNoLink.tsx

import { styled } from "@linaria/react";

import srcC from "../images/skills/c-original.svg"
import srcCPP from "../images/skills/cplusplus-original.svg"
import srcCSS from "../images/skills/css3-original.svg"
import srcFigma from "../images/skills/figma-original.svg"
import srcGo from "../images/skills/go-original-wordmark.svg"
import srcHTML from "../images/skills/html5-original.svg"
import srcJava from "../images/skills/java-original.svg"
import srcJS from "../images/skills/javascript-original.svg"
import srcKotlin from "../images/skills/kotlin-original.svg"
import srcMATLAB from "../images/skills/matlab-original.svg"
import srcNodejs from "../images/skills/nodejs-original.svg"
import srcPython from "../images/skills/python-original.svg"
import srcPyTorch from "../images/skills/pytorch-original.svg"
import srcR from "../images/skills/r-original.svg"
import srcReact from "../images/skills/react-original.svg"
import srcRust from "../images/skills/rust-plain.svg"
import srcTS from "../images/skills/typescript-original.svg"
import srcVite from "../../public/vite.svg"
import srcUbuntu from "../images/skills/ubuntu-plain.svg"
// import src from "../images/skills"

type IconNoLinkType = {
  shape: string;
}

interface iconDataKey {
  [key: string]: {
    text: string;
    height: string;
    alt: string;
    srcImage: string;
  }
}

const iconData: iconDataKey = {
  C: {
    text: "C", 
    height: "100%", 
    alt: "icon_C", 
    srcImage: srcC
  }, 
  CPP: {
    text: "C++", 
    height: "100%", 
    alt: "icon_CPP", 
    srcImage: srcCPP
  }, 
  CSS: {
    text: "CSS", 
    height: "100%", 
    alt: "icon_CSS", 
    srcImage: srcCSS
  }, 
  Go: {
    text: "Go", 
    height: "100%", 
    alt: "icon_Go", 
    srcImage: srcGo
  }, 
  Figma: {
    text: "Figma", 
    height: "100%", 
    alt: "icon_Figma", 
    srcImage: srcFigma
  }, 
  HTML: {
    text: "HTML", 
    height: "100%", 
    alt: "icon_HTML", 
    srcImage: srcHTML
  }, 
  Java: {
    text: "Java", 
    height: "100%", 
    alt: "icon_Java", 
    srcImage: srcJava
  }, 
  JS: {
    text: "JavaScript", 
    height: "100%", 
    alt: "icon_JavaScript", 
    srcImage: srcJS
  }, 
  Kotlin: {
    text: "Kotlin", 
    height: "100%", 
    alt: "icon_Kotlin", 
    srcImage: srcKotlin
  }, 
  MATLAB: {
    text: "MATLAB", 
    height: "100%", 
    alt: "icon_MATLAB", 
    srcImage: srcMATLAB
  }, 
  Nodejs: {
    text: "Node.js", 
    height: "100%", 
    alt: "icon_Nodejs", 
    srcImage: srcNodejs
  }, 
  Python: {
    text: "Python", 
    height: "100%", 
    alt: "icon_Python", 
    srcImage: srcPython
  }, 
  PyTorch: {
    text: "PyTorch", 
    height: "100%", 
    alt: "icon_PyTorch", 
    srcImage: srcPyTorch
  }, 
  R: {
    text: "R", 
    height: "100%", 
    alt: "icon_R", 
    srcImage: srcR
  }, 
  React: {
    text: "React", 
    height: "100%", 
    alt: "icon_React", 
    srcImage: srcReact
  }, 
  Rust: {
    text: "Rust", 
    height: "100%", 
    alt: "icon_Rust", 
    srcImage: srcRust
  }, 
  TS: {
    text: "TypeScript", 
    height: "100%", 
    alt: "icon_TypeScript", 
    srcImage: srcTS
  }, 
  Vite: {
    text: "Vite", 
    height: "100%", 
    alt: "icon_Vite", 
    srcImage: srcVite
  }, 
  Ubuntu: {
    text: "Ubuntu", 
    height: "100%", 
    alt: "icon_Ubuntu", 
    srcImage: srcUbuntu
  }, 
  // : {
  //   text: "", 
  //   height: "100%", 
  //   alt: "icon_", 
  //   srcImage: src
  // }, 
}

const IconNoLink = ({ shape }: IconNoLinkType) => {
  return(
    <>
      <StyledLi>
        <div>
          <div id='up'>
            <img src={iconData[shape].srcImage} height={iconData[shape].height} alt={iconData[shape].alt}></img>
          </div>
          <div id='down'>{iconData[shape].text}</div>
        </div>
      </StyledLi>
    </>
  );
};

const StyledLi = styled.li`
  width: 80px;
  height: auto;
  padding: 0;
  margin: 10px;
  list-style: none;
  text-align: center;
  
  div {
    display: grid;
    grid-template-rows: min-content;
    height: auto;
    #up {
      height: 50px;
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

export default IconNoLink;
