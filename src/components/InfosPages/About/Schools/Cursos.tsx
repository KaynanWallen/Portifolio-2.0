import { StyledCard } from "../../../../Styles/Components/StyledInfoContent/GlobalCard"
import { StyledCursos } from "../../../../Styles/Components/StyledInfoContent/StyledCursos"
import { StyledButton } from "../../../../Styles/GlobalStyles"

import OneBitCode from '../../../../assets/OneBitCOde.webp'
import Senai from '../../../../assets/Senai.png'
const Cursos = () => {
  return (
    <StyledCursos>
      <h1>Cursos</h1>
      <section>
        <StyledCard>
            <img src={OneBitCode} />
            <h2>Programador FullStack em JavaScript</h2>
            <p>Tempo: +300 Horas</p>
            <p>Inicio: 08/Agosto/2022</p>
            <p>Termino: Andamento </p>
            <StyledButton buttonSize='md' buttonStyle='solid'> Certificado </StyledButton>
        </StyledCard>
        <StyledCard>
          <img src={Senai} />
          <h2>Aws, Cloud e Azure</h2>
          <p>Tempo: 160 Horas</p>
          <p>Inicio: 17/Agosto/2022</p>
          <p>Termino: 17/Novembro/2022</p>
          <StyledButton buttonSize='md' buttonStyle='solid'> Certificado </StyledButton>
        </StyledCard>
      </section>
    </StyledCursos>
  )
}

export default Cursos