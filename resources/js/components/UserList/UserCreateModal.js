import Modal from "../UI/Modal";
import UserCreate from "./UserCreate/UserCreate";

function UserCreateModal(props) {
    return (
        <Modal>
            <UserCreate closeModal={props.closeModal} />
        </Modal>
    );
}

export default UserCreateModal;
