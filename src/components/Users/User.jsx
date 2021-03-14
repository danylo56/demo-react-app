import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import styles from "./Users.module.css";

const User = ({user, followingInProgress, follow, unfollow, ...props}) => {
    return (
        <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}><img
                        src={user.photos.small != null ? user.photos.small : userPhoto}
                        className={styles.usersPhoto}/></NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                            }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                            }}>Follow</button>}
                        </div>
                    </span>

            <span>
                <span>
                    <div>{user.name}</div><div>{user.status}</div>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
            </span>
        </div>
    )
}

export default User;