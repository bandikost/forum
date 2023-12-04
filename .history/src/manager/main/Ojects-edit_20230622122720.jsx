import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { storage } from "../../firebase";

export const GeneralEdit = () => {
  const [newValues, setNewValues] = useState({});
  const [objects, setObjects] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const objectsRef = ref(db, "objects");
    onValue(objectsRef, (snapshot) => {
      const data = snapshot.val();
      setObjects(data);
    });
  }, []);

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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i}  className="table-objects">
                <label style={{ margin: "0px 50px" }}>
                  <div style={{ marginLeft: "20px", display: "flex" }}>Объект №{i}:<p style={{margin: "0 50px"}}>{objects?.[`name${i}`]}</p></div>
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
