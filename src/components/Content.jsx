import React from 'react';
import {Routes, Route} from "react-router-dom";
import Profile from './Profile';
import Dialogs from './Dialogs';

const Content = (props) => {  
    let profilePage = props.store._state.profilePage;  
    let dialogsPage = props.store._state.dialogsPage;  
    let users = props.store._state.user.users;  
    let currentUser = props.store._state.user.getCurrentUser();
    // debugger;
    return (
        <div className="content-page">
            <div className="container">
                <div className="row">                    
                    <Routes>
                        <Route
                            element={<Profile user={currentUser} profilePage={profilePage}/>}
                            path="/"                            
                            
                        />  
                        <Route
                            element={<Dialogs user={currentUser} users={users} posts={dialogsPage}/>}
                            path="/dialogs"                           
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Content;