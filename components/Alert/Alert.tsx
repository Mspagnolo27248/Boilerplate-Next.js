import styles from './Alert.module.css'

interface AlertProps {
    message: string;
  }

const Alert: React.FC<AlertProps> = ({ message}) => {
    return (
        <div className={`${styles.alert} ${styles.danger}`}>
        {message}
      </div>
    );
  };
  
  export default Alert;