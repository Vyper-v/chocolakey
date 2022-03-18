import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

export const BurgerMenu = ({ listItems }) => {
  const [isOpen, setIsOpen] = useState(window.visualViewport.width > 768);
  return (
    <div className="burger-menu">
      <button onClick={()=>setIsOpen(!isOpen)}>
        <MenuIcon />
      </button>
      {isOpen && <ul>
        {listItems.map(({ data, url }, i) => (
          <li key={i}>
            <Link to={url}>{data}</Link>
          </li>
        ))}
      </ul>}
    </div>
  );
};
