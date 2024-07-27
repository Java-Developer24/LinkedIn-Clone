import React from 'react'
import './HeaderOption.css'

export default function HeaderOption({Icon,title}) {
  return (
    <div className='headerOption'>
     {Icon && <Icon className='headerOption_icon'/>}
     <h3>{title}</h3>
      
    </div>
  )
}
