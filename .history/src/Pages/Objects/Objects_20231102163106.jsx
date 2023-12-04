import React, {useState, useEffect} from "react";
import Header from '../../Main/Header'
import s from "../modules/General.module.css" 
import { getDatabase, ref, onValue } from 'firebase/database';
import world from "../../image/main/2.jpg"
import world2 from "../../image/main/3.jpg"
import { Link } from "react-router-dom";
import sold from "../../image/main/sold.png"
import discount from "../../image/main/discount.jpg"
import ws from "../../image/main/icons/free-icon-whatsapp-3536445.png"
import vb from "../../image/main/icons/free-icon-viber-3938039.png"


export const Object = ({ id, showImage, i, newValues}) => {
  const [numbers, setnumbers] = useState({});

  const [objects, setObjects] = useState({});
  const [objects2, setObjects2] = useState({});
  const [objects3, setObjects3] = useState({});
  const [objects4, setObjects4] = useState({});
  const [objects5, setObjects5] = useState({});
  const [objects6, setObjects6] = useState({});

  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible4, setIsVisible4] = useState(true);
  const [isVisible5, setIsVisible5] = useState(true);
  const [isVisible6, setIsVisible6] = useState(true);
  const [isSold, setIsSold] = useState(true);
  const [isSold2, setIsSold2] = useState(true);
  const [isSold4, setIsSold4] = useState(true);
  const [isSold5, setIsSold5] = useState(true);
  const [isSold6, setIsSold6] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const numbersRef = ref(db, "numbers");
    onValue(numbersRef, (snapshot) => {
      const data = snapshot.val();
      setnumbers(data);
    });
  }, []);
  useEffect(() => {
    const db = getDatabase();
    const objects3Ref = ref(db, "objects3");
    const unsubscribe = onValue(objects3Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects3(data);
      setIsVisible(data.isVisible);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const db = getDatabase();
    const objects2Ref = ref(db, "objects2");
    const unsubscribe = onValue(objects2Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects2(data);
      setIsVisible2(data.isVisible2);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const db = getDatabase();
    const objects4Ref = ref(db, "objects4");
    const unsubscribe = onValue(objects4Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects4(data);
      setIsVisible4(data.isVisible4);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const db = getDatabase();
    const objects5Ref = ref(db, "objects5");
    const unsubscribe = onValue(objects5Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects5(data);
      setIsVisible5(data.isVisible5);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const db = getDatabase();
    const objects6Ref = ref(db, "objects6");
    const unsubscribe = onValue(objects6Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects6(data);
      setIsVisible6(data.isVisible6);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const db = getDatabase();
    const objectsRef = ref(db, "objects");
    const objects2Ref = ref(db, "objects2");
    const objects3Ref = ref(db, "objects3");
    const objects4Ref = ref(db, "objects4");
    const objects5Ref = ref(db, "objects5");
    const objects6Ref = ref(db, "objects6");

    const fetchData = (snapshot, setState) => {
      const data = snapshot.val();
      setState(data);
    };

    onValue(objectsRef, (snapshot) => fetchData(snapshot, setObjects));
    onValue(objects2Ref, (snapshot) => fetchData(snapshot, setObjects2));
    onValue(objects3Ref, (snapshot) => fetchData(snapshot, setObjects3));
    onValue(objects4Ref, (snapshot) => fetchData(snapshot, setObjects4));
    onValue(objects5Ref, (snapshot) => fetchData(snapshot, setObjects5));
    onValue(objects6Ref, (snapshot) => fetchData(snapshot, setObjects6));
  }, []);
  useEffect(() => {
    const db = getDatabase();
    const objects3Ref = ref(db, "objects3");
    const unsubscribe = onValue(objects3Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects3(data);
      setIsSold(data.isSold);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const db = getDatabase();
    const objects2Ref = ref(db, "objects2");
    const unsubscribe = onValue(objects2Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects2(data);
      setIsSold2(data.isSold2);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const db = getDatabase();
    const objects4Ref = ref(db, "objects4");
    const unsubscribe = onValue(objects4Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects4(data);
      setIsSold4(data.isSold4);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const db = getDatabase();
    const objects5Ref = ref(db, "objects5");
    const unsubscribe = onValue(objects5Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects5(data);
      setIsSold5(data.isSold5);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const db = getDatabase();
    const objects6Ref = ref(db, "objects6");
    const unsubscribe = onValue(objects6Ref, (snapshot) => {
      const data = snapshot.val();
      setObjects6(data);
      setIsSold6(data.isSold6);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    document.title = 'Наши объекты';
  }, []);
  
const urlParams = new URLSearchParams(window.location.search);
let objectId = urlParams.get('id');

if (!objectId) {
  objectId = 'default'; 
}

 
return (
<>
<Header />
  <div className={s.objects} id="id-1">Объекты на продаже</div>
    <div className={s.objects_container}>
    <div className={s.cards_container}>    
            <ul className={s.firstObject}>
              <Link className={s.ids} to={`/page/id-1`}>
                <img className={s.object_img} src={objects[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
                <span className={s.more}>Подробнее</span>
                <p className="name-cards">{objects && objects.name1}</p>
                  <div className={s.containerObject}>
                    <hr style={{color:"black"}} />
                    <pre className={s.description}>{objects && objects.info1} </pre>
                  </div>
              </Link>
            </ul>
            <ul className={s.secondObject}>   
  <a className={s.ids} href={`/page/id-2`}>
    <div className={s.imageContainer}>
      <img
        className={s.object_img}
        src={objects2[`imageUrl1`]}
        width={"230px"}
        height={"190px"}
        alt="Object"
        style={{ borderRadius: "5px" }}
      />
      <img
        className={s.discount}
        src={isVisible2 ? discount : objects2[`imageUrl${i}`]}
        width={"230px"}
        height={"190px"}
        style={{
          borderRadius: "5px",
          display: isVisible2 ? "block" : "none",
        }}
        alt="Discount"
      />
      <img
        className={s.sold}
        src={isSold2 ? sold : objects2[`imageUrl${i}`]}
        width={"230px"}
        height={"190px"}
        style={{
          borderRadius: "5px",
          display: isSold2 ? "block" : "none",
        }}
        alt="Sold"
      />
      <span className={s.more}>Подробнее</span>
      <p className="name-cards">{objects2 && objects2.name1}</p>
      <div className={s.containerObject}>
        <hr style={{ color: "black" }} />
        <pre className={s.description}>{objects2 && objects2.info1}</pre>
      </div>
    </div>
  </a>
</ul>

            <ul className={s.firstObject}>
          <Link className={s.ids} to={`/page/id-3`}>
          <img className={s.object_img} src={objects3[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
          <img
    className={s.discount}
    src={isVisible ? discount : objects3[`imageUrl${i}`]}
    width={"230px"}
    height={"190px"}
    style={{
      borderRadius: "5px",
      display: isVisible ? "block" : "none",
    }}
  />

<img
    className={s.sold}
    src={isSold ? sold : objects3[`imageUrl${i}`]}
    width={"230px"}
    height={"190px"}
    style={{
      borderRadius: "5px",
      display: isSold ? "block" : "none",
    }}
  />
            <span className={s.more}>Подробнее</span>
            <p className="name-cards">{objects3 && objects3.name1}</p>
            <div className={s.containerObject}>
              <hr style={{ color: "black" }} />
              <pre className={s.description}>{objects3 && objects3.info1}</pre>
            </div>
          </Link>
            </ul>
            <ul className={s.secondObject}>
              <a className={s.ids} href={`/page/id-4`}>
                <img className={s.object_img} src={objects4[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
                <img
    className={s.discount}
    src={isVisible4 ? discount : objects4[`imageUrl${i}`]}
    width={"230px"}
    height={"190px"}
    style={{
      borderRadius: "5px",
      display: isVisible4 ? "block" : "none",
    }}
  />
  <img
    className={s.sold}
    src={isSold4 ? sold : objects4[`imageUrl${i}`]}
    width={"230px"}
    height={"190px"}
    style={{
      borderRadius: "5px",
      display: isSold4 ? "block" : "none",
    }}
  />
                  <span className={s.more}>Подробнее</span>
                  <p className="name-cards">{objects4 && objects4.name1}</p>
                  <div className={s.containerObject}>
                  <hr style={{color:"black"}} />
                    <pre className={s.description}>{objects4 && objects4.info1}</pre>
                  </div>
              </a>
            </ul>
    </div>
    <div className={s.cards_container_second}>
            <ul className={s.firstObject}>
              <a className={s.ids_second} href={`/page/id-5`}>
                <img className={s.object_img} src={objects5[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
                <img
    className={s.discount}
    src={isVisible5 ? discount : objects5[`imageUrl${i}`]}
    width={"230px"}
    height={"190px"}
    style={{
      borderRadius: "5px",
      display: isVisible5 ? "block" : "none",
    }}
  />
  <img
    className={s.sold}
    src={isSold5 ? sold : objects5[`imageUrl${i}`]}
    width={"230px"}
    height={"190px"}
    style={{
      borderRadius: "5px",
      display: isSold5 ? "block" : "none",
    }}
  />
                  <span className={s.more_second}>Подробнее</span>
                  <p className="name-cards">{objects5 && objects5.name1}</p>
                  <div className={s.containerObject}>
                  <hr style={{color:"black"}} />
                    <pre className={s.description}>{objects5 && objects5.info1}</pre>
                  </div>
              </a>
            </ul>
            <ul className={s.secondObject}> 
              <a className={s.ids_second} href={`/page/id-6`}>
                <img className={s.object_img} src={objects6[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
                <img
    className={s.discount}
    src={isVisible6 ? discount : objects6[`imageUrl${i}`]}
    width={"230px"}
    height={"190px"}
    style={{
      borderRadius: "5px",
      display: isVisible6 ? "block" : "none",
    }}
  />
  <img
    className={s.sold}
    src={isSold6 ? sold : objects6[`imageUrl${i}`]}
    width={"230px"}
    height={"190px"}
    style={{
      borderRadius: "5px",
      display: isSold6 ? "block" : "none",
    }}
  />
                  <span className={s.more_second}>Подробнее</span>
                  <p className="name-cards">{objects6 && objects6.name1}</p>
                  <div className={s.containerObject}>
                  <hr style={{color:"black"}} />
                    <pre className={s.description}>{objects6 && objects6.info1}</pre>
                  </div>
              </a>
            </ul>
            <ul className={s.firstObject}>
              <a className={s.ids_second} href={`/page/id-7`}>
                <img className={s.object_img} src={world} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
                  <span className={s.more_second}>Подробнее</span>
                  <p className="name-cards">Мурманское шоссе, 72км</p>
                  <div className={s.containerObject}>
                  <hr style={{color:"black"}} />
                    <span className={s.description}>Земля с/х назначения. АРЕНДА</span>
                  </div>
              </a>
            </ul>
            <ul className={s.secondObject}>
              <a className={s.ids_second} href={`/page/id-8`}>
                <img className={s.object_img} src={world2} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
                  <span className={s.more_second}>Подробнее</span>
                  <p className="name-cards">Мурманское шоссе, 72км</p>
                  <div className={s.containerObject}>
                  <hr style={{color:"black"}} />
                    <span className={s.description}>Производство, склады. АРЕНДА</span>
                  </div>
              </a>
            </ul>
    </div>
    </div>
  <hr style={{width: "60%", marginTop: "10px"}} />
    <div className={s.footer_container}>
        <div className={s.numbers}>
          <div className={s.numbers_container}>
            <div className={s.the_number}><img src={ws} width={"40px"} alt="" /></div>
            <div className={s.the_number}><img src={vb} width={"40px"} alt="" /></div>
            <div className={s.the_number}>Отдел продаж:
              <span style={{fontWeight: "600", margin: "0 0 0 10px"}}>{numbers && numbers.name2}</span></div>
            <div className={s.the_number}>Отдел aренды:
              <span style={{fontWeight: "600", margin: "0 0 0 10px"}}>{numbers && numbers.name1}</span>
            </div>
          </div>
        </div>
        <div className={s.numbers}>
          <div className={s.the_address}>Главный офис <br />
          г. Санкт- Петербург, пр. Энгельса 109 </div>
        </div>
        <div className={s.numbers}>
          <div className={s.the_year}>КОМНЕД <br />
          © 2023
          </div>
        </div>
    </div>
</>

  )
}

export default Object
