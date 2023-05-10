import React from 'react'
import './FormItem.css'
function FormItem(props) {
  return (
    <div>
      <div className= "expence">
        <h2>{props.title}</h2>
      <div>${props.amount}</div>
      </div>
    </div>
  )
}

export default FormItem;
