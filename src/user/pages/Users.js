import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Max Schwarz',
            image: 'https://images.pexels.com/photos/6927305/pexels-photo-6927305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            places: 3
        },
        {
            id: 'u2',
            name: 'Bob Odenkirk',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Bob_Odenkirk_by_Gage_Skidmore_2.jpg',
            places: 3
        }
    ]
    return <UsersList items={USERS} />;
}

export default Users;