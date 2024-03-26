import React from 'react'
import './button.css'

export default function Button({children, btnColor, ...props}) {
  const styles={
    'color': btnColor || 'black'
  }
  return (
    <button 
      className='btn' 
      style={styles}
      {...props}
    >
      {children}
    </button>
  )
}
