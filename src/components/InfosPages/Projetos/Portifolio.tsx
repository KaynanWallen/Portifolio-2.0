import { StyledCard } from '../../../Styles/Components/StyledInfoContent/GlobalCard';
import { StyledProjetos } from '../../../Styles/Components/StyledInfoContent/StyledProjetos';
import githubfinder from '../../../assets/GitHubFinder.png'
import GameHub from '../../../assets/GameHub.png'
import Portfolio from '../../../assets/Portfolio1-0.png'
import LiberaryMovie from '../../../assets/LibraryMovies.png'
import { StyledButton } from '../../../Styles/GlobalStyles';


import {
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiStyledcomponents,
  SiJavascript,
  SiReact,
  SiTypescript, 
} from "react-icons/si";
function Portifolio() {
  return (
        <StyledProjetos>
          <h1>Meus projetos</h1>
          <section>
            <StyledCard>
              <img src={Portfolio} />
              <h2>Portfolio</h2>
              <div className='Linguagens'>
                <SiHtml5 />
                <SiCss3 />
                <SiReact />
                <SiJavascript />
              </div>
              <p>Projeto para expor meus conhecimentos..</p>
              <div className='Buttons'>
                <StyledButton buttonSize='md' buttonStyle='solid' href="https://myportfolio-ashy-gamma.vercel.app" target="_blank"> Deploy </StyledButton>
                <StyledButton buttonSize='md' buttonStyle='solid' href="https://github.com/KaynanWallen/MyPortifolio" target="_blank"> GitHub </StyledButton>
              </div>
            </StyledCard>
            

            <StyledCard>
              <img src={githubfinder} />
              <h2>GitHubFinder</h2>
              <div className='Linguagens'>
                <SiHtml5 />
                <SiCss3 />
                <SiReact />
                <SiJavascript />
              </div>
              <p>Projeto consumindo API do GitHub</p>
              <div className='Buttons'>
                <StyledButton buttonSize='md' buttonStyle='solid' href="https://git-hub-finder-omega.vercel.app" target="_blank"> Deploy </StyledButton>
                <StyledButton buttonSize='md' buttonStyle='solid' href="https://github.com/KaynanWallen/GitHubFinder" target="_blank"> GitHub </StyledButton>
              </div>
            </StyledCard>


            <StyledCard>
              <img src={GameHub} />
              <h2>GameHub</h2>
              <div className='Linguagens'>
                <SiHtml5 />
                <SiCss3 />
                <SiReact />
                <SiJavascript />
              </div>
              <p>Projeto com visual baseado na Steam/EpicGames</p>
              <div className='Buttons'>
                <StyledButton buttonSize='md' buttonStyle='solid' href="https://my-game-hub.vercel.app" target="_blank"> Deploy </StyledButton>
                <StyledButton buttonSize='md' buttonStyle='solid' href="https://github.com/KaynanWallen/MyGameHub" target="_blank"> GitHub </StyledButton>
              </div>
            </StyledCard>


            <StyledCard>
              <img src={LiberaryMovie} />
              <h2>Library Movies</h2>
              <div className='Linguagens'>
                <SiHtml5 />
                <SiCss3 />
                <SiReact />
                <SiJavascript />
              </div>
              <p>Projeto para expor meus conhecimentos..</p>
              <div className='Buttons'>
                <StyledButton buttonSize='md' buttonStyle='solid' href="https://library-movies.vercel.app" target="_blank"> Deploy </StyledButton>
                <StyledButton buttonSize='md' buttonStyle='solid' href="https://github.com/KaynanWallen/LibraryMovies" target="_blank"> GitHub </StyledButton>
              </div>
            </StyledCard>


          </section>
        </StyledProjetos>
  )
}

export default Portifolio