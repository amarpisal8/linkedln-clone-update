import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
const HeaderOption = ({avatar, Icon, title}) => {
  return (
    <div className='HeaderOption'>
      {Icon && <Icon className='HeaderOption-icon'/>}
      {avatar&&(
        <Avatar className='HeaderOption-Icon' src={avatar}/>
      )}
      <h3 className='HeaderOption-title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
