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

export const DataCursos: HomeDataItem[][] = [
    [
      {content: ".OneBitCode {",
      espaçamento: .5,},
    ],
    [
      {content: "Nome: Programador FullStack em JavaScript;",
      espaçamento: 1.5,},
    ],
    [
      {content: "Horas: +300;",
      espaçamento: 1.5,},
    ],
    [
      {content: "Inicio: 08_Agosto_2022",
      espaçamento: 1.5,},
    ],
    [
      {content: "Termino: Andamento;",
      espaçamento: 1.5,},
    ],
    [
      {content: "}",
      espaçamento: 1.5,},
    ],
    [
      {content: "",
      espaçamento: 1,},
    ],
    [
      {content: "",
      espaçamento: 1,},
    ],
    [
      {content: ".Senai {",
      espaçamento: 1,},
    ],
    [
      {content: "Nome: Aws,Cloud e Azure;",
      espaçamento: 1,},
    ],
    [
      {content: "Horas: 160",
      espaçamento: 1,},
    ],
    [
      {content: "Inicio: 17_Agosto_2022;",
      espaçamento: 1,},
    ],
    [
      {content: "Inicio: 17_Agosto_2022;",
      espaçamento: 1,},
    ],
    [
      {content: "}",
      espaçamento: 1,},
    ],
];
export const DataEsolaridade: HomeDataItem[][] = [
  [
    {content: ".Técnico {",
    espaçamento: .5,},
  ],
  [
    {content: "Nome:Analise e Desenvolvimento de Sistemas",
    espaçamento: 1.5,},
  ],
  [
    {content: "Local:Etec Rosa Perrone Scavone",
    espaçamento: 1.5,},
  ],
  [
    {content: "Inicio:05_Fevereiro_2022",
    espaçamento: 1.5,},
  ],
  [
    {content: "Termino:20_Junho_2023",
    espaçamento: 1.5,},
  ],
  [
    {content: "}",
    espaçamento: 1.5,},
  ],
  [
    {content: "",
    espaçamento: 1.5,},
  ],
  [
    {content: ".Graduação {",
    espaçamento: .5,},
  ],
  [
    {content: "Nome:Analise e Desenvolvimento de Sistemas",
    espaçamento: 1.5,},
  ],
  [
    {content: "Local:Universidade São Francisco",
    espaçamento: 1,},
  ],
  [
    {content: "Inicio:06_Fevereiro_2023",
    espaçamento: 1,},
  ],
  [
    {content: "Termino:Junho_2025",
    espaçamento: 1,},
  ],
  [
    {content: "}",
    espaçamento: 1,},
  ],
];

export const DataSkills: HomeDataItem[][] = [
  [
    {content: "const Skills_FrontEnd = [",
    espaçamento: .5,},
  ],
  [
    {content: "HTML,",
    espaçamento: 1.5,},
  ],
  [
    {content: "CSS,",
    espaçamento: 1.5,},
  ],
  [
    {content: "JavaScript,",
    espaçamento: 1.5,},
  ],
  [
    {content: "ReactJS,",
    espaçamento: 1.5,},
  ],
  [
    {content: "NextJS,",
    espaçamento: 1.5,},
  ],
  [
    {content: "TailwindCss,",
    espaçamento: 1.5,},
  ],
  [
    {content: "StyledComponents,",
    espaçamento: 1.5,},
  ],
  [
    {content: "]",
    espaçamento: 1.5,},
  ],
  [
    {content: "",
    espaçamento: 1.5,},
  ],
  [
    {content: "const Skills_BackEnd = [",
    espaçamento: .5,},
  ],
  [
    {content: "NodeJs,",
    espaçamento: 1,},
  ],
  [
    {content: "PHP,",
    espaçamento: 1,},
  ],
  [
    {content: "MongoDB,",
    espaçamento: 1,},
  ],
  [
    {content: "]",
    espaçamento: 1,},
  ],
];


export const DataProjetos: HomeDataItem[][] =[
  [
    {content: "const Portifolio = () => {",
    espaçamento: .5,},
  ],
  [
    {content: "const tecnologias = [JavaScript, Html, Css...]",
    espaçamento: 1.5,},
  ],
  [
    {content: "const desc = “Projeto para expor meus conhecimentos...”;",
    espaçamento: 1.5,},
  ],
  [
    {content: "Return  VerMais ;",
    espaçamento: 1.5,},
  ],
  [
    {content: "}",
    espaçamento: 1.5,},
  ],
  [
    {content: "",
    espaçamento: .5,},
  ],
  [
    {content: "Const GameHub = () => {",
    espaçamento: .5,},
  ],
  [
    {content: "const tecnologias = [x,yz];",
    espaçamento: 1.5,},
  ],
  [
    {content: 'const desc = “Landing Page simulando o layout de aplicações de jogos";',
    espaçamento: 1.5,},
  ],
  [
    {content: "Return  VerMais ;",
    espaçamento: 1,},
  ],
  [
    {content: "}",
    espaçamento: 1,},
  ],
];