import React from 'react'
import { StyledHeader } from '../Styles/Components/StyleHeader'

import { TbBrandVscode} from 'react-icons/tb'

import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from 'react-icons/vsc'

const Header = () => {
  return (
    <StyledHeader>
      <TbBrandVscode color='blue'/>
      <p><strong>Portifolio 2.0 - Visual Studio Code</strong></p>
      <section>
        <VscChromeMinimize />
        <VscChromeMaximize />
        <VscChromeClose />
      </section>
    </StyledHeader>
  )
}

export default Header