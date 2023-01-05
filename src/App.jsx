import React, {useEffect, useState, useMemo} from "react";

import Header from "./components/UI/Header";
import UserList from "./components/UserList";

import data from "./data/MOCK_DATA.json";

import "./App.scss";

function App() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState({
        query: "",
        select: ""
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

    useEffect(() => {
        setUsers(data);
    }, []);

    return (
        <div className="App">
            <Header filter={filter} setFilter={setFilter} onLogoClick={onLogoClick} theme={theme} onChangeLimit={onChangeLimit}/>
            <main>
                <h2 className="text-start mx-4 p-3">Find user:</h2>
                <UserList query={filter.query} startUsersList={[...users].slice(0, limit)} searchUser={searchUser}/>
            </main>
        </div>
    )
        ;
}

export default App;
