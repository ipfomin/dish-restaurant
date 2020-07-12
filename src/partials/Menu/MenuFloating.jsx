import React from 'react';
import MenuLine from './MenuLine'
import styles from './MenuFloating.module.scss'

export default class MenuFloating extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.MenuFloating}>
        <MenuLine theme="dark" />
      </div>
    );
  }
}
