import React from 'react'
import Comment from './Comment'

const CommentList = props => {

  return(
    <div>
    {props.comments.map(comment =>
    <Comment comment={comment}/>)}
    </div>
  )
}
export default CommentList;
