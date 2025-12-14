import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PagesIcon from '@mui/icons-material/Pages';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import StorageIcon from '@mui/icons-material/Storage';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkmodeContext';
const Sidebar = () => {

  const {dispatch}=useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/'>
        <span className='logo'>Iamadmin</span>
        </Link>
      </div>
      <hr className='hr'/>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icons'/>
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <Link to="/users">
          <li>
            <PeopleIcon className='icons'/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products">
          <li>
            <InventoryIcon className='icons'/>
            <span>Products</span>
            </li>
            </Link>
          <li>
            <PagesIcon className='icons'/>
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningIcon className='icons'/>
            <span>Delivery</span>
          </li>
           <p className='title'>USEFUL</p>
          <li>
            <QueryStatsIcon className='icons'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className='icons'/>
            <span>Notifications</span>
          </li>
           <p className='title'>SERVICES</p>
          <li>
            <HealthAndSafetyIcon className='icons'/>
            <span>System health</span>
          </li>
          <li>
            <StorageIcon className='icons'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icons'/>
            <span>Setting</span>
          </li>
           <p className='title'>USER</p>
          <li>
            <AccountCircleIcon className='icons' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icons'/>
            <span>Log-out</span>
          </li>
        </ul>

      </div>
      <div className='bottom'>
        <div className='colorOptions' onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className='colorOptions' onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
