import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import styles from './menu.module.scss';
import {getUser} from "../../store/actions/general-actions";

import profile from '../../assets/images/defaultprofile.png';


const Menu = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.general);

    useEffect(() => {
        dispatch(getUser());
    },[]);

    const mockUpAlert = (text) => {
        alert(text)
    }

    return (
      <div className={styles.container}>
        <ul className={styles.iconBlock}>
            <li onClick={()=>mockUpAlert('User List')}>
                <i className="fa fa-users" aria-hidden="true"></i>
            </li>
            <li onClick={()=>mockUpAlert('Classic Hamburger Menu')}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </li>
            <li onClick={()=>mockUpAlert('Open an input text search bar in the header')}>
                <i className="fa fa-search" aria-hidden="true"></i>
            </li>
        </ul>
        <ul className={styles.iconBlock}>
            <li onClick={()=>mockUpAlert('calendar')}>
                <i className="fa fa-calendar-o" aria-hidden="true"></i>
            </li>
            <li onClick={()=>mockUpAlert('classic <a mailto: user email/>')}>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </li>
            <li onClick={()=>mockUpAlert('edit user personal information')} className={styles.imageContainer}>
                <img src={(state.user.profileImg) ? state.user.profileImg : profile}/>
            </li>
        </ul>
      </div>
    );
};

export default Menu;