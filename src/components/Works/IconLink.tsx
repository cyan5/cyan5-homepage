// IconLink.tsx

import { styled } from '@linaria/react'
import src_GitHub from '../../images/icon/github-mark.png'
import src_Link from '../../images/icon/hyperlink.png'
import src_X from '../../images/icon/xlogo-black_240p.png'

type IconLinkType = {
  iconShape: string
  link: string
}

const IconLink = ({ iconShape, link }: IconLinkType) => {
  const recIcon = () => {
    if (iconShape === 'GitHub') {
      return(
        <>
          <img src={src_GitHub} height='100%' alt='icon_GitHub'></img>
        </>
      )
    } else if (iconShape === 'Link') {
      return(
        <>
          <img src={src_Link} height='100%' alt='icon_Link'></img>
        </>
      )
    } else if (iconShape === 'X') {
      return(
        <>
          <img src={src_X} height='80%' alt='icon_X'></img>
        </>
      )
    }
  }

  const recText = () => {
    if (iconShape === 'GitHub') {
      return(
        <>GitHub</>
      )
    } else if (iconShape === 'Link') {
      return(
        <>Link</>
      )
    } else if (iconShape === 'X') {
      return(
        <>X(旧Twitter)</>
      )
    }
  }

  return(
    <>
      <StyledLi>
        <a href={link} target='_blank'>
          <div id='up'>
            {recIcon()}
          </div>
          <div id='down'>
            {recText()}
          </div>
        </a>
      </StyledLi>
    </>
  );
};

const StyledLi = styled.li`
  width: calc(50px + 5%);
  list-style: none;
  text-align: center;
  margin: 1vh 0 2vh;
  display: grid;
  grid-template-rows: 50px;

  a {
    #up {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    #down {
      height: auto;
    }
  }
`

// const StyledIcon = styled.div`
//   height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

export default IconLink;
