import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { useHistory, useNavigate } from 'react-router-dom';
import firebase from "../../../firebase";
import 'firebase/compat/storage';
import  s from "../modules/Manager.module.css"

export const GeneralEdit1 = () => {
  const [newValues, setNewValues] = useState({});
  const [objects, setObjects] = useState({});
  const history = useNavigate();
  useEffect(() => {
    const db = getDatabase();
    const objectsRef = ref(db, "objects");
    onValue(objectsRef, (snapshot) => {
      const data = snapshot.val();
      setObjects(data);
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
    const objectsRef = ref(db, "objects");
    const updates = {};
    Object.keys(newValues).forEach((key) => {
      if (newValues[key] !== "") {
        updates[key] = newValues[key];
      }
    });
    update(objectsRef, updates);
  };

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

  return (
    <>
     
      <div style={{ backgroundColor: "#c4d3f6", paddingBottom: "60px" }}>
          <form className={s.form} onSubmit={handleFormSubmit}
          style={{position: "relative", top: "60px", margin: "0 auto 0"}}>
            {[1].map((i) => (
              <div key={i}  className="table-objects" style={{display: "flex",
                flexDirection:" column",
                justifyContent: "center",
                alignItems: "center"}}>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ marginLeft: "20px", display: "flex", justifyContent: "space-between", width: "390px", alignItems: "center" }}>Объект № {i}:<p >{objects?.[`name${i}`]}</p></div>
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
                  <div style={{ margin: "0px 20px 40px 20px" }}>Описание объекта <p style={{position: "absolute", marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects?.[`info${i}`]}</p></div>
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
                  >{objects?.[`info${i}`]}</textarea>

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
                  <div style={{ margin: "0px 20px" }}>Акция до: <p style={{position: "absolute", marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects?.[`info${i}`]}</p></div>
                  <textarea
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    value={newValues[`price${i}`] || ""}
                    onChange={(e) =>
                      setNewValues((prevValues) => ({
                        ...prevValues,
                        [`price${i}`]: e.target.value,
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
                      Текущее изображение для объекта карточки: <div style={{fontWeight: "500", fontSize: "20px", marginLeft: "10px"}}> № {i}</div>
                    </div>{" "} 
                    {objects && objects[`imageUrl${i}`] && (
                      <div style={{display: "contents",
                        margin: "0 auto 0"}}><img src={objects[`imageUrl${i}`]} alt="property" /></div>
                    )}
                  </div>
                </label>
              </div>
            ))}
            <button type="submit" style={{ margin: "0px  auto 0px", cursor: "pointer", padding: "10px", display: "flex" }}>Сохранить</button>
          </form>
        </div>
    
    </>
  );
};

export default GeneralEdit1;
