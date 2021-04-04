import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Bob Odenkirk',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Bob_Odenkirk_by_Gage_Skidmore_2.jpg',
            places: 3
        }
    ]
    return <UsersList items={USERS} />;
}

export default Users;