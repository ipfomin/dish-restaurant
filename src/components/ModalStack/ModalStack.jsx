import React from 'react';
import styles from './ModalStack.module.scss';

export default class ModalStack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.modalStackRoot}>
        {this.props.children}
      </div>
    );
  }
}