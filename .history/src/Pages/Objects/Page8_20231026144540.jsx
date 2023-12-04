import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import Header from "../../Main/Header";
import world2 from "../../image/main/3.jpg"
const Page8 = () => {

const [objects8, setobjects8] = useState({ name1: '' });
  useEffect(() => {
      const db = getDatabase();
      const objects8Ref = ref(db, "objects8");

      const fetchData = (snapshot, setState) => {
        const data = snapshot.val();
        setState(data);
      };

      onValue(objects8Ref, (snapshot) => fetchData(snapshot, setobjects8));
      
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
  <div className="container-id" style={{top: "80px", position: "relative"}}>
    <div className="container-left">        
          <pre style={{marginTop: "20px", marginLeft: "-3px"}}>{objects8 && objects8.sale1}</pre> 
      <p style={{fontWeight: "800"}}>Характеристики</p>
      <hr style={{margin: "-10px 0 20px 0"}}/>
      <li className="characterPRE">Арендная ставка сроком на 11 месяцев:<br/>
1. 60 руб. за кв. м./мес. /Га;<br/>
2. Сенокос 600 руб./Га.</li>
        <li className="characterPRE">Общая площадь объекта:
948,6 кв. м.</li>
        
<li className="characterPRE">Ленинградская область, Кировский район,<br/>
         74 км Мурманского шоссе.</li>
        <div className="" style={{marginTop: "50px", fontWeight: "800"}}>Ознакомится с вариантами и условиями аренды можно
            <a href="http://xn--47-glcqe5aecpy.xn--p1ai/arenda-angara-ot-sobstvennika"> здесь</a>.
        </div>
        <div className="numbers"  style={{position: "relative", left: "-208px", top: "20px"}}>
                <h3 style={{ margin: "0", fontSize: "13px", width: "352px", lineHeight: "15px"}}  className="h3 h3__sale">
                За более подробной информацией обращайтесь к 
нашим менеджерам по телефону: <a href="">{numbers && numbers.name2}</a>
                </h3>
 
              </div>
    </div>
        <div className="container-right" style={{marginTop: "30px"}}>
          <p>{objects8 && objects8.name1}</p>
          <img src={world2} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <span style={{marginTop: "20px"}}></span>
            <div className="sale-product-cart__map" >
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae4a382c9bc8e4d5e1a81a8dc8538e25fabcff32e8dfca1558013ce418a848b30&amp;source=constructor" width="100%" height="300px"></iframe>            </div>
            
            </div>
        </div>
</div>
  );
};

export default Page8;
