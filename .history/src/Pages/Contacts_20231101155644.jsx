import React, {useState, useEffect} from "react";
import Header from '../Main/Header';
import s from "./modules/Contacts.module.css"
import { getDatabase, ref, onValue } from 'firebase/database';
export const Contacts = () => {
    useEffect(() => {
        document.title = 'Контакты';
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
          <div className={s.map}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A79290a73861b3d1c583ba60560e9e52e35b9c0239f8352666b8d6035556b2d98&amp;source=constructor" width="100%" frameborder="0"></iframe>
            <p className={s.suptitle} style={{fontWeight: "700"}}>Офис в Санкт-Петербурге</p>
          </div>       
          <div className={s.map} >
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac1ab92fb4d33081ca480945377638e7c14e5d9f95d6282a2e9fe48d77e9cfe0c&amp;source=constructor" width="100%" frameborder="0"></iframe>
            <p className={s.suptitle} style={{fontWeight: "700"}}>Офис Горизонт</p>
          </div>
        </div>
           
            <div className={s.suptitle} style={{margin: "60px 0px"}}>Более подробную информацию по аренде земельных участков и строений на Мурманском шоссе <br />  
            можно получить по телефону: <p>{numbers && numbers.name1}</p>  </div>
            
        </div>
  )
}

export default Contacts;