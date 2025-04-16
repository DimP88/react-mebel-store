import React, { useContext } from "react";
import { CustomContext } from "../../config/contex/CustomContext";
import { GoHeart, GoHeartFill } from "react-icons/go";

const FavoritesIcon = ({ item, onClick }) => {
  const { favorites } = useContext(CustomContext);

  const isFavorite = favorites.some((elem) => elem.id === item.id);

  return (
    <span onClick={onClick}>
      {isFavorite ? <GoHeartFill fill="#245462" /> : <GoHeart />}
    </span>
  );
};

export default FavoritesIcon;
