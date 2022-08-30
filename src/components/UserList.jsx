import React from 'react';
import UserItem from "./UserItem";

const UserList = ({users}) => {

    if(users.length === 0) {
        return (
            <h1 style={{textAlign: 'center', fontFamily: 'cursive'}}>Користувачів не знайдено</h1>
        )
    }
    return (
        <div>
            <h1 style={{fontFamily: 'cursive', textAlign: 'center'}}>Список користувачів</h1>
            {users.map((user, index) =>
                <UserItem users={user} key={index} />
            )}
        </div>
    );
};

export default UserList;