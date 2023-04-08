import React from 'react'

import {BsGithub, BsLinkedin} from 'react-icons/bs'
import { StyledHomeContent } from '../../Styles/Components/StyledInfoContent/StyledHome'

import imagem from '../../assets/HomeImage.png'
const Home = () => {
  return (
      <StyledHomeContent>
        <section className='infos'>
          <h1>Hi,My name is</h1>
          <div>
            <h3>Kaynan Wallen</h3>
            <h4>And I´m a Front-End Developer</h4>
            <section>
              <BsGithub color = 'black' size={30}/> <BsLinkedin color = 'black' size={30}/>
            </section>
          </div>
        </section>
      </StyledHomeContent>
  )
}

export default Home