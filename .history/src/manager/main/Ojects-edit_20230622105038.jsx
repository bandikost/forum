
import HeaderEdit from '../Header-edit'
import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import "firebase/storage";
import 'firebase/compat/storage';


export const GeneralEdit = () => {

    const [objects, setobjects] = useState(null);
    const [newValues, setNewValues] = useState({});
  
    useEffect(() => {
      const objectsRef = firebase.database().ref("objects");
      objectsRef.on("value", (snapshot) => {
        const data = snapshot.val();
        setobjects(data);
      });
    }, []);
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      const objectsRef = firebase.database().ref("objects");
      const updates = {};
      Object.keys(newValues).forEach((key) => {
        if (newValues[key] !== "") {
          updates[key] = newValues[key];
        }
      });
      objectsRef.update(updates);
    };
  
    const handleClick = () => {
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: "smooth"
      });
    };
  

    useEffect(() => {
      document.title = t('objects Russian Edit');
    }, []);


    return ( 
        <>
        
    <div style={{ backgroundColor: "#c4d3f6"}}>
    <HeaderEdit />
    <div className="container">
      <form
                style={{
                  marginTop: "60px",
                  borderRadius: " 14px",
                  backgroundColor: "white",
                  padding: "50px 0px",
                  
    
                }}
                onSubmit={handleFormSubmit}
              >
                {[1, 2, 3].map((i) => (
                  <div key={i} className="table-objects">
                    <label style={{ margin: "0px 50px" }}>
                      <p style={{marginLeft: "20px"}}> {i}</p>
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
                <button type='submit' style={{margin: "50px 60px", cursor: "pointer", padding: "10px"}}>Сохранить</button>
      </form>
      </div>
    </div>
    </> 
      )
}

export default GeneralEdit