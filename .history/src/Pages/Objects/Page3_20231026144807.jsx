import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import Header from "../../Main/Header";

const Page3 = () => {

const [objects3, setobjects3] = useState({ name1: '' });
  useEffect(() => {
      const db = getDatabase();
      const objects3Ref = ref(db, "objects3");

      const fetchData = (snapshot, setState) => {
        const data = snapshot.val();
        setState(data);
      };

      onValue(objects3Ref, (snapshot) => fetchData(snapshot, setobjects3));
      
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
    if (objects3.name1) {
      document.title = objects3.name1;
    }
  }, [objects3.name1]);
  
  
  return (
<div>
  <Header />
  <div className="container-id" style={{top: "80px", position: "relative"}}>
    <div className="container-left">
    <p style={{fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center"}}>Продажа</p>
        <span className="discount"><span>АКЦИЯ</span>
        <hr style={{margin: "10px 0 20px 0", width: "100%"}}/>
          <div className="date-discount">{objects3 && objects3.date1} <br /> </div>
            <div style={{lineHeight: "20px", width: "201px", textAlign: "center"}}>Вы можете приобрести данный объект со скидкой:</div>
            <div className="lastprice">
              <p>{objects3 && objects3.lastprice1} </p>
              <span>{objects3 && objects3.procent1}</span>
            </div>
            <div className="newprice">{objects3 && objects3.newprice1}   <br /></div>
            <div>{objects3 && objects3.dateend1}</div>
        </span>
        
        <pre style={{marginTop: "20px", marginLeft: "-3px"}}>{objects3 && objects3.sale1}</pre> 
      <p style={{fontWeight: "700"}}>Характеристики</p>
      <hr style={{margin: "-10px 0 20px 0"}}/>
        <pre className="characterPRE">{objects3 && objects3.character1}</pre>
        </div>
        <div className="container-right">
          <p>{objects3 && objects3.name1}</p>
            <img src={objects3[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <span style={{marginTop: "20px"}}> Коммерческое предложение в pdf:<a href="ids/Екатериновка.pdf" download>Скачать PDF</a></span>
            <div className="sale-product-cart__map" >
            <iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3Ad354cf233bbfd941b7c01c5f2a77ec87854b9c4825113202f1770d9ab6f43abd" frameBorder="0" allowFullScreen={true} width="100%" height="300px"></iframe>            </div>
              <div className="numbers">
              <h3 style={{ margin: "0", fontSize: "15px", width: "440px", lineHeight: "20px"}} className="h3 h3__sale">За более подробной информацией обращайтесь к 
нашим менеджерам по телефону: <a href="">{numbers && numbers.name2}</a></h3>
                <h3 className="h3 h3__sale"><a href="">{numbers && numbers.name2}</a></h3>   
              </div>
            </div>
        </div>
</div>
  );
};

export default Page3;

