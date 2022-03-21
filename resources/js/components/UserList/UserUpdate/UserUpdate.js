import { useState } from "react";
import { BASE_URL } from "../../Auth";

function UserUpdate(props) {
    const [formData, setFormData] = useState({
        id: props.selectedUser.id,
        name: props.selectedUser.name,
        email: props.selectedUser.email,
        mobile_no: props.selectedUser.mobile_no,
        age: props.selectedUser.age,
    });

    const saveHandler = () => {
        console.log('updating User');
        axios
            .post(
                BASE_URL + "api/user/update",
                {
                    id: props.selectedUser.id,
                    name: formData.name,
                    mobile_no: formData.mobile_no,
                    age: formData.age,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                } //We use bearer authentication here
            )
            .then(function (response) {
                console.log("User Updated");
                props.showMessage("User Updated Successfully!");
                props.updateUserList();
                props.closeModal();
            })
            .catch(function (error) {
                props.showMessage(error.response.data.error);
                console.log(error);
            });
    };

    const deleteHandler = () => {
        console.log('deleting User');
        axios
            .post(
                BASE_URL + "api/user/delete",
                {
                    id: props.selectedUser.id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                } //We use bearer authentication here
            )
            .then(function (response) {
                console.log("User Deleted");
                props.showMessage("User Deleted Successfully!");
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

    const mobileNoChangeHandler = (event) => {
        const newFormData = { ...formData, mobile_no: event.target.value };
        setFormData(newFormData);
    };

    const ageChangeHandler = (event) => {
        const newFormData = { ...formData, age: event.target.value };
        setFormData(newFormData);
    };

    return (
        <>
            <div className="modal-header">
                <h4>Update User</h4>
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
                            value={formData.name}
                            onChange={nameChangeHandler}
                        />
                        <input id="id" type="hidden" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            value={props.selectedUser.email}
                            readOnly
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
                            value={formData.mobile_no}
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
                            value={formData.age}
                            onChange={ageChangeHandler}
                        />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button className="btn btn-success" onClick={saveHandler}>
                    <i className="fa fa-save"></i> Save
                </button>
                <button className="btn btn-danger" onClick={deleteHandler}>
                    <i className="fa fa-trash"></i> Delete
                </button>
                <button className="btn btn-primary" onClick={cancelHandler}>
                    <i className="fa fa-times"></i> Cancel
                </button>
            </div>
        </>
    );
}

export default UserUpdate;
