import Telephone from "../../Components/ContactInfo/Telephone";
import { Instagramm } from "../../Components/ContactInfo/Instagramm";
import Mail from "../../Components/ContactInfo/Mail";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact__title">Свяжитесь с нами</h2>
        <div className="contact__inner">
          <div className="contact__inner-row">
            <form className="contact__form">
              <div className="contact__form-wrapper">
                <div className="contact__form-input">
                  <label className="contact__form-field" htmlFor="name">
                    Ваше имя
                  </label>
                  <input type="text" id="name" />
                </div>
                <div className="contact__form-input">
                  <label className="contact__form-field" htmlFor="name">
                    Ваш e-mail
                  </label>
                  <input type="email" id="email" />
                </div>
              </div>
              <div className="contact__form-input">
                <label className="contact__form-field" htmlFor="text">
                  Сообщение
                </label>
                <textarea id="text" rows="7" />
              </div>
              <div className="contact__form-buttons">
                <input type="button" value="Отправить" />
              </div>
            </form>
          </div>
          <div className="contact__inner-row">
            <div className="contact__info">
              <div className="contact__info-mobile">
                <Telephone />
                <Mail />
              </div>
              <div className="contact__info-social">
                <Instagramm />
                <span>
                  Режим работы: <br />
                  Пн–Пт 09:00–19:00 Сб 10:00–17:00, Вс 10:00–14:00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__map">
          <h2 className="contact__map-title">Адрес нашей компании</h2>
          <span>г. Киев, Киевское шоссе, 30 Ж/К Столичный</span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10162.14009868922!2d30.427887565147294!3d50.449760995431845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc24d030cf41%3A0xfbed7f422ec96831!2sCosmo%20Multimall!5e0!3m2!1sru!2sua!4v1743245129874!5m2!1sru!2sua"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Cosmo Multimall"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
