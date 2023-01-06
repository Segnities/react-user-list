import React, {useEffect, useState, useMemo} from "react";

import Header from "./components/UI/Header";
import UserList from "./components/UserList";

import {RedactModal} from "./components/UI/Modals";

import data from "./data/MOCK_DATA.json";

import "./App.scss";

function App() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState({
        query: "",
        selectLimit: "25",
        selectQuery: "email"
    });
    const [limit, setLimit] = useState(25);
    const [theme, setHeaderTheme] = useState('primary');
    const [modal, setModal] = useState({
        redact: false,
        delete: false
    });
    const [user, setUser] = useState({});

    const mainStyles = `wrapper ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`;
    const headerStyles = `text-start mx-4 py-3 ${theme === 'dark' ? "dark-header-2" : "light-header-2"}`;

    const onLogoClick = () => {
        if (theme === 'primary') {
            setHeaderTheme('dark');
        } else {
            setHeaderTheme('primary');
        }
    }

    const onChangeLimit = (value) => {
        if (value === 'all') {
            setLimit(users.length);
        } else {
            setLimit(parseInt(value));
        }
    }

    const searchUser = useMemo(() => {
        return [...users].filter(user => user[filter.selectQuery].toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, filter.selectQuery]);

    const deleteUser = (usr) => {
        const confirmDeleteUser = window.confirm("Press OK to confirm delete of user");
        if (confirmDeleteUser) {
            setUsers(users.filter(user => user.id !== usr.id));
            alert(`User ${usr.first_name} ${usr.last_name} with email ${usr.email} was deleted!`);
        }
    }

    const redactUser = (usr) => {
        setUsers(users.map(user => {
            if(user.id === usr.id) {
                return usr;
            } else {
                return user;
            }
        }));
    }


    useEffect(() => {
        setUsers(data);
    }, []);

    return (
        <div className="App">
            {
                modal.redact &&  <RedactModal modal={modal} setModal={setModal} user={user} setUser={setUser} redactUser={redactUser}/>
            }
            <Header filter={filter} setFilter={setFilter} onLogoClick={onLogoClick} theme={theme}
                    onChangeLimit={onChangeLimit}/>
            <main className={mainStyles}>
                <h2 className={headerStyles}>Find user:</h2>
                <UserList query={filter.query} startUsersList={[...users].slice(0, limit)} searchUser={searchUser}
                          deleteUser={deleteUser} theme={theme} modal={modal} setModal={setModal} setUser={setUser}/>
            </main>
        </div>
    )
        ;
}

export default App;
