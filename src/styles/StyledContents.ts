import { styled } from "@linaria/react"

export const StyledContents = styled.div`
  max-width: 1000px;
  padding: calc(30px + 1vh) calc(15px + 1vw);
  /* padding: auto; */
  margin: auto;

  p {
    font-family: 'Raleway';
    padding-left: 45px;
    margin: 0;
    text-indent: 1rem;
  }

  #noindent {
    text-indent: 0;
  }
`