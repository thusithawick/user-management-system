import { useState } from "react";

function UserLoginForm(props) {
    const [email, setEmail] = useState("thusitha@gmail.com");
    const [password, setPassword] = useState("12345678");

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Login form submited");
        props.doLogin(email, password);
    };

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={emailChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={passwordChangeHandler}
                    />
                </div>
                <button type="submit" className="btn btn-warning">
                    <i className="fa fa-sign-in-alt"></i> Login
                </button>
            </form>
        </div>
    );
}

export default UserLoginForm;
