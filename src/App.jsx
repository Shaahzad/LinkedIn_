import React, { useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './App.css'
import Feed from './Feed'
import {useDispatch, useSelector} from "react-redux"
import Login from './Login.jsx'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { User_login_state, user_logout_state } from './slice/userslice.js'
import Widget from './Widget.jsx'
const App = () => {
   
  const dispatch = useDispatch()
  const user = useSelector((state)=> state.user.user)


    useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(User_login_state({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }))
      } else {
        dispatch(user_logout_state())
      }
    });
  }, []);

  return (
    <div className='app'>
      <Header/>

{!user ? <Login/> : 
      <div className="app-body">
        <Sidebar/>
        <Feed />
        <Widget/>
      </div>
}
</div>
  )
}

export default App