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

