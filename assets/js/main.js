import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeStudy } from "./hoverChangeStudy.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeStudy(
  ".estacio",
  `Me interessei na área da programação e resolvi começar
  a fazer uma faculdade de ADS em 2022. No ínicio estava 
  um pouco perdido, mas comecei a pegar o jeito com o 
  tempo. Aprendi coisas mais "superficiais", porém, necessarias.`,
  "Análise e Desenvolvimento de Sistemas",
  "Estacio",
  "Mar 2022 - Jul 2024"
);

hoverChangeStudy(
  ".DevMedia",
  `Em setembro de 2022 foi quando resolvi me aprofundar
  de vez na programação, resolvi fazer cursos de js, react e
  agora estou estudando desenvolvimento mobile.(acho que estou
  gostando mais do que desenvolvimento FrontEnd😶)`,
  "Cursos DevMedia",
  "DevMedia",
  "Set 2022 - Set 2023 (1 ano)"
);

hoverChangeStudy(
  ".youtube",
  `Mais ou Menos no meio de 2022 eu fui ver videos de
  programação, vi videos de HTML e CSS, só por curiosidade, 
  e acabei gostando, videos no YT ainda me ajudam muitoo. Todas 
  as dúvidas que tenho, eu vou para o YT.`,
  "Video Aulas no YouTube",
  "YouTube",
  "2022"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".git",
  "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software."
);
hoverChangeDescription(
  ".styled",
  "Styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".vite",
  "Vite é um servidor de desenvolvimento local escrito por Evan You e usado por padrão pelo Vue e para modelos de projeto React."
);
