import PropTypes from 'prop-types';

import { OnlineStatus } from './FriendsListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <OnlineStatus onlineStatus={isOnline}></OnlineStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
