import React from 'react';
import MenuLine from './MenuLine'
import styles from './Menu.module.scss'

export default class Menu extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <section className={styles.restMenu} ref={this.props.menuRef}>
        <MenuLine />
        <div className={styles.labelWrapper}>
          <h1>Menu</h1>
        </div>
      </section>
    );
  }
}
