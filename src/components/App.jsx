import css from './App.module.css';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import userInfo from '../user.json';
import dataInfo from '../data.json';
import friendsInfo from '../friends.json';
import transactionsInfo from '../transactions.json';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile user={userInfo} />
      <Statistics title="Upload stats" stats={dataInfo} />
      <Friends friends={friendsInfo} />
      <TransactionHistory items={transactionsInfo} />
    </div>
  );
};
