import React from 'react'
import './home.scss'
import Sidebar from '../../components/siddebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'



const Home = () => {
  return (
    <div>
          <div className="home">
              <Sidebar />
              <div className='homeContainer'>Container</div>
          </div>
          
    </div>
  )
}

export default Home
