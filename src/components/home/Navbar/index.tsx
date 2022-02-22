import styles from "./index.module.css";

const Navbar = () => {
  return (
    <div
      className={
        styles.navbarContainer
      }
    >
      <div className={styles.navbarFloating + " d-flex align-items-center justify-content-between flex-column flex-md-row"}>
        <div className={styles.companyContainer}>
          <img src="/assets/advotics-logo.png" alt="advotics logo" />
        </div>
        <div className={styles.userContainer + " d-flex mt-2 mt-md-0"}>
          <div className={styles.userInfo}>
            <h2>Username</h2>
            <p>CompanyName</p>
          </div>
          <div className={styles.avatarContainer}>
            <img src="/assets/Profile.svg" alt="avatar logo" />
          </div>
          <div className={styles.signout}>
            <img src="/assets/logout.png" alt="signout" />
          </div>
        </div>
      </div>
      <div className={styles.navbarPlaceholder}></div>
    </div>
  );
};

export default Navbar;
