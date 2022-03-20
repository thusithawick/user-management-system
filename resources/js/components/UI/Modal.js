import styles from "./Modal.module.css";
import ReactDOM from 'react-dom'

function Modal(props) {
    const backdropClickHandler = () => {};

    // return (
    //     <div
    //         className={`${styles["modal"]} modal`}
    //         style={{ display: props.modalStatus }}
    //         onClick={backdropClickHandler}
    //     >
    //         <div className="modal-dialog">
    //             <div className="modal-content">{props.children}</div>
    //         </div>
    //     </div>
    // );

    // React does *not* create a new div. It renders the children into `domNode`.
    // `domNode` is any valid DOM node, regardless of its location in the DOM.
    return ReactDOM.createPortal(
        <div
            className={`${styles["modal"]} modal`}
            style={{ display: "block" }}
            onClick={backdropClickHandler}
        >
            <div className="modal-dialog">
                <div className="modal-content">{props.children}</div>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

export default Modal;
