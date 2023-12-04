import React from 'react'
import Header from '../Main/Header'
import s from "./modules/Main.module.css"
import logo from "../image/main/logo.png"

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
      </div>
    <Header />
  </div>
  )
}

export default General