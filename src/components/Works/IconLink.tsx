// IconLink.tsx

import src_GitHub from '../../images/icon/github-mark.png'
import src_Link from '../../images/icon/hyperlink.png'

type IconLinkType = {
  iconShape: string
  link: string
}

const IconLink = ({ iconShape, link }: IconLinkType) => {
  const recIcon = () => {
    if (iconShape === 'GitHub') {
      return (
        <>
          <img src={src_GitHub} alt='GitHub_icon'></img>
          GitHub
        </>
      )
    } else if (iconShape === 'Link') {
      return (
        <>
          <img src={src_Link} alt='Link_icon'></img>
          Link
        </>
      )
    }
  }

  return(
    <>
      <a href={link} target='_blank'>
        <li>
          {recIcon()}
        </li>
      </a>
    </>
  );
};

export default IconLink;
