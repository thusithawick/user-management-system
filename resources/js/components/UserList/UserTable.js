import BootstrapTable from "react-bootstrap-table-next";

function UserTable(props) {
    const idFormatter = (data, row) => {
        return <strong>{data}</strong>;
    };

    const actionFormatter = (data, row) => {
        const userUpdateHandler = () => {
            //console.log('user update clicked');
            console.log("Open Update User Modal");
            console.log(row);
            props.openUpdateUser(row);
        };

        return (
            <button
                type="button"
                className="btn btn-sm btn-primary"
                style={{ float: "right" }}
                onClick={userUpdateHandler}
            >
                <i className="fa fa-eye"></i> View
            </button>
        );
    };

    const columns = [
        {
            dataField: "id",
            text: "User ID",
            sort: true,
            formatter: idFormatter,
        },
        {
            dataField: "name",
            text: "User Name",
            sort: true,
        },
        {
            dataField: "email",
            text: "User Email",
            sort: true,
        },
        {
            dataField: "age",
            text: "User Age",
            sort: true,
        },
        {
            dataField: "mobile_no",
            text: "User Mobile",
            sort: true,
        },
        {
            dataField: "action",
            text: "Action",
            formatter: actionFormatter,
        },
    ];

    return (
        <BootstrapTable
            keyField="id"
            data={props.usersList}
            columns={columns}
            striped
            condensed
            hover
        />
    );
}

export default UserTable;
