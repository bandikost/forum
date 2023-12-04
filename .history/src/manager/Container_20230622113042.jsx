import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { storage } from "../firebase";
import General from "../Pages/General";
import GeneralEdit from "./GeneralEdit";

const GeneralContainer = () => {
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
      <General objects={objects} />
      <GeneralEdit
        newValues={newValues}
        setNewValues={setNewValues}
        handleFormSubmit={handleFormSubmit}
        handleClick={handleClick}
      />
    </>
  );
};

export default GeneralContainer;
