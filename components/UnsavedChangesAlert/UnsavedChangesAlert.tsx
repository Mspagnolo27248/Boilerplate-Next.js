import React, { useEffect } from 'react';

interface UnsavedChangesAlertProps {
  hasUnsavedChanges: boolean;
}

const UnsavedChangesAlert: React.FC<UnsavedChangesAlertProps> = ({
  hasUnsavedChanges
}) => {



      // Event listener to detect navigation/refresh
  useEffect(() => {
    const handleBeforeUnload = (e:BeforeUnloadEvent)=>{
        if(hasUnsavedChanges){
        const confrimationMessage = "You have unsaved changes. Are you sure you want to leave ?";
        e.returnValue = confrimationMessage;
        return confrimationMessage;
        }
    }
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasUnsavedChanges]);
  return null;
};

export default UnsavedChangesAlert;
