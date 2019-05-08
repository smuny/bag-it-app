import React from 'react'

const Item = props => {
  return(
    <div>


    <div>
    <h3>{props.item.title}</h3>
      <img onClick= {() => props.handleClick(props.item)} src={props.item.image} alt="title" height="250" width="250"/><br/>

    <h5>Color: {props.item.color}</h5>
    <h5>Price: {props.item.price}</h5><br/><br/>
    </div>
    </div>
  )
}
export default Item;
