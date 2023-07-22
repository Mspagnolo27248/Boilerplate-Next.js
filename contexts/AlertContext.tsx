import React, { useContext,  createContext,  useState,ReactNode,useRef,} from "react";
import Alert from "../components/Alert/Alert";
import { AlertTypes } from "../components/Alert/Alert";


interface IAlertContext {
  message: string | null;
  type: AlertTypes;
  danger: (message: string) => void;
  warning: (message: string) => void;
  success: (message: string) => void;
}

const AlertContext = createContext<IAlertContext | null>(null);

export function AlertProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<AlertTypes>("danger");
  const timeoutRef = useRef<number | NodeJS.Timeout | null>(null);

  const showMessage = (message: string, type: AlertTypes) => {
    setMessage(message);
    setType(type);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setMessage(null);
    }, 4000);
  };

  const danger = (message: string) => {
    showMessage(message, "danger");
  };

  const success = (message: string) => {
    showMessage(message, "success");
  };

  const warning = (message: string) => {
    showMessage(message, "warning");
  };

  return (
    <AlertContext.Provider value={{ message, type, danger, success, warning }}>
      {children}
      {message && <Alert message={message} type={type} />}
    </AlertContext.Provider>
  );
}

/**
 * Functions that Show Alerts.
 * @function danger - Displays an alert of type 'danger' with the provided message. The alert will automatically disappear after 4 seconds.
 * @function  success - Displays an alert of type 'success' with the provided message. The alert will automatically disappear after 4 seconds.
 * @function warning - Displays an alert of type 'warning' with the provided message. The alert will automatically disappear after 4 seconds.
 */
export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  //    const  {message,showAlert,hideAlert} = context;
  return context;
}
