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
    width: 600px;
    /* height: 700px; */
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    /* margin: 0 auto; */
    transform: translate(-50%, -50%);
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    background: white;
    border-style: solid;
    border-color: rgb(160,160,160);

    @media only screen and (max-width: 750px) {
      width: 80vw;
    }

    img {
      position: relative;
      /* object-fit: cover; */
      /* display: block; */
      width: 100%;
      height: 30%;
      padding: 0.5px;
      margin: 0;
      border-radius: 18.5px 18.5px 0px 0px;
    }

    div {
      position: relative;
      width: 100%;
      /* bottom: 0; */
      /* background: gray; */
      padding: 0.1px;
      margin: 0px;
      border-style: none;
      transform: translate(-50%, 0);
      border-radius: 0px 0px 18.5px 18.5px;

      #date {
        text-align: right;
        font-size: 10pt;
        position: absolute;
        /* width: auto; */
        top: 0;
        right: 2%;
        /* bottom: 10px; */
        padding: 0% 3%;
      }

      h2 {
        text-align: center;
        margin: 1em 0 0 0;
      }

      h4 {
        padding: 0% 3%;
        margin: 0;
      }

      p {
        padding: 0% 3%;
        margin: 0;
      }

      #tags {
        ul {
          padding: 0% 3%;
          li {
            list-style: none;
            display: inline-flex;
            flex-wrap: wrap;
            flex-direction: row;
            font-size: 10.5pt;
            font-weight: bold;
            color: #555555;
            background: #dddddd;
            margin: 3px;
            padding: 3px 6px;
            border-radius: 6px;
          }
        }
      }

      #icon {
        ul {
          display: flex;
          justify-content: right;
          align-items: center;
          margin: 0 30px 0 0;
          /* list-style: none; */
          li {
            text-align: center;
            /* display: inline; */
            margin: 15px;
            width: 50px;
            /* size: auto; */
            list-style: none;
            /* flex-direction: row; */
            /* margin: auto; */
          }
        }
      }
    }
  }
`
