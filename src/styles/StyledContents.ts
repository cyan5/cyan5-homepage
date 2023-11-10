import { styled } from "@linaria/react"

export const StyledContents = styled.div`
  max-width: 1000px;
  min-height: 40vh;
  padding: 1em;
  margin: auto;
  /* background-color: #e7efff; */

  h1 {
    width: fit-content;
    padding: 0 10px;
    margin: 6vh 0 3vh 0;
    border-style: solid;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 2px;
  }

  ul {
    padding: 0 30px;
    li {
      h2 {
        width: fit-content;
        padding: 0px 15px;
        text-decoration: underline;
        text-decoration-thickness: 1.6px;
      }
    }
  }

  p {
    padding-left: 45px;
    text-indent: 1rem;
  }

  #noindent {
    text-indent: 0;
  }
`