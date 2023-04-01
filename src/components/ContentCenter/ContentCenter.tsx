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

const ContentCenter = () => {
  return (
    <StyledContentCenter>
      <div className='Explorer'>
        <p>EXPLORER</p>
      </div>
      <div className='OpenEditors'>
        <VscChevronRight />
        <p>OPEN EDITORS</p>
      </div>
      <div className='Portifólio'>
        <VscChevronDown />
        <p>PORTIFÓLIO 2.0</p>
      </div>
      <section>
        <section className='arquivos'>
          <section className='align'>
            <VscChevronRight/>
            <VscFolder /> <span> About </span>
          </section>

          {/* PASTA SCHOOLS*/}
          <section className='subpasta'>
            <section className='align'>
              <VscChevronRight/>
              <VscFolder /> <span> Schools</span>
            </section>
            <section className='subpasta_arquivos'> 
              <section>
                <DiReact /> <span> Cursos.tsx </span>
              </section>
              <section>
                <DiReact /> <span> Escolaridade.tsx </span>
              </section>
            </section>
          </section>

           {/* PASTA SKILLS*/}
          <section className='subpasta'>
            <section className='align'>
              <VscChevronRight/>
              <VscFolder /> <span> Skills </span>
            </section>
            <section className='subpasta_arquivos'> 
              <section>
                <DiReact /> <span> Front_End.js </span>
              </section>
              <section>
                <DiReact /> <span> Back_End.js </span>
              </section>
            </section>
          </section>


        </section>
        <section className='arquivos'>
          <section className='align'>
            <VscChevronRight/>
            <VscFolder /> <span> Projetos </span>
          </section>
          <section className='subpasta_projects'>
            <section className='projects'>
              <TbBrandTypescript /> <span> Portifolio.ts </span>
            </section>
            <section className='projects'>
              <TbBrandTypescript /> <span> GameHub.ts </span>
            </section>
            <section className='projects'>
              <TbBrandTypescript /> <span> GameFinder.ts </span>
            </section>
          </section>
        </section>
        <section className='arquivos html'>
          <section>
            <AiOutlineHtml5 /> <span> Home.html </span>
          </section>
        </section>
      </section>
    </StyledContentCenter>
  )
}

export default ContentCenter