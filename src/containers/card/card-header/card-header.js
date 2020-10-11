import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getStatusUser} from "../../../store/actions/general-actions";
import styles from './card-header.module.scss';


const CardHeader = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.general);

    useEffect(() => {
      dispatch(getStatusUser());
    },[]);

    return (
      <div className={styles.container}>
        <h1>{state.user.name}</h1>
        <div className={styles.status}>
          <div className={(state.statusUser) ? styles.statusButtonOnline : styles.statusButtonOffline}/>
          <h6 className={styles.statusText}>{(state.statusUser) ? 'ONLINE' : 'OFFLINE'}</h6>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.messageButton}>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
};

export default CardHeader;