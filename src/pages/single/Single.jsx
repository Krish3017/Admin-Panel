import React from 'react'
import './single.scss'
import Sidebar from '../../components/siddebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import StackedAreaChart from '../../components/chart/AreaChart'
import OrderTable from '../../components/table/OrderTable'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className="editButton">
              Edit
            </div>
            <div className="title">Information</div>
            <div className="item">
              <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400" alt="" className="itemImg" />
              <div className="details">
                <h1 className='detailTitle'>Jane Doe</h1>
                <div className='detailItem'>
                  <span className="itemKey">Email : </span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className="itemKey">Phone : </span>
                  <span className="itemValue">+91 2365626565</span>
                </div>
                <div className='detailItem'>
                  <span className="itemKey">Address : </span>
                  <span className="itemValue">41 , New york</span>
                </div>
                <div className='detailItem'>
                  <span className="itemKey">Country : </span>
                  <span className="itemValue">USA</span>
                </div>

              </div>
            </div>
          </div>
          <div className='right'>
          <div className="title">User spending (Last 12 months)</div>
            <StackedAreaChart aspect={3/1}/>
          </div>
        </div>
        <div className='bottom'>
          <div className="title">Last Transactions</div>
          <OrderTable />
        </div>
      </div>
    </div>
  )
}

export default Single
