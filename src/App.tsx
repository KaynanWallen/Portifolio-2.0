import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import ContentLeft from './components/ContentLeft'
import { StyledApp } from './Styles/GlobalStyles'
import ContentCenter from './components/ContentCenter/ContentCenter'
import ContentMain from './components/ContentMain/ContentMain'

function App() {

  //Manipulação de pastas dentro do layout
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handlePageChange = (page: string) => {
    if (window.innerWidth < 600) {
      setPastFolder(false)
    }
    setCurrentPage(page as string);
  };

  //Manipulação da div de pastas

  const [pastFolder, setPastFolder] = useState<boolean>(true);

  const handlePastChange = () => {
    setPastFolder(!pastFolder);
    if (window.innerWidth < 600 ) {
      setCurrentPage('null')
    }
  };

  useEffect(() => {
    if (window.innerWidth < 600 ) {
      setPastFolder(false);
    }
  },[])

  return (
    <StyledApp>
      <Header />
      <main>
        <ContentLeft handlePastChange={handlePastChange}/>
        <ContentCenter handlePageChange={handlePageChange} pastFolder={pastFolder}/>
        <ContentMain currentPage={currentPage} pastFolder={pastFolder}/>
      </main>
    </StyledApp>
  )
}

export default App
