import React from "react";
import NameCard from "../NameCard/NameCard";
import "./Results.css";



const ResultContainer = ({ suggestNames }) => {
  const suggestNameJSX = suggestNames.map((suggestName) => {
    // return <p key={suggestName}>{suggestName}</p>;
    return <NameCard key={suggestName} suggestName={suggestName} />;
    });

  return (
    <div className="result-container">
      {suggestNameJSX}
    </div>
  );
};

export default ResultContainer;
