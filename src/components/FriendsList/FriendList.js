import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} className={s.item}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
