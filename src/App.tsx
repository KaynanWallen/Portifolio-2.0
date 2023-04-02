import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import ContentLeft from './components/ContentLeft'
import { StyledApp } from './Styles/GlobalStyles'
import ContentCenter from './components/ContentCenter/ContentCenter'
import ContentMain from './components/ContentMain/ContentMain'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page as 'home' | 'about');
  };
  
  return (
    <StyledApp>
      <Header />
      <main>
        <ContentLeft />
        <ContentCenter handlePageChange={handlePageChange}/>
        <ContentMain currentPage={currentPage}/>
      </main>
    </StyledApp>
  )
}

export default App
