import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import NumbersContact from "../../Main/components/numbers";
import { convertIdentifiersToTags } from "../../manager/main/Ojects/Ojects-edit"; 
import Menu from "../modules/Menu";
import znak from "../../image/main/znak.png"

const Page2 = () => {


  const [showText, setShowText] = useState(false);

  
  const [objects2, setobjects2] = useState({ name1: '', sale: "" });

  useEffect(() => {
    const db = getDatabase();
    const objects2Ref = ref(db, "objects2");

    const fetchData = (snapshot) => {
      const data = snapshot.val();
      setObjects2(data);
    };

    onValue(objects2Ref, fetchData);

    // Set a timeout to show the text after a delay (e.g., 2 seconds)
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); 

  useEffect(() => {
    if (objects2.name1) {
      document.title = objects2.name1;
    }
  }, [objects2.name1]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0); 



  return (
<>
<Menu />
<div className="container-absolute">
  <div className="container-id">
    <div className="container-right">
      <p className="address">{objects2 && objects2.name1}
        <pre className="description">{objects2 && objects2.info1} </pre>
        <pre className="minimal-info">{objects2 && objects2.minimal1}</pre>
      </p>   
      <div className="slider-container">
              {Array.from({ length: 3 }, (_, index) => (
                <img
                  key={index}
                  className="slider-image"
                  src={objects2[`imageUrl${index + 1}`]}
                  alt={`Image ${index + 1}`}
                  style={{ display: currentImageIndex === index ? "block" : "none" }}
                />
              ))}
              <div className="information">
                <img src={znak} alt="" />Чтобы просмотреть еще изображения, то просто нажмите на фотографию.
              </div>
      </div>    
          
    </div>
  </div>

  <div className="about">
    <div className="ucan">Вы можете приобрести данный объект:
      <b className="sale-dis">{objects2 && objects2.sale1}</b> 
      <span> Коммерческое предложение в pdf:<a href="ids/Екатериновка.pdf" download>Скачать PDF</a></span>
    </div>
  </div>   

  <div className="container-left">
    <p>Характеристики</p>
      <div className="li-styles" dangerouslySetInnerHTML={{__html: convertIdentifiersToTags(objects2?.character1),}}/>
        <div className="sale-product-cart__map" >
          <div className="date-discount">{objects2 && objects2.date1}  </div> 
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad7cf3edc64aecfdf444fe012898a65f63c5cab0a5ff8ae7f8e3cb359e601f6f7&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>   
          <NumbersContact />      
        </div>
  </div> 
  <div className="end-discount">{objects2 && objects2.dateend1}</div> 
    <span className="discount">
      <div className="newprice">{objects2 && objects2.newprice1}   </div>
        <div className="lastprice">
          <p>{objects2 && objects2.lastprice1}</p>
          <i>{objects2 && objects2.procent1}</i>
      </div>     
    </span>
</div>
</>
  );
};

export default Page2;



