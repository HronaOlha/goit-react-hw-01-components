import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from './components/FriendsList/FriendsList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import data from 'data/data.json';
import friendsInfo from 'data/friends.json';
import transactionsInfo from 'data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friendsInfo} />
      <TransactionHistory items={transactionsInfo} />
    </div>
  );
};
