// first task
import {Profile} from './profile/profile';
import user from '../data/user.json'
import css from '../common/App.module.css'
// second task
import stats from '../data/stats.json';
import { Statistics } from './Statistics/Statistics';
// third task
import { FriendList } from './friendList/FriendList';
import friends from '../data/friends.json'
// four task
import {TransactionHistory} from '../components/transactionHistory/TransactionHistory'
import transactions from '../data/transactions.json'



export const App = () => {
  return (
    <div className={css.main}> 
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      key={user.tag}
      />

      <Statistics
      data={stats}
      title='Upload stats'
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
       </div>
  )  
  
};
