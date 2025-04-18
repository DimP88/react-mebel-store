import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import deviveryTruck from "@assets/delivery-icon.svg";
import { useContext } from "react";
import { CustomContext } from "../../../../config/contex/CustomContext";

const HeaderTop = () => {
  const { isMenuOpen, menuСlose } = useContext(CustomContext);

  return (
    <div className={`header__top ${isMenuOpen ? "active" : ""}`}>
      <div className="container">
        <div className={`header__top-nav ${isMenuOpen ? "active" : ""}`}>
          <div className={`header__top-menu ${isMenuOpen ? "active" : ""}`}>
            <Link to={"/"} onClick={menuСlose}>
              Главная
            </Link>
            <Link to={"/about"} onClick={menuСlose}>
              О нас
            </Link>
            <Link to={"/contact"} onClick={menuСlose}>
              Контакты
            </Link>
            <Link to={"/catalog"} onClick={menuСlose}>
              Каталог
            </Link>
          </div>
          <div className="header__top-menu delivery">
            <a href="tel:8 (964) 89 99 119">
              <span>
                <BsTelephone aria-hidden="true" /> 8 (964) 89 99 119
              </span>
            </a>
            <a href="#">
              <span>
                <img src={deviveryTruck} alt="Иконка доставки" />
                Доставка
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
