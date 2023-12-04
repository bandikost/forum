import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import Header from "../../Main/Header";

const Page6 = () => {

const [objects6, setobjects6] = useState({ name1: '' });
  useEffect(() => {
      const db = getDatabase();
      const objects6Ref = ref(db, "objects6");

      const fetchData = (snapshot, setState) => {
        const data = snapshot.val();
        setState(data);
      };

      onValue(objects6Ref, (snapshot) => fetchData(snapshot, setobjects6));
      
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
    if (objects6.name1) {
      document.title = objects6.name1;
    }
  }, [objects6.name1]);
  
  
  return (
<div>
  <Header />
  <div className="container-id" style={{top: "80px", position: "relative"}}>
    <div className="container-left">
    <p style={{fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center"}}>Продажа</p>
        <span className="discount"><span>АКЦИЯ</span>
        <hr style={{margin: "10px 0 20px 0", width: "100%"}}/>
          <div className="date-discount">{objects6 && objects6.date1} <br /> </div>
            <div style={{lineHeight: "20px", width: "201px", textAlign: "center"}}>Вы можете приобрести данный объект со скидкой:</div>
            <div className="lastprice">
              <p>{objects6 && objects6.lastprice1} </p>
              <span>{objects6 && objects6.procent1}</span>
            </div>
            <div className="newprice">{objects6 && objects6.newprice1}   <br /></div>
            <div>{objects6 && objects6.dateend1}</div>
        </span>
        
          <pre style={{marginTop: "20px", marginLeft: "-3px"}}>{objects6 && objects6.sale1}</pre> 
      <p style={{fontWeight: "700"}}>Характеристики</p>
      <hr style={{margin: "-10px 0 20px 0"}}/>
        <pre className="characterPRE">{objects6 && objects6.character1}</pre>
        </div>
        <div className="container-right">
          <p>{objects6 && objects6.name1}</p>
            <img src={objects6[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <span style={{marginTop: "20px"}}> Коммерческое предложение в pdf:<a href="ids/Екатериновка.pdf" download>Скачать PDF</a></span>
            <div className="sale-product-cart__map" >
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae4a372c9bc7e4d5e1a71a6dc7536e25fabcff32e8dfca1557013ce417a647b30&amp;source=constructor" width="100%" height="300px"></iframe>            </div>
              <div className="numbers">
                <h3 style={{ margin: "0", fontSize: "15px", width: "440px", lineHeight: "15px"}} className="h3 h3__sale">За более подробной информацией обращайтесь к 
нашим менеджерам по телефону:</h3>
                <h3 className="h3 h3__sale"><a href="">{numbers && numbers.name2}</a></h3>   
              </div>
            </div>
        </div>
</div>
  );
};

export default Page6;

