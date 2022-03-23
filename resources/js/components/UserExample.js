import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import UserList from "./UserList/UserList";
import UserLogin from "./UserLogin/UserLogin";
import UserCreateModal from "./UserList/UserCreateModal";
import UserUpdateModal from "./UserList/UserUpdateModal";
import axios from "axios";
import { BASE_URL } from "./Auth";
import Notification from "./UI/Notification";
import TestTable from "./UserList/UserTable";
import UserTable from "./UserList/UserTable";

//Predefined Placeholder array for user list
const PREDEFINED_USERS = [
    // {
    //     id: 1,
    //     name: "Thusitha wickramasinghe",
    //     email: "thusitha@gmail.com",
    //     age: 29,
    //     mobile_no: "0773709646",
    // },
    // {
    //     id: 2,
    //     name: "Gaveen Wickramasinghe",
    //     email: "gaveen@gmail.com",
    //     age: 29,
    //     mobile_no: "0773709646",
    // },
];

function UserExample() {
    const [usersList, setUsersList] = useState(PREDEFINED_USERS);

    /*User Login and logged in user information */
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn")
    );
    const [userName, setUserName] = useState(localStorage.getItem("name"));
    const [userToken, setUserToken] = useState(localStorage.getItem("token")); //User token for bearer authentication

    /*Modal show/hide status */
    const [addUserModalStatus, setAddUserModalStatus] = useState(false);
    const [updateUserModalStatus, setUpdateUserModalStatus] = useState(false);

    /*Selected user for update user modal - Where user select row from user list (for update or delete) */
    const [selectedUser, setSelectedUser] = useState(null);

    /*Users List Filters and Sorting Params*/
    const [userParams, setUserParams] = useState({
        search: "",
        sort_by: "name",
    });

    /* Show Notification if this is true */
    const [showNotification, setShowNotification] = useState(false);
    const [message, setMessage] = useState("");

    const showMessage = (newMessage) => {
        setMessage(newMessage);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3500);
    };

    const changeSearchText = (search) => {
        setUserParams({ ...userParams, search: search });
    };

    /* Handle Login Function*/
    const doLogin = (email, password) => {
        console.log("login with email and password");
        axios
            .post(BASE_URL + "api/user/login", {
                email: email,
                password: password,
            })
            .then(function (response) {
                setUserToken(response.data.token);
                setUserName(response.data.name);
                localStorage.setItem("name", response.data.name);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("isLoggedIn", true);
                setIsLoggedIn(true);
                console.log(response.data);
                showMessage("Logged in successfully!");
            })
            .catch(function (error) {
                showMessage(error.response.data.error);
                console.log(error.response);
            });
    };

    /* Handle Logout Function */
    const logoutStatusChangeHandler = () => {
        setIsLoggedIn(false);
        localStorage.clear();
    };

    const updateUserList = () => {
        axios
            .post(
                BASE_URL + "api/user/all",
                userParams,
                { headers: { Authorization: `Bearer ${userToken}` } } //We use bearer authentication here
            )
            .then(function (response) {
                setUsersList(response.data.users);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    /*Get All Users from Database - when user login */
    useEffect(() => {
        console.log("get all users");
        if (isLoggedIn) {
            updateUserList();
        }
    }, [isLoggedIn, userParams]);
    //User list will load when user login

    /*Show login screen if user is not logged in */
    if (!isLoggedIn) {
        return (
            <>
                <UserLogin doLogin={doLogin} />
                <Notification
                    showNotification={showNotification}
                    message={message}
                />
            </>
        );
    }

    /*Handler for Add User/ Update User modals */
    const addUserModalCloseHandler = () => {
        console.log("close add user modal");
        setAddUserModalStatus(false);
    };

    const updateUserModalCloseHandler = () => {
        console.log("close update user modal");
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
                changeSearchText={changeSearchText}
            />
            {addUserModalStatus && (
                <UserCreateModal
                    closeModal={addUserModalCloseHandler}
                    updateUserList={updateUserList}
                    showMessage={showMessage}
                />
            )}
            {updateUserModalStatus && (
                <UserUpdateModal
                    closeModal={updateUserModalCloseHandler}
                    selectedUser={selectedUser}
                    updateUserList={updateUserList}
                    showMessage={showMessage}
                />
            )}
            <Notification
                showNotification={showNotification}
                message={message}
            />
        </>
    );
}

export default UserExample;

if (document.getElementById("user-example")) {
    ReactDOM.render(<UserExample />, document.getElementById("user-example"));
}
