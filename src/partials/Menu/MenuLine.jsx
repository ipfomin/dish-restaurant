import React from 'react';
import { RestInput } from 'src/components'
import styles from './MenuLine.module.scss'

export default class MenuLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const headerClasses = `${styles.menuLine} ${this.props.theme === 'dark' ? styles.menuLineDark : '' }`
    return (
      <header className={headerClasses}>
        <div className={styles.menuWrapper}>
          <img
            className={styles.menuLineImage}
            alt="Restaurant menu background"
            src={`/assets/restaurant-logo${this.props.theme === 'dark' ? '-dark' : ''}.png`}
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
              src={`/assets/icons/user${this.props.theme === 'dark' ? '-dark' : ''}.png`}
            />
          </div>
        </div>
      </header>
    );
  }
}