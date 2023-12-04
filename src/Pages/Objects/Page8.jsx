import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import Header from "../../Main/Header";
import world2 from "../../image/main/3.jpg"
const Page8 = () => {

const [objects8, setobjects8] = useState({ name1: '' });
  useEffect(() => {
      const db = getDatabase();
      const objects8Ref = ref(db, "objects8");

      const fetchData = (snapshot, setState) => {
        const data = snapshot.val();
        setState(data);
      };

      onValue(objects8Ref, (snapshot) => fetchData(snapshot, setobjects8));
      
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


  
  
  return (
    <div>
      <Header />
      <div className="container-id" style={{top: "80px", position: "relative"}}>
       <p style={{display: "flex", justifyContent: "center", margin: " 0 auto 0", fontSize: "50px"}}>Страница в разработке</p>
            </div>
    </div>
      );
    };

export default Page8;
