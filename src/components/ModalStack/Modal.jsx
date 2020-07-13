import React from 'react';
import styles from './Modal.module.scss';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.modalRoot}>
        {this.props.children}
      </div>
    );
  }
}
