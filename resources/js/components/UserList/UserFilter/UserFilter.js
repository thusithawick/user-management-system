import PreviousMap from "postcss/lib/previous-map";
import styles from "./UserFilter.module.css";

function UserFilter(props) {
    const addUserClickHandler = () => {
        props.openAddUser();
    };
    return (
        <div className={styles["user-filter-container"]}>
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <input
                            className="form-control"
                            placeholder="Search User..."
                        />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <button
                            type="button"
                            className="btn btn-warning"
                            style={{ float: "right" }}
                            onClick={addUserClickHandler}
                        >
                            <i className="fa fa-plus"></i> Add User
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserFilter;
