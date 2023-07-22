import React, { useContext, createContext,useState,ReactNode } from "react";
import Alert from "../components/Alert/Alert";


interface IAlertContext{
    message: string|null;
    showAlert:(message:string)=> void;
    hideAlert:()=>void;
}
const AlertContext = createContext<IAlertContext|null>(null);

export function AlertProvider({children}:{children:ReactNode}){
    const [message,setMessage] = useState<string|null>(null);

    const  showAlert = (message:string)=>{
        setMessage(message);
        setTimeout(()=>setMessage(null),4000)
    };

    const  hideAlert = ()=>{
        setMessage(null);
    };
    return (
        <AlertContext.Provider value={{message,showAlert,hideAlert}}>
            {children}
            {message && <Alert message={message} />}
        </AlertContext.Provider>
    )
}


export function useAlert(){
    const context = useContext(AlertContext);
    if(!context){
        throw new Error('useAlert must be used within an AlertProvider')
    }
//    const  {message,showAlert,hideAlert} = context;
    return context;
}

