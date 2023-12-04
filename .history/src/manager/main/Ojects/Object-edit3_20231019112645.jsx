import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { useHistory, useNavigate } from 'react-router-dom';
import firebase from "../../../firebase";
import 'firebase/compat/storage';
import  s from "../modules/Manager.module.css"
import discount from "../../../image/main/discount.jpg"

export const GeneralEdit3 = () => {
  const [objects3, setobjects3] = useState({});
  const [showImage, setShowImage] = useState(false);


  const handleImageCheckboxChange = () => {
    const db = getDatabase();
    const objects3Ref = ref(db, "objects3");
  
    // Toggle the visibility state and update it in the database
    const updatedVisibility = !newValues.isVisible;
    update(objects3Ref, { isVisible: updatedVisibility });
  
    // Update the local state with the new visibility state
    setNewValues(prevState => ({
      ...prevState,
      isVisible: updatedVisibility
    }));
  };
  
  
  const [newValues, setNewValues] = useState({
    isVisible: 0, // Set the initial state of isVisible to true or false based on your requirements
  });
  
  useEffect(() => {
    // Load initial isVisible state from local storage
    const storedIsVisible = localStorage.getItem('isVisible');
    if (storedIsVisible) {
      setNewValues(prevState => ({
        ...prevState,
        isVisible: JSON.parse(storedIsVisible)
      }));
    }
    // ... rest of your code ...
  }, []);
  

  const history = useNavigate();
  useEffect(() => {
    const db = getDatabase();
    const objects3Ref = ref(db, "objects3");
    onValue(objects3Ref, (snapshot) => {
      const data = snapshot.val();
      setobjects3(data);
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
    const objects3Ref = ref(db, "objects3");
    const updates = {};
    Object.keys(newValues).forEach((key) => {
      if (newValues[key] !== "") {
        updates[key] = newValues[key];
      }
    });
    update(objects3Ref, updates);
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
              <div key={i}  className="table-objects3" style={{display: "flex",
                flexDirection:" column",
                justifyContent: "center",
                alignItems: "center"}}>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ marginLeft: "20px", display: "flex", justifyContent: "space-between", width: "390px", alignItems: "center" }}>Объект № {i}:<p >{objects3?.[`name${i}`]}</p></div>
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
                  <div style={{ margin: "0px 20px 40px 20px" }}>Описание объекта <p style={{position: "absolute", marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects3?.[`info${i}`]}</p></div>
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
                  >{objects3?.[`info${i}`]}</textarea>

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
                  <div style={{ margin: "0px 20px" }}>Акция до: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects3?.[`date${i}`]}</p></div>
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
                  <div style={{ margin: "0px 20px" }}>Прошлая цена: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects3?.[`lastprice${i}`]}</p></div>
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
                  <div style={{ margin: "0px 20px" }}>Процент скидки: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects3?.[`procent${i}`]}</p></div>
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
                  <div style={{ margin: "0px 20px" }}>Новая цена: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects3?.[`newprice${i}`]}</p></div>
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
                  <div style={{ margin: "0px 20px" }}>Акция кончается: <p style={{ marginTop: "-2px", fontSize: "15px", opacity: " 0.7"}}>{objects3?.[`dateend${i}`]}</p></div>
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
                <div className="image-now" >
                      Текущее изображение для объекта, в слайдере оно будет отображаться: <div style={{fontWeight: "500", fontSize: "20px", marginLeft: "10px"}}> {i}</div>
                    </div>{" "} 
                  <div className="image-container">
                    {objects3 && objects3[`imageUrl${i}`] && (
                      <div style={{display: "contents",
                        margin: "0 auto 0"}}><img style={{position: "relative", top: "-10px"}} width={300} src={objects3[`imageUrl${i}`]} alt="property" /></div>
                    )}
                    
                  </div>
                  <input style={{margin: "0 auto 0", display: "flex", }}
                      id={`file${i}`}
                      type="file"
                      onChange
={(e) => handleImageUpload(e, i)} 
                    />
                </label>
                <label style={{marginTop: "40px"}}>
        <input
          type="checkbox"
          checked={newValues.isVisible}
          onChange={handleImageCheckboxChange}
        />
        {" "}
        Действует сейчас акция?
        
      </label>
      <img style={{position: "relative", top: "30px"}} className={s.discount} src={discount}/>

              </div>
            ))}
            <button type="submit" style={{ margin: "0px  auto 0px", cursor: "pointer", padding: "20px", display: "flex", position:"relative", top: "100px", borderRadius: "10px" }}>Сохранить</button>
          </form>
        </div>
    
    </>
  );
};

export default GeneralEdit3;
