import React from 'react'

import Item from './Item'
import CommentForm from './CommentForm'
// import CommentList from './CommentsList'

class HypeItem extends React.Component{
    state = {
      comments: []
    }

    handleSubmit = (e, comment) => {

      console.log(comment)

      e.preventDefault()
      this.setState({
        comments: [...this.state.comments, comment]
      })
    }

    componentDidMount(){
      fetch('http://localhost:3090/comments')
      .then(res => res.json())
      .then(commentObj =>
      this.setState({
        comments: commentObj
      }))
    }

  render(){
    return(
      <div>
      <Item handleClick={this.props.handleClick} item={this.props.item}/>
      <CommentForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
// <CommentList comments={this.state.comments}/>
export default HypeItem;
