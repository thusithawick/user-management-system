import UserLoginForm from "./UserLoginForm";
import styles from "./UserLogin.module.css";

function UserLogin(props) {
    return (
        <div className={styles["login-background"]}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className={styles["login-container"]}>
                            <div className={styles["login-header"]}>
                                <h1>User Login</h1>
                            </div>
                            <div className={styles["login-body"]}>
                                <UserLoginForm
                                    doLogin={props.doLogin}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;
