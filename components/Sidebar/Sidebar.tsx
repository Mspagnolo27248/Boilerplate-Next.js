import React, { Fragment, ReactNode, useRef } from "react";

type SidebarProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ children, isOpen, onClose }) => {
  const sideBarRef = useRef<HTMLDivElement>(null);
  const clickEventHandler = (e: React.MouseEvent) => {
    if (e.target !== sideBarRef.current) {
      onClose(false);
    }
  };

  const closeEventHandler = ()=>{
    onClose(false);
  }

  if (!isOpen) {
    return null;
  }
  return (
    <Fragment>
      <div className="backdrop" onClick={clickEventHandler}></div>  
      <div className="side-bar" ref={sideBarRef}>
        <button className="close-button" onClick={closeEventHandler}>X</button>
        {children}
      </div>
    </Fragment>
  );
};

export default Sidebar;
