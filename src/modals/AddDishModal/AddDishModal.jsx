import React from 'react';
import styles from './AddDishModal.module.scss';

export default class AddDishModal extends React.Component {
  render() {
    return (
      <div className={styles.addDishModal}>
        <div className={styles.dishModalContent}>
          <span className={styles.dishName}>Add a new dish</span>
          <span className={styles.dishDescription}>Please enter all informations about your new dish</span>
        </div>
      </div>
    );
  }
}
