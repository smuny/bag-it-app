import React from 'react'

import Item from './HypeComponents/Item'

const List = props => {
  let loaditemcard = props.items.map(item =>
  <Item handleClick={props.handleClick} item={item}/>)
  return(

    <div>
        <h1>Supreme SS19 List</h1><br/><br/>
    {loaditemcard}
    </div>
  )
}
export default List;
