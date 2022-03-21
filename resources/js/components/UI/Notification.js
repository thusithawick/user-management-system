import styles from "./Notification.module.css";

function Notification(props) {
    return (
        <div className={styles['notification-item']} style={{display: `${props.showNotification?'block':'none'}`}}>
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div>
    );
}

export default Notification;
