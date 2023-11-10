interface worksDataIF {
  cyansHP: {
    title: string;
    date: string;
    tags: string[];
    outline: string;
    links: {
      shape: string;
      link: string;
    }[];
  };
  [worksDataKey: string]: {
    title: string;
    date: string;
    tags: string[];
    outline: string;
    links: {
      shape: string;
      link: string;
    }[];
  };
}

export const worksData: worksDataIF = {
  cyansHP: {
    title: "cyan's Homepage", 
    date: "2023.11.11", 
    tags: ["TypeScript + React", "WebApp"], 
    outline: "当ウェブサイト。プロダクトや趣味をわかりやすくするために作成。今後も作品が追加され次第更新予定。", 
    links: [
      {shape: "Link", link: ""}, 
      {shape: "GitHub", link: ""}
    ]
  }
}
