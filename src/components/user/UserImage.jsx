import React from 'react';

const IMAGES_ROOT = '/public/img/';

const UserImage = (props) => {
    const id = props.userID < 10 ? '0'+props.userID : props.userID;
    const userLogoUrl = `${window.location.origin+IMAGES_ROOT+id}.jpg`;
    console.log(userLogoUrl)
    return (
        <div className="user-img">
            <img src={userLogoUrl} alt="userimg" className="avatar-60 rounded-circle"/>
            {/* <img src={props.src} alt="userimg" className="avatar-60 rounded-circle"/> */}
        </div>
    );
}

export default UserImage;