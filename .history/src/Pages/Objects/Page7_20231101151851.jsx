import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import Header from "../../Main/Header";
import world2 from "../../image/main/2.jpg"
const Page7 = () => {

const [objects7, setobjects7] = useState({ name1: '' });
  useEffect(() => {
      const db = getDatabase();
      const objects7Ref = ref(db, "objects7");

      const fetchData = (snapshot, setState) => {
        const data = snapshot.val();
        setState(data);
      };

      onValue(objects7Ref, (snapshot) => fetchData(snapshot, setobjects7));
      
  }, []);

const [numbers, setnumbers] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const numbersRef = ref(db, "numbers");
    onValue(numbersRef, (snapshot) => {
      const data = snapshot.val();
      setnumbers(data);
    });
  }, []);

  useEffect(() => {
    if (objects7.name1) {
      document.title = objects7.name1;
    }
  }, [objects7.name1]);
  
  
  return (
<div>
  <Header />
  <div className="container-id" style={{top: "80px", position: "relative"}}>
   <p style={{display: "flex", justifyContent: "center", margin: " 0 auto 0"}}>Страница в разработке</p>
        </div>
</div>
  );
};

export default Page7;

