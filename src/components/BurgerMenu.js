import { MenuIcon } from "@heroicons/react/solid";

export const BurgerMenu = ({ listItems }) => {
  return (
    <div className="burger-menu">
      <button>
        <MenuIcon />
      </button>
      <ul>
        {listItems.map(({ data, url }, i) => (
          <li key={i}>
            <a href={url}>{data}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
