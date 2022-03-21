import { useState } from "react";
import { BASE_URL } from "../../Auth";

function UserCreate(props) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile_no: "",
        age: "",
        password: "",
    });

    const saveHandler = () => {
        axios
            .post(
                BASE_URL + "api/user/register",
                {
                    name: formData.name,
                    email: formData.email,
                    mobile_no: formData.mobile_no,
                    age: formData.age,
                    password: formData.password,
                },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } } //We use bearer authentication here
            )
            .then(function (response) {
                props.showMessage("User Created Successfully!");
                console.log('User Added');
                props.updateUserList();
                props.closeModal();
            })
            .catch(function (error) {
                props.showMessage(error.response.data.error);
                console.log(error);
            });
    };

    const cancelHandler = () => {
        props.closeModal();
    };

    const nameChangeHandler = (event) => {
        const newFormData = { ...formData, name: event.target.value };
        setFormData(newFormData);
    };

    const emailChangeHandler = (event) => {
        const newFormData = { ...formData, email: event.target.value };
        setFormData(newFormData);
    };

    const mobileNoChangeHandler = (event) => {
        const newFormData = { ...formData, mobile_no: event.target.value };
        setFormData(newFormData);
    };

    const ageChangeHandler = (event) => {
        const newFormData = { ...formData, age: event.target.value };
        setFormData(newFormData);
    };

    const passwordChangeHandler = (event) => {
        const newFormData = { ...formData, password: event.target.value };
        setFormData(newFormData);
    };

    return (
        <>
            <div className="modal-header">
                <h4>Add User</h4>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            onChange={nameChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={emailChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="mobile_no">
                            Mobile No
                        </label>
                        <input
                            id="mobile_no"
                            type="text"
                            className="form-control"
                            placeholder="Mobile No"
                            onChange={mobileNoChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="age">
                            Age
                        </label>
                        <input
                            id="age"
                            type="text"
                            className="form-control"
                            placeholder="Age"
                            onChange={ageChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={passwordChangeHandler}
                        />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button className="btn btn-success" onClick={saveHandler}>
                    <i className="fa fa-save"></i> Save
                </button>
                <button className="btn btn-primary" onClick={cancelHandler}>
                    <i className="fa fa-times"></i> Cancel
                </button>
            </div>
        </>
    );
}

export default UserCreate;
