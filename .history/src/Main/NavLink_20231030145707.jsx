import React from 'react'
import s from './modules/Header.module.css'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';

export const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBurger, setIsBurger] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024); 
  useEffect(() => { 
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  


return (
  <>
 

   <ul className={s.navigation}>    
   <li className={s.items}>
                    <NavLink to="/about" className={({ isActive }) => isActive ? s.active : ""}>03. о нас </NavLink>
            </li>                                         
            <li className={s.items}>
              <NavLink to="/general" className={({ isActive }) => isActive ? s.active : ""}>01. главная</NavLink>
            </li>    
            <li className={s.items}>
              <NavLink to="/general" className={({ isActive }) => isActive ? s.active : ""}>02. объекты</NavLink>
            </li>   
            <li className={s.items}>
                    <NavLink to="/contacts" className={({ isActive }) => isActive ? s.active : ""}>04. контакты </NavLink>
            </li>
            </ul>
  {isMobile && (
    <div className={s.burgerButton}>
    <div className={s.burgerMenu} >
      <div className={s.menucontent} style={{marginTop: "5px"}}>
        <div className={s.planet} onClick={() => setIsBurger(!isBurger)}>
          <div className={s.spanBurger}></div>
        </div>
        {isBurger && (
            <ul className={s.menuContent} style={{marginTop: "10px", marginLeft: "-20px"}}>                                      
          <nav className={s.nav} style={{display: "block"}}> 
            <li className={s.item} style={{width: "142px"}}>
              <NavLink to="/general" className={({ isActive }) => isActive ? s.active : ""}>на главную</NavLink>
            </li>
          <hr className={s.hr} />
            <li className={s.item}>
                    <NavLink to="/about" className={({ isActive }) => isActive ? s.active : ""}> о нас </NavLink>
            </li>
            <hr className={s.hr} />
            <li className={s.item}>
                    <NavLink to="/http://xn--47-glcqe5aecpy.xn--p1ai/arenda-zemli/" className={({ isActive }) => isActive ? s.active : ""}> аренда </NavLink>
            </li>
          <hr className={s.hr} />
            <li className={s.item}>
                    <NavLink to="/general" className={({ isActive }) => isActive ? s.active : ""}> продажа </NavLink>
            </li>
          <hr className={s.hr} />
            <li className={s.item}>
                    <NavLink to="/contacts" className={({ isActive }) => isActive ? s.active : ""}> контакты </NavLink>
            </li>
  </nav> 
            </ul>
            )}
      </div>
    </div>
    
    </div>
  )}
 
</>
);
};

export default Nav;