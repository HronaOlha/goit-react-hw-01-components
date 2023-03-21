import PropTypes from 'prop-types';
// import css from './Profile.module.css';
import {
  Description,
  Avatar,
  UserProfile,
  Stats,
  Item,
  Username,
  Number,
} from './Profie.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <Avatar src={avatar} alt="User avatar" />
      <Description>
        <Username>{username}</Username>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <Item>
          <span>Followers</span>
          <Number>{stats.followers}</Number>
        </Item>
        <Item>
          <span>Views</span>
          <Number>{stats.views}</Number>
        </Item>
        <Item>
          <span>Likes</span>
          <Number>{stats.likes}</Number>
        </Item>
      </Stats>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
