import React from 'react';
import Button from "./UI/button/Button";
import {useNavigate} from 'react-router-dom'

const UserItem = ({users}) => {
    const router = useNavigate()
    return (
        <div className='users'>
            <div className='user__content'>
                <div style={{marginBottom: '15px'}} className='user__name'>{users.id}. {users.name} </div>
                <div className='user__email'>
                    {users.email}
                </div>
            </div>
            <Button onClick={() => router(`/users/${users.id}`)}>Детальна інформація</Button>
        </div>
    );
};

export default UserItem;