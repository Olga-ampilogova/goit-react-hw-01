import css from "./FriendList.module.css";
import clsx from "clsx";

export const FriendList = ({ friends: { avatar, name, isOnline } }) => {
  const modeClass = clsx(isOnline ? css.primary : css.offline);
  let mode = "Offline";
  if (isOnline) {
    mode = "Online";
  }
  return (
    <div className={css.box}>
      <img src={avatar} alt="Avatar" width="80" className={css.img} />
      <p className={css.name}>{name}</p>
      <p className={modeClass}>{mode}</p>
    </div>
  );
};
