import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import deviveryTruck from "@assets/delivery-icon.svg";

const HeaderTop = () => {
  return (
    <div className="header__top">
      <div className="container">
        <div className="header__top-nav">
          <div className="header__top-menu">
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О нас</Link>
            <Link to={"/contact"}>Контакты</Link>
            <Link to={"/catalog"}>Каталог</Link>
          </div>
          <div className="header__top-menu">
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
