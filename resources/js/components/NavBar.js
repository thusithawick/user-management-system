function NavBar(props) {

    const logoutButtonHandler = () =>{
        console.log('Logout button clicked');
        props.logoutStatusChange();
    }

    return (
        <nav className="navbar bavbar-light bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    <i className="fa fa-key"></i> User Management Sample
                </span>
                <form className="d-flex">
                    <button type="button" className="btn btn-primary">
                        <i className="fa fa-user"></i> Admin
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
