import React from 'react';

const UserImage = (props) => {
    return (
        <div className="user-img">
            <img src={props.src} alt="userimg" className="avatar-60 rounded-circle"/>
        </div>
    );
}

export default UserImage;