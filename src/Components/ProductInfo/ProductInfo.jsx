import { useContext, useState } from "react";
import FavoritesIcon from "../FavoritesIcon/FavoritesIcon";
import { CustomContext } from "../../config/contex/CustomContext";
import CartCountButton from "../CartCountButton/CartCountButton";
import AddCartButton from "../CartCountButton/AddCartButton";

const ProductInfo = ({ product }) => {
  const { getFavorites, user } = useContext(CustomContext);

  const [color, setColor] = useState("");
  color;
  const getProductColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="product__info">
      <h2 className="product__info-title">{product.title}</h2>
      <p className="product__info-category">{product.category}</p>
      <div className="product__info-inner">
        <p className="product__info-price">{product.price} грн.</p>
        {user.carts?.some((el) => el.id === product.id) ? (
          <div className="card__sizes-count">
            <CartCountButton
              item={product}
              className={"card__sizes-btnsmall"}
            />
          </div>
        ) : (
          <AddCartButton item={product} className={"product__info-btn"}>
            Купить
          </AddCartButton>
        )}
        <p className="product__info-fav" onClick={() => getFavorites(product)}>
          <FavoritesIcon item={product} />
          Добавить в желаемое
        </p>
      </div>
      <div className="product__info-wrapper">
        <label htmlFor="">Цвет</label>
        <br />
        <select onChange={getProductColor}>
          {product.colors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <span className="product__info-span">Описание</span>
      <p className="product__info-desc">{product.description}</p>
    </div>
  );
};

export default ProductInfo;
