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

  h4 {
    color: #555555;
    padding: 0;
    margin: 8px 0 8px 30px;
    text-decoration: underline;

  }

  #noindent {
    text-indent: 0;
  }
`