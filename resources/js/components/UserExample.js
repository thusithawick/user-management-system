import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import UserList from "./UserList/UserList";
import UserLogin from "./UserLogin/UserLogin";
import UserCreateModal from "./UserList/UserCreateModal";
import UserUpdateModal from "./UserList/UserUpdateModal";
import axios from "axios";

const PREDEFINED_USERS = [//Predefined Placeholder array for user list
    {
        id: 1,
        name: "Thusitha wickramasinghe",
        email: "thusitha@gmail.com",
        age: 29,
        mobile_no: "0773709646",
    },
    {
        id: 2,
        name: "Gaveen Wickramasinghe",
        email: "gaveen@gmail.com",
        age: 29,
        mobile_no: "0773709646",
    },
];
const HOST = "http://localhost/user-management-app/";

function UserExample() {
    const [usersList, setUsersList] = useState(PREDEFINED_USERS);

    /*User Login and logged in user information */
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [userToken, setUserToken] = useState(null); //User token for bearer authentication

    /*Modal show/hide status */
    const [addUserModalStatus, setAddUserModalStatus] = useState(false);
    const [updateUserModalStatus, setUpdateUserModalStatus] = useState(false);

    /*Selected user for update user modal - Where user select row from user list (for update or delete) */
    const [selectedUser, setSelectedUser] = useState(null);

    /* Handle Login Function*/
    const doLogin = (email, password) => {
        console.log("login with email and password");
        axios
            .post(HOST + "api/user/login", {
                email: email,
                password: password,
            })
            .then(function (response) {
                setUserToken(response.data.token);
                setUserName(response.data.name);
                setIsLoggedIn(true);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    /* Handle Logout Function */
    const logoutStatusChangeHandler = () => {
        setIsLoggedIn(false);
    };

    /*Get All Users from Database - when user login */
    useEffect(() => {
        console.log("get all users");
        if (isLoggedIn) {
            axios
                .post(
                    HOST + "api/user/all",
                    {},
                    { headers: { Authorization: `Bearer ${userToken}` } } //We use bearer authentication here
                )
                .then(function (response) {
                    setUsersList(response.data.users);
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [isLoggedIn]); //User list will load when user login

    /*Show login screen if user is not logged in */
    if (!isLoggedIn) {
        return <UserLogin doLogin={doLogin} />;
    }

    /*Handler for Add User/ Update User modals */
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
            <NavBar
                logoutStatusChange={logoutStatusChangeHandler}
                userName={userName}
            />
            <UserList
                usersList={usersList}
                openAddUser={addUserModalOpenHandler}
                openUpdateUser={updateUserModalOpenHandler}
            />
            {addUserModalStatus && (
                <UserCreateModal closeModal={addUserModalCloseHandler} />
            )}
            {updateUserModalStatus && (
                <UserUpdateModal
                    closeModal={updateUserModalCloseHandler}
                    selectedUser={selectedUser}
                />
            )}
        </>
    );
}

export default UserExample;

if (document.getElementById("user-example")) {
    ReactDOM.render(<UserExample />, document.getElementById("user-example"));
}
