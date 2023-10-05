// About.tsx

import { styled } from "@linaria/react";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";

const About = () => {
  return(
    <div>
      <NavBar />
      <Cover />
      <StyledContents>
        <h1>About</h1>
        <StyledImage>image</StyledImage>
        <StyledH2>シアン / cyan</StyledH2>
        <h2>Outline</h2>
        <p>
          バックエンドに興味があり、Goの学習をしています。修了までにRust、MySQLを学習予定です。
        </p>
        <h2>Skills</h2>
          <ul>
            <li>C/C++</li>
            <li>Python</li>
            <li>TypeScript + React</li>
            <li>(Go)</li>
            <li>(Rust)</li>
            <li>(MySQL)</li>
          </ul>
        <h2>Career</h2>
          <ul>
            <li>2019年4月 東京工業大学 情報理工学院 入学</li>
            <li>2023年3月 東京工業大学 情報理工学院 情報工学系 卒業</li>
            <li>2023年4月 東京工業大学大学院 情報工学系 知能情報コース 入学</li>
            <li>2025年3月 東京科学大学大学院 情報工学系 知能情報コース(仮称) 卒業見込み</li>
          </ul>
        <h2>Links</h2>
          <ul>
            <li><a href='https://twitter.com/r_vanis' target="_blank">X (旧Twitter)</a></li>
            <li><a href='https://github.com/cyan5' target="_blank">GitHub</a></li>
          </ul>
      </StyledContents>
      <Footer />
    </div>
  );
};

const StyledImage = styled.div`
  text-align: center;
  color: transparent;
  background: cyan;
  background-image: url(src/images/cyan.png);
  background-size: 100%;
  width: 200px;
  height: 200px;
  border: 1px;
  margin: auto;
  border-style: solid;
  border-color: black;
  border-radius: 50%;
`

const StyledH2 = styled.h2`
  text-align: center;
`

export default About;
