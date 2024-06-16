import React from 'react';
import PostForm from './post/PostForm';
import PostItem from './post/PostItem';

const Profile = (props) => {
    const createNewPost = props.profilePage.createNewPost;
    const updateText = props.profilePage.updateText;
    const newText = props.profilePage.newText;

    let posts = props.profilePage.posts.map(postData => {
        return <PostItem user={props.user} key={postData.id} message={postData.message} />
    });

    return (
        <div className="col-lg-8 row с p-0">            
            <PostForm 
                user={props.user} 
                createPost={createNewPost} 
                updateText={updateText}
                newText={newText}
            />  
            {posts}
        </div>
    );
}

export default Profile;