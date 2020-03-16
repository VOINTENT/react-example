import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
    let postElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostBody);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>

            <AddNewPostReduxForm onSubmit={onAddPost}/>

            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
};

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div >
                <Field name={"newPostBody"} component={TextArea} validate={[required, maxLength10]} placeholder={"New post"}/>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </form>
    );
};

const AddNewPostReduxForm = reduxForm({form: 'newPost'})(AddNewPostForm);

export default MyPosts;