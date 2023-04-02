import { useState } from 'react'
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
    setCurrentPage(page as string);
  };

  //Manipulação da div de pastas

  const [pastFolder, setPastFolder] = useState<boolean>(true);

  const handlePastChange = () => {
    setPastFolder(!pastFolder);
  };


  return (
    <StyledApp>
      <Header />
      <main>
        <ContentLeft handlePastChange={handlePastChange}/>
        <ContentCenter handlePageChange={handlePageChange} pastFolder={pastFolder}/>
        <ContentMain currentPage={currentPage} />
      </main>
    </StyledApp>
  )
}

export default App
