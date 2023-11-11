import srcFuji from "../../images/DSC_0050.jpg"
import srcComp005 from "../../images/comp005.png"

interface worksDataIF {
  [worksDataKey: string]: {
    title: string;
    date: string;
    srcImage: string
    tags: {
      key: number;
      tag: string;
    }[];
    outline: string;
    links: {
      key: number;
      shape: string;
      link: string;
    }[];
  };
}

// export const worksData= {
export const worksData: worksDataIF = {
  cyansHP: {
    title: "cyan's Homepage", 
    date: "2023.11.11", 
    srcImage: srcFuji, 
    tags: [
      {key:0, tag: "TypeScript + React"}, 
      {key:1, tag: "WebApp"}
    ], 
    outline: "当ウェブサイト。プロダクトや趣味をわかりやすくするために作成。今後も作品が追加され次第更新予定。", 
    links: [
      {key:0, shape: "Link", link: "http://localhost:5173/cyan5-homepage"}, 
      {key:1, shape: "GitHub", link: "https://github.com/cyan5/cyan5-homepage"}
    ]
  }, 
  Comp005: {
    title: "自作曲5", 
    date: "2023.11.11", 
    srcImage: srcComp005, 
    tags: [
      {key:0, tag: "DTM"}, 
      {key:1, tag: "作曲"}
    ], 
    outline: "自作曲の5作品目。", 
    links: [
      {key:0, shape: "YouTube", link: "http://localhost:5173/cyan5-homepage"}, 
      {key:0, shape: "X", link: "http://localhost:5173/cyan5-homepage"}, 
      {key:0, shape: "GitHub", link: "http://localhost:5173/cyan5-homepage"}, 
      {key:0, shape: "Link", link: "http://localhost:5173/cyan5-homepage"}, 
    ]
  }
}
