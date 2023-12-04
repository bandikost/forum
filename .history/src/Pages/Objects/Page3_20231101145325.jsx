import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import NumbersContact from "../../Main/components/numbers";
import { convertIdentifiersToTags } from "../../manager/main/Ojects/Ojects-edit"; 
import Menu from "../modules/Menu";
import znak from "../../image/main/znak.png"

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

  useEffect(() => {
    if (objects3.name1) {
      document.title = objects3.name1;
    }
  }, [objects3.name1]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0); 



  return (
<>
<Menu />
<div className="container-absolute">
  <div className="container-id">
    <div className="container-right">
      <p className="address">{objects3 && objects3.name1}
        <pre className="description">{objects3 && objects3.info1} </pre>
        <pre className="minimal-info">{objects3 && objects3.minimal1}</pre>
      </p>   
      <div className="slider-container">
              {Array.from({ length: 3 }, (_, index) => (
                <img
                  key={index}
                  className="slider-image"
                  src={objects3[`imageUrl${index + 1}`]}
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
      <b className="sale-dis">{objects3 && objects3.sale1}</b> 
      <span> Коммерческое предложение в pdf:<a href="ids/Екатериновка.pdf" download>Скачать PDF</a></span>
    </div>
  </div>   

  <div className="container-left">
    <p>Характеристики</p>
      <div className="li-styles" dangerouslySetInnerHTML={{__html: convertIdentifiersToTags(objects3?.character1),}}/>
        <div className="sale-product-cart__map" >
          <div className="date-discount">{objects3 && objects3.date1}  </div> 
          <iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3Ad354cf233bbfd941b7c01c5f2a77ec87854b9c4825113202f1770d9ab6f43abd" frameBorder="0" allowFullScreen={true} width="100%" height="300px"></iframe>   
          <NumbersContact />      
        </div>
  </div> 
  <div className="end-discount">{objects3 && objects3.dateend1}</div> 
    <span className="discount">
      <div className="newprice">{objects3 && objects3.newprice1}   </div>
        <div className="lastprice">
          <p>{objects3 && objects3.lastprice1}</p>
          <i>{objects3 && objects3.procent1}</i>
      </div>     
    </span>
</div>
</>
  );
};

export default Page3;
