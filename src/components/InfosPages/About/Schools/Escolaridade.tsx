import { StyledCard } from '../../../../Styles/Components/StyledInfoContent/GlobalCard';
import { StyledEscolaridade } from '../../../../Styles/Components/StyledInfoContent/StyledEscolaridade';
import { StyledButton } from '../../../../Styles/GlobalStyles';

import Etec from '../../../../assets/Etec.png'
import USF from '../../../../assets/Usf.jpg'

const Escolaridade = () => {
  return (
    <StyledEscolaridade>
      <h1>Escolaridade</h1>
      <section>
        <StyledCard>
          <img src={Etec} />
          <h2>Análise e Desenvolvimento de Sistemas</h2>
          <p>Tempo: 3 Trimestres</p>
          <p>Inicio: Fevereiro/2022</p>
          <p>Termino: Julho/2023 </p>
          <StyledButton buttonSize='md' buttonStyle='solid'> Certificado </StyledButton>
        </StyledCard>
        <StyledCard>
          <img src={USF} />
          <h2>Análise e Desenvolvimento de Sistemas</h2>
          <p>Tempo: 6 Trimestres</p>
          <p>Inicio: Fevereiro/2023</p>
          <p>Termino: Julho/2025 </p>
          <StyledButton buttonSize='md' buttonStyle='solid'> Certificado </StyledButton>
        </StyledCard>
      </section>
    </StyledEscolaridade>
  )
}

export default Escolaridade