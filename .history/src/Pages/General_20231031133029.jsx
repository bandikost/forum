import React from 'react'
import Header from '../Main/Header'
import s from "./modules/Main.module.css"

export const General = () => {
  return (
    <div className={s.background}>
      <div className={s.item_1}></div>
      <div className={s.item_2}></div>
      <div className={s.item_3}></div>
      <div className={s.item_4}></div>
      <div className={s.item_5}></div>
      <div className={s.item_6}></div>
      <div className={s.item_7}></div>
      <div className={s.item_8}></div>
      <div className={s.item_9}></div>
      <div className={s.item_10}></div>
      <Header />
    </div>
  )
}

export default General