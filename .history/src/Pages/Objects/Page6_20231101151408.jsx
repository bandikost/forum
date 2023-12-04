import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import NumbersContact from "../../Main/components/numbers";
import { convertIdentifiersToTags } from "../../manager/main/Ojects/Ojects-edit"; 
import Menu from "../modules/Menu";
import znak from "../../image/main/znak.png"

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

  useEffect(() => {
    if (objects5.name1) {
      document.title = objects5.name1;
    }
  }, [objects5.name1]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0); 



  return (
<>
<Menu />
<div className="container-absolute">
  <div className="container-id">
    <div className="container-right">
      <p className="address">{objects5 && objects5.name1}
        <pre className="description">{objects5 && objects5.info1} </pre>
        <pre className="minimal-info">{objects5 && objects5.minimal1}</pre>
      </p>   
      <div className="slider-container">
              {Array.from({ length: 3 }, (_, index) => (
                <img
                  key={index}
                  className="slider-image"
                  src={objects5[`imageUrl${index + 1}`]}
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
      <b className="sale-dis">{objects5 && objects5.sale1}</b> 
      <span> Коммерческое предложение в pdf:<a href="ids/Екатериновка.pdf" download>Скачать PDF</a></span>
    </div>
  </div>   

  <div className="container-left">
    <p>Характеристики</p>
      <pre className="li-styles" dangerouslySetInnerHTML={{__html: convertIdentifiersToTags(objects5?.character1),}}/>
        <div className="sale-product-cart__map" >
          <div className="date-discount">{objects5 && objects5.date1}</div> 
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae4a372c9bc7e4d5e1a71a6dc7536e25fabcff32e8dfca1557013ce417a647b30&amp;source=constructor" width="100%"></iframe>     
          <NumbersContact />      
        </div>
  </div> 
  <div className="end-discount">{objects5 && objects5.dateend1}</div> 
    <span className="discount">
      <div className="newprice">{objects5 && objects5.newprice1}   </div>
        <div className="lastprice">
          <p>{objects5 && objects5.lastprice1}</p>
          <i>{objects5 && objects5.procent1}</i>
      </div>     
    </span>
</div>
</>
  );
};

export default Page5;
