import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import Header from "../../Main/Header";
import world2 from "../../image/main/2.jpg"
const Page7 = () => {

const [objects7, setobjects7] = useState({ name1: '' });
  useEffect(() => {
      const db = getDatabase();
      const objects7Ref = ref(db, "objects7");

      const fetchData = (snapshot, setState) => {
        const data = snapshot.val();
        setState(data);
      };

      onValue(objects7Ref, (snapshot) => fetchData(snapshot, setobjects7));
      
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

  useEffect(() => {
    if (objects7.name1) {
      document.title = objects7.name1;
    }
  }, [objects7.name1]);
  
  
  return (
<div>
  <Header />
  <div className="container-id" style={{top: "80px", position: "relative"}}>
    <div className="container-left">        
          <pre style={{marginTop: "20px", marginLeft: "-3px"}}>{objects7 && objects7.sale1}</pre> 
      <p style={{fontWeight: "700"}}>Характеристики</p>
      <hr style={{margin: "-10px 0 20px 0"}}/>
        <li className="characterPRE">Площадь земель от 1га до 100га и свыше </li>
        <li className="characterPRE">Приемлемые цены на аренду</li>
        <li className="characterPRE">Расположено: Ленинградская область, Кировский район,
74 км Мурманского шоссе.</li>
        <div className="" style={{marginTop: "50px", fontWeight: "700"}}>Все варинаты аренды вы можете увидеть 
            <a href="http://xn--47-glcqe5aecpy.xn--p1ai/arenda-zemli/"> здесь</a>.
        </div>
        <div className="numbers"  style={{position: "relative", left: "-207px", top: "20px"}}>
                <h3 className="h3 h3__sale">По всем вопросам звоните по номеру</h3>
                <h3 className="h3 h3__sale"><a href="">{numbers && numbers.name2}</a></h3>   
              </div>
    </div>
        <div className="container-right">
          <p>{objects7 && objects7.name1}</p>
          <img src={world2} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <span style={{marginTop: "20px"}}></span>
            <div className="sale-product-cart__map" >
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae4a372c9bc7e4d5e1a71a7dc7537e25fabcff32e8dfca1557013ce417a747b30&amp;source=constructor" width="100%" height="300px"></iframe>            </div>
            
            </div>
        </div>
</div>
  );
};

export default Page7;

