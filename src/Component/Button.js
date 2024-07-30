import React from 'react'
import './Button.css'
import {MdMessage} from "react-icons/md"

const Button = (props, {...rest}) => {

  
  return (
    <div className='container'>
        <button 
        {...rest}
        className={`props.isOutline ? style.outline_btn : primary_btn`  }>
            {/* <MdMessage/> */}
            {props.icon}
            {props.text}
        </button>
    </div>
  )
}

export default Button
