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
  de vez na programação, fiz alguns cursos pelo youtube de HTML e CSS
  e depois resolvi fazer cursos de js e react na DevMedia, estando
  cada vez mais dedicado.`,
  "Cursos DevMedia",
  "DevMedia",
  "Set 2022 - Set 2023 (1 ano)"
);

hoverChangeStudy(
  ".danki",
  `Assim que acabou a assinatura da DevMedia eu comecei
  a procurar outros cursos pela internet e achei a Danki Code,
  onde estou me especializando mais em ReactJS e conhecendo o Angular.`,
  "Cursos da Danki Code",
  "Danki Code",
  "Out 2023 - Out 2024"
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
  ".bootstrap",
  "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites usando HTML, CSS e JavaScript."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".jquery",
  "jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".figma",
  "Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".angular",
  "Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript."
);
