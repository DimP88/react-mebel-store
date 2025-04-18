import { useEffect, useState } from "react";
import api from "../../config/api/api";
import { useNavigate } from "react-router-dom";
import { CustomContext } from "./CustomContext";

const Context = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "" });
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuСlose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    if (localStorage.getItem("favorites")) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")));
    }
  }, []);

  // start user

  const loginUser = (user) => {
    api
      .post("login", {
        headers: {
          "content-type": "application/json",
        },
        json: { ...user },
      })
      .json()
      .then((res) => {
        setUser(res.user);
        navigate("/room");
        localStorage.setItem("user", JSON.stringify(res.user));
      });
  };

  const registerUser = (user) => {
    api
      .post("register", {
        headers: {
          "content-type": "application/json",
        },
        json: {
          ...user,
          city: "",
          street: "",
          home: "",
          orders: [],
          carts: [],
          point: 0,
        },
      })
      .json()
      .then((res) => {
        setUser(res.user);
        navigate("/room");
        localStorage.setItem("user", JSON.stringify(res.user));
      });
  };

  const logOut = () => {
    setUser({ email: "" });
    localStorage.removeItem("user");
    navigate("/");
  };

  // end user

  // start favorites

  const getFavorites = (product) => {
    let findFavorites = favorites.some((elem) => elem.id === product.id);

    if (findFavorites) {
      setFavorites((prev) => prev.filter((elem) => elem.id !== product.id));
    } else {
      setFavorites((prev) => [...prev, product]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // end favorites

  // start cart

  const addCarts = (product) => {
    api
      .patch(`users/${user.id}`, {
        headers: {
          "content-type": "application/json",
        },
        json: {
          carts: [...user.carts, { ...product, count: 1 }],
        },
      })
      .json()
      .then((res) => {
        setUser(res);
        localStorage.setItem("user", JSON.stringify(res));
      });
  };

  const addCartCountPlus = (id) => {
    api
      .patch(`users/${user.id}`, {
        headers: {
          "content-type": "application/json",
        },
        json: {
          carts: user.carts?.map((item) => {
            if (item.id === id) return { ...item, count: item.count + 1 };
            else return item;
          }),
        },
      })
      .json()
      .then((res) => {
        setUser(res);
        localStorage.setItem("user", JSON.stringify(res));
      });
  };

  const removeCartCountMinus = (id) => {
    api
      .patch(`users/${user.id}`, {
        headers: {
          "content-type": "application/json",
        },
        json: {
          carts:
            user.carts.find((item) => item.id === id).count > 1
              ? user.carts.map((item) => {
                  if (item.id === id) return { ...item, count: item.count - 1 };
                  else return item;
                })
              : user.carts.filter((item) => item.id !== id),
        },
      })
      .json()
      .then((res) => {
        setUser(res);
        localStorage.setItem("user", JSON.stringify(res));
      });
  };

  // end cart

  // start order

  const addOrder = (order, setPopup, redirect) => {
    api
      .patch(`users/${user.id}`, {
        headers: { "content-type": "application/json" },
        json: {
          orders: [...user.orders, order],
          carts: [],
        },
      })
      .json()
      .then((res) => {
        setUser(res);
        localStorage.setItem("user", JSON.stringify(res));
        setPopup(true);
        redirect();
      });
  };

  // end order

  let value = {
    user,
    setUser,
    loginUser,
    registerUser,
    logOut,
    getFavorites,
    favorites,
    search,
    setSearch,
    addCarts,
    addCartCountPlus,
    removeCartCountMinus,
    addOrder,
    isMenuOpen,
    menuToggle,
    menuСlose,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
export default Context;
