import React from 'react'

import List from './Components/List'
import HypeList from './Components/HypeList'


class SupremeContainer extends React.Component{
  state = {
    items: [],
    clickeditems: []
  }

  handleClick = (item) => {
    if (!this.state.clickeditems.includes(item)){
      // if list of clickeditems doesnt include item object that is taken in
    this.setState({
      clickeditems: [...this.state.clickeditems, item]
      // clickeditems: is the state that we want to change
      // spread operator is getting all the values in the clickeditems array
      })
    }
  }

  handleRemoveClick = (item) => {
    this.setState({
      clickeditems: [...this.state.clickeditems].filter(i =>
      i.id !== item.id)
      // id of the item does not match the item id that i clicked, it'll only show what i didnt click
    })
  }

componentDidMount(){
  fetch('http://localhost:3090/items')
  .then(res => res.json())
  .then(itemObj =>
  this.setState({items: itemObj}))
}

  render(){
    return(
      <div>
      <List handleClick={this.handleClick} items={this.state.items}/>
      <HypeList handleClick={this.handleRemoveClick} clickeditems={this.state.clickeditems}/>
      </div>
    )
  }
}
export default SupremeContainer;
