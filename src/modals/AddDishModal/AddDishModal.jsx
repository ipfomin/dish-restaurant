import React from 'react';
import { RestInput, RestTextArea, RestButton } from 'src/components'
import styles from './AddDishModal.module.scss';

export default class AddDishModal extends React.Component {

  constructor () {
    super()
    this.state = {
      dishName: '',
      dishDescription: '',
      ingredients: []
    }
    this.handleInputDishName = this.handleInputDishName.bind(this)
    this.handleInputDishDescription = this.handleInputDishDescription.bind(this)
    this.addNewIngredient = this.addNewIngredient.bind(this)
  }

  handleInputDishName (dishName) {
    this.setState({ dishName })
  }

  handleInputDishDescription (dishDescription) {
    this.setState({ dishDescription })
  }

  addNewIngredient () {
  }

  render() {
    return (
      <div className={styles.addDishModal}>
        <div className={styles.dishModalContent}>
          <span className={styles.dishName}>Add a new dish</span>
          <span className={styles.dishDescription}>Please enter all informations about your new dish</span>
          <RestInput
            className={styles.nameInput}
            placeholder="Dish name"
            handleInput={this.handleInputDishName}
          >
            <div className={styles.rightPart}>
              <span>Max, 50 Ch</span>
            </div>
          </RestInput>
          <RestTextArea
            className={styles.descriptionInput}
            placeholder="Dish description"
            handleInput={this.handleInputDishDescription}
          >
            <div className={styles.rightPart}>
              <span>Max. 150 Ch</span>
            </div>
          </RestTextArea>
          <div className={styles.ingredientsHeader}>
            <span>Ingredients</span>
            <RestButton handleClick={this.addNewIngredient}>
              <div className={styles.buttonContent}>
                <label>Add a new ingredient</label>
                <img className={styles.buttonIcon} alt="Plus" src="/assets/icons/plus.png" />
              </div>
            </RestButton>
          </div>
        </div>
      </div>
    );
  }

}
