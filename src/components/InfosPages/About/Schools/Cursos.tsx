import React from 'react'

import { DataCursos } from '../../../../data/database';
import LayoutContent from '../../../../Styles/Layout/LayoutContent'


const Cursos = () => {
  return (
    <div>
      <LayoutContent Array={DataCursos} />
    </div>
  )
}

export default Cursos