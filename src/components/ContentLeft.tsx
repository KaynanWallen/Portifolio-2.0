import React from 'react'
import { StyledContentLeft } from '../Styles/Components/StyleCntLeft'
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugRerun,
  VscExtensions,
  VscAccount,
  VscSettingsGear,

} from 'react-icons/vsc'
const ContentLeft = () => {
  return (
    <StyledContentLeft>
      <section>
          <VscFiles />
          <VscSearch />
          <VscSourceControl />
          <VscDebugRerun />
          <VscExtensions />
        </section>
        <section>
          <VscAccount />
          <VscSettingsGear />
        </section>
    </StyledContentLeft>
  )
}

export default ContentLeft