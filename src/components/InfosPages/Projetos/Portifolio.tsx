import React from 'react'
import LayoutContent from '../../../Styles/Layout/LayoutContent';
import { DataProjetos } from '../../../data/database';

function Portifolio() {
  return (
        <div>
          <LayoutContent Array={DataProjetos} />
        </div>
  )
}

export default Portifolio