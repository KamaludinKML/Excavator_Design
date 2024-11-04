// Loading.js
import React from "react";
import "./Loader.css";

const Loading = () => {
  return (
    <div className="loading-screen flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center">
        {/* You can replace this SVG with an animated excavator graphic */}
        <img src="logo.webp" alt="Excavator loader" content="center" width="25%" height="25%" />

      </div>
    </div>
  );
};

export default Loading;
