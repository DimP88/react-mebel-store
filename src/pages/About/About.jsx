import React from "react";
import aboutImage from "../../assets/about.png";
import Icon from "../../Components/Icon/Icon";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__row">
            <h2 className="about__row-title">
              Интернет-магазин «Лофт Мебель»: купите хорошую мебель в один клик!
            </h2>
            <p>
              Уникальный формат интернет-магазина позволит вам купить лучшую
              мебель крупнейших российских фабрик максимально быстро и по
              выгодной цене!
              <br />
              <br />
              Мы благодарим за доверие более десятка производителей, которые
              дали нам возможность представлять лучшие образцы их продукции в
              российском интернет-пространстве. Прямые договоры на поставку
              мебели с фабрик обеспечивают наиболее привлекательные условия для
              наших покупателей.
            </p>
          </div>
          <div className="about__image">
            <img src={aboutImage} alt="О нас логотип" />
          </div>
        </div>
        <h3 className="about__info-title" style={{ textAlign: "center" }}>
          Покупайте с выгодой!
        </h3>
        <div className="about__info">
          <div className="about__infobox">
            <Icon id="profit" size={136} />
            <div className="about__infobox-div">
              <h4>Лучшая цена</h4>
              <p>
                Предлагаем близкие к оптовым цены, которые дают возможность
                приобретать мебель дешевле, чем в розничных салонах и шоу-румах.
              </p>
            </div>
          </div>
          <div className="about__infobox">
            <Icon id="vector" size={136} />
            <div className="about__infobox-div">
              <h4>Прямые поставки</h4>
              <p>
                С ведущих мебельных фабрик уменьшают срок выполнения вашего
                заказа, даже если речь идет об изготовлении предметов по
                индивидуальному проекту.
              </p>
            </div>
          </div>
          <div className="about__infobox">
            <Icon id="time" size={136} />
            <div className="about__infobox-div">
              <h4>Экономие времени</h4>
              <p>
                Не нашли оптимальный вариант или нет времени на поиски? Оставьте
                онлайн-заявку с критериями, и мы предложим вам несколько
                достойных образцов.
              </p>
            </div>
          </div>
          <div className="about__infobox">
            <Icon id="production" size={136} />
            <div className="about__infobox-div">
              <h4>Изготовление на заказ</h4>
              <p>
                Принимаем заявки на изготовление мебели по персональному
                дизайн-проекту от покупателей из любой точки России. Просим быть
                готовыми к авансированной оплате персональных заказов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
