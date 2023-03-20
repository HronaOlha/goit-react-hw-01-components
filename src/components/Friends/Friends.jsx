import PropTypes from 'prop-types';
import { FriendsList } from '../FriendsList/FriendsList';
import { List, Item } from './Friends.styled';

export const Friends = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id} className="item">
          <FriendsList avatar={avatar} name={name} isOnline={isOnline} />
        </Item>
      ))}
    </List>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
