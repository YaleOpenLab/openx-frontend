import React from "react";
import "./DocumentationContainer.scss";

const DocumentationContainer = ({ data }) => {
  return (
    <div className="DocumentationContainer">
      {data.map((data, index) => (
        <div className="document" key={index}>
          <img src={data.icon} alt="archive" />
          <p>{data.title}</p>
          <span>{data.sub}</span>
        </div>
      ))}
    </div>
  );
};

export default DocumentationContainer;
