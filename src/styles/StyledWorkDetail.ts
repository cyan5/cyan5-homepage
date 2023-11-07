import { styled } from "@linaria/react"

export const StyledWorkDetail = styled.div`
  /* font-size: 100pt; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(128,128,128,0.5);
  backdrop-filter: blur(8px);
  /* opacity: 0.5; */
  z-index: 200;
  padding: 0;
  margin: 0;
  
  div {
    width: 80vh;
    border-radius: 20px;
    /* height: 80vh; */
    margin: 12.5vh auto;
    background: white;
    border-style: solid;
    border-color: rgb(160,160,160);

    img {
      object-fit: cover;
      display: block;
      width: 100%;
      height: 50%;
      padding: 0.5px;
      margin: 0;
      border-radius: 18.5px 18.5px 0px 0px;
    }

    div {
      position: relative;
      width: 100%;
      /* background: gray; */
      padding: 0.1px;
      margin: 0px;
      border-style: none;
      border-radius: 0px 0px 18.5px 18.5px;

      div {
        font-size: 10pt;
        position: absolute;
        width: auto;
        right: 2%;
        /* bottom: 10px; */
        /* background: black; */
      }

      h2 {
        text-align: center;
      }

      p {
        padding: 0% 3%;
      }
    }
  }
`
