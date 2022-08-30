import React from 'react';
import Select from "./UI/select/Select";
import Input from "./UI/input/Input";

const UserFilter = ({filter, setFilter}) => {
    return (
        <div style={{justifyContent: 'space-between', display: 'flex'}}>
            <Select
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортувати по'
                options={[
                    {value: 'name', name: 'По імені'},
                    {value: 'email', name: 'По почті'}
                ]}
            />
            <Input
                onChange={event => setFilter({...filter, query: event.target.value})}
                value={filter.query}
                type='text'
                placeholder='Пошук...'
            />
        </div>
    );
};

export default UserFilter;