import React, {useState, useEffect} from "react";
import Header from '../Main/Header'
import s from "./modules/About.module.css"
import { getDatabase, ref, onValue } from 'firebase/database';
import { NavLink } from "react-router-dom";
export const About = () => {
    useEffect(() => {
        document.title = 'О нас';
      }, []);
    const [numbers, setnumbers] = useState({});

    useEffect(() => {
      const db = getDatabase();
      const numbersRef = ref(db, "numbers");
      onValue(numbersRef, (snapshot) => {
        const data = snapshot.val();
        setnumbers(data);
      });
    }, []);
    
  return (
    <div>
        <Header />
        <div className={s.container} style={{paddingBottom: "50px"}}>
            <div className={s.suptitle}>Группа компаний «Форум» успешно ведет свою деятельность на рынке коммерческой недвижимости Санкт-Петербурга и Ленинградской области более 20 лет.</div>
            <div className={s.title}>
            <p className={s.first}>Основной актив нашей компании – это команда профессионалов и единомышленников.</p><br />
            <p className={s.second}>Приобретение недвижимости для многих людей является серьезным шагом к достижению целей.</p><br />
            <p className={s.third}>Мы помогаем приблизить вашу цель, предлагая объекты недвижимости различного назначения с наиболее выгодными условиями, и квалифицированной поддержкой менеджеров и юристов.</p></div>
        </div>
    </div>
  )
}


export default About