import { useContext } from "react";
import { RiUser3Fill, RiUser3Line } from "react-icons/ri";
import { CustomContext } from "../../../../config/contex/CustomContext";

export const UserStatys = () => {
  const { user } = useContext(CustomContext);
  return user?.email ? <RiUser3Fill title="Мой аккаунт" /> : <RiUser3Line />;
};
