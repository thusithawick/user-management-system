import styles from "./NavBar.module.css";

function NavBar(props) {

    /*What happen when user click login button */
    const logoutButtonHandler = () =>{
        console.log('Logout button clicked');
        props.logoutStatusChange();
    }

    return (
        <nav className="navbar bavbar-light bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    <span className={styles.brand}><i className="fa fa-users"></i> User Management System</span>
                </span>
                <form className="d-flex">
                    <button type="button" className="btn btn-primary">
                        <i className="fa fa-user"></i> {props.userName}
                    </button>
                    <button onClick={logoutButtonHandler} type="button" className="btn btn-primary">
                        <i className="fa fa-lock"></i> Logout
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;
