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
import { Link } from 'react-router-dom';
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
            <span style={{'padding-left':"3px"}}> English</span>
          </div>
          <div className="item">
            <DarkModeIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})} />
          </div>
          <div className="item">
            <Link to="/Systemhealth"> 
            <ErrorIcon className='icon' />
            </Link>
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
            <Link to="/Logs">
            <FormatListBulletedIcon className='icon' />
            </Link>
          </div>
          <div className="item">
            <img src="https://plus.unsplash.com/premium_vector-1727955579176-073f1c85dcda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='avtar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar 
