import { Link } from "react-router-dom";
import Icon from "../../../Icon/Icon";

const Headerdown = () => {
  return (
    <div>
      <div className="header__down">
        <Link className="header__down-link" to="/">
          <Icon id="kitchen-icon" /> Кухни
        </Link>
        <Link className="header__down-link" to="/">
          <Icon id="bedroom-icon" /> Спальни
        </Link>
        <Link className="header__down-link" to="/">
          <Icon id="livingroom-icon" /> Гостинные
        </Link>
        <Link className="header__down-link" to="/">
          <Icon id="closet-icon" /> Прихожие
        </Link>
        <Link className="header__down-link" to="/">
          <Icon id="office-icon" /> Офисная мебель
        </Link>
        <Link className="header__down-link" to="/">
          <Icon id="childrensroom-icon" /> Детская
        </Link>
        <Link className="header__down-link" to="/" style={{ color: "red" }}>
          Акция
        </Link>
      </div>
    </div>
  );
};

export default Headerdown;
