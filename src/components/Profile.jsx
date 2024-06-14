import React from 'react';
import PostForm from './post/PostForm';
import PostItem from './post/PostItem';

const Profile = () => {
    return (
        <div className="col-lg-8 row с p-0">
            <div className="col-sm-12">
                <PostForm /> 
            </div>
            <div className="col-sm-12">
                <PostItem /> 
            </div>         
        </div>
    );
}

export default Profile;