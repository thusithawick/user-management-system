import styles from "./Modal.module.css";
import ReactDOM from 'react-dom'

function Modal(props) {
    const backdropClickHandler = () => {
        console.log("back drop close modal");
        props.closeModal();
    };
    const preventPgHandler = (event) => {
        event.stopPropagation();
    };

    return ReactDOM.createPortal(
        <div
            className={`${styles["modal"]} modal`}
            style={{ display: "block" }}
            onClick={backdropClickHandler}
        >
            <div className="modal-dialog" onClick={preventPgHandler}>
                <div className="modal-content">{props.children}</div>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

export default Modal;
