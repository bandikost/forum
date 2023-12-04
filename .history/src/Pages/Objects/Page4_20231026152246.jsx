import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import Header from "../../Main/Header";

const Page4 = () => {

const [objects4, setobjects4] = useState({ name1: '' });
  useEffect(() => {
      const db = getDatabase();
      const objects4Ref = ref(db, "objects4");

      const fetchData = (snapshot, setState) => {
        const data = snapshot.val();
        setState(data);
      };

      onValue(objects4Ref, (snapshot) => fetchData(snapshot, setobjects4));
      
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
    if (objects4.name1) {
      document.title = objects4.name1;
    }
  }, [objects4.name1]);
  
  
  return (
<div>
  <Header />
  <div className="container-id" style={{top: "80px", position: "relative"}}>
    <div className="container-left">
    <p style={{fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center"}}>Продажа</p>
        <span className="discount">
          <div className="date-discount">{objects4 && objects4.date1} <br /> </div>
            <div style={{lineHeight: "20px", width: "201px", textAlign: "center"}}>Вы можете приобрести данный объект со скидкой:</div>
            <div className="lastprice">
              <p>{objects4 && objects4.lastprice1} </p>
              <span>{objects4 && objects4.procent1}</span>
            </div>
            <div className="newprice">{objects4 && objects4.newprice1}   <br /></div>
            <div>{objects4 && objects4.dateend1}</div>
        </span>
        
        <pre style={{marginTop: "20px", marginLeft: "-3px"}}>{objects4 && objects4.sale1}</pre> 
      <p style={{fontWeight: "700"}}>Характеристики</p>
      <hr style={{margin: "-10px 0 20px 0"}}/>
        <pre className="characterPRE">{objects4 && objects4.character1}</pre>
        </div>
        <div className="container-right">
          <p>{objects4 && objects4.name1}</p>
            <img src={objects4[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <span style={{marginTop: "20px"}}> Коммерческое предложение в pdf:<a href="ids/Екатериновка.pdf" download>Скачать PDF</a></span>
            <div className="sale-product-cart__map" >
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4af471ac8301e08310a6e11b0d9185fa1e6fbeacfc9974571740918de7c44195&amp;source=constructor" width="100%" height="300" frameBorder="0"></iframe>            </div>
              <div className="numbers">
              <h3 style={{ margin: "0", fontSize: "15px", width: "440px", lineHeight: "20px"}} className="h3 h3__sale">За более подробной информацией обращайтесь к 
нашим менеджерам по телефону: <a href="">{numbers && numbers.name2}</a></h3>
                 
              </div>
            </div>
        </div>
</div>
  );
};

export default Page4;

