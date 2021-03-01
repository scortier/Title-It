import React from "react";
import "./NameCard.css";

const NameCheapURL="https://www.namecheap.com/domains/registration/results/?domain=";


const NameCard = ({ suggestName }) => {
  return (
      <a className="card-link" href={`${NameCheapURL}${suggestName}`} target="_blank">
    <div className="result-name-card">
      <p className="result-name">{suggestName}</p>
    </div>
    </a>
  );
};

export default NameCard;
