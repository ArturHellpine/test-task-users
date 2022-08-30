import React from 'react';
import UserFilter from "../components/UserFilter";
import Loader from "../components/UI/loader/Loader";
import UserList from "../components/UserList";
import {useEffect, useState} from "react";
import {useUsers} from "../hooks/useUsers";
import {useFetching} from "../hooks/useFetching";
import UsersApi from "../API/UsersAPI";
import Logout from "../components/Logout";

const Users = () => {
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query)
    const [fetchUsers, loader] = useFetching(async () => {
        const users = await UsersApi.getUsers()
        setUsers(users)
    })

    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div className='App'>
            <Logout />
            <UserFilter setFilter={setFilter} filter={filter} />
            {loader ? <Loader/> : <UserList users={sortedAndSearchedUsers} />}
        </div>
    );
};

export default Users;