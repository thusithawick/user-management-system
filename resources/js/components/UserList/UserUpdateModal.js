import Modal from "../UI/Modal";
import UserUpdate from "./UserUpdate/UserUpdate";

function UserUpdateModal(props) {
    return (
        <Modal>
            <UserUpdate closeModal={props.closeModal} selectedUser={props.selectedUser}/>
        </Modal>
    );
}

export default UserUpdateModal;
