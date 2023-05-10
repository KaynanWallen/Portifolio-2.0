import { StyledSkills } from "../../../../Styles/Components/StyledInfoContent/StyledSkills"

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiStyledcomponents,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiGit,
  SiLinux
} from 'react-icons/si'
const Back_End = () => {
  return (
      <StyledSkills> 
          <h1> Skills </h1>
          <div className="skills">
            <section>
              <SiHtml5 />
              <div> 
                <h2> HTML </h2>
                <p> Linguagem de Marcação </p>
              </div>
            </section>
            <section>
              <SiCss3 />
              <div> 
                <h2> CSS </h2>
                <p> Linguagem de Estilos </p>
              </div>
            </section>
            <section>
              <SiJavascript />
              <div> 
                <h2> JavaScript </h2>
                <p>  Linguagem de Programação </p>
              </div>
            </section>
            <section>
              <SiReact />
              <div> 
                <h2> ReactJs </h2>
                <p>  Biblioteca de programação javascript</p>
              </div>
            </section>
            <section>
              <SiTailwindcss />
              <div> 
                <h2> Tailwindcss </h2>
                <p> Framework CSS utilitário responsivo  </p>
              </div>
            </section>
            <section>
              <SiStyledcomponents />
              <div> 
                <h2> StyledComponents </h2>
                <p> Biblioteca CSS em JS para React</p>
              </div>
            </section>
            <section>
              <SiNodedotjs />
              <div> 
                <h2> NodeJs </h2>
                <p> Ambiente de Execução javaScript </p>
              </div>
            </section>
            <section>
              <SiMongodb />
              <div> 
                <h2> MongoDB </h2>
                <p>  Banco de dados NoSQL flexível </p>
              </div>
            </section>
            <section>
              <SiNextdotjs />
              <div> 
                <h2> NextJs </h2>
                <p> Framework para desenvolver Front-End </p>
              </div>
            </section>
            <section>
              <SiGit />
              <div> 
                <h2> GIT </h2>
                <p> Sistema de controle de versões distribuído </p>
              </div>
            </section>
            <section>
              <SiLinux />
              <div> 
                <h2> Linux </h2>
                <p> Sistema Operacional </p>
              </div>
            </section>
          </div>
      </StyledSkills>
  )
}

export default Back_End