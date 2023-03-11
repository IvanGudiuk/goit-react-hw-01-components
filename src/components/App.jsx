import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './Transactions/Transactions';
import user from '../user.json';
import data from '../data.json';
import list from '../friends.json';
import trans from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        fontSize: 40,
        color: '#010101',
        overflow: 'scroll',
        padding: '20px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload Stats'} stats={data} />
      <FriendList friends={list} />
      <Transactions transactions={trans} />
    </div>
  );
};
