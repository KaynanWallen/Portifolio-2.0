import { StyledCard } from '../../../Styles/Components/StyledInfoContent/GlobalCard';
import { StyledProjetos } from '../../../Styles/Components/StyledInfoContent/StyledProjetos';
import githubfinder from '../../../assets/GitHubFinder.png'
import GameHub from '../../../assets/GameHub.png'
import Portfolio from '../../../assets/Portfolio1-0.png'
import LiberaryMovie from '../../../assets/LibraryMovies.png'
import { StyledButton } from '../../../Styles/GlobalStyles';

function Portifolio() {
  return (
        <StyledProjetos>
          <h1>Meus projetinhos</h1>
          <section>
            <StyledCard>
              <img src={Portfolio} />
              <h2>Portfolio</h2>
              <p>Projeto para expor meus conhecimentos..</p>
              <StyledButton buttonSize='md' buttonStyle='solid'> Ver Mais </StyledButton>
            </StyledCard>
            <StyledCard>
              
            </StyledCard>
          </section>
        </StyledProjetos>
  )
}

export default Portifolio