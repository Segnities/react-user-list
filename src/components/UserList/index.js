import React from 'react';

import UserListItem from "./UserListItem";

import {TransitionGroup, CSSTransition} from "react-transition-group";

import "./index.scss";

const UserList = (props) => {
    const {query, startUsersList, searchUser, deleteUser, theme, modal, setModal, setUser} = props;
    const emptyQuery = query.split('').filter(it => it != ' ').join('') === '';

    return (
        <div className={"px-4 py-2"}>
            {
                !emptyQuery && searchUser.length === 0 ? <h3>Users  not found!</h3> : null
            }
            {emptyQuery
                ?
                (
                    <TransitionGroup className={"users-list"}>
                        {
                            startUsersList.map(user => (
                                <CSSTransition key={user.id} classNames={"user"} timeout={800}>
                                    <UserListItem user={user} key={user.id} deleteUser={deleteUser} theme={theme}
                                                  modal={modal} setModal={setModal} setUser={setUser}/>
                                </CSSTransition>))
                        }
                    </TransitionGroup>
                )
                :
                (
                    <TransitionGroup>
                        {
                            searchUser.length !== 0 &&
                            searchUser.slice(0, 8).map((user) => (
                                <CSSTransition key={user.id} classNames={"user"} timeout={800}>
                                    <UserListItem user={user} key={user.id} deleteUser={deleteUser} theme={theme}
                                                  modal={modal} setModal={setModal} setUser={setUser}/>
                                </CSSTransition>))
                        }
                    </TransitionGroup>
                )
            }
        </div>
    );
}
export default UserList;