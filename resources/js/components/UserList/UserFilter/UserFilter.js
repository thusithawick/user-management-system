import PreviousMap from "postcss/lib/previous-map";
import { useEffect, useState } from "react";
import styles from "./UserFilter.module.css";

function UserFilter(props) {
    const [search, setSearch] = useState("");

    const addUserClickHandler = () => {
        console.log("Open Add User Modal");
        props.openAddUser();
    };

    const searchChangeHandler = (event) => {
        setSearch(event.target.value);
        console.log("search text Changed");
    };

    useEffect(() => {
        //runs once after re-evaluate only if one of the dependencies change
        const identifier = setTimeout(() => {
            console.log("Updating result!");
            props.changeSearchText(search);
        }, 500);

        return () => {
            //Cleanup function
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [search]);

    return (
        <div className={styles["user-filter-container"]}>
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <input
                            className="form-control"
                            placeholder="Search User..."
                            value={search}
                            onChange={searchChangeHandler}
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
