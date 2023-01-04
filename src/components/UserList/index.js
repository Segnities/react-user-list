import React from 'react';

import StartList from "./StartList";
import FiltredList from "./FiltredList";

import "./index.scss";

const UserList = (props) => {
    const {query, startUsersList, searchUser} = props;

    return (
        <div className={"p-2"}>
            {query.split('').filter(it => it != ' ').join('') === ''
                ?
                <StartList startUsersList={startUsersList}/>
                :
                <FiltredList searchUser={searchUser}/>
            }
        </div>
    );
}
export default UserList;