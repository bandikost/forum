import React, {useState, useEffect} from "react";
import s from './modules/Header.module.css'
import logo from "../image/header/logo.png"
import  { Nav } from './NavLink'
import { NavLink } from 'react-router-dom'


export const Header = () => {
  return (

    <div className={s.header}>
       <div className={s.back}></div>
        <div className={s.container}>
            <div className="" style={{opacity: "0"}}>1</div>
            <NavLink className={s.img} to="/general"><img src={logo} className={s.img} alt="" /></NavLink>
            <div className={s.info}>
               
                
                <Nav />
            </div>
        </div>
    </div>

   
  )
}


export default Header