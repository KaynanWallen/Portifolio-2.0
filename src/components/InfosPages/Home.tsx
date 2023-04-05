import React from 'react'
import LayoutContent from '../../Styles/Layout/LayoutContent'

import { DataHome} from '../../data/database';

const Home = () => {
  return (
      <div>
        <LayoutContent Array={DataHome} />
      </div>
  )
}

export default Home