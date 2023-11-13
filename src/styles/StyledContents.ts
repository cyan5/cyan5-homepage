import { styled } from "@linaria/react"

export const StyledContents = styled.div`
  max-width: 1000px;
  padding: 6vh 10px;
  padding: auto;
  margin: auto;

  p {
    padding-left: 45px;
    text-indent: 1rem;
  }

  #noindent {
    text-indent: 0;
  }
`