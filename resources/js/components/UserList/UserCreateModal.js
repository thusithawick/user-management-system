import Modal from "../UI/Modal";
import UserCreate from "./UserCreate/UserCreate";

function UserCreateModal(props) {
    return (
        <Modal closeModal={props.closeModal}>
            <UserCreate
                closeModal={props.closeModal}
                updateUserList={props.updateUserList}
                showMessage={props.showMessage}
            />
        </Modal>
    );
}

export default UserCreateModal;
