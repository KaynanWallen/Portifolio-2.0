import React from 'react'
import { StyledContentCenter } from '../../Styles/Components/StyleCntCenter'
import {
  VscChevronRight,
  VscChevronDown,
  VscFolder,
} from 'react-icons/vsc'

import {
  AiOutlineHtml5,

} from 'react-icons/ai'

import {
  DiReact,
} from 'react-icons/di'

import {
  TbBrandTypescript,
} from 'react-icons/tb'

import { useState } from 'react';

const ContentCenter = ({ handlePageChange }: { handlePageChange: (page: string) => void }) => {
  //REALIZAÇÃO DAS FUNÇÕES PARA MINIMIZAR ABAS//
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showSchools, setShowSchools] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handlePortfolioClick = () => {
    setShowPortfolio(!showPortfolio);
  };

  const handleSchoolsClick = () => {
    setShowSchools(!showSchools);
  };

  const handleSkillsClick = () => {
    setShowSkills(!showSkills);
  };

  const handleProjectsClick = () => {
    setShowProjects(!showProjects);
  };

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    handlePageChange('about');
  };

  const handleHtmlClick = () => {
    handlePageChange('home');
  };


  return (
    <StyledContentCenter>
      <div className='Explorer'>
        <p>EXPLORER</p>
      </div>
      <div className='OpenEditors'>
        <VscChevronRight />
        <p>OPEN EDITORS</p>
      </div>
      <div className='Portifólio hover'  onClick={handlePortfolioClick}>
        {showPortfolio ? <VscChevronDown /> : <VscChevronRight />}
        <p>PORTIFÓLIO 2.0</p>
      </div>
      <section style={{ display: showPortfolio ? '' : 'none' }}>
        <section className='arquivos' >
          <section className='align hover'  onClick={handleAboutClick}>
            {showAbout ? <VscChevronDown /> : <VscChevronRight />}
            <VscFolder /> <span> About </span>
          </section>

          {/* PASTA SCHOOLS*/}
          <section className='subpasta' style={{ display: showAbout ? 'flex' : 'none' }}>
            <section className='align hover'  onClick={handleSchoolsClick}>
              {showSchools ? <VscChevronDown /> : <VscChevronRight />}
              <VscFolder /> <span> Schools</span>
            </section>
            <section className='subpasta_arquivos' style={{ display: showSchools ? 'flex' : 'none' }}> 
              <section className='hover'>
                <DiReact /> <span> Cursos.tsx </span>
              </section>
              <section className='hover'>
                <DiReact /> <span> Escolaridade.tsx </span>
              </section>
            </section>
          </section>

           {/* PASTA SKILLS*/}
          <section className='subpasta' style={{ display: showAbout ? 'flex' : 'none' }}>
            <section className='align hover' onClick={handleSkillsClick}>
            {showSkills ? <VscChevronDown /> : <VscChevronRight />}
              <VscFolder /> <span> Skills </span>
            </section>
            <section className='subpasta_arquivos' style={{ display: showSkills ? 'flex' : 'none' }}> 
              <section className='hover'>
                <DiReact /> <span> Front_End.js </span>
              </section>
              <section className='hover'>
                <DiReact /> <span> Back_End.js </span>
              </section>
            </section>
          </section>


        </section>
        <section className='arquivos'>
          <section className='align hover' onClick={handleProjectsClick}>
            {showProjects ? <VscChevronDown /> : <VscChevronRight />}
            <VscFolder /> <span> Projetos </span>
          </section>
          <section className='subpasta_projects' style={{ display: showProjects ? 'flex' : 'none' }}>
            <section className='projects hover'>
              <TbBrandTypescript /> <span> Portifolio.ts </span>
            </section>
            <section className='projects hover'>
              <TbBrandTypescript /> <span> GameHub.ts </span>
            </section>
            <section className='projects hover'>
              <TbBrandTypescript /> <span> GameFinder.ts </span>
            </section>
          </section>
        </section>
        <section className='arquivos html hover' onClick={handleHtmlClick}>
          <section>
            <AiOutlineHtml5 /> <span> Home.html </span>
          </section>
        </section>
      </section>
    </StyledContentCenter>
  )
}

export default ContentCenter