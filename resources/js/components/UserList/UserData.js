function UserData(props) {
    const data = props.usersList.map((user) => {
        const userUpdateHandler = () => {
            //console.log('user update clicked');
            console.log(user);
            props.openUpdateUser(user);
        };

        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile_no}</td>
                <td>{user.age}</td>
                <td className="">
                    <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        style={{ float: "right" }}
                        onClick={userUpdateHandler}
                    >
                        <i className="fa fa-eye"></i> View
                    </button>
                </td>
            </tr>
        );
    });
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Age</th>
                        <th style={{textAlign: "right"}}>Action</th>
                    </tr>
                </thead>
                <tbody>{data}</tbody>
            </table>
        </div>
    );
}

export default UserData;
