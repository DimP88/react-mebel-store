import { CustomContext } from "../../config/contex/CustomContext";
import { useContext } from "react";

const CartCountButton = ({ item, className }) => {
  const { user, addCartCountPlus, removeCartCountMinus } =
    useContext(CustomContext);

  return (
    <div className="card__sizes-count">
      <button
        className={className}
        type="button"
        onClick={() => removeCartCountMinus(item.id)}
      >
        -
      </button>
      <span>{user.carts.find((el) => el.id === item.id).count}</span>
      <button
        className={className}
        type="button"
        onClick={() => addCartCountPlus(item.id)}
      >
        +
      </button>
    </div>
  );
};

export default CartCountButton;
