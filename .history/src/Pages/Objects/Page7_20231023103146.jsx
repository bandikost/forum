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
    <p style={{fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center"}}>Продажа</p>
        <span className="discount"><span>АКЦИЯ</span>
        <hr style={{margin: "10px 0 20px 0", width: "100%"}}/>
          <div className="date-discount">{objects7 && objects7.date1} <br /> </div>
            <div style={{lineHeight: "20px", width: "201px", textAlign: "center"}}>Вы можете приобрести данный объект со скидкой:</div>
            <div className="lastprice">
              <p>{objects7 && objects7.lastprice1} </p>
              <span>{objects7 && objects7.procent1}</span>
            </div>
            <div className="newprice">{objects7 && objects7.newprice1}   <br /></div>
            <div>{objects7 && objects7.dateend1}</div>
        </span>
        
          <pre style={{marginTop: "20px", marginLeft: "-3px"}}>{objects7 && objects7.sale1}</pre> 
      <p style={{fontWeight: "700"}}>Характеристики</p>
      <hr style={{margin: "-10px 0 20px 0"}}/>
        <pre className="characterPRE">{objects7 && objects7.character1}</pre>
        </div>
        <div className="container-right">
          <p>{objects7 && objects7.name1}</p>
          <img src={world2} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <span style={{marginTop: "20px"}}> Коммерческое предложение в pdf:<a href="ids/Екатериновка.pdf" download>Скачать PDF</a></span>
            <div className="sale-product-cart__map" >
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae4a372c9bc7e4d5e1a71a7dc7537e25fabcff32e8dfca1557013ce417a747b30&amp;source=constructor" width="100%" height="300px"></iframe>            </div>
              <div className="numbers">
                <h3 className="h3 h3__sale">По всем вопросам звоните по номеру</h3>
                <h3 className="h3 h3__sale"><a href="">{numbers && numbers.name2}</a></h3>   
              </div>
            </div>
        </div>
</div>
  );
};

export default Page7;

