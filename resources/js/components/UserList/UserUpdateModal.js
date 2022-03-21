import Modal from "../UI/Modal";
import UserUpdate from "./UserUpdate/UserUpdate";

function UserUpdateModal(props) {
    return (
        <Modal closeModal={props.closeModal}>
            <UserUpdate
                closeModal={props.closeModal}
                selectedUser={props.selectedUser}
                updateUserList={props.updateUserList}
                showMessage={props.showMessage}
            />
        </Modal>
    );
}

export default UserUpdateModal;
