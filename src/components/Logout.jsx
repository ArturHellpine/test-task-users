import React, {useContext} from 'react';
import Button from "./UI/button/Button";
import {AuthContext} from "../context/context";

const Logout = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div style={{position: 'absolute', right: '30px'}}>
            <Button style={{padding: '10px 20px'}} onClick={logout}>Вихід</Button>
        </div>
    );
};

export default Logout;