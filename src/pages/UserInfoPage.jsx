import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Button from "../components/UI/button/Button";
import usersAPI from "../API/UsersAPI";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";

const UserInfoPage = () => {
    const [users, setUsers] = useState({})
    const params = useParams()
    const router = useNavigate()
    const [fetchUserInfo, loader] = useFetching(async () => {
        const usersInfo = await usersAPI.getUsersById(params.id)
        setUsers(usersInfo)
    })

    useEffect(() => {
        fetchUserInfo()
    }, [])
    return (
        <>
            <Button
                onClick={() => router('/users')}
                style={{position: 'absolute', left: '20px', padding: '10px 15px'}}>
                Назад
            </Button>

            <div style={{color: '#E7EAED', fontFamily: 'cursive'}}>
                <h1>Сторінка користувача № {params.id}</h1>
                {loader ? <Loader /> :
                    <div style={{textAlign: 'center', marginTop: '40px', fontFamily: 'italic'}}>
                        <h2>Name - {users.name}. {users.username}</h2>
                        <h2>Email - {users.email}</h2>
                        <h3>Phone - {users.phone}</h3>
                        <h3>Website - {users.website}</h3>
                    </div>

                }
            </div>
        </>
    );
};

export default UserInfoPage;