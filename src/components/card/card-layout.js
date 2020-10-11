import React from "react";
import styles from './card-layout.module.scss';

const CardLayout = (props) => {
    return (
      <div className={styles.container}>
            {props.children}
      </div>
    );
};

export default CardLayout;