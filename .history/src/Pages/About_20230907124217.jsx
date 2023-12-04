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
            <div className={s.title}>Основной актив нашей компании – это команда профессионалов и единомышленников. Приобретение недвижимости для многих людей является серьезным шагом к достижению целей. Мы помогаем приблизить вашу цель, предлагая объекты недвижимости различного назначения с наиболее выгодными условиями, и квалифицированной поддержкой менеджеров и юристов.</div>
                <ul className={s.ul}>Преимущества приобретения или аренды объектов именно у нас
                    <li>Выгодные условия приобретения (аренды) напрямую от собственника</li>
                    <li>Широкий выбор помещений, складов, земельных участков, зданий и сооружений</li>
                    <li>Выгодное местоположение, транспортная доступность и развитая инфраструктура</li>
                    <li>Профессиональное сопровождение сделок</li>
                </ul>
                <span style={{fontSize: "13px", fontWeight:"700", marginTop: "50px"}}>Более подробную информацию по наличию и условиям приобретения или аренды объектов можно получить у наших менеджеров по телефону: {numbers && numbers.name2}  </span>
                <span style={{fontSize: "13px", fontWeight:"700"}}>Также вы можете самостоятельно ознакомиться с данной информацией в разделе <a href="/general#id-1">"Продажа"</a> и <NavLink to="http://xn--47-glcqe5aecpy.xn--p1ai/arenda-zemli/">"Аренда"</NavLink></span>
        </div>
    </div>
  )
}


export default About