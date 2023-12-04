import React from 'react'
import Header from '../Main/Header'
import s from "./modules/Main.module.css"
import logo from "../image/main/logo.png"
import img from "../image/header/logo.png"
import { NavLink } from 'react-router-dom'
import one from "../image/main/1.jpg";

export const General = () => {
  return (
  <div className={s.background}>
      <div>
        <div className={s.item_1}><img src={logo} alt="" /></div>
        <div className={s.item_2}><img src={logo} alt="" /></div>
        <div className={s.item_3}><img src={logo} alt="" /></div>
        <div className={s.item_4}><img src={logo} alt="" /></div>
        <div className={s.item_5}><img src={logo} alt="" /></div>
        <div className={s.item_6}><img src={logo} alt="" /></div>
        <div className={s.item_7}><img src={logo} alt="" /></div>
        <div className={s.item_8}><img src={logo} alt="" /></div>
        <div className={s.item_9}><img src={logo} alt="" /></div>
        <div className={s.item_10}><img src={logo} alt="" /></div>
        <div className={s.item_11}><img src={logo} alt="" /></div>
      </div>
      <div className={s.logo}>
        <NavLink to="/general"><img src={img} alt="" /></NavLink>
        <span>Комнед <br />
          Санкт-Петербург
        </span>  
      </div>
     
    <Header />
    <div className={s.welcome}>
      <div className={s.message}>
      <div className={s.text}>Мы рады приветсвовать вас!</div>
      <div className={s.text2}>Что вы можете у нас интересного увидеть?</div>
      <div className={s.about}>
        <li className={s.first}>Выгодные условия приобретения (аренды) напрямую от собственника</li>
        <li className={s.second}>Широкий выбор помещений, складов, земельных участков, зданий и сооружений</li>
        <li className={s.third}>Выгодное местоположение, транспортная доступность и развитая инфраструктура</li>
        <li className={s.four}>Профессиональное сопровождение сделок</li> 
      </div>
      </div>
     <div className={s.images}>
      <img className={s.mainPage} src={one} alt="" />
      </div>
    </div>
  </div>
  )
}

export default General