import React from 'react';
import {Routes, Route} from "react-router-dom";
import Profile from './Profile';
import Dialogs from './Dialogs';

const Content = (props) => {  
    // debugger;
    const state = props.store.getState();
    let profilePage = state.profilePage;  
    let dialogsPage = state.dialogsPage;  
    let users = state.user.users;  
    let currentUser = state.user.getCurrentUser();
    const dispatch = props.store.dispatch.bind(props.store);
    // debugger;
    return (
        <div className="content-page">
            <div className="container">
                <div className="row">                    
                    <Routes>
                        <Route
                            element={<Profile user={currentUser} profilePage={profilePage} dispatch={dispatch}/>}
                            // render={ () => 
                            //     <Profile user={currentUser} profilePage={profilePage} dispatch={props.dispatch}/>
                            // }
                            path="/"                            
                            
                        />  
                        <Route
                            // render={ () => 
                            //     <Dialogs user={currentUser} users={users} posts={dialogsPage}/>
                            // }
                            element={<Dialogs user={currentUser} users={users} posts={dialogsPage} dispatch={dispatch}/>}
                            path="/dialogs"                           
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Content;