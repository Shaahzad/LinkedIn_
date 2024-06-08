import React from 'react'
import "./Headeroption.css"
import { Avatar } from './@mui/material'
import { useSelector } from 'react-redux'
const Headeroption = ({ avatar, Icon, title, onClick}) => {
  const user = useSelector((state)=> state.user.user)

  return (
    <div onClick={onClick} className='header-option'>
      {Icon && <Icon className='header-option-icon'/>}
      {avatar && <Avatar  className='header-option-avatar'src={user?.photoUrl}>
      </Avatar>
        }
      <h3 className='header-option-title'>{title}</h3>    
    </div>
  )
}

export default Headeroption;