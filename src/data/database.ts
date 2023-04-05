export interface HomeDataItem {
  content: string;
  espaçamento: number;
  link_content?: string;
  before_content?: string;
  after_content?: string;
  link?:string;
}

export const DataHome: HomeDataItem[][] = [
  [
    {
      content: "<html>",
      espaçamento: 0,
    },
  ],
  [
    {
      content: "<Head>",
      espaçamento: 1,
    },
  ],
  [
    {
      content: "<Title> Bem Vindo ao meu portfólio </Title>",
      espaçamento: 2,
    },
  ],
  [
    {
      content: "<Head>",
      espaçamento: 1,
    },
  ],
  [
    {
      content: "<Body>",
      espaçamento: 1,
    },
  ],
  [
    {
      content: "<h1> Olá, Meu nome é kaynan </h1>",
      espaçamento: 2,
    },
  ],
  [
    {
      content: "<h2> E sou um Desenvolvedor Front-End </h2>",
      espaçamento: 2,
    },
  ],
  [
    {
      content: "",
      espaçamento: 2,
    },
  ],
  [
    {
      content: "link",
      espaçamento: 2,
      link_content: "GitHub",
      before_content: "<button>" ,
      after_content: "</button>",
      link: '',
    },
  ],
  [
    {
      content: "link",
      espaçamento: 1.5,
      link_content: "Linkedin",
      before_content: "<button>" ,
      after_content: "</button>",
      link: '',
    },
  ],
  [
    {
      content: "",
      espaçamento: 1,
    },
  ],
  [
    {
      content: "</Body>",
      espaçamento: 1,
    },
  ],
  [
    {
      content: "</html>",
      espaçamento: 0,
    },
  ],
  [
    {
      content: "",
      espaçamento: 0,
    },
  ],
  [
    {
      content: "",
      espaçamento: 0,
    },
  ],
];

