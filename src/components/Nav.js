import React from 'react'
import Button from './common/Button';

import './css/nav.css'

export default function Nav({data}) {
    const {brand, search, menu, button} = data;
  return (
    <nav className='nav container flex'>
        <div className='flex'>
            <span>{brand}</span>
            {/* <input type="text" /> */}
        </div>
        <div className='flex nav-menu'>
            {menu.map((menuItem, index)=>(
                <div className='flex nav-item' key={index}>
                    <div><img src={`/assets/${menuItem.icon}`}/></div>
                    <div>{menuItem.name}</div>
                </div>
            ))}
            <Button>{button.content}</Button>
        </div>
    </nav>
  )
}
