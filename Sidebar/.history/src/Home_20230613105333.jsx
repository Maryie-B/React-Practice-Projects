import React from 'react'
import { useGlobalContext } from './Context'
import { FaBars} from 'react-icons/fa';

const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();
    console.log(openSidebar);
  return (
    <main>
      Too 
    </main>
  )
}

export default Home
