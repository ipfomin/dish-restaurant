import React from 'react';
import { Menu } from 'src/partials'
import styles from './Restaurant.module.scss'

export default class Restaurant extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className={styles.restaurantPage}>
        <Menu />
        <div style={{height: '4000px'}}/>
      </main>
    );
  }
}