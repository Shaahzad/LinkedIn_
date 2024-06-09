import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import Inputoption from './Inputoption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './Firebase';
import {  addDoc, collection, getDocs,  onSnapshot,  orderBy,  query,  serverTimestamp } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import  FlipMove  from 'react-flip-move'
const Feed = () => {
  const [input,setinput] = useState('')
   const [post,setpost] = useState([])
   const user = useSelector((state)=> state.user.user)


   useEffect(() => {
    const q = query(collection(db, 'Posts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setpost(fetchedPosts);
    });
    return unsubscribe
  }, []);

  const sendpost = (e) => {
    e.preventDefault();

    const addData = async () => {
      try {
        await addDoc(collection(db, 'Posts'), {
          name: user.displayName,
          description: user.email,
          message: input,
          photoUrl: user.photoUrl || '',
          timestamp: serverTimestamp(),
        });
        setinput('');
      } catch (error) {
        console.error('Error adding post:', error);
      }
    };

    addData();
  };



  return (
    <div className='feed'>
      <div className="feed-input-coontainer">
        <div className="feed-input">
            <CreateIcon/>
            <form>
                <input type="text" value={input} onChange={e => setinput(e.target.value)}/>
                <button onClick={sendpost} type='Submit'>Send</button>
            </form>
        </div>
         <div className="feed-input-option">
            <Inputoption Icon={ImageIcon} color={"#70B5F9"} title={"photo"}/>
            <Inputoption Icon={SubscriptionIcon} color={"#E7A33E"} title={"photo"}/>
            <Inputoption Icon={EventNoteIcon} color={"#C0CBCD"} title={"photo"}/>
            <Inputoption Icon={CalendarViewDayIcon} color={"#7FC15E"} title={"photo"}/>
         </div>
      </div>
      <FlipMove>
      {post.map(({id, data: {name,description,message, photoUrl, timestamp}})=>(
      <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl}/>
      ))}
      </FlipMove>
    </div>
  )
}

export default Feed