import React, { useState } from "react";
import General from "./path/to/General";
import GeneralEdit3 from "./path/to/GeneralEdit3";

const ParentComponent = () => {
  const [showImage, setShowImage] = useState(true); // Initial value for showImage state

  return (
    <>
      <General showImage={showImage} />
      <GeneralEdit3 setShowImage={setShowImage} />
    </>
  );
}

export default ParentComponent;