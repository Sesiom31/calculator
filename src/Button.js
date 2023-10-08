import React from 'react'

function Button({id, value, type}) {
  return (
    <button id ={id} value={value} type={type}>{value} </button>
  )
}

export default Button