import { styled } from "@linaria/react"

export const StyledContents = styled.div`
  max-width: 1000px;
  padding: calc(30px + 1vh) 10px;
  margin: auto;

  p {
    padding-left: 30px;
    margin: 0;
    text-indent: 1rem;
  }

  #noindent {
    text-indent: 0;
  }
`