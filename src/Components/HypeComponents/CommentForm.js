import React from 'react'

class CommentForm extends React.Component{

  state = {
    comment: ""
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      comment: e.target.value})
  }


  render(){
    return(
      <form onSubmit={(e) => this.props.handleSubmit(e, this.state.comment)}>
      <textarea value= {this.state.comment} onChange={this.handleChange}/>
      <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default CommentForm;
