import React from 'react'
import { StyledContentMain } from '../../Styles/Components/StyledContentMain/StyleCntMain'
import HeaderContent from './HeaderContent'
import Home from '../InfosPages/Home'
import About from '../InfosPages/About'

type Props = {
  currentPage: 'home' | 'about';
};

const ContentMain = ({ currentPage }: Props) => {
  return (
    <StyledContentMain>
      <HeaderContent/> 
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
    </StyledContentMain>
  )
}

export default ContentMain