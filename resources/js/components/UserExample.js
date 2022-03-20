import React, { useState } from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import UserList from "./UserList/UserList";
import UserLogin from "./UserLogin/UserLogin";
import UserCreateModal from "./UserList/UserCreateModal";
import UserUpdateModal from "./UserList/UserUpdateModal";

const PREDEFINED_USERS = [
    {
        id: 1,
        name: "Thusitha wickramasinghe",
        email: "thusitha@gmail.com",
        age: 29,
        mobile_no: "0773709646",
    },
];

function UserExample() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [addUserModalStatus, setAddUserModalStatus] = useState(false);
    const [updateUserModalStatus, setUpdateUserModalStatus] = useState(false);
    const [usersList, setUsersList] = useState(PREDEFINED_USERS);
    const [selectedUser, setSelectedUser] = useState(null);

    const loginStatusChangeHandler = () => {
        setIsLoggedIn(true);
    };

    const logoutStatusChangeHandler = () => {
        setIsLoggedIn(false);
    };

    if (!isLoggedIn) {
        return <UserLogin loginStatusChange={loginStatusChangeHandler} />;
    }

    const addUserModalCloseHandler = () => {
        setAddUserModalStatus(false);
    };

    const updateUserModalCloseHandler = () => {
        setUpdateUserModalStatus(false);
    };

    const addUserModalOpenHandler = () => {
        setAddUserModalStatus(true);
    };

    const updateUserModalOpenHandler = (user) => {
        setSelectedUser(user);
        setUpdateUserModalStatus(true);
    };

    return (
        <>
            <NavBar logoutStatusChange={logoutStatusChangeHandler} />
            <UserList
                usersList={usersList}
                openAddUser={addUserModalOpenHandler}
                openUpdateUser={updateUserModalOpenHandler}
            />
            {addUserModalStatus && (
                <UserCreateModal closeModal={addUserModalCloseHandler} />
            )}
            {updateUserModalStatus && (
                <UserUpdateModal closeModal={updateUserModalCloseHandler} selectedUser={selectedUser}/>
            )}
        </>
    );
}

export default UserExample;

if (document.getElementById("user-example")) {
    ReactDOM.render(<UserExample />, document.getElementById("user-example"));
}
