import srcFuji from "../../images/DSC_0050.jpg"
import srcComp005 from "../../images/comp005.png"

export const workProducts = [
  {
    id: "cyansHP", 
    title: "cyan's Homepage", 
    date: "2023.11.11", 
    srcImage: srcFuji, 
    tags: [
      "TypeScript + React", 
      "WebApp"
    ], 
    outline: "当ウェブサイト。プロダクトや趣味をわかりやすくするために作成。今後も作品が追加され次第更新予定。", 
    links: [
      {shape: "Link", link: "http://localhost:5173/cyan5-homepage"}, 
      {shape: "GitHub", link: "https://github.com/cyan5/cyan5-homepage"}
    ]
  }, 
]

export const workHobbies = [
  {
    id: "Comp005",
    title: "自作曲5", 
    date: "2023.11.11", 
    srcImage: srcComp005, 
    tags: [
      "DTM", 
      "作曲"
    ], 
    outline: "自作曲の5作品目。", 
    links: [
      {shape: "YouTube", link: "http://localhost:5173/cyan5-homepage"}, 
      {shape: "X", link: "http://localhost:5173/cyan5-homepage"}, 
      {shape: "GitHub", link: "http://localhost:5173/cyan5-homepage"}, 
      {shape: "Link", link: "http://localhost:5173/cyan5-homepage"}, 
    ]
  }, 
]
