import React from "react";
import styles from './main-layout.module.scss';

const MainLayout = (props) => {
      
    return (
      <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.card}>
                {props.children}
            </div>
        </div>
      </div>
    );
};

export default MainLayout;