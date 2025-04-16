import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../../assets/LOGO.svg";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi";
import { useContext, useEffect } from "react";
import { CustomContext } from "../../../../config/contex/CustomContext";
import { MdLogout } from "react-icons/md";
import { UserStatys } from "../../Header/HeaderCenter/UserStatys";

const HeaderCenter = () => {
  const { user, logOut, search, setSearch, favorites } =
    useContext(CustomContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/catalog") setSearch(" ");
  }, [location.pathname, setSearch]);

  return (
    <div className="header__center">
      <Link to="/">
        <img
          className="header__center-logo"
          src={logo}
          alt="Логотип"
          title="На главную"
        />
      </Link>

      <div className="header__center-search">
        <div className="header__center-glass">
          <IoIosSearch className="search-icon" />
        </div>
        <input
          onChange={(e) => {
            if (location.pathname !== "/catalog") {
              navigate("/catalog");
            }
            setSearch(e.target.value);
          }}
          type="search"
          className="header__center-field"
          placeholder="Поиск"
          value={search}
        />
      </div>

      <div className="header__center-acc">
        <Link to={user.email?.length ? "/cart" : "/login"}>
          {user.carts?.reduce((total, el) => total + el.count, 0) > 0 ? (
            <HiShoppingBag title="Корзина" />
          ) : (
            <HiOutlineShoppingBag title="Корзина" />
          )}
        </Link>
        <Link to={"/favorites"}>
          {favorites.length > 0 ? (
            <AiFillHeart title="Избранное" />
          ) : (
            <AiOutlineHeart title="Избранное" />
          )}
        </Link>

        {location.pathname == "/room" ? (
          <span onClick={logOut} style={{ cursor: "pointer" }}>
            <UserStatys />
            <MdLogout title="Выйти" aria-label="Выйти из аккаунта" />
          </span>
        ) : (
          <Link to={user.email?.length ? "/room" : "/login"}>
            <UserStatys />
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderCenter;
