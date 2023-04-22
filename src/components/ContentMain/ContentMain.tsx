import React, {useState, useEffect} from 'react'
import { StyledContentMain } from '../../Styles/Components/StyledContentMain/StyleCntMain'
import HeaderContent from './HeaderContent'
import Home from '../InfosPages/Home'
import Cursos from '../InfosPages/About/Schools/Cursos'
import Escolaridade from '../InfosPages/About/Schools/Escolaridade'
import Back_End from '../InfosPages/About/Skills/Skills'
import Portifolio from '../InfosPages/Projetos/Portifolio'

type Props = {
  currentPage: string;
  pastFolder: boolean;
};


const ContentMain = ({ currentPage, pastFolder }: Props) => {

  return (
    <StyledContentMain style={{
      width: currentPage === 'null' ? "100%" : "",
    }}>
      <HeaderContent/> 
          {currentPage === 'home' && <Home /> }
          {currentPage === 'Schools_Cursos' && <Cursos />}
          {currentPage === 'Schools_Escolaridade' && <Escolaridade />}
          {currentPage === 'Skills_back' &&  <Back_End /> }
          {currentPage === 'Projetos_portifolio' &&  <Portifolio /> }
          {currentPage == 'null' && ''}
    </StyledContentMain>
  )
}

export default ContentMain