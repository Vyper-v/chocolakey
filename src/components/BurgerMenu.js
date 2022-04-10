import { MenuIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BurgerMenu = ({ listItems }) => {
  const [isOpen, setIsOpen] = useState(window.visualViewport.width > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.visualViewport.width > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="burger-menu">
      <button onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </button>
      {isOpen && (
        <ul>
          {listItems.map(({ data, url }) => (
            <li key={data}>
              <Link to={url}>{data}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
