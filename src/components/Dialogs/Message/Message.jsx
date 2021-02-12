import React from "react";
import s from "./../Dialogs.module.css";


const Message = (props) => {

    let className = props.myMessage ? s.message + " " + s.right : s.message;

    return (
        <div className={className}>{props.text}</div>

    );
}

export default Message;