import React from 'react';

import StartList from "./StartList";
import FiltredList from "./FiltredList";
import UserListItem from "./UserListItem";

import "./index.scss";

const UserList = (props) => {
    const {query, startUsersList, searchUser, deleteUser, theme, modal, setModal, setUser} = props;

    return (
        <div className={"px-4 py-2"}>
            {query.split('').filter(it => it != ' ').join('') === ''
                ?
                <StartList>
                    {startUsersList.map(user => (
                        <UserListItem user={user} key={user.id} deleteUser={deleteUser} theme={theme}
                                      modal={modal} setModal={setModal} setUser={setUser}/>))}
                </StartList>
                :
                <FiltredList>
                    {
                        searchUser.length !== 0 ?
                            searchUser.slice(0, 8).map((user) => (
                                <UserListItem user={user} key={user.id} deleteUser={deleteUser} theme={theme}
                                              modal={modal} setModal={setModal} setUser={setUser}/>))
                            :
                            <h3 className={'text-center'}>Users not found!</h3>
                    }
                </FiltredList>
            }
        </div>
    );
}
export default UserList;