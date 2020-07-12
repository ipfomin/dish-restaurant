import React from 'react';
import styles from './RestButton.module.scss';

export default class RestButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.props.handleClick && this.props.handleClick(e.target.value)
  }

  render() {
    return (
      <button className={styles.restButtonRoot}>
        {this.props.children}
      </button>
    );
  }
}