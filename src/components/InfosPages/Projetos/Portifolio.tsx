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
          <h1>Meus projetos</h1>
          <section>
            <StyledCard>
              <img src={Portfolio} />
              <h2>Portfolio</h2>
              <p>Projeto para expor meus conhecimentos..</p>
              <StyledButton buttonSize='md' buttonStyle='solid'> Ver Mais </StyledButton>
            </StyledCard>
            <StyledCard>
              <img src={githubfinder} />
              <h2>GameHub</h2>
              <p>Projeto consumindo API do GitHub</p>
              <StyledButton buttonSize='md' buttonStyle='solid'> Ver Mais </StyledButton>
            </StyledCard>
            <StyledCard>
              <img src={GameHub} />
              <h2>Portfolio</h2>
              <p>Projeto com visual baseado na Steam/EpicGames</p>
              <StyledButton buttonSize='md' buttonStyle='solid'> Ver Mais </StyledButton>
            </StyledCard>
            <StyledCard>
              <img src={LiberaryMovie} />
              <h2>Portfolio</h2>
              <p>Projeto para expor meus conhecimentos..</p>
              <StyledButton buttonSize='md' buttonStyle='solid'> Ver Mais </StyledButton>
            </StyledCard>
          </section>
        </StyledProjetos>
  )
}

export default Portifolio