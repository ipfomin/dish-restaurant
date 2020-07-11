import React from 'react';
import styles from './Menu.module.scss'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className={styles.restMenu}>
        <div className={styles.labelWrapper}>
          <h1>Menu</h1>
        </div>
        <div className={styles.menuWrapper}>

        </div>
      </header>
    );
  }
}