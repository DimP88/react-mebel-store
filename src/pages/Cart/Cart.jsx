import { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { CustomContext } from "../../config/contex/CustomContext";
import CartCountButton from "../../Components/CartCountButton/CartCountButton";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { user, removeCartCountMinus } = useContext(CustomContext);
  const navigate = useNavigate();

  const allProductsCount = user.carts?.reduce(
    (acc, product) => acc + product.count,
    0
  );

  return (
    <div className="container">
      <section className="cart">
        <div className="cart__inner">
          <h2 className="cart__title">Ваша корзина</h2>
          <span className="cart__count">
            {allProductsCount}
            <span className="cart__count">
              {" "}
              предмет
              {allProductsCount % 100 >= 11 && allProductsCount % 100 <= 14
                ? "ов"
                : [2, 3, 4].includes(allProductsCount % 10)
                ? "а"
                : allProductsCount % 10 === 1
                ? ""
                : "ов"}
            </span>
          </span>
        </div>
        <div className="cart__row">
          {user.carts?.map((item) => (
            <div key={item.id} className="cart__product">
              <div className="cart__product-img">
                <img src={item.images[0]} alt="" />
              </div>
              <div className="cart__product-info">
                <div className="cart__product-text">
                  <h3 className="cart__product-title">{item.title}</h3>
                  <p className="cart__product-title">
                    {`Цена: ${item.price} грн.`}
                    <br />
                    {`Вместе: ${item.price * item.count} грн.`}
                  </p>
                </div>
                <div className="cart__product-price">
                  <p>Размер(Ш×Г×В)</p>
                  <span>
                    {`: ${item.width}`} СМ x {item.deep} СМ x {item.height} СМ
                  </span>
                </div>
              </div>
              <CartCountButton className={"cart__product-btn"} item={item} />
              <div className="cart__product-close">
                <IoIosClose onClick={() => removeCartCountMinus(item.id)} />
              </div>
            </div>
          ))}
        </div>
        {allProductsCount > 0 ? (
          <div className="cart__check">
            <span>
              Общая стоимость заказа:{" "}
              {user.carts?.reduce((acc, el) => acc + el.count * el.price, 0)}{" "}
              грн.
            </span>
            <Button onClick={() => navigate("/checkout")}>
              Оформить заказ
            </Button>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <span>Корзина пустая</span>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
