// About.tsx

import { styled } from "@linaria/react";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { StyledContents } from "../styles/StyledContents";
import src_Cyan from '../images/cyan.png'
import { StyledIconLeft } from "../styles/StyledIconLeft";
import IconLink from "../components/IconLink";
import Title from "../components/Title";
import Section from "../components/Section";
import IconNoLink from "../components/IconNoLink";
import SubSubSection from "../components/SubSubSection";

const About = () => {
  return(
    <div>
      <NavBar />
      <Cover />
      <StyledContents>
        <Title text="About"/>
        <StyledImg>
          <img src={src_Cyan} alt='cyan.png'/>
        </StyledImg>
        <StyledH2>シアン / cyan</StyledH2>
        <Section text="Outline" />

        <p>
          バックエンド開発のため、現在はGo言語の学習をしています。他にもフロント、システム、スマホアプリ、機械学習などの分野に幅広く興味があります。
        </p>
        <p>
          音楽が大好きで、パソコンで音楽を編集したり、ピアノを弾いたりするのが趣味です。
        </p>

        <Section text="Skills" />

        <SubSubSection text="オリジナルの成果物を作成できる" />
        <StyledIconLeft>
          <IconNoLink shape="C"/>
          <IconNoLink shape="Python"/>
          {/* <IconNoLink shape="JS"/> */}
          <IconNoLink shape="TS"/>
          <IconNoLink shape="React"/>
          {/* <IconNoLink shape="Vite"/> */}
          <IconNoLink shape="Nodejs"/>
          {/* <IconNoLink shape="HTML"/> */}
          {/* <IconNoLink shape="CSS"/> */}
          {/* <IconNoLink shape="Ubuntu"/> */}
        </StyledIconLeft>
        <SubSubSection text="学習中または学習予定" />
        <StyledIconLeft>
          <IconNoLink shape="CPP"/>
          <IconNoLink shape="Go"/>
          <IconNoLink shape="Rust"/>
          <IconNoLink shape="Kotlin"/>
          <IconNoLink shape="PyTorch"/>
        </StyledIconLeft>
        <SubSubSection text="使用したことがある" />
        <StyledIconLeft>
          <IconNoLink shape="Figma"/>
          <IconNoLink shape="Java"/>
          <IconNoLink shape="R"/>
          <IconNoLink shape="MATLAB"/>
        </StyledIconLeft>

        <Section text="Carrer" />

        <p id='noindent'>
          2019年4月 東京工業大学 情報理工学院 入学<br/>
          2023年3月 東京工業大学 情報理工学院 情報工学系 卒業<br/>
          2023年4月 東京工業大学大学院 情報工学系 知能情報コース 入学<br/>
          {/* 2025年3月 東京科学大学大学院 情報工学系 知能情報コース(仮称) 卒業見込み */}
        </p>

        <Section text="Links" />

        <StyledIconLeft>
          <IconLink shape='GitHub' link={'https://github.com/cyan5'} />
          <IconLink shape='X' link={'https://twitter.com/r_vanis'} />
        </StyledIconLeft>

      </StyledContents>
      <Footer />
    </div>
  );
};

const StyledImg = styled.div`
  background: cyan;
  width: 150px;
  height: 150px;
  border: 1px;
  margin: 20px auto;
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
`

export default About;
