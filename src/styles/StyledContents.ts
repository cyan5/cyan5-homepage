import { styled } from "@linaria/react"

export const StyledContents = styled.div`
  max-width: 800px;
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

  h2 {
    background-color: #eeefff;
    padding: 0px 15px;
    border-style: solid;
    border-color: #174f7f;
    border-top-width: 0px;
    border-left-width: 5px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }

  p {
    text-indent: 1rem;
  }
`