import { Link } from "react-router-dom";
import FavoritesIcon from "../FavoritesIcon/FavoritesIcon";
import { useContext } from "react";
import { CustomContext } from "../../config/contex/CustomContext";
import CartCountButton from "../CartCountButton/CartCountButton";
import AddCartButton from "../CartCountButton/AddCartButton";

const Card = ({ item }) => {
  const { getFavorites, user } = useContext(CustomContext);

  return (
    <div className="card">
      <span className="card__fav">
        <FavoritesIcon item={item} onClick={() => getFavorites(item)} />
      </span>
      <Link to={`/product/${item.id}`}>
        <img className="card__img" src={item.images[0]} alt="Стул" />
      </Link>
      <h3 className="card__title">{item.title}</h3>
      <p className="card__category">{item.category}</p>
      <p className="card__price">{item.price} грн.</p>
      <div className="card__sizes">
        <h4 className="card__sizes-title">Размеры</h4>
        <div className="card__sizes-info">
          <p className="card__sizes-size">
            <span>ШИРИНА</span>
            {item.width} СМ
          </p>
          x
          <p className="card__sizes-size">
            <span>ГЛУБИНА</span>
            {item.deep} СМ
          </p>
          x
          <p className="card__sizes-size">
            <span>ВЫСОТА</span>
            {item.height} СМ
          </p>
        </div>
        {user.carts?.some((el) => el.id === item.id) ? (
          <CartCountButton item={item} className={"card__sizes-btnsmall"} />
        ) : (
          <AddCartButton item={item} className={"card__sizes-btn"}>
            Добавить в корзину
          </AddCartButton>
        )}
      </div>
    </div>
  );
};

export default Card;
