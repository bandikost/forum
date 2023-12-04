import React, {useState, useEffect} from "react";
import Header from '../Main/Header'
import Banner from "../image/header/main.jpg"
import s from "./modules/General.module.css" 
import { getDatabase, ref, onValue } from 'firebase/database';
import world from "../image/main/2.jpg"
import world2 from "../image/main/3.jpg"
import { Link } from "react-router-dom";
import sold from "../image/main/sold.png"
import discount from "../image/main/discount.jpg"

export const General = ({ id, showImage, i, newValues}) => {

//Импорт серий из базы данных
  const [objects, setObjects] = useState({});
  const [objects2, setObjects2] = useState({});
  const [objects3, setObjects3] = useState({});
  const [objects4, setObjects4] = useState({});
  const [objects5, setObjects5] = useState({});
  const [objects6, setObjects6] = useState({});

  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [isVisible4, setIsVisible4] = useState(true);
  const [isVisible5, setIsVisible5] = useState(true);
  const [isVisible6, setIsVisible6] = useState(true);
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
    const objectsRef = ref(db, "objects");
    const unsubscribe = onValue(objectsRef, (snapshot) => {
      const data = snapshot.val();
      setObjects(data);
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
  document.title = 'Главная';
}, []);
  

const urlParams = new URLSearchParams(window.location.search);
let objectId = urlParams.get('id');

if (!objectId) {
  objectId = 'default'; // Set a default value if objectId is empty
}

 
  return (
    <div className={s.s}>
        <Header />
        <div className={s.container}>    
          <img src={Banner} alt="" className={s.Banner}  height={"330px"} width={"100%"} /> 
        </div>
        <div className={s.objects} id="id-1">Наши объекты</div>
        <div className={s.objects_container}>
        <div className={s.cards_container}>    
        <ul>
            <Link className={s.ids} to={`/page/id-1`}>
              <img className={s.object_img} src={objects[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <p className={s.opacity}>{objects && objects.name1}</p>
              <img className={s.soldimg} style={{border: "none"}} src={sold} alt=""/>
              <span className={s.more}>Подробнее</span>
              <p className="name-cards">{objects && objects.name1}</p>
                <div className={s.containerObject}>
                  <hr style={{color:"black"}} />
                  <pre className={s.description}>{objects && objects.info1} </pre>
                </div>
            </Link>
          </ul>
          <ul>
            
            <a className={s.ids} href={`/page/id-2`}>
              <img className={s.object_img} src={objects2[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <p className={s.opacity}>{objects2 && objects2.name1}</p>
                <span className={s.more}>Подробнее</span>
                <p className="name-cards">{objects2 && objects2.name1}</p>
                <div className={s.containerObject}>
                <hr style={{color:"black"}} />
                  <pre className={s.description}>{objects2 && objects2.info1}</pre>
                </div>
            </a>
          </ul>
          <ul>
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

          <p className={s.opacity}>{objects3 && objects3.name1}</p>
          <span className={s.more}>Подробнее</span>
          <p className="name-cards">{objects3 && objects3.name1}</p>
          <div className={s.containerObject}>
            <hr style={{ color: "black" }} />
            <pre className={s.description}>{objects3 && objects3.info1}</pre>
          </div>
        </Link>
      </ul>


          <ul>
            <a className={s.ids} href={`/page/id-4`}>
              <img className={s.object_img} src={objects4[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <p className={s.opacity}>{objects4 && objects4.name1}</p>
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
        <ul>
            <a className={s.ids_second} href={`/page/id-5`}>
              <img className={s.object_img} src={objects5[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <p className={s.opacity}>{objects5 && objects5.name1}</p>
                <span className={s.more_second}>Подробнее</span>
                <p className="name-cards">{objects5 && objects5.name1}</p>
                <div className={s.containerObject}>
                <hr style={{color:"black"}} />
                  <pre className={s.description}>{objects5 && objects5.info1}</pre>
                </div>
            </a>
          </ul>
          <ul>
            <a className={s.ids_second} href={`/page/id-6`}>
              <img className={s.object_img} src={objects6[`imageUrl1`]} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <p className={s.opacity}>{objects6 && objects6.name1}</p>
                <span className={s.more_second}>Подробнее</span>
                <p className="name-cards">{objects6 && objects6.name1}</p>
                <div className={s.containerObject}>
                <hr style={{color:"black"}} />
                  <pre className={s.description}>{objects6 && objects6.info1}</pre>
                </div>
            </a>
          </ul>
          <ul>
            <a className={s.ids_second} href={`/page/id-8`}>
              <img className={s.object_img} src={world} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <p className={s.opacity}>Мурманское шоссе, 72км</p>
                <span className={s.more_second}>Подробнее</span>
                <p className="name-cards">Мурманское шоссе, 72км</p>
                <div className={s.containerObject}>
                <hr style={{color:"black"}} />
                  <span className={s.description}>Земля с/х назначения. АРЕНДА</span>
                </div>
            </a>
          </ul>
          <ul>
            <a className={s.ids_second} href={`/page/id-7`}>
              <img className={s.object_img} src={world2} width={"230px"} height={"190px"} style={{ borderRadius: "5px"}} />
              <p className={s.opacity}>Мурманское шоссе, 72км</p>
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
    </div>
  )
}

export default General
