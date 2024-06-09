import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import Headeroption from './Headeroption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { user_logout_state } from './slice/userslice';
import { getAuth, signOut } from 'firebase/auth';

const Header = () => {
  const user = useSelector((state)=> state.user.user)
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(user_logout_state())
    const auth = getAuth();
    signOut(auth)
  }
  return (
    <div className='header'>
        <div className="header-left">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAdVBMVEUKZsL///8AY8Hy9foVaMMAU7y7yucAX8AAWL73+fyWr91Wh81ci851m9UAYcB8otgAXL8/esgATruIq9vU4PLl7PfI1u0wdcdOgsve5vSuveLs8flEeMgAS7pHfsrD0eo2bMSrwuWOp9mdt+BvlNJZgMszcMV4Q6RPAAADsElEQVR4nO2c63LqIBRGAwFzU8QYbydWTaN5/0c86cV6KduxjRDpfGum4x8mw+qWDdmAQQAAAAAAAAAAAAAAAAAAAAAAAAC4gn/Sdz+6o1Swa5ZZNtkJrvz24arZVyV7IynSpVB9d6gDajcu2ImkynTfXfotQq8H7JLZq6c2IloX7Bt13He/foVSBhfGUtl3x35DvjW5sHDvYWz0KDHKsMLDlCZXZhcWvsai7879ED0KCRk2927ylNdZ+cRsGPXdux8SzUmZ0LfJhi+MefkD3+YataTGf8s/zzLA35LZ3JKRfslwcWPMpJ6NmSCms1k58iybBXFNrGba9czEtwWNmswomYF362aRU0uAcujbt6wNTVOaZSrvAtOGRo7NI8bPqoasDS6rg/ZrkjkSpd8yWnHwbPY/ofZXU2e19jQub6hmfJahB4fAy/FyhCu1mW5XZVlUo53yWuUdpWWe5zKOfHtZJhDC35ECgMeIvzH2hOBKx1LKONYR91tJxS96M07rqqrTcRa8yChw7MMjM/yeVueNdL6oizJMWlj7F5ZlNYyl0wmYi8zM5LyjfGFuJL4aaTkyFHqSQZM7LPJyQRQBtueFptj0mtByNFZ6TNUSik3kLDpcENsAgwuZ728JZzKK36olsqpxFZwHyEQNEbcjs6GjtWt3mSija29Hpm5eKjrLRMNbX7EjtZOSQleZaEgW3s5J6sDBq0VHGb25y6W1eXUQmm4y6xs7b1eEe/tFxW4yi/Rel3bCWVuPTTeZ5f0ubUqzPmq6yfyI5GA7NA5lWGU7NC5lWGPZxqlMajmhOZUJLW+TOJVhG7vrZ7cytd3d+AfKJCWxCXeifPFCZj4SuiXY317fxFbz2WNkKp1/FDe4fmlunJNgdnd9HyFTZpJ/NRaRruimqdUduQfIFOvLf7cS9Im8rdUM0F1mtbzeM9R0fWNlNQN0ljEdsdFk8zK36NJdpjJstdHH2EKr6ayrzMw4qWtq1IRWj+R2lRkYD6WR7UPxxDKh+VBaNCQWA08tM9PGzvEFMWieWmZOpNqYWAY8tUxlngRF7qPM1HwoVUjzRZanlkmIyp6g7hg8tQxx+QEykIEMZCADGchABjKQgQxkIAMZyEAGMpCBDGQgAxnIQAYykIEMZCADGcj0I9Pl0ikjZYgTGolVmSDYj4xk55dd1HJ8wfTIgrgSozLzU/dWVd5+2YSrdz4/Pj+vLmpT0E89f+bXxx/5tREAAAAAAAAAAAAAAAAAAAAAAADAFf8BTbVVnh054DkAAAAASUVORK5CYII=" alt="" />

          <div className="header-search">
            <SearchIcon />
            <input type="text" placeholder='Search'/>
          </div>
        </div>
        <div className="header-right">
             <Headeroption Icon={HomeIcon} title="Home"/>
             <Headeroption Icon={SupervisorAccountIcon} title="My Network"/>
             <Headeroption Icon={BusinessCenterIcon} title="Job"/>
             <Headeroption Icon={ChatIcon} title="Messaging"/>
             <Headeroption Icon={NotificationsIcon} title="Notifications"/>
             <Headeroption avatar={user?.photoUrl} 
             title="me"
             onClick={logout}
             />
          </div>
    </div>
  )
}

export default Header