import { Link } from "react-router-dom";
import Telephone from "../../../ContactInfo/Telephone";
import { Instagramm } from "../../../ContactInfo/Instagramm";
import Mail from "../../../ContactInfo/Mail";

const FooterBottom = () => {
  return (
    <div className="footer__bottom">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__bottom-row">
            <Link to={"/"}>Акция</Link>
            <Link to={"/"}>Новинки</Link>
          </div>
          <div className="footer__bottom-row">
            <Telephone />
            <Instagramm />
            <Mail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
