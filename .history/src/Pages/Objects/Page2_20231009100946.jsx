import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import Header from "../../Main/Header";
import button from "../../image/main/pngegg.png"
import NumbersContact from "../components/numbers";
const Page2 = () => {

  const [objects2, setObjects2] = useState({ name1: '' });

  useEffect(() => {
    const db = getDatabase();
    const objects2Ref = ref(db, "objects2");

    const fetchData = (snapshot, setState) => {
      const data = snapshot.val();
      setState(data);
    };

    onValue(objects2Ref, (snapshot) => fetchData(snapshot, setObjects2));
  }, []);

  useEffect(() => {
    if (objects2.name1) {
      document.title = objects2.name1;
    }
  }, [objects2.name1]);


  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to keep track of the current image index

  const handlePrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };
  
  
  return (
<div>
  <Header />
  <div className="container-id" style={{top: "80px", position: "relative"}}>
    <div className="container-left">
    <p style={{fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center"}}>Продажа</p>
        <span className="discount"><span>АКЦИЯ</span>
        <hr style={{margin: "10px 0 20px 0", width: "100%"}}/>
          <div className="date-discount">{objects2 && objects2.date1} <br /> </div>
            <div style={{lineHeight: "20px", width: "201px", textAlign: "center"}}>Вы можете приобрести данный объект за:</div>
           
            <div className="newprice">{objects2 && objects2.newprice1}   <br /></div>
            
        </span>
        
       
      <p style={{fontWeight: "700"}}>Характеристики</p>
      <hr style={{margin: "-10px 0 20px 0"}}/>
        <pre className="characterPRE">{objects2 && objects2.character1}</pre>
        <pre style={{marginTop: "5px", marginLeft: "-3px"}}>{objects2 && objects2.sale1}</pre> 
        </div>

        <div className="container-right">
          <p className="address">{objects2 && objects2.name1}</p>
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
            <div className="slider-buttons">
            <button className="arrow-button prev" onClick={handlePrevSlide}>
              <img className="prev" src={button} alt=""/>
            </button>
            <button className="arrow-button next" onClick={handleNextSlide}>
            <img className="next" src={button} alt=""/>
            </button>
            </div>
          </div>
          <span> Коммерческое предложение в pdf:<a href="ids/Екатериновка.pdf" download>Скачать PDF</a></span>
            <div className="sale-product-cart__map" >
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad7cf3edc64aecfdf444fe012898a65f63c5cab0a5ff8ae7f8e3cb359e601f6f7&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>              </div>
              <NumbersContact />
            </div>
        </div>
</div>
  );
};

export default Page2;

