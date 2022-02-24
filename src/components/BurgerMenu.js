import React, { useState } from "react";

export const BurgerMenu = ({ listItems }) => {
  const [visibility, setVisibility] = useState(window.innerWidth > 768);
  const handleVisibility = () => {
    setVisibility(!visibility);
  };


  return (
    
    <div className="burger-menu">
      <button onClick={handleVisibility}>
        <img src="/assets/svg/burger-menu.svg" alt="burger menu icon" />
      </button>
      {visibility && (
        <ul>
          {listItems.map(({ data, url }, i) => (
            <li key={i}>
              <a href={url}>{data}</a>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};
