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
                <p>  </p>
              </div>
            </section>
            <section>
              <SiJavascript />
              <div> 
                <h2> JavaScript </h2>
                <p>  </p>
              </div>
            </section>
            <section>
              <SiReact />
              <div> 
                <h2> ReactJs </h2>
                <p>  </p>
              </div>
            </section>
            <section>
              <SiTailwindcss />
              <div> 
                <h2> Tailwindcss </h2>
                <p>  </p>
              </div>
            </section>
            <section>
              <SiStyledcomponents />
              <div> 
                <h2> StyledComponents </h2>
                <p>  </p>
              </div>
            </section>
            <section>
              <SiNodedotjs />
              <div> 
                <h2> NodeJs </h2>
                <p>  </p>
              </div>
            </section>
            <section>
              <SiMongodb />
              <div> 
                <h2> MongoDB </h2>
                <p>  </p>
              </div>
            </section>
          </div>
      </StyledSkills>
  )
}

export default Back_End