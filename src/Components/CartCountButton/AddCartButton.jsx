import { CustomContext } from "../../config/contex/CustomContext";
import { Children } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AddCartButton = ({ item, className, children }) => {
  const { addCarts, user } = useContext(CustomContext);
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if ("id" in user) addCarts(item);
        else navigate("/register");
      }}
    >
      {children}
    </button>
  );
};

export default AddCartButton;
