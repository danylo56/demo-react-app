import React from 'react';
import Friend from "./Friend/Friend";
import s from "./Friends.module.css";

const Friends = (props) => {

    let friendsElements = props.sidebar.friends.map((p) => <Friend name={p.name}/>)

    return (
        <div>
            <h2>Friends</h2>
            <div className={s.row}>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friends;