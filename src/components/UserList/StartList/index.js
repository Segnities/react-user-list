import React from 'react';
import UserListItem from "../UserListItem";

const StartList = (props) => {
    const {startUsersList} = props;
    return (
        <>
            {startUsersList.map(user => (<UserListItem user={user} key={user.id}/>))}
        </>
    );
};

export default StartList;