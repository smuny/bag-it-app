import React from 'react'
import HypeItem from './HypeComponents/HypeItem'

const HypeList = props => {
console.log(props)
  return(
    <div>
      <p>HypeList</p>
      {props.clickeditems.map(item =>
      <HypeItem handleClick={props.handleClick} item={item}/>)}
    </div>
  )
}
export default HypeList;
