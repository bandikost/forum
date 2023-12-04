import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import NumbersContact from "../../Main/components/numbers";
import { convertIdentifiersToTags } from "../../manager/main/Ojects/Ojects-edit"; 
import Menu from "../modules/Menu";
import znak from "../../image/main/znak.png"

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

  useEffect(() => {
    if (objects6.name1) {
      document.title = objects6.name1;
    }
  }, [objects6.name1]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0); 



  return (
<>
<Menu />
<div className="container-absolute">
  <div className="container-id">
    <div className="container-right">
      <p className="address">{objects6 && objects6.name1}
        <pre className="description">{objects6 && objects6.info1} </pre>
        <pre className="minimal-info">{objects6 && objects6.minimal1}</pre>
      </p>   
      <div className="slider-container">
              {Array.from({ length: 3 }, (_, index) => (
                <img
                  key={index}
                  className="slider-image"
                  src={objects6[`imageUrl${index + 1}`]}
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
      <b className="sale-dis">{objects6 && objects6.sale1}</b> 
      <span> Коммерческое предложение в pdf:<a href="ids/Екатериновка.pdf" download>Скачать PDF</a></span>
    </div>
  </div>   

  <div className="container-left">
    <p>Характеристики</p>
      <pre className="li-styles" dangerouslySetInnerHTML={{__html: convertIdentifiersToTags(objects6?.character1),}}/>
        <div className="sale-product-cart__map" >
          <div className="date-discount">{objects6 && objects6.date1}</div> 
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae4a372c9bc7e4d5e1a71a6dc7536e25fabcff32e8dfca1557013ce417a647b30&amp;source=constructor" width="100%"></iframe>     
          <NumbersContact />      
        </div>
  </div> 
  <div className="end-discount">{objects6 && objects6.dateend1}</div> 
    <span className="discount">
      <div className="newprice">{objects6 && objects6.newprice1}   </div>
        <div className="lastprice">
          <p>{objects6 && objects6.lastprice1}</p>
          <i>{objects6 && objects6.procent1}</i>
      </div>     
    </span>
</div>
</>
  );
};

export default Page6;
