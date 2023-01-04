import React from 'react';
import UserListItem from "../UserListItem";

const FiltredList = (props) => {
    const {searchUser} = props;
    return (
        <>
            {
                searchUser.length !== 0 ?
                    searchUser.slice(0, 8).map((user) => (
                        <UserListItem user={user} key={user.id}/>))
                    :
                    <h3 className={'text-center'}>Users not found!</h3>
            }
        </>
    );
};

export default FiltredList;