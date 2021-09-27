import React from 'react'; 
import styles from './NavBar.module.css';

const NavBar = (props) => {
    return(
        <ul id={styles.list}>
            {props.list.map((item, index) => {
                return(
                    <li id={styles.listItem}>{item}</li>
                );
            })}
        </ul>
    );
};

export default NavBar;