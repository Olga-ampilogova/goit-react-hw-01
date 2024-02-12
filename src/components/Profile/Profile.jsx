import css from "./Profile.module.css";
export const Profile = ({
  data: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className={css.container}>
      <div className={css.box}>
        <img className={css.img} src={avatar} alt="User avatar" />
        <p className={css.title}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          Followers
          <span className={css.span}>{followers}</span>
        </li>
        <li className={css.item}>
          Views
          <span>{views}</span>
        </li>
        <li className={css.item}>
          Likes
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
