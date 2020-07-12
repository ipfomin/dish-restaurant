import React from 'react';
import { RestInput } from 'src/components'
import styles from './Menu.module.scss'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.menuLine}>
        <div className={styles.menuWrapper}>
          <img
            className={styles.menuLineImage}
            alt="Restaurant menu background"
            src="/assets/restaurant-logo.png"
          />
          <ul className={styles.menuItems}>
            <li>Our Restaurant</li>
            <li className={styles.menuItemActive}>Menu</li>
            <li>Contact us</li>
          </ul>
          <RestInput
            className={styles.filterInput}
            placeholder="Try «Chicken cotoletta»"
          />
          <div className={styles.menuAvatar}>
            <span className={styles.userName}>John C.</span>
            <img
              className={styles.userImage}
              alt="User avatar"
              src="/assets/icons/user.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
