import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import HeaderDown from "./HeaderDown/HeaderDown";

const Header = () => {
  return (
    <div className="header">
      <HeaderTop />
      <div className="container">
        <HeaderCenter />
        <HeaderDown />
      </div>
    </div>
  );
};

export default Header;
