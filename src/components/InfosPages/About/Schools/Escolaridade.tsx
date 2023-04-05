import React from 'react'

import LayoutContent from '../../../../Styles/Layout/LayoutContent'
import { DataEsolaridade } from '../../../../data/database';

const Escolaridade = () => {
  return (
    <div>
      <LayoutContent Array={DataEsolaridade} />
    </div>
  )
}

export default Escolaridade