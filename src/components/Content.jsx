import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from './Profile';
import Dialogs from './Dialogs';

const Content = () => {
    return (
        <div className="content-page">
            <div className="container">
                <div className="row">
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Profile/>} path="/"/>
                            <Route element={<Dialogs/>} path="/dialogs"/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default Content;