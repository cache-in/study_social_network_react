import React from "react";
import formStyle from './PostForm.module.css';
import UserImage from '../user/UserImage';

const PostForm = (props) => {
    return (
        <div id="post-modal-data" className="card card-block card-stretch card-height">
            <div className="card-header d-flex justify-content-between">
            <div className="header-title">
                <h4 className="card-title">Create Post</h4>
            </div>
            </div>
            <div className="card-body">
            <div className="d-flex align-items-center">
                <UserImage src="../../public/img/1.jpg" />
                <form className="post-text ms-3 w-100">
                    <input type="text" className={"form-control rounded " + formStyle.textArea} placeholder="Write something here..."/>
                    {/* <textarea></textarea> */}
                </form>
            </div>
            {/* <hr>                  */}
            </div>               
        </div>
    );
}

export default PostForm;