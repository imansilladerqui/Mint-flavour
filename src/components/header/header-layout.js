import React from "react";
import styles from './header-layout.module.scss';

const HeaderLayout = (props) => {
    return (
      <div className={styles.navbar}>
        <div className={styles.row}>
          <div className={styles.container}>
            {props.children}
          </div>
        </div>
      </div>
    );
};

export default HeaderLayout;