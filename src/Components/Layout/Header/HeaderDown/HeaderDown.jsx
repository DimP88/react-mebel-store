import { Link } from "react-router-dom";
import Icon from "../../../Icon/Icon";
import { MdOutlineCrisisAlert } from "react-icons/md";

const HeaderDown = () => {
  return (
    <div>
      <div className="header__down">
        <Link className="header__down-link" to="/">
          <Icon id="kitchen-icon" />
          <span>Кухни</span>
        </Link>
        <Link className="header__down-link" to="/">
          <Icon id="bedroom-icon" />
          <span>Спальни</span>
        </Link>
        <Link className="header__down-link" to="/">
          <Icon id="livingroom-icon" />
          <span>Гостинные</span>
        </Link>
        <Link className="header__down-link" to="/">
          <Icon id="closet-icon" />
          <span>Прихожие</span>
        </Link>
        <Link className="header__down-link" to="/">
          <Icon id="office-icon" />
          <span>Офисная мебель</span>
        </Link>
        <Link className="header__down-link" to="/">
          <Icon id="childrensroom-icon" />
          <span>Детская</span>
        </Link>
        <Link className="header__down-link" to="/" style={{ color: "red" }}>
          <MdOutlineCrisisAlert />
          <span>Акция</span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderDown;
