import React from 'react';
// import PostForm from './post/PostForm';
import UserPosts from './post/UserPosts';
import PostFormContainer from './post/PostFormContainer';
import { ProfileProvider } from '../redux/profileContext';

const Profile = (props) => {
    // const newText = props.profilePage.newText;

    return (
        <ProfileProvider profileData={props.profilePage}>
            <div className="col-lg-8 row с p-0">            
                <PostFormContainer 
                    user={props.user} 
                    dispatch={props.dispatch} 
                    // newText={newText}
                />  
                <UserPosts 
                    posts={props.profilePage.posts} 
                    user={props.user} 
                />
            </div>
        </ProfileProvider>
    );
}

export default Profile;