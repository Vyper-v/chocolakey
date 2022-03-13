import { MenuIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export const BurgerMenu = ({ listItems }) => {
  return (
    <div className="burger-menu">
      <button>
        <MenuIcon />
      </button>
      <ul>
        {listItems.map(({ data, url }, i) => (
          <li key={i}>
            <Link to={url}>{data}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
