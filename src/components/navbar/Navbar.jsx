import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ErrorIcon from '@mui/icons-material/Error';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { DarkModeContext } from '../../context/darkmodeContext';
import { useContext } from 'react';
const Navbar = () => {

  const {dispatch}=useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon' />
            English
          </div>
          <div className="item">
            <DarkModeIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})} />
          </div>
          <div className="item">
            <ErrorIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className='icon' />
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/33792335/pexels-photo-33792335.jpeg" alt="" className='avtar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar 
