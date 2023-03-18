import { FriendsList } from '../FriendsList/FriendsList';

export const Friends = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <FriendsList friend={friend} />
        </li>
      ))}
    </ul>
  );
};
