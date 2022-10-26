import PropTypes from "prop-types";
import { FriendListItem } from '../friendList/FriendListItem';

export const FriendList=({friends})=>{
    return(
        <ul>
            {friends.map(({avatar, name, isOnline, id})=>{
                return(
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
            key={id}
          />
                );
            })}
        </ul>
         );
        };

        FriendList.propTypes = {
            friends: PropTypes.arrayOf(
              PropTypes.exact({
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                isOnline: PropTypes.bool.isRequired,
                id: PropTypes.number.isRequired,
              })
            ),
          };