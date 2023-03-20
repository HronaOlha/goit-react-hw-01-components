import css from './App.module.css';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../user.json';
import data from '../data.json';
import friendsInfo from '../friends.json';
import transactionsInfo from '../transactions.json';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friendsInfo} />
      <TransactionHistory items={transactionsInfo} />
    </div>
  );
};
