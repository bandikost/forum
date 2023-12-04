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
            <div className={s.title}>Основной актив нашей компании – это команда профессионалов и единомышленников.
            <br /> Приобретение недвижимости для многих людей является серьезным шагом к достижению целей. 
            <br />Мы помогаем приблизить вашу цель, предлагая объекты недвижимости различного назначения с наиболее выгодными условиями, и квалифицированной поддержкой менеджеров и юристов.</div>
                <ul className={s.ul}>Преимущества приобретения или аренды объектов именно у нас
                    <li>Выгодные условия приобретения (аренды) напрямую от собственника</li>
                    <li>Широкий выбор помещений, складов, земельных участков, зданий и сооружений</li>
                    <li>Выгодное местоположение, транспортная доступность и развитая инфраструктура</li>
                    <li>Профессиональное сопровождение сделок</li>
                </ul>
        </div>
    </div>
  )
}


export default About