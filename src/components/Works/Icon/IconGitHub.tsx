// IconLink.tsx

import src_GitHub from '../../../images/icon/github-mark.png'
import src_Link from '../../../images/icon/hyperlink.png'

type IconLinkType = {
  iconShape: string
  link: string
}

const IconLink = ({ iconShape, link }: IconLinkType) => {
  

  const recIcon = () => {
    if (iconShape === 'GitHub') {
      return <li><img src={src_GitHub} alt='GitHub_icon'></img>GitHub</li>
    } else if (iconShape === 'Link') {
      return <li><img src={src_Link} alt='Link_icon'></img>Link</li>
    }
  }

  return(
    recIcon()
  );
};

export default IconLink;
