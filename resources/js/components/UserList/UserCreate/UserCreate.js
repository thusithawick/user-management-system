function UserCreate(props) {
    const saveHandler = () => {
        
    }
    const cancelHandler = () => {
        console.log("canceled");
        props.closeModal();
    }

    return (
        <>
            <div className="modal-header">
                <h4>Add User</h4>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input id="name" type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input id="email" type="text" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="mobile_no">Mobile No</label>
                        <input id="mobile_no" type="text" className="form-control" placeholder="Mobile No"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="age">Age</label>
                        <input id="age" type="text" className="form-control" placeholder="Age"/>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button className="btn btn-success"><i className="fa fa-save"></i> Save</button>
                <button className="btn btn-primary" onClick={cancelHandler}><i className="fa fa-times"></i> Cancel</button>
            </div>
        </>
    );
}

export default UserCreate;
