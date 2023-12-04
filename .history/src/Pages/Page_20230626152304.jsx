import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Page = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);

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

  if (content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      {/* Render additional content based on the id */}
      {id === "1" && <div>Content specific to id 1</div>}
      {id === "2" && <div>Content specific to id 2</div>}
      {id === "3" && <div>Content specific to id 3</div>}
    </div>
  );
};

export default Page;
