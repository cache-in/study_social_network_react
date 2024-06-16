import React from 'react';
import PostForm from './post/PostForm';
import PostItem from './post/PostItem';

const Dialogs = (props) => {
    return (
        <div className="col-lg-8 row с p-0">
            <div className="col-sm-12">
                <PostForm user={props.user}/>  
            </div>                 
        </div>
    );
}

export default Dialogs;