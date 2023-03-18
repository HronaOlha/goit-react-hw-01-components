import css from './FriendsList.module.css';

export const FriendsList = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      {/* СТИЛІ В СSS до цього спану */}
      <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};
