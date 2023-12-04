import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, update, set } from 'firebase/database';
import { useHistory, useNavigate } from 'react-router-dom';
import firebase from "../../../firebase";
import 'firebase/compat/storage';
import  s from "../modules/Manager.module.css"
import discount from "../../../image/main/discount.jpg"
import sold from "../../../image/main/sold.png"


export const convertIdentifiersToTags = (text) => {
  if (!text) return text;
  return text.replace(/#TAG/g, '[TAG]');
};

export const GeneralEdit2 = () => {
  const [objects2, setobjects2] = useState({});


  const [isSold2, setisSold2] = useState(false);
  const [newValues, setNewValues] = useState({
    isVisible2: objects2.isVisible2 || false,
    isSold2: objects2.isSold2 || false,
  });

  useEffect(() => {
    const db = getDatabase();
    const objects2Ref = ref(db, "objects2");
    onValue(objects2Ref, (snapshot) => {
      const data = snapshot.val();
      setobjects2(data);
      setNewValues((prevValues) => ({
        ...prevValues,
        isVisible2: data.isVisible2 || false,
      }));
    });
  }, []); 


  useEffect(() => {
    const db = getDatabase();
    const objects2Ref = ref(db, "objects2");
    onValue(objects2Ref, (snapshot) => {
      const data = snapshot.val();
      setobjects2(data);
      setNewValues((prevValues) => ({
        ...prevValues,
        isSold2: data.isSold2 || false,
      }));
    });
  }, []); 


  const handleSoldCheckboxChange = () => {
    const db = getDatabase();
    const objects2Ref = ref(db, "objects2"); // Assuming 'objects3' is the correct reference in your database
    set(objects2Ref, { ...objects2, isSold2: !newValues.isSold2 }); // Update the 'isVisible' property
  };

  const handleImageCheckboxChange = () => {
    const db = getDatabase();
    const objects2Ref = ref(db, "objects2");
    set(objects2Ref, { ...objects2, isVisible2: !newValues.isVisible2 });
  };

  const history = useNavigate();
  useEffect(() => {
    const db = getDatabase();
    const objects2Ref = ref(db, "objects2");
    onValue(objects2Ref, (snapshot) => {
      const data = snapshot.val();
      setobjects2(data);
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
    const objects2Ref = ref(db, "objects2");
    const updates = {};
    Object.keys(newValues).forEach((key) => {
      if (newValues[key] !== "") {
        updates[key] = newValues[key];
      }
    });
    update(objects2Ref, updates);
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
    if (objects2.name1) {
      document.title = objects2.name1 + " Редактор";
    }
  }, [objects2.name1]);

  return (
    <>
     
      <div style={{ backgroundColor: "#c4d3f6", paddingBottom: "60px" }}>
          <form className={s.form} onSubmit={handleFormSubmit}
          style={{position: "relative", top: "60px", margin: "0 auto 0"}}>
            {[1].map((i) => (
              <div key={i}  className="table-objects2" style={{display: "flex",
                flexDirection:" column",
                justifyContent: "center",
                alignItems: "center"}}>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ marginLeft: "20px", display: "flex", justifyContent: "space-between", width: "390px", alignItems: "center" }}>Объект № {i}:<p >{objects2?.[`name${i}`]}</p></div>
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
                  <div style={{ margin: "0px 20px 40px 20px" }}>Описание объекта <p style={{position: "absolute", marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects2?.[`info${i}`]}</p></div>
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
                  >{objects2?.[`info${i}`]}</textarea>

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
                >
                {objects2 && convertIdentifiersToTags(objects2?.[`character${i}`])}
                </textarea>
                </label>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ margin: "0px 20px" }}>Акция до: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects2?.[`date${i}`]}</p></div>
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
                  <div style={{ margin: "0px 20px" }}>Прошлая цена: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects2?.[`lastprice${i}`]}</p></div>
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
                  <div style={{ margin: "0px 20px" }}>Процент скидки: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects2?.[`procent${i}`]}</p></div>
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
                  <div style={{ margin: "0px 20px" }}>Новая цена: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects2?.[`newprice${i}`]}</p></div>
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
                  <div style={{ margin: "0px 20px" }}>Акция кончается: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects2?.[`dateend${i}`]}</p></div>
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
                <label style={{marginTop: "10px"}} htmlFor={`file${i}`}>
                  <div className="image-container">
                    <input
                      id={`file${i}`}
                      type="file"
                      onChange
={(e) => handleImageUpload(e, i)} 
                    />
                    <div className="image-now" >
                    Текущее изображение для объекта, в слайдере оно будет отображаться: <div style={{fontWeight: "500", fontSize: "20px", marginLeft: "10px"}}>  {i}</div>
                    </div>{" "} 
                    {objects2 && objects2[`imageUrl${i}`] && (
                      <div style={{display: "contents", margin: "0 auto 0"}}>
                        <img className="actual-photo" src={objects2[`imageUrl${i}`]} alt="property" /></div>
                    )}
                  </div>
                </label>
                <label htmlFor={`file2`}>
          <div className="image-container">
            <input id={`file2`} type="file" onChange={(e) => handleImageUpload(e, 2)} />
            <div className="image-now">
            Текущее изображение для объекта, в слайдере оно будет отображаться:{" "}
              <div style={{ fontWeight: "500", fontSize: "20px", marginLeft: "10px" }}> 2</div>
            </div>{" "}
            {objects2 && objects2[`imageUrl2`] && (
              <div style={{ display: "contents", margin: "0 auto 0" }}>
                <img className="actual-photo" src={objects2[`imageUrl2`]} alt="property" />
              </div>
            )}
          </div>
                </label>
                <label htmlFor={`file3`}>
          <div className="image-container">
            <input id={`file3`} type="file" onChange={(e) => handleImageUpload(e, 3)} />
            <div className="image-now">
            Текущее изображение для объекта, в слайдере оно будет отображаться:{" "}
              <div style={{ fontWeight: "500", fontSize: "20px", marginLeft: "10px" }}> 3</div>
            </div>{" "}
            {objects2 && objects2[`imageUrl3`] && (
              <div style={{ display: "contents", margin: "0 auto 0" }}>
                <img className="actual-photo" src={objects2[`imageUrl3`]} alt="property" />
              </div>
            )}
          </div>
                </label>
                <label style={{marginTop: "-30px"}}>
                <input
  type="checkbox"
  checked={newValues.isVisible2}
  onChange={handleImageCheckboxChange}
/>
        {" "}
        Действует сейчас акция?
        
                </label>
                <img style={{position: "relative", top: "30px"}} className={s.discount} src={discount}/>
                <label style={{marginTop: "100px"}}>
                  <input
                  type="checkbox"
                  checked={newValues.isSold2}
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

export default GeneralEdit2;
