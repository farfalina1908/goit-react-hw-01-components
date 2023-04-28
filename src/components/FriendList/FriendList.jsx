import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({friends }) => {
    return (
        <ul className={css.friendList}>
    {friends.map(friend => (
<FriendListItem key = {friend.id} friend = {friend}/>))}
  
    </ul>
    );
    
    }
    
    FriendList.propTypes = {
        friends: PropTypes.arrayOf(
                 PropTypes.shape(
                {
                    avatar: PropTypes.string.isRequired, 
                    name: PropTypes.string.isRequired, 
                    isOnline: PropTypes.bool.isRequired,
                    id: PropTypes.number.isRequired,
                }
            ).isRequired
        ).isRequired,
    };  