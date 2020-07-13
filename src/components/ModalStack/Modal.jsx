import React from 'react';
import styles from './Modal.module.scss';

export default class Modal extends React.Component {

  render () {
    if (!this.props.element) {
      return null
    }
    return (
      <div className={styles.modalRoot}>
        <div className={styles.modalContent}>
          {this.props.element}
        </div>
      </div>
    );
  }

}
