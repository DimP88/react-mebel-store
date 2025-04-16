import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Button from "../../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="banner">
      <div className="container">
        <Swiper
          className="mySwiper"
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{ delay: 9000 }}
          loop={true}
        >
          <SwiperSlide>
            <div className="banner__img-1">
              <h2 className="banner__title">
                loft <br /> мебель
              </h2>
              <p className="banner__text">
                Современная и удобная мебель в Киеве
              </p>
              <Button onClick={() => navigate("/catalog")}>
                СМОТРЕТЬ КАТАЛОГ
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner__img-2">
              <h2 className="banner__title">
                loft <br /> мебель
              </h2>
              <p className="banner__text">
                Современная и удобная мебель в Киеве
              </p>
              <Button onClick={() => navigate("/catalog")}>
                СМОТРЕТЬ КАТАЛОГ
              </Button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
