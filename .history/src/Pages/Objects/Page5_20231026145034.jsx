import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import Header from "../../Main/Header";

const Page5 = () => {

const [objects5, setobjects5] = useState({ name1: '' });
  useEffect(() => {
      const db = getDatabase();
      const objects5Ref = ref(db, "objects5");

      const fetchData = (snapshot, setState) => {
        const data = snapshot.val();
        setState(data);
      };

      onValue(objects5Ref, (snapshot) => fetchData(snapshot, setobjects5));
      
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
    if (objects5.name1) {
      document.title = objects5.name1;
    }
  }, [objects5.name1]);
  
  
  return (
<div>
  <Header />
  <div className="container-id" style={{top: "80px", position: "relative"}}>
    <div className="container-left">
    <p style={{fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center"}}>Продажа</p>
        <span className="discount"><span>АКЦИЯ</span>
        <hr style={{margin: "10px 0 20px 0", width: "100%"}}/>
          <div className="date-discount">{objects5 && objects5.date1} <br /> </div>
            <div style={{lineHeight: "20px", width: "201px", textAlign: "center"}}>Вы можете приобрести данный объект со скидкой:</div>
            <div className="lastprice">
              <p>{objects5 && objects5.lastprice1} </p>
              <span>{objects5 && objects5.procent1}</span>
            </div>
            <div className="newprice">{objects5 && objects5.newprice1}   <br /></div>
            <div>{objects5 && objects5.dateend1}</div>
        </span>
        
        <pre style={{marginTop: "20px", marginLeft: "-3px"}}>{objects5 && objects5.sale1}</pre> 
      <p style={{fontWeight: "700"}}>Характеристики</p>
      <hr style={{margin: "-10px 0 20px 0"}}/>
        <pre className="characterPRE">{objects5 && objects5.character1}</pre>
        </div>
        <div className="container-right">
          <p>{objects5 && objects5.name1}</p>
            <img src={objects5[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <span style={{marginTop: "20px"}}> Коммерческое предложение в pdf:<a href="ids/Екатериновка.pdf" download>Скачать PDF</a></span>
            <div className="sale-product-cart__map" >
            <iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3A9d7478830288100763a20db8a89572338772673baaf023637b003c426ad440ff" frameBorder="0" allowFullScreen={true} width="100%" height="300px" ></iframe>            </div>
              <div className="numbers">
              <h3 style={{ margin: "0", fontSize: "15px", width: "440px", lineHeight: "20px"}} className="h3 h3__sale">За более подробной информацией обращайтесь к 
нашим менеджерам по телефону: <a href="">{numbers && numbers.name2}</a></h3>
              
              </div>
            </div>
        </div>
</div>
  );
};

export default Page5;

