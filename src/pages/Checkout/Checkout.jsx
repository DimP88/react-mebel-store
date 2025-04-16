import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input/Input";
import { CustomContext } from "../../config/contex/CustomContext";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button/Button";

const Checkout = () => {
  const [popup, setPopup] = useState(false);
  const [count, setCount] = useState(15);
  const { user, addOrder } = useContext(CustomContext);
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const redirect = () => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const submitForm = (data) => {
    const order = {
      ...data,
      status: "pending",
      userOrder: user.carts,
      price: totalOrderPrice,
    };
    addOrder(order, setPopup, redirect);
  };

  useEffect(() => {
    reset({
      name: user?.name || "",
      email: user?.email || "",
      city: user?.city || "",
    });
  }, [user, reset]);

  useEffect(() => {
    if (count === 0) {
      navigate("/");
    }
  }, [count, navigate]);

  const totalOrderPrice = user.carts?.reduce(
    (total, product) => total + product.price * product.count,
    0
  );

  return (
    <section className="checkout">
      <div className="container">
        <h2 className="checkout-title">Оформление заказа</h2>
        <form className="checkout__form" onSubmit={handleSubmit(submitForm)}>
          <div className="checkout__form-block">
            <h3 className="checkout__form-title">Данные покупателя</h3>
            <div className="checkout__form-fields">
              <Input
                name="name"
                type="text"
                placeholder="Имя"
                error={errors.name?.message}
                {...register("name")}
              />
              <Input
                name="email"
                type="email"
                placeholder="Еmail"
                error={errors.email?.message}
                {...register("email")}
              />
              <Input
                placeholder="Телефон"
                name="phone"
                type="text"
                error={errors.email?.message}
                {...register("city")}
              />
            </div>
          </div>
          <div className="checkout__form-block">
            <h3 className="checkout__form-title">Ваш заказ</h3>
            <ul className="checkout__form-list">
              <li className="checkout__form-link">
                <p style={{ fontWeight: "600" }}>Товар</p>
                <p style={{ fontWeight: "600" }}>Всего</p>
              </li>
              {user.carts?.map((product) => (
                <li className="checkout__form-link" key={product.id}>
                  <p>{product.title}</p>
                  <p>
                    {product.count} ед. x {product.price} грн.
                  </p>
                </li>
              ))}
              <li className="checkout__form-link count">
                <p style={{ fontWeight: "600" }}>Итого</p>
                <p style={{ fontWeight: "600" }}>{totalOrderPrice} грн.</p>
              </li>
            </ul>
          </div>
          <div className="checkout__form-block">
            <h3 className="checkout__form-title">Адрес получателя</h3>
            <div className="checkout__form-fields">
              <Input
                placeholder="Cтрана"
                name="country"
                type="text"
                error={errors.email?.message}
                {...register("country")}
              />
              <Input
                placeholder="Город"
                name="city"
                type="text"
                error={errors.email?.message}
                {...register("city")}
              />
              <Input
                placeholder="Улица"
                name="street"
                type="text"
                error={errors.email?.message}
                {...register("street")}
              />
              <Input
                placeholder="Дом"
                name="house"
                type="text"
                error={errors.email?.message}
                {...register("house")}
              />
              <Input
                placeholder="Квартира"
                name="flat"
                type="text"
                error={errors.email?.message}
                {...register("flat")}
              />
            </div>
          </div>
          <div className="checkout__form-block">
            <label className="checkout__form-label">
              <input type="checkbox" />
              Оплата наличными
            </label>
            <button className="checkout__form-btn" type="submit">
              Разместить заказ
            </button>
          </div>
          <div className="checkout__form-block">
            <h3 className="checkout__form-title">Коментарии</h3>
            <div className="checkout__form-field">
              <textarea placeholder="Ваш коментарий..." rows="5" />
            </div>
          </div>
        </form>
      </div>
      {popup && (
        <div className="checkout__popup">
          <h2 className="checkout__popup-title">Ваш заказ успешно оформлен</h2>
          <p>Через {count} секунд вас перекинет на главную страницу</p>
          <div className="checkout__popup-btn">
            <Button onClick={() => navigate("/")}>Перейти на главную</Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkout;
