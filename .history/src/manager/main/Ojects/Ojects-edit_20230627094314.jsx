import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { storage } from "../../../firebase";
import { useHistory, useNavigate } from 'react-router-dom';
import firebase from "../../../firebase";
import 'firebase/compat/storage';
import  s from "../modules/Manager.module.css"
import Header from "../../../Main/Header";

export const GeneralEdit1 = () => {
  const [newValues, setNewValues] = useState({});
  const [isContentVisible, setContentVisible] = useState(true);
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
      history.push('/login'); // Replace '/login' with the actual login page URL
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
  <div key={i} className="table-objects">
    <label>
      {/* Rest of the code */}
    </label>
    {isContentVisible && (
      <button
        type="button"
        onClick={() => setContentVisible(false)}
      >
        Hide Content
      </button>
    )}
  </div>
))}

            <button
              type="submit"
              style={{
                margin: "0px  auto 0px",
                cursor: "pointer",
                padding: "10px",
                display: "flex"
              }}
            >
              Сохранить
            </button>
          </form>
        </div>
    
    </>
  );
};

export default GeneralEdit1;
