import React from 'react'
import { useGlobalContext } from './Context'

const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();
    console.log(openSidebar);
  return (
    <div>
      Too 
    </div>
  )
}

export default Home
