import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {maxLength, required} from '../../../utills/validators/validators';
import {TextArea} from '../../Common/FormsControls/FormsControls';

const maxLength30 = maxLength(30) 

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[required, maxLength30]} component={TextArea} placeholder="Post message" name="newPostBody"/></div>
            <button type="submit">Add Post</button>
        </form>

    )
}

const NewPostFormRedux = reduxForm({form: "newPostForm"})(NewPostForm)


const MyPosts = React.memo(props => {
    console.log("RENDER")
    let postsElements = props.profilePage.posts.map(p => (<Post text={p.text} likesCount={p.likesCount}/>));

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostBody);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <NewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
});

export default MyPosts;