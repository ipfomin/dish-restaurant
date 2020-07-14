import React from 'react';
import { Menu, MenuFloating, DishesList } from 'src/partials'
import styles from './Restaurant.module.scss'

export default class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFloatMenuVisible: false,
      dishesList: []
    }
    this.menuRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this)
    this.handleUpdateDishes = this.handleUpdateDishes.bind(this)
  }
  render() {
    return (
      <main className={styles.restaurantPage}>
        <Menu menuRef={this.menuRef} />
        { this.state.isFloatMenuVisible && <MenuFloating /> }
        <DishesList dishesList={this.state.dishesList} modalStorage={this.props.modalStorage}/>
        <div style={{height: '4000px'}}/>
      </main>
    );
  }
  handleUpdateDishes (dishesList) {
    console.log(this.props)
    this.setState({ dishesList })
  }
  handleScroll () {
    const html = document.getElementsByTagName('html')[0]
    const scrollPosition = html.scrollTop
    const menuHeight = this.menuRef.current.clientHeight
    this.setState({ isFloatMenuVisible: scrollPosition >= (menuHeight - 110) })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    const dishesList = this.props.store.getValue('dishesList')
    this.props.store.subscribe('dishesList', this.handleUpdateDishes)
    if (dishesList && dishesList.length > 0) {
      this.setState({ dishesList })
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}