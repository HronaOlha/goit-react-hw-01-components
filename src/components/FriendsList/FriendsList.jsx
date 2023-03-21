import PropTypes from 'prop-types';
import { FriendsListItem } from '../FriendsListItem/FriendsListItem';
import { List, Item } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id} className="item">
          <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} />
        </Item>
      ))}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
