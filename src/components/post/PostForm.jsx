import React from "react";
import formStyle from './PostForm.module.css';
import UserImage from '../user/UserImage';

const PostForm = (props) => {

    const updateText = (e) => {
        // debugger;
        const text = e.target.value;

        props.updateText(text);
    }

    console.log(props);
    const userID = props.user.id;
    return (
        <div className="col-sm-12">
            <div id="post-modal-data" className="card card-block card-stretch card-height">
                <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h4 className="card-title">Create Post</h4>
                </div>
                </div>
                <div className="card-body">
                <div className="d-flex align-items-center">
                    <UserImage userID={userID} src="../../public/img/01.jpg" />
                    <form className="post-text ms-3 w-100">
                        <input 
                            type="text" 
                            onInput={updateText}
                            value={props.newText} 
                            className={"form-control rounded " + formStyle.textArea} 
                            placeholder="Write something here..."/>
                        {/* <textarea></textarea> */}
                    </form>
                </div>
                {/* <hr>                  */}
                </div>  
                <div className={formStyle.btnWrapper}>
                    <button onClick={props.createPost} className="btn btn-primary d-block">Send</button>             
                </div>
            </div>
        </div>
    );
}

export default PostForm;