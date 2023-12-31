import { useDisclosure } from '@chakra-ui/react';

//Contexts
import { CartManagement } from './context/CartContext.jsx';
import { LoadingManagement } from './context/LoadingContext.jsx';

//Components
import NavBar from './components/NavBar.jsx';
import SideBar from './components/SideBar.jsx';
import FooterPage from './components/FooterPage.jsx';
import PageBody from './components/PageBody.jsx';
import './App.css'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
      <div className='App'>
        <LoadingManagement>
          <CartManagement>
            <SideBar isOpen={isOpen} onClose={onClose} />
            <NavBar onClick={onOpen} />
            <PageBody />
            <FooterPage />
          </CartManagement>
        </LoadingManagement>
      </div>
    </>
  )
}

export default App
