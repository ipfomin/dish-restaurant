import React from 'react';
import { RestButton } from 'src/components'
import styles from './DishesList.module.scss'

export default class DishesList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.dishesListRoot}>
        <div className={styles.dishesList}>
          <div className={styles.listHeader}>
            <div className={styles.listHeaderLeft}>
              <div className={styles.leftMarker} />
              <div className={styles.rightText}>
                <h2>Meat Dishes</h2>
                <h3>Some of the best meat dishes from worldwide</h3>
              </div>
            </div>
            <div className={styles.listHeaderRight}>
              <RestButton>
                <div className={styles.buttonContent}>
                  <label>Add a new dish</label>
                  <img className={styles.buttonIcon} alt="Plus" src="/assets/icons/plus.png" />
                </div>
              </RestButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}