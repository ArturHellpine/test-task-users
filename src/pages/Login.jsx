import React, {useContext} from 'react';
import Input from "../components/UI/input/Input";
import {AuthContext} from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <>
            <h1 className='login'>Сторінка для входу</h1>
            <div className='form'>
                <form onSubmit={login}>
                    <Input style={{marginBottom: '10px', width: '250px'}} type='text' placeholder='Логін' />
                    <Input style={{width: '250px'}}  type='password' placeholder='Пароль' />
                    <button className='btn__submit'>Увійти</button>
                </form>
            </div>
        </>
    );
};

export default Login;