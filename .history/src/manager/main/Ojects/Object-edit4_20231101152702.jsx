import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, update, set } from 'firebase/database';
import { useHistory, useNavigate } from 'react-router-dom';
import firebase from "../../../firebase";
import 'firebase/compat/storage';
import  s from "../modules/Manager.module.css"
import sold from "../../../image/main/sold.png"
import discount from "../../../image/main/discount.jpg"


export const convertIdentifiersToTags = (text) => {
  if (!text) return text;
  return text.replace(/#TAG/g, '[TAG]');
};

export const GeneralEdit4 = () => {
  const [objects4, setobjects4] = useState({});


  const [isSold4, setisSold4] = useState(false);
  const [newValues, setNewValues] = useState({
    isVisible4: objects4.isVisible4 || false,
    isSold4: objects4.isSold4 || false,
  });

  useEffect(() => {
    const db = getDatabase();
    const objects4Ref = ref(db, "objects4");
    onValue(objects4Ref, (snapshot) => {
      const data = snapshot.val();
      setobjects4(data);
      setNewValues((prevValues) => ({
        ...prevValues,
        isVisible4: data.isVisible4 || false,
      }));
    });
  }, []); 


  useEffect(() => {
    const db = getDatabase();
    const objects4Ref = ref(db, "objects4");
    onValue(objects4Ref, (snapshot) => {
      const data = snapshot.val();
      setobjects4(data);
      setNewValues((prevValues) => ({
        ...prevValues,
        isSold4: data.isSold4 || false,
      }));
    });
  }, []); 


  const handleSoldCheckboxChange = () => {
    const db = getDatabase();
    const objects4Ref = ref(db, "objects4"); // Assuming 'objects3' is the correct reference in your database
    set(objects4Ref, { ...objects4, isSold4: !newValues.isSold4 }); // Update the 'isVisible' property
  };

  const handleImageCheckboxChange = () => {
    const db = getDatabase();
    const objects4Ref = ref(db, "objects4");
    set(objects4Ref, { ...objects4, isVisible4: !newValues.isVisible4 });
  };

  const history = useNavigate();
  useEffect(() => {
    const db = getDatabase();
    const objects4Ref = ref(db, "objects4");
    onValue(objects4Ref, (snapshot) => {
      const data = snapshot.val();
      setobjects4(data);
    });
  }, []);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn !== 'true') {
      history.push('/login'); 
    }
  }, [history]);  
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const db = getDatabase();
    const objects4Ref = ref(db, "objects4");
    const updates = {};
    Object.keys(newValues).forEach((key) => {
      if (newValues[key] !== "") {
        updates[key] = newValues[key];
      }
    });
    update(objects4Ref, updates);
  };

  const [imageUrls, setImageUrls] = useState({
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
  });

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: "smooth"
    });
  };

  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`images/${file.name}`);
    imageRef.put(file).then(() => {
      console.log("Изображение успешно загружено!");
      imageRef.getDownloadURL().then((url) => {
        setNewValues(prevState => {
          const updatedValues = { ...prevState };
          updatedValues[`imageUrl${index}`] = url;
          return updatedValues;
        });
      });
    });
  };



  useEffect(() => {
    if (objects4.name1) {
    document.title = objects4.name1 + " - Редактор";
    }
  }, [objects4.name1]);

  return (
    <>
     
      <div style={{ backgroundColor: "#c4d3f6", paddingBottom: "60px" }}>
          <form className={s.form} onSubmit={handleFormSubmit}
          style={{position: "relative", top: "60px", margin: "0 auto 0"}}>
            {[1].map((i) => (
              <div key={i}  className="table-objects4" style={{display: "flex",
                flexDirection:" column",
                justifyContent: "center",
                alignItems: "center"}}>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ marginLeft: "20px", display: "flex", justifyContent: "space-between", width: "390px", alignItems: "center" }}>Объект № {i}:<p >{objects4?.[`name${i}`]}</p></div>
                  <textarea
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    type="text"
                    value={newValues[`name${i}`] || ""}
                    onChange={(e) =>
                      setNewValues((prevValues) => ({
                        ...prevValues,
                        [`name${i}`]: e.target.value,
                      }))
                    }
                />
                  
                </label>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ margin: "0px 20px 40px 20px" }}>Описание объекта <p style={{position: "absolute", marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects4?.[`info${i}`]}</p></div>
                  <textarea
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    value={newValues[`info${i}`] || ""}
                    onChange={(e) =>
                      setNewValues((prevValues) => ({
                        ...prevValues,
                        [`info${i}`]: e.target.value,
                      }))
                    }
                  >{objects4?.[`info${i}`]}</textarea>

                </label>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ margin: "0px 20px" }}>Продажа</div>
                  <textarea
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    value={newValues[`sale${i}`] || ""}
                    onChange={(e) =>
                      setNewValues((prevValues) => ({
                        ...prevValues,
                        [`sale${i}`]: e.target.value,
                      }))
                    }
                  />
                </label>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ margin: "0px 20px" }}>Характеристика</div>
                  <textarea
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    value={newValues[`character${i}`] || ""}
                    onChange={(e) =>
                      setNewValues((prevValues) => ({
                        ...prevValues,
                        [`character${i}`]: e.target.value,
                      }))
                    }
                  />
                </label>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ margin: "0px 20px" }}>Минимальная информация</div>
                  <textarea
                  className="input-edit"
                  style={{ margin: "20px 10px" }}
                  value={newValues[`minimal${i}`] || ""}
                  onChange={(e) =>
                    setNewValues((prevValues) => ({
                      ...prevValues,
                      [`minimal${i}`]: e.target.value,
                    }))
                  }
                >
                {objects4 && convertIdentifiersToTags(objects4?.[`minimal${i}`])}
                </textarea>
                </label>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ margin: "0px 20px" }}>Акция до: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects4?.[`date${i}`]}</p></div>
                  <textarea
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    value={newValues[`date${i}`] || ""}
                    onChange={(e) =>
                      setNewValues((prevValues) => ({
                        ...prevValues,
                        [`date${i}`]: e.target.value,
                      }))
                    }
                  />
                </label>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ margin: "0px 20px" }}>Прошлая цена: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects4?.[`lastprice${i}`]}</p></div>
                  <textarea
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    value={newValues[`lastprice${i}`] || ""}
                    onChange={(e) =>
                      setNewValues((prevValues) => ({
                        ...prevValues,
                        [`lastprice${i}`]: e.target.value,
                      }))
                    }
                  />
                </label>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ margin: "0px 20px" }}>Процент скидки: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects4?.[`procent${i}`]}</p></div>
                  <textarea
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    value={newValues[`procent${i}`] || ""}
                    onChange={(e) =>
                      setNewValues((prevValues) => ({
                        ...prevValues,
                        [`procent${i}`]: e.target.value,
                      }))
                    }
                  />
                </label>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ margin: "0px 20px" }}>Новая цена: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects4?.[`newprice${i}`]}</p></div>
                  <textarea
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    value={newValues[`newprice${i}`] || ""}
                    onChange={(e) =>
                      setNewValues((prevValues) => ({
                        ...prevValues,
                        [`newprice${i}`]: e.target.value,
                      }))
                    }
                  />
                </label>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ margin: "0px 20px" }}>Акция кончается: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects4?.[`dateend${i}`]}</p></div>
                  <textarea
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    value={newValues[`dateend${i}`] || ""}
                    onChange={(e) =>
                      setNewValues((prevValues) => ({
                        ...prevValues,
                        [`dateend${i}`]: e.target.value,
                      }))
                    }
                  />
                </label>
                <label htmlFor={`file${i}`}>
                  <div className="image-container">
                    <input
                      id={`file${i}`}
                      type="file"
                      onChange
={(e) => handleImageUpload(e, i)} 
                    />
                    <div className="image-now" >
                    Текущее изображение для объекта, в слайдере оно будет отображаться: <div style={{fontWeight: "500", fontSize: "20px", marginLeft: "10px"}}> {i}</div>
                    </div>{" "} 
                    {objects4 && objects4[`imageUrl${i}`] && (
                      <div style={{display: "contents",
                        margin: "0 auto 0"}}><img width={150} src={objects4[`imageUrl${i}`]} alt="property" /></div>
                    )}
                    
                  </div>
                </label>
                <label style={{position: "relative", top: "10px"}}>
                  <input
                  type="checkbox"
                  checked={newValues.isVisible4}
                  onChange={handleImageCheckboxChange}
                />
                        {" "}
                        Действует сейчас акция?
                        
                </label>
                <img style={{position: "relative", top: "230px"}} className={s.discount} src={discount}/>
                <label style={{marginTop: "300px"}}>
                  <input
                  type="checkbox"
                  checked={newValues.isSold4}
                  onChange={handleSoldCheckboxChange}/>
                  {" "} Продан объект?  
                </label>
                <img style={{position: "relative", top: "30px"}} className={s.discount} src={sold}/>
              </div>
            ))}
             <button type="submit" style={{ margin: "0px  auto 0px", cursor: "pointer", padding: "20px", display: "flex", borderRadius: "10px", position: "relative", top: "70px" }}>Сохранить</button>
          </form>
        </div>
    
    </>
  );
};

export default GeneralEdit4;
