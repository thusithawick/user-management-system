import UserData from "./UserData";
import UserFilter from "./UserFilter/UserFilter";
import styles from "./UserList.module.css";

function UserList(props) {
    return (
        <div className="container">
            <div className="row">
                <div
                    className={`${styles["user-list-block"]} col-md-10 offset-md-1`}
                >
                    <UserFilter openAddUser={props.openAddUser}></UserFilter>
                    <UserData
                        usersList={props.usersList}
                        openUpdateUser={props.openUpdateUser}
                    ></UserData>
                </div>
            </div>
        </div>
    );
}

export default UserList;
