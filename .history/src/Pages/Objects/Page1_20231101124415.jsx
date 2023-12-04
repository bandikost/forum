import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import Numbers from "../../manager/Numbers";
import NumbersContact from "../../Main/components/numbers";
import { convertIdentifiersToTags } from "../../manager/main/Ojects/Ojects-edit"; 
import button from "../../image/main/pngegg.png"
import Menu from "../modules/Menu";

const Page = () => {
  const [objects, setObjects] = useState({ name1: '' });

  useEffect(() => {
    const db = getDatabase();
    const objectsRef = ref(db, "objects");

    const fetchData = (snapshot, setState) => {
      const data = snapshot.val();
      setState(data);
    };

    onValue(objectsRef, (snapshot) => fetchData(snapshot, setObjects));
  }, []);

  useEffect(() => {
    if (objects.name1) {
      document.title = objects.name1;
    }
  }, [objects.name1]);


  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to keep track of the current image index

  const handlePrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };


  return (
<div>
  <Menu />
  <div className="container-absolute">
  <div className="container-id">
    <div className="container-right">
            <p className="address">{objects && objects.name1}
            <pre className="description">{objects && objects.info1} </pre>
            </p>
            <div className="slider-container">
              {Array.from({ length: 3 }, (_, index) => (
                <img
                  key={index}
                  className="slider-image"
                  src={objects[`imageUrl${index + 1}`]}
                  alt={`Image ${index + 1}`}
                  style={{ display: currentImageIndex === index ? "block" : "none" }}
                />
              ))}
            </div> 
            
    </div>
  </div>

    <div className="about">
              <div className="ucan">Вы можете приобрести данный объект:
            <b className="sale-dis">{objects && objects.sale1}</b> 
          </div>
          <span className="discount">
            <div className="lastprice">
              <p>{objects && objects.lastprice1}</p>
              <i>{objects && objects.procent1}</i>
            </div>
            <div className="newprice">{objects && objects.newprice1}   </div>
            <div className="end-discount">{objects && objects.dateend1}</div>      
          </span>
    </div>
         



              <div className="container-left">
              <p style={{fontWeight: "700", marginLeft: "50px"}}>Характеристики</p>
      <hr style={{margin: "-10px 0 20px 0", marginLeft: "50px"}}/>
      <div
            className="li-styles"
            dangerouslySetInnerHTML={{
              __html: convertIdentifiersToTags(objects?.character1),
            }}
          />
              </div>
     
  </div>

    <div className="sale-product-cart__map" >
      <iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3Aada49d178fdc1702cf078af39ad78cbcf8d6413d622c32a308f7b1b0dac3e02e" frameBorder="0" allowFullScreen={true} width="100%" ></iframe>        
    </div>
    <NumbersContact />
    <span> Коммерческое предложение в pdf:<a href="ids/Екатериновка.pdf" download>Скачать PDF</a></span>
    <div className="date-discount">{objects && objects.date1}  </div> 
  </div>
  
  );
};

export default Page;

