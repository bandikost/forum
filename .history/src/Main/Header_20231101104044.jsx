import React, {useState, useEffect} from "react";
import s from './modules/Header.module.css'
import logo from "../image/header/logo.png"
import  { Nav } from './NavLink'
import { NavLink } from 'react-router-dom'


export const Header = () => {
  return (
  <div>
    
      <div className={s.info}>             
        <Nav/>
   
    </div>
  </div>

   
  )
}


export default Header