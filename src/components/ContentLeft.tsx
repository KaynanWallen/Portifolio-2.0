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

interface Props {
  handlePastChange: (state: boolean) => void;
}

const ContentLeft = ({ handlePastChange}:  Props) => {
  return (
    <StyledContentLeft>
      <section>
          <VscFiles onClick={() => handlePastChange(!true)} className='HoverFilesDiv'/>
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