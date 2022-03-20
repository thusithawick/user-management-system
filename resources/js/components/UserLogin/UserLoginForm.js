function UserLoginForm(props) {

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        console.log('Login form submited');
        props.loginStatusChange();
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor='email' className="form-label">Email</label>
                    <input id="email" type='email' className="form-control" placeholder="Email"/>
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type='password' className="form-control" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa fa-sign-in-alt"></i> Login</button>
            </form>
        </div>
    );
}

export default UserLoginForm;
