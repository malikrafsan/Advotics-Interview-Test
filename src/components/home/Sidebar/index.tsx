import styles from "./index.module.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className={styles.sidebarContainer}>
      <div
        className={
          (isOpen ? styles.sidebarFloatingOpen : styles.sidebarFloatingClose) +
          " position-fixed"
        }
      >
        <div className={styles.hamburgerIconContainer}>
          <Hamburger size={20} color="#C5C5C5" onToggle={() => handleClick()} />
        </div>
        <div
          className={
            styles.sidebarButton +
            " d-flex justify-content-center align-items-center"
          }
        >
          <div className={styles.sidebarIcon}>
            <img src="/assets/dashboard-icon.svg" alt="dashboard-icon" />
          </div>
          <p className="my-0 ms-2 fw-bold">{isOpen ? "Dashboard" : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
