import {Profile} from './profile/profile';
import user from '../data/user.json'
import css from '../common/App.module.css'


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
       </div>
  )  
  
};
