import { styled } from "@linaria/react"

import srcFuji from "../../images/DSC_0050.jpg"
import srcWorldWeather from "../../images/reactworldweather.png"
import srcNumer0nSearch from "../../images/numer0nsearch.png"
import srcMoveItem from "../../images/moveitem.png"

import srcItookashi from "../../images/thumbnail2.png"
import srcComp005 from "../../images/comp005.png"
import srcKizuna from "../../images/kizuna_thunbnail.png"
import srcKaoruJuyoka from "../../images/kaorujuyoka.png"

const Red = styled.span`
  color: red;
`

export const workProducts = [
  {
    id: "cyansHP", 
    title: "cyan's Homepage", 
    date: "2023.11.14", 
    srcImage: srcFuji, 
    tags: [
      "TypeScript + React", 
      "WebApp"
    ], 
    outline: <>当ウェブサイトでありWebアプリ2作品目。成果物や趣味がわかりやすく見られるサイトを作成。CSS-in-JSには、ゼロランタイムで高速なLinariaを採用。すべての作品情報を1つのファイルで管理し、今後の作品の追加がしやすくなるよう設計。</>, 
    links: [
      {shape: "Link", link: "https://cyan5.github.io/cyan5-homepage/"}, 
      {shape: "GitHub", link: "https://github.com/cyan5/cyan5-homepage"}
    ]
  }, 
  {
    id: "ReactWorldWeather", 
    title: "React World Weather", 
    date: "2023.10.19", 
    srcImage: srcWorldWeather, 
    tags: [
      "TypeScript + React", 
      "WebApp", 
    ], 
    outline: <><a href="https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%A4%E3%81%8F%E3%82%8BReact%E3%82%A2%E3%83%97%E3%83%AA-TypeScript-mod728-ebook/dp/B094Z1R281" target="_blank">参考書</a>をもとに作成した最初のWebアプリケーション。参考書のPure CSSをモダンなStyled-Componentに変更し、他にも細かな機能を追加した。<Red>GitHub PagesではAPIキーを隠しているので天気の表示ができない。</Red></>, 
    links: [
      {shape: "Link", link: "https://cyan5.github.io/react-world-weather/"}, 
      {shape: "GitHub", link: "https://github.com/cyan5/react-world-weather"}
    ]
  }, 
  {
    id: "numer0nSearch", 
    title: "numer0n search", 
    date: "2023.10.20", 
    srcImage: srcNumer0nSearch, 
    tags: [
      "C", 
      "Console"
    ], 
    outline: <>数当てゲーム「Hit and Blow」（マスターマインド、numer0n、MOOなど）の最適戦略を探索により求めるプログラム。マシンのメモリ不足により更新休止中。メモリを節約した設計に換装し再挑戦する予定。</>, 
    links: [
      {shape: "GitHub", link: "https://github.com/cyan5/numer0n_search"}, 
    ]
  }, 
  {
    id: "moveItem", 
    title: "Move Item", 
    date: "2023.09.18", 
    srcImage: srcMoveItem, 
    tags: [
      "Windows PowerShell", 
    ], 
    outline: <>Powershellスクリプト。フォルダ内の写真・動画を、写真に紐づいている日付情報をもとに仕分けする。NAS化したWindowsPCでスクリプトを自動実行させることにより、写真整理を行う自宅サーバ環境を構築できる。</>, 
    links: [
      {shape: "GitHub", link: "https://github.com/cyan5/MoveItem"}, 
    ]
  }, 
  // {
  //   id: "", 
  //   title: "", 
  //   date: "", 
  //   srcImage: src, 
  //   tags: [
  //     "", 
  //     ""
  //   ], 
  //   outline: <></>, 
  //   links: [
  //     {shape: "", link: ""}, 
  //     {shape: "", link: ""}
  //   ]
  // }, 
]

export const workHobbies = [
  {
    id: "Itookashi", 
    title: "『いとおかし』耳コピ", 
    date: "2023.09.28", 
    srcImage: srcItookashi, 
    tags: [
      "DTM", 
      "耳コピ"
    ], 
    outline: <>SMILE PRINCESSの『いとおかし』を再現することに全力を注いだ動画。DTMソフトは「Studio One 4 Professional」、動画は「See Music」で作成。</>, 
    links: [
      {shape: "YouTube", link: "https://youtu.be/uFgq1KMJmyQ"}, 
    ]
  }, 
  {
    id: "Comp005",
    title: "自作曲 5", 
    date: "2019.07.04", 
    srcImage: srcComp005, 
    tags: [
      "DTM", 
      "作曲"
    ], 
    outline: <>自作曲の5作品目。コード理論を独学で身につけ、複雑なコード進行を取り入れた。DTMソフトは「Studio One 4 Professional」、動画は「Midi Trail」で作成。</>, 
    links: [
      {shape: "YouTube", link: "https://youtu.be/vH4BiIXQWoE"}, 
    ]
  }, 
  {
    id: "Kizuna", 
    title: "Google Chrome × Kizuna AI", 
    date: "2018.06.30", 
    srcImage: srcKizuna, 
    tags: [
      "動画制作", 
    ], 
    outline: <>Google Chrome CMのキズナアイ版を作成。<a href="https://youtu.be/MGt25mv4-2Q" target="_blank">本家 (初音ミク版) </a>のパロディ。動画編集ソフト「AviUtl」で作成。</>, 
    links: [
      {shape: "YouTube", link: "https://youtu.be/Q3QSO41ux10"}, 
      {shape: "niconico", link: "https://www.nicovideo.jp/watch/sm33443279"}
    ]
  }, 
  {
    id: "KaoruJuyoka", 
    title: "『香る樹葉花』耳コピ", 
    date: "2018.06.28", 
    srcImage: srcKaoruJuyoka, 
    tags: [
      "DTM", 
      "耳コピ"
    ], 
    outline: <>東方プロジェクト第10.5弾「東方緋想天」に収録されているゲーム音楽『香る樹葉花』を耳コピ。DTMソフト「Studio One 3 prime」の使い方を習得する目的で作成。</>, 
    links: [
      {shape: "YouTube", link: "https://youtu.be/N6wFgJWDZts"}, 
    ]
  }, 
]

// ジャパリパアレンジ
// https://youtu.be/OkaYVs1dM3M