import React, {forwardRef} from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import Inputoption from "./Inputoption"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
const Post = forwardRef(({name,description,message,photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
     <div className="post-header">
        <Avatar src={photoUrl}></Avatar>
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
     </div>

     <div className="post-body">
        <p>{message}</p>
     </div>

     <div className="post-buttons">
     <Inputoption Icon={ThumbUpIcon} title={"like"} color={"gray"}/>
     <Inputoption Icon={ChatIcon} title={"comment"} color={"gray"}/>
     <Inputoption Icon={ShareIcon} title={"share"} color={"gray"}/>
     <Inputoption Icon={SendIcon} title={"send"} color={"gray"}/>
     </div>
    </div>
  )
}
)

export default Post