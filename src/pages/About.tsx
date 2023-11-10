// About.tsx

import { styled } from "@linaria/react";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";
import src_Cyan from '../images/cyan.png'
import { StyledIconLeft } from "../styles/StyledIconLeft";
import IconLink from "../components/Works/IconLink";

const About = () => {
  return(
    <div>
      <NavBar />
      <Cover />
      <StyledContents>
        <h1>About</h1>
        <StyledImg>
          <img src={src_Cyan} alt='cyan.png'/>
        </StyledImg>
        <StyledH2>シアン / cyan</StyledH2>
        <ul><li><h2>Outline</h2></li></ul>

        <p>
          バックエンド志望で現在はGoの学習をしていますが、フロント、SE、スマホアプリ、機械学習など幅広く興味があります。
        </p>
        <p>
          音楽が趣味で、ピアノを弾いたり、パソコンで音楽を編集したりしています。
        </p>

        <ul><li><h2>Skills</h2></li></ul>

        <ul>
          <li>C/C++</li>
          <li>Python</li>
          <li>TypeScript + React</li>
          <li>(Go)</li>
          <li>(Rust)</li>
          <li>(MySQL)</li>
        </ul>

        <ul><li><h2>Career</h2></li></ul>

        <p id='noindent'>
          2019年4月 東京工業大学 情報理工学院 入学<br/>
          2023年3月 東京工業大学 情報理工学院 情報工学系 卒業<br/>
          2023年4月 東京工業大学大学院 情報工学系 知能情報コース 入学<br/>
          {/* 2025年3月 東京科学大学大学院 情報工学系 知能情報コース(仮称) 卒業見込み */}
        </p>

        <ul><li><h2>Links</h2></li></ul>

        <StyledIconLeft>
          <IconLink iconShape='X' link={'https://twitter.com/r_vanis'} />
          <IconLink iconShape='GitHub' link={'https://github.com/cyan5'} />
        </StyledIconLeft>

      </StyledContents>
      <Footer />
    </div>
  );
};

const StyledImg = styled.div`
  background: cyan;
  width: 200px;
  height: 200px;
  border: 1px;
  margin: auto;
  border-style: solid;
  border-color: black;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

const StyledH2 = styled.div`
  font-size: 20pt;
  text-align: center;
  margin-top: 10px;
`

export default About;
