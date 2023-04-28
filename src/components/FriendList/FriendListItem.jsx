import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
    return (
    <li className={css.item}>
    <span 
    style={{ backgroundColor: isOnline ? 'green' : 'red' }}
    className={css.status}></span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>
    )

}

FriendListItem.propTypes = {
   
        friend: PropTypes.shape(
            {
                avatar: PropTypes.string.isRequired, 
                name: PropTypes.string.isRequired, 
                isOnline: PropTypes.bool.isRequired,
                id: PropTypes.number.isRequired,
            }
        ).isRequired,
    
};