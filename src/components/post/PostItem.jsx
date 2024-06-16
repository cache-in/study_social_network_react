import React from "react";
import UserImage from '../user/UserImage';

const PostItem = (props) => {
    const userID = props.user.id;
    const userName = props.user.fullName;
    return (
        <div className="col-sm-12">
            <div className="card card-block card-stretch card-height">
                <div className="card-body">
                    <div className="user-post-data">
                        <div className="d-flex justify-content-between">
                            {/* <div className="me-3">
                                <img className="rounded-circle img-fluid" src="../../public/img/01.jpg" alt=""/>
                            </div> */}
                            <UserImage userID={userID} src="../../public/img/01.jpg" />
                            <div className="w-100 ms-3">
                                <div className="d-flex justify-content-between">
                                <div className="">
                                    <h5 className="mb-0 d-inline-block">{userName}</h5>                                 
                                    <p className="mb-0 text-primary">Just Now</p>
                                </div>                              
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p>{props.message}</p>
                    </div>
                    {/* <div className="user-post">
                        <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                            <div className="row-span-2 row-span-md-1">
                                <img src="../../public/img/p2.jpg" alt="post-image" className="img-fluid rounded w-100"/>
                            </div>
                            <div className="row-span-1">
                                <img src="../../public/img/p1.jpg" alt="post-image" className="img-fluid rounded w-100"/>
                            </div>
                            <div className="row-span-1 ">
                                <img src="../../public/img/p3.jpg" alt="post-image" className="img-fluid rounded w-100"/>
                            </div>
                        </div>
                    </div>                   */}
                </div>
            </div>
        </div>
    );
}

export default PostItem;