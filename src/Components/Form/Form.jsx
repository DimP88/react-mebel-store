import { Link, useLocation } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { RiPhoneFill } from "react-icons/ri";
import autorisation from "../../assets/autorisation2.png";
import { IMaskInput } from "react-imask";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useContext, useRef, useState } from "react";
import { CustomContext } from "../../config/contex/CustomContext";

const Form = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const password = useRef();
  const location = useLocation();

  const { loginUser, registerUser } = useContext(CustomContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  password.current = watch("password");

  const submitForm = (data) => {
    let { confirmPassword, ...user } = data;
    confirmPassword;

    if (location.pathname == "/login") {
      loginUser(user);
    } else {
      registerUser(user);
      reset();
    }
  };

  return (
    <div className="form" onSubmit={handleSubmit(submitForm)}>
      <div className="form__left">
        <form noValidate className="form__content">
          <h2 className="form__content-title">
            {location.pathname == "/login" ? "Sign in" : "Sign up"}
          </h2>
          <p className="form__content-text">
            {location.pathname == "/login"
              ? "If you don’t have an account register"
              : "If you alreadt have account "}
            <br />
            You can{" "}
            {location.pathname == "/login" ? (
              <Link to={"/register"}>register here</Link>
            ) : (
              <Link to={"/login"}>Login here</Link>
            )}
            .
          </p>

          <label htmlFor="email" className="form__label">
            <span className="form__label-text">Email</span>
            <div className="form__label-field">
              <span className="form__label-icon">
                <CiMail />
              </span>
              <input
                {...register("email", {
                  required: {
                    message: "Поле email обязательно нужно заполнить",
                    value: true,
                  },
                  minLength: {
                    message: "Минимум 10 символов",
                    value: 10,
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[a-z]{2,5}$/i,
                    message: "Неверный email адрес",
                  },
                })}
                className="form__label-input"
                type="email"
                id="email"
                placeholder="Enter your email adress"
              />
            </div>
            <p className="form__label-error">
              {errors.email && errors.email?.message}
            </p>
          </label>

          {location.pathname == "/register" && (
            <label htmlFor="name" className="form__label">
              <span className="form__label-text">Name</span>
              <div className="form__label-field">
                <span className="form__label-icon">
                  <FaRegUser />
                </span>
                <input
                  {...register("name", {
                    required: {
                      message: "Поле name обязательно нужно заполнить",
                      value: true,
                    },
                    minLength: {
                      message: "Минимум 3 символов",
                      value: 3,
                    },
                    pattern: {
                      value: /^[А-ЯЁа-яёA-Za-z]+$/,
                      message: "Неверно введенное имя",
                    },
                  })}
                  className="form__label-input"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <p className="form__label-error">
                {errors.name && errors.name?.message}
              </p>
            </label>
          )}

          {location.pathname == "/register" && (
            <label htmlFor="surneme" className="form__label">
              <span className="form__label-text">Surname</span>
              <div className="form__label-field">
                <span className="form__label-icon">
                  <FaRegUser />
                </span>
                <input
                  {...register("surname", {
                    required: {
                      message: "Поле surname обязательно нужно заполнить",
                      value: true,
                    },
                    minLength: {
                      message: "Минимум 3 символов",
                      value: 3,
                    },
                    pattern: {
                      value: /^[А-ЯЁа-яёA-Za-z]+$/,
                      message: "Неверно введенная фамилия",
                    },
                  })}
                  className="form__label-input"
                  type="text"
                  id="surname"
                  placeholder="Enter your surname"
                  style={{
                    backgroundColor: "transparent !important",
                  }}
                />
              </div>
              <p className="form__label-error">
                {errors.surname && errors.surname?.message}
              </p>
            </label>
          )}

          {location.pathname == "/register" && (
            <label htmlFor="phone" className="form__label">
              <span className="form__label-text">Phone</span>
              <div className="form__label-field">
                <span className="form__label-icon">
                  <RiPhoneFill />
                </span>
                <IMaskInput
                  {...register("phone", {
                    required: {
                      message: "Поле phone обязательно нужно заполнить",
                      value: true,
                    },
                    pattern: {
                      value: /^\+380\d{9}$/,
                      message: "Неверно введен номер телефона",
                    },
                  })}
                  mask="+380 (00) 000-00-00"
                  placeholder="+380 (__) ___-__-__"
                  className="form__label-input"
                  type="tel"
                  id="phone"
                  onAccept={(value) => {
                    const digits = value.replace(/\D/g, "");
                    setValue("phone", `+${digits}`);
                  }}
                />
              </div>
              <p className="form__label-error">
                {errors.phone && errors.phone?.message}
              </p>
            </label>
          )}

          <label htmlFor="password" className="form__label">
            <span className="form__label-text">Password</span>
            <div className="form__label-field">
              <span
                className="form__label-icon"
                onClick={() => setShowPass((prev) => !prev)}
              >
                {showPass ? <BsEyeFill /> : <BsEyeSlashFill />}
              </span>
              <input
                {...register("password", {
                  required: {
                    message: "Поле password обязательно нужно заполнить",
                    value: true,
                  },
                  pattern: {
                    value:
                      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                    message:
                      "Пароль должен содержать не менее 8 символов, заглавную букву, число!",
                  },
                })}
                className="form__label-input"
                type={showPass ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <p className="form__label-error">
              {errors.password && errors.password?.message}
            </p>
          </label>

          {location.pathname == "/register" && (
            <label htmlFor="confirmPassword" className="form__label">
              <span className="form__label-text">Confirm password</span>
              <div className="form__label-field">
                <span
                  className="form__label-icon"
                  onClick={() => setShowPassConfirm((prev) => !prev)}
                >
                  {showPassConfirm ? <BsEyeFill /> : <BsEyeSlashFill />}
                </span>
                <input
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === password.current || "Пароли не совпадают",
                  })}
                  className="form__label-input"
                  type={showPassConfirm ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                />
              </div>
              <p className="form__label-error">
                {errors.confirmPassword && errors.confirmPassword?.message}
              </p>
            </label>
          )}

          <button className="form__btn" type="submit">
            Login
          </button>
        </form>
      </div>
      <div className="form__right">
        <div className="form__right-inner">
          <img
            className="form__right-img"
            src={autorisation}
            alt="Картинка авторизации"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
