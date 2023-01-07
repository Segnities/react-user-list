import React from 'react';

import UserListItem from "./UserListItem";

import {TransitionGroup, CSSTransition} from "react-transition-group";

import "./index.scss";

const UserList = (props) => {
    const {query, startUsersList, searchUser, deleteUser, theme, modal, setModal, setUser} = props;

    return (
        <div className={"px-4 py-2"}>
            {
                searchUser.length === 0 && <h3 className={'text-center'}>Users not found!</h3>
            }
            {query.split('').filter(it => it != ' ').join('') === ''
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