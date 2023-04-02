import React from 'react'
import { StyledContentMain } from '../../Styles/Components/StyledContentMain/StyleCntMain'
import HeaderContent from './HeaderContent'
import Home from '../InfosPages/Home'
import About from '../InfosPages/About'
import Cursos from '../InfosPages/About/Schools/Cursos'
import Escolaridade from '../InfosPages/About/Schools/Escolaridade'
import Front_End from '../InfosPages/About/Skills/Front_End'
import Back_End from '../InfosPages/About/Skills/Back_End'
import Portifolio from '../InfosPages/Projetos/Portifolio'
import GameHub from '../InfosPages/Projetos/GameHub'
import GameFinder from '../InfosPages/Projetos/GameFinder'

type Props = {
  currentPage: string;
};

const ContentMain = ({ currentPage }: Props) => {
  return (
    <StyledContentMain>
      <HeaderContent/> 
      {currentPage === 'home' && <Home />}
      {currentPage === 'Schools_Cursos' && <Cursos />}
      {currentPage === 'Schools_Escolaridade' && <Escolaridade />}
      {currentPage === 'Skills_front' && <Front_End />}
      {currentPage === 'Skills_back' && <Back_End />}
      {currentPage === 'Projetos_portifolio' && <Portifolio />}
      {currentPage === 'Projetos_gamehub' && <GameHub />}
      {currentPage === 'Projetos_GameFinder' && <GameFinder/>}
    </StyledContentMain>
  )
}

export default ContentMain