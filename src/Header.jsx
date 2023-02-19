import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className='header'>
            <div className="header-left">
            {/* <h1>This is header</h1> */}
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
                    <div className="header-search">
                        {/* searchicon */}
                        <SearchIcon />
                        <input type="text" placeholder='Developer: Amar Pisal' />
                        
                    </div>
            </div>
            <div className="header-right">
                            <HeaderOption Icon={HomeIcon} title="Home"/>
                            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                            <HeaderOption Icon={ChatIcon} title="Messaging"/>
                            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                            <HeaderOption avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU" title="Amar Pisal"/>
            </div>
    </div>
  )
}

export default Header