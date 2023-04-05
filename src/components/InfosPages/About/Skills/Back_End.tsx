import React from 'react'

import LayoutContent from '../../../../Styles/Layout/LayoutContent'
import { DataSkills } from '../../../../data/database';

const Back_End = () => {
  return (
    <div>
      <LayoutContent Array={DataSkills} />
    </div>
  )
}

export default Back_End