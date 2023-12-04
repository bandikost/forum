import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import wh from "../../image/main/icons/free-icon-whatsapp-3536445.png"
import viber from "../../image/main/icons/free-icon-viber-3938039.png"

export const NumbersContact = () => {
    const [numbers, setnumbers] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const numbersRef = ref(db, "numbers");
    onValue(numbersRef, (snapshot) => {
      const data = snapshot.val();
      setnumbers(data);
    });
  }, []);
  return (
    <div className="numbers">
        За более подробной информацией обращайтесь к 
нашим менеджерам по телефону: 
        <div className="contacts-link">
          <div className="wh"><img src={wh} alt=""/></div>
          <div className="viber"><img src={viber} alt=""/></div>
        </div>
    </div>
  )
}

export default NumbersContact;