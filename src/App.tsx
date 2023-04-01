import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import ContentLeft from './components/ContentLeft'
import { StyledApp } from './Styles/GlobalStyles'
import ContentCenter from './components/ContentCenter/ContentCenter'
import ContentMain from './components/ContentMain/ContentMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StyledApp>
      <Header />
      <main>
        <ContentLeft />
        <ContentCenter />
        <ContentMain />
      </main>
    </StyledApp>
  )
}

export default App
