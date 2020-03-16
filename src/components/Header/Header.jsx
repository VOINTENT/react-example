import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://pbs.twimg.com/profile_images/203659312/joinha.jpg" alt="logo"/>

            <div className={styles.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
};

export default Header;