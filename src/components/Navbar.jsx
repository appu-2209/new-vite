import React from 'react'
import { navLinks } from '../constants/Language'
import  logo  from '../assets/images/logo.png'
import { useState } from 'react'

const Navbar = () => {

  const menuArr = navLinks
const [selectedMenu,setSelectedMenu] = useState("Home")

function handleSelectMenu(item){
  setSelectedMenu(item.title)
}

  return (
    <div className="navbar-main">
      <div className="navbar-main-img cursor">
        <img src={logo} alt=''/>
      </div>
      <div className="navbar-main-menu">
      {
        menuArr && menuArr.length ? 
        menuArr.map((item,index) => {
          return(
            <div className="optVal-main" key={index}>
            <div className={`cursor optVal ${selectedMenu == item.title ? "selected" : ""}`} onClick={() => {
              handleSelectMenu(item)
            }}>{item.title}</div>
            {index != 0 && selectedMenu == item.title ?
            <div className="optVal-main-dropdown cursor">
              <div><img src={item.icon} /></div>
              <div>{item.sublink}</div>
            </div>: null}
            </div>
          )
        })
        : null
      }
      </div>
    </div>
  )
}

export default Navbar