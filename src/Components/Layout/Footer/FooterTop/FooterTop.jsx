import { Link } from "react-router-dom";
import Adress from "../../../ContactInfo/Adress";

const FooterTop = () => {
  return (
    <div className="container">
      <h3 className="footer__title">НАВИГАЦИЯ</h3>
      <div className="footer__top">
        <div className="footer__top-row">
          <div className="footer__top-wrapper">
            <Link to={"/"}>Кухни</Link>
            <Link to={"/"}>Спальни</Link>
            <Link to={"/"}>Гостинные</Link>
          </div>
          <div className="footer__top-wrapper">
            <Link to={"/"}>Прихожие</Link>
            <Link to={"/"}>Офисная мебель</Link>
            <Link to={"/"}>Детская</Link>
          </div>
          <div className="footer__top-wrapper">
            <Link to={"/"}>Шкафы</Link>
            <Link to={"/"}>Матрасы</Link>
            <Link to={"/"}>Мягкая мебель</Link>
          </div>
        </div>
        <div className="footer__top-lm">
          <p>LM</p>
          <Adress />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
