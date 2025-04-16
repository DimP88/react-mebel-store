import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import Headerdown from "./HeaderDown/Headerdown";

const Header = () => {
  return (
    <div className="header">
      <HeaderTop />
      <div className="container">
        <HeaderCenter />
        <Headerdown />
      </div>
    </div>
  );
};

export default Header;
