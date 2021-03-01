import React from "react";
import "./Header.css";

//true? do this : do that
//as this header is functional comp so prop will passed as arguement
// in class comp this.props.name of block
const Header = ({ headTitle, headerExpanded }) => {
  return (
    <div className="head-container">
      <img
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        className={`head-image 
        ${
          headerExpanded ? "head-image-expanded" : "head-image-contracted"
        }`}
        alt="headerImage "
      />
      <h1 className={`head-text 
      ${
        headerExpanded ? "head-text-expanded" : "head-text-contracted"
      }`}>{headTitle}</h1>
    </div>
  );
};

export default Header;
