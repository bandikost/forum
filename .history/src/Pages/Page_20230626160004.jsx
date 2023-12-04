import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./modules/General.module.css" 
import { getDatabase, ref, onValue } from 'firebase/database';


const Page = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [objects, setObjects] = useState({});
  const [objects2, setObjects2] = useState({});
  const [objects3, setObjects3] = useState({});
  const [objects4, setObjects4] = useState({});
  const [objects5, setObjects5] = useState({});
  const [objects6, setObjects6] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const objectsRef = ref(db, "objects");
    const objects2Ref = ref(db, "objects2");
    const objects3Ref = ref(db, "objects3");
    const objects4Ref = ref(db, "objects4");
    const objects5Ref = ref(db, "objects5");
    const objects6Ref = ref(db, "objects6");

    const fetchData = (snapshot, setState) => {
      const data = snapshot.val();
      setState(data);
    };

    onValue(objectsRef, (snapshot) => fetchData(snapshot, setObjects));
    onValue(objects2Ref, (snapshot) => fetchData(snapshot, setObjects2));
    onValue(objects3Ref, (snapshot) => fetchData(snapshot, setObjects3));
    onValue(objects4Ref, (snapshot) => fetchData(snapshot, setObjects4));
    onValue(objects5Ref, (snapshot) => fetchData(snapshot, setObjects5));
    onValue(objects6Ref, (snapshot) => fetchData(snapshot, setObjects6));
  }, []);
  useEffect(() => {
    // Fetch the content based on the id from an API or database
    // Replace this with your own logic to fetch the content
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/content/${id}`);
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, [id]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      {/* Render additional content based on the id */}
      <ObjectLink id="1" imageUrl={objects.imageUrl1} name={objects.name1} info={objects.info1} />
      {id === "2" && <div>Content specific to id 2</div>}
      {id === "3" && <div>Content specific to id 3</div>}
      {/* Add more content blocks for each ID */}
      {id === "4" && <div>Content specific to id 4</div>}
      {id === "5" && <div>Content specific to id 5</div>}
      {id === "6" && <div>Content specific to id 6</div>}
    </div>
  );
};

export default Page;

