import Section from './components/Section/Section';

import Profile from './components/Profile/Profile';
import user from './json/user.json';

import FriendList from './components/FriendsList/FriendList';
import friends from './json/friends.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './json/statistical-data.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './json/transactions.json';

function App() {
  return (
    <>
      <Section title="Профиль в соцсети">
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Section>

      <Section title="Список друзей">
        <FriendList items={friends} />
      </Section>

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <Section title="История транзакций">
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}

export default App;
