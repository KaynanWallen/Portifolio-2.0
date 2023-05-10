import React from 'react'

import {BsGithub, BsLinkedin} from 'react-icons/bs'
import { StyledHomeContent } from '../../Styles/Components/StyledInfoContent/StyledHome'

const Home = () => {
  return (
      <StyledHomeContent>
        <section className='infos'>
          <h1>Hi,My name is</h1>
          <div>
            <h3>Kaynan Wallen</h3>
            <h4>And I´m a Front-End Developer</h4>
            <section>
              <BsGithub color = 'black' size={30} onClick={()=> window.open('https://github.com/KaynanWallen', '_blank')}/> <BsLinkedin color = 'black' size={30} onClick={()=> window.open('https://www.linkedin.com/in/kaynan-wallen-9b542024a/', '_blank')}/>
            </section>
          </div>
        </section>
      </StyledHomeContent>
  )
}

export default Home