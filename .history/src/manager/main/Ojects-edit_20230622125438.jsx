import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { storage } from "../../firebase";
import { useHistory, useNavigate } from 'react-router-dom';


export const GeneralEdit = () => {
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

  return (
    <>
      <div style={{ backgroundColor: "#c4d3f6" }}>
        <div className="container">
          <form
            style={{
              marginTop: "60px",
              borderRadius: "14px",
              backgroundColor: "white",
              padding: "50px 0px",
            }}
            onSubmit={handleFormSubmit}
          >
            {[1].map((i) => (
              <div key={i}  className="table-objects">
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ marginLeft: "20px", display: "flex", justifyContent: "space-between", width: "390px", alignItems: "center" }}>Объект № {i}:<p >{objects?.[`name${i}`]}</p></div>
                  <input
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    type="text"
                    value={newValues[`name${i}`] || objects?.[`name${i}`] || ""}
                    onChange={(e) =>
                      setNewValues({
                        ...newValues,
                        [`name${i}`]: e.target.value,
                      })
                    }
                  />
                  
                </label>
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ margin: "0px 50px" }}>Описание объекта</div>
                  <input
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    type="text"
                    value={newValues[`info${i}`] || objects?.[`info${i}`] || ""}
                    onChange={(e) =>
                      setNewValues({
                        ...newValues,
                        [`info${i}`]: e.target.value,
                      })
                    }
                  />
                  
                </label>
              </div>
            ))}
            <button
              type="submit"
              style={{
                margin: "50px 60px",
                cursor: "pointer",
                padding: "10px",
              }}
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GeneralEdit;
