import css from '../friendList/FriendListItem.module.css';
import PropTypes from "prop-types";

export const FriendListItem =({avatar, name, isOnline, id})=>{
    return (
        <li className={css.item} key={id}>
        <span className={isOnline ? css.statusOnLine : css.statusOffLine }></span>
        <img className={css.avatar} 
        src={avatar} 
        alt={'User avatar'} 
        width="48" />
        <p className={css.name}>{name}</p> 
        </li>
    )
}
FriendListItem.propTypes={
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
    id:PropTypes.number.isRequired,

}