import React, {useEffect, useState, useMemo} from "react";

import Header from "./components/UI/Header";
import UserList from "./components/UserList";

import data from "./data/MOCK_DATA.json";

import "./App.scss";

function App() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState({
        query: "",
        selectLimit: ""
    });
    const [limit, setLimit] = useState(25);
    const [theme, setHeaderTheme] = useState('primary');

    const onLogoClick = () => {
        if (theme === 'primary') {
            setHeaderTheme('dark');
        } else {
            setHeaderTheme('primary');
        }
    }

    const onChangeLimit = (value) => {
        if(value === 'all') {
            setLimit(users.length);
        } else {
            setLimit(parseInt(value));
        }
    }

    const searchUser = useMemo(() => {
        return [...users].filter(user => user.email.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query]);

    const deleteUser = (usr) => {
        setUsers(users.filter(user => user.id !== usr.id));
        alert(`User ${usr.first_name} ${usr.last_name} with email ${usr.email} was deleted!`);
    }


    useEffect(() => {
        setUsers(data);
    }, []);

    return (
        <div className="App">
            <Header filter={filter} setFilter={setFilter} onLogoClick={onLogoClick} theme={theme} onChangeLimit={onChangeLimit}/>
            <main className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
                <h2 className={`text-start mx-4 py-3 ${ theme === 'dark' ? "dark-header-2": "light-header-2"}`}>Find user:</h2>
                <UserList query={filter.query} startUsersList={[...users].slice(0, limit)} searchUser={searchUser} deleteUser={deleteUser} theme={theme}/>
            </main>
        </div>
    )
        ;
}

export default App;
