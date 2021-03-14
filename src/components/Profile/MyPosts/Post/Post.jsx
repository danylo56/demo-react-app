import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.dialog}>
            <div className={s.postContainer}>
                <img src="https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png" alt="avatar"/>
                <span className={s.message}>{props.text}</span>
            </div>
            <div>
                <span className={s.likeBtn}>like <span>{props.likesCount}</span></span>
            </div>
        </div>
    );
}

export default Post;