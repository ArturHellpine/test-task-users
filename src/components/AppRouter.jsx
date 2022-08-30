import React, {useContext} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Users from "../pages/Users";
import Login from "../pages/Login";
import UserInfoPage from "../pages/UserInfoPage";
import {AuthContext} from "../context/context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, loading} = useContext(AuthContext)
    if(loading) {
        return <Loader />
    }
    return (
        isAuth
            ?
        <Routes>
            <Route path={'/users'} element={<Users />}/>
            <Route path={'/users/:id'} element={<UserInfoPage />}/>
            <Route path='/*' element={<Navigate replace to='/users' />}/>
        </Routes>
            :
        <Routes>
            <Route path={'/login'} element={<Login />}/>
            <Route path='/*' element={<Navigate replace to='/login' />}/>
        </Routes>
    );
};

export default AppRouter;