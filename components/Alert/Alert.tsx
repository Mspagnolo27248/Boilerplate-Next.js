import styles from './Alert.module.css'

interface AlertProps {
    message: string;
    type:AlertTypes
  }

export type AlertTypes =  'danger'|'success'|'warning';

const Alert: React.FC<AlertProps> = ({ message,type}) => {
    return (
        <div className={`${styles.alert} ${styles[type]}`}>
        {message}
      </div>
    );
  };
  
  export default Alert;