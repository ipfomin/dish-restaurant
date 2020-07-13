import React from 'react';
import styles from './DishCard.module.scss';

export default class DishCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.dishCardRoot}>
        <img className={styles.dishImg} src="/assets/images/meat.jpg" />
        <div className={styles.categoryInfo}>
          <span>MEAT</span>
          <span>243 KCL</span>
        </div>
        <div className={styles.nameField}>
          <div className={styles.marker} />
          <div className={styles.dishName}>
            Roasted Butternut Pumpkin, Shiitake Mushroom and Haloumi Salad
          </div>
        </div>
        <div className={styles.dishDescription}>
          A hearty mix of fresh greens, roasted vegetables and golden haloumi makes up this tasty winter salad.
        </div>
        <div className={styles.priceAndPersons}>
          <div className={styles.leftData}>
            <span className={styles.symbol}>$</span>
            <span className={styles.price}>66</span>
          </div>
          <div className={styles.rightData}>
            For 2 persons
          </div>
        </div>
      </div>
    );
  }
}