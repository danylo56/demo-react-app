import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png"
import Preloader from '../Common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount, onPageChanged, pageSize, users, ...props}) => {


    if (props.isFetching) return (
        <div>
            <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount}
                       onPageChanged={onPageChanged} pageSize={pageSize} portionSize={10}/>
            <Preloader/>
        </div>
    )

    return (
        <div>
            <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount}
                       onPageChanged={onPageChanged} pageSize={pageSize} portionSize={10}/>
            {
                users.map(u =>
                    <User user={u} follow={props.follow} unfollow={props.unfollow}
                          followingInProgress={props.followingInProgress}/>
                )
            }
        </div>
    );
}

export default Users;