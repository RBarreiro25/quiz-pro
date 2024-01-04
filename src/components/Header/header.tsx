import React from 'react'
import { Link } from 'react-router-dom'
import notificationIcon from './assets/new-notification-icon.svg';
import styles from './Header.module.css';

export default function Header() {

  return (
    <header className={styles.header}>
        <Link to="./">
            <div className={styles.profile_pic}></div>
        </Link>
        <p className={styles.text}>Hello, <span>Raphael</span></p>
        <img className={styles.notifications} src={notificationIcon} alt='Notification icon with new notifications.'></img>
    </header>
  )
}
