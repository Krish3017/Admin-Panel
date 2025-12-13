import React from 'react'
import './home.scss'
import Sidebar from '../../components/siddebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'



const Home = () => {
  return (
    <div>
      <div className="home">
        <Sidebar />

        <div className='homeContainer'>
          <Navbar />
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home
