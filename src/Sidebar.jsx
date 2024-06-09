import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const user = useSelector((state)=> state.user.user)

const recentItem = (topic)=>(
<div className="sidebar-recentItem">
    <span className="sidebar-hash">#</span>
    <p>{topic}</p>
</div>
)

  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <Avatar src={user.photoUrl}  className='sidebar-avatar'>
              </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar-stats">
            <div className="sidebar-stat">
              <p>Who viewed your profile</p>
              <p className='sidebar-stat-number'>50000</p>
            </div>
            <div className="sidebar-stat">
                <p>Impressions of your post</p>
                <p className='sidebar-stat-number'>50000</p>
                </div>
        </div>

        <div className="sidebar-bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("Programming")}
            {recentItem("Tailwind css")}
            {recentItem("nextjs")}
            {recentItem("Firebase")}
        </div>
    </div>
  )
}

export default Sidebar