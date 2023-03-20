import PropTypes from 'prop-types';

import { OnlineStatus } from './FriendList.styled';

export const FriendsList = ({ avatar, name, isOnline }) => {
  return (
    <>
      <OnlineStatus isOnline={isOnline}></OnlineStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
