import React from 'react';
import s from "./Friend.module.css";


const Friend = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.pngfind.com/pngs/m/350-3508795_link-to-user-register-transparent-student-logo-png.png" alt="Profile Photo"/>
            <p>{props.name}</p>
        </div>
    );
}

export default Friend;