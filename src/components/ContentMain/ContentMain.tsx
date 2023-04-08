import React, {useState} from 'react'
import { StyledContentMain } from '../../Styles/Components/StyledContentMain/StyleCntMain'
import HeaderContent from './HeaderContent'
import Home from '../InfosPages/Home'
import Cursos from '../InfosPages/About/Schools/Cursos'
import Escolaridade from '../InfosPages/About/Schools/Escolaridade'
import Front_End from '../InfosPages/About/Skills/Front_End'
import Back_End from '../InfosPages/About/Skills/Skills'
import Portifolio from '../InfosPages/Projetos/Portifolio'
import GameHub from '../InfosPages/Projetos/GameHub'
import GameFinder from '../InfosPages/Projetos/GameFinder'
import { StyledButton } from '../../Styles/GlobalStyles'
import LayoutContent from '../../Styles/Layout/LayoutContent'

import { DataHome, DataCursos, DataEsolaridade, DataSkills, DataProjetos} from '../../data/database';

type Props = {
  currentPage: string;
};


const ContentMain = ({ currentPage }: Props) => {

  const [buttonState, setButtonState] = useState<boolean>(true);

  const handlebuttonState = () => {
    setButtonState(!buttonState);
    console.log(buttonState)
  };

  return (
    <StyledContentMain>
      <HeaderContent/> 
      <section className='SectionButton'>
        <StyledButton buttonSize='md' buttonStyle='outline' onClick={() => handlebuttonState()}>Alternar Tema </StyledButton>
      </section>
      {currentPage === 'home' && (
        buttonState ? <Home /> : <LayoutContent Array={DataHome} />
      )}
      {currentPage === 'Schools_Cursos' && (
        buttonState ? <Cursos /> : <LayoutContent Array={DataCursos} />
      )}
      {currentPage === 'Schools_Escolaridade' && (
        buttonState ? <Escolaridade /> : <LayoutContent Array={DataEsolaridade} />
      )}
      {currentPage === 'Skills_back' && (
        buttonState ? <Back_End /> : <LayoutContent Array={DataSkills} />
      )}
      {currentPage === 'Projetos_portifolio' && (
        buttonState ? <Portifolio /> : <LayoutContent Array={DataProjetos} />
      )}
    </StyledContentMain>
  )
}

export default ContentMain