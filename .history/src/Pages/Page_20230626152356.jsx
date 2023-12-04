import React from "react";
import { useParams } from "react-router-dom";

const Page = () => {
  const { id } = useParams();

  let content;
  if (id === "1") {
    content = <div>Content for ID 1</div>;
  } else if (id === "2") {
    content = <div>Content for ID 2</div>;
  } else {
    content = <div>Invalid ID</div>;
  }

  return (
    <div>
      <h1>Page Content</h1>
      {content}
    </div>
  );
};

export default Page;
